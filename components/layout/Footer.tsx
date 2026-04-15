import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-um-orange/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-md bg-um-orange flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-black">DFL</span>
              </div>
              <span className="font-bold text-base tracking-tight text-text-primary">
                Herbert Digital-First Lab
              </span>
            </Link>
            <p className="text-xs text-text-muted mb-1">Miami Herbert Business School · University of Miami</p>
            <p className="text-xs text-text-muted mb-4">Unanue Graduate Career Advancement Center</p>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              A digital-first student consulting lab delivering production-ready AI, analytics, and product design solutions — free to qualifying partner organizations.
            </p>
            <div className="mt-5 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-um-green" />
              <span className="text-xs text-text-muted">
                ACE · Applied Career Experience Framework
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a
                  href="mailto:dfl@miami.edu"
                  className="hover:text-um-orange transition-colors duration-200"
                >
                  dfl@miami.edu
                </a>
              </li>
              <li>Miami Herbert Business School</li>
              <li>University of Miami</li>
              <li>Coral Gables, FL 33146</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {year} Herbert Digital-First Lab, Miami Herbert Business School, University of Miami. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
