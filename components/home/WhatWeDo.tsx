"use client";

import Link from "next/link";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { capabilityTracks } from "@/lib/data";

const accentStyles = {
  orange: { symbolColor: "text-um-orange",      glow: "shadow-[inset_0_0_40px_rgba(244,115,33,0.04)]" },
  blue:   { symbolColor: "text-blue-400",       glow: "shadow-[inset_0_0_40px_rgba(59,130,246,0.05)]" },
  green:  { symbolColor: "text-emerald-400",    glow: "shadow-[inset_0_0_40px_rgba(16,185,129,0.05)]" },
  purple: { symbolColor: "text-purple-400",     glow: "shadow-[inset_0_0_40px_rgba(168,85,247,0.05)]" },
};

export function WhatWeDo() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-4">
            What We Deliver
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Four Capability Solutions
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Each solution is taught by a dedicated faculty lead and delivered through the ACE framework — available independently or in combination for multi-phase projects.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilityTracks.map((track) => {
            const styles = accentStyles[track.accent];
            return (
              <motion.div
                key={track.id}
                variants={staggerItem}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-black/12 transition-all duration-300 hover:bg-surface"
              >
                {/* Symbol + level */}
                <div className="flex items-start justify-between mb-5">
                  <span className={`text-3xl font-black leading-none ${styles.symbolColor}`}>
                    {track.symbol}
                  </span>
                  <span className="text-xs font-semibold text-text-muted border border-border rounded-full px-2.5 py-1">
                    {track.level}
                  </span>
                </div>

                {/* Name + course */}
                <p className="text-xs font-semibold tracking-wide text-text-muted uppercase mb-1">{track.course}</p>
                <h3 className="text-lg font-semibold text-text-primary mb-3 leading-snug">
                  {track.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-5">
                  {track.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {track.skills.slice(0, 3).map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-black/5 text-text-muted border border-black/6">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${styles.glow}`} />
              </motion.div>
            );
          })}
        </StaggerContainer>

        <AnimatedSection variant="fade-up" delay={0.3} className="mt-10 text-center">
          <Link
            href="/tracks"
            className="inline-flex items-center gap-2 text-sm font-medium text-um-orange hover:text-um-orange-dim transition-colors"
          >
            View full solution details →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
