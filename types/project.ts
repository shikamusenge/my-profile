export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  screenshots?: string[]
  demoUrl?: string
  codeUrl?: string
  tags: string[]
  category: string
  featured: boolean
  date: string
  client?: string
}
