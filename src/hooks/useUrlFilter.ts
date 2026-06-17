import { useCallback, useEffect, useState } from "react";
import type { ProjectFilter } from "../types";

const FILTERS: ProjectFilter[] = ["All", "Full-stack", "Computer Vision", "LLM"];

/** Maps a filter label to/from its URL slug (e.g. "Full-stack" <-> "full-stack"). */
function toSlug(filter: ProjectFilter): string {
  return filter.toLowerCase().replace(/\s+/g, "-");
}

function fromSlug(slug: string | null): ProjectFilter {
  if (!slug) return "All";
  const match = FILTERS.find((f) => toSlug(f) === slug.toLowerCase());
  return match ?? "All";
}

/**
 * Two-way sync between the active Projects filter and the `?filter=` query string,
 * so a link like `?filter=full-stack` opens pre-filtered and toggling updates the URL
 * (via replaceState — no navigation, no router dependency). Honors back/forward.
 */
export function useUrlFilter(): [ProjectFilter, (next: ProjectFilter) => void] {
  const [filter, setFilter] = useState<ProjectFilter>(() => {
    if (typeof window === "undefined") return "All";
    return fromSlug(new URLSearchParams(window.location.search).get("filter"));
  });

  // React to browser back/forward.
  useEffect(() => {
    const onPopState = () => {
      setFilter(fromSlug(new URLSearchParams(window.location.search).get("filter")));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const update = useCallback((next: ProjectFilter) => {
    setFilter(next);
    const params = new URLSearchParams(window.location.search);
    if (next === "All") {
      params.delete("filter");
    } else {
      params.set("filter", toSlug(next));
    }
    const query = params.toString();
    const url = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    window.history.replaceState(null, "", url);
  }, []);

  return [filter, update];
}

export { FILTERS };
