/**
 * Single source of truth for site-level identity, links, and SEO strings.
 * Change a handle/URL here and it updates everywhere (nav, footer, resume, meta).
 */
export const site = {
  name: "Santosh Pant",
  /** mono wordmark in the nav (lowercase by design). */
  wordmark: "santosh pant",
  role: "Software Engineer & Geospatial-ML Researcher",
  email: "spant@knox.edu",

  // Canonical deploy URL (GitHub user site). Update if the handle changes.
  url: "https://thesantoshpant.github.io/",

  social: {
    github: "https://github.com/thesantoshpant",
    linkedin: "https://www.linkedin.com/in/the-santosh-pant",
    npm: "https://www.npmjs.com/package/bhasha-js",
  },

  resumes: [
    { label: "For software roles", href: "/santosh-swe.pdf" },
    { label: "For geospatial-ML roles", href: "/santosh-geo.pdf" },
  ],

  /** Anchored nav items (single-page). */
  nav: [
    { label: "Work", href: "#work" },
    { label: "Research", href: "#research" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
