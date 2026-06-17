import { useEffect, useState } from "react";

/** Tracks the user's `prefers-reduced-motion` setting, reacting to changes. */
export function useReducedMotion(): boolean {
  // Initialize lazily from matchMedia so reduced-motion users never get a first
  // frame with the motion (hidden/translated) initial state before the effect runs.
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
