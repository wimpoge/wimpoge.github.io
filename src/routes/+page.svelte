<script lang="ts">
  import profile from "$lib/images/profile.jpg";
  import cv from "$lib/Muhamad_Rafli_CV.pdf";
  import Icon from "$lib/Icon.svelte";
  import {
    allProjects,
    getEmbedUrl,
    getProjectThumbnail,
    getYouTubeId,
    parseCompletionDate,
  } from "$lib/projects-types";

  const EMAIL = "mhmd.rafli.32e@gmail.com";

  let menuOpen = false;
  let showModal = false;
  let modalUrl = "";
  let iframeUrl = "";
  let isLoading = false;
  let isBlockedSite = false;

  // Three newest projects, by completion date.
  const featuredProjects = [...allProjects]
    .sort(
      (a, b) =>
        parseCompletionDate(b.completionDate) -
        parseCompletionDate(a.completionDate)
    )
    .slice(0, 3);

  const navItems = [
    { label: "about", href: "#about" },
    { label: "work", href: "#work" },
    { label: "experience", href: "#experience" },
    { label: "skills", href: "#skills" },
  ];

  const stats = [
    { value: "2+", label: "years shipping" },
    { value: String(allProjects.length), label: "projects built" },
    { value: "8", label: "stacks in use" },
  ];

  const skillGroups = [
    {
      icon: "code",
      name: "frontend",
      items: [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "SvelteKit",
      ],
    },
    {
      icon: "design_services",
      name: "ui / ux",
      items: [
        "Responsive Design",
        "Tailwind CSS",
        "Figma",
        "shadcn/ui",
        "Aceternity UI",
        "Bootstrap",
      ],
    },
    {
      icon: "dns",
      name: "backend",
      items: ["Python", "FastAPI", "Node.js", "Express.js", "REST API"],
    },
    {
      icon: "storage",
      name: "databases",
      items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    { icon: "smartphone", name: "mobile", items: ["Flutter"] },
    {
      icon: "auto_awesome",
      name: "ai",
      items: ["OpenAI API", "CrewAI", "Prompt Engineering", "HuggingFace"],
    },
    {
      icon: "cloud",
      name: "cloud / devops",
      items: ["AWS EC2", "PM2", "Docker"],
    },
    { icon: "build", name: "tooling", items: ["Git/GitHub", "Conda"] },
  ];

  const socials = [
    { name: "github", href: "https://github.com/wimpoge", label: "GitHub" },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/muhamad-rafli-80a3491b9",
      label: "LinkedIn",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/mhmdrafli.____",
      label: "Instagram",
    },
  ];

  const bercaFullStack = [
    "Build and maintain REST APIs using Python & FastAPI.",
    "Design and manage databases with PostgreSQL and MySQL.",
    "Integrate AI capabilities using OpenAI API, CrewAI, and Prompt Engineering.",
    "Deploy and manage applications on AWS EC2 with PM2 and Docker.",
    "Develop cross-platform mobile apps using Flutter.",
    "Continue building front-end interfaces with React, Next.js, and SvelteKit.",
  ];

  const bercaFrontEnd = [
    "Implemented AI models into the front end via REST API and direct integrations.",
    "Developed UI using Next.js and SvelteKit.",
    "Built complex applications integrating AI technologies to enhance user experience.",
  ];

  const semestaItems = [
    "Developed projects for government agencies.",
    "Implemented File Extraction feature to extract content from a file.",
    "Developed Tracking Gmaps Location feature based on Phone Number.",
    "Created Role Management for specified feature access.",
    "Implemented Export File pdf and excel features.",
    "Created Chart Diagram based on available data.",
  ];

  const gunadarmaItems = [
    "Responsible for creating online classes and managing student grades.",
    "Maintained laboratory environment such as computers, networks, CCTV.",
    "Designed certificates and letters of recommendation for Assistants and Programmers.",
  ];

  // Sites that block iframe embedding (YouTube watch URLs are converted to
  // /embed/ form in getEmbedUrl so they no longer count as blocked).
  const blockedDomains = ["figma.com", "notion.so", "miro.com"];

  function checkIfBlocked(url: string) {
    try {
      const urlObj = new URL(url);
      return blockedDomains.some((domain) => urlObj.hostname.includes(domain));
    } catch {
      return false;
    }
  }

  function openModal(url: string) {
    modalUrl = url;
    iframeUrl = getEmbedUrl(url);
    showModal = true;
    isBlockedSite = checkIfBlocked(iframeUrl);
    isLoading = !isBlockedSite; // Don't show loading if site is blocked
  }

  function closeModal() {
    showModal = false;
    modalUrl = "";
    iframeUrl = "";
    isLoading = false;
    isBlockedSite = false;
  }

  function handleIframeLoad() {
    isLoading = false;
  }

  function openInNewTab() {
    window.open(modalUrl, "_blank");
    closeModal();
  }

  function downloadCV() {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Muhamad_Rafli_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleNavClick(event: Event, sectionId: string) {
    event.preventDefault();
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
    menuOpen = false;
  }

  // Close only when the backdrop itself is clicked, not the dialog contents.
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) closeModal();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && showModal) closeModal();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="min-h-screen bg-bg font-sans text-fg">
  <header class="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <a href="#top" class="flex h-full items-center gap-2.5 font-mono text-sm">
        <span
          class="grid h-7 w-7 place-items-center border border-line-bright bg-raised text-accent"
          aria-hidden="true">/</span
        >
        <span class="font-bold tracking-tight">muhamad rafli</span>
      </a>

      <nav class="hidden md:block">
        <ul class="flex items-center gap-8 font-mono text-sm text-dim">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                on:click={(e) => handleNavClick(e, item.href)}
                class="link-sweep transition-colors hover:text-fg">{item.label}</a
              >
            </li>
          {/each}
        </ul>
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="mailto:{EMAIL}"
          class="hidden border border-accent bg-accent px-4 py-2 font-mono text-sm font-bold text-bg transition-colors hover:bg-transparent hover:text-accent md:inline-block"
        >
          contact
        </a>
        <button
          class="-mr-2 grid h-11 w-11 place-items-center text-fg md:hidden"
          on:click={() => (menuOpen = !menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} size="1.6rem" />
        </button>
      </div>
    </div>

    {#if menuOpen}
      <div class="border-t border-line bg-surface md:hidden">
        <ul class="mx-auto max-w-6xl px-5 py-4 font-mono text-sm">
          {#each navItems as item, i}
            <li class="border-b border-line last:border-0">
              <a
                href={item.href}
                on:click={(e) => handleNavClick(e, item.href)}
                class="flex min-h-11 items-center gap-3 py-3.5 text-dim transition-colors hover:text-accent"
              >
                <span class="text-faint">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          {/each}
          <li class="pt-4">
            <a
              href="mailto:{EMAIL}"
              class="block border border-accent bg-accent px-4 py-2.5 text-center font-bold text-bg"
              >contact</a
            >
          </li>
        </ul>
      </div>
    {/if}
  </header>

  <section id="top" class="relative overflow-hidden border-b border-line">
    <div class="grid-backdrop absolute inset-0" aria-hidden="true"></div>
    <div
      class="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      aria-hidden="true"
    ></div>

    <div
      class="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
    >
      <div>
        <p
          class="mb-6 inline-flex items-center gap-2 border border-line bg-surface px-3 py-1.5 font-mono text-xs text-dim"
        >
          <span class="relative flex h-1.5 w-1.5">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"
            ></span>
            <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent"></span>
          </span>
          available for work — Depok, ID
        </p>

        <h1 class="text-[2.6rem] leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Full-stack<br />
          <span class="text-accent">developer</span><br />
          <span class="text-dim">building for web &amp; mobile.</span>
        </h1>

        <p class="mt-7 max-w-xl font-mono text-sm leading-relaxed text-dim sm:text-base">
          <span class="text-accent">&gt;</span> I build responsive, user-friendly
          applications end to end — from front-end interfaces to REST APIs,
          databases, and AI integrations.<span class="caret"></span>
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#work"
            on:click={(e) => handleNavClick(e, "#work")}
            class="group inline-flex items-center justify-center gap-2 border border-accent bg-accent px-6 py-3 font-mono text-sm font-bold text-bg transition-colors hover:bg-transparent hover:text-accent"
          >
            view work
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <button
            type="button"
            on:click={downloadCV}
            class="inline-flex items-center justify-center gap-2 border border-line-bright px-6 py-3 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
          >
            download cv
          </button>
        </div>

        <div class="mt-9 flex items-center gap-3">
          {#each socials as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener"
              aria-label={social.label}
              class="grid h-11 w-11 place-items-center border border-line text-dim transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name={social.name} size="1.1rem" />
            </a>
          {/each}
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-sm lg:mx-0">
        <div class="relative border border-line bg-surface p-2.5">
          <span
            class="absolute -top-px -left-px h-3 w-3 border-t border-l border-accent"
            aria-hidden="true"
          ></span>
          <span
            class="absolute -top-px -right-px h-3 w-3 border-t border-r border-accent"
            aria-hidden="true"
          ></span>
          <span
            class="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-accent"
            aria-hidden="true"
          ></span>
          <span
            class="absolute -right-px -bottom-px h-3 w-3 border-r border-b border-accent"
            aria-hidden="true"
          ></span>

          <img
            src={profile}
            alt="Muhamad Rafli"
            width="960"
            height="1280"
            fetchpriority="high"
            decoding="async"
            class="aspect-[3/4] w-full object-cover brightness-105 contrast-105 saturate-105"
          />
        </div>

        <dl class="mt-4 grid grid-cols-3 divide-x divide-line border border-line bg-surface font-mono">
          {#each stats as stat}
            <div class="px-3 py-3 text-center">
              <dt class="sr-only">{stat.label}</dt>
              <dd>
                <span class="block text-xl font-bold text-accent">{stat.value}</span>
                <span class="mt-0.5 block text-[0.65rem] text-faint">{stat.label}</span>
              </dd>
            </div>
          {/each}
        </dl>
      </div>
    </div>
  </section>

  <section id="about" class="border-b border-line">
    <div
      class="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.3fr_0.7fr]"
    >
      <div>
        <p class="font-mono text-xs tracking-widest text-faint">01 / ABOUT</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Who I am</h2>
      </div>

      <div>
        <p class="text-lg leading-relaxed text-dim">
          I'm a developer with <span class="text-fg">2+ years of experience</span>
          specializing in front-end development, recently transitioning into
          full-stack. I translate design concepts into clean, efficient code that
          delivers exceptional user experiences.
        </p>
        <p class="mt-5 leading-relaxed text-dim">
          My work has expanded beyond the front end — I now build REST APIs, work
          with databases, integrate AI capabilities, and deploy applications on
          cloud infrastructure. I'm constantly learning and experimenting with new
          technologies to grow as a well-rounded developer.
        </p>

        <dl class="mt-9 divide-y divide-line border-y border-line font-mono text-sm">
          <div class="flex flex-col gap-1 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:py-3.5">
            <dt class="flex items-center gap-2 text-faint sm:w-32">
              <Icon name="mail" size="1rem" /> email
            </dt>
            <dd>
              <a
                href="mailto:{EMAIL}"
                class="link-sweep inline-flex min-h-11 items-center break-all text-fg transition-colors hover:text-accent sm:min-h-0"
                >{EMAIL}</a
              >
            </dd>
          </div>
          <div class="flex flex-col gap-1 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:py-3.5">
            <dt class="flex items-center gap-2 text-faint sm:w-32">
              <Icon name="location_on" size="1rem" /> location
            </dt>
            <dd class="text-fg">Depok, Indonesia</dd>
          </div>
          <div class="flex flex-col gap-1 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:py-3.5">
            <dt class="flex items-center gap-2 text-faint sm:w-32">
              <Icon name="code" size="1rem" /> focus
            </dt>
            <dd class="text-fg">Full-stack · AI integration · Mobile</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <section id="work" class="border-b border-line bg-surface/40">
    <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
      <div class="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
        <div>
          <p class="font-mono text-xs tracking-widest text-faint">02 / WORK</p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Latest projects
          </h2>
        </div>
        <a
          href="/projects"
          class="group inline-flex min-h-11 items-center gap-2 font-mono text-sm text-dim transition-colors hover:text-accent"
        >
          view all ({allProjects.length})
          <span class="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>

      <ul>
        {#each featuredProjects as project, i (project.id)}
          <li class="border-b border-line">
            <button
              type="button"
              on:click={() => openModal(project.links)}
              class="group flex w-full items-start gap-4 py-5 text-left transition-colors hover:bg-raised/60 sm:items-center sm:gap-8 sm:px-3 sm:py-6"
            >
              <span class="mt-0.5 font-mono text-sm text-faint sm:mt-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <img
                src={getProjectThumbnail(project)}
                alt=""
                width="160"
                height="100"
                loading="lazy"
                decoding="async"
                class="thumb hidden h-16 w-24 shrink-0 border border-line object-cover sm:block"
              />

              <span class="min-w-0 flex-1">
                <span
                  class="block truncate text-base font-semibold transition-colors group-hover:text-accent sm:text-xl"
                  >{project.title}</span
                >
                <span class="mt-1 line-clamp-2 text-sm text-dim sm:line-clamp-1"
                  >{project.description}</span
                >
                <span
                  class="mt-2.5 flex flex-wrap items-center gap-x-2 font-mono text-xs text-faint sm:hidden"
                >
                  <span>{project.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.completionDate}</span>
                </span>
              </span>

              <span class="hidden shrink-0 font-mono text-xs text-faint md:block"
                >{project.categoryLabel}</span
              >
              <span class="hidden shrink-0 font-mono text-xs text-faint sm:block"
                >{project.completionDate}</span
              >
              <span
                class="mt-0.5 shrink-0 font-mono text-sm text-dim transition-all group-hover:translate-x-1 group-hover:text-accent sm:mt-0"
                aria-hidden="true">→</span
              >
              <span class="sr-only"
                >{getYouTubeId(project.links) ? "Watch demo" : "Open live demo"}</span
              >
            </button>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <section id="experience" class="border-b border-line">
    <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
      <div class="border-b border-line pb-6">
        <p class="font-mono text-xs tracking-widest text-faint">03 / EXPERIENCE</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Where I've worked
        </h2>
      </div>

      <ol class="mt-10 space-y-12 border-l border-line pl-6 sm:pl-10">
        <li class="relative">
          <span
            class="absolute top-2 -left-[1.72rem] h-2 w-2 bg-accent sm:-left-[2.72rem]"
            aria-hidden="true"
          ></span>
          <p class="font-mono text-xs text-accent">2024 — present</p>
          <p class="mt-2 text-xl font-semibold">PT. Berca Hardayaperkasa</p>

          <div class="mt-6 border-l border-line pl-5">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="text-lg font-semibold">Full-Stack Developer</h3>
              <span class="font-mono text-xs text-faint">Feb 2026 — present</span>
            </div>
            <p class="mt-2 text-sm text-dim">
              Promoted to Full-Stack Developer, expanding responsibilities beyond
              the front end to cover the full application stack.
            </p>
            <ul class="mt-3 space-y-1.5 text-sm text-dim">
              {#each bercaFullStack as item}
                <li class="flex gap-2.5">
                  <span class="text-accent" aria-hidden="true">▸</span>{item}
                </li>
              {/each}
            </ul>
          </div>

          <div class="mt-6 border-l border-line pl-5">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="text-lg font-semibold">Front-End Developer</h3>
              <span class="font-mono text-xs text-faint">2024 — Jan 2026</span>
            </div>
            <p class="mt-2 text-sm text-dim">
              Joined a leading IT consultant company in Indonesia, building
              front-end interfaces and AI-integrated applications.
            </p>
            <ul class="mt-3 space-y-1.5 text-sm text-dim">
              {#each bercaFrontEnd as item}
                <li class="flex gap-2.5">
                  <span class="text-accent" aria-hidden="true">▸</span>{item}
                </li>
              {/each}
            </ul>
          </div>
        </li>

        <li class="relative">
          <span
            class="absolute top-2 -left-[1.72rem] h-2 w-2 bg-line-bright sm:-left-[2.72rem]"
            aria-hidden="true"
          ></span>
          <p class="font-mono text-xs text-dim">2023 — 2024</p>
          <p class="mt-2 text-xl font-semibold">PT. Semesta Arus Teknologi</p>
          <h3 class="mt-1 text-base text-dim">Front-End Developer</h3>
          <p class="mt-3 text-sm text-dim">
            My first professional career as a front-end developer using SvelteKit.
          </p>
          <ul class="mt-3 space-y-1.5 text-sm text-dim">
            {#each semestaItems as item}
              <li class="flex gap-2.5">
                <span class="text-faint" aria-hidden="true">▸</span>{item}
              </li>
            {/each}
          </ul>
        </li>

        <li class="relative">
          <span
            class="absolute top-2 -left-[1.72rem] h-2 w-2 bg-line-bright sm:-left-[2.72rem]"
            aria-hidden="true"
          ></span>
          <p class="font-mono text-xs text-dim">2020 — 2022</p>
          <p class="mt-2 text-xl font-semibold">University of Gunadarma</p>
          <h3 class="mt-1 text-base text-dim">Psychology Laboratory Programmer</h3>
          <p class="mt-3 text-sm text-dim">
            The starting point of becoming a programmer: joining as a developer in
            one of the faculties using Visual Basic and JavaScript.
          </p>
          <ul class="mt-3 space-y-1.5 text-sm text-dim">
            {#each gunadarmaItems as item}
              <li class="flex gap-2.5">
                <span class="text-faint" aria-hidden="true">▸</span>{item}
              </li>
            {/each}
          </ul>
        </li>

        <li class="relative">
          <span
            class="absolute top-2 -left-[1.72rem] h-2 w-2 bg-line-bright sm:-left-[2.72rem]"
            aria-hidden="true"
          ></span>
          <p class="font-mono text-xs text-dim">2017 · 3 months</p>
          <p class="mt-2 text-xl font-semibold">PT. Sewiwi Indonesia</p>
          <h3 class="mt-1 text-base text-dim">Internship</h3>
          <p class="mt-3 text-sm text-dim">
            Started my career working in IT Networking.
          </p>
          <ul class="mt-3 space-y-1.5 text-sm text-dim">
            <li class="flex gap-2.5">
              <span class="text-faint" aria-hidden="true">▸</span>Configured
              networks using Mikrotik.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>

  <section id="skills" class="border-b border-line bg-surface/40">
    <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
      <div class="border-b border-line pb-6">
        <p class="font-mono text-xs tracking-widest text-faint">04 / SKILLS</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I build with
        </h2>
      </div>

      <dl class="divide-y divide-line">
        {#each skillGroups as group}
          <div class="grid gap-4 py-6 md:grid-cols-[0.28fr_0.72fr] md:items-start">
            <dt class="flex items-center gap-3 font-mono text-sm text-dim">
              <span class="text-accent"><Icon name={group.icon} size="1.1rem" /></span>
              {group.name}
            </dt>
            <dd class="flex flex-wrap gap-2">
              {#each group.items as item}
                <span
                  class="border border-line bg-raised px-2.5 py-1 font-mono text-xs text-dim transition-colors hover:border-accent hover:text-accent"
                  >{item}</span
                >
              {/each}
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </section>

  <footer class="mx-auto max-w-6xl px-5 py-20 sm:px-8">
    <div class="border border-line bg-surface p-6 text-center sm:p-10 md:p-14">
      <p class="font-mono text-xs tracking-widest text-faint">05 / CONTACT</p>
      <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Let's build something.
      </h2>
      <p class="mx-auto mt-4 max-w-md text-dim">
        Open to full-stack roles and freelance work. The fastest way to reach me
        is email.
      </p>
      <a
        href="mailto:{EMAIL}"
        class="mt-8 inline-flex w-full max-w-full items-center justify-center gap-2.5 border border-accent bg-accent px-4 py-3.5 font-mono text-[0.7rem] font-bold break-words text-bg transition-colors hover:bg-transparent hover:text-accent xs:text-xs sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
      >
        <Icon name="mail" size="1.1rem" />
        {EMAIL}
      </a>
    </div>

    <div
      class="mt-8 flex flex-col items-center justify-between gap-4 font-mono text-xs text-faint sm:flex-row"
    >
      <p>© {new Date().getFullYear()} Muhamad Rafli</p>
      <div class="flex items-center gap-5">
        {#each socials as social}
          <a
            href={social.href}
            target="_blank"
            rel="noopener"
            class="inline-flex min-h-11 items-center transition-colors hover:text-accent"
            >{social.name}</a
          >
        {/each}
      </div>
    </div>
  </footer>
</div>

{#if showModal}
  <div
    class="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
    style="animation: fadeIn 0.2s ease-out;"
    on:click={handleBackdropClick}
    on:keydown={handleKeydown}
    role="dialog"
    aria-modal="true"
    aria-label="Live demo preview"
    tabindex="-1"
  >
    <div
      class="flex h-[92dvh] max-h-[92dvh] w-full max-w-6xl flex-col border border-line-bright bg-surface shadow-2xl"
      style="animation: slideUp 0.3s ease-out;"
    >
      <div class="flex items-center justify-between border-b border-line px-4 py-3">
        <div class="flex items-center gap-2.5 font-mono text-sm">
          <span class="h-2.5 w-2.5 rounded-full bg-accent"></span>
          <span class="text-dim">live demo preview</span>
        </div>
        <button
          type="button"
          on:click={closeModal}
          class="p-1.5 text-dim transition-colors hover:text-accent"
          aria-label="Close modal"
        >
          <Icon name="close" size="1.5rem" />
        </button>
      </div>

      <div class="flex items-center gap-3 border-b border-line bg-raised px-4 py-2.5">
        <span class="text-faint"><Icon name="lock" size="1rem" label="Secure" /></span>
        <div
          class="flex-1 truncate border border-line bg-bg px-3 py-1.5 font-mono text-xs text-dim"
        >
          {modalUrl}
        </div>
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
          <div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
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
            title="Live Demo"
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
