import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientOrb } from "@/components/ui/GradientOrb";

export function CTABanner() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />

      <GradientOrb color="orange" size="lg" position="top-[-200px] right-[-100px]" animationClass="orb-1" />
      <GradientOrb color="green" size="md" position="bottom-[-150px] left-[-50px]" animationClass="orb-3" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection variant="fade-up">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-6">
            Partner With Us
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08] mb-6">
            Have a real digital challenge?
          </h2>
          <p className="text-xl text-text-muted max-w-xl mx-auto leading-relaxed mb-3">
            We partner with organizations to design, prototype, and deploy digital products, AI systems, and data dashboards — at no cost, through Miami Herbert&apos;s ACE program.
          </p>
          <p className="text-sm text-text-muted mb-10">
            There is no cost to apply or to participate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-um-orange hover:bg-um-orange-dim text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-um-orange/20"
            >
              Submit Your Challenge
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border border-black/12 hover:border-black/24 bg-black/5 hover:bg-black/8 text-text-primary font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02]"
            >
              See Our Portfolio
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
