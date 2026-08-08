import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { teamMembers } from "@/lib/data";
import { DirectorCard } from "@/components/team/DirectorCard";
import { CoachCard } from "@/components/team/CoachCard";
import type { MetaStripItem } from "@/components/ui/MetaStrip";

const facultyCount = teamMembers.filter((m) => m.role === "director").length;
const officerCount = teamMembers.filter((m) => m.role === "officer").length;
const coachCount = teamMembers.filter((m) => m.role === "coach").length;

const meta: MetaStripItem[] = [
  ["Section", "People"],
  ["Faculty", String(facultyCount)],
  ["Officers", String(officerCount)],
  ["Coaches", String(coachCount)],
  ["Cohort", "Spring 2026"],
];

const orgStructure = [
  { label: "Faculty leaders", count: facultyCount, color: "#F47321" },
  { label: "Executive coaches", count: officerCount, color: "#005030" },
  { label: "Student coaches", count: coachCount, color: "#000000" },
  { label: "Student teams", count: "~25/sem", color: "#E7278A" },
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

export default function TeamPage() {
  const directors = teamMembers.filter((m) => m.role === "director");
  const officers = teamMembers.filter((m) => m.role === "officer");
  const coaches = teamMembers.filter((m) => m.role === "coach");

  return (
    <>
      <PageHeader
        eyebrow="People · Directors & Coaches"
        titleColor="green"
        title={
          <>
            The people<br />behind <span className="text-um-orange-text italic font-black">the file.</span>
          </>
        }
        subtitle="The Miami Digital-First Lab is led by two faculty directors and supported by a network of executive and student coaches. Every project is matched, by domain and skill, to the right pair of hands before a student team is assembled."
        meta={meta}
        sidecar={<OrgStructure />}
      />

      {/* Directors */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-8">
            <h2 className="text-[36px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[1] text-ink">
              Lab directors.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {directors.map((d, i) => (
              <AnimatedSection key={d.id} variant="fade-up" delay={i * 0.08} className="h-full">
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
            <h2 className="text-[36px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[1] text-ink">
              Officers &amp; leads.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft max-w-[640px]">
              Student officers who run the Lab&apos;s operations and coach projects end-to-end alongside the faculty leadership.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {officers.map((m, i) => (
              <AnimatedSection key={m.id} variant="scale-in" delay={i * 0.04}>
                <CoachCard member={m} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-8">
            <h2 className="text-[36px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[1] text-ink">
              Coaches &amp; mentors.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft max-w-[640px]">
              Each coach is matched to projects by solution area, domain, and skill fit. Together they cover the five DFL tracks.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {coaches.map((m, i) => (
              <AnimatedSection key={m.id} variant="scale-in" delay={i * 0.04}>
                <CoachCard member={m} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA slab */}
      <section className="relative overflow-hidden bg-um-green text-paper px-6 md:px-10 py-16 md:py-20">
        <div
          aria-hidden
          className="absolute -top-[200px] -right-[150px] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,115,33,0.22) 0%, transparent 65%)" }}
        />
        <div aria-hidden className="absolute top-0 right-0 w-[300px] h-[157px] pointer-events-none">
          <Image
            src="/um-stripes.png"
            alt=""
            fill
            className="object-contain object-right-top select-none"
            sizes="300px"
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-end">
          <AnimatedSection variant="fade-up">
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
                href="mailto:alex.korogodsky@miami.edu"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-paper/85 hover:text-paper transition-colors"
              >
                alex.korogodsky@miami.edu{" "}
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
