import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";

const sitemap = [
  { href: "/", label: "Home" },
  { href: "/tracks", label: "Solutions" },
  { href: "/projects", label: "Archive" },
  { href: "/team", label: "People" },
  { href: "/about", label: "Method" },
  { href: "/contact", label: "Submit" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-rule bg-paper-alt">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              aria-label="Home — Herbert Digital-First Lab"
              className="inline-block mb-4 transition-opacity duration-200 hover:opacity-80"
            >
              <Wordmark />
            </Link>
            <p className="text-sm text-ink-soft leading-relaxed max-w-xs">
              A digital-first student experiential learning lab at Miami Herbert Business School. Production AI, analytics, and product design — free to qualifying partner organizations through the ACE framework.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-card border border-rule px-2.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-um-green" />
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink">
                ACE · Applied Career Experience
              </span>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
              Sitemap
            </p>
            <ul className="space-y-2.5">
              {sitemap.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft hover:text-ink transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>
                <a
                  href="mailto:alex.korogodsky@miami.edu"
                  className="hover:text-um-orange-text transition-colors duration-200"
                >
                  alex.korogodsky@miami.edu
                </a>
              </li>
              <li>University of Miami</li>
              <li>Coral Gables, FL 33146</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
              Follow
            </p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>
                <a
                  href="https://www.instagram.com/herbertdigitalfirst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-um-orange-text transition-colors duration-200"
                >
                  Instagram · @herbertdigitalfirst
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/herbertdigitalfirstlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-um-orange-text transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {year} Herbert DFL · All rights reserved
          </p>
          <p className="font-mono text-[10.5px] font-medium tracking-[0.14em] uppercase text-muted">
            v2.0 · Spring 2026 · Coral Gables, FL
          </p>
        </div>
      </div>
    </footer>
  );
}
