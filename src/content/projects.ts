import { Search, CandlestickChart, Network, Sprout, Languages, GraduationCap } from "lucide-react";
import type { Project } from "../types";

/**
 * Project content, synced to the Description/ dossiers. Updated 2026-09-09:
 * official HackIllinois project name is "Vigilante AI" (Devpost record); no dashes, no filler.
 */
export const projects: Project[] = [
  {
    slug: "vigilant-ai",
    title: "Vigilante AI",
    icon: Search,
    tags: ["Full-stack", "Computer Vision", "LLM"],
    description:
      "Makes CCTV footage searchable. Object detection, image-embedding search, and a vision-language model run together on a serverless A100, then a chat interface answers questions over the footage. Built in 48 hours with one teammate; won the Actian VectorAI track at HackIllinois 2026.",
    links: [{ label: "GitHub", href: "https://github.com/thesantoshpant/vigilant-ai" }],
  },
  {
    slug: "cropscan",
    title: "CropScan",
    icon: Sprout,
    tags: ["Full-stack", "Computer Vision"],
    description:
      "A crop-disease checker for small growers. A calibrated two-model ensemble (a DINOv2 vision transformer with LoRA and EfficientNetV2) commits to a diagnosis only when both models agree and otherwise asks for a better photo; it reports 75.6 percent accuracy on real field photos next to 99.7 percent on lab images. Three-person team; I built the ML pipeline and most of the backend.",
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
      "A published npm package and platform that translates a website with no per-language work: it reads the text on each component, fills in AI translations on first load, and caches them. Built for South Asian languages, with register-aware and code-mixed locales and a compliance lock for regulated strings.",
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/bhasha-js" },
      { label: "GitHub", href: "https://github.com/thesantoshpant/bhashajs" },
    ],
  },
  {
    slug: "oms",
    title: "OMS: Crypto Matching Engine",
    icon: CandlestickChart,
    tags: ["Full-stack"],
    description:
      "A from-scratch crypto order-matching engine in Go: a real limit-order book (price-time priority, partial fills, self-trade prevention) benchmarked at about 4.2M orders per second, wrapped in a trading platform with pre-trade risk, P&L, event sourcing with deterministic replay, a FIX 4.4 gateway, live WebSocket data, and a React trading terminal.",
    links: [{ label: "Live", href: "https://theoms.vercel.app" }],
  },
  {
    slug: "raven",
    title: "RAVEN: Context Passports for Multi-Agent AI",
    icon: Network,
    tags: ["Full-stack", "LLM"],
    description:
      "A context compressor for multi-agent AI. Instead of dumping the whole memory into every agent, it gives each one only the facts its role needs: about 80 to 90 percent fewer tokens, with every standing rule preserved. Runs as a live Fetch.ai agent and an MCP server. Built solo at UC Berkeley CalHacks.",
    links: [{ label: "GitHub", href: "https://github.com/thesantoshpant/raven" }],
  },
  {
    slug: "yaar",
    title: "Yaar",
    icon: GraduationCap,
    tags: ["Full-stack", "LLM"],
    description:
      "A free AI study-abroad counselor for South Asian students: document-grounded F-1 visa mock interviews, adaptive IELTS and TOEFL practice, a multi-step agent flow behind a human-approval step, persistent per-student memory, Google login, and hard per-day spend caps.",
    links: [
      { label: "Live", href: "https://okyaar.vercel.app" },
      { label: "GitHub", href: "https://github.com/thesantoshpant/yaar" },
    ],
  },
];
