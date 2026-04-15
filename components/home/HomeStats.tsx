"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function HomeStats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-card border border-border p-12">
          {/* Accent corner lines */}
          <div className="absolute top-0 left-0 w-32 h-px bg-um-orange/60" />
          <div className="absolute top-0 left-0 h-32 w-px bg-um-orange/60" />
          <div className="absolute bottom-0 right-0 w-32 h-px bg-um-green/60" />
          <div className="absolute bottom-0 right-0 h-32 w-px bg-um-green/60" />

          <AnimatedSection variant="fade-up" className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-text-muted">
              By the Numbers
            </span>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} variant="scale-in" delay={i * 0.08}>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-text-muted font-medium">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
