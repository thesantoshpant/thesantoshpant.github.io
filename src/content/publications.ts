import type { Dated, Publication } from "../types";
import { site } from "./site";

/** Every status word is literal: accepted, manuscript. */
export const publications: Publication[] = [
  {
    id: 1,
    status: "Accepted",
    title:
      "Auditing GeoFM Evaluation for Field-Extent Segmentation: Label Proxies, Baselines, and When Frozen Features Match Fine-tuning",
    authors: "Santosh Pant",
    venue: "Transactions on Machine Learning Research (TMLR), 2026.",
    note: "Single author. Accepted August 2026.",
    summary:
      "Label proxies and baseline choice reorder geospatial foundation-model rankings for field-extent segmentation across six countries, and a frozen decoder is TOST-equivalent to full fine-tuning within 0.02 AUROC in 9 of 12 region-by-model cells while training about 110 times fewer parameters.",
    links: [
      { label: "OpenReview (reviews public)", href: "https://openreview.net/forum?id=qRXVTe1yYp" },
      { label: "Code", href: "https://github.com/thesantoshpant/auditing-geofm-evaluation" },
      { label: "Artifact (Zenodo)", href: "https://doi.org/10.5281/zenodo.21993508" },
    ],
  },
  {
    id: 2,
    status: "Accepted",
    title:
      "Calibrated District-Level Prediction Intervals for 2025 Paddy Yield Departure in Nepal's Madhesh Province",
    authors: "Santosh Pant",
    venue: `[ACM SIGSPATIAL 2026](${site.confirm.sigspatial}), Applications track (4-page paper), Riverside, California, November 2026.`,
    note: "Single author.",
    summary:
      "Leak-controlled district-level intervals for Nepal's 2025 Madhesh drought from a five-model LightGBM ensemble with split and covariate-shift-weighted conformal calibration on Earth Engine features. At this calibration size the 2025 screen was inconclusive for all eight districts, and the paper says so.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1145/3841645.3843341" },
      { label: "Code and provenance (Zenodo)", href: "https://doi.org/10.5281/zenodo.22184073" },
    ],
  },
  {
    id: 3,
    status: "Manuscript",
    title: "Auditing Split Proximity and Radiometric Scale in RGB-to-Thermal Evaluation",
    authors:
      "Santosh Pant, Adithya Vaithinathan Asokan, Haoyun Feng, Matthew R. Dennis, Keenan Gibbons, Verrah Akinyi Otiende, and Geoffrey Siwo",
    venue: "Manuscript, 2026.",
    note: "Available on request.",
    summary:
      "Two training-free checks for RGB-to-thermal benchmarks. On CART, 97.8 to 100 percent of mixing-protocol test frames share a flight with a training frame, and per-frame normalization erases the physical temperature scale before scoring.",
    links: [],
  },
];

/** Research that is not (yet) a paper. One entry per project: what, who with, where presented. */
export const otherResearch: Dated[] = [
  {
    date: "2024 to 2026",
    text: "Richter Research Scholar, Knox College, four funded terms. Liquid-crystal image analysis, given as a talk at Knox Horizons, May 2026.",
  },
  {
    date: "2025",
    text: `Structured random graphs for HPC interconnects, with [Prof. David Bunde](${site.confirm.bunde}), co-authored with Dipesh Adhikari. Presented at Knox Horizons, May 2025.`,
  },
];
