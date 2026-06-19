import type { ResearchItem } from "../types";

/**
 * Accurate research content — synced to the Description/ dossiers + résumés (2026-06-18).
 * HONESTY: every paper is "under review" or "in prep" — never "published" / "accepted".
 * Five papers total: three under review, two in preparation.
 */
export const research: ResearchItem[] = [
  {
    title: "Satellite Heat-Stress Forecasting — Nepal Terai",
    status: "Under review / ACM SIGSPATIAL 2026",
    description:
      "Early-season vegetation heat-stress pipeline over 21 Terai rice districts (Google Earth Engine, 59,793 pixel-years); honest finding — previous-year persistence beats a tuned 15-feature XGBoost (macro-F1 0.476 vs 0.362) under year-blocked, leave-one-district-out evaluation.",
    link: {
      label: "live app terai-heat-forecaster.streamlit.app",
      href: "https://terai-heat-forecaster.streamlit.app",
    },
  },
  {
    title: "Frozen Features Often Match Fine-Tuning — Geospatial Foundation Models",
    status: "Under review / TMLR 2026",
    description:
      "Controlled evaluation of geospatial foundation models (Prithvi-EO-2.0, TerraMind) for field-extent segmentation across six countries (Fields of The World): a frozen decoder is statistically equivalent to full fine-tuning in 9 of 12 cells at ~110× fewer parameters, and proxy land-cover labels inflate weak baselines by up to +0.34 AUROC.",
  },
  {
    title: "Conformal Prediction for District Paddy-Yield Loss — Nepal",
    status: "Under review / ACM SIGSPATIAL 2026 (Applications)",
    description:
      "District-level 90% conformal prediction intervals for Nepal's 2025 Madhesh drought — covariate-shift-weighted conformal with a finite-sample coverage guarantee, plus a decision classifier that abstains when calibration is insufficient.",
  },
  {
    title: "RGB-to-Thermal Urban Heat Mapping",
    status: "In prep / WACV 2027 · UMich",
    description:
      "Predicts street-level urban heat from ordinary RGB drone imagery (no thermal camera). Diagnosed two silent data faults the hackathon pipeline missed and rebuilt it (ConvNeXt U-Net + pix2pix cGAN); the 2nd-place hackathon model scored 19.3 dB PSNR / 0.66 SSIM on a 202-image held-out set.",
    link: { label: "GitHub", href: "https://github.com/thesantoshpant/rgb-to-thermal" },
  },
  {
    title: "Cross-Region Fire-Attribution Audit — Terai, Punjab, MP",
    status: "In prep / GIScience & Remote Sensing",
    description:
      "Audited MODIS/VIIRS fire detections used as crop-residue proxies; across four cropland masks, the share of dry-season detections outside cropland rises from Punjab (4.5%) to Madhya Pradesh (18%) to Nepal Terai (98%), validated against published DARBE numbers within 1.24×.",
  },
];
