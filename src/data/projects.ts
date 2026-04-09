import { projectsSchema, type Project } from "./schema";

const projectsData: Project[] = [
  {
    id: "project-1",
    name: "upptime",
    summary: "TO check my websites visiblity an uptime.",
    url: "https://github.com/Abdulhadi446/upptime",
    isAgenticAIHighlight: false,
    order: 1
  },
  {
    id: "project-2",
    name: "Mouse-To_Game",
    summary: "Repository: Abdulhadi446/Mouse-To_Game.",
    url: "https://github.com/Abdulhadi446/Mouse-To_Game",
    isAgenticAIHighlight: false,
    order: 2
  },
  {
    id: "project-3",
    name: "sodeom",
    summary: "the sodeom search engine sodeom.com",
    url: "https://github.com/sodeom/sodeom",
    isAgenticAIHighlight: false,
    order: 3
  },
  {
    id: "project-4",
    name: "my-model",
    summary: "Repository: Abdulhadi446/my-model.",
    url: "https://github.com/Abdulhadi446/my-model",
    isAgenticAIHighlight: false,
    order: 4
  },
  {
    id: "project-5",
    name: "agentos",
    summary: "A way to automate everything even anutomation.",
    url: "https://github.com/agents-os/agentos",
    isAgenticAIHighlight: true,
    order: 5
  },
  {
    id: "project-6",
    name: "moltbook-posts",
    summary: "just some posts idea for moltbook",
    url: "https://github.com/Abdulhadi446/moltbook-posts",
    isAgenticAIHighlight: false,
    order: 6
  },
  {
    id: "project-7",
    name: "chatbot",
    summary: "A simple chatbot",
    url: "https://github.com/Abdulhadi446/chatbot",
    isAgenticAIHighlight: true,
    order: 7
  },
  {
    id: "project-8",
    name: "mcq",
    summary: "Repository: Abdulhadi446/mcq.",
    url: "https://github.com/Abdulhadi446/mcq",
    isAgenticAIHighlight: false,
    order: 8
  },
  {
    id: "project-9",
    name: "AgentsOSWeb",
    summary: "AGENTO\"S website",
    url: "https://github.com/agents-os/AgentsOSWeb",
    isAgenticAIHighlight: false,
    order: 10
  },
  {
    id: "project-10",
    name: "clean-summary",
    summary: "Repository: Abdulhadi446/clean-summary.",
    url: "https://github.com/Abdulhadi446/clean-summary",
    isAgenticAIHighlight: false,
    order: 11
  },
  {
    id: "project-11",
    name: "email-signup",
    summary: "Repository: Abdulhadi446/email-signup.",
    url: "https://github.com/Abdulhadi446/email-signup",
    isAgenticAIHighlight: false,
    order: 13
  },
  {
    id: "project-12",
    name: "Abdulhadi446.github.io",
    summary: "Repository: Abdulhadi446/Abdulhadi446.github.io.",
    url: "https://github.com/Abdulhadi446/Abdulhadi446.github.io",
    isAgenticAIHighlight: false,
    order: 14
  },
  {
    id: "project-13",
    name: "public-apis",
    summary: "A collective list of free APIs",
    url: "https://github.com/Abdulhadi446/public-apis",
    isAgenticAIHighlight: false,
    order: 15
  },
  {
    id: "project-14",
    name: "games",
    summary: "A list of 500+ games",
    url: "https://github.com/Abdulhadi446/games",
    isAgenticAIHighlight: false,
    order: 16
  },
  {
    id: "project-15",
    name: "games-of-games",
    summary: "Repository: Abdulhadi446/games-of-games.",
    url: "https://github.com/Abdulhadi446/games-of-games",
    isAgenticAIHighlight: false,
    order: 17
  },
  {
    id: "project-16",
    name: "cores",
    summary: "this is a progrming langauge like cuda but for CPU's.",
    url: "https://github.com/Abdulhadi446/cores",
    isAgenticAIHighlight: false,
    order: 18
  },
  {
    id: "project-17",
    name: "Web-Tools",
    summary: "A set of smeple web utilities an tool.",
    url: "https://github.com/Abdulhadi446/Web-Tools",
    isAgenticAIHighlight: false,
    order: 19
  },
  {
    id: "project-18",
    name: "HTML-basics",
    summary: "Learning HTML in 10 days.",
    url: "https://github.com/Abdulhadi446/HTML-basics",
    isAgenticAIHighlight: false,
    order: 21
  },
  {
    id: "project-19",
    name: "SecureMessaging",
    summary: "Repository: Abdulhadi446/SecureMessaging.",
    url: "https://github.com/Abdulhadi446/SecureMessaging",
    isAgenticAIHighlight: false,
    order: 22
  },
  {
    id: "project-20",
    name: "blogs",
    summary: "This is simple blogs publishing site.",
    url: "https://github.com/Abdulhadi446/blogs",
    isAgenticAIHighlight: false,
    order: 23
  },
  {
    id: "project-21",
    name: "animations",
    summary: "there are some animation. made using manim",
    url: "https://github.com/Abdulhadi446/animations",
    isAgenticAIHighlight: false,
    order: 25
  },
  {
    id: "project-22",
    name: "image2emoji",
    summary: "This can convert images into emojis.",
    url: "https://github.com/Abdulhadi446/image2emoji",
    isAgenticAIHighlight: false,
    order: 26
  },
  {
    id: "project-23",
    name: "wikipedia",
    summary: "A simple website like wikipedia",
    url: "https://github.com/Abdulhadi446/wikipedia",
    isAgenticAIHighlight: false,
    order: 28
  },
  {
    id: "project-24",
    name: "HTML-OS",
    summary: "An OS run on HTML.",
    url: "https://github.com/Abdulhadi446/HTML-OS",
    isAgenticAIHighlight: false,
    order: 29
  },
  {
    id: "project-25",
    name: "MyProjects",
    summary: "These are my projects",
    url: "https://github.com/Abdulhadi446/MyProjects",
    isAgenticAIHighlight: false,
    order: 30
  },
  {
    id: "project-26",
    name: "GamePublisher",
    summary: "GamePublisher site for publishing HTML games",
    url: "https://github.com/Abdulhadi446/GamePublisher",
    isAgenticAIHighlight: false,
    order: 31
  }
];

export const projects = projectsSchema.parse(projectsData).sort((a, b) => a.order - b.order);
