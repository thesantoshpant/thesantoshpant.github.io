import { useEffect, useRef } from "react";
import { X, Github, Linkedin } from "lucide-react";
import { site } from "../content/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /** Element to return focus to when the dialog closes (the hamburger button). */
  returnFocusRef?: React.RefObject<HTMLElement>;
}

const FOCUSABLE = 'a[href], button:not([disabled])';

/** Full-screen mobile nav dialog: focus-trapped, Escape/return-focus, scroll-locked. */
export function MobileMenu({ open, onClose, returnFocusRef }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    // Move focus into the dialog.
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      // Trap Tab focus inside the dialog.
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const activeEl = document.activeElement;

      if (event.shiftKey && activeEl === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeEl === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // Prevent background scroll while the menu is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      // Return focus to the trigger that opened the dialog.
      returnFocusRef?.current?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  if (!open) return null;

  return (
    <div
      ref={dialogRef}
      id="mobile-menu"
      className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
        <span className="font-mono text-base font-bold lowercase text-primary">
          {site.wordmark}
          <span className="text-accent">.</span>
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="-m-2 p-2 text-secondary transition-colors hover:text-accent"
        >
          <X size={24} aria-hidden="true" />
        </button>
      </div>

      <nav className="flex flex-col gap-2 px-6 py-8" aria-label="Mobile">
        {site.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-hairline py-4 font-mono text-sm uppercase tracking-eyebrow text-secondary transition-colors hover:text-accent"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-6 px-6 py-8">
        <div className="flex gap-6">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="-m-2 p-2 text-secondary transition-colors hover:text-accent"
          >
            <Github size={22} aria-hidden="true" />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="-m-2 p-2 text-secondary transition-colors hover:text-accent"
          >
            <Linkedin size={22} aria-hidden="true" />
          </a>
        </div>
        <div className="flex flex-col gap-3">
          {site.resumes.map((resume) => (
            <a
              key={resume.href}
              href={resume.href}
              download
              onClick={onClose}
              className="rounded-chip border border-accent px-4 py-2 text-center font-mono text-xs uppercase tracking-eyebrow text-accent transition-colors hover:bg-hover"
            >
              {resume.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
