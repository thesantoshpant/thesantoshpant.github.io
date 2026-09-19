import { honors, news } from "../content/honors";
import { DatedList } from "./DatedList";

export function Honors() {
  return (
    <section id="honors">
      <h2>Honors</h2>
      <DatedList items={honors} />
    </section>
  );
}

export function News() {
  return (
    <section id="news">
      <h2>News</h2>
      <DatedList items={news} />
    </section>
  );
}
