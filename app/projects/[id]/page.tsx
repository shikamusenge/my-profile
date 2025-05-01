"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ProjectDetail } from "@/components/projects/project-detail"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { RelatedProjects } from "@/components/projects/related-projects"
import { projects } from "@/data/projects"
import type { Project } from "@/types/project"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProject = projects.find((p) => p.id === params.id)

    if (foundProject) {
      setProject(foundProject)
    }

    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-center h-96">
            <div className="w-8 h-8 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>
          </div>
        </div>
      </div>
    )
  }

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: project.longDescription || "" }}
        />

        <Separator className="my-16" />

        <RelatedProjects currentProjectId={project.id} projects={projects} />
      </div>
    </div>
  )
}
