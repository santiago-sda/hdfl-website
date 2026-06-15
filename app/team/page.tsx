import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { teamMembers } from "@/lib/data";
import { DirectorCard } from "@/components/team/DirectorCard";
import { CoachCard } from "@/components/team/CoachCard";
import { Ledger, LedgerColumn, LedgerRow } from "@/components/ui/Ledger";
import type { MetaStripItem } from "@/components/ui/MetaStrip";

const meta: MetaStripItem[] = [
  ["Section", "People"],
  ["Faculty", "4"],
  ["Officers", "5"],
  ["Coaches", "5"],
  ["Cohort", "Spring 2026"],
];

const orgStructure = [
  { label: "Faculty leaders", count: 4, color: "#F47321" },
  { label: "Executive coaches", count: 5, color: "#005030" },
  { label: "Student coaches", count: 5, color: "#15110E" },
  { label: "Student consultants", count: "~25/sem", color: "#C45C18" },
];

function OrgStructure() {
  return (
    <div className="bg-card border border-rule rounded-2xl p-5">
      <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
        Org structure
      </p>
      <ul className="space-y-0">
        {orgStructure.map((row, i) => (
          <li
            key={row.label}
            className={`flex items-center justify-between gap-3 py-2.5 ${
              i === 0 ? "" : "border-t border-rule-soft"
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: row.color }}
              />
              <span className="text-[13px] text-ink-soft truncate">{row.label}</span>
            </div>
            <span className="font-mono tabular-nums text-[12px] font-bold text-ink whitespace-nowrap">
              {row.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const trackColumns: LedgerColumn[] = [
  { key: "code", label: "CODE", width: "120px" },
  { key: "solution", label: "SOLUTION", width: "1.4fr" },
  { key: "lead", label: "FACULTY LEAD", width: "1.2fr" },
  { key: "coaches", label: "COACHES", width: "2.2fr" },
  { key: "shipped", label: "SHIPPED", width: "90px" },
];

const trackCoverage = [
  {
    code: "BTE 210",
    solution: "HCD & Product Design",
    lead: "Dr. Murphy",
    coaches: "Rodriguez · Dave · Stebelski · Dutil · Vu · Kahn",
    shipped: 6,
  },
  {
    code: "BTE 440",
    solution: "AI Engineering",
    lead: "Dr. Korogodsky",
    coaches: "Goswami · Buoncristiano",
    shipped: 1,
  },
  {
    code: "BUS 150",
    solution: "BI & Dashboards",
    lead: "Dr. Murphy",
    coaches: "Meini · Hoybach",
    shipped: 1,
  },
  {
    code: "BTE Adv.",
    solution: "Graduate Capstone",
    lead: "Dr. Korogodsky",
    coaches: "Vu · executive board rotation",
    shipped: 1,
  },
];

export default function TeamPage() {
  const directors = teamMembers.filter((m) => m.role === "director");
  const officers = teamMembers.filter((m) => m.role === "officer");
  const coaches = teamMembers.filter((m) => m.role === "coach");

  return (
    <>
      <PageHeader
        eyebrow="People · Directors & Coaches"
        title={
          <>
            The people<br />behind <span className="text-um-orange-text italic font-black">the file.</span>
          </>
        }
        subtitle="The Herbert Digital-First Lab is led by two faculty directors and supported by a network of executive and student coaches. Every engagement is matched, by domain and skill, to the right pair of hands before a student team is assembled."
        meta={meta}
        sidecar={<OrgStructure />}
      />

      {/* Directors */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-8">
            <Eyebrow n="01">Faculty leaders</Eyebrow>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[1] text-ink">
              Lab directors.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {directors.map((d, i) => (
              <AnimatedSection key={d.id} variant="fade-up" delay={i * 0.08}>
                <DirectorCard member={d} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Officers */}
      <section className="px-6 md:px-10 py-12 md:py-16 bg-paper-alt border-y border-rule">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-8">
            <Eyebrow n="02">Executive board</Eyebrow>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[1] text-ink">
              Officers &amp; leads.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft max-w-[640px]">
              Student officers who run the Lab&apos;s operations and coach engagements end-to-end alongside the faculty leadership.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {officers.map((m, i) => (
              <AnimatedSection key={m.id} variant="scale-in" delay={i * 0.04}>
                <CoachCard member={m} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-8">
            <Eyebrow n="03">Coaching roster</Eyebrow>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[1] text-ink">
              Coaches &amp; mentors.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft max-w-[640px]">
              Each coach is matched to projects by solution area, domain, and skill fit. Together they cover the four DFL tracks.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {coaches.map((m, i) => (
              <AnimatedSection key={m.id} variant="scale-in" delay={i * 0.04}>
                <CoachCard member={m} index={i + officers.length} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Track coverage */}
      <section className="px-6 md:px-10 py-12 md:py-16 bg-paper-alt border-y border-rule">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-8">
            <Eyebrow n="04">Track coverage</Eyebrow>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[1] text-ink">
              Who leads what.
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <Ledger columns={trackColumns}>
              {trackCoverage.map((row, i) => (
                <LedgerRow
                  key={row.code}
                  columns={trackColumns}
                  isLast={i === trackCoverage.length - 1}
                >
                  <span className="font-mono text-[11px] font-bold tracking-[0.06em] uppercase text-ink">
                    {row.code}
                  </span>
                  <span className="text-ink font-semibold truncate pr-3">{row.solution}</span>
                  <span className="text-ink-soft truncate pr-3">{row.lead}</span>
                  <span className="text-muted text-[13px] truncate pr-3">{row.coaches}</span>
                  <span className="font-mono tabular-nums text-[12px] font-bold text-um-orange-text">
                    {row.shipped}
                  </span>
                </LedgerRow>
              ))}
            </Ledger>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA slab */}
      <section className="relative overflow-hidden bg-ink text-paper px-6 md:px-10 py-16 md:py-20">
        <div
          aria-hidden
          className="absolute -top-[200px] -right-[150px] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,115,33,0.22) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-end">
          <AnimatedSection variant="fade-up">
            <div className="inline-flex items-baseline gap-2.5 mb-5">
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase" style={{ color: "#F4A36A" }}>
                §05
              </span>
              <span className="self-center w-6 h-px" style={{ backgroundColor: "#F4A36A" }} />
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase" style={{ color: "#F4A36A" }}>
                Work with this team
              </span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-extrabold tracking-[-0.035em] leading-[0.98]">
              Ready to partner with us?
            </h2>
            <p className="mt-5 text-[15px] leading-[1.6] text-paper/75 max-w-[560px]">
              Submit your challenge and the Lab director will reach out within five business days to schedule a scoping conversation.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <div className="flex flex-col gap-4 items-start lg:items-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-5 py-[15px] bg-um-orange hover:bg-um-orange-dim text-white text-[13px] font-semibold rounded-xl transition-colors"
              >
                Submit a Challenge{" "}
                <span className="font-mono transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
              <a
                href="mailto:dfl@miami.edu"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-paper/85 hover:text-paper transition-colors"
              >
                dfl@miami.edu{" "}
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
