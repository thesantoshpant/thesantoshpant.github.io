import { SkipLink } from "./components/SkipLink";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Research } from "./components/Research";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Faint engineered-paper backdrop, fixed behind all content, theme-aware. */}
      <div
        aria-hidden="true"
        className="bg-dotgrid pointer-events-none fixed inset-0 -z-10"
      />
      <SkipLink />
      <Nav />
      <main id="main">
        <span id="top" aria-hidden="true" />
        <Hero />
        <Projects />
        <Research />
        <About />
        <Skills />
        <Achievements />
      </main>
      <Contact />
    </>
  );
}
