"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { stats } from "@/lib/data";

function Counter({
  value,
  prefix = "",
  suffix,
}: {
  value: number;
  prefix?: string;
  suffix: string;
}) {
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function HomeStats() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection variant="fade-up">
          <div className="relative rounded-3xl bg-card border border-rule overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-24 h-px bg-um-orange/70" />
            <div className="absolute top-0 left-0 h-24 w-px bg-um-orange/70" />
            <div className="absolute bottom-0 right-0 w-24 h-px bg-um-green/70" />
            <div className="absolute bottom-0 right-0 h-24 w-px bg-um-green/70" />

            <div className="px-6 md:px-8 pt-6">
              <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted">
                By the numbers
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-9 px-6 md:px-8 ${
                    i > 0 ? "md:border-l border-rule-soft" : ""
                  } ${i >= 2 ? "border-t md:border-t-0 border-rule-soft" : ""} ${
                    i % 2 === 1 ? "border-l md:border-l border-rule-soft" : ""
                  }`}
                >
                  <p className="text-[44px] md:text-[60px] font-extrabold text-ink tracking-[-0.035em] leading-none tabular-nums">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-3 text-[14px] font-semibold text-ink leading-tight">
                    {stat.label}
                  </p>
                  {stat.sub && (
                    <p className="mt-1 font-mono text-[10.5px] font-medium tracking-[0.12em] uppercase text-muted">
                      {stat.sub}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
