<script>
  import { writable } from "svelte/store";
  import profile from "$lib/images/profile.jpg";
  import cv from "$lib/Muhamad Rafli_CV.pdf";

  const menuOpen = writable(false);

  function toggleMenu() {
    menuOpen.update((value) => !value);
  }

  function closeMenu() {
    menuOpen.set(false);
  }

  function downloadCV() {
    // Create a link element
    const link = document.createElement("a");
    // Set the href to your imported CV file
    link.href = cv;
    // Set download attribute with the filename
    link.download = "Muhamad_Rafli_CV.pdf";
    // Append to the document
    document.body.appendChild(link);
    // Trigger click
    link.click();
    // Clean up
    document.body.removeChild(link);
  }
</script>

<div id="webcrumbs">
  <div class="font-sans bg-white overflow-hidden">
    <header
      class="relative h-[100px] flex items-center justify-between px-10 border-b border-gray-100 z-20"
    >
      <div class="flex items-center">
        <h1
          class="text-3xl font-bold tracking-tight hover:tracking-wide transition-all duration-300"
        >
          Muhamad Rafli
        </h1>
      </div>
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          {#each ["About", "Projects", "Experience", "Skills"] as item}
            <li>
              <a
                href={"#" + item.toLowerCase()}
                class="relative text-lg hover:font-medium transition-all duration-200 after:absolute after:w-0 after:h-0.5 after:bg-indigo-500 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
      <button
      on:click={() => {
        window.location.href = "mailto:mhmd.rafli.32e@gmail.com"
      }}
        class="hidden md:block px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-indigo-200"
      >
        Contact Me
      </button>
      <button class="md:hidden text-indigo-600" on:click={toggleMenu}>
        <span class="material-symbols-outlined text-3xl">
          {$menuOpen ? "close" : "menu"}
        </span>
      </button>
    </header>

    <!-- Mobile Menu -->
    <div
      class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden"
      class:translate-x-0={$menuOpen}
      class:translate-x-full={!$menuOpen}
      class:hidden={!$menuOpen}
    >
      <ul class="flex flex-col items-start p-6 space-y-4">
        {#each ["About", "Projects", "Experience", "Skills"] as item}
          <li>
            <a
              href={"#" + item.toLowerCase()}
              class="text-lg font-medium text-gray-800 hover:text-indigo-600"
              on:click={closeMenu}
            >
              {item}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <section
      class="flex flex-col md:flex-row items-center px-6 md:px-10 py-16 md:py-20 bg-gradient-to-r from-gray-50 to-white"
    >
      <div class="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Front-End Developer <span class="text-indigo-600">Building</span> Modern
          Web Experiences
        </h2>
        <p class="text-lg md:text-xl mb-8 text-gray-600">
          I craft responsive, user-friendly interfaces with clean code and
          modern technologies.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            class="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
            on:click={() =>
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            on:click={downloadCV}
            class="w-full sm:w-auto px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
          >
            Download CV
          </button>
        </div>
        <div class="flex space-x-4 mt-8">
          <a
            href="https://github.com/wimpoge"
            target="_blank"
            class="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300"
          >
            <i class="fa-brands fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhamad-rafli-80a3491b9"
            target="_blank"
            class="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300"
          >
            <i class="fa-brands fa-linkedin-in text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/mhmdrafli.____"
            target="_blank"
            class="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300"
          >
            <i class="fa-brands fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex justify-center">
        <div
          class="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-indigo-100 overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-indigo-200 to-transparent opacity-50"
          ></div>
          <img src={profile} alt="Profile" class="object-cover w-full h-full" />
        </div>
      </div>
    </section>

    <section id="about" class="px-6 md:px-10 py-16 md:py-20">
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
        <div class="h-1 w-20 bg-indigo-600 rounded-full"></div>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div class="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            alt="Developer coding"
            class="rounded-lg shadow-xl w-full h-[300px] md:h-[400px] object-cover transform hover:scale-105 transition-all duration-500"
          />
        </div>
        <div class="w-full md:w-1/2 mt-8 md:mt-0">
          <h3 class="text-2xl font-semibold mb-4">Who I Am</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            I'm a passionate front-end developer with >2 years of experience
            creating elegant, responsive web applications. I specialize in
            translating design concepts into clean, efficient code that delivers
            exceptional user experiences.
          </p>
          <p class="text-gray-600 mb-8 leading-relaxed">
            My approach combines technical expertise with a keen eye for design
            and an understanding of user behavior. I'm constantly learning and
            experimenting with new technologies to stay at the forefront of web
            development.
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center">
              <span class="material-symbols-outlined text-indigo-600 mr-3"
                >mail</span
              >
              <span>muhamad.rafli.32e@gmail.com</span>
            </div>

            <div class="flex items-center">
              <span class="material-symbols-outlined text-indigo-600 mr-3"
                >location_on</span
              >
              <span>Depok, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="px-6 md:px-10 py-16 md:py-20 bg-gray-50">
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">My Projects</h2>
        <div class="h-1 w-20 bg-indigo-600 rounded-full"></div>
        <p class="mt-6 text-gray-600 text-center max-w-2xl">
          Here are some of my recent projects that showcase my skills and
          expertise in front-end development.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <div class="h-[200px] overflow-hidden">
            <img
              src="https://i.imgur.com/hIxLBlL.jpg"
              alt=""
              class="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Chat Bot App</h3>
            <p class="text-gray-600 mb-4">
              Generate a chat bot app using OpenAI.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                Sveltekit
              </span>
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                Tailwind CSS
              </span>
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                GPT-3.5
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="https://svelte-chatbot-openai.vercel.app"
                target="_blank"
                class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/wimpoge/svelte-chatbot-openai"
                target="_blank"
                class="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Code
                <i class="fa-brands fa-github ml-1"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <div class="h-[200px] overflow-hidden">
            <img
              src="https://imgur.com/KKqaVnD.jpg"
              alt=""
              class="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Responsive Web Design</h3>
            <p class="text-gray-600 mb-4">A responsive web design themed AI.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                React.js
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="https://gpt3-tutorial-wheat.vercel.app"
                target="_blank"
                class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/wimpoge/gpt3_tutorial"
                target="_blank"
                class="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Code
                <i class="fa-brands fa-github ml-1"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <div class="h-[200px] overflow-hidden">
            <img
              src="https://imgur.com/3lIbrVc.jpg"
              alt="Mobile app"
              class="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Notes App</h3>
            <p class="text-gray-600 mb-4">
              A simple note-taking app with Dicoding API.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                React.js
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="https://63c66470eb5c30009400856b--taupe-shortbread-9ad6f1.netlify.app"
                target="_blank"
                class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/wimpoge/notes-app-react"
                target="_blank"
                class="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Code
                <i class="fa-brands fa-github ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-12">
        <button
          on:click={() => (window.location.href = "/projects")}
          class="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center font-medium"
        >
          View All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>

    <section id="experience" class="px-6 md:px-10 py-16 md:py-20">
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">Work Experience</h2>
        <div class="h-1 w-20 bg-indigo-600 rounded-full"></div>
        <p class="mt-6 text-gray-600 text-center max-w-2xl">
          My professional journey in front-end development and the companies
          I've collaborated with.
        </p>
      </div>
      <div class="max-w-4xl mx-auto relative">
        <div
          class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"
        ></div>

        <div class="relative mb-16">
          <div class="flex items-center justify-center">
            <div
              class="w-6 h-6 rounded-full bg-indigo-600 z-10 shadow-md"
            ></div>
          </div>
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20"
          >
            <div
              class="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium -mt-10"
            >
              2024 - Present
            </div>
          </div>
          <div
            class="mt-8 md:mt-6 md:mr-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-[calc(50%-32px)]"
          >
            <h3 class="text-xl font-semibold mb-2">Front-End Developer</h3>
            <p class="text-indigo-600 mb-4">PT. Berca Hardayaperkasa</p>
            <p class="text-gray-600 mb-4">
              Joined a company engaged in information technology and IT service
              provision. This company is also known as a leading information
              technology consultant in Indonesia.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Implement various AI models into the front end, either through a
                REST API or directly from the official source.
              </li>
              <li>
                Develop UI using various frameworks such as Next.js and
                SvelteKit.
              </li>
              <li>
                Developing complex applications that integrate AI technologies
                to enhance functionality and user experience.
              </li>
            </ul>
          </div>
        </div>

        <div class="relative mb-16">
          <div class="flex items-center justify-center">
            <div
              class="w-6 h-6 rounded-full bg-indigo-600 z-10 shadow-md"
            ></div>
          </div>
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20"
          >
            <div
              class="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium -mt-10"
            >
              2023 - 2024
            </div>
          </div>
          <div
            class="mt-8 md:mt-6 md:ml-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-[calc(50%-32px)] md:relative md:left-1/2"
          >
            <h3 class="text-xl font-semibold mb-2">Front-End Developer</h3>
            <p class="text-indigo-600 mb-4">PT. Semesta Arus Teknologi</p>
            <p class="text-gray-600 mb-4">
              My first professional career as a front-end developer using
              SvelteKit.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>Developed projects for government agencies.</li>
              <li>
                Implemented File Extraction feature to extract content from a
                file.
              </li>
              <li>
                Developed Tracking Gmaps Location feature based on Phone Number.
              </li>
              <li>Created Role Management for specified feature access.</li>
              <li>Implemented Export File pdf and excel features.</li>
              <li>Created Chart Diagram based on available data.</li>
            </ul>
          </div>
        </div>

        <div class="relative mb-16">
          <div class="flex items-center justify-center">
            <div
              class="w-6 h-6 rounded-full bg-indigo-600 z-10 shadow-md"
            ></div>
          </div>
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20"
          >
            <div
              class="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium -mt-10"
            >
              2020 - 2022
            </div>
          </div>
          <div
            class="mt-8 md:mt-6 md:mr-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-[calc(50%-32px)]"
          >
            <h3 class="text-xl font-semibold mb-2">
              Psychology Laboratory Programmer
            </h3>
            <p class="text-indigo-600 mb-4">University of Gunadarma</p>
            <p class="text-gray-600 mb-4">
              The starting point of becoming a programmer: joining as a
              developer in one of the faculties using Visual Basic and
              JavaScript.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Responsible for creating online classes and managing student
                grades.
              </li>
              <li>
                Maintained laboratory environment such as computers, networks,
                CCTV.
              </li>
              <li>
                Designed certificates and letters of recommendation for
                Assistants and Programmers.
              </li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <div class="flex items-center justify-center">
            <div
              class="w-6 h-6 rounded-full bg-indigo-600 z-10 shadow-md"
            ></div>
          </div>
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20"
          >
            <div
              class="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium -mt-10"
            >
              2017 (3 Month)
            </div>
          </div>
          <div
            class="mt-8 md:mt-6 md:ml-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-[calc(50%-32px)] md:relative md:left-1/2"
          >
            <h3 class="text-xl font-semibold mb-2">Internship</h3>
            <p class="text-indigo-600 mb-4">PT. Sewiwi Indonesia</p>
            <p class="text-gray-600 mb-4">
              Started my career working in IT Networking.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>Configured networks using Mikrotik.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="px-6 md:px-10 py-16 md:py-20 bg-gray-50">
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">Skills & Expertise</h2>
        <div class="h-1 w-20 bg-indigo-600 rounded-full"></div>
        <p class="mt-6 text-gray-600 text-center max-w-2xl">
          The technologies and tools I use to bring projects to life.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        <div
          class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <div
            class="h-16 w-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6"
          >
            <span class="material-symbols-outlined text-indigo-600 text-3xl"
              >code</span
            >
          </div>
          <h3 class="text-xl font-semibold mb-4">Frontend Development</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">HTML/CSS</span>
                <span>95%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full w-[95%] transition-all duration-500"
                ></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">JavaScript</span>
                <span>90%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full w-[90%] transition-all duration-500"
                ></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">React</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full w-[85%] transition-all duration-500"
                ></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Next JS</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full w-[85%] transition-all duration-500"
                ></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Sveltekit</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full w-[85%] transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <div
            class="h-16 w-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6"
          >
            <span class="material-symbols-outlined text-indigo-600 text-3xl">
              design_services
            </span>
          </div>
          <h3 class="text-xl font-semibold mb-4">UI/UX & Design</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Responsive Design</span>
                <span>95%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full w-[95%] transition-all duration-500"
                ></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Tailwind CSS</span>
                <span>90%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full w-[90%] transition-all duration-500"
                ></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Figma</span>
                <span>80%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full w-[80%] transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <div
            class="h-16 w-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6"
          >
            <span class="material-symbols-outlined text-indigo-600 text-3xl"
              >layers</span
            >
          </div>
          <h3 class="text-xl font-semibold mb-4">Development Tools</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Git/GitHub</span>
                <span>90%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full w-[90%] transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
