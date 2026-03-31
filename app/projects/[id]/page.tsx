import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectDetailsClient from "./_components/ProjectDetailsClient";
async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}

export default ProjectDetails;