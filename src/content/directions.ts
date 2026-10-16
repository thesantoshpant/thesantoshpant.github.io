import type { Direction } from "../types";
import { site } from "./site";

/** Three research directions. [n] tokens link to the publication entries. */
export const directions: Direction[] = [
  {
    lead: "Evaluation and audit methodology for remote sensing.",
    body:
      "Before trusting a benchmark number I ask whether it survives a different label source, a leakage-controlled split, or a stronger baseline. In [1], replacing field polygons with ESA WorldCover cropland as the label raises random-forest AUROC by up to 0.34, and a from-scratch U-Net beats a frozen Prithvi probe in five of six countries. The same question runs through [3].",
  },
  {
    lead: "Calibrated uncertainty for decision support.",
    body:
      "I build prediction intervals meant for district-level decisions and report when they are too wide to act on. [2] is the first case, for the 2025 paddy season in Nepal's Madhesh Province.",
  },
  {
    lead: "Transfer across regions and sensors.",
    body:
      "Labels are dense in some places and missing in others, so I test what a model trained where labels exist can still do where they do not. In my senior project, a model trained only on California crop-map labels is applied to NISAR radar images of Nepal's Terai and checked against an independent map in Nepal and field survey points in Pakistan (see Current work).",
  },
];

/** Closing paragraph of the research section. */
export const next =
  "In a PhD I want to keep working on three questions. The first is evaluation that holds up when labels are sparse or second-hand, so a benchmark number means the same thing in Bihar as it does in Iowa. The second is uncertainty that the people using a map or a forecast can act on, which includes saying plainly when an interval is too wide. The third is transfer across regions and sensors, where a few hundred good labels in one place should be worth something in the next. I expect to keep testing these on South Asian agriculture. The methods are general, and I want to apply them to other Earth observation problems such as hazards, water, and land change. New sensors matter here too. NISAR's radar sees through monsoon cloud, and I use it in my senior project.";

/** The "Current work" paragraphs. */
export const currentWork = [
  `My Data Science senior project, supervised by [Prof. Andrew Leahy](${site.confirm.leahy}) (Mathematics, Knox College), uses NISAR L-band radar to map monsoon rice in Nepal's Terai. I rebuilt the Sentinel-1 rice rule that ICIMOD and Nepal's agriculture ministry use, for 21 Terai districts from 2021 to 2023. Against an independent map, it finds a median 32 percent of staple cropland and fails in the far west. I then trained a temporal attention model only on California crop-map labels and applied it to NISAR's 2026 images of Nepal. Inside the ministry's agricultural zone, it separates staple cropland from non-crop land better than the rule (AUROC 0.895 vs 0.746 in Bara, 0.878 vs 0.656 in Chitwan). On field points from a 2023 Asian Development Bank survey in Pakistan, it separates rice from non-crop land (AUROC 0.81 to 0.96) but not reliably from other summer crops, mostly sorghum (0.64 to 0.82).`,
  "From December 2026 to February 2027, I will be a Data Science Intern at the Smithsonian's National Zoo and Conservation Biology Institute, supervised by Dr. James Hassell (remote, part time). The project uses geospatial foundation models to classify watersheds and ecosystem types, starting in Kenya.",
];
