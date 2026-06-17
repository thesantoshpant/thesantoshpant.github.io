import { useEffect, useState } from "react";
import { aboutParagraphs, facts } from "../content/about";
import { Section, Heading } from "./Section";
import { Reveal } from "./Reveal";

/** Two columns: bio paragraphs (left); optional portrait + mono facts panel (right). */
export function About() {
  // Show a portrait only if public/me.jpg actually exists (probe before rendering
  // to avoid a broken-image flash or layout shift).
  const [hasPortrait, setHasPortrait] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasPortrait(true);
    img.onerror = () => setHasPortrait(false);
    img.src = `${import.meta.env.BASE_URL}me.jpg`;
  }, []);

  return (
    <Section id="about">
      <Reveal>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Heading>About</Heading>
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="font-body text-base leading-relaxed text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {hasPortrait && (
              <img
                src={`${import.meta.env.BASE_URL}me.jpg`}
                alt="Santosh Pant"
                loading="lazy"
                decoding="async"
                className="aspect-square w-40 rounded-card border border-hairline object-cover"
              />
            )}

            <dl className="flex flex-col gap-4 rounded-card border border-hairline bg-surface p-8 font-mono text-xs">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`flex flex-col gap-1 ${
                    index < facts.length - 1 ? "border-b border-hairline pb-4" : ""
                  }`}
                >
                  <dt className="uppercase tracking-eyebrow text-muted">{fact.label}</dt>
                  <dd className="text-primary">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
