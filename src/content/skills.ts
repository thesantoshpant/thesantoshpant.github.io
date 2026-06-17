import type { SkillGroup } from "../types";

/** Verbatim content from the spec §4. */
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "Java", "SQL", "R"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js/Express", "FastAPI", "Flask", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "ML / AI",
    skills: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "computer vision (CNNs, CLIP, YOLO)",
      "LLM APIs",
      "Hugging Face",
    ],
  },
  {
    label: "Geospatial & Remote Sensing",
    skills: [
      "Google Earth Engine",
      "Rasterio",
      "geopandas",
      "MODIS/Landsat/Sentinel/PlanetScope",
      "ERA5",
      "EO foundation models",
    ],
  },
  {
    label: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
  },
];
