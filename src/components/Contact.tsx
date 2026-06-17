import { ArrowUp } from "lucide-react";
import { site } from "../content/site";
import { Reveal } from "./Reveal";

const footerLinks = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "GitHub", href: site.social.github },
  { label: "npm", href: site.social.npm },
];

/** Contact line + minimal mono footer. One teal "Email me" link; no glowing button. */
export function Contact() {
  return (
    <footer id="contact" className="border-t border-hairline bg-bg-alt py-[72px] md:py-24">
      <div className="mx-auto flex max-w-content flex-col items-center gap-8 px-6 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <p className="font-display text-3xl font-semibold tracking-tight text-primary md:text-[40px]">
            Open to 2027 software and geospatial-ML roles.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="font-body text-lg text-accent underline underline-offset-4 transition-colors hover:text-primary"
          >
            Email me
          </a>
        </Reveal>

        <nav aria-label="Social" className="mt-4 flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-eyebrow text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="font-mono text-xs text-muted">
            © 2026 {site.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-eyebrow text-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
