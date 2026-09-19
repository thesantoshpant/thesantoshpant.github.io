import type { Dated, Publication } from "../types";
import { site } from "./site";

/** Every status word is literal: accepted, under review. */
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
    status: "Under review",
    title:
      "An audit of how train-test overlap and per-frame temperature normalization shape RGB-to-thermal benchmark scores",
    authors: "",
    venue: "",
    note: `First author, with collaborators at the University of Michigan including [Prof. Geoffrey Siwo](${site.confirm.siwo}). Under review. Draft available on request.`,
    summary:
      "Two training-free checks for RGB-to-thermal benchmarks. On CART, 97.8 to 100 percent of mixing-protocol test frames share a flight with a training frame, and per-frame normalization erases the physical temperature scale before scoring.",
    links: [],
  },
  {
    id: 4,
    status: "Under review",
    title: "A diagnostic for segmentation pipelines whose labels are fit inside each image crop",
    authors: "",
    venue: "",
    note: "First author, with three Knox College co-authors. Under review. Draft available on request.",
    summary:
      "The diagnostic is identically zero for any crop-invariant predictor. Calibrated on Sen1Floods11; on a 17-acquisition sea-ice benchmark the model trained on per-patch labels shows a positive alignment contrast against a scene-label control in all 17 folds.",
    links: [],
  },
  {
    id: 5,
    status: "Under review",
    title: "Deciding when a locally trained cropland model should overrule a global map product",
    authors: "",
    venue: "",
    note: "Single author. Workshop paper under review. Draft available on request.",
    summary:
      "Metric-specific break-even conditions for letting a local Sentinel-2 model edit ESA WorldCereal over Nepal's Terai. Conclusions flip between F0.5 and F2, and blind edits move F1 in both directions across seven datasets, so a stratified label screen is proposed before editing.",
    links: [],
  },
];

/** Research that is not (yet) a paper. One entry per project: what, who with, where presented. */
export const otherResearch: Dated[] = [
  {
    date: "2026",
    text: "Satellite heat-stress classification over 21 Terai rice districts. Independent research. Under year-blocked, leave-one-district-out evaluation, previous-year persistence beat a fold-safe XGBoost ensemble (macro-F1 0.476 vs 0.362), which argues for persistence and modal-class baselines in sub-national benchmarks. [Live app](https://terai-heat-forecaster.streamlit.app).",
  },
  {
    date: "2024 to 2026",
    text: "Richter Research Scholar, Knox College, four funded terms. Liquid-crystal image analysis and reaction-network benchmarking (ChemTest). The image-analysis work was given as a talk at Knox Horizons, May 2026.",
  },
  {
    date: "2025",
    text: `Structured random graphs for HPC interconnects, with [Prof. David Bunde](${site.confirm.bunde}), co-authored with Dipesh Adhikari. Presented at Knox Horizons, May 2025.`,
  },
  {
    date: "2025",
    text: "Klicker, a classroom polling platform, with Ridham Dholaria. Poster at Knox Horizons, May 2025.",
  },
];
