import { site } from "../content/site";
import { software, softwareIntro } from "../content/software";
import { rich } from "../refs";

export function Software() {
  return (
    <section id="software">
      <h2>Software</h2>
      <p>{softwareIntro}</p>
      <ul className="plain">
        {software.map((item) => (
          <li key={item.name}>
            <strong>
              <a href={item.href}>{item.name}</a>.
            </strong>{" "}
            {rich(item.body)}{" "}
            <span className="small-links">
              {item.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <p className="small">
        <a href={site.links.softwareResume}>Software resume (PDF)</a>
      </p>
    </section>
  );
}
