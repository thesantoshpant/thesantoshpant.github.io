/** Identity, links, and navigation. Change a URL here and it updates everywhere. */
export const site = {
  name: "Santosh Pant",
  email: "spant@knox.edu",
  url: "https://thesantoshpant.github.io/",

  /** When false, the three "CV (PDF)" links are not rendered and the callout says the CV is available on request. */
  showCv: false as boolean,

  links: {
    github: "https://github.com/thesantoshpant",
    scholar: "https://scholar.google.com/citations?user=HqD-KE8AAAAJ",
    linkedin: "https://www.linkedin.com/in/the-santosh-pant",
    orcid: "https://orcid.org/0009-0000-6464-0777",
    orcidId: "0009-0000-6464-0777",
    cv: "/Pant_Santosh_CV.pdf",
    softwareResume: "/santosh-swe.pdf",
  },

  /** Pages that confirm a name, a program, or an award. Each one was opened and checked. */
  confirm: {
    siwo: "https://midas.umich.edu/directory/geoffrey-siwo/",
    bunde: "https://www.knox.edu/academics/faculty/bunde-david",
    leahy: "https://www.knox.edu/academics/faculty/leahy-andrew",
    breakThroughTech: "https://tech.cornell.edu/impact/break-through-tech/break-through-ai/",
    hackIllinois: "https://hackillinois.org/",
    hackIllinoisAward: "https://devpost.com/software/vigilante-ai",
    knoxCompetitions:
      "https://www.knox.edu/news/knox-computer-and-data-science-students-shine-in-hacking-coding-and-data-competitions",
    dataFest: "https://ww2.amstat.org/education/datafest/",
    sigspatial: "https://sigspatial2026.sigspatial.org/",
  },

  nav: [
    { label: "Problem", href: "#problem" },
    { label: "Publications", href: "#publications" },
    { label: "Research", href: "#research" },
    { label: "Software", href: "#software" },
    { label: "Honors", href: "#honors" },
    { label: "Contact", href: "#contact" },
    { label: "CV (PDF)", href: "/Pant_Santosh_CV.pdf" },
  ],

  /** Shown in the footer. Update when the page content changes. */
  updated: "September 2026",
} as const;

/** Nav items to render: the CV entry only when showCv is true. */
export const navItems = site.nav.filter((item) => site.showCv || item.href !== site.links.cv);
