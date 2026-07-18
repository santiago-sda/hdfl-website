"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { MetaStrip } from "@/components/ui/MetaStrip";

const meta: [string, string][] = [
  ["Established", "2023"],
  ["Location", "Coral Gables, FL"],
  ["Program", "ACE Framework"],
  ["Cohort", "Spring 2026"],
  ["Engagements", "9 shipped"],
  ["Partner fee", "USD 0.00"],
];

function parseStatSlot(value: string): { num: string; unit: string } {
  const trimmed = value.trim();
  const firstSpace = trimmed.indexOf(" ");
  if (firstSpace === -1) return { num: trimmed, unit: "Output" };
  return {
    num: trimmed.slice(0, firstSpace),
    unit: trimmed.slice(firstSpace + 1),
  };
}

function cardStat(project: Project): { num: string; unit: string } {
  // Prefer metrics[1] (usually a short "N + unit" deliverable); fall back to metrics[0].
  const metric = project.metrics[1] ?? project.metrics[0];
  return parseStatSlot(metric.value);
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = projects.length;
  const current = projects[index];
  const stat = cardStat(current);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  }, [total]);

  return (
    <section className="relative overflow-hidden">
      <div className="h-[72px]" />

      <MetaStrip items={meta} />

      <div className="relative px-6 md:px-10 py-16 md:py-24">
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
              Digital-First<br />
              <span className="relative inline-block px-1">
                <span
                  aria-hidden="true"
                  className="absolute -inset-x-3 -inset-y-1 z-0 -rotate-1"
                >
                  <Image
                    src="/brand/brush-accentpink-01.png"
                    alt=""
                    fill
                    className="object-fill select-none pointer-events-none"
                    sizes="400px"
                  />
                </span>
                <span className="relative z-10">Lab.</span>
              </span>
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
                className="group inline-flex items-center gap-2.5 px-5 py-[15px] bg-ink hover:bg-ink-soft text-paper text-[13px] font-semibold rounded-xl transition-colors"
              >
                Submit a Challenge{" "}
                <span className="font-mono transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:text-um-orange-text transition-colors px-2 py-2"
              >
                Browse the archive — 9 engagements{" "}
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right column — engagement deck */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Card */}
            <div
              className="relative bg-card border border-rule rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 12px 32px -16px rgba(0,0,0,0.12)",
              }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 24 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <Link
                    href={`/engagements/${current.slug}`}
                    className="group block hover:bg-paper/30 transition-colors"
                  >
                    <div className="flex items-center justify-between px-5 py-3 border-b border-rule-soft bg-paper/60">
                      <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-um-orange-text">
                        Featured · №{current.code}
                      </span>
                      <span className="font-mono text-[10.5px] font-medium tracking-[0.16em] uppercase text-muted">
                        {current.term} · {current.status}
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.025]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>

                    <div className="p-5 sm:p-6">
                      <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted">
                        {current.industry}
                      </p>
                      <h3 className="mt-2 text-[22px] font-extrabold tracking-[-0.02em] leading-[1.15] text-ink">
                        {current.title}
                      </h3>
                      <p className="mt-3 text-[13.5px] leading-[1.55] text-ink-soft line-clamp-3">
                        {current.description}
                      </p>

                      <div className="mt-5 grid grid-cols-3 gap-0 border-t border-rule-soft pt-4">
                        <div>
                          <div className="font-mono tabular-nums text-[15px] font-bold text-ink truncate">
                            {current.category}
                          </div>
                          <div className="font-mono text-[9.5px] font-medium tracking-[0.16em] uppercase text-muted mt-0.5">
                            Track
                          </div>
                        </div>
                        <div className="border-l border-rule-soft pl-4">
                          <div className="font-mono tabular-nums text-[15px] font-bold text-ink truncate">
                            {current.duration.replace(" weeks", " wk").replace(" week", " wk")}
                          </div>
                          <div className="font-mono text-[9.5px] font-medium tracking-[0.16em] uppercase text-muted mt-0.5">
                            Duration
                          </div>
                        </div>
                        <div className="border-l border-rule-soft pl-4">
                          <div className="font-mono tabular-nums text-[15px] font-bold text-ink truncate">
                            {stat.num}
                          </div>
                          <div className="font-mono text-[9.5px] font-medium tracking-[0.16em] uppercase text-muted mt-0.5 truncate">
                            {stat.unit}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Deck navigation */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous engagement"
                className="group inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-soft hover:text-um-orange-text transition-colors px-2 py-1.5"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-rule bg-card group-hover:border-ink/40 transition-all duration-200 text-[14px] group-hover:-translate-x-0.5"
                >
                  ←
                </span>
                <span className="hidden sm:inline">Prev</span>
              </button>

              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
                <span className="tabular-nums text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="w-3 h-px bg-rule" />
                <span className="tabular-nums">
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next engagement"
                className="group inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-soft hover:text-um-orange-text transition-colors px-2 py-1.5"
              >
                <span className="hidden sm:inline">Next</span>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-rule bg-card group-hover:border-ink/40 transition-all duration-200 text-[14px] group-hover:translate-x-0.5"
                >
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
