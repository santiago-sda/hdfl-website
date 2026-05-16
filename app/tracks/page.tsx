import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { capabilityTracks } from "@/lib/data";
import type { MetaStripItem } from "@/components/ui/MetaStrip";

const meta: MetaStripItem[] = [
  ["Section", "Solutions"],
  ["Solutions", "4 capability tracks"],
  ["Levels", "Undergrad + Grad"],
  ["Length", "5–10 weeks"],
  ["Partner fee", "USD 0.00"],
];

const quickFacts: [string, string][] = [
  ["Cost to partner", "USD 0.00"],
  ["Typical length", "5–10 weeks"],
  ["Avg. team size", "4–6 students + 2 coaches"],
  ["Next cohort", "Fall 2026 · applications open Jun"],
];

function QuickFacts() {
  return (
    <div className="bg-card border border-rule rounded-2xl p-5">
      <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
        Quick facts
      </p>
      <dl className="space-y-3">
        {quickFacts.map(([k, v]) => (
          <div
            key={k}
            className="flex items-baseline justify-between gap-3 border-t border-rule-soft first:border-t-0 pt-2.5 first:pt-0"
          >
            <dt className="font-mono text-[10.5px] font-medium tracking-[0.12em] uppercase text-muted">
              {k}
            </dt>
            <dd className="font-mono text-[12px] font-semibold tabular-nums text-ink text-right">
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function TracksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capability Solutions · Four chapters"
        title={
          <>
            Four digital solutions,<br />
            <span className="text-um-orange-text">one</span> integrated lab.
          </>
        }
        subtitle="Each solution is taught by a dedicated faculty lead and delivered through the ACE framework. Engage one independently — or stack several across a multi-phase partnership."
        meta={meta}
        sidecar={<QuickFacts />}
      />

      <section className="px-6 md:px-10 py-12 md:py-16 pb-24">
        <div className="max-w-[1200px] mx-auto space-y-6">
          {capabilityTracks.map((track, i) => (
            <AnimatedSection key={track.id} variant="fade-up" delay={i * 0.05}>
              <article className="bg-card border border-rule rounded-2xl overflow-hidden">
                {/* Header strip */}
                <div className="bg-paper border-b border-rule px-6 md:px-7 py-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="flex items-start gap-6">
                    <span className="text-[56px] font-black tracking-[-0.045em] leading-none text-um-orange-text tabular-nums">
                      0{i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted">
                        {track.course} · {track.level} · {track.shipped} shipped
                      </p>
                      <h2 className="mt-2 text-[28px] md:text-[32px] font-extrabold tracking-[-0.025em] leading-[1.1] text-ink">
                        {track.name}
                      </h2>
                      <p className="mt-1.5 text-[13.5px] text-muted leading-snug">
                        {track.fullName}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-[18px] py-[11px] bg-transparent border border-ink text-ink text-[13px] font-medium rounded-xl hover:bg-ink/5 transition-colors self-start whitespace-nowrap"
                  >
                    Inquire about {track.course} <span aria-hidden="true">→</span>
                  </Link>
                </div>

                {/* Body grid */}
                <div className="p-6 md:p-7 grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr] gap-8">
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                      Overview
                    </p>
                    <p className="text-[14px] leading-[1.55] text-ink-soft">
                      {track.description}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                      Typical deliverables
                    </p>
                    <ol className="border-t border-ink/15">
                      {track.deliverables.map((d, j) => (
                        <li
                          key={d}
                          className={`py-2.5 flex items-start gap-3 ${
                            j === 0 ? "" : "border-t border-rule-soft"
                          }`}
                        >
                          <span className="font-mono text-[10.5px] font-bold tabular-nums tracking-[0.06em] text-um-orange-text shrink-0 mt-1">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[13.5px] leading-[1.5] text-ink-soft">{d}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                      Skills &amp; tools
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {track.skills.map((s) => (
                        <span
                          key={s}
                          className="inline-block font-mono text-[11px] font-medium tracking-[0.04em] text-ink-soft bg-paper border border-rule rounded-md px-2.5 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
