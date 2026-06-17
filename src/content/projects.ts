import { Search, Languages, Mic, Sprout } from "lucide-react";
import type { Project } from "../types";

/** Verbatim content from the spec §4. Every claim/link matches it exactly. */
export const projects: Project[] = [
  {
    slug: "vigilant-ai",
    title: "Vigilant AI",
    icon: Search,
    tags: ["Full-stack", "Computer Vision", "LLM"],
    description:
      "Makes CCTV footage searchable — object detection, image-embedding search, and a vision-language model running together. Built in 48 hours; won its track at HackIllinois 2026.",
    links: [{ label: "GitHub", href: "https://github.com/thesantoshpant/vigilant-ai" }],
  },
  {
    slug: "bhasha-js",
    title: "bhasha-js",
    icon: Languages,
    tags: ["Full-stack", "LLM"],
    description:
      "A published npm package that translates a website with no per-language work: it reads the text on each component, fills in AI translations on first load, and caches them.",
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/bhasha-js" },
      { label: "GitHub", href: "https://github.com/thesantoshpant/bhashajs" },
    ],
  },
  {
    slug: "yaar",
    title: "Yaar",
    icon: Mic,
    tags: ["Full-stack", "LLM"],
    description:
      "An AI study-abroad counselor with real-time voice (WebSocket), a multi-step agent flow with a human-approval step, Google login, Stripe payments, and spend limits.",
    links: [{ label: "GitHub", href: "https://github.com/thesantoshpant/yaar" }],
  },
  {
    slug: "cropscan",
    title: "CropScan",
    icon: Sprout,
    tags: ["Full-stack", "Computer Vision"],
    description:
      "A crop-disease checker for farmers: two CNNs classify a leaf photo and the app returns treatment guidance. Shipped with login, Docker, and CI.",
    links: [
      { label: "Live", href: "https://cropscan.tech" },
      { label: "GitHub", href: "https://github.com/thesantoshpant/cropscan" },
    ],
  },
];
