<script>
  import Nav from "../lib/Nav.svelte";
  import "../app.css";
  import darkmode from "../lib/images/darkmode.png";
  import lightmode from "../lib/images/lightmode.png";
  import arrow from "../lib/images/right-arrow 1.png";
  import NotSupported from "../components/NotSupported.svelte";
  import { ss, ss2, ss3, ss4, ss5, ss7, ss8, ss9, skills } from "../lib/image";
  import { theme } from "../stores/theme.js";

  let isSmartphone = false;

  // Check if the user is on a smartphone device
  if (typeof window !== "undefined") {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    isSmartphone =
      /android|iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  }

  let currentTheme;

  theme.subscribe((value) => {
    currentTheme = value;
  });

  function toggleTheme() {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    theme.set(newTheme);
  }

  const projects = [
    {
      title: "Chat Bot App",
      description: "Web Development",
      link: "https://svelte-chatbot-openai.vercel.app/",
      image: ss,
      icons: ["svelte", "vite", "tailwind"],
    },
    {
      title: "Forum App",
      description: "Web Development",
      link: "https://forum-app-seven.vercel.app/",
      image: ss2,
      icons: ["react", "redux", "cypress", "storybook"],
    },
    {
      title: "Next Js With Contentful (CMS)",
      description: "Web Development",
      link: "https://next-js-with-contentful-site.vercel.app/",
      image: ss3,
      icons: ["nextjs", "contentful", "redux"],
    },
    {
      title: "E-Commerce",
      description: "Web Development",
      link: "https://ecommerce-sanity-stripe-woad.vercel.app/",
      image: ss4,
      icons: ["nextjs", "sanity", "stripe"],
    },
    {
      title: "Notes App Using Dicoding API",
      description: "Web Development",
      link: "https://63c66470eb5c30009400856b--taupe-shortbread-9ad6f1.netlify.app/",
      image: ss5,
      icons: ["react"],
    },
    {
      title: "Spotify Clone App",
      description: "Web Development",
      link: "https://spotify-clone-two-opal.vercel.app/",
      image: ss4,
      icons: ["react", "tailwind", "vite", "rapidapi"],
    },
    {
      title: "Personal Notes App",
      description: "Web Development",
      link: "https://personal-notes-react-nine.vercel.app/",
      image: ss7,
      icons: ["react"],
    },
    {
      title: "Responsive Web Themed Open AI",
      description: "Web Development",
      link: "https://gpt3-tutorial-wheat.vercel.app/",
      image: ss8,
      icons: ["react"],
    },
    {
      title: "Design UI",
      description: "UI/UX",
      link: "https://www.figma.com/design/DhJKuM86lshL3UjCGiPIQZ/Untitled?node-id=0-1&t=6IeJ34TVkdaNpFN4-1",
      image: ss9,
      icons: ["figma"],
    },
  ];

  const experiences = [
    {
      yearRange: "2023 - 2024",
      role: "Front End Developer",
      company: "PT. Semesta Arus Teknologi",
      description: [
        "Maintained laboratory environment such as computers, networks, CCTV.",
        "Responsible for creating online classes and managing student grades.",
        "Designed certificates and letters of recommendation for Assistants and Programmers.",
      ],
    },
    {
      yearRange: "2020 - 2022",
      role: "Psychology Laboratory Programmer",
      company: "Universitas Gunadarma",
      description: [
        "Developed projects for government agencies.",
        "Implemented File Extraction feature to extract content from a file.",
        "Developed Tracking Gmaps Location feature based on Phone Number.",
        "Created Role Management for specified feature access.",
        "Implemented Export File pdf and excel features.",
        "Created Chart Diagram based on available data.",
      ],
    },
    {
      yearRange: "2017 (3 Month)",
      role: "Intership",
      company: "PT. SEWIWI INDONESIA",
      description: ["        Configured networks using Mikrotik."],
    },
  ];
  let currentPage = 1;
  const itemsPerPage = 2;

  function nextPage() {
    if (currentPage * itemsPerPage < projects.length) {
      currentPage += 1;
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage -= 1;
    }
  }

  $: paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  $: isLastPage = currentPage * itemsPerPage >= projects.length;
</script>

{#if isSmartphone}
  <NotSupported />
{:else}
  <div class="app">
    <div
      class="m-[20px] rounded-full font-inter {currentTheme === 'light'
        ? 'bg-[#FFFEF0]'
        : 'bg-[#F6FFF5]'} sticky top-4 z-10 flex justify-between items-center"
    >
      <Nav />
      <div class="flex items-center gap-4 p-4">
        {#if currentTheme === "light"}
          <img
            src={darkmode}
            alt="Dark Mode"
            class="cursor-pointer"
            on:click={toggleTheme}
          />
        {:else}
          <img
            src={lightmode}
            alt="Light Mode"
            class="cursor-pointer"
            on:click={toggleTheme}
          />
        {/if}
      </div>
    </div>

    <main>
      <section id="Portfolio" class="section">
        <div class="grid w-full h-[60%] relative">
          <!-- Top line with dots -->
          <div
            class="flex justify-start gap-2 w-1/2 h-2 absolute top-20 right-0"
          >
            <span class="rounded-full h-[10px] w-[10px] bg-[#B4ACA6]"></span>
            <span class="rounded-full h-[10px] w-[10px] bg-[#B4ACA6]"></span>
            <span class="rounded-full h-[10px] w-[10px] bg-[#B4ACA6]"></span>
            <span class="h-2 w-full bg-[#B4ACA6]"></span>
          </div>
          <!-- Portfolio text -->
          <div class="flex justify-center items-center w-full h-full">
            <h2 class="font-josefin {currentTheme === "dark" ? "text-white": "text-[#6D786A]"} text-[128px]">PORTFOLIO</h2>
          </div>
          <!-- Bottom line with dots -->
          <div
            class="flex justify-end gap-2 w-1/2 h-2 absolute bottom-20 left-0"
          >
            <span class="h-2 w-full bg-[#B4ACA6]"></span>
            <span class="rounded-full h-[10px] w-[10px] bg-[#B4ACA6]"></span>
            <span class="rounded-full h-[10px] w-[10px] bg-[#B4ACA6]"></span>
            <span class="rounded-full h-[10px] w-[10px] bg-[#B4ACA6]"></span>
          </div>
        </div>
      </section>

      <section id="about" class="section my-4">
        <div class="mx-20 grid items-center">
          <h2
            class="font-gowun text-[64px] {currentTheme === 'dark'
              ? 'text-white'
              : 'text-[#596855]'}"
          >
            I’m a Front End Developer with passion to create a <span
              class="text-[#8495ED]">great experiences</span
            >
          </h2>
          <div class="mt-14 flex gap-6 items-baseline">
            <div class="flex gap-2 w-1/5 h-2">
              <span class="h-1 w-full {currentTheme === "dark" ? "bg-white": " bg-[#B4ACA6]"}"></span>
            </div>
            <div>
              <p
                class="text-[36px] font-gowun {currentTheme === 'dark'
                  ? 'text-white'
                  : 'text-[#596855]'} "
              >
                I’m Rafli, a Front End Developer living in Depok, and I focus on
                making web development that are easy to use, responsive, and get
                the job done
              </p>
            </div>
          </div>

          <div class="mt-32">
            <div class="flex gap-8">
              <div class="flex">
                <a
                  href="https://www.linkedin.com/in/muhamad-rafli-80a3491b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="{currentTheme === 'dark'
                    ? 'text-white'
                    : 'text-[#596855]'} font-inter text-xl"
                  >LinkedIn
                </a>
                <img src={arrow} alt="" class="w-[20px] h-[20px]" />
              </div>
              <div class="flex">
                <a
                  href="https://github.com/wimpoge"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="{currentTheme === 'dark'
                    ? 'text-white'
                    : 'text-[#596855]'} font-inter text-xl"
                  >Github
                </a>
                <img src={arrow} alt="" class="w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="mx-20 flex flex-wrap justify-between gap-4">
          {#each paginatedProjects as project}
            <div class="project-hover w-[48%]">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img src={project.image} alt="Project Image" class="rounded-xl" />
              <div class="project-title flex justify-between">
                <div class="">
                  <h3 class="justify-start flex font-gowun text-[24px]">
                    {project.title}
                  </h3>
                  <h3
                    class="justify-start flex font-gowun text-[16px] text-[#595A71]"
                  >
                    {project.description}
                  </h3>
                </div>
                <div class="grid gap-2">
                  <div class="justify-end flex gap-2">
                    {#each project.icons as icon}
                      <div class={icon}></div>
                    {/each}
                  </div>
                  <div class="justify-end flex">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        class="border border-black rounded-xl px-6 py-2 hover:bg-slate-300"
                      >
                        <div class="arrowbutton"></div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          {/each}

          <div class="flex justify-between w-full mt-4">
            <button
              class="border {currentTheme === 'dark'
                ? 'border-white'
                : 'border-black'}  rounded-xl px-6 py-2 {currentPage === 1
                ? ''
                : 'hover:bg-slate-300'}"
              on:click={prevPage}
              disabled={currentPage === 1}
            >
              <div
                class={currentTheme === "light"
                  ? "left"
                  : "leftwhite rotate-180"}
              ></div>
            </button>
            <button
              class="border {currentTheme === 'dark'
                ? 'border-white'
                : 'border-black'} rounded-xl px-6 py-2 {isLastPage
                ? ''
                : 'hover:bg-slate-300'}"
              on:click={nextPage}
              disabled={isLastPage}
            >
              <div
                class={currentTheme === "dark"
                  ? "leftwhite "
                  : "left origin-center rotate-180"}
              ></div>
            </button>
          </div>
        </div>
      </section>

      <section id="experiences" class="section my-4">
        <div class="w-full grid justify-start">
          <ul
            class="timeline gap-6 timeline-snap-icon max-md:timeline-compact timeline-vertical"
          >
            {#each experiences as experience}
              <li class="gap-2">
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="{currentTheme === "dark" ? "white" : "#88a480"}"
                    class="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  class="timeline-start font-gowun {currentTheme === 'dark'
                    ? ''
                    : 'text-[#88a480]'} font-bold"
                >
                  {experience.yearRange}
                </div>
                <div class="timeline-end mb-10">
                  <div
                    class="text-xl font-gowun {currentTheme === 'dark'
                      ? ''
                      : 'text-[#88a480]'} font-bold"
                  >
                    {experience.role}
                  </div>
                  <div
                    class="text-base font-gowun {currentTheme === 'dark'
                      ? ''
                      : 'text-[#88a480]'} font-bold"
                  >
                    {experience.company}
                  </div>
                  <br />
                  {#each experience.description as desc}
                    <li
                      class="{currentTheme === 'dark'
                        ? ''
                        : 'text-[#88a480]'} text-base font-gowun"
                    >
                      • {desc}
                    </li>
                  {/each}
                </div>
                <hr
                  class={currentTheme === "dark" ? "bg-white" : "bg-[#88a480]"}
                />
              </li>
            {/each}
          </ul>
        </div>
      </section>

      <section id="skills" class="section my-4">
        <div class="flex justify-between gap-2 items-center">
          <div class="w-[48%]">
            <h2 class="font-gowun text-[42px] font-bold">
              Extensible and Customizable
            </h2>
            <p class="font-gowun font-bold">
              Cutting-edge skills in modern technologies, ensuring top-tier,
              innovative solutions. Continuously evolving with industry trends
              to deliver excellence.
            </p>
          </div>
          <div class="w-[48%] flex justify-center">
            <img src={skills} alt="" />
          </div>
        </div>
      </section>
    </main>
  </div>
{/if}

<style>
  .svelte {
    background-image: url("../lib/images/svelte.png");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .react {
    background-image: url("../lib/images/react.png");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .nextjs {
    background-image: url("../lib/images/nextjs.png");
    width: 45px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .vite {
    background-image: url("../lib/images/vite.png");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .tailwind {
    background-image: url("../lib/images/tailwind.png");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .redux {
    background-image: url("../lib/images/redux.png");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .cypress {
    background-image: url("../lib/images/cypress.png");
    width: 55px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .storybook {
    background-image: url("../lib/images/storybook.png");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .contentful {
    background-image: url("../lib/images/contentful.png");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .sanity {
    background-image: url("../lib/images/sanity.png");
    width: 40px;
    margin-top: 7px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .stripe {
    background-image: url("../lib/images/stripe.png");
    width: 45px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .rapidapi {
    background-image: url("../lib/images/rapidapi.png");
    width: 50px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .figma {
    background-image: url("../lib/images/figma.png");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
  }
  .arrowbutton {
    background-image: url("../lib/images/arrowbutton.png");
    width: 30px;
    height: 10px;
    background-repeat: no-repeat;
  }
  .left {
    background-image: url("../lib/images/left.png");
    width: 30px;
    height: 15px;
    background-repeat: no-repeat;
  }
  .leftwhite {
    background-image: url("../lib/images/arrowwhite.png");
    width: 30px;
    height: 15px;
    background-repeat: no-repeat;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
  }

  .section {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  .section-content {
    max-width: 800px;
    padding: 2rem;
    text-align: center;
  }

  .project-hover {
    position: relative;
    overflow: hidden;
  }

  .project-hover:hover img {
    filter: blur(10px);
  }

  .project-title {
    position: absolute;
    bottom: 0;
    border-radius: 0 0 20px 20px;
    left: 0;
    right: 0;
    background: #fffef0;
    color: black;
    text-align: center;
    padding: 1rem;
    transform: translateY(100%);
    opacity: 0;
    transition:
      transform 0.2s ease-in-out,
      opacity 0.2s ease-in-out;
  }

  .project-hover:hover .project-title {
    transform: translateY(0);
    opacity: 1;
  }

  .sticky {
    position: sticky;
    top: 2rem;
    z-index: 10;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
