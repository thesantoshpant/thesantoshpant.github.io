import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Menu } from "lucide-react";
import { site } from "../content/site";
import { ResumeDropdown } from "./ResumeDropdown";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

const SECTION_IDS = site.nav.map((item) => item.href.replace("#", ""));

/** Sticky top nav: transparent → frosted on scroll, with active-section tracking. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(() => {
    if (typeof window === "undefined") return "work";
    const hash = window.location.hash.replace("#", "");
    return SECTION_IDS.includes(hash) ? hash : "work";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Among sections crossing the centre band, highlight the most-visible one
        // (picking the max ratio is order-independent, unlike taking the last entry).
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length === 0) return;
        const mostVisible = intersecting.reduce((a, b) =>
          b.intersectionRatio > a.intersectionRatio ? b : a,
        );
        setActive(mostVisible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-hairline bg-bg/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-base font-bold lowercase text-primary"
          aria-label={`${site.name} — home`}
        >
          {site.wordmark}
          <span className="text-accent">.</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 font-mono text-xs uppercase tracking-eyebrow md:flex"
        >
          {site.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`pb-1 transition-colors ${
                  isActive
                    ? "border-b-2 border-accent font-medium text-accent"
                    : "text-secondary hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden p-2 text-secondary transition-colors hover:text-accent sm:block"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden p-2 text-secondary transition-colors hover:text-accent sm:block"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
          <div className="hidden md:block">
            <ResumeDropdown />
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className="-m-2 p-2 text-secondary transition-colors hover:text-accent md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusRef={menuButtonRef}
      />
    </header>
  );
}
