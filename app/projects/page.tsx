import { PageHeader } from "@/components/ui/PageHero";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects } from "@/lib/data";
import type { MetaStripItem } from "@/components/ui/MetaStrip";

const shippedCount = projects.filter((p) => p.status === "Shipped").length;

const meta: MetaStripItem[] = [
  ["Section", "Archive"],
  ["Total", `${shippedCount} shipped · ${projects.length} in archive`],
  ["First entry", "Fall 2025"],
  ["Latest entry", `${projects[0].term} · №${projects[0].code}`],
  ["Filtered", "Showing all"],
];

const breakdown = [
  { name: "HCD & Product Design", category: "HCD", color: "#F47321" },
  { name: "AI Engineering", category: "AI Engineering", color: "#005030" },
  { name: "BI & Dashboards", category: "BI & Dashboards", color: "#000000" },
  { name: "Finance & Valuation", category: "Finance & Valuation", color: "#003D24" },
  { name: "Digital Marketing", category: "Digital Marketing", color: "#B81F6E" },
  { name: "Graduate Capstone", category: "Capstone", color: "#E7278A" },
].map((b) => ({
  ...b,
  count: projects.filter((p) => p.category === b.category).length,
}));

function Breakdown() {
  return (
    <div className="bg-card border border-rule rounded-2xl p-5">
      <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
        Breakdown by track
      </p>
      <ul className="space-y-3">
        {breakdown.map((row, i) => (
          <li
            key={row.name}
            className={`flex items-center justify-between gap-3 ${
              i === 0 ? "" : "border-t border-rule-soft pt-2.5"
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: row.color }}
              />
              <span className="text-[13px] text-ink-soft truncate">{row.name}</span>
            </div>
            {row.count === 0 ? (
              <span className="font-mono text-[9.5px] font-bold tracking-[0.12em] uppercase text-um-green bg-um-green/10 rounded px-1.5 py-0.5 whitespace-nowrap">
                New
              </span>
            ) : (
              <span className="font-mono tabular-nums text-[12px] font-bold text-ink">
                {row.count}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Archive · Every project"
        titleColor="green"
        title={<>The archive.</>}
        subtitle="Real partnerships across financial services, digital health, live events, sports analytics, food & beverage, and more. Every project ships a working artifact to a real client, not a deck."
        meta={meta}
        sidecar={<Breakdown />}
      />
      <ProjectFilter projects={projects} />
    </>
  );
}
