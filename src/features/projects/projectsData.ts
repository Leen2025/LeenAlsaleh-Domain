import { Project } from "../../core/types/project";
import { siteProfile } from "../../core/config/site";

export const projects: Project[] = [
  {
    title: "VeriCV",
    description: "A professional verification platform focused on trust, smart workflows, and clean experience.",
    stack: ["React", "TypeScript", "Node", "Automation"],
    link: siteProfile.links.project
  },
  {
    title: "Misbar",
    description: "Product contribution in structured data flow and user-focused interface quality improvements.",
    stack: ["Frontend", "UX", "API Integration"],
    link: siteProfile.links.portfolio
  },
  {
    title: "UI/UX Concept Portfolio",
    description: "Creative interaction concepts and visual systems for modern digital brands.",
    stack: ["Figma", "Design Systems", "Prototyping"],
    link: siteProfile.links.portfolio
  },
  {
    title: "Automation & AI Agents",
    description: "Agent-based flows and n8n automations that reduce operation cost and accelerate delivery.",
    stack: ["n8n", "OpenAI", "Workflow APIs"],
    link: siteProfile.links.github
  }
];
