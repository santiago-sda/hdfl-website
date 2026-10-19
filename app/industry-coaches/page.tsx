import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CoachCard } from "@/components/coaches/CoachCard";
import { industryCoaches, citrinPartnership } from "@/lib/data";
import type { MetaStripItem } from "@/components/ui/MetaStrip";

const meta: MetaStripItem[] = [
  ["Section", "Industry Coaches"],
  ["Coaches", String(industryCoaches.length)],
  ["First industry partner", "Citrin Cooperman"],
];

export const metadata: Metadata = {
  title: "Industry Coaches",
  description:
    "Senior consulting and business leaders who mentor Miami Digital-First Lab student coaches and consulting project teams, working alongside MDFL faculty.",
  alternates: { canonical: "/industry-coaches" },
};

const helps = [
  "Structure complex business problems and develop practical recommendations.",
  "Strengthen analysis, project execution, and client deliverables.",
  "Communicate effectively with executives and project stakeholders.",
  "Connect classroom learning with professional consulting practice.",
  "Develop leadership, judgment, and consulting skills.",
];

export default function IndustryCoachesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industry Coaches · Senior advisors"
        titleColor="green"
        title={
          <>
            Industry coaches,<br />
            <span className="text-um-orange-text">alongside</span> our students.
          </>
        }
        subtitle="Our industry coaches bring senior consulting and business leadership experience to MDFL's student teams. Through mentorship and project guidance, they help students navigate complex challenges, strengthen client recommendations, and connect academic learning with professional practice."
        meta={meta}
      />

      {/* How coaches help */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <AnimatedSection variant="fade-up">
            <Eyebrow n="01">How they help</Eyebrow>
            <h2 className="mt-4 text-[40px] md:text-[48px] font-extrabold tracking-[-0.035em] leading-[1] text-ink">
              Mentorship that<br />sharpens the work.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.65] text-ink-soft max-w-[460px]">
              Industry coaches work as senior advisors alongside MDFL&apos;s faculty directors and student coaches.
              They complement the existing coaching structure; they do not replace student coaches or lead the lab.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
              Industry coaches help students
            </p>
            <ol className="border-t border-ink/15">
              {helps.map((h, i) => (
                <li
                  key={h}
                  className={`py-3.5 flex items-start gap-4 ${i === 0 ? "" : "border-t border-rule-soft"}`}
                >
                  <span className="font-mono text-[11px] font-bold tabular-nums tracking-[0.06em] text-um-orange-text shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-[1.5] text-ink-soft">{h}</span>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      {/* Coach profiles */}
      <section id="coaches" className="px-6 md:px-10 py-12 md:py-16 bg-paper-alt border-y border-rule scroll-mt-24">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up" className="mb-10">
            <Eyebrow n="02">Meet the coaches</Eyebrow>
            <h2 className="mt-4 text-[40px] md:text-[48px] font-extrabold tracking-[-0.035em] leading-[1] text-ink">
              Our first industry coaches.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryCoaches.map((coach, i) => (
              <AnimatedSection key={coach.id} variant="fade-up" delay={i * 0.08} className="h-full">
                <div className="h-full [&>article]:h-full">
                  <CoachCard coach={coach} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner recognition */}
      <section className="px-6 md:px-10 py-12 md:py-16 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection variant="fade-up">
            <div className="bg-card border border-rule rounded-2xl p-6 md:p-9 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="shrink-0">
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
                  First industry partner
                </p>
                <Image
                  src={citrinPartnership.logo}
                  alt="Citrin Cooperman logo"
                  width={2000}
                  height={385}
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              <div className="flex-1">
                <p className="text-[15px] leading-[1.6] text-ink-soft max-w-[560px]">
                  MDFL&apos;s collaboration with Citrin Cooperman connects student learning with industry expertise,
                  including mentorship from experienced professionals.
                </p>
              </div>
              <Link
                href={`/news/${citrinPartnership.slug}`}
                className="group inline-flex items-center gap-2 px-[18px] py-[11px] bg-transparent border border-ink text-ink text-[13px] font-medium rounded-xl hover:bg-ink/5 transition-colors whitespace-nowrap self-start md:self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-um-orange"
              >
                Read the Announcement{" "}
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
