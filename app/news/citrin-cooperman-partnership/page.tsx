import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CoachAvatar } from "@/components/coaches/CoachAvatar";
import { citrinPartnership, industryCoaches } from "@/lib/data";
import type { MetaStripItem } from "@/components/ui/MetaStrip";

const { contact } = citrinPartnership;

const meta: MetaStripItem[] = [
  ["Section", "Announcement"],
  ["Topic", "Industry partnership"],
  ["Partner", "Citrin Cooperman"],
];

export const metadata: Metadata = {
  title: citrinPartnership.title,
  description: citrinPartnership.summary,
  alternates: { canonical: `/news/${citrinPartnership.slug}` },
};

const goals = [
  "Experiential consulting projects that address real business challenges.",
  "Mentorship from experienced consulting professionals.",
  "Student professional development and exposure to consulting careers.",
  "Opportunities to explore internships and career pathways.",
  "Collaboration around professional learning and executive education.",
  "Knowledge sharing and potential future joint initiatives.",
];

const linkFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-um-orange rounded";

export default function CitrinPartnershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Announcement · Industry partnership"
        titleColor="green"
        title={
          <>
            Our first industry<br />
            partnership.
          </>
        }
        subtitle="MDFL welcomes Citrin Cooperman as its first industry partner."
        meta={meta}
      />

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16">
          {/* Article */}
          <AnimatedSection variant="fade-up">
            <article>
              <h2 className="text-[30px] md:text-[38px] font-extrabold tracking-[-0.03em] leading-[1.08] text-ink">
                {citrinPartnership.title}
              </h2>

              <p className="mt-6 text-[17px] leading-[1.65] text-ink-soft">
                The Miami Digital-First Lab (MDFL) at Miami Business School is pleased to announce Citrin Cooperman as
                its first industry partner. The collaboration is designed to connect academic learning with industry
                expertise, giving MDFL students a closer view of how experienced consulting professionals approach
                real business challenges.
              </p>

              <h3 className="mt-10 text-[21px] font-extrabold tracking-[-0.02em] text-ink">
                What the collaboration aims to do
              </h3>
              <p className="mt-3 text-[15.5px] leading-[1.65] text-ink-soft">
                MDFL and Citrin Cooperman intend to work together toward:
              </p>
              <ul className="mt-4 border-t border-ink/15">
                {goals.map((g, i) => (
                  <li
                    key={g}
                    className={`py-3 flex items-start gap-3 ${i === 0 ? "" : "border-t border-rule-soft"}`}
                  >
                    <span aria-hidden="true" className="mt-[9px] w-1.5 h-1.5 rounded-full bg-um-orange shrink-0" />
                    <span className="text-[15px] leading-[1.55] text-ink-soft">{g}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">
                These are goals for the collaboration. Specific activities will take shape over time.
              </p>

              <h3 className="mt-10 text-[21px] font-extrabold tracking-[-0.02em] text-ink">
                A first step: industry coaches
              </h3>
              <p className="mt-3 text-[15.5px] leading-[1.65] text-ink-soft">
                As an initial part of the collaboration, three experienced professionals are joining MDFL as industry
                coaches. Working alongside MDFL&apos;s faculty and student coaches, they will mentor student teams on
                structuring problems, strengthening analysis, and communicating recommendations to executives.
              </p>
              <Link
                href="/industry-coaches#coaches"
                className={`group mt-5 inline-flex items-center gap-2 px-[18px] py-[11px] bg-um-orange hover:bg-um-orange-dim text-white text-[13px] font-semibold rounded-xl transition-colors ${linkFocus}`}
              >
                Meet Our Industry Coaches{" "}
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <p className="mt-10 text-[15.5px] leading-[1.65] text-ink-soft">
                Together, MDFL and Citrin Cooperman aim to help students build the judgment, communication, and
                analytical skills that professional practice demands.
              </p>
            </article>
          </AnimatedSection>

          {/* Sidebar */}
          <aside className="space-y-6 lg:pt-2">
            <AnimatedSection variant="fade-up" delay={0.1}>
              <div className="bg-card border border-rule rounded-2xl p-6">
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
                  Industry partner
                </p>
                <Image
                  src={citrinPartnership.logo}
                  alt="Citrin Cooperman logo"
                  width={2000}
                  height={385}
                  className="h-10 w-auto"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.15}>
              <div className="bg-card border border-rule rounded-2xl overflow-hidden">
                <CoachAvatar name={contact.name} className="border-b border-rule" />
                <div className="p-6">
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-um-orange-text">
                    Supporting the collaboration
                  </p>
                  <h3 className="mt-2 text-[22px] font-extrabold tracking-[-0.025em] leading-[1.1] text-ink">
                    {contact.name}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-snug text-muted">
                    {contact.title}, {contact.organization}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.6] text-ink-soft">
                    Citrin Cooperman&apos;s participation in the collaboration is supported by {contact.name}, Partner
                    and Practice Leader for Management Consulting.
                  </p>
                  <a
                    href={contact.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View Citrin Cooperman profile for ${contact.name} (opens in a new tab)`}
                    className={`group mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-um-orange-text hover:text-um-orange-dim transition-colors ${linkFocus}`}
                  >
                    View Citrin Profile
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.2}>
              <div className="bg-card border border-rule rounded-2xl p-6">
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                  Industry coaches
                </p>
                <ul className="space-y-2">
                  {industryCoaches.map((c) => (
                    <li key={c.id} className="text-[14px] font-semibold text-ink">
                      {c.name}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/industry-coaches#coaches"
                  className={`group mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-um-orange-text hover:text-um-orange-dim transition-colors ${linkFocus}`}
                >
                  Meet Our Industry Coaches
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </section>
    </>
  );
}
