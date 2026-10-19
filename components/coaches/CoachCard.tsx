import type { IndustryCoach } from "@/lib/data";
import { CoachAvatar } from "./CoachAvatar";

export function CoachCard({ coach }: { coach: IndustryCoach }) {
  const affiliation = [coach.title, coach.organization].filter(Boolean).join(", ");

  return (
    <article className="flex flex-col bg-card border border-rule rounded-2xl overflow-hidden transition-colors duration-200 hover:border-ink/20">
      <CoachAvatar name={coach.name} image={coach.image} className="border-b border-rule" />

      <div className="flex flex-col flex-1 p-6">
        <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-um-orange-text">
          Industry Coach
        </p>
        <h3 className="mt-2 text-[24px] font-extrabold tracking-[-0.025em] leading-[1.1] text-ink">
          {coach.name}
        </h3>
        {affiliation && (
          <p className="mt-1.5 text-[13.5px] leading-snug text-muted">{affiliation}</p>
        )}

        <p className="mt-4 text-[14px] leading-[1.6] text-ink-soft">{coach.bio}</p>

        <div className="mt-5">
          <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-2.5">
            Areas of expertise
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {coach.expertise.map((e) => (
              <li
                key={e}
                className="font-mono text-[11px] font-medium tracking-[0.03em] text-ink-soft bg-paper-alt border border-rule rounded-md px-2.5 py-1"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>

        {coach.profileUrl && (
          <div className="mt-auto pt-6">
            <a
              href={coach.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Citrin Cooperman profile for ${coach.name} (opens in a new tab)`}
              className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-um-orange-text hover:text-um-orange-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-um-orange rounded transition-colors"
            >
              View Citrin Profile
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
