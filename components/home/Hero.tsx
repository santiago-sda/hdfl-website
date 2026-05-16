"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { MetaStrip } from "@/components/ui/MetaStrip";

const meta: [string, string][] = [
  ["Established", "2023"],
  ["Location", "Coral Gables, FL"],
  ["Program", "ACE Framework"],
  ["Cohort", "Spring 2026"],
  ["Engagements", "9 shipped"],
  ["Partner fee", "USD 0.00"],
];

export function Hero() {
  const featured = projects[0];

  return (
    <section className="relative overflow-hidden">
      {/* Spacer for fixed navbar */}
      <div className="h-[72px]" />

      <MetaStrip items={meta} />

      <div className="relative px-6 md:px-10 py-16 md:py-24">
        {/* Static ambient orbs (one warm top-right, one greenish bottom-left) */}
        <div
          aria-hidden
          className="absolute -top-[260px] -right-[200px] w-[640px] h-[640px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,115,33,0.18), transparent 70%)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-[260px] -left-[200px] w-[560px] h-[560px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,80,48,0.10), transparent 70%)" }}
        />

        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-end">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-baseline gap-2.5 mb-7">
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-um-orange-text">
                §01
              </span>
              <span className="self-center w-6 h-px bg-um-orange-dim" />
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-um-orange-text">
                Issue №7 · Spring 2026 · Coral Gables
              </span>
            </div>

            <h1 className="text-[68px] sm:text-[92px] md:text-[108px] lg:text-[116px] font-black tracking-[-0.045em] leading-[0.92] text-ink">
              Digital-First<br />Lab.
            </h1>

            <div className="mt-7 flex items-center gap-3">
              <span className="w-10 h-0.5 bg-um-orange" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-ink">
                Where digital meets the real world
              </span>
            </div>

            <p className="mt-7 text-[17px] leading-[1.6] text-ink-soft max-w-[520px]">
              A digital-first student consulting lab inside Miami Herbert Business School. We pair Herbert students with outside organizations to ship working AI systems, dashboards, and product prototypes — <span className="text-ink font-semibold">free to the partner, real software in production.</span>
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-5 py-[15px] bg-ink hover:bg-ink-soft text-paper text-[13px] font-semibold rounded-xl transition-colors"
              >
                Submit a Challenge <span className="font-mono">↗</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:text-um-orange-text transition-colors px-2 py-2"
              >
                Browse the archive — 9 engagements <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Right column — featured engagement card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Link
              href={`/engagements/${featured.slug}`}
              className="group block bg-card border border-rule rounded-2xl overflow-hidden hover:border-ink/20 transition-colors"
              style={{
                boxShadow: "0 1px 0 rgba(21,17,14,0.04), 0 12px 32px -16px rgba(21,17,14,0.12)",
              }}
            >
              {/* Card mono header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-rule-soft bg-paper/60">
                <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-um-orange-text">
                  Featured · №{featured.code}
                </span>
                <span className="font-mono text-[10.5px] font-medium tracking-[0.16em] uppercase text-muted">
                  {featured.term} · {featured.status}
                </span>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="p-5 sm:p-6">
                <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted">
                  {featured.industry}
                </p>
                <h3 className="mt-2 text-[22px] font-extrabold tracking-[-0.02em] leading-[1.15] text-ink">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.55] text-ink-soft">
                  iOS prototype + journey maps that recovered an estimated $100–250K/month of unrealized broker revenue at a wholesale mortgage lender.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-0 border-t border-rule-soft pt-4">
                  <div>
                    <div className="font-mono tabular-nums text-[15px] font-bold text-ink">HCD</div>
                    <div className="font-mono text-[9.5px] font-medium tracking-[0.16em] uppercase text-muted mt-0.5">Track</div>
                  </div>
                  <div className="border-l border-rule-soft pl-4">
                    <div className="font-mono tabular-nums text-[15px] font-bold text-ink">6 wk</div>
                    <div className="font-mono text-[9.5px] font-medium tracking-[0.16em] uppercase text-muted mt-0.5">Duration</div>
                  </div>
                  <div className="border-l border-rule-soft pl-4">
                    <div className="font-mono tabular-nums text-[15px] font-bold text-ink">24</div>
                    <div className="font-mono text-[9.5px] font-medium tracking-[0.16em] uppercase text-muted mt-0.5">Screens</div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
