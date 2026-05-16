"use client";

import Link from "next/link";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { capabilityTracks } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";

const skillCount: Record<string, number> = {
  "HCD & Product Design": 4,
  "AI Engineering": 4,
  "BI & Dashboards": 4,
  "Graduate Capstone": 4,
};

export function WhatWeDo() {
  return (
    <section className="relative px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection variant="fade-up" className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow n="02">What we deliver</Eyebrow>
            <h2 className="mt-4 text-[44px] md:text-[56px] lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[0.96] text-ink">
              Four capability<br />solutions.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-ink-soft max-w-[420px]">
            Each solution is taught by a dedicated faculty lead and delivered through the Applied Career Experience (ACE) framework. Engage one independently, or chain several across a multi-phase partnership that moves from research to ship.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilityTracks.map((track) => (
            <motion.div
              key={track.id}
              variants={staggerItem}
              className="relative bg-card border border-rule rounded-2xl overflow-hidden"
            >
              {track.mostRequested && (
                <span className="absolute top-3 right-3 z-10 inline-flex items-center font-mono text-[10.5px] font-semibold tracking-[0.14em] uppercase bg-um-orange text-white px-2 py-0.5 rounded">
                  Most Requested
                </span>
              )}

              {/* Mono header row */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-rule-soft bg-paper/60">
                <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink">
                  {track.course} · Ch.0{track.id}
                </span>
                <span className="font-mono text-[10.5px] font-medium tracking-[0.16em] uppercase tabular-nums text-muted">
                  {track.shipped} shipped
                </span>
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-[24px] md:text-[26px] font-extrabold tracking-[-0.02em] leading-[1.1] text-ink">
                  {track.name}
                </h3>
                <p className="mt-1 font-mono text-[10.5px] font-medium tracking-[0.16em] uppercase text-muted">
                  {track.level}
                </p>
                <p className="mt-4 text-[14px] leading-[1.55] text-ink-soft">
                  {track.description}
                </p>

                {/* Skill chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {track.skills.slice(0, skillCount[track.name] ?? 4).map((s) => (
                    <span
                      key={s}
                      className="inline-block font-mono text-[11px] font-medium tracking-[0.04em] text-ink-soft bg-paper border border-rule rounded-md px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection variant="fade-up" delay={0.2} className="mt-8">
          <Link
            href="/tracks"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink hover:text-um-orange-text transition-colors"
          >
            View all four solutions <span aria-hidden="true">→</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
