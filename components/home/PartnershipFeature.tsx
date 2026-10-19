import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { citrinPartnership } from "@/lib/data";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-um-orange rounded";

export function PartnershipFeature() {
  return (
    <section aria-labelledby="partnership-heading" className="px-6 md:px-10 pb-16 md:pb-20">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection variant="fade-up">
          <div className="bg-card border border-rule rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 items-center">
            <div>
              <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-um-orange-text">
                Announcement · First industry partner
              </p>
              <h2
                id="partnership-heading"
                className="mt-3 text-[30px] md:text-[38px] font-extrabold tracking-[-0.03em] leading-[1.05] text-ink"
              >
                {citrinPartnership.title}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft max-w-[560px]">{citrinPartnership.summary}</p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link
                  href={`/news/${citrinPartnership.slug}`}
                  className={`group inline-flex items-center gap-2 px-[18px] py-[11px] bg-um-orange hover:bg-um-orange-dim text-white text-[13px] font-semibold rounded-xl transition-colors ${focus}`}
                >
                  Read the Announcement{" "}
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <Link
                  href="/industry-coaches"
                  className={`group inline-flex items-center gap-2 px-2 py-2 text-[13px] font-medium text-ink hover:text-um-orange-text transition-colors ${focus}`}
                >
                  Meet Our Industry Coaches{" "}
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-start lg:justify-center bg-paper-alt border border-rule-soft rounded-xl px-8 py-10">
              <Image
                src={citrinPartnership.logo}
                alt="Citrin Cooperman logo"
                width={2000}
                height={385}
                className="w-full max-w-[360px] h-auto"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
