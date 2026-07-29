"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { projects } from "@/lib/data";
import { Ledger, LedgerColumn, LedgerRow } from "@/components/ui/Ledger";

const columns: LedgerColumn[] = [
  { key: "num", label: "№", width: "90px" },
  { key: "term", label: "TERM", width: "60px" },
  { key: "track", label: "TRACK", width: "100px" },
  { key: "industry", label: "INDUSTRY", width: "1.4fr" },
  { key: "title", label: "TITLE", width: "2.2fr" },
  { key: "delivered", label: "DELIVERED", width: "1.6fr" },
];

export function ArchivePreview() {
  const rows = projects.slice(0, 5);

  return (
    <section className="relative px-6 md:px-10 py-16 md:py-20 bg-paper-alt border-y border-rule">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection variant="fade-up" className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow n="03">The archive</Eyebrow>
            <h2 className="mt-4 text-[44px] md:text-[56px] lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[0.96] text-ink">
              Every project<br />we&apos;ve shipped.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.6] text-ink-soft max-w-[480px]">
              Nine real partnerships across financial services, digital health, live events, sports performance, food &amp; beverage, and more.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-[18px] py-[11px] bg-transparent border border-ink text-ink text-[13px] font-medium rounded-xl hover:bg-ink/5 transition-colors self-start md:self-end"
          >
            View all 9{" "}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={0.1}>
          <Ledger columns={columns}>
            {rows.map((row, i) => (
              <Link key={row.id} href={`/projects/${row.slug}`} className="block">
                <LedgerRow columns={columns} isLast={i === rows.length - 1} hover>
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
                  <span className="text-muted text-[13px] truncate">{row.delivered}</span>
                </LedgerRow>
              </Link>
            ))}
          </Ledger>
        </AnimatedSection>
      </div>
    </section>
  );
}
