import { ElementType } from "react";

interface WordmarkProps {
  tone?: "ink" | "paper";
  as?: "span" | "div";
  className?: string;
}

export function Wordmark({ tone = "ink", as = "div", className = "" }: WordmarkProps) {
  const Tag = as as ElementType;
  const dflColor = tone === "ink" ? "text-ink" : "text-paper";
  const captionColor = tone === "ink" ? "text-muted" : "text-paper/70";

  return (
    <Tag className={`inline-flex items-baseline gap-2.5 ${className}`}>
      <span className={`text-[18px] font-black tracking-[-0.02em] leading-none ${dflColor}`}>
        DFL
      </span>
      <span className="self-center w-px h-3.5 bg-um-orange" />
      <span
        className={`font-mono text-[10.5px] font-semibold tracking-[0.18em] uppercase ${captionColor}`}
      >
        Herbert · Miami
      </span>
    </Tag>
  );
}
