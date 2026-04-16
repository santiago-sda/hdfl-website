import { PageHero } from "@/components/ui/PageHero";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Client Engagement Portfolio"
        title="Projects & Research"
        subtitle="Nine completed engagements across three courses and four digital solutions. Client details are sanitized to protect confidentiality while conveying industry context and project complexity."
      />
      <ProjectFilter projects={projects} />
    </>
  );
}
