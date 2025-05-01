"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectGalleryProps {
  mainImage: string
  screenshots: string[]
  title: string
}

export function ProjectGallery({ mainImage, screenshots, title }: ProjectGalleryProps) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-video rounded-xl overflow-hidden shadow-xl mb-8"
      >
        <Image src={mainImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={screenshot || "/placeholder.svg"}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
