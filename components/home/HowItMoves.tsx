"use client";

import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { engagementPhases } from "@/lib/data";

export function HowItMoves() {
  return (
    <section className="relative px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection variant="fade-up" className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow n="04">How a project moves</Eyebrow>
            <h2 className="mt-4 text-[44px] md:text-[56px] lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[0.96] text-ink">
              Three phases,<br />one partnership.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-ink-soft max-w-[440px]">
            We are the only university consulting program that runs a structured <em className="not-italic font-semibold text-ink">needs assessment</em> before a team is assembled and a structured <em className="not-italic font-semibold text-ink">post-engagement handoff</em> after the final presentation. Peer programs end at the demo. We continue.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {engagementPhases.map((phase) => (
            <motion.div
              key={phase.number}
              variants={staggerItem}
              className="bg-card border border-rule rounded-2xl p-7 flex flex-col transition-colors duration-200 hover:border-ink/20"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[60px] font-extrabold tracking-[-0.04em] leading-none text-um-orange-text tabular-nums">
                  {phase.number}
                </span>
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-muted text-right max-w-[120px] mt-2">
                  {phase.duration}
                </span>
              </div>

              <h3 className="mt-6 text-[22px] font-extrabold tracking-[-0.02em] leading-[1.15] text-ink">
                {phase.title}
              </h3>

              <ul className="mt-5 space-y-0">
                {phase.bullets.map((b, i) => (
                  <li
                    key={b}
                    className={`flex items-start gap-3 py-2.5 ${
                      i === 0 ? "border-t border-ink/15" : "border-t border-rule-soft"
                    }`}
                  >
                    <span className="font-mono text-[10.5px] font-medium tracking-[0.04em] tabular-nums text-um-orange-text shrink-0 mt-0.5">
                      {phase.number}.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13.5px] leading-[1.5] text-ink-soft">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
