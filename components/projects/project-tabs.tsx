"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectGrid } from "@/components/projects/project-grid"
import type { Project } from "@/types/project"

interface ProjectTabsProps {
  projects: Project[]
}

export function ProjectTabs({ projects }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
      <div className="flex justify-center md:justify-start mb-8">
        <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
          <TabsTrigger
            value="all"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm"
          >
            All Projects
          </TabsTrigger>
          <TabsTrigger
            value="web"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm"
          >
            Web Apps
          </TabsTrigger>
          <TabsTrigger
            value="mobile"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm"
          >
            Mobile Apps
          </TabsTrigger>
          <TabsTrigger
            value="design"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm"
          >
            UI/UX Design
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all" className="mt-8">
        <ProjectGrid projects={projects} />
      </TabsContent>

      <TabsContent value="web" className="mt-8">
        <ProjectGrid projects={projects} category="web" />
      </TabsContent>

      <TabsContent value="mobile" className="mt-8">
        <ProjectGrid projects={projects} category="mobile" />
      </TabsContent>

      <TabsContent value="design" className="mt-8">
        <ProjectGrid projects={projects} category="design" />
      </TabsContent>
    </Tabs>
  )
}
