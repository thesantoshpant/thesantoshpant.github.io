import { site } from "./site";

/** Header copy. Plain first person. No dashes, no filler. */

export const titleLine =
  "Machine learning for Earth observation where ground truth is scarce: evaluation, calibrated uncertainty, and transfer across regions. B.S. Computer Science and Data Science, Knox College, expected June 2027.";

export const bio = [
  "I am a senior at Knox College, finishing a B.S. in Computer Science and Data Science in June 2027, and I am applying to PhD programs for Fall 2027.",
  "I work on machine learning for Earth observation where ground truth is scarce. My papers ask whether a benchmark number can be trusted, how to attach calibrated uncertainty to a prediction that someone will act on, and when a model trained in one region can be used in another. The work so far covers cropland and field boundaries, crop yield, flood and sea-ice segmentation, and drone thermal imagery of cities. Most of it is tested first in Nepal's Terai, where I grew up.",
  `Two single-author papers were accepted in 2026, one at TMLR and one at ACM SIGSPATIAL, and three first-author papers are under review. Most of this work was done independently. One project was done with [Prof. Geoffrey Siwo](${site.confirm.siwo}) at the University of Michigan, and one grew out of a research seminar at Knox College. I also build and ship software.`,
];

/** The email address is inserted between these two parts as a mailto link. */
export const callout = {
  before: "If you are taking PhD students for Fall 2027 and any of the work below is close to yours, please email me at ",
  after:
    ". My CV is linked above, and the code and artifacts for both accepted papers are public. Drafts of the papers under review are available on request.",
};

/** Shown under the callout in small type. [n] tokens link to the publication entries. */
export const upcoming = `Upcoming: presenting [2] at [ACM SIGSPATIAL 2026](${site.confirm.sigspatial}), Riverside, California, 3 to 6 November 2026.`;

export const teaching =
  "Teaching assistant for Data Structures and Algorithms (two terms), computer science tutor, and Computer Science Club lead at Knox College.";
