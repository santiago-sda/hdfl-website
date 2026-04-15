"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export function FeaturedProjects() {
  return (
    <section className="relative py-28 px-6 bg-surface">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection
          variant="fade-up"
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-4">
              Client Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Recent Engagements
            </h2>
            <p className="mt-3 text-lg text-text-muted max-w-md">
              A sample of completed ACE projects delivered through the Herbert Digital-First Lab.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 px-5 py-2.5 border border-black/12 hover:border-black/25 text-text-primary text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-black/5"
          >
            View All Projects →
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-black/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-um-orange/90 text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-text-muted font-medium mb-1.5">{project.industry}</p>
                <h3 className="font-semibold text-text-primary mb-2 text-base leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-black/5 text-text-muted border border-black/6"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400 ring-1 ring-um-orange/20" />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
