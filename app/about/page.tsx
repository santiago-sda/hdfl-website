"use client";

import { PageHeader } from "@/components/ui/PageHero";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { projectPhases, annualTimeline } from "@/lib/data";
import type { MetaStripItem } from "@/components/ui/MetaStrip";
import { motion } from "framer-motion";

const meta: MetaStripItem[] = [
  ["Section", "Method"],
  ["Framework", "ACE · Applied Career Experience"],
  ["Phases", "3"],
  ["Cycle", "Annual · F + S"],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Method · The Miami Three-Phase Model"
        title={
          <>
            A different<br />kind of<br />experiential learning.
          </>
        }
        subtitle="We are the only university experiential learning program structured around full-lifecycle delivery. Peer programs at Michigan Ross, Rutgers, and Johns Hopkins offer project-based experiential learning — but none of them lead with digital and AI engineering as their core proposition, and all of them end at the final presentation. We continue."
        meta={meta}
      />

      {/* Three-phase model */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-10">
            <Eyebrow n="01">Three-phase model</Eyebrow>
            <h2 className="mt-4 text-[44px] md:text-[56px] font-extrabold tracking-[-0.035em] leading-[0.98] text-ink">
              How a project<br />actually unfolds.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-5">
            {projectPhases.map((phase) => (
              <motion.article
                key={phase.number}
                variants={staggerItem}
                className="bg-card border border-rule rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-[160px_1.4fr_2fr] gap-6 md:gap-10 items-start"
              >
                <div>
                  <div className="text-[68px] md:text-[84px] font-extrabold tracking-[-0.045em] leading-none text-um-orange-text tabular-nums">
                    {phase.number}
                  </div>
                  <p className="mt-3 font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-muted">
                    {phase.duration}
                  </p>
                </div>

                <div>
                  <h3 className="text-[26px] md:text-[30px] font-extrabold tracking-[-0.025em] leading-[1.1] text-ink">
                    {phase.title}
                  </h3>
                </div>

                <ul className="space-y-0">
                  {phase.bullets.map((b, i) => (
                    <li
                      key={b}
                      className={`flex items-start gap-3 py-2.5 ${
                        i === 0 ? "border-t border-ink/15" : "border-t border-rule-soft"
                      }`}
                    >
                      <span className="font-mono text-[10.5px] font-bold tabular-nums tracking-[0.06em] text-um-orange-text shrink-0 mt-1">
                        {phase.number}.{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[14px] leading-[1.55] text-ink-soft">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Annual cycle ledger */}
      <section className="px-6 md:px-10 py-12 md:py-16 bg-paper-alt border-y border-rule">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-10">
            <Eyebrow n="02">Annual cycle</Eyebrow>
            <h2 className="mt-4 text-[44px] md:text-[56px] font-extrabold tracking-[-0.035em] leading-[0.98] text-ink">
              One calendar,<br />two cohorts.
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <div className="bg-card border border-rule rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-6 bg-paper border-b border-rule">
                {annualTimeline.map((row) => (
                  <div
                    key={row.period}
                    className="px-4 py-3 border-r border-rule-soft last:border-r-0"
                  >
                    <p className="font-mono text-[10.5px] font-bold tracking-[0.16em] uppercase text-um-orange-text">
                      {row.period}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6">
                {annualTimeline.map((row) => (
                  <div
                    key={row.period}
                    className="px-4 py-5 border-r border-rule-soft last:border-r-0 border-t md:border-t-0 border-rule-soft"
                  >
                    <p className="text-[13.5px] leading-[1.55] text-ink-soft">{row.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
