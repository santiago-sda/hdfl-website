interface GradientOrbProps {
  color?: "orange" | "green" | "mixed";
  size?: "sm" | "md" | "lg" | "xl";
  position?: string;
  className?: string;
  animationClass?: string;
}

const colorMap = {
  orange: "rgba(244, 115, 33, 0.18)",
  green: "rgba(0, 80, 48, 0.12)",
  mixed: "rgba(244, 115, 33, 0.10)",
};

const sizeMap = {
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[600px] h-[600px]",
  xl: "w-[900px] h-[900px]",
};

export function GradientOrb({
  color = "orange",
  size = "lg",
  position = "",
  className = "",
  animationClass = "orb-1",
}: GradientOrbProps) {
  return (
    <div
      className={`absolute pointer-events-none rounded-full blur-3xl ${sizeMap[size]} ${position} ${animationClass} ${className}`}
      style={{
        background: `radial-gradient(circle, ${colorMap[color]}, transparent 70%)`,
      }}
    />
  );
}
