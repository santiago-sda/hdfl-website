import Image from "next/image";
import { TeamMember } from "@/lib/data";

interface CoachCardProps {
  member: TeamMember;
  index: number;
}

export function CoachCard({ member, index }: CoachCardProps) {
  return (
    <article className="bg-card border border-rule rounded-2xl overflow-hidden flex flex-col transition-colors duration-200 hover:border-ink/20">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-rule-soft bg-paper">
        <span className="font-mono text-[10px] font-bold tabular-nums tracking-[0.06em] text-um-orange-text">
          №{String(index + 1).padStart(2, "0")}
        </span>
        {member.domain && (
          <span className="font-mono text-[9.5px] font-semibold tracking-[0.16em] uppercase text-muted truncate">
            {member.domain}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col items-center text-center gap-3">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-rule">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div>
          <p className="text-[14px] font-bold tracking-[-0.01em] leading-snug text-ink">
            {member.name}
          </p>
          <p className="mt-1 text-[11.5px] text-muted leading-snug">
            {member.title}
          </p>
        </div>
      </div>
    </article>
  );
}
