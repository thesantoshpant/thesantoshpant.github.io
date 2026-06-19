import { projects } from "../content/projects";
import { useUrlFilter } from "../hooks/useUrlFilter";
import { Heading } from "./Section";
import { Reveal } from "./Reveal";
import { FilterPills } from "./FilterPills";
import { ProjectCard } from "./ProjectCard";

/** Projects grid with a URL-synced category filter. */
export function Projects() {
  const [filter, setFilter] = useUrlFilter();

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="work" className="mx-auto max-w-content px-6 py-[72px] md:py-24">
      <Reveal>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Heading>Projects</Heading>
          <FilterPills active={filter} onChange={setFilter} />
        </div>
      </Reveal>

      {/* flex-wrap + justify-center keeps a partial last row centered (5 cards ->
          a symmetric 3-2), regardless of how many the active filter shows. */}
      <div className="flex flex-wrap justify-center gap-8">
        {visible.map((project, index) => (
          <Reveal
            key={project.slug}
            delay={index * 0.05}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="font-mono text-sm text-muted">No projects match this filter.</p>
      )}
    </section>
  );
}
