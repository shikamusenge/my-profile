"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types/project"
import Image from "next/image"

interface RelatedProjectsProps {
  currentProjectId: string
  projects: Project[]
  limit?: number
}

export function RelatedProjects({ currentProjectId, projects, limit = 3 }: RelatedProjectsProps) {
  const relatedProjects = projects.filter((p) => p.id !== currentProjectId).slice(0, limit)

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">More Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {relatedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="group"
          >
            <Card className="h-full overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
