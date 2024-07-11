<script>
  import { onMount } from "svelte";
  import { theme } from "../stores/theme.js";

  let currentTheme;

  theme.subscribe((value) => {
    currentTheme = value;
  });

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  let activeTab = "";

  function updateActiveTab() {
    const sections = ["about", "projects", "experiences", "skills"];
    let tabFound = false;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeTab = sectionId;
          tabFound = true;
          break;
        }
      }
    }

    if (!tabFound) {
      activeTab = "";
    }
  }

  onMount(() => {
    updateActiveTab();

    window.addEventListener("scroll", updateActiveTab);

    return () => {
      window.removeEventListener("scroll", updateActiveTab);
    };
  });
</script>

<nav class="flex justify-between p-4 mx-32">
  <li
    class="list-none text-[#6D786A] text-[14px] cursor-pointer transition-all duration-300 ease-in-out
      {currentTheme === 'light' ? 'hover:bg-[#6D786A] hover:text-white' : 'hover:bg-[#87AF76] hover:text-white'} 
      {activeTab === 'about' ? (currentTheme === 'dark' ? 'bg-[#87AF76] text-white' : 'bg-[#6D786A] text-white') : ''}"
    on:click={() => scrollToSection("about")}
  >
    About Me
  </li>
  <li
    class="list-none text-[#6D786A] text-[14px] cursor-pointer transition-all duration-300 ease-in-out
      {currentTheme === 'light' ? 'hover:bg-[#6D786A] hover:text-white' : 'hover:bg-[#87AF76] hover:text-white'} 
      {activeTab === 'projects' ? (currentTheme === 'dark' ? 'bg-[#87AF76] text-white' : 'bg-[#6D786A] text-white') : ''}"
    on:click={() => scrollToSection("projects")}
  >
    Projects
  </li>
  <li
    class="list-none text-[#6D786A] text-[14px] cursor-pointer transition-all duration-300 ease-in-out
      {currentTheme === 'light' ? 'hover:bg-[#6D786A] hover:text-white' : 'hover:bg-[#87AF76] hover:text-white'} 
      {activeTab === 'experiences' ? (currentTheme === 'dark' ? 'bg-[#87AF76] text-white' : 'bg-[#6D786A] text-white') : ''}"
    on:click={() => scrollToSection("experiences")}
  >
    Experiences
  </li>
  <li
    class="list-none text-[#6D786A] text-[14px] cursor-pointer transition-all duration-300 ease-in-out
      {currentTheme === 'light' ? 'hover:bg-[#6D786A] hover:text-white' : 'hover:bg-[#87AF76] hover:text-white'} 
      {activeTab === 'skills' ? (currentTheme === 'dark' ? 'bg-[#87AF76] text-white' : 'bg-[#6D786A] text-white') : ''}"
    on:click={() => scrollToSection("skills")}
  >
    Skills
  </li>
</nav>

<style>
  nav {
    display: flex;
    gap: 16px;
  }

  li {
    padding: 4px 8px;
    border-radius: 9999px; /* fully rounded corners */
    position: relative;
  }
</style>
