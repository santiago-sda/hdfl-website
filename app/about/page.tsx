import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { engagementPhases, annualTimeline, partnerTypes } from "@/lib/data";

const differentiators = [
  {
    number: "01",
    title: "Dedicated Needs Assessment Phase",
    description:
      "Before any student team is assigned, we conduct a structured intake conversation, scope the business problem using the Miami Method, audit your data availability, and match you to the right capability track. No other university consulting program does this.",
  },
  {
    number: "02",
    title: "Post-Capstone Delivery Phase",
    description:
      "After the semester ends, we provide implementation-ready documentation, a handoff session with your technical team, and impact measurement. Peer programs end at the final presentation. We continue.",
  },
  {
    number: "03",
    title: "Four Tracks Across the Full Digital Stack",
    description:
      "From human-centered product design through production-grade AI engineering — available at both undergraduate and graduate levels. Tracks can be engaged independently or in combination for multi-phase projects.",
  },
];

const phaseAccents = [
  { border: "border-um-orange/40", label: "text-um-orange", bg: "bg-um-orange/8" },
  { border: "border-blue-400/40", label: "text-blue-400", bg: "bg-blue-400/8" },
  { border: "border-emerald-400/40", label: "text-emerald-400", bg: "bg-emerald-400/8" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="A Different Kind of University Consulting"
        subtitle="The Herbert Digital-First Lab is the only university consulting program that is simultaneously free to clients, digital-native by design, and structured around full-lifecycle delivery."
      />

      {/* What It Is */}
      <section className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <AnimatedSection variant="slide-left">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-5">
              What It Is
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight leading-snug mb-5">
              A structured experiential learning unit inside Miami Herbert.
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              The Herbert Digital-First Lab connects external organizations with student consulting teams trained in AI engineering, data product design, decision-support analytics, and digital strategy. All services are delivered free of charge to qualifying partner organizations as part of the Applied Career Experience (ACE) framework.
            </p>
            <p className="text-text-muted leading-relaxed">
              We work best as a long-term partner, not a one-time vendor. Projects must have a clearly defined problem, access to relevant data or systems, and a designated client contact who can participate in bi-weekly check-ins and validate deliverables.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="slide-right" delay={0.1}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#4ade80' }}>
              The Core Insight
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight leading-snug mb-5">
              Digital transformation is an identity, not a service category.
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              We studied how Michigan Ross, Rutgers, and Johns Hopkins all offer project-based consulting with student teams. None of them lead with digital and AI engineering as their core proposition.
            </p>
            <p className="text-text-muted leading-relaxed">
              The Herbert Digital-First Lab does. Every engagement delivers a real artifact — a working prototype, a deployed AI system, or a live dashboard. No PowerPoint consulting.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />

      {/* Three Structural Differentiators */}
      <section className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fade-up" className="mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-4">
              What Makes Us Different
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Three structural advantages.
            </h2>
          </AnimatedSection>

          <div className="space-y-px">
            {differentiators.map((d, i) => (
              <AnimatedSection key={d.number} variant="fade-up" delay={i * 0.1}>
                <div className="group flex gap-8 py-10 border-b border-border hover:bg-surface/50 px-2 rounded-lg transition-colors duration-200 cursor-default">
                  <span className="text-5xl font-black text-black/8 group-hover:text-um-orange/30 transition-colors duration-300 leading-none shrink-0 mt-1 select-none">
                    {d.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">{d.title}</h3>
                    <p className="text-text-muted leading-relaxed max-w-2xl">{d.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Three-Phase Model */}
      <section className="relative py-28 px-6 bg-surface overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />
        <GradientOrb color="orange" size="md" position="top-[-150px] right-[-100px]" animationClass="orb-1" />

        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fade-up" className="mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-4">
              Operational Model
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Three phases, one seamless engagement.
            </h2>
            <p className="mt-4 text-lg text-text-muted max-w-2xl">
              Every project moves through a structured pipeline — from needs discovery through learning to post-capstone delivery.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engagementPhases.map((phase, i) => {
              const accent = phaseAccents[i];
              return (
                <AnimatedSection key={phase.number} variant="scale-in" delay={i * 0.1}>
                  <div className={`h-full p-7 rounded-2xl bg-card border ${accent.border} flex flex-col`}>
                    <div className="mb-5">
                      <span className={`text-xs font-bold tracking-widest uppercase ${accent.label} ${accent.bg} px-2.5 py-1 rounded-full`}>
                        Phase {phase.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4 leading-snug">
                      {phase.title}
                    </h3>
                    <ul className="space-y-2.5 flex-1">
                      {phase.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${accent.label} opacity-70`} style={{ backgroundColor: 'currentColor' }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className={`mt-5 pt-4 border-t border-border text-xs font-medium ${accent.label}`}>
                      {phase.duration}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Annual Timeline */}
          <AnimatedSection variant="fade-up" delay={0.2} className="mt-14">
            <h3 className="text-xl font-semibold text-text-primary mb-6">Annual cycle</h3>
            <div className="rounded-2xl border border-border overflow-hidden">
              {annualTimeline.map((row, i) => (
                <div
                  key={row.period}
                  className={`flex items-start gap-6 px-6 py-4 border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-surface"}`}
                >
                  <span className="text-xs font-bold tracking-wide uppercase text-um-orange whitespace-nowrap w-20 shrink-0 mt-0.5">
                    {row.period}
                  </span>
                  <span className="text-sm text-text-muted leading-relaxed">{row.event}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fade-up" className="mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-4">
              Who We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Built for organizations with real digital challenges.
            </h2>
            <p className="mt-4 text-lg text-text-muted max-w-2xl">
              We prioritize projects with meaningful scope, available data, and leadership commitment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partnerTypes.map((pt, i) => (
              <AnimatedSection key={pt.id} variant="scale-in" delay={i * 0.07}>
                <div className="group p-7 rounded-2xl bg-card border border-border hover:border-black/12 transition-all duration-300 hover:bg-surface h-full">
                  <h3 className="text-base font-semibold text-text-primary mb-2">{pt.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{pt.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Statement Callout */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="scale-in">
            <blockquote className="relative p-10 rounded-2xl bg-um-green/8 border border-um-green/20">
              <div className="absolute top-6 left-8 text-5xl text-um-green/30 font-serif leading-none select-none" style={{ color: 'rgba(0,80,48,0.3)' }}>&ldquo;</div>
              <p className="text-lg md:text-xl text-text-primary leading-relaxed italic font-medium pl-4">
                The Herbert Digital-First Lab partners with organizations that have real digital challenges — and pairs them with student teams equipped to design, prototype, and deploy digital products, AI systems, and data dashboards. We are the only university consulting program that is simultaneously free to clients, digital-native by design, and structured around full-lifecycle delivery.
              </p>
              <footer className="mt-5 pl-4 text-sm text-text-muted">
                — Herbert Digital-First Lab Positioning Statement
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
