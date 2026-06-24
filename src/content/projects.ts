import { Search, CandlestickChart, Network, Sprout, Languages, GraduationCap } from "lucide-react";
import type { Project } from "../types";

/** Accurate project content — synced to the Description/ dossiers + résumés (2026-06-18). */
export const projects: Project[] = [
  {
    slug: "vigilant-ai",
    title: "Vigilant AI",
    icon: Search,
    tags: ["Full-stack", "Computer Vision", "LLM"],
    description:
      "Makes CCTV footage searchable — object detection, image-embedding search, and a vision-language model running together on a serverless A100. Built in 48 hours; won its track at HackIllinois 2026.",
    links: [{ label: "GitHub", href: "https://github.com/thesantoshpant/vigilant-ai" }],
  },
  {
    slug: "oms",
    title: "OMS — Crypto Matching Engine",
    icon: CandlestickChart,
    tags: ["Full-stack"],
    description:
      "A from-scratch crypto order-matching engine in Go — a real limit-order book (price-time priority, partial fills, self-trade prevention) benchmarked at ~4.2M orders/sec, wrapped in a full trading platform: pre-trade risk, P&L, event sourcing with deterministic replay, a FIX 4.4 gateway, live WebSocket data, and a React trading terminal.",
    links: [{ label: "Live", href: "https://theoms.vercel.app" }],
  },
  {
    slug: "raven",
    title: "RAVEN — Context Passports for Multi-Agent AI",
    icon: Network,
    tags: ["Full-stack", "LLM"],
    description:
      "A context compressor for multi-agent AI: instead of dumping your whole memory into every agent, it gives each one only the facts its role needs — about 80–90% fewer tokens, with every standing rule preserved. Runs as a live Fetch.ai agent and an MCP server. Built solo at UC Berkeley CalHacks.",
    links: [{ label: "GitHub", href: "https://github.com/thesantoshpant/raven" }],
  },
  {
    slug: "cropscan",
    title: "CropScan",
    icon: Sprout,
    tags: ["Full-stack", "Computer Vision"],
    description:
      "A crop-disease checker for farmers: a calibrated two-model ensemble (a DINOv2 vision transformer + EfficientNetV2) that abstains when the models disagree, then returns AI treatment guidance. Shipped with login, Docker, and CI.",
    links: [
      { label: "Live", href: "https://cropscan.tech" },
      { label: "GitHub", href: "https://github.com/thesantoshpant/cropscan" },
    ],
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
    icon: GraduationCap,
    tags: ["Full-stack", "LLM"],
    description:
      "An AI study-abroad counselor: a multi-step agent flow behind a human-approval step, persistent per-student memory, AI-graded mock IELTS/TOEFL, Google login (OAuth + JWT), rate limiting, and dollar-cap / kill-switch spend controls.",
    links: [
      { label: "Live", href: "https://okyaar.vercel.app" },
      { label: "GitHub", href: "https://github.com/thesantoshpant/yaar" },
    ],
  },
];
