import { annualTimelineColumns, annualTimelineMonths, TimelineColumn } from "@/lib/data";

const cohortStyles: Record<
  TimelineColumn["cohort"],
  { solidBg: string; solidText: string; lightBg: string; lightText: string; dot: string; groupText: string }
> = {
  Fall: {
    solidBg: "bg-um-orange",
    solidText: "text-white",
    lightBg: "bg-um-orange-tint",
    lightText: "text-um-orange-text",
    dot: "bg-um-orange",
    groupText: "text-um-orange-text",
  },
  Spring: {
    solidBg: "bg-um-green",
    solidText: "text-white",
    lightBg: "bg-um-green-tint",
    lightText: "text-um-green",
    dot: "bg-um-green",
    groupText: "text-um-green",
  },
  Summer: {
    solidBg: "bg-herbert-pink",
    solidText: "text-white",
    lightBg: "bg-accent-pink-tint",
    lightText: "text-herbert-pink-dim",
    dot: "bg-herbert-pink",
    groupText: "text-herbert-pink",
  },
};

function groupColumns() {
  const groups: { name: string; span: number; cohort: TimelineColumn["cohort"] }[] = [];
  for (const col of annualTimelineColumns) {
    const last = groups[groups.length - 1];
    if (last && last.name === col.group) {
      last.span += 1;
    } else {
      groups.push({ name: col.group, span: 1, cohort: col.cohort });
    }
  }
  return groups;
}

export function AnnualCycleChart() {
  const groups = groupColumns();
  const dataColStart = 2; // column 1 is the month-label gutter

  return (
    <div className="bg-card border border-rule rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <div
          className="min-w-[780px] grid"
          style={{
            gridTemplateColumns: `88px repeat(${annualTimelineColumns.length}, 1fr)`,
            gridTemplateRows: `auto auto repeat(${annualTimelineMonths.length}, minmax(48px, auto))`,
          }}
        >
          {/* Row-divider lines, full width, behind everything else */}
          {annualTimelineMonths.map((m, i) => (
            <div
              key={`line-${m}-${i}`}
              style={{ gridColumn: "1 / -1", gridRow: i + 3 }}
              className="border-t border-rule-soft"
            />
          ))}

          {/* Group header row */}
          <div className="bg-paper border-b border-rule-soft" style={{ gridColumn: 1, gridRow: 1 }} />
          {(() => {
            let cursor = dataColStart;
            return groups.map((g) => {
              const start = cursor;
              cursor += g.span;
              return (
                <div
                  key={`${g.name}-${start}`}
                  style={{ gridColumn: `${start} / span ${g.span}`, gridRow: 1 }}
                  className={`px-4 py-3 border-b border-l border-rule-soft bg-paper font-mono text-[10.5px] font-bold tracking-[0.16em] uppercase ${cohortStyles[g.cohort].groupText}`}
                >
                  {g.name}
                </div>
              );
            });
          })()}

          {/* Sub-header row: Execution / Sourcing */}
          <div className="bg-paper border-b border-rule-soft" style={{ gridColumn: 1, gridRow: 2 }} />
          {annualTimelineColumns.map((col, i) => (
            <div
              key={`${col.id}-sub`}
              style={{ gridColumn: i + dataColStart, gridRow: 2 }}
              className="px-4 py-2.5 border-b border-l border-rule-soft bg-paper font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-muted"
            >
              {col.track}
            </div>
          ))}

          {/* Month labels */}
          {annualTimelineMonths.map((m, i) => (
            <div
              key={`month-${m}-${i}`}
              style={{ gridColumn: 1, gridRow: i + 3 }}
              className="px-3 flex items-center font-mono text-[10.5px] font-semibold tracking-[0.1em] uppercase text-muted"
            >
              {m}
            </div>
          ))}

          {/* Phase blocks */}
          {annualTimelineColumns.map((col, i) => {
            const styles = cohortStyles[col.cohort];
            const isSourcing = col.track === "Sourcing";
            return col.phases.map((phase) => (
              <div
                key={`${col.id}-${phase.monthIndex}`}
                style={{
                  gridColumn: i + dataColStart,
                  gridRow: `${phase.monthIndex + 3} / span ${phase.span}`,
                }}
                className={`m-1 rounded-lg px-3 py-2 flex items-center text-[12.5px] leading-[1.3] font-semibold ${
                  isSourcing ? `${styles.lightBg} ${styles.lightText}` : `${styles.solidBg} ${styles.solidText}`
                }`}
              >
                {phase.label}
              </div>
            ));
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="border-t border-rule-soft px-6 py-4 flex flex-wrap items-center gap-x-6 gap-y-2">
        {(["Fall", "Spring", "Summer"] as const).map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-2 font-mono text-[10.5px] font-semibold tracking-[0.1em] uppercase text-ink-soft"
          >
            <span className={`w-2.5 h-2.5 rounded-full ${cohortStyles[c].dot}`} />
            {c} cohort
          </span>
        ))}
      </div>
      <div className="px-6 pb-5 space-y-1">
        <p className="text-[12px] text-muted leading-relaxed">
          Light block = sourcing · Solid block = execution · color = cohort served
        </p>
        <p className="text-[12px] text-muted leading-relaxed">
          Axis runs August through the following August.
        </p>
      </div>
    </div>
  );
}
