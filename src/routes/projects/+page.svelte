<script lang="ts">
  import { onMount } from "svelte";
  import type { Project } from "../../lib/projects-types";
  import {
    allProjects,
    getCategoryColorClasses,
  } from "../../lib/projects-types";

  let categoryFilter = "";
  let dateFilter = "";
  let sortBy = "recent";
  let currentPage = 1;
  let filteredProjects: Project[] = [];
  const projectsPerPage = 6;

  function applyFilters() {
    let result = [...allProjects];

    if (categoryFilter) {
      result = result.filter((project) => project.category === categoryFilter);
    }

    if (dateFilter) {
      result = result.filter(
        (project) => project.completionYear === dateFilter
      );
    }

    // Sorting
    switch (sortBy) {
      case "recent":
        result.sort(
          (a, b) =>
            new Date(b.completionDate).getTime() -
            new Date(a.completionDate).getTime()
        );
        break;
      case "oldest":
        result.sort(
          (a, b) =>
            new Date(a.completionDate).getTime() -
            new Date(b.completionDate).getTime()
        );
        break;
      case "a-z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    filteredProjects = result;
    currentPage = 1;
  }

  $: {
    applyFilters();
  }

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
</script>

<div id="webcrumbs">
  <div class="bg-white p-4 sm:p-6 font-sans w-full mx-auto">
    <div class="mb-6 sm:mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Projects</h1>
      <p class="text-gray-600 text-sm sm:text-base">
        Explore my latest work and innovations
      </p>
    </div>

    <div class="mb-8 sm:mb-10">
      <div
        class="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-sm relative"
      >
        <div class="grid md:grid-cols-3 gap-4 md:gap-6">
          <div class="w-full">
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Filter by Category
            </label>
            <div class="relative z-30">
              <select
                class="px-4 w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none hover:border-indigo-300 transition-colors"
                bind:value={categoryFilter}
              >
                <option value="">All Categories</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App</option>
                <option value="ui">UI/UX Design</option>
                <option value="blockchain">Blockchain</option>
                <option value="ai">AI/ML</option>
                <option value="cloud">Cloud Computing</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="w-full">
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Completion Date</label
            >
            <div class="relative z-20">
              <select
                class="px-4 w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none hover:border-indigo-300 transition-colors"
                bind:value={dateFilter}
              >
                <option value="">All Dates</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="w-full">
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Sort By</label
            >
            <div class="relative z-10">
              <select
                class="px-4 w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none hover:border-indigo-300 transition-colors"
                bind:value={sortBy}
              >
                <option value="recent">Most Recent</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex md:justify-end">
          <button
            class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md shadow-sm transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            on:click={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8"
    >
      {#if currentProjects.length > 0}
        {#each currentProjects as project}
          <div
            class="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
          >
            <div class="h-48 sm:h-52 md:h-56 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
            <div class="p-4 sm:p-5">
              <span
                class="inline-block px-3 py-1 text-xs sm:text-sm {getCategoryColorClasses(
                  project.categoryColor
                ).bg} {getCategoryColorClasses(project.categoryColor)
                  .text} rounded-full mb-2 {getCategoryColorClasses(
                  project.categoryColor
                ).hoverBg} transition-colors"
              >
                {project.categoryLabel}
              </span>
              <h3
                class="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors"
              >
                {project.title}
              </h3>
              <p class="text-gray-600 text-sm sm:text-base mb-4">
                {project.description}
              </p>
              <div class="flex flex-wrap justify-between items-center gap-2">
                <span class="text-xs sm:text-sm text-gray-500"
                  >Completed: {project.completionDate}</span
                >
                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        {/each}
      {:else}
        <div class="col-span-3 text-center py-12">
          <p class="text-gray-500 text-lg">
            No projects match your filters. Try different criteria.
          </p>
        </div>
      {/if}
    </div>

    {#if totalPages > 1}
      <div
        class="flex justify-center items-center mt-6 sm:mt-8 md:mt-10 pb-4 overflow-visible"
      >
        <nav
          class="inline-flex flex-wrap rounded-md shadow-sm justify-center gap-1"
          aria-label="Pagination"
        >
          <button
            on:click={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            class="relative inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-l-md border {currentPage ===
            1
              ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors hover:border-indigo-300 group cursor-pointer'}"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="h-4 w-4 sm:h-5 sm:w-5 {currentPage !== 1
                ? 'group-hover:text-indigo-600'
                : ''} transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {#each pageNumbers as number}
            {@const showPageNumber =
              number === 1 ||
              number === totalPages ||
              (number >= currentPage - 1 && number <= currentPage + 1)}

            {#if showPageNumber}
              <button
                on:click={() => paginate(number)}
                class="relative inline-flex items-center px-4  border {currentPage ===
                number
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                  : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors hover:border-indigo-300 hover:text-indigo-600'}"
              >
                {number}
              </button>
            {/if}
          {/each}

          <button
            on:click={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            class="relative inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-r-md border {currentPage ===
            totalPages
              ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors hover:border-indigo-300 group cursor-pointer'}"
          >
            <span class="sr-only">Next</span>
            <svg
              class="h-4 w-4 sm:h-5 sm:w-5 {currentPage !== totalPages
                ? 'group-hover:text-indigo-600'
                : ''} transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    {/if}
  </div>
</div>

<style>
  @import 'tailwindcss';
  *,
:after,
:before {
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
}
:after,
:before {
  --tw-content: "";
}
:host,
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  font-family: Open Sans, ui-sans-serif, system-ui, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -moz-tab-size: 4;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
}
body {
  line-height: inherit;
  margin: 0;
}
hr {
  border-top-width: 1px;
  color: inherit;
  height: 0;
}
abbr:where([title]) {
  text-decoration: underline dotted;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  font-feature-settings: normal;
  font-size: 1em;
  font-variation-settings: normal;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  border-collapse: collapse;
  border-color: inherit;
  text-indent: 0;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font-family: inherit;
  font-feature-settings: inherit;
  font-size: 100%;
  font-variation-settings: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
}
button,
select {
  text-transform: none;
}
button,
input:where([type="button"]),
input:where([type="reset"]),
input:where([type="submit"]) {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}
fieldset {
  margin: 0;
}
fieldset,
legend {
  padding: 0;
}
menu,
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
dialog {
  padding: 0;
}
textarea {
  resize: vertical;
}
input::placeholder,
textarea::placeholder {
  color: #9ca3af;
  opacity: 1;
}
[role="button"],
button {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  vertical-align: middle;
}
img,
video {
  height: auto;
  max-width: 100%;
}
[hidden] {
  display: none;
}
*,
:after,
:before {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}
#webcrumbs .absolute {
  position: absolute;
}
#webcrumbs .relative {
  position: relative;
}
#webcrumbs .inset-0 {
  inset: 0;
}
#webcrumbs .left-1\/2 {
  left: 50%;
}
#webcrumbs .top-0 {
  top: 0;
}
#webcrumbs .z-10 {
  z-index: 10;
}
#webcrumbs .z-20 {
  z-index: 20;
}
#webcrumbs .mx-auto {
  margin-left: auto;
  margin-right: auto;
}
#webcrumbs .-mt-10 {
  margin-top: -40px;
}
#webcrumbs .mb-1 {
  margin-bottom: 4px;
}
#webcrumbs .mb-10 {
  margin-bottom: 40px;
}
#webcrumbs .mb-16 {
  margin-bottom: 64px;
}
#webcrumbs .mb-2 {
  margin-bottom: 8px;
}
#webcrumbs .mb-3 {
  margin-bottom: 12px;
}
#webcrumbs .mb-4 {
  margin-bottom: 16px;
}
#webcrumbs .mb-6 {
  margin-bottom: 24px;
}
#webcrumbs .mb-8 {
  margin-bottom: 32px;
}
#webcrumbs .ml-1 {
  margin-left: 4px;
}
#webcrumbs .ml-2 {
  margin-left: 8px;
}
#webcrumbs .mr-3 {
  margin-right: 12px;
}
#webcrumbs .mt-12 {
  margin-top: 48px;
}
#webcrumbs .mt-6 {
  margin-top: 24px;
}
#webcrumbs .mt-8 {
  margin-top: 32px;
}
#webcrumbs .flex {
  display: flex;
}
#webcrumbs .grid {
  display: grid;
}
#webcrumbs .hidden {
  display: none;
}
#webcrumbs .h-1 {
  height: 4px;
}
#webcrumbs .h-10 {
  height: 40px;
}
#webcrumbs .h-16 {
  height: 64px;
}
#webcrumbs .h-2 {
  height: 8px;
}
#webcrumbs .h-5 {
  height: 20px;
}
#webcrumbs .h-6 {
  height: 24px;
}
#webcrumbs .h-\[100px\] {
  height: 100px;
}
#webcrumbs .h-\[200px\] {
  height: 200px;
}
#webcrumbs .h-\[250px\] {
  height: 250px;
}
#webcrumbs .h-\[300px\] {
  height: 300px;
}
#webcrumbs .h-full {
  height: 100%;
}
#webcrumbs .w-1 {
  width: 4px;
}
#webcrumbs .w-10 {
  width: 40px;
}
#webcrumbs .w-16 {
  width: 64px;
}
#webcrumbs .w-20 {
  width: 80px;
}
#webcrumbs .w-5 {
  width: 20px;
}
#webcrumbs .w-6 {
  width: 24px;
}
#webcrumbs .w-\[250px\] {
  width: 250px;
}
#webcrumbs .w-\[80\%\] {
  width: 80%;
}
#webcrumbs .w-\[85\%\] {
  width: 85%;
}
#webcrumbs .w-\[90\%\] {
  width: 90%;
}
#webcrumbs .w-\[95\%\] {
  width: 95%;
}
#webcrumbs .w-full {
  width: 100%;
}
#webcrumbs .max-w-2xl {
  max-width: 42rem;
}
#webcrumbs .max-w-4xl {
  max-width: 56rem;
}
#webcrumbs .max-w-5xl {
  max-width: 64rem;
}
#webcrumbs .-translate-x-1\/2 {
  --tw-translate-x: -50%;
}
#webcrumbs .-translate-x-1\/2,
#webcrumbs .transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#webcrumbs .list-inside {
  list-style-position: inside;
}
#webcrumbs .list-disc {
  list-style-type: disc;
}
#webcrumbs .grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
#webcrumbs .flex-row {
  flex-direction: row;
}
#webcrumbs .flex-col {
  flex-direction: column;
}
#webcrumbs .flex-wrap {
  flex-wrap: wrap;
}
#webcrumbs .items-center {
  align-items: center;
}
#webcrumbs .justify-center {
  justify-content: center;
}
#webcrumbs .justify-between {
  justify-content: space-between;
}
#webcrumbs .gap-10 {
  gap: 40px;
}
#webcrumbs .gap-2 {
  gap: 8px;
}
#webcrumbs .gap-4 {
  gap: 16px;
}
#webcrumbs .gap-8 {
  gap: 32px;
}
#webcrumbs .gap-y-4 {
  row-gap: 16px;
}
#webcrumbs :is(.space-x-4 > :not([hidden]) ~ :not([hidden])) {
  --tw-space-x-reverse: 0;
  margin-left: calc(16px * (1 - var(--tw-space-x-reverse)));
  margin-right: calc(16px * var(--tw-space-x-reverse));
}
#webcrumbs :is(.space-x-8 > :not([hidden]) ~ :not([hidden])) {
  --tw-space-x-reverse: 0;
  margin-left: calc(32px * (1 - var(--tw-space-x-reverse)));
  margin-right: calc(32px * var(--tw-space-x-reverse));
}
#webcrumbs :is(.space-y-1 > :not([hidden]) ~ :not([hidden])) {
  --tw-space-y-reverse: 0;
  margin-bottom: calc(4px * var(--tw-space-y-reverse));
  margin-top: calc(4px * (1 - var(--tw-space-y-reverse)));
}
#webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
  --tw-space-y-reverse: 0;
  margin-bottom: calc(16px * var(--tw-space-y-reverse));
  margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
}
#webcrumbs .overflow-hidden {
  overflow: hidden;
}
#webcrumbs .rounded-full {
  border-radius: 9999px;
}
#webcrumbs .rounded-lg {
  border-radius: 24px;
}
#webcrumbs .rounded-md {
  border-radius: 18px;
}
#webcrumbs .rounded-xl {
  border-radius: 36px;
}
#webcrumbs .border {
  border-width: 1px;
}
#webcrumbs .border-2 {
  border-width: 2px;
}
#webcrumbs .border-b {
  border-bottom-width: 1px;
}
#webcrumbs .border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}
#webcrumbs .border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
#webcrumbs .border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(79 70 229 / var(--tw-border-opacity));
}
#webcrumbs .bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
#webcrumbs .bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
#webcrumbs .bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 231 255 / var(--tw-bg-opacity));
}
#webcrumbs .bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}
#webcrumbs .bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
#webcrumbs .bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
#webcrumbs .bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
#webcrumbs .from-gray-50 {
  --tw-gradient-from: #f9fafb var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(249, 250, 251, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
#webcrumbs .from-indigo-200 {
  --tw-gradient-from: #c7d2fe var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(199, 210, 254, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
#webcrumbs .to-transparent {
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
}
#webcrumbs .to-white {
  --tw-gradient-to: #fff var(--tw-gradient-to-position);
}
#webcrumbs .object-cover {
  object-fit: cover;
}
#webcrumbs .p-6 {
  padding: 24px;
}
#webcrumbs .p-8 {
  padding: 32px;
}
#webcrumbs .px-10 {
  padding-left: 40px;
  padding-right: 40px;
}
#webcrumbs .px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
#webcrumbs .px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
#webcrumbs .px-5 {
  padding-left: 20px;
  padding-right: 20px;
}
#webcrumbs .px-6 {
  padding-left: 24px;
  padding-right: 24px;
}
#webcrumbs .py-1 {
  padding-bottom: 4px;
  padding-top: 4px;
}
#webcrumbs .py-16 {
  padding-bottom: 64px;
  padding-top: 64px;
}
#webcrumbs .py-2 {
  padding-bottom: 8px;
  padding-top: 8px;
}
#webcrumbs .py-3 {
  padding-bottom: 12px;
  padding-top: 12px;
}
#webcrumbs .text-center {
  text-align: center;
}
#webcrumbs .font-sans {
  font-family: Open Sans, ui-sans-serif, system-ui, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
#webcrumbs .text-2xl {
  font-size: 24px;
  line-height: 31.200000000000003px;
}
#webcrumbs .text-3xl {
  font-size: 30px;
  line-height: 36px;
}
#webcrumbs .text-4xl {
  font-size: 36px;
  line-height: 41.4px;
}
#webcrumbs .text-lg {
  font-size: 18px;
  line-height: 27px;
}
#webcrumbs .text-sm {
  font-size: 14px;
  line-height: 21px;
}
#webcrumbs .text-xl {
  font-size: 20px;
  line-height: 28px;
}
#webcrumbs .font-bold {
  font-weight: 700;
}
#webcrumbs .font-medium {
  font-weight: 500;
}
#webcrumbs .font-semibold {
  font-weight: 600;
}
#webcrumbs .leading-relaxed {
  line-height: 1.625;
}
#webcrumbs .leading-tight {
  line-height: 1.25;
}
#webcrumbs .tracking-tight {
  letter-spacing: -0.025em;
}
#webcrumbs .text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
#webcrumbs .text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}
#webcrumbs .text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(55 48 163 / var(--tw-text-opacity));
}
#webcrumbs .text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
#webcrumbs .opacity-50 {
  opacity: 0.5;
}
#webcrumbs .shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
}
#webcrumbs .shadow-lg,
#webcrumbs .shadow-md {
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
#webcrumbs .shadow-md {
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
}
#webcrumbs .shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
#webcrumbs .transition-all {
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#webcrumbs .transition-colors {
  transition-duration: 0.15s;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#webcrumbs .transition-transform {
  transition-duration: 0.15s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#webcrumbs .duration-200 {
  transition-duration: 0.2s;
}
#webcrumbs .duration-300 {
  transition-duration: 0.3s;
}
#webcrumbs .duration-500 {
  transition-duration: 0.5s;
}
#webcrumbs {
  font-family: Open Sans !important;
  font-size: 16px !important;
}
#webcrumbs .after\:absolute:after {
  content: var(--tw-content);
  position: absolute;
}
#webcrumbs .after\:-bottom-1:after {
  bottom: -4px;
  content: var(--tw-content);
}
#webcrumbs .after\:left-0:after {
  content: var(--tw-content);
  left: 0;
}
#webcrumbs .after\:h-0\.5:after {
  content: var(--tw-content);
  height: 2px;
}
#webcrumbs .after\:w-0:after {
  content: var(--tw-content);
  width: 0;
}
#webcrumbs .after\:bg-indigo-500:after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity));
}
#webcrumbs .after\:transition-all:after {
  content: var(--tw-content);
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#webcrumbs .hover\:scale-105:hover {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
}
#webcrumbs .hover\:scale-105:hover,
#webcrumbs .hover\:scale-110:hover {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#webcrumbs .hover\:scale-110:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
}
#webcrumbs .hover\:border-indigo-500:hover {
  --tw-border-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-border-opacity));
}
#webcrumbs .hover\:bg-indigo-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(238 242 255 / var(--tw-bg-opacity));
}
#webcrumbs .hover\:bg-indigo-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}
#webcrumbs .hover\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(67 56 202 / var(--tw-bg-opacity));
}
#webcrumbs .hover\:font-medium:hover {
  font-weight: 500;
}
#webcrumbs .hover\:tracking-wide:hover {
  letter-spacing: 0.025em;
}
#webcrumbs .hover\:text-indigo-800:hover {
  --tw-text-opacity: 1;
  color: rgb(55 48 163 / var(--tw-text-opacity));
}
#webcrumbs .hover\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
#webcrumbs .hover\:shadow-lg:hover {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
}
#webcrumbs .hover\:shadow-lg:hover,
#webcrumbs .hover\:shadow-xl:hover {
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
#webcrumbs .hover\:shadow-xl:hover {
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
}
#webcrumbs .hover\:shadow-indigo-200:hover {
  --tw-shadow-color: #c7d2fe;
  --tw-shadow: var(--tw-shadow-colored);
}
#webcrumbs .hover\:after\:w-full:hover:after {
  content: var(--tw-content);
  width: 100%;
}
#webcrumbs :is(.group:hover .group-hover\:translate-x-1) {
  --tw-translate-x: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#webcrumbs :is(.group:hover .group-hover\:translate-y-1) {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@media (min-width: 640px) {
  #webcrumbs .sm\:w-auto {
    width: auto;
  }
  #webcrumbs .sm\:flex-row {
    flex-direction: row;
  }
}
@media (min-width: 768px) {
  #webcrumbs .md\:relative {
    position: relative;
  }
  #webcrumbs .md\:left-1\/2 {
    left: 50%;
  }
  #webcrumbs .md\:mb-0 {
    margin-bottom: 0;
  }
  #webcrumbs .md\:ml-8 {
    margin-left: 32px;
  }
  #webcrumbs .md\:mr-8 {
    margin-right: 32px;
  }
  #webcrumbs .md\:mt-0 {
    margin-top: 0;
  }
  #webcrumbs .md\:mt-6 {
    margin-top: 24px;
  }
  #webcrumbs .md\:block {
    display: block;
  }
  #webcrumbs .md\:hidden {
    display: none;
  }
  #webcrumbs .md\:h-\[350px\] {
    height: 350px;
  }
  #webcrumbs .md\:h-\[400px\] {
    height: 400px;
  }
  #webcrumbs .md\:w-1\/2 {
    width: 50%;
  }
  #webcrumbs .md\:w-\[350px\] {
    width: 350px;
  }
  #webcrumbs .md\:w-\[calc\(50\%-32px\)\] {
    width: calc(50% - 32px);
  }
  #webcrumbs .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  #webcrumbs .md\:flex-row {
    flex-direction: row;
  }
  #webcrumbs .md\:gap-20 {
    gap: 80px;
  }
  #webcrumbs .md\:px-10 {
    padding-left: 40px;
    padding-right: 40px;
  }
  #webcrumbs .md\:py-20 {
    padding-bottom: 80px;
    padding-top: 80px;
  }
  #webcrumbs .md\:pr-10 {
    padding-right: 40px;
  }
  #webcrumbs .md\:text-4xl {
    font-size: 36px;
    line-height: 41.4px;
  }
  #webcrumbs .md\:text-5xl {
    font-size: 48px;
    line-height: 52.800000000000004px;
  }
  #webcrumbs .md\:text-xl {
    font-size: 20px;
    line-height: 28px;
  }
}
@media (min-width: 1024px) {
  #webcrumbs .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

</style>