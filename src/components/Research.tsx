import { directions, next, currentWork } from "../content/directions";
import { otherResearch } from "../content/publications";
import { rich } from "../refs";
import { DatedList } from "./DatedList";

/** Research directions, what comes next, current work, and other research. */
export function Research() {
  return (
    <section id="research">
      <h2>Research directions</h2>
      <ul className="directions">
        {directions.map((item) => (
          <li key={item.lead}>
            <strong>{item.lead}</strong> {rich(item.body)}
          </li>
        ))}
      </ul>

      <h3>What I want to work on next</h3>
      <p>{rich(next)}</p>

      <h3>Current work</h3>
      <p>{rich(currentWork)}</p>

      <h3>Other research</h3>
      <DatedList items={otherResearch} />
    </section>
  );
}
