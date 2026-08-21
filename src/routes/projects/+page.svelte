<script lang="ts">
  import { onMount } from "svelte";
  import type { Project } from "$lib/projects-types";
  import {
    allProjects,
    getCategoryColorClasses,
    getEmbedUrl,
    getProjectThumbnail,
    getYouTubeId,
    parseCompletionDate,
  } from "$lib/projects-types";
  import Icon from "$lib/Icon.svelte";

  let categoryFilter = "";
  let dateFilter = "";
  let sortBy = "newest";
  let currentPage = 1;
  let imageLoadingStates: { [key: string]: boolean } = {};
  // Initialize with sorted projects (most recent first)
  let filteredProjects: Project[] = [...allProjects].sort(
    (a, b) =>
      parseCompletionDate(b.completionDate) -
      parseCompletionDate(a.completionDate)
  );
  const projectsPerPage = 6;
  let showModal = false;
  let modalUrl = "";
  let iframeUrl = "";
  let modalTitle = "";
  let activeProjectId: number | null = null;
  let isLoading = false;
  let isBlockedSite = false;
  let copyStatus: "idle" | "copied" | "error" = "idle";
  let copyResetTimer: ReturnType<typeof setTimeout> | null = null;

  // Sites that block iframe embedding (YouTube watch URLs are converted to
  // /embed/ form in getEmbedUrl so they no longer count as blocked).
  const blockedDomains = ["figma.com", "notion.so", "miro.com"];

  function checkIfBlocked(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return blockedDomains.some((domain) => urlObj.hostname.includes(domain));
    } catch {
      return false;
    }
  }

  function syncUrlWithProject(id: number | null) {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (id === null) {
      url.searchParams.delete("id");
    } else {
      url.searchParams.set("id", String(id));
    }
    const newRelative = url.pathname + (url.search ? url.search : "") + url.hash;
    const currentRelative =
      window.location.pathname + window.location.search + window.location.hash;
    if (newRelative !== currentRelative) {
      window.history.replaceState({}, "", newRelative);
    }
  }

  function openModal(project: Project) {
    modalUrl = project.links;
    iframeUrl = getEmbedUrl(project.links);
    modalTitle = project.title;
    activeProjectId = project.id;
    showModal = true;
    isBlockedSite = checkIfBlocked(iframeUrl);
    isLoading = !isBlockedSite; // Don't show loading if site is blocked
    copyStatus = "idle";
    syncUrlWithProject(project.id);
  }

  function closeModal() {
    showModal = false;
    modalUrl = "";
    iframeUrl = "";
    modalTitle = "";
    activeProjectId = null;
    isLoading = false;
    isBlockedSite = false;
    copyStatus = "idle";
    if (copyResetTimer) {
      clearTimeout(copyResetTimer);
      copyResetTimer = null;
    }
    syncUrlWithProject(null);
  }

  async function shareProjectLink() {
    if (typeof window === "undefined" || activeProjectId === null) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}?id=${activeProjectId}`;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = shareUrl;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      copyStatus = "copied";
    } catch {
      copyStatus = "error";
    }
    if (copyResetTimer) clearTimeout(copyResetTimer);
    copyResetTimer = setTimeout(() => {
      copyStatus = "idle";
    }, 2000);
  }

  function handleIframeLoad() {
    isLoading = false;
  }

  function openInNewTab() {
    window.open(modalUrl, "_blank");
    closeModal();
  }

  function markImageResolved(projectId: string) {
    imageLoadingStates[projectId] = false;
    imageLoadingStates = { ...imageLoadingStates };
  }

  function handleImageError(projectId: string, event: Event) {
    markImageResolved(projectId);
    // Set fallback placeholder image
    const img = event.target as HTMLImageElement;
    img.src =
      "https://placehold.co/600x400/0e0e12/c8ff2e?text=Project+Image";
  }

  // Svelte action: handles the case where the image is already cached when
  // the element mounts (the load event already fired and the on:load listener
  // would miss it). Fires the resolve callback immediately if `complete`.
  function trackImageLoad(node: HTMLImageElement, projectId: string) {
    const resolve = () => markImageResolved(projectId);
    if (node.complete && node.naturalWidth !== 0) {
      // Cached: load already happened before this listener attached.
      resolve();
    } else if (node.complete && node.naturalWidth === 0) {
      // Cached error.
      handleImageError(projectId, { target: node } as unknown as Event);
    } else {
      node.addEventListener("load", resolve);
      node.addEventListener("error", resolve);
    }
    return {
      destroy() {
        node.removeEventListener("load", resolve);
        node.removeEventListener("error", resolve);
      },
    };
  }

  // Initialize loading states for all projects
  $: {
    currentProjects.forEach((project) => {
      if (!(project.title in imageLoadingStates)) {
        imageLoadingStates[project.title] = true;
      }
    });
  }

  function applyFilters() {
    let result = [...allProjects];

    if (categoryFilter) {
      result = result.filter((project) => project.category === categoryFilter);
    }

    if (dateFilter) {
      result = result.filter((project) => project.completionYear === dateFilter);
    }

    // Sorting
    switch (sortBy) {
      case "oldest":
        result.sort(
          (a, b) =>
            parseCompletionDate(a.completionDate) -
            parseCompletionDate(b.completionDate)
        );
        break;
      case "a-z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "newest":
      default:
        result.sort(
          (a, b) =>
            parseCompletionDate(b.completionDate) -
            parseCompletionDate(a.completionDate)
        );
    }

    filteredProjects = result;
    currentPage = 1;
  }

  function resetFilters() {
    categoryFilter = "";
    dateFilter = "";
    sortBy = "newest";
  }

  // Initialize on mount and sort by most recent
  onMount(() => {
    applyFilters();

    // Open modal from shareable URL (?id=N)
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");
    if (idParam) {
      const parsedId = Number(idParam);
      if (!Number.isNaN(parsedId)) {
        const project = allProjects.find((p) => p.id === parsedId);
        if (project) {
          openModal(project);
        } else {
          // Invalid id — clean it from the URL
          syncUrlWithProject(null);
        }
      }
    }
  });

  // Close only when the backdrop itself is clicked, not the dialog contents.
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) closeModal();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && showModal) closeModal();
  }

  // React to filter/sort changes
  $: categoryFilter, dateFilter, sortBy, applyFilters();

  $: indexOfLastProject = currentPage * projectsPerPage;
  $: indexOfFirstProject = indexOfLastProject - projectsPerPage;
  $: currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  $: totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  function paginate(pageNumber: number) {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      currentPage = pageNumber;
    }
  }

  $: pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  $: filtersActive =
    categoryFilter !== "" || dateFilter !== "" || sortBy !== "newest";

  // Get unique years from projects and sort them (newest first)
  $: availableYears = [...new Set(allProjects.map((p) => p.completionYear))].sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  // Build category options from projects that actually exist, so empty
  // categories don't appear in the dropdown.
  $: availableCategories = (() => {
    const seen = new Map<string, string>();
    for (const p of allProjects) {
      if (!seen.has(p.category)) seen.set(p.category, p.categoryLabel);
    }
    return Array.from(seen, ([value, label]) => ({ value, label })).sort((a, b) =>
      a.label.localeCompare(b.label)
    );
  })();

  $: activeProject =
    activeProjectId !== null
      ? (allProjects.find((p) => p.id === activeProjectId) ?? null)
      : null;
  $: pageTitle = activeProject
    ? `${activeProject.title} — Muhamad Rafli`
    : "Projects — Muhamad Rafli";
  $: pageDescription = activeProject
    ? activeProject.description
    : "Explore projects by Muhamad Rafli — web apps, AI integrations, UI/UX work, and more.";
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <link rel="canonical" href="https://wimpoge.github.io/projects" />
  <meta property="og:url" content="https://wimpoge.github.io/projects" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="min-h-screen bg-bg font-sans text-fg">
  <header class="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <a href="/" class="flex h-full items-center gap-2.5 font-mono text-sm">
        <span
          class="grid h-7 w-7 place-items-center border border-line-bright bg-raised text-accent"
          aria-hidden="true">/</span
        >
        <span class="font-bold tracking-tight">muhamad rafli</span>
      </a>
      <a
        href="/"
        class="group inline-flex min-h-11 items-center gap-2 font-mono text-sm text-dim transition-colors hover:text-accent"
      >
        <span class="transition-transform group-hover:-translate-x-1">←</span>
        back home
      </a>
    </div>
  </header>

  <div class="mx-auto max-w-6xl px-5 py-14 sm:px-8">
    <div class="border-b border-line pb-6">
      <p class="font-mono text-xs tracking-widest text-faint">INDEX / PROJECTS</p>
      <h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
      <p class="mt-3 max-w-xl text-dim">
        Explore my latest work and innovations — web apps, AI integrations, and
        UI/UX experiments.
      </p>
    </div>

    <div class="mt-8 border border-line bg-surface">
      <div class="grid gap-px bg-line sm:grid-cols-3">
        <label class="block bg-surface p-4">
          <span class="mb-2 block font-mono text-xs tracking-widest text-faint">
            CATEGORY
          </span>
          <div class="relative">
            <select
              class="min-h-11 w-full appearance-none border border-line bg-bg px-3 py-2.5 pr-9 font-mono text-sm text-fg transition-colors hover:border-line-bright focus:border-accent focus:outline-none"
              bind:value={categoryFilter}
            >
              <option value="">all categories</option>
              {#each availableCategories as cat}
                <option value={cat.value}>{cat.label}</option>
              {/each}
            </select>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 font-mono text-xs text-faint"
              aria-hidden="true">▾</span
            >
          </div>
        </label>

        <label class="block bg-surface p-4">
          <span class="mb-2 block font-mono text-xs tracking-widest text-faint">
            YEAR
          </span>
          <div class="relative">
            <select
              class="min-h-11 w-full appearance-none border border-line bg-bg px-3 py-2.5 pr-9 font-mono text-sm text-fg transition-colors hover:border-line-bright focus:border-accent focus:outline-none"
              bind:value={dateFilter}
            >
              <option value="">all years</option>
              {#each availableYears as year}
                <option value={year}>{year}</option>
              {/each}
            </select>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 font-mono text-xs text-faint"
              aria-hidden="true">▾</span
            >
          </div>
        </label>

        <label class="block bg-surface p-4">
          <span class="mb-2 block font-mono text-xs tracking-widest text-faint">
            SORT
          </span>
          <div class="relative">
            <select
              class="min-h-11 w-full appearance-none border border-line bg-bg px-3 py-2.5 pr-9 font-mono text-sm text-fg transition-colors hover:border-line-bright focus:border-accent focus:outline-none"
              bind:value={sortBy}
            >
              <option value="newest">newest first</option>
              <option value="oldest">oldest first</option>
              <option value="a-z">a → z</option>
              <option value="z-a">z → a</option>
            </select>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 font-mono text-xs text-faint"
              aria-hidden="true">▾</span
            >
          </div>
        </label>
      </div>

      <div
        class="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3 font-mono text-xs text-faint"
      >
        <span class="flex flex-wrap items-center gap-x-1.5">
          <span>
            <span class="text-accent">{filteredProjects.length}</span>
            {filteredProjects.length === 1 ? "result" : "results"}
          </span>
          {#if totalPages > 1}
            <span class="text-line-bright" aria-hidden="true">·</span>
            <span>page {currentPage}/{totalPages}</span>
          {/if}
        </span>
        {#if filtersActive}
          <button
            type="button"
            on:click={resetFilters}
            class="inline-flex min-h-11 items-center transition-colors hover:text-accent"
            >reset filters ✕</button
          >
        {/if}
      </div>
    </div>

    {#if currentProjects.length > 0}
      <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {#each currentProjects as project, i (project.id)}
          {@const colors = getCategoryColorClasses(project.categoryColor)}
          <button
            type="button"
            on:click={() => openModal(project)}
            class="group flex h-full flex-col border border-line bg-surface text-left transition-colors hover:border-line-bright hover:bg-raised"
          >
            <div class="relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-raised">
              {#if imageLoadingStates[project.title]}
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="spinner"></div>
                </div>
              {/if}
              <img
                src={getProjectThumbnail(project)}
                alt={project.title}
                width="600"
                height="400"
                loading={currentPage === 1 && i === 0 ? "eager" : "lazy"}
                fetchpriority={currentPage === 1 && i === 0 ? "high" : "auto"}
                decoding="async"
                class="thumb h-full w-full object-cover group-hover:scale-105 {imageLoadingStates[
                  project.title
                ]
                  ? 'opacity-0'
                  : 'opacity-100'}"
                use:trackImageLoad={project.title}
                on:error={(e) => handleImageError(project.title, e)}
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-20"
              ></div>
              <span
                class="absolute top-3 left-3 border px-2 py-0.5 font-mono text-[0.65rem] backdrop-blur-sm transition-colors {colors.bg} {colors.text} {colors.hoverBg}"
              >
                {project.categoryLabel}
              </span>
            </div>

            <div class="flex flex-1 flex-col p-5">
              <h3
                class="text-lg font-semibold transition-colors group-hover:text-accent"
              >
                {project.title}
              </h3>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-dim">
                {project.description}
              </p>
              <div
                class="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-xs"
              >
                <span class="text-faint">{project.completionDate}</span>
                <span
                  class="inline-flex items-center gap-1.5 text-dim transition-colors group-hover:text-accent"
                >
                  {getYouTubeId(project.links) ? "watch demo" : "live demo"}
                  <span class="transition-transform group-hover:translate-x-1"
                    >→</span
                  >
                </span>
              </div>
            </div>
          </button>
        {/each}
      </div>
    {:else}
      <div class="mt-8 border border-dashed border-line-bright p-16 text-center">
        <p class="font-mono text-sm text-dim">no projects match your filters.</p>
        <button
          type="button"
          on:click={resetFilters}
          class="mt-4 border border-accent px-4 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          reset filters
        </button>
      </div>
    {/if}

    {#if totalPages > 1}
      <nav
        class="mt-10 flex flex-wrap items-center justify-center gap-2 font-mono text-sm"
        aria-label="Pagination"
      >
        <button
          on:click={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          class="grid h-11 w-11 place-items-center border transition-colors {currentPage ===
          1
            ? 'cursor-not-allowed border-line text-line-bright'
            : 'border-line-bright text-dim hover:border-accent hover:text-accent'}"
        >
          <span class="sr-only">Previous</span>
          <span aria-hidden="true">←</span>
        </button>

        {#each pageNumbers as number}
          {@const showPageNumber =
            number === 1 ||
            number === totalPages ||
            (number >= currentPage - 1 && number <= currentPage + 1)}
          {#if showPageNumber}
            <button
              on:click={() => paginate(number)}
              aria-current={currentPage === number ? "page" : undefined}
              class="grid h-11 w-11 place-items-center border transition-colors {currentPage ===
              number
                ? 'border-accent bg-accent font-bold text-bg'
                : 'border-line text-dim hover:border-accent hover:text-accent'}"
            >
              {number}
            </button>
          {/if}
        {/each}

        <button
          on:click={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          class="grid h-11 w-11 place-items-center border transition-colors {currentPage ===
          totalPages
            ? 'cursor-not-allowed border-line text-line-bright'
            : 'border-line-bright text-dim hover:border-accent hover:text-accent'}"
        >
          <span class="sr-only">Next</span>
          <span aria-hidden="true">→</span>
        </button>
      </nav>
    {/if}
  </div>
</div>

{#if showModal}
  <div
    class="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
    style="animation: fadeIn 0.2s ease-out;"
    on:click={handleBackdropClick}
    on:keydown={handleKeydown}
    role="dialog"
    aria-modal="true"
    aria-label={modalTitle}
    tabindex="-1"
  >
    <div
      class="flex h-[92dvh] max-h-[92dvh] w-full max-w-6xl flex-col border border-line-bright bg-surface shadow-2xl"
      style="animation: slideUp 0.3s ease-out;"
    >
      <div class="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
        <div class="flex min-w-0 items-center gap-2.5 font-mono text-sm">
          <span class="h-2.5 w-2.5 shrink-0 rounded-full bg-accent"></span>
          <span class="truncate text-fg">{modalTitle}</span>
        </div>
        <button
          type="button"
          on:click={closeModal}
          class="shrink-0 p-1.5 text-dim transition-colors hover:text-accent"
          aria-label="Close modal"
        >
          <Icon name="close" size="1.5rem" />
        </button>
      </div>

      <div
        class="flex flex-wrap items-center gap-3 border-b border-line bg-raised px-4 py-2.5"
      >
        <span class="text-faint"><Icon name="lock" size="1rem" label="Secure" /></span>
        <div
          class="min-w-[10rem] flex-1 truncate border border-line bg-bg px-3 py-1.5 font-mono text-xs text-dim"
        >
          {modalUrl}
        </div>
        <button
          type="button"
          on:click={shareProjectLink}
          class="inline-flex shrink-0 items-center gap-1.5 min-h-10 border px-3 py-2 font-mono text-xs transition-colors {copyStatus ===
          'copied'
            ? 'border-accent text-accent'
            : copyStatus === 'error'
              ? 'border-rose text-rose'
              : 'border-line-bright text-dim hover:border-accent hover:text-accent'}"
          aria-label="Copy shareable link"
        >
          <Icon
            name={copyStatus === "copied"
              ? "check"
              : copyStatus === "error"
                ? "error"
                : "share"}
            size="1rem"
          />
          {copyStatus === "copied"
            ? "link copied"
            : copyStatus === "error"
              ? "copy failed"
              : "share link"}
        </button>
        <button
          type="button"
          on:click={() => window.open(modalUrl, "_blank")}
          class="min-h-10 shrink-0 border border-line-bright px-3 py-2 font-mono text-xs text-dim transition-colors hover:border-accent hover:text-accent"
        >
          open in new tab
        </button>
      </div>

      <div class="relative flex-1 overflow-hidden bg-bg">
        {#if isBlockedSite}
          <div
            class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
          >
            <div class="grid h-16 w-16 place-items-center border border-amber/40 text-amber">
              <Icon name="warning" size="2rem" label="Warning" />
            </div>
            <h3 class="mt-5 text-xl font-bold">Can't display this page</h3>
            <p class="mt-3 max-w-md text-sm leading-relaxed text-dim">
              For security reasons, this website doesn't allow embedding in
              iframes. This is common for platforms like Figma, Notion, and
              others.
            </p>
            <p
              class="mt-5 max-w-md border-l-2 border-amber bg-raised p-3.5 text-left text-xs leading-relaxed text-dim"
            >
              <strong class="text-fg">Solution:</strong> open this link in a new browser
              tab to view the content.
            </p>
            <button
              type="button"
              on:click={openInNewTab}
              class="mt-7 border border-accent bg-accent px-6 py-2.5 font-mono text-sm font-bold text-bg transition-colors hover:bg-transparent hover:text-accent"
            >
              open in new tab
            </button>
          </div>
        {:else}
          {#if isLoading}
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg">
              <div class="spinner"></div>
              <p class="mt-4 font-mono text-xs text-faint">loading demo…</p>
            </div>
          {/if}
          <iframe
            src={iframeUrl}
            title={modalTitle || "Live Demo"}
            class="h-full w-full border-0 bg-white"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            on:load={handleIframeLoad}
          ></iframe>
        {/if}
      </div>
    </div>
  </div>
{/if}
