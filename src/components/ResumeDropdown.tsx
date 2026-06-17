import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { site } from "../content/site";

/**
 * Ghost-pill "Resume" button revealing role-specific PDF links.
 * Implemented as a disclosure (not an ARIA menu) so its keyboard contract is honest:
 * Tab/Shift+Tab and Arrow keys move between links, Escape closes and returns focus,
 * and focus leaving the group closes it.
 */
export function ResumeDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelId = useId();

  // Move focus to the first link when the panel opens.
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  // Close on outside click or Escape (Escape returns focus to the trigger).
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Close when focus leaves the group entirely (e.g. tabbing past the last link).
  const onBlurCapture = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.relatedTarget || !containerRef.current?.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  // Arrow-key navigation between the disclosure links.
  const onPanelKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const links = Array.from(
      containerRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
    );
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    const next =
      event.key === "ArrowDown"
        ? links[(index + 1) % links.length]
        : links[(index - 1 + links.length) % links.length];
    next?.focus();
  };

  return (
    <div ref={containerRef} className="relative" onBlurCapture={onBlurCapture}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1.5 rounded-chip border border-accent px-4 py-2 font-mono text-xs uppercase tracking-eyebrow text-accent transition-colors hover:bg-hover"
      >
        Resume
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          id={panelId}
          aria-label="Resume downloads"
          onKeyDown={onPanelKeyDown}
          className="absolute right-0 z-50 mt-2 w-60 overflow-hidden rounded-chip border border-hairline bg-surface"
        >
          {site.resumes.map((resume, index) => (
            <a
              key={resume.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={resume.href}
              download
              className="block px-4 py-3 font-mono text-xs text-secondary transition-colors hover:bg-hover hover:text-accent focus-visible:bg-hover focus-visible:text-accent"
              onClick={() => setOpen(false)}
            >
              {resume.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
