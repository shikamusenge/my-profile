"use client"

import { motion } from "framer-motion"

export default function ProjectContent({ longDescription }: { longDescription: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: longDescription }}
    />
  )
}
