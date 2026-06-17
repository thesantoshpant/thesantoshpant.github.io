import { achievements } from "../content/achievements";
import { Section, Heading } from "./Section";
import { Reveal } from "./Reveal";

/** 3-column grid of hairline-bordered cells: bold title + muted context line. */
export function Achievements() {
  return (
    <Section id="achievements" topBorder>
      <Reveal>
        <Heading>Achievements</Heading>
      </Reveal>

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <li key={achievement.title} className="h-full">
            <Reveal
              delay={index * 0.03}
              className="flex h-full flex-col gap-2 rounded-chip border border-hairline p-6"
            >
              <h3 className="font-display text-lg font-medium text-primary">
                {achievement.title}
              </h3>
              {achievement.context && (
                <p className="font-mono text-xs text-muted">{achievement.context}</p>
              )}
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
