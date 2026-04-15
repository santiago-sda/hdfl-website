import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection, StaggerContainer } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data";

const categories = ["All", "HCD", "AI Engineering", "BI & Dashboards", "Capstone"];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Client Engagement Portfolio"
        title="Projects & Research"
        subtitle="Nine completed engagements across three courses and four digital tracks. Client details are sanitized to protect confidentiality while conveying industry context and project complexity."
      />

      {/* Filter pills (static/visual only) */}
      <section className="px-6 pt-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fade-in">
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors duration-150 ${
                    cat === "All"
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
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
