import { problem } from "../content/problem";
import { rich } from "../refs";
import { TeraiMap } from "./TeraiMap";

/** "The problem": the first paragraph sits beside the map; the rest run at full width. */
export function Problem() {
  const [lead, ...rest] = problem;
  return (
    <section id="problem" className="problem">
      <h2>The problem</h2>
      <div className="problem-lead">
        <p>{rich(lead)}</p>
        <TeraiMap />
      </div>
      {rest.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{rich(paragraph)}</p>
      ))}
    </section>
  );
}
