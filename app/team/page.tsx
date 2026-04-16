import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { teamMembers } from "@/lib/data";

const directors = teamMembers.filter((m) => m.role === "director");
const coaches = teamMembers.filter((m) => m.role === "coach");

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="Our Team"
        title="Directors & Coaches"
        subtitle="The Herbert Digital-First Lab is led by faculty directors and supported by a network of industry coaches who guide student teams through every engagement."
      />

      {/* Directors */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fade-up" className="mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-3">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Faculty Leaders
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {directors.map((director, i) => (
              <AnimatedSection key={director.id} variant="fade-up" delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 h-full">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-um-orange/20">
                      <Image
                        src={director.avatar}
                        alt={director.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary text-lg leading-snug">
                        {director.name}
                      </h3>
                      <p className="text-xs text-um-orange font-medium mt-0.5">
                        {director.title}
                      </p>
                    </div>
                  </div>
                  {director.bio && (
                    <p className="text-sm text-text-muted leading-relaxed">
                      {director.bio}
                    </p>
                  )}
                  {director.profileUrl && (
                    <Link
                      href={director.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-um-orange hover:text-um-orange-dim transition-colors mt-auto"
                    >
                      View University Profile
                      <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />

      {/* Coaches */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fade-up" className="mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-3">
              Industry Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Coaches & Mentors
            </h2>
            <p className="mt-3 text-text-muted max-w-xl">
              Each coach brings deep industry expertise and is matched to projects based on solution area, domain, and skill fit.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {coaches.map((coach, i) => (
              <AnimatedSection key={coach.id} variant="scale-in" delay={i * 0.05}>
                <div className="group bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-black/12 transition-all duration-200 hover:bg-surface">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-um-orange/20 transition-all duration-200">
                    <Image
                      src={coach.avatar}
                      alt={coach.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm leading-snug">
                      {coach.name}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                      {coach.title}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="scale-in">
            <div className="rounded-2xl bg-um-orange/8 border border-um-orange/20 p-10 text-center">
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                Ready to partner with us?
              </h3>
              <p className="text-text-muted mb-6 max-w-lg mx-auto">
                Submit your challenge and our Lab director will reach out within five business days to schedule a scoping conversation.
              </p>
              <Link
                href="/contact"
                className="inline-block px-7 py-3.5 bg-um-orange hover:bg-um-orange-dim text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-um-orange/20"
              >
                Submit a Challenge
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
