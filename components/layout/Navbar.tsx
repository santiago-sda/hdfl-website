"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { navLinks } from "@/lib/data";
import { Wordmark } from "@/components/ui/Wordmark";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return () => unsub();
  }, [scrollY]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(246,243,236,0.92)" : "rgba(246,243,236,0)",
        borderBottom: scrolled ? "1px solid rgba(21,17,14,0.10)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <nav className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1.5 text-[13px] font-medium tracking-[-0.005em] transition-colors duration-200 ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-um-orange"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center gap-2 px-4 py-[10px] bg-ink hover:bg-ink-soft text-paper text-[13px] font-semibold rounded-xl transition-colors duration-200"
          >
            Submit a Challenge <span className="font-mono text-[12px]">↗</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-ink/5 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-px bg-ink block origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="w-5 h-px bg-ink block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-px bg-ink block origin-center"
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            id="mobile-nav-drawer"
            className="md:hidden overflow-hidden border-t border-rule bg-paper/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-ink bg-ink/5"
                        : "text-muted hover:text-ink hover:bg-ink/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-3 pt-3 border-t border-rule"
              >
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="block px-4 py-3 bg-ink text-paper text-sm font-semibold rounded-xl text-center"
                >
                  Submit a Challenge ↗
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
