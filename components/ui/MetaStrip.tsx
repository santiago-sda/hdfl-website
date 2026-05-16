export type MetaStripItem = [string, string];

interface MetaStripProps {
  items: MetaStripItem[];
  className?: string;
}

export function MetaStrip({ items, className = "" }: MetaStripProps) {
  return (
    <div
      className={`hidden sm:grid border-y border-rule bg-paper ${className}`}
      style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
    >
      {items.map(([k, v], i) => (
        <div
          key={`${k}-${i}`}
          className="px-6 py-3 border-r border-rule-soft last:border-r-0"
        >
          <div className="font-mono text-[9.5px] font-medium tracking-[0.18em] uppercase text-muted">
            {k}
          </div>
          <div className="mt-0.5 font-mono text-[12px] font-semibold tracking-[0.04em] text-ink truncate">
            {v}
          </div>
        </div>
      ))}
    </div>
  );
}
