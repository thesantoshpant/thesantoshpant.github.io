import { site, navItems } from "../content/site";
import { titleLine, bio, callout, upcoming } from "../content/bio";
import { rich } from "../refs";

const photo = `${import.meta.env.BASE_URL}santosh.jpg`;

/** Nav line, identity block (photo, name, title, links), intro, the PhD callout, and the upcoming line. */
export function Header() {
  return (
    <header className="top">
      <nav aria-label="Sections" className="nav">
        <a href="#top" className="nav-name">
          {site.name}
        </a>
        <span className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </span>
      </nav>

      <div className="identity" id="top">
        <img
          src={photo}
          alt="Santosh Pant"
          width={128}
          height={128}
          className="photo"
        />
        <div>
          <h1>{site.name}</h1>
          <p className="title-line">{titleLine}</p>
          <p className="links">
            <a href={`mailto:${site.email}`}>Email</a>
            <a href={site.links.scholar}>Google Scholar</a>
            <a href={site.links.github}>GitHub</a>
            <a href={site.links.orcid}>ORCID</a>
            {site.showCv && <a href={site.links.cv}>CV (PDF)</a>}
          </p>
        </div>
      </div>

      <div className="bio">
        {bio.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{rich(paragraph)}</p>
        ))}
      </div>

      <aside className="callout">
        <p>
          {callout.before}
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {callout.after}
        </p>
      </aside>

      <p className="upcoming">{rich(upcoming)}</p>
    </header>
  );
}
