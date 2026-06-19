import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

/** Small scroll cue pinned to the hero's bottom; fades out once the user scrolls. */
function ScrollCue() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">Scroll</span>
      <ChevronDown size={18} className="text-muted motion-safe:animate-bounce" aria-hidden="true" />
    </div>
  );
}

/** Clean, text-forward hero: headline + sub-line only, full viewport height. */
export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden supports-[min-height:100svh]:min-h-[100svh]">
      {/* Faint teal bloom behind the heading (scrolls away with the hero). */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute left-[18%] top-[42%] h-[380px] w-[560px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="mx-auto flex w-full max-w-content flex-1 items-center px-6 pb-24 pt-[120px]">
        <Reveal className="flex max-w-4xl flex-col gap-6">
          <h1 className="font-display text-[40px] font-bold leading-[1.1] tracking-tight text-primary md:text-[72px] md:leading-[1.05]">
            I build software and research geospatial machine learning.
          </h1>
          <p className="max-w-3xl font-body text-lg leading-relaxed text-secondary">
            CS + Data Science at Knox College, graduating 2027. Break Through Tech AI Fellow at
            Cornell Tech. Three first-author papers under review (SIGSPATIAL, TMLR).
          </p>
        </Reveal>
      </div>

      <ScrollCue />
    </section>
  );
}
