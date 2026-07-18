"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/lib/data";
import { Ledger, LedgerColumn, LedgerRow } from "@/components/ui/Ledger";

interface FilterOption {
  key: string;
  label: string;
  count: number;
  match: (p: Project) => boolean;
  emptyNote?: string;
}

interface ProjectFilterProps {
  projects: Project[];
}

const columns: LedgerColumn[] = [
  { key: "num", label: "№", width: "80px" },
  { key: "term", label: "TERM", width: "60px" },
  { key: "track", label: "TRACK", width: "100px" },
  { key: "industry", label: "INDUSTRY", width: "1.4fr" },
  { key: "title", label: "TITLE", width: "2.2fr" },
  { key: "delivered", label: "DELIVERED", width: "1.6fr" },
  { key: "read", label: "", width: "70px" },
];

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [active, setActive] = useState<string>("all");

  const filters: FilterOption[] = [
    { key: "all", label: "All", count: projects.length, match: () => true },
    {
      key: "hcd",
      label: "HCD",
      count: projects.filter((p) => p.category === "HCD").length,
      match: (p) => p.category === "HCD",
    },
    {
      key: "ai",
      label: "AI Eng",
      count: projects.filter((p) => p.category === "AI Engineering").length,
      match: (p) => p.category === "AI Engineering",
    },
    {
      key: "bi",
      label: "BI",
      count: projects.filter((p) => p.category === "BI & Dashboards").length,
      match: (p) => p.category === "BI & Dashboards",
    },
    {
      key: "finance",
      label: "Finance",
      count: projects.filter((p) => p.category === "Finance & Valuation").length,
      match: (p) => p.category === "Finance & Valuation",
      emptyNote:
        "The first Finance & Valuation engagements ship Fall 2026. Check back soon.",
    },
    {
      key: "capstone",
      label: "Capstone",
      count: projects.filter((p) => p.category === "Capstone").length,
      match: (p) => p.category === "Capstone",
    },
    {
      key: "f25",
      label: "Fall 2025",
      count: projects.filter((p) => p.termShort === "F25").length,
      match: (p) => p.termShort === "F25",
    },
    {
      key: "s26",
      label: "Spring 2026",
      count: projects.filter((p) => p.termShort === "S26").length,
      match: (p) => p.termShort === "S26",
    },
  ];

  const activeFilter = filters.find((f) => f.key === active) ?? filters[0];
  const filtered = projects.filter(activeFilter.match);

  return (
    <section className="px-6 md:px-10 pb-24">
      <div className="max-w-[1200px] mx-auto">
        {/* Filter row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mr-1">
              Filter
            </span>
            {filters.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActive(f.key)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-[0.08em] uppercase rounded-lg px-3 py-2 transition-all duration-200 active:scale-[0.97] ${
                    isActive
                      ? "bg-ink text-paper border border-ink"
                      : "bg-card text-muted border border-rule hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  <span>{f.label}</span>
                  <span className="tabular-nums opacity-70">· {f.count}</span>
                </button>
              );
            })}
          </div>
          <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted">
            Sort ↓ Newest first
          </span>
        </div>

        <Ledger columns={columns}>
          <AnimatePresence initial={false}>
            {filtered.map((row, i) => (
              <motion.div
                key={row.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Link href={`/engagements/${row.slug}`} className="group block">
                  <LedgerRow columns={columns} isLast={i === filtered.length - 1} hover>
                    <span className="font-mono text-[12px] font-bold tabular-nums text-um-orange-text">
                      №{row.code}
                    </span>
                    <span className="font-mono text-[10.5px] font-medium tracking-[0.16em] uppercase text-muted">
                      {row.termShort}
                    </span>
                    <span className="font-mono text-[10.5px] font-bold tracking-[0.06em] uppercase text-ink">
                      {row.category}
                    </span>
                    <span className="text-ink-soft truncate pr-3">{row.industry}</span>
                    <span className="text-ink font-semibold truncate pr-3">{row.title}</span>
                    <span className="text-muted text-[13px] truncate pr-3">{row.delivered}</span>
                    <span className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-um-orange-text text-right">
                      Read{" "}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </LedgerRow>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="px-6 py-12 flex flex-col items-center gap-2 text-center">
              {activeFilter.emptyNote ? (
                <>
                  <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-um-green bg-um-green/10 rounded px-2 py-1">
                    New this cohort
                  </span>
                  <p className="mt-1 text-sm text-muted max-w-[420px] leading-relaxed">
                    {activeFilter.emptyNote}
                  </p>
                </>
              ) : (
                <p className="text-sm text-muted">No engagements match this filter yet.</p>
              )}
            </div>
          )}
        </Ledger>
      </div>
    </section>
  );
}
