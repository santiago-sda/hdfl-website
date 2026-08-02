import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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

          {/* Connect */}
          <div>
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
              Connect
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/herbertdigitalfirst"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Herbert Digital-First Lab on Instagram"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-rule text-ink-soft hover:text-um-orange-text hover:border-um-orange/40 transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/herbertdigitalfirstlab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Herbert Digital-First Lab on LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-rule text-ink-soft hover:text-um-orange-text hover:border-um-orange/40 transition-colors duration-200"
              >
                <LinkedInIcon />
              </a>
            </div>
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
