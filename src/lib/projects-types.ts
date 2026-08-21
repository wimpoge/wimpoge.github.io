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
        image: "https://i.imgur.com/hIxLBlLl.jpg",
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
        image: "https://i.imgur.com/8lGdgBdl.jpg",
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
        image: "https://i.imgur.com/BpM22hWl.jpg",
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
        image: "https://i.imgur.com/X6WNVS6l.jpg",
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
        image: "https://i.imgur.com/3lIbrVcl.jpg",
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
        image: "https://i.imgur.com/KKqaVnDl.jpg",
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
        image: "https://i.imgur.com/WM4x7fyl.jpg",
        links: "https://www.figma.com/design/DhJKuM86lshL3UjCGiPIQZ/Untitled?node-id=0-1&t=75lsMoq77dnCI8X1-1"
      },
      {
        id: 8,
        title: "Advanced Prompting Anime Assistant",
        category: "ai",
        categoryLabel: "AI/ML",
        categoryColor: "violet",
        description: "An interactive Gradio application demonstrating various AI prompting techniques using OpenAI's GPT-3.5 model to answer anime-related questions.",
        completionDate: "Apr 2025",
        completionYear: "2025",
        image: "",
        links: "https://www.youtube.com/watch?v=9-zFCJIf_9E"
      },   
      {
        id: 9,
        title: "Image Classification Using CNN",
        category: "ai",
        categoryLabel: "AI/ML",
        categoryColor: "violet",
        description: "contains code for a CNN-based image classification model that categorizes images into six classes: buildings, forest, glacier, mountain, sea, and street.",
        completionDate: "May 2025",
        completionYear: "2025",
        image: "",
        links: "https://www.youtube.com/watch?v=nCgX81Zuw_o"
      },   
      {
        id: 10,
        title: "Retrieval-Augmented Generation PDF QnA",
        category: "ai",
        categoryLabel: "AI/ML",
        categoryColor: "violet",
        description: "A simple Retrieval-Augmented Generation (RAG) application for answering questions about PDF documents.",
        completionDate: "Apr 2025",
        completionYear: "2025",
        image: "",
        links: "https://www.youtube.com/watch?v=Ps_Is3ni6bw"
      },   
      {
        id: 11,
        title: "Agentic OpenAI Get Weather",
        category: "ai",
        categoryLabel: "AI/ML",
        categoryColor: "violet",
        description: "This project is a Python-based agentic AI assistant leveraging OpenAI's GPT models.",
        completionDate: "May 2025",
        completionYear: "2025",
        image: "",
        links: "https://www.youtube.com/watch?v=F2xmeRBPEd4"
      },   
      {
        id: 12,
        title: "Visual AI Learning",
        category: "ai",
        categoryLabel: "AI/ML",
        categoryColor: "violet",
        description: "This roadmap is for people who want to become an AI engineer but have never written an LLM line of code before — the absolute beginner. It is not a reference manual. It is a guided tour where every abstract concept has a button you can click and watch happen.",
        completionDate: "May 2026",
        completionYear: "2026",
        image: "",
        links: "https://www.youtube.com/watch?v=lb8E6Kb5T0E"
      },   
      {
        id: 13,
        title: "NeuralPath",
        category: "ai",
        categoryLabel: "AI/ML",
        categoryColor: "violet",
        description: "A comprehensive, interactive learning app for mastering AI Engineering concepts based on the complete roadmap.sh/ai-engineer curriculum.",
        completionDate: "Jun 2025",
        completionYear: "2025",
        image: "",
        links: "https://www.youtube.com/watch?v=hgnCHFET-3o"
      },   
      {
        id: 14,
        title: "CrewAI Market Analysis",
        category: "ai",
        categoryLabel: "AI/ML",
        categoryColor: "violet",
        description: "An AI-powered market research and analysis tool built with CrewAI that provides comprehensive insights into emerging technology markets, specifically focused on AI healthcare solutions.",
        completionDate: "Jun 2025",
        completionYear: "2025",
        image: "",
        links: "https://www.youtube.com/watch?v=VxKNHLvpkCM"
      },   
];

export function getCategoryColorClasses(color: string) {
    // Dark-theme chips: translucent fill + matching border, one hue per category.
    const colorMap: Record<string, { bg: string, text: string, hoverBg: string }> = {
        yellow: { bg: "bg-amber/10 border-amber/30", text: "text-amber", hoverBg: "group-hover:bg-amber/20" },
        blue: { bg: "bg-cyan/10 border-cyan/30", text: "text-cyan", hoverBg: "group-hover:bg-cyan/20" },
        violet: { bg: "bg-violet/10 border-violet/30", text: "text-violet", hoverBg: "group-hover:bg-violet/20" },
        rose: { bg: "bg-rose/10 border-rose/30", text: "text-rose", hoverBg: "group-hover:bg-rose/20" },
        green: { bg: "bg-accent/10 border-accent/30", text: "text-accent", hoverBg: "group-hover:bg-accent/20" },
        gray: { bg: "bg-raised border-line-bright", text: "text-dim", hoverBg: "group-hover:bg-line" },
    };

    return colorMap[color] || colorMap.gray;
}

// Parse "MMM YYYY" (e.g. "Feb 2025", "May 2026") to a timestamp. Using
// `new Date(str)` is unreliable across browsers (Firefox returns Invalid
// Date for this format), so we parse manually.
const MONTHS: Record<string, number> = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

export function parseCompletionDate(str: string): number {
    const match = str?.trim().match(/^([A-Za-z]{3})[A-Za-z]*\s+(\d{4})$/);
    if (!match) return 0;
    const month = MONTHS[match[1].toLowerCase()];
    if (month === undefined) return 0;
    return Date.UTC(parseInt(match[2], 10), month, 1);
}

// Extract the YouTube video ID from any common YouTube URL format.
export function getYouTubeId(url: string): string | null {
    try {
        const u = new URL(url);
        const host = u.hostname.replace(/^www\./, "");
        if (host === "youtu.be") {
            return u.pathname.slice(1) || null;
        }
        if (host === "youtube.com" || host === "m.youtube.com") {
            if (u.pathname === "/watch") return u.searchParams.get("v");
            const embedMatch = u.pathname.match(/^\/(embed|shorts|v)\/([^/?]+)/);
            if (embedMatch) return embedMatch[2];
        }
        return null;
    } catch {
        return null;
    }
}

// URL to load in the iframe. Converts YouTube watch URLs to embeddable ones.
export function getEmbedUrl(url: string): string {
    const ytId = getYouTubeId(url);
    if (ytId) return `https://www.youtube.com/embed/${ytId}?rel=0`;
    return url;
}

// Thumbnail to show on the project card. Falls back to the YouTube poster
// frame when the project has no explicit image, or to a generic placeholder.
export function getProjectThumbnail(project: Project): string {
    if (project.image) return project.image;
    const ytId = getYouTubeId(project.links);
    if (ytId) return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    return "https://placehold.co/600x400/e0e7ff/4f46e5?text=Project+Image";
}