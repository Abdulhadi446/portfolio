import { collaborators } from "./collaborators";
import { profile } from "./profile";
import { projects } from "./projects";
import { socialLinks } from "./social-links";

export const defaultSiteConfig = {
  profile,
  socialLinks,
  projects,
  collaborators,
  labels: {
    siteHeader: "Trillionir Portfolio",
    connectTitle: "Connect",
    projectsTitle: "Projects",
    collaboratorsTitle: "Other Trillionaires"
  },
  theme: {
    bg: "#0b1220",
    surface: "#131d2f",
    surface2: "#18243a",
    text: "#e2e8f0",
    muted: "#94a3b8",
    accent: "#22d3ee",
    accent2: "#60a5fa",
    danger: "#ef4444",
    focus: "#facc15"
  }
};

export type SiteConfig = typeof defaultSiteConfig;
