import type { ResearchItem } from "../types";

/**
 * Research content, synced to the accepted camera-readies, the OpenReview submission records,
 * and the CV built on 2026-09-09. Status pills are literal: "Accepted", "Under review",
 * "Independent research", or "Manuscript in preparation". Never overstate a status.
 */
export const research: ResearchItem[] = [
  {
    title: "Auditing GeoFM Evaluation for Field-Extent Segmentation",
    status: "Accepted / TMLR 2026 (single author)",
    description:
      "Controlled evaluation of geospatial foundation models (Prithvi-EO-2.0, TerraMind) for field-extent segmentation across six countries in Fields of The World. A frozen decoder is statistically equivalent to full fine-tuning in 9 of 12 region-by-model cells at about 110x fewer trainable parameters, proxy land-cover labels inflate weak baselines by up to 0.34 AUROC, and a from-scratch U-Net beats a frozen Prithvi probe in five of six regions.",
    link: { label: "OpenReview", href: "https://openreview.net/forum?id=qRXVTe1yYp" },
  },
  {
    title: "Calibrated District-Level Prediction Intervals for 2025 Paddy Yield Departure, Madhesh",
    status: "Accepted / ACM SIGSPATIAL 2026, Applications track (single author)",
    description:
      "Leak-controlled district-level prediction intervals for Nepal's 2025 Madhesh drought from a deterministic five-model LightGBM ensemble with split and covariate-shift-weighted conformal calibration, plus a Bihar transfer diagnostic. The honest result: at this calibration size, none of the eight districts clears the relief-prioritization threshold, and the pipeline says so. Riverside, California, November 2026.",
    link: { label: "Code and provenance (Zenodo)", href: "https://doi.org/10.5281/zenodo.22184073" },
  },
  {
    title: "Auditing Split Proximity and Radiometric Scale in RGB-to-Thermal Evaluation",
    status: "Under review / WACV 2027 (first author, with Prof. Geoffrey Siwo's group at UMich)",
    description:
      "Two training-free checks for RGB-to-thermal benchmarks. The Proximity Audit exposes how much of a test set shares acquisition groups with training data (on CART, 97.8 to 100 percent of mixing-protocol test frames share a flight with training frames). The Affine Probe shows that per-frame normalization erases the physical temperature scale before scoring. Grew out of the second-place UMich heat-resilience hackathon project.",
  },
  {
    title: "Crop-Label Alignment: Auditing Crop-Dependent Auto-Labels in Remote-Sensing Segmentation",
    status: "Under review / WACV 2027 (first author)",
    description:
      "A diagnostic for segmentation pipelines that fit label rules inside each image crop, so that overlapping crops can assign different labels to the same pixel. It is identically zero for any crop-invariant predictor. Calibrated on Sen1Floods11 and applied to a 17-acquisition sea-ice benchmark, where the model trained on per-patch labels shows a positive alignment contrast against a scene-label control in all 17 folds.",
  },
  {
    title: "When Should a Local Model Correct a Global Cropland Map?",
    status: "Under review / Tackling Climate Change with ML workshop, NeurIPS 2026 (single author)",
    description:
      "Replicates a sparse-label cropland pipeline on Sentinel-2 time series over Nepal's Terai, then asks when a local model should be allowed to edit a global map (ESA WorldCereal). Metric-specific break-even conditions show conclusions flip between F0.5 and F2, and blind edits move F1 in both directions across seven datasets; a stratified label screen is proposed before editing.",
  },
  {
    title: "Satellite Heat-Stress Classification, Nepal Terai",
    status: "Independent research",
    description:
      "Early-season vegetation heat-stress pipeline over 21 Terai rice districts in Google Earth Engine (MODIS, ERA5-Land, ESA WorldCover; 59,793 pixel-years). The finding worth reporting: previous-year persistence outperforms a fold-safe XGBoost ensemble on average (macro-F1 0.476 vs 0.362) under year-blocked, leave-one-district-out evaluation, so persistence and modal-class nulls belong in every sub-national benchmark.",
    link: {
      label: "live app terai-heat-forecaster.streamlit.app",
      href: "https://terai-heat-forecaster.streamlit.app",
    },
  },
  {
    title: "Cropland-Attribution Audit of Satellite Fire Detections",
    status: "Manuscript in preparation",
    description:
      "How much does the cropland-restriction step change MODIS and VIIRS crop-residue burning estimates across regions with very different field sizes? Four independent cropland masks over Nepal's Terai, Punjab, and Madhya Pradesh, with a published district-level benchmark as the credibility check.",
  },
];
