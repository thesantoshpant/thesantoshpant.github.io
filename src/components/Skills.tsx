import { skillGroups } from "../content/skills";
import { Section, Heading } from "./Section";
import { Reveal } from "./Reveal";

/** Grouped chip clusters: teal mono group labels, 1px hairline chips (no fill). */
export function Skills() {
  return (
    <Section id="skills" topBorder>
      <Reveal>
        <Heading>Skills</Heading>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.04}>
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-eyebrow text-accent">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-hairline px-3 py-1 font-mono text-xs text-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
