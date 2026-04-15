"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "./GradientOrb";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Ambient background */}
      <GradientOrb
        color="orange"
        size="lg"
        position="top-[-200px] left-[-200px]"
        animationClass="orb-1"
      />
      <GradientOrb
        color="green"
        size="md"
        position="bottom-[-100px] right-[-100px]"
        animationClass="orb-2"
      />

      {/* Divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange border border-um-orange/30 bg-um-orange/8 px-3 py-1 rounded-full">
              {label}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.08]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 text-xl text-text-muted max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
