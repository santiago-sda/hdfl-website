import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/lib/data";

interface DirectorCardProps {
  member: TeamMember;
  joined?: string;
}

export function DirectorCard({ member, joined }: DirectorCardProps) {
  const headerLabel = member.leadTitle ?? "Faculty";
  const tenure = member.joined ?? joined ?? "Joined 2021";

  return (
    <article className="h-full bg-card border border-rule rounded-2xl overflow-hidden transition-colors duration-200 hover:border-ink/20">
      <div className="flex items-center justify-between px-6 py-3 border-b border-rule-soft bg-paper">
        <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted">
          {headerLabel}
        </span>
      </div>

      <div className="p-6 md:p-7 grid grid-cols-[128px_1fr] gap-5 md:gap-7 items-start">
        <div className="relative w-32 h-32 rounded-2xl overflow-hidden border border-rule bg-paper">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover"
            style={{ objectPosition: member.avatarPosition ?? "top" }}
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
                {tenure}
              </dd>
            </div>
            {(member.profileUrl || member.linkedinUrl) && (
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
                {member.profileUrl && (
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
                )}
                {member.linkedinUrl && (
                  <Link
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="group inline-flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-[0.14em] normal-case text-um-orange-text hover:text-um-orange-dim transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn{" "}
                    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </Link>
                )}
              </div>
            )}
          </dl>
        </div>
      </div>
    </article>
  );
}
