import type { SoftwareItem } from "../types";
import { site } from "./site";

export const softwareIntro = "I also build software. Two projects are below.";

export const software: SoftwareItem[] = [
  {
    name: "CropScan",
    href: "https://cropscan.tech",
    body:
      "Crop-disease diagnosis for small growers, built as a DINOv2 with LoRA and EfficientNetV2 ensemble that commits only when both models agree and otherwise asks for a better photo. Accuracy is 75.6 percent on real field photos and 99.7 percent on lab images. Three-person team. I built the ML pipeline and the backend.",
    links: [
      { label: "cropscan.tech", href: "https://cropscan.tech" },
      { label: "GitHub", href: "https://github.com/thesantoshpant/cropscan" },
    ],
  },
  {
    name: "Vigilant AI",
    href: "https://github.com/thesantoshpant/vigilant-ai",
    body: `Makes CCTV footage searchable with object detection, image-embedding search, and a vision-language model behind a chat interface. Built in 48 hours with one teammate. It won the Actian VectorAI DB sponsor track at [HackIllinois 2026](${site.confirm.hackIllinoisAward}).`,
    links: [{ label: "GitHub", href: "https://github.com/thesantoshpant/vigilant-ai" }],
  },
];
