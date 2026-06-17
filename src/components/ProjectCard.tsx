import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";

/**
 * Text-forward project card. Header is a real 16:9 screenshot from public/thumbs/
 * when `project.thumb` is set and loads; otherwise a compact textured placeholder
 * (faint dot-grid + a single line-icon) — no illustration, no gradient.
 */
export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const [thumbFailed, setThumbFailed] = useState(false);
  const showThumb = Boolean(project.thumb) && !thumbFailed;

  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-hairline bg-surface transition-colors duration-300 hover:border-accent">
      {showThumb ? (
        <img
          src={`${import.meta.env.BASE_URL}thumbs/${project.thumb}`}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          onError={() => setThumbFailed(true)}
          className="aspect-video w-full border-b border-hairline object-cover"
        />
      ) : (
        <div className="thumb-grid flex h-36 items-center justify-center border-b border-hairline">
          <Icon size={40} className="text-muted" aria-hidden="true" />
        </div>
      )}

      <div className="flex flex-grow flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2 font-mono text-xs text-muted">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded border border-hairline px-2 py-1">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 font-display text-xl font-medium text-primary">{project.title}</h3>

        <p className="mb-6 flex-grow font-body text-base leading-relaxed text-secondary">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 font-mono text-xs">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent transition-colors hover:underline"
            >
              {link.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
