import type { ResearchItem } from "../types";

/**
 * Verbatim content from the spec §4. Plain list — NOT cards, NO stat row.
 * HONESTY: the SIGSPATIAL paper is "under review", never published/accepted.
 */
export const research: ResearchItem[] = [
  {
    title: "Satellite Heat-Stress Forecasting — Nepal Terai",
    status: "Under review / ACM SIGSPATIAL 2026",
    description:
      "Early-season vegetation heat-stress pipeline over 21 Terai rice districts; honest finding — previous-year persistence beats fold-safe XGBoost (macro-F1 0.476 vs 0.362).",
    link: {
      label: "live app terai-heat-forecaster.streamlit.app",
      href: "https://terai-heat-forecaster.streamlit.app",
    },
  },
  {
    title: "RGB-to-Thermal Urban Heat Mapping",
    status: "UMich / Center for Global Health Equity",
    description:
      "Predicts street-level urban heat from RGB drone imagery (no thermal camera); ensembled CNN/GAN/physically-structured models to 19.3 dB PSNR / 0.71 SSIM (constant-prediction baseline 10.7).",
    link: { label: "GitHub", href: "https://github.com/thesantoshpant/rgb-to-thermal" },
  },
  {
    title: "scaleshift-bench — Geospatial Foundation-Model Benchmark",
    status: "In prep",
    description:
      "Benchmarked four Earth-observation foundation models (Clay, Prithvi, TerraMind, AnySat) across Nepal, India, and Mozambique; the evaluation protocol (per-polygon vs per-pixel) reorders model rankings.",
  },
  {
    title: "Smallholder Burn-Detection Audit — Nepal Terai",
    status: "Independent research",
    description:
      "Audited MODIS/VIIRS/Sentinel-2 BAIS2 against 250+ PlanetScope 3 m reference chips; the BAIS2 index over-detects burned area by roughly three orders of magnitude.",
  },
];
