import { site } from "../content/site";
import { teaching } from "../content/bio";

/** Teaching line, contact section, and the page footer. */
export function Closing() {
  return (
    <>
      <section id="teaching">
        <h2>Teaching and service</h2>
        <p>{teaching}</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email is the fastest way to reach me: <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p className="links">
          <a href={site.links.cv}>CV (PDF)</a>
          <a href={site.links.scholar}>Google Scholar</a>
          <a href={site.links.github}>GitHub</a>
          <a href={site.links.linkedin}>LinkedIn</a>
          <a href={site.links.orcid}>ORCID {site.links.orcidId}</a>
        </p>
      </section>

      <footer className="foot">
        <p>
          {site.name}. Updated {site.updated}.
        </p>
      </footer>
    </>
  );
}
