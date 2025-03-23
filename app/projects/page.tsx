"use client";
import React, { useState, useEffect } from "react"

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Chat Bot App",
      category: "web",
      categoryLabel: "Web Development",
      categoryColor: "yellow",
      description: "Generate a chat bot app using OpenAI",
      completionDate: "Feb 2025",
      completionYear: "2025",
      // completionQuarter: "q1-2025",
      image: "https://i.imgur.com/hIxLBlL.jpg",
      links: "https://svelte-chatbot-openai.vercel.app"
    },
    {
      id: 2,
      title: "Forum App",
      category: "web",
      categoryLabel: "Web Development",
      categoryColor: "yellow",
      description: "A forum app for discussing various topics.",
      completionDate: "Dec 2022",
      completionYear: "2022",
      // completionQuarter: "q4-2022",
      image: "https://imgur.com/8lGdgBd.jpg",
      links: "https://forum-app-seven.vercel.app"
    },
    {
      id: 3,
      title: "Next Js With Contentful (CMS)",
      category: "web",
      categoryLabel: "Web Development",
      categoryColor: "yellow",
      description: "A Next.js app with Contentful as the headless CMS.",
      completionDate: "Apr 2022",
      completionYear: "2022",
      // completionQuarter: "q2-2022",
      image: "https://imgur.com/BpM22hW.jpg",
      links: "https://next-js-with-contentful-site.vercel.app"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "web",
      categoryLabel: "Web Development",
      categoryColor: "yellow",
      description: "A full-fledged e-commerce platform with product listings and payment integration.",
      completionDate: "Oct 2022",
      completionYear: "2022",
      // completionQuarter: "q4-2022",
      image: "https://imgur.com/X6WNVS6.jpg",
      links: "https://ecommerce-sanity-stripe-woad.vercel.app"
    },
    {
      id: 5,
      title: "Notes App",
      category: "web",
      categoryLabel: "Web Development",
      categoryColor: "yellow",
      description: "A simple note-taking app with Dicoding API.",
      completionDate: "Jan 2023",
      completionYear: "2023",
      // completionQuarter: "q1-2023",
      image: "https://imgur.com/3lIbrVc.jpg",
      links: "https://63c66470eb5c30009400856b--taupe-shortbread-9ad6f1.netlify.app"
    },
    {
      id: 6,
      title: "Responsive Web Design",
      category: "web",
      categoryLabel: "Web Development",
      categoryColor: "yellow",
      description: "A responsive web design themed AI.",
      completionDate: "Mar 2024",
      completionYear: "2024",
      // completionQuarter: "q1-2023",
      image: "https://imgur.com/KKqaVnD.jpg",
      links: "https://gpt3-tutorial-wheat.vercel.app"
    },
    {
      id: 7,
      title: "Mock Up UI",
      category: "ui/ux",
      categoryLabel: "UI/UX Design",
      categoryColor: "blue",
      description: "A mockup design for a mobile app.",
      completionDate: "Feb 2022",
      completionYear: "2022",
      // completionQuarter: "q1-2022",
      image: "https://imgur.com/WM4x7fy.jpg",
      links: "https://www.figma.com/design/DhJKuM86lshL3UjCGiPIQZ/Untitled?node-id=0-1&t=75lsMoq77dnCI8X1-1"
    },
    {
      id: 8,
      title: "Chat App",
      category: "web",
      categoryLabel: "Web Development",
      categoryColor: "yellow",
      description: "Full Stack Chat App with Python and Next.js.",
      completionDate: "Mar 2025",
      completionYear: "2025",
      // completionQuarter: "q1-2022",
      image: "https://imgur.com/I6XFx73.jpg",
      links: ""
    }
  ];

  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const projectsPerPage = 6;

  interface Project {
    id: number;
    title: string;
    category: string;
    categoryLabel: string;
    categoryColor: string;
    description: string;
    completionDate: string;
    completionYear: string;
    // completionQuarter: string;
    image: string;
    links: string;
  }

  // COLOR MAPPING FUNCTION
  const getCategoryColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string, text: string, hoverBg: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-800", hoverBg: "hover:bg-blue-200" },
      gray: { bg: "bg-gray-100", text: "text-gray-800", hoverBg: "hover:bg-gray-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-800", hoverBg: "hover:bg-purple-200" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-800", hoverBg: "hover:bg-yellow-200" },
      red: { bg: "bg-red-100", text: "text-red-800", hoverBg: "hover:bg-red-200" },
      green: { bg: "bg-green-100", text: "text-green-800", hoverBg: "hover:bg-green-200" },
      // Add more colors as needed
    };
    
    // Default to gray if color is not in the map
    return colorMap[color] || colorMap.gray;
  };
  
  const applyFilters = () => {
    let result = [...allProjects];
    
    if (categoryFilter) {
      result = result.filter(project => project.category === categoryFilter);
    }
    
    if (dateFilter) {
      // if (dateFilter.includes("q")) {
      //   result = result.filter(project => project.completionQuarter === dateFilter);
      // } else {
        result = result.filter(project => project.completionYear === dateFilter);
      // }
    }
    
    // Sorting
    switch (sortBy) {
      case "recent":
        result.sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime());
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime());
        break;
      case "a-z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    
    setFilteredProjects(result);
    setCurrentPage(1);
  };

  // Apply filters on initial load
  useEffect(() => {
    applyFilters();
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  const ProjectCard = ({ project }: { project: Project }) => {
    const colorClasses = getCategoryColorClasses(project.categoryColor);
    
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
        <div className="h-48 sm:h-52 md:h-56 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 sm:p-5">
          <span className={`inline-block px-3 py-1 text-xs sm:text-sm ${colorClasses.bg} ${colorClasses.text} rounded-full mb-2 ${colorClasses.hoverBg} transition-colors`}>
            {project.categoryLabel}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-between items-center gap-2">
            <span className="text-xs sm:text-sm text-gray-500">Completed: {project.completionDate}</span>
            <a href={`${project.links}`} target="_blank" rel="noopener noreferrer" className="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
              View Details
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="webcrumbs">
      <div className="bg-white p-4 sm:p-6 font-sans w-full mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Our Projects</h1>
          <p className="text-gray-600 text-sm sm:text-base">Explore our latest work and innovations</p>
        </div>

        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-sm relative">
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by Category
                </label>
                <div className="relative z-30">
                  <select 
                    className="px-4 w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none hover:border-indigo-300 transition-colors"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ui">UI/UX Design</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="ai">AI/ML</option>
                    <option value="cloud">Cloud Computing</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
                <div className="relative z-20">
                  <select 
                    className="px-4 w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none hover:border-indigo-300 transition-colors"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  >
                    <option value="">All Dates</option>
                    <option value="2025">2025</option>
                    {/* <option value="q1-2025">Q1 2025</option> */}
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    {/* <option value="q4-2023">Q4 2023</option>
                    <option value="q3-2023">Q3 2023</option>
                    <option value="q2-2023">Q2 2023</option>
                    <option value="q1-2023">Q1 2023</option> */}
                    <option value="2022">2022</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <div className="relative z-10">
                  <select 
                    className="px-4 w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none hover:border-indigo-300 transition-colors"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="recent">Most Recent</option>
                    <option value="oldest">Oldest First</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex md:justify-end">
              <button 
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md shadow-sm transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                onClick={applyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8">
          {currentProjects.length > 0 ? (
            currentProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-lg">No projects match your filters. Try different criteria.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-10 pb-4 overflow-visible">
            <nav
              className="inline-flex flex-wrap rounded-md shadow-sm justify-center gap-1"
              aria-label="Pagination"
            >
              {/* Previous page button */}
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-l-md border ${
                  currentPage === 1 
                    ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors hover:border-indigo-300 group cursor-pointer'
                }`}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className={`h-4 w-4 sm:h-5 sm:w-5 ${currentPage !== 1 ? 'group-hover:text-indigo-600' : ''} transition-colors`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              {pageNumbers.map(number => {
                const showPageNumber = 
                  number === 1 || 
                  number === totalPages || 
                  (number >= currentPage - 1 && number <= currentPage + 1);
                
                const showEllipsisAfter = number === 1 && currentPage > 3;
                const showEllipsisBefore = number === totalPages && currentPage < totalPages - 2;
                
                return showPageNumber ? (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`relative inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 border ${
                      currentPage === number
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors hover:border-indigo-300 hover:text-indigo-600'
                    }`}
                  >
                    {number}
                  </button>
                ) : showEllipsisAfter && number === 1 ? (
                  <span key={`ellipsis-after-${number}`} className="relative hidden sm:inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 bg-white text-sm font-medium">
                    ...
                  </span>
                ) : showEllipsisBefore && number === totalPages ? (
                  <span key={`ellipsis-before-${number}`} className="relative hidden sm:inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 bg-white text-sm font-medium">
                    ...
                  </span>
                ) : null;
              })}
              
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-r-md border ${
                  currentPage === totalPages 
                    ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors hover:border-indigo-300 group cursor-pointer'
                }`}
              >
                <span className="sr-only">Next</span>
                <svg
                  className={`h-4 w-4 sm:h-5 sm:w-5 ${currentPage !== totalPages ? 'group-hover:text-indigo-600' : ''} transition-colors`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects