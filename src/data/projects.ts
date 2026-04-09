import { projectsSchema, type Project } from "./schema";

const projectsData: Project[] = [
  {
    id: "agentos",
    name: "AgentOS",
    summary: "A way to automate everything, even automation itself. An agentic AI platform for building autonomous workflows.",
    url: "https://github.com/agents-os/agentos",
    isAgenticAIHighlight: true,
    order: 1
  },
  {
    id: "chatbot",
    name: "AI Chatbot",
    summary: "A conversational AI chatbot with context awareness and natural language understanding capabilities.",
    url: "https://github.com/Abdulhadi446/chatbot",
    isAgenticAIHighlight: true,
    order: 2
  },
  {
    id: "cores",
    name: "Cores",
    summary: "A programming language like CUDA but designed for CPU parallel processing and optimization.",
    url: "https://github.com/Abdulhadi446/cores",
    isAgenticAIHighlight: false,
    order: 3
  },
  {
    id: "html-os",
    name: "HTML-OS",
    summary: "A browser-based operating system interface built entirely with HTML, CSS, and JavaScript.",
    url: "https://github.com/Abdulhadi446/HTML-OS",
    isAgenticAIHighlight: false,
    order: 4
  },
  {
    id: "sodeom",
    name: "Sodeom",
    summary: "A custom search engine with intelligent indexing and ranking algorithms.",
    url: "https://github.com/sodeom/sodeom",
    isAgenticAIHighlight: false,
    order: 5
  },
  {
    id: "games",
    name: "Games Collection",
    summary: "A curated collection of 500+ HTML5 games with categorization and search functionality.",
    url: "https://github.com/Abdulhadi446/games",
    isAgenticAIHighlight: false,
    order: 6
  },
  {
    id: "image2emoji",
    name: "Image2Emoji",
    summary: "Convert images into emoji representations using computer vision and pattern matching.",
    url: "https://github.com/Abdulhadi446/image2emoji",
    isAgenticAIHighlight: false,
    order: 7
  },
  {
    id: "wikipedia",
    name: "Wikipedia Clone",
    summary: "A Wikipedia-style platform with markdown editing, categories, and search capabilities.",
    url: "https://github.com/Abdulhadi446/wikipedia",
    isAgenticAIHighlight: false,
    order: 8
  },
  {
    id: "game-publisher",
    name: "GamePublisher",
    summary: "Platform for publishing and distributing HTML5 games with analytics and monetization.",
    url: "https://github.com/Abdulhadi446/GamePublisher",
    isAgenticAIHighlight: false,
    order: 9
  },
  {
    id: "secure-messaging",
    name: "SecureMessaging",
    summary: "End-to-end encrypted messaging platform with ephemeral messages and secure key exchange.",
    url: "https://github.com/Abdulhadi446/SecureMessaging",
    isAgenticAIHighlight: false,
    order: 10
  }
];

export const projects = projectsSchema.parse(projectsData).sort((a, b) => a.order - b.order);
