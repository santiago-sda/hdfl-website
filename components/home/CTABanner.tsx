import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper px-6 md:px-10 py-16 md:py-20">
      <div
        aria-hidden
        className="absolute -top-[200px] -right-[150px] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,115,33,0.22) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-end">
        <AnimatedSection variant="fade-up">
          <div className="inline-flex items-baseline gap-2.5 mb-6">
            <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase" style={{ color: "#F4A36A" }}>
              §05
            </span>
            <span className="self-center w-6 h-px" style={{ backgroundColor: "#F4A36A" }} />
            <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase" style={{ color: "#F4A36A" }}>
              Partner with us
            </span>
          </div>

          <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[0.96]">
            Have a real digital<br />
            challenge?{" "}
            <span className="text-um-orange">File №26-10 is yours.</span>
          </h2>

          <p className="mt-6 text-[16px] leading-[1.6] text-paper/75 max-w-[560px]">
            Fall 2026 applications open in June. The Lab director reviews every submission personally and confirms within five business days. No fee. No retainer. No sales call.
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
              Or email the Lab director directly{" "}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
