import { ReactNode } from "react";

export interface LedgerColumn {
  key: string;
  label: string;
  width: string;
}

interface LedgerProps {
  columns: LedgerColumn[];
  children: ReactNode;
  className?: string;
}

export function Ledger({ columns, children, className = "" }: LedgerProps) {
  const gridCols = columns.map((c) => c.width).join(" ");
  return (
    <div className={`bg-card border border-rule rounded-2xl overflow-hidden ${className}`}>
      <div
        className="grid bg-paper border-b border-rule px-5 py-3.5"
        style={{ gridTemplateColumns: gridCols }}
      >
        {columns.map((c) => (
          <span
            key={c.key}
            className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted"
          >
            {c.label}
          </span>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}

interface LedgerRowProps {
  columns: LedgerColumn[];
  isLast?: boolean;
  hover?: boolean;
  children: ReactNode;
  className?: string;
}

export function LedgerRow({
  columns,
  isLast = false,
  hover = false,
  children,
  className = "",
}: LedgerRowProps) {
  const gridCols = columns.map((c) => c.width).join(" ");
  return (
    <div
      className={`grid px-5 py-4 items-center text-[13.5px] ${
        isLast ? "" : "border-b border-rule-soft"
      } ${hover ? "transition-colors hover:bg-paper/60" : ""} ${className}`}
      style={{ gridTemplateColumns: gridCols }}
    >
      {children}
    </div>
  );
}
