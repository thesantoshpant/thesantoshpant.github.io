import type { LucideIcon } from "lucide-react";

/** Project filter categories. `All` is the implicit default (not a tag). */
export type ProjectTag = "Full-stack" | "Computer Vision" | "LLM";

export type ProjectFilter = "All" | ProjectTag;

export interface ProjectLink {
  label: "GitHub" | "npm" | "Live" | "Paper";
  href: string;
}

export interface Project {
  /** Stable slug used for keys and the screenshot filename in public/thumbs/. */
  slug: string;
  title: string;
  /** lucide-react icon shown in the textured placeholder when there's no screenshot. */
  icon: LucideIcon;
  /** Optional screenshot filename in public/thumbs/ (e.g. "vigilant-ai.png"). When
   *  set and the file loads, it renders as a 16:9 image in place of the placeholder. */
  thumb?: string;
  tags: ProjectTag[];
  description: string;
  links: ProjectLink[];
}

export interface ResearchItem {
  title: string;
  /** Mono status / venue pill, e.g. "Under review / ACM SIGSPATIAL 2026". */
  status: string;
  description: string;
  link?: { label: string; href: string };
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  context?: string;
}

export interface Fact {
  label: string;
  value: string;
}
