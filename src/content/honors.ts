import type { Dated } from "../types";
import { site } from "./site";

/** Most selective first, then most recent. The full list is on the CV. */
export const honors: Dated[] = [
  { date: "2023 to 2027", text: "Next Genius Scholarship, full-tuition award to Knox College, one recipient per year" },
  {
    date: "2026 to present",
    text: `[Break Through Tech AI](${site.confirm.breakThroughTech}) Fellow, Cornell Tech`,
  },
  {
    date: "2026",
    text: `[University of Michigan AI for Urban Heat Resilience Hackathon](${site.confirm.knoxCompetitions}), 2nd place`,
  },
  {
    date: "2026",
    text: `[HackIllinois](${site.confirm.hackIllinois}), 1st place, [Best Use of Actian VectorAI DB](${site.confirm.hackIllinoisAward}) (sponsor track)`,
  },
  {
    date: "2026",
    text: `[ASA DataFest](${site.confirm.dataFest}), [Best Insights Award](${site.confirm.knoxCompetitions}), team Outliers`,
  },
  { date: "2024 to 2026", text: "Richter Research Scholar, Knox College, four funded research terms" },
];

/** Newest first. Nothing about work under review. */
export const news: Dated[] = [
  { date: "Nov 2026", text: `Presenting at [ACM SIGSPATIAL 2026](${site.confirm.sigspatial}), Riverside, California.` },
  { date: "Aug 2026", text: "Paper accepted at ACM SIGSPATIAL 2026, Applications track." },
  { date: "Aug 2026", text: "Single-author paper accepted at TMLR." },
];
