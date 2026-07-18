import { PageHeader } from "@/components/ui/PageHero";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects } from "@/lib/data";
import type { MetaStripItem } from "@/components/ui/MetaStrip";

const meta: MetaStripItem[] = [
  ["Section", "Archive"],
  ["Total", "9 shipped"],
  ["First entry", "Fall 2023"],
  ["Latest entry", `Fall 2025 · №${projects[0].code}`],
  ["Filtered", "Showing all"],
];

const breakdown = [
  { name: "HCD & Product Design", count: 6, color: "#F47321" },
  { name: "AI Engineering", count: 1, color: "#005030" },
  { name: "BI & Dashboards", count: 1, color: "#000000" },
  { name: "Finance & Valuation", count: 0, color: "#003D24" },
  { name: "Graduate Capstone", count: 1, color: "#C45C18" },
];

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
        eyebrow="Archive · Every engagement"
        title={<>The archive.</>}
        subtitle="Nine real partnerships across financial services, digital health, live events, sports analytics, food & beverage, and more. Every entry shipped a working artifact to a real client — not a deck."
        meta={meta}
        sidecar={<Breakdown />}
      />
      <ProjectFilter projects={projects} />
    </>
  );
}
