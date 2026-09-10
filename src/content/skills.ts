import type { SkillGroup } from "../types";

/** Research-first ordering (2026-09-09). Only tools actually used in the work above. */
export const skillGroups: SkillGroup[] = [
  {
    label: "Geospatial & Remote Sensing",
    skills: [
      "Google Earth Engine",
      "Rasterio",
      "geopandas",
      "Sentinel-1/2, MODIS, Landsat, PlanetScope",
      "ERA5, CHIRPS, ESA WorldCover",
      "EO foundation models (Prithvi, TerraMind, Clay, AnySat)",
      "drone RGB and thermal imagery",
    ],
  },
  {
    label: "ML / AI",
    skills: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "computer vision (CNNs, U-Net, CLIP, YOLO)",
      "LLM APIs",
      "Hugging Face",
    ],
  },
  {
    label: "Methods",
    skills: [
      "conformal prediction",
      "leakage-aware spatial and temporal evaluation",
      "equivalence testing (TOST)",
      "bootstrap and seed-matched reporting",
      "preregistration and adversarial self-review",
    ],
  },
  {
    label: "Languages",
    skills: ["Python", "R", "TypeScript", "JavaScript", "Go", "Java", "SQL"],
  },
  {
    label: "Backend & Frontend",
    skills: ["FastAPI", "Flask", "Node.js/Express", "PostgreSQL", "MongoDB", "Redis", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "DevOps",
    skills: ["Docker", "AWS", "GCP", "CI/CD", "Git", "Linux"],
  },
];
