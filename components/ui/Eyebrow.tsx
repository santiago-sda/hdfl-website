interface EyebrowProps {
  n?: number | string;
  color?: string;
  children: React.ReactNode;
}

export function Eyebrow({ n, color = "text-um-orange-text", children }: EyebrowProps) {
  const num = n !== undefined ? String(n).padStart(2, "0") : null;

  return (
    <div className="inline-flex items-baseline gap-2.5">
      {num && (
        <>
          <span
            className={`font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase ${color}`}
          >
            §{num}
          </span>
          <span className={`self-center w-6 h-px ${color === "text-um-orange-text" ? "bg-um-orange-dim" : "bg-current"}`} />
        </>
      )}
      <span
        className={`font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase ${color}`}
      >
        {children}
      </span>
    </div>
  );
}
