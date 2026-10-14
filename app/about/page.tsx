"use client";

import { PageHeader } from "@/components/ui/PageHero";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { projectPhases } from "@/lib/data";
import { AnnualCycleChart } from "@/components/about/AnnualCycleChart";
import type { MetaStripItem } from "@/components/ui/MetaStrip";
import { motion } from "framer-motion";

const talentChallenges = [
  {
    title: "Resumes are proxies",
    body: "A resume tells an employer what a candidate says they know, not how they work. AI now makes resumes, cover letters, portfolios, and interview scripts easy to polish, so traditional selection signals get noisier — not students less capable.",
  },
  {
    title: "Interviews reward impression management",
    body: "Employers must make consequential hiring decisions before they can observe performance, and interviews favor the candidate who presents best on the day.",
  },
  {
    title: "Engagement arrives late and scattered",
    body: "Internships come late in the funnel, university engagement is fragmented, and new-hire recruiting is split from reskilling the people already on the team.",
  },
];

const methodSteps = [
  { title: "Define the problem", body: "Frame a clear, bounded problem tied to the decision the partner has to make." },
  { title: "Structure it", body: "Break the problem into logical, non-overlapping parts and form hypotheses." },
  { title: "Prioritize", body: "Focus effort on the parts most likely to move the answer." },
  { title: "Plan the work", body: "Turn the priorities into a workplan: what to analyze, who does it, and by when." },
  { title: "Run the analyses", body: "Test each hypothesis against data and evidence." },
  { title: "Synthesize", body: "Pull the findings together into one coherent answer." },
  { title: "Communicate", body: "Tell the story so decision-makers can act on it." },
];

const methodValue = [
  "One shared method for students, coaches, and partners, so a short project begins with the right problem instead of jumping to a build.",
  "Hypothesis-driven work: teams commit to an answer early and test it, rather than collecting information without direction.",
  "Visible work products at every step — a problem statement, a structured breakdown, a workplan, the analysis, a recommendation — that show how a student creates value.",
  "A built-in finish: every project ends by communicating a recommendation to the partner's leadership.",
];

const meta: MetaStripItem[] = [
  ["Section", "Experiential Learning"],
  ["Framework", "ACE · Applied Career Experience"],
  ["Phases", "3"],
  ["Cycle", "Annual · F + S + Su"],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiential Learning · The Miami Three-Phase Model"
        titleColor="green"
        title={
          <>
            A different kind of<br />experiential learning.
          </>
        }
        subtitle="We are the only university experiential learning program structured around full-lifecycle delivery. Peer programs at Michigan Ross, Rutgers, and Johns Hopkins offer project-based experiential learning — but none of them lead with digital and AI engineering as their core proposition, and all of them end at the final presentation. We continue."
        meta={meta}
      />

      {/* The talent problem */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-10">
            <Eyebrow n="01">The challenge</Eyebrow>
            <h2 className="mt-4 text-[44px] md:text-[56px] font-extrabold tracking-[-0.035em] leading-[0.98] text-ink">
              The talent problem is<br />now an information problem.
            </h2>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.65] text-ink-soft">
              The employer&apos;s question has shifted from{" "}
              <span className="text-ink font-semibold">&ldquo;What does this candidate know?&rdquo;</span> to{" "}
              <span className="text-ink font-semibold">
                &ldquo;How does this candidate create value when knowledge, data, and tools are widely accessible?&rdquo;
              </span>{" "}
              That cannot be inferred from a resume. It has to be observed through work — which is what Experiential
              Learning provides.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {talentChallenges.map((c) => (
              <motion.div
                key={c.title}
                variants={staggerItem}
                className="bg-card border border-rule rounded-2xl p-6 md:p-7 transition-colors duration-200 hover:border-ink/20"
              >
                <h3 className="text-[19px] font-extrabold tracking-[-0.02em] leading-[1.2] text-ink">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-ink-soft">{c.body}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Miami Method */}
      <section className="px-6 md:px-10 py-12 md:py-16 bg-paper-alt border-y border-rule">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-10">
            <Eyebrow n="02">The Miami Method</Eyebrow>
            <h2 className="mt-4 text-[44px] md:text-[56px] font-extrabold tracking-[-0.035em] leading-[0.98] text-ink">
              Bulletproof problem<br />solving, applied.
            </h2>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.65] text-ink-soft">
              The Miami Method is built on <span className="text-ink font-semibold">Bulletproof Problem Solving</span> by
              Charles Conn and Robert McLean — a seven-step approach for taking a messy business problem to a clear,
              evidence-based recommendation. It is the framework Digital-First Lab teams use to structure their work.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodSteps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={staggerItem}
                className="bg-card border border-rule rounded-2xl p-5 md:p-6"
              >
                <span className="font-mono text-[11px] font-bold tabular-nums tracking-[0.08em] text-um-orange-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[17px] font-extrabold tracking-[-0.02em] leading-[1.2] text-ink">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-soft">{s.body}</p>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimatedSection variant="fade-up" delay={0.1} className="mt-10">
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
              Why it matters for Experiential Learning
            </p>
            <ul className="border-t border-ink/15 max-w-[860px]">
              {methodValue.map((v, j) => (
                <li
                  key={v}
                  className={`py-3 flex items-start gap-3 ${j === 0 ? "" : "border-t border-rule-soft"}`}
                >
                  <span aria-hidden="true" className="mt-[8px] w-1.5 h-1.5 rounded-full bg-um-orange shrink-0" />
                  <span className="text-[14.5px] leading-[1.55] text-ink-soft">{v}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Three-phase model */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-10">
            <Eyebrow n="03">Three-phase model</Eyebrow>
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
            <Eyebrow n="04">Annual cycle</Eyebrow>
            <h2 className="mt-4 text-[44px] md:text-[56px] font-extrabold tracking-[-0.035em] leading-[0.98] text-ink">
              One calendar,<br />three cohorts.
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <AnnualCycleChart />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
