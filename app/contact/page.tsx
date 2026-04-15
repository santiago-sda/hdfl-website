import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/contact/ContactForm";

const whatHappensNext = [
  "Lab director reviews your submission and confirms receipt within 5 business days",
  "Scoping call scheduled to discuss problem framing, data availability, and capability match",
  "Project brief prepared and shared for client review and sign-off",
  "Student team assembled and kick-off workshop scheduled",
  "Semester-long engagement begins",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Partner With Us"
        title="Submit Your Challenge"
        subtitle="Tell us about your organization and the problem you are trying to solve. Our Lab director will reach out within five business days to schedule a scoping conversation. There is no cost to apply or to participate."
      />

      <section className="py-16 px-6 pb-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <AnimatedSection variant="slide-left" className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold text-text-primary mb-1">Project Application</h2>
              <p className="text-sm text-text-muted mb-8">
                All fields marked are required. We typically respond within 5 business days.
              </p>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection variant="slide-right" delay={0.1} className="lg:col-span-2">
            <div className="space-y-5">
              {/* What happens next */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-text-primary mb-5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-um-orange/12 text-um-orange text-xs font-bold flex items-center justify-center">→</span>
                  What Happens Next
                </h3>
                <ol className="space-y-4">
                  {whatHappensNext.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-um-orange/10 text-um-orange text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-um-orange/20">
                        {i + 1}
                      </span>
                      <p className="text-sm text-text-muted leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact info */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-text-primary mb-4">Contact</h3>
                <ul className="space-y-2.5 text-sm text-text-muted">
                  <li>
                    <a href="mailto:dfl@miami.edu" className="text-um-orange hover:underline">
                      dfl@miami.edu
                    </a>
                  </li>
                  <li>Miami Herbert Business School</li>
                  <li>University of Miami</li>
                  <li>Unanue Graduate Career Advancement Center</li>
                  <li>Coral Gables, FL 33146</li>
                </ul>
              </div>

              {/* Free badge */}
              <div className="rounded-2xl bg-um-orange/8 border border-um-orange/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-um-orange animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-um-orange">
                    100% Free
                  </span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  All engagements are delivered at{" "}
                  <span className="text-text-primary font-medium">no cost</span>{" "}
                  to qualifying partner organizations through Miami Herbert&apos;s ACE (Applied Career Experience) framework.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
