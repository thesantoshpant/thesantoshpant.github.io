import type { ProjectFilter } from "../types";
import { FILTERS } from "../hooks/useUrlFilter";

interface FilterPillsProps {
  active: ProjectFilter;
  onChange: (next: ProjectFilter) => void;
}

/** Mono pill toggles. Active = teal fill. Horizontally scrollable on mobile. */
export function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects"
      className="-mx-6 flex gap-2 overflow-x-auto px-6 font-mono text-xs md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
    >
      {FILTERS.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter)}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 transition-colors ${
              isActive
                ? "bg-accent font-medium text-bg"
                : "border border-hairline text-secondary hover:border-accent hover:text-accent"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
