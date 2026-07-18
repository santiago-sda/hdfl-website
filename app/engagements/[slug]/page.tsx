import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { MetaStrip, MetaStripItem } from "@/components/ui/MetaStrip";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EngagementPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const meta: MetaStripItem[] = [
    ["Section", "Archive / Engagement"],
    ["File", `№${project.code}`],
    ["Term", project.term],
    ["Duration", project.duration],
    ["Status", `● ${project.status}`],
  ];

  const facts: [string, string][] = [
    ["Client", project.client],
    ["Industry", project.industry],
    ["Track", project.category],
    ["Course", project.course],
    ["Team", project.team],
    ["Term", `${project.term} · ${project.duration}`],
    ["Status", `● ${project.status} to client`],
  ];

  return (
    <>
      <div className="pt-[72px]">
        <MetaStrip items={meta} />
      </div>

      {/* Title block */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-end">
          <div>
            <div className="inline-flex items-baseline gap-2.5 mb-6">
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-um-orange-text">
                Engagement №{project.code}
              </span>
              <span className="self-center w-6 h-px bg-um-orange-dim" />
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-um-orange-text">
                {project.category}
              </span>
            </div>
            <h1 className="text-[44px] sm:text-[60px] md:text-[72px] lg:text-[76px] font-black tracking-[-0.04em] leading-[0.95] text-ink">
              {project.title}
            </h1>
            <p className="mt-7 text-[16px] leading-[1.6] text-ink-soft max-w-[640px]">
              {project.description}
            </p>
            <Link
              href="/projects"
              className="group mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-ink transition-colors"
            >
              <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">
                ←
              </span>{" "}
              Back to archive
            </Link>
          </div>

          <aside className="bg-card border border-rule rounded-2xl p-5">
            <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
              Engagement facts
            </p>
            <dl className="space-y-0">
              {facts.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex items-baseline justify-between gap-3 py-2.5 ${
                    i === 0 ? "" : "border-t border-rule-soft"
                  }`}
                >
                  <dt className="font-mono text-[10.5px] font-medium tracking-[0.12em] uppercase text-muted shrink-0">
                    {k}
                  </dt>
                  <dd className="font-mono text-[11.5px] font-semibold tracking-[0.02em] text-ink text-right">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative aspect-[32/12] rounded-2xl overflow-hidden border border-rule bg-paper">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Brief / Approach / Outcome */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: "Brief", body: project.brief, dot: "#F47321" },
            { label: "Approach", body: project.approach, dot: "#000000" },
            { label: "Outcome", body: project.outcome, dot: "#005030" },
          ].map((b) => (
            <div key={b.label} className="bg-card border border-rule rounded-2xl p-7 transition-colors duration-200 hover:border-ink/20">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: b.dot }}
                />
                <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted">
                  {b.label}
                </span>
              </div>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-ink-soft">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome metrics */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-um-green text-paper rounded-2xl px-6 md:px-10 py-8 md:py-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.metrics.map((m, i) => (
              <div
                key={m.label}
                className={i > 0 ? "md:border-l md:border-paper/20 md:pl-6 border-t border-paper/20 pt-6 md:pt-0 md:border-t-0" : ""}
              >
                <div className="text-[36px] md:text-[48px] font-extrabold tracking-[-0.03em] leading-none tabular-nums">
                  {m.value}
                </div>
                <div className="mt-2.5 text-[13.5px] text-paper/75">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
