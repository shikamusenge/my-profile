import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ProjectDetail } from "@/components/projects/project-detail"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { RelatedProjects } from "@/components/projects/related-projects"
import { projects } from "@/data/projects"
import ProjectContent from "./project-content"

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50/90 to-white/90 dark:from-zinc-950 dark:to-zinc-900 py-20 light-texture">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <ProjectDetail project={project} />
        </div>

        {project.screenshots && (
          <ProjectGallery mainImage={project.image} screenshots={project.screenshots} title={project.title} />
        )}

        <ProjectContent longDescription={project.longDescription || ""} />

        <Separator className="my-16" />

        <RelatedProjects currentProjectId={project.id} projects={projects} />
      </div>
    </div>
  )
}
