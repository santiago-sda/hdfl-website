import Link from "next/link";
import type { Project } from "@/lib/data";

interface ProjectNavProps {
  prev?: Project;
  next?: Project;
  position: number;
  total: number;
}

interface NavCardProps {
  project: Project;
  label: string;
  direction: "prev" | "next";
}

function NavCard({ project, label, direction }: NavCardProps) {
  const isNext = direction === "next";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex items-center gap-4 bg-card border border-rule rounded-2xl p-5 md:p-6 transition-colors duration-200 hover:border-ink/30 ${
        isNext ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg border border-rule text-[15px] text-ink-soft transition-transform duration-200 ${
          isNext ? "group-hover:translate-x-0.5" : "group-hover:-translate-x-0.5"
        }`}
      >
        {isNext ? "→" : "←"}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-um-orange-text">
          {label} · №{project.code} · {project.termShort}
        </span>
        <span className="mt-1.5 block text-[16px] md:text-[18px] font-extrabold tracking-[-0.02em] leading-[1.15] text-ink">
          {project.title}
        </span>
      </span>
    </Link>
  );
}

export function ProjectNav({ prev, next, position, total }: ProjectNavProps) {
  return (
    <nav aria-label="More projects" className="px-6 md:px-10 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted">
            Project {position} of {total}
          </p>
          <Link
            href="/projects"
            className="font-mono text-[10.5px] font-semibold tracking-[0.14em] uppercase text-um-orange-text hover:text-um-orange-dim transition-colors"
          >
            All projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prev ? (
            <NavCard project={prev} label="Previous" direction="prev" />
          ) : (
            <div className="hidden md:block" />
          )}
          {next && <NavCard project={next} label="Next" direction="next" />}
        </div>
      </div>
    </nav>
  );
}
