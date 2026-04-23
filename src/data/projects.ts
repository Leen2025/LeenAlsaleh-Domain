import { siteProfile } from "./site";
import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "AI Resume Analyzer (VeriCV)",
    description:
      "An AI-powered platform that analyzes resume quality, structure, and impact, then provides clear suggestions to strengthen content.",
    stack: ["React", "Django", "AI APIs", "PostgreSQL"],
    link: siteProfile.links.project
  },
  {
    title: "Plant Facts App",
    description:
      "A Flutter mobile app that presents plant information with dynamic AI-generated facts on every visit in a clean, lightweight UI.",
    stack: ["Flutter", "Clean Architecture", "Cubit", "API Integration"],
    link: siteProfile.links.portfolio
  },
  {
    title: "Automation Operations Hub",
    description:
      "A workflow automation system that orchestrates repetitive business operations, reducing manual steps and improving response time.",
    stack: ["n8n", "Webhooks", "OpenAI", "REST APIs"],
    link: siteProfile.links.github
  },
  {
    title: "Misbar Product Enhancements",
    description:
      "Contributions focused on frontend clarity, data-flow consistency, and user-focused interaction improvements in production screens.",
    stack: ["React", "TypeScript", "UX", "API Integration"],
    link: siteProfile.links.portfolio
  },
  {
    title: "Technical Mentorship Toolkit",
    description:
      "A curated learning system for programming fundamentals with practical exercises and architecture-first implementation patterns.",
    stack: ["Curriculum Design", "JavaScript", "Problem Solving", "Code Review"],
    link: siteProfile.links.github
  }
];
