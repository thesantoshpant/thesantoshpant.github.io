/**
 * Single source of truth for site-level identity, links, and SEO strings.
 * Change a handle/URL here and it updates everywhere (nav, footer, resume, meta).
 */
export const site = {
  name: "Santosh Pant",
  /** mono wordmark in the nav (lowercase by design). */
  wordmark: "santosh pant",
  role: "Geospatial-ML Researcher and Software Engineer",
  email: "spant@knox.edu",

  // Canonical deploy URL (GitHub user site). Update if the handle changes.
  url: "https://thesantoshpant.github.io/",

  social: {
    github: "https://github.com/thesantoshpant",
    linkedin: "https://www.linkedin.com/in/the-santosh-pant",
    npm: "https://www.npmjs.com/package/bhasha-js",
  },

  /** First entry is the default download (the PhD CV); the second is the software resume. */
  resumes: [
    { label: "Curriculum vitae (PhD)", href: "/Pant_Santosh_CV.pdf" },
    { label: "Resume (software)", href: "/santosh-swe.pdf" },
  ],

  /** Anchored nav items (single-page). Research first: the site is PhD-facing. */
  nav: [
    { label: "Research", href: "#research" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
