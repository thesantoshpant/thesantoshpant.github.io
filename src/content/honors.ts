import type { Dated } from "../types";
import { site } from "./site";

/** Newest first, the same order as the CV. */
export const honors: Dated[] = [
  { date: "2026", text: "CRA Outstanding Undergraduate Researcher Award, departmental nominee, Knox College" },
  { date: "2026", text: "ACM SIGSPATIAL 2026 Student Travel Award (NSF-funded)" },
  {
    date: "2026 to present",
    text: `[Break Through Tech AI](${site.confirm.breakThroughTech}) Fellow, Cornell Tech`,
  },
  {
    date: "2026",
    text: `[HackIllinois](${site.confirm.hackIllinois}), 1st place, [Best Use of Actian VectorAI DB](${site.confirm.hackIllinoisAward}) (sponsor track)`,
  },
  {
    date: "2026",
    text: `[University of Michigan AI for Urban Heat Resilience Hackathon](${site.confirm.knoxCompetitions}), 2nd place`,
  },
  {
    date: "2026",
    text: `[ASA DataFest](${site.confirm.dataFest}), [Best Insights Award](${site.confirm.knoxCompetitions}), team Outliers`,
  },
  { date: "2024 to 2026", text: "Richter Research Scholar, Knox College, four funded research terms" },
  { date: "2023 to 2027", text: "Next Genius Scholarship, full-tuition award to Knox College, one recipient per year" },
  { date: "2022", text: "EducationUSA Opportunity Funds Program, USEF-Nepal, one of 16 students selected nationally" },
];

/** Newest first. */
export const news: Dated[] = [
  { date: "Nov 2026", text: `Presenting at [ACM SIGSPATIAL 2026](${site.confirm.sigspatial}), Riverside, California.` },
  {
    date: "Nov 2026",
    text: "Presenting at the Midstates Undergraduate Research Symposium, Washington University in St. Louis.",
  },
  {
    date: "Oct 2026",
    text: "Accepted a Data Science internship at the Smithsonian's National Zoo and Conservation Biology Institute, December 2026 to February 2027.",
  },
  { date: "Oct 2026", text: "Received an NSF-funded student travel award for ACM SIGSPATIAL 2026." },
  { date: "Aug 2026", text: "Paper accepted at ACM SIGSPATIAL 2026, Applications track." },
  { date: "Aug 2026", text: "Single-author paper accepted at TMLR." },
];
