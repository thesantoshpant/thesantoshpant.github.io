import type { ReactNode } from "react";

/**
 * Render a content string with two small conventions:
 *   [n]            a citation number, linked to the publication entry pub-n
 *   [label](url)   an ordinary link
 * Everything else is passed through as text.
 */
export function rich(text: string): ReactNode[] {
  const pattern = /\[(\d)\](?!\()|\[([^\]]+)\]\(([^)\s]+)\)/g;
  const out: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) out.push(text.slice(last, match.index));
    if (match[1]) {
      out.push(
        <a key={match.index} href={`#pub-${match[1]}`} className="ref">
          {match[0]}
        </a>,
      );
    } else {
      out.push(
        <a key={match.index} href={match[3]}>
          {match[2]}
        </a>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
