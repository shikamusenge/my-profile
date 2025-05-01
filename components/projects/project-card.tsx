"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  index: number
  isDetailPage?: boolean
}

export function ProjectCard({ project, index, isDetailPage = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card
        className={`h-full overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ${!isDetailPage ? "light-card" : ""}`}
      >
        <div className="relative aspect-video bg-gray-50 dark:bg-gray-700 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex gap-3">
              <Button
                size="sm"
                variant="secondary"
                className="rounded-full bg-white/90 hover:bg-white text-gray-900 light-button"
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="rounded-full bg-white/90 hover:bg-white text-gray-900 light-button"
                asChild
              >
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            {isDetailPage ? (
              project.title
            ) : (
              <Link href={`/projects/${project.id}`} className="hover:text-purple-600 dark:hover:text-purple-400">
                {project.title}
              </Link>
            )}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
