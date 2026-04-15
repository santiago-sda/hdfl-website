"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { DotGrid } from "@/components/ui/DotGrid";
import { GradientOrb } from "@/components/ui/GradientOrb";

const headline = ["Where Digital Intelligence", "Meets Real", "Business Challenge."];
const subtext =
  "A digital-first student consulting lab connecting organizations with Miami Herbert students trained in AI engineering, data analytics, product design, and digital strategy — delivering production-ready solutions at no cost.";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <DotGrid fadeOnScroll className="dot-grid-animate" />

      <GradientOrb color="orange" size="xl" position="top-[-300px] left-[-300px]" animationClass="orb-1" />
      <GradientOrb color="green" size="lg" position="bottom-[-200px] right-[-200px]" animationClass="orb-2" />
      <GradientOrb color="mixed" size="md" position="top-[30%] right-[10%]" animationClass="orb-3" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-um-orange border border-um-orange/25 bg-um-orange/8 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-um-orange animate-pulse" />
            Miami Herbert Business School · University of Miami
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-7">
          {headline.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] text-text-primary"
              >
                {i === 1 ? <span className="text-um-orange">{line}</span> : line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.58, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group px-7 py-3.5 bg-um-orange hover:bg-um-orange-dim text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-um-orange/20"
          >
            Submit a Challenge
            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/projects"
            className="px-7 py-3.5 border border-black/12 hover:border-black/25 bg-black/5 hover:bg-black/8 text-text-primary font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Our Work
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-black/20 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
