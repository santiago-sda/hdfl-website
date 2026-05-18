import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/lib/data";

interface DirectorCardProps {
  member: TeamMember;
  index: number;
  joined?: string;
}

export function DirectorCard({ member, index, joined = "Joined 2021" }: DirectorCardProps) {
  const fileNumber = `FAC-${String(index + 1).padStart(2, "0")}`;

  return (
    <article className="bg-card border border-rule rounded-2xl overflow-hidden transition-colors duration-200 hover:border-ink/20">
      <div className="flex items-center justify-between px-6 py-3 border-b border-rule-soft bg-paper">
        <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted">
          Faculty · 0{index + 1}
        </span>
        <span className="font-mono text-[10.5px] font-bold tabular-nums tracking-[0.06em] text-um-orange-text">
          №{fileNumber}
        </span>
      </div>

      <div className="p-6 md:p-7 grid grid-cols-[128px_1fr] gap-5 md:gap-7 items-start">
        <div className="relative w-32 h-32 rounded-2xl overflow-hidden border border-rule bg-paper">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-[22px] font-extrabold tracking-[-0.02em] leading-[1.15] text-ink">
            {member.name}
          </h3>
          <p className="mt-1.5 text-[13px] text-ink-soft leading-snug">
            {member.title}
          </p>

          {member.bio && (
            <p className="mt-4 text-[13.5px] leading-[1.6] text-ink-soft">
              {member.bio}
            </p>
          )}

          <dl className="mt-5 border-t border-rule-soft pt-3 space-y-1.5">
            {member.domain && (
              <div className="flex items-baseline justify-between gap-3 text-[12px]">
                <dt className="font-mono text-[10px] font-medium tracking-[0.12em] uppercase text-muted">
                  Track lead
                </dt>
                <dd className="font-mono text-[11.5px] font-semibold tracking-[0.02em] text-ink text-right">
                  {member.domain}
                </dd>
              </div>
            )}
            <div className="flex items-baseline justify-between gap-3 text-[12px]">
              <dt className="font-mono text-[10px] font-medium tracking-[0.12em] uppercase text-muted">
                Tenure
              </dt>
              <dd className="font-mono text-[11.5px] font-semibold tracking-[0.02em] text-ink text-right">
                {joined}
              </dd>
            </div>
            {member.profileUrl && (
              <div className="pt-2">
                <Link
                  href={member.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-[0.14em] uppercase text-um-orange-text hover:text-um-orange-dim transition-colors"
                >
                  Profile · people.miami.edu{" "}
                  <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </Link>
              </div>
            )}
          </dl>
        </div>
      </div>
    </article>
  );
}
