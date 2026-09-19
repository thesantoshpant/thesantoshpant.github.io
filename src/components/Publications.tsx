import type { Publication } from "../types";
import { publications } from "../content/publications";
import { rich } from "../refs";

/** Byline under a title: author list, venue, and status words, whichever are present. */
function byline(pub: Publication): string {
  return [pub.authors ? `${pub.authors}.` : "", pub.venue, pub.note ?? ""]
    .filter(Boolean)
    .join(" ");
}

function Entry({ pub }: { pub: Publication }) {
  return (
    <li id={`pub-${pub.id}`} className={pub.status === "Under review" ? "review" : undefined}>
      <span className="pub-title">{pub.title}</span>
      <span className="pub-meta">{rich(byline(pub))}</span>
      <span className="pub-summary">{pub.summary}</span>
      {pub.links.length > 0 && (
        <span className="pub-links">
          {pub.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </span>
      )}
    </li>
  );
}

export function Publications() {
  const accepted = publications.filter((p) => p.status === "Accepted");
  const underReview = publications.filter((p) => p.status === "Under review");

  return (
    <section id="publications">
      <h2>Publications</h2>

      <h3 className="pub-group">Accepted</h3>
      <ol className="pubs" start={1}>
        {accepted.map((pub) => (
          <Entry key={pub.id} pub={pub} />
        ))}
      </ol>

      <h3 className="pub-group">Under review</h3>
      <ol
        className="pubs"
        start={accepted.length + 1}
        style={{ counterReset: `pub ${accepted.length}` }}
      >
        {underReview.map((pub) => (
          <Entry key={pub.id} pub={pub} />
        ))}
      </ol>
    </section>
  );
}
