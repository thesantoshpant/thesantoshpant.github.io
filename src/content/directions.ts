import type { Direction } from "../types";
import { site } from "./site";

/** Three research directions. [n] tokens link to the publication entries. */
export const directions: Direction[] = [
  {
    lead: "Evaluation and audit methodology for remote sensing.",
    body:
      "Before trusting a benchmark number I ask whether it survives a different label source, a leakage-controlled split, or a stronger baseline. In [1], replacing field polygons with ESA WorldCover cropland as the label raises random-forest AUROC by up to 0.34, and a from-scratch U-Net beats a frozen Prithvi probe in five of six countries. The same question runs through [3] and [4].",
  },
  {
    lead: "Calibrated uncertainty for decision support.",
    body:
      "I build prediction intervals meant for district-level decisions and report when they are too wide to act on. [2] is the first case, for the 2025 paddy season in Nepal's Madhesh Province.",
  },
  {
    lead: "Transfer across regions and local correction of global maps.",
    body:
      "When a locally trained model disagrees with a global product such as ESA WorldCereal, when should the local model win? [5] works this out for cropland in the Terai.",
  },
];

/** Closing paragraph of the research section. */
export const next =
  "In a PhD I want to keep working on three questions. The first is evaluation that holds up when labels are sparse or second-hand, so a benchmark number means the same thing in Bihar as it does in Iowa. The second is uncertainty that the people using a map or a forecast can act on, which includes saying plainly when an interval is too wide. The third is transfer across regions and sensors, where a few hundred good labels in one place should be worth something in the next. I expect to keep testing these on South Asian agriculture. The methods are general, and I want to apply them to other Earth observation problems such as hazards, water, and land change. New sensors matter here too. NISAR's radar sees through monsoon cloud, and I am starting to work with it now.";

/** The "Current work" paragraph. */
export const currentWork = `My Data Science senior project, supervised by [Prof. Andrew Leahy](${site.confirm.leahy}) (Mathematics, Knox College), asks what sparse observation schedules can and cannot recover about seasonal signals in the new NISAR L-band radar data over Nepal's Terai. The question is about identifiability. Given the dates a satellite actually observed, which seasonal differences between cropland and other land can any method recover, and at what spatial scale.`;
