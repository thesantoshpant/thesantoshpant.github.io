export interface Link {
  label: string;
  href: string;
}

export interface Publication {
  /** Citation number shown as [n] and used as the anchor id pub-n. */
  id: number;
  status: "Accepted" | "Under review";
  /** Title shown in the list. */
  title: string;
  /** Author list; empty when not shown. */
  authors: string;
  /** Venue sentence; empty when not shown. May contain [label](url) links. */
  venue: string;
  /** Extra status words, e.g. "Single author. Accepted August 2026." May contain [label](url) links. */
  note?: string;
  /** One plain sentence or two on what the paper shows. */
  summary: string;
  links: Link[];
}

export interface Direction {
  lead: string;
  /** May contain [n] tokens, which render as links to the publication entries. */
  body: string;
}

export interface SoftwareItem {
  name: string;
  href: string;
  /** May contain [label](url) links. */
  body: string;
  links: Link[];
}

/** A dated line: the date sits in a gutter column, the text beside it. */
export interface Dated {
  date: string;
  /** May contain [n] tokens and [label](url) links. */
  text: string;
}
