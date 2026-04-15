"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface DotGridProps {
  fadeOnScroll?: boolean;
  className?: string;
}

export function DotGrid({ fadeOnScroll = false, className = "" }: DotGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const grid = (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.10) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    >
      {/* Radial fade vignette so dots fade toward edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, var(--color-background) 100%)",
        }}
      />
    </div>
  );

  if (!fadeOnScroll) return grid;

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 pointer-events-none"
    >
      {grid}
    </motion.div>
  );
}
