import { ArrowUpRight } from "lucide-react";
import { research } from "../content/research";
import { Heading } from "./Section";
import { Reveal } from "./Reveal";

/** Research as a plain list (NOT cards, NO stat row): title, status pill, sentence, link. */
export function Research() {
  return (
    <section id="research" className="border-y border-hairline bg-bg-alt py-[72px] md:py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <Heading>Research</Heading>
        </Reveal>

        <ul className="mt-12 flex flex-col">
          {research.map((item, index) => (
            <li key={item.title} className="border-b border-hairline py-6">
              <Reveal
                delay={index * 0.05}
                className="flex flex-col gap-4 md:flex-row md:items-start"
              >
                <div className="md:w-1/3">
                  <h3 className="mb-3 font-display text-xl font-medium text-primary">
                    {item.title}
                  </h3>
                  <span className="inline-block rounded-full border border-hairline px-3 py-1 font-mono text-xs text-muted">
                    {item.status}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <p className="font-body text-base leading-relaxed text-secondary">
                    {item.description}
                  </p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-accent transition-colors hover:underline"
                    >
                      {item.link.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
