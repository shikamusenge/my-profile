"use client"

import { Calendar, Tag, User, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types/project"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8">{project.description}</p>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Calendar className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
          <span>
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {project.client && (
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <User className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
            <span>{project.client}</span>
          </div>
        )}

        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Tag className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
          <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 px-3 py-1"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        <Button
          className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 light-button"
          asChild
        >
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Live Demo
          </a>
        </Button>

        <Button
          variant="outline"
          className="rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 light-button"
          asChild
        >
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View Source Code
          </a>
        </Button>
      </div>
    </motion.div>
  )
}
