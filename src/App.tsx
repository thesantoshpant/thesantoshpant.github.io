import { Header } from "./components/Header";
import { Problem } from "./components/Problem";
import { Publications } from "./components/Publications";
import { Research } from "./components/Research";
import { Software } from "./components/Software";
import { Honors, News } from "./components/Honors";
import { Closing } from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Problem />
        <Publications />
        <Research />
        <Software />
        <Honors />
        <News />
        <Closing />
      </main>
    </div>
  );
}
