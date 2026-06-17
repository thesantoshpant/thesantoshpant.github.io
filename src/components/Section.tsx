import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** Use the slightly darker alternate background (e.g. Research band). */
  alt?: boolean;
  /** Draw a 1px hairline divider on top of the section. */
  topBorder?: boolean;
  className?: string;
}

/** A page section: consistent vertical rhythm, max width, gutters. */
export function Section({ id, children, alt, topBorder, className }: SectionProps) {
  const bg = alt ? "bg-bg-alt" : "";
  const border = topBorder ? "border-t border-hairline" : "";

  return (
    <section
      id={id}
      className={`${bg} ${border} py-[72px] md:py-24 ${className ?? ""}`.trim()}
    >
      <div className="mx-auto max-w-content px-6">{children}</div>
    </section>
  );
}

/** Uppercase, letter-spaced, muted mono eyebrow label. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">{children}</p>
  );
}

/** Section heading (Space Grotesk). */
export function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-semibold tracking-tight text-primary md:text-[40px]">
      {children}
    </h2>
  );
}
