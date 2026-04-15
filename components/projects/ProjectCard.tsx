"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { staggerItem } from "@/components/ui/AnimatedSection";

interface ProjectCardProps {
  project: Project;
}

const categoryStyles: Record<string, { badge: string; glow: string }> = {
  "HCD": {
    badge: "bg-um-orange/90 text-white",
    glow: "ring-um-orange/20",
  },
  "AI Engineering": {
    badge: "bg-blue-500/80 text-white",
    glow: "ring-blue-400/20",
  },
  "BI & Dashboards": {
    badge: "bg-emerald-600/80 text-white",
    glow: "ring-emerald-400/20",
  },
  "Capstone": {
    badge: "bg-purple-600/80 text-white",
    glow: "ring-purple-400/20",
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const styles = categoryStyles[project.category] ?? { badge: "bg-black/10 text-text-primary", glow: "ring-black/10" };

  return (
    <motion.article
      layout
      variants={staggerItem}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${styles.badge}`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs text-text-muted font-medium mb-1.5">{project.industry}</p>
        <h3 className="font-semibold text-text-primary text-base leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-black/5 text-text-muted border border-black/6 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400 ring-1 ${styles.glow}`} />
    </motion.article>
  );
}
