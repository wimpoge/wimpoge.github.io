<script>
  import { writable } from "svelte/store";
  import profile from "$lib/images/profile.jpg";

  const menuOpen = writable(false);

  function toggleMenu() {
    menuOpen.update((value) => !value);
  }

  function closeMenu() {
    menuOpen.set(false);
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
            class="w-full sm:w-auto px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
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
            I'm a passionate front-end developer with 2 years of experience
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
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="E-commerce site"
              class="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">E-commerce Platform</h3>
            <p class="text-gray-600 mb-4">
              A modern e-commerce site with cart functionality, product
              filtering, and secure checkout.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                React
              </span>
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                Tailwind CSS
              </span>
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                Stripe
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="#"
                class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Live Demo
              </a>
              <a
                href="#"
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
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
              alt="Dashboard UI"
              class="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p class="text-gray-600 mb-4">
              Data visualization dashboard with real-time updates, filtering,
              and responsive design.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                Vue.js
              </span>
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                D3.js
              </span>
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                Firebase
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="#"
                class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Live Demo
              </a>
              <a
                href="#"
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
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Mobile app"
              class="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Fitness Tracker App</h3>
            <p class="text-gray-600 mb-4">
              Progressive web app for tracking workouts, setting goals, and
              visualizing progress.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                React Native
              </span>
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                Redux
              </span>
              <span
                class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                GraphQL
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="#"
                class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Live Demo
              </a>
              <a
                href="#"
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
            <h3 class="text-xl font-semibold mb-2">
              Front-End Developer
            </h3>
            <p class="text-indigo-600 mb-4">PT. Berca Hardayaperkasa</p>
            <p class="text-gray-600 mb-4">
              Joined a company engaged in information technology and IT service provision. This company is also known as a leading information technology consultant in Indonesia.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Implement various AI models into the front end, either through a REST API or directly from the official source.
              </li>
              <li>
                Develop UI using various frameworks such as Next.js and SvelteKit.
              </li>
              <li>
                Developing complex applications that integrate AI technologies to enhance functionality and user experience.
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
            <h3 class="text-xl font-semibold mb-2">
               Front-End Developer
            </h3>
            <p class="text-indigo-600 mb-4">TechInnovate Inc.</p>
            <p class="text-gray-600 mb-4">
              My first professional career as a front-end developer using SvelteKit.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>Developed projects for government agencies.</li>
              <li>
                Implemented File Extraction feature to extract content from a file.              </li>
              <li>Developed Tracking Gmaps Location feature based on Phone Number.</li>
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
            <p class="text-indigo-600 mb-4">Universitas of Gunadarma</p>
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

<style>
  @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css);

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
    font-family:
      Open Sans,
      ui-sans-serif,
      system-ui,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol,
      Noto Color Emoji;
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
    font-family:
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      Liberation Mono,
      Courier New,
      monospace;
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
    background-image: linear-gradient(
      to bottom right,
      var(--tw-gradient-stops)
    );
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
    font-family:
      Open Sans,
      ui-sans-serif,
      system-ui,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol,
      Noto Color Emoji;
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
