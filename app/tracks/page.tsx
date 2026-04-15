import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { capabilityTracks } from "@/lib/data";
import Link from "next/link";

const accentStyles = {
  orange: {
    border: "border-um-orange/30",
    symbol: "bg-um-orange/12 text-um-orange",
    label: "text-um-orange",
    bg: "bg-um-orange/8",
    tag: "bg-um-orange/8 border-um-orange/15 text-um-orange",
  },
  blue: {
    border: "border-blue-400/30",
    symbol: "bg-blue-400/12 text-blue-400",
    label: "text-blue-400",
    bg: "bg-blue-400/8",
    tag: "bg-blue-400/8 border-blue-400/15 text-blue-400",
  },
  green: {
    border: "border-emerald-400/30",
    symbol: "bg-emerald-400/12 text-emerald-400",
    label: "text-emerald-400",
    bg: "bg-emerald-400/8",
    tag: "bg-emerald-400/8 border-emerald-400/15 text-emerald-400",
  },
  purple: {
    border: "border-purple-400/30",
    symbol: "bg-purple-400/12 text-purple-400",
    label: "text-purple-400",
    bg: "bg-purple-400/8",
    tag: "bg-purple-400/8 border-purple-400/15 text-purple-400",
  },
};

export default function TracksPage() {
  return (
    <>
      <PageHero
        label="Capability Tracks"
        title="Four Digital Tracks, One Integrated Lab"
        subtitle="Each track is taught by a dedicated faculty lead and delivered through the ACE (Applied Career Experience) framework. Tracks span undergraduate and graduate levels and can be engaged independently or in combination for multi-phase projects."
      />

      <section className="py-16 px-6 pb-32">
        <div className="max-w-5xl mx-auto space-y-8">
          {capabilityTracks.map((track, i) => {
            const styles = accentStyles[track.accent];
            return (
              <AnimatedSection key={track.id} variant="fade-up" delay={i * 0.08}>
                <div className={`rounded-2xl bg-card border ${styles.border} overflow-hidden`}>
                  {/* Header */}
                  <div className="p-8 pb-6 border-b border-border">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 ${styles.symbol}`}>
                          {track.symbol}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className={`text-xs font-bold tracking-widest uppercase ${styles.label}`}>
                              {track.name}
                            </span>
                            <span className="text-xs text-text-muted border border-border rounded-full px-2 py-0.5">
                              {track.course}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold text-text-primary leading-snug">
                            {track.fullName}
                          </h2>
                          <p className={`text-xs font-semibold mt-1 ${styles.label}`}>{track.level}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Description */}
                    <div>
                      <p className="text-sm text-text-muted leading-relaxed mb-6">
                        {track.description}
                      </p>
                      {/* Skills */}
                      <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                        Skills & Tools
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {track.skills.map((s) => (
                          <span
                            key={s}
                            className={`text-xs px-2.5 py-1 rounded-full border font-medium ${styles.tag}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                        Typical Deliverables
                      </p>
                      <ul className="space-y-2.5">
                        {track.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-text-muted">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${styles.symbol.split(" ")[1]}`}
                              style={{ backgroundColor: 'currentColor', opacity: 0.7 }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection variant="fade-up" delay={0.3} className="max-w-5xl mx-auto mt-14">
          <div className="rounded-2xl bg-surface border border-border p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">Not sure which track fits your challenge?</h3>
              <p className="text-sm text-text-muted">Our Lab director will help you find the right match during the scoping conversation.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-6 py-3 bg-um-orange hover:bg-um-orange-dim text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-um-orange/20"
            >
              Submit a Challenge
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
