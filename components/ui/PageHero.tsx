"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MetaStrip, MetaStripItem } from "./MetaStrip";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  titleColor?: "ink" | "green";
  subtitle?: string;
  meta?: MetaStripItem[];
  sidecar?: ReactNode;
}

export function PageHeader({ eyebrow, title, titleColor = "ink", subtitle, meta, sidecar }: PageHeaderProps) {
  return (
    <>
      <div className="pt-[72px]">
        {meta && <MetaStrip items={meta} />}
      </div>
      <section className="relative px-6 md:px-10 py-16 md:py-20">
        <div
          className={`max-w-[1200px] mx-auto grid grid-cols-1 gap-10 lg:gap-14 items-end ${
            sidecar ? "lg:grid-cols-[1.55fr_1fr]" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative inline-flex items-baseline gap-2.5 mb-6 px-1">
              <span
                aria-hidden="true"
                className="absolute -inset-x-2 -inset-y-1.5 z-0 rotate-1"
              >
                <Image
                  src="/brand/brush-accentpink-01.png"
                  alt=""
                  fill
                  className="object-fill select-none pointer-events-none"
                  sizes="200px"
                />
              </span>
              <span className="relative z-10 font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink">
                {eyebrow}
              </span>
            </div>
            <h1
              className={`text-[60px] sm:text-[80px] md:text-[96px] lg:text-[100px] font-black tracking-[-0.045em] leading-[0.9] ${
                titleColor === "green" ? "text-um-green" : "text-ink"
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="mt-7 text-[17px] leading-[1.6] text-ink-soft max-w-[560px]">
                {subtitle}
              </p>
            )}
          </motion.div>

          {sidecar && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {sidecar}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

// Backwards-compatibility alias.
export const PageHero = PageHeader;
