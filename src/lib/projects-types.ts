export interface Project {
    id: number;
    title: string;
    category: string;
    categoryLabel: string;
    categoryColor: string;
    description: string;
    completionDate: string;
    completionYear: string;
    image: string;
    links: string;
}

export const allProjects: Project[] = [
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
        category: "ui",
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

export function getCategoryColorClasses(color: string) {
    const colorMap: Record<string, { bg: string, text: string, hoverBg: string }> = {
        blue: { bg: "bg-blue-100", text: "text-blue-800", hoverBg: "hover:bg-blue-200" },
        gray: { bg: "bg-gray-100", text: "text-gray-800", hoverBg: "hover:bg-gray-200" },
        purple: { bg: "bg-purple-100", text: "text-purple-800", hoverBg: "hover:bg-purple-200" },
        yellow: { bg: "bg-yellow-100", text: "text-yellow-800", hoverBg: "hover:bg-yellow-200" },
        red: { bg: "bg-red-100", text: "text-red-800", hoverBg: "hover:bg-red-200" },
        green: { bg: "bg-green-100", text: "text-green-800", hoverBg: "hover:bg-green-200" },
    };
    
    return colorMap[color] || colorMap.gray;
}