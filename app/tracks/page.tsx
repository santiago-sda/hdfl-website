import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { capabilityTracks, teamMembers } from "@/lib/data";
import type { MetaStripItem } from "@/components/ui/MetaStrip";

const meta: MetaStripItem[] = [
  ["Section", "Solutions"],
  ["Solutions", "6 capability tracks"],
  ["Levels", "Undergrad + Grad"],
  ["Length", "5–10 weeks"],
  ["Partner fee", "USD 0.00"],
];

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Six capability solutions — HCD & product design, AI engineering, BI & dashboards, finance & valuation, digital marketing and graduate capstone — delivered by Miami Digital-First Lab student teams.",
  alternates: { canonical: "/tracks" },
};


function BulletColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
        {label}
      </p>
      <ul className="border-t border-ink/15">
        {items.map((item, j) => (
          <li
            key={item}
            className={`py-2.5 flex items-start gap-3 ${j === 0 ? "" : "border-t border-rule-soft"}`}
          >
            <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 rounded-full bg-um-orange shrink-0" />
            <span className="text-[13.5px] leading-[1.5] text-ink-soft">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TracksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capability Solutions · Six chapters"
        titleColor="green"
        title={
          <>
            Six digital solutions,<br />
            <span className="text-um-orange-text">one</span> integrated lab.
          </>
        }
        subtitle="Each solution is taught by a dedicated faculty lead and delivered through the ACE framework. Engage one independently — or stack several across a multi-phase partnership."
        meta={meta}
      />

      <section className="px-6 md:px-10 py-12 md:py-16 pb-24">
        <div className="max-w-[1200px] mx-auto space-y-6">
          {capabilityTracks.map((track, i) => {
            const lead = track.leadId ? teamMembers.find((m) => m.id === track.leadId) : undefined;
            return (
            <AnimatedSection key={track.id} variant="fade-up" delay={i * 0.05}>
              <article className="bg-card border border-rule rounded-2xl overflow-hidden transition-colors duration-200 hover:border-ink/20">
                {/* Header strip */}
                <div className="bg-paper border-b border-rule px-6 md:px-7 py-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="flex items-start gap-6">
                    <span className="text-[56px] font-black tracking-[-0.045em] leading-none text-um-orange-text tabular-nums">
                      0{i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted">
                        {track.area} · {track.course} · {track.level} · {track.shipped} shipped
                      </p>
                      <h2 className="mt-2 text-[24px] md:text-[28px] font-extrabold tracking-[-0.025em] leading-[1.12] text-ink max-w-[640px]">
                        {track.fullName}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 self-start md:self-center">
                    {lead && (
                      <div className="flex items-center gap-3">
                        <span className="relative block w-12 h-12 rounded-full overflow-hidden border border-rule bg-paper shrink-0">
                          <Image
                            src={lead.avatar}
                            alt={track.leadName ?? lead.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                            style={lead.avatarPosition ? { objectPosition: lead.avatarPosition } : { objectPosition: "top" }}
                          />
                        </span>
                        <span className="text-[14px] font-bold text-ink leading-tight">
                          {track.leadName}
                        </span>
                      </div>
                    )}
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-[18px] py-[11px] bg-transparent border border-ink text-ink text-[13px] font-medium rounded-xl hover:bg-ink/5 transition-colors whitespace-nowrap"
                    >
                      Inquire about {track.course}{" "}
                      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Body grid */}
                <div
                  className={`p-6 md:p-7 grid grid-cols-1 gap-8 ${
                    track.sampleProjects.length > 0
                      ? "md:grid-cols-[1fr_1.1fr_1.1fr]"
                      : "md:grid-cols-[1fr_1.2fr]"
                  }`}
                >
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                      Overview
                    </p>
                    <p className="text-[14px] leading-[1.55] text-ink-soft">{track.overview}</p>
                  </div>

                  <BulletColumn
                    label={track.descriptionLabel ?? "Description"}
                    items={track.description}
                  />

                  {track.sampleProjects.length > 0 && (
                    <BulletColumn label="Sample projects" items={track.sampleProjects} />
                  )}
                </div>
              </article>
            </AnimatedSection>
            );
          })}
        </div>
      </section>
    </>
  );
}
