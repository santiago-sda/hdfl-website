import Image from "next/image";
import Link from "next/link";

interface WordmarkProps {
  tone?: "ink" | "paper";
  className?: string;
  size?: number;
  /** Show the University of Miami lockup alongside the MDFL mark (header only). */
  showUniversity?: boolean;
}

// U Miami stacked "U / rule / MIAMI" mark — intrinsic 2765 x 2103
const UM_ASPECT = 2765 / 2103;
const UM_LINK = "https://careers.mbs.miami.edu/channels/experiential-projects/";

export function Wordmark({
  tone = "ink",
  className = "",
  size = 32,
  showUniversity = true,
}: WordmarkProps) {
  const umHeight = size;
  const umWidth = Math.round(umHeight * UM_ASPECT);
  const dividerColor = tone === "paper" ? "bg-paper/30" : "bg-rule";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {showUniversity && (
        <>
          <a
            href={UM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="University of Miami — Experiential Projects"
            className="inline-flex shrink-0 transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src="/um-symbol.png"
              alt="University of Miami"
              width={umWidth}
              height={umHeight}
              priority
              className="block shrink-0 max-w-none"
              style={{ height: `${umHeight}px`, width: `${umWidth}px` }}
            />
          </a>
          <span className={`w-px h-6 shrink-0 ${dividerColor}`} />
        </>
      )}
      <Link
        href="/"
        aria-label="Home — Miami Digital-First Lab"
        className="inline-flex shrink-0 transition-opacity duration-200 hover:opacity-80"
      >
        <Image
          src="/mdfl_um.png"
          alt="Miami Digital-First Lab"
          width={size}
          height={size}
          priority
          className="block shrink-0 max-w-none"
          style={{ height: `${size}px`, width: `${size}px` }}
        />
      </Link>
    </span>
  );
}
