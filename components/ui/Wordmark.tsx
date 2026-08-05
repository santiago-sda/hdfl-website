import Image from "next/image";

interface WordmarkProps {
  tone?: "ink" | "paper";
  className?: string;
  size?: number;
}

export function Wordmark({ tone = "ink", className = "", size = 32 }: WordmarkProps) {
  const captionColor = tone === "ink" ? "text-muted" : "text-paper/70";

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Miami Digital-First Lab · Miami"
    >
      <Image
        src="/mdfl-logo.png"
        alt=""
        width={size}
        height={size}
        priority
        className={`block ${tone === "paper" ? "invert" : ""}`}
        style={{ height: `${size}px`, width: `${size}px` }}
      />
      <span className="w-px h-3.5 bg-um-orange" />
      <span
        className={`font-mono text-[10.5px] font-semibold tracking-[0.18em] uppercase ${captionColor}`}
      >
        MDFL · Miami
      </span>
    </span>
  );
}
