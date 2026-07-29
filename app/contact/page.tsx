import { PageHeader } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { whatHappensNext } from "@/lib/data";
import type { MetaStripItem } from "@/components/ui/MetaStrip";

const meta: MetaStripItem[] = [
  ["Form", "New challenge"],
  ["File", "№26-10"],
  ["Cycle", "Fall 2026"],
  ["Fields", "9 (~4 min)"],
  ["Cost", "USD 0.00"],
  ["Response", "5 business days"],
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Submit a Challenge · File №26-10"
        title={
          <>
            Tell us what&apos;s <span className="text-um-orange-text italic font-black">actually</span> broken.
          </>
        }
        subtitle="The Lab director reviews every submission personally and replies within five business days. No fee. No sales call."
        meta={meta}
      />

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-8">
          {/* Form card */}
          <AnimatedSection variant="fade-up">
            <div className="bg-card border border-rule rounded-2xl p-6 md:p-7">
              <div className="flex items-center justify-between pb-5 border-b border-rule-soft">
                <h2 className="text-[22px] font-bold tracking-[-0.01em] text-ink">
                  Project Application
                </h2>
                <p className="font-mono text-[10.5px] font-medium tracking-[0.16em] uppercase text-muted">
                  9 fields · est. 4 min
                </p>
              </div>
              <div className="pt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection variant="fade-up" delay={0.1}>
            <div className="space-y-5">
              {/* What happens next */}
              <div className="bg-card border border-rule rounded-2xl p-6">
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
                  What happens next
                </p>
                <ol className="space-y-0">
                  {whatHappensNext.map((step, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 py-2.5 text-[13.5px] text-ink-soft ${
                        i === 0 ? "border-t border-ink/15" : "border-t border-rule-soft"
                      }`}
                    >
                      <span className="font-mono text-[10.5px] font-bold tabular-nums tracking-[0.06em] text-um-orange-text shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Direct line */}
              <div className="bg-um-green text-paper rounded-2xl p-6">
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-paper/65 mb-2">
                  Direct line
                </p>
                <a
                  href="mailto:alex.korogodsky@miami.edu"
                  className="text-[22px] font-bold tracking-[-0.015em] text-paper hover:text-um-orange transition-colors"
                >
                  alex.korogodsky@miami.edu
                </a>
                <p className="mt-3 text-[13px] leading-[1.55] text-paper/70">
                  If your challenge doesn&apos;t fit the form, email the Lab director directly. We&apos;ll find a path.
                </p>
              </div>

              {/* 100% Free */}
              <div className="bg-um-orange-tint border border-um-orange/25 rounded-2xl p-6">
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-um-orange-text mb-2">
                  100% Free
                </p>
                <p className="text-[13px] leading-[1.55] text-ink-soft">
                  All projects are delivered at no cost to qualifying partner organizations through Miami Herbert&apos;s ACE framework.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
