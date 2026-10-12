"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Project, sectors } from "@/lib/data";
import { Ledger, LedgerColumn, LedgerRow } from "@/components/ui/Ledger";

const ALL = "all";

// Experience = the capability track a project was delivered under.
const experiences = [
  { value: "HCD", label: "HCD & Product Design" },
  { value: "AI Engineering", label: "AI Engineering" },
  { value: "BI & Dashboards", label: "BI & Dashboards" },
  { value: "Finance & Valuation", label: "Finance & Valuation" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "Capstone", label: "Graduate Capstone" },
];

const seasonOrder: Record<string, number> = { Spring: 1, Summer: 2, Fall: 3 };

// "Fall 2026" -> sortable number, so cohorts list newest first.
function termRank(term: string) {
  const [season, year] = term.split(" ");
  return Number(year) * 10 + (seasonOrder[season] ?? 0);
}

interface Filters {
  experience: string;
  cohort: string;
  industry: string;
}

const noFilters: Filters = { experience: ALL, cohort: ALL, industry: ALL };

const matches = (p: Project, f: Filters) =>
  (f.experience === ALL || p.category === f.experience) &&
  (f.cohort === ALL || p.term === f.cohort) &&
  (f.industry === ALL || p.sector === f.industry);

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

interface SelectOption {
  value: string;
  label: string;
  count: number;
}

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  const isActive = value !== ALL;

  return (
    <label className="flex flex-col gap-1.5 min-w-0">
      <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted">
        {label}
      </span>
      <span className="relative block">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none bg-card rounded-lg border pl-3.5 pr-9 py-2.5 font-mono text-[12px] font-medium tracking-[0.02em] text-ink cursor-pointer transition-colors focus:outline-none focus:border-ink hover:border-ink/40 ${
            isActive ? "border-ink" : "border-rule"
          }`}
        >
          {options.map((o) => (
            <option
              key={o.value}
              value={o.value}
              disabled={o.count === 0 && o.value !== value}
            >
              {o.label} · {o.count}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </span>
    </label>
  );
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [filters, setFilters] = useState<Filters>(noFilters);

  const set = (key: keyof Filters) => (value: string) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const filtered = projects.filter((p) => matches(p, filters));
  const hasActiveFilters = Object.values(filters).some((v) => v !== ALL);

  // How many projects each option would show, given the OTHER two filters.
  // Keeps the counts honest and avoids picking a combination with no results.
  const countFor = (key: keyof Filters, value: string) =>
    projects.filter((p) => matches(p, { ...filters, [key]: value })).length;

  const buildOptions = (
    key: keyof Filters,
    allLabel: string,
    items: { value: string; label: string }[]
  ): SelectOption[] => [
    { value: ALL, label: allLabel, count: countFor(key, ALL) },
    ...items.map((i) => ({ ...i, count: countFor(key, i.value) })),
  ];

  const cohorts = Array.from(new Set(projects.map((p) => p.term)))
    .sort((a, b) => termRank(b) - termRank(a))
    .map((term) => ({ value: term, label: term }));

  const experienceOptions = buildOptions("experience", "All experiences", experiences);
  const cohortOptions = buildOptions("cohort", "All cohorts", cohorts);
  const industryOptions = buildOptions(
    "industry",
    "All industries",
    sectors.map((s) => ({ value: s, label: s }))
  );

  return (
    <section className="px-6 md:px-10 pb-24">
      <div className="max-w-[1200px] mx-auto">
        {/* Filters */}
        <div className="mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <FilterSelect
              label="Experience"
              value={filters.experience}
              onChange={set("experience")}
              options={experienceOptions}
            />
            <FilterSelect
              label="Cohort"
              value={filters.cohort}
              onChange={set("cohort")}
              options={cohortOptions}
            />
            <FilterSelect
              label="Industry"
              value={filters.industry}
              onChange={set("industry")}
              options={industryOptions}
            />
          </div>

          <div className="mt-3 flex items-center justify-between gap-4">
            <p
              aria-live="polite"
              className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted"
            >
              Showing {filtered.length} of {projects.length} projects · Newest first
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={() => setFilters(noFilters)}
                className="font-mono text-[10.5px] font-semibold tracking-[0.14em] uppercase text-um-orange-text hover:text-um-orange-dim transition-colors"
              >
                Clear filters ×
              </button>
            )}
          </div>
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
                <Link href={`/projects/${row.slug}`} className="group block">
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
            <div className="px-6 py-12 flex flex-col items-center gap-3 text-center">
              <p className="text-sm text-muted">No projects match these filters.</p>
              <button
                type="button"
                onClick={() => setFilters(noFilters)}
                className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-um-orange-text hover:text-um-orange-dim transition-colors"
              >
                Clear filters ×
              </button>
            </div>
          )}
        </Ledger>
      </div>
    </section>
  );
}
