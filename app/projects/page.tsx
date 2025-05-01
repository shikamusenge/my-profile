"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { ProjectTabs } from "@/components/projects/project-tabs"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50/90 to-white/90 dark:from-zinc-950 dark:to-zinc-900 py-20 light-texture">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore my portfolio of web applications, mobile apps, and design projects. Each project represents my
              passion for creating elegant, efficient, and user-friendly solutions.
            </p>
          </motion.div>
        </div>

        <ProjectTabs projects={projects} />
      </div>
    </div>
  )
}
