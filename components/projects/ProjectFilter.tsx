"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { AnimatedSection, StaggerContainer } from "@/components/ui/AnimatedSection";

const categories = ["All", "HCD", "AI Engineering", "BI & Dashboards", "Capstone"];

interface ProjectFilterProps {
  projects: Project[];
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter pills */}
      <section className="px-6 pt-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fade-in">
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors duration-150 ${
                    activeCategory === cat
                      ? "bg-um-orange/90 text-white border-um-orange/50"
                      : "border-border bg-card text-text-muted hover:text-text-primary hover:border-black/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-8 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.08}
          >
            <AnimatePresence>
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-text-muted py-12">
                No projects in this category yet.
              </p>
            )}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
