import type { Dated } from "../types";
import { rich } from "../refs";

/** A list with the date in a gutter column. Used by Other research, Honors, and News. */
export function DatedList({ items }: { items: readonly Dated[] }) {
  return (
    <ul className="dated">
      {items.map((item) => (
        <li key={item.text}>
          <span className="date">{item.date}</span>
          <span>{rich(item.text)}</span>
        </li>
      ))}
    </ul>
  );
}
