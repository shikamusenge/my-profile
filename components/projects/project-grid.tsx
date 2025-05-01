import { ProjectCard } from "@/components/projects/project-card"
import type { Project } from "@/types/project"

interface ProjectGridProps {
  projects: Project[]
  category?: string
}

export function ProjectGrid({ projects, category = "all" }: ProjectGridProps) {
  const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}
