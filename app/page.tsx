"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code2, Download, Globe, Layers, Mail, MapPin, Sparkles, Star,
  Github, Linkedin, Twitter, Atom, ServerCog, Database, Braces, GitBranch,
  Cloud, Box, TerminalSquare, LayoutDashboard, Phone, ArrowUpRight, Briefcase,
  GraduationCap, Building2, CalendarDays, Quote,
} from "lucide-react"
import { motion } from "framer-motion"
import { FeaturedProjects } from "@/components/projects/featured-projects"
import { projects } from "@/data/projects"

const skills = [
  { name: "JavaScript", icon: <Braces className="w-5 h-5 text-yellow-500" />, color: "from-yellow-500/10 to-yellow-500/5", glow: "hover:shadow-yellow-500/20" },
  { name: "TypeScript", icon: <Braces className="w-5 h-5 text-blue-600" />, color: "from-blue-600/10 to-blue-600/5", glow: "hover:shadow-blue-500/20" },
  { name: "React", icon: <Atom className="w-5 h-5 text-cyan-500" />, color: "from-cyan-500/10 to-cyan-500/5", glow: "hover:shadow-cyan-500/20" },
  { name: "Next.js", icon: <LayoutDashboard className="w-5 h-5 text-black dark:text-white" />, color: "from-gray-900/10 to-gray-900/5 dark:from-white/10", glow: "hover:shadow-gray-400/20" },
  { name: "Node.js", icon: <ServerCog className="w-5 h-5 text-green-600" />, color: "from-green-600/10 to-green-600/5", glow: "hover:shadow-green-500/20" },
  { name: "Express", icon: <TerminalSquare className="w-5 h-5 text-gray-500" />, color: "from-gray-500/10 to-gray-500/5", glow: "hover:shadow-gray-400/20" },
  { name: "MongoDB", icon: <Database className="w-5 h-5 text-green-500" />, color: "from-green-500/10 to-green-500/5", glow: "hover:shadow-green-500/20" },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-blue-500" />, color: "from-blue-500/10 to-blue-500/5", glow: "hover:shadow-blue-500/20" },
  { name: "TailwindCSS", icon: <Layers className="w-5 h-5 text-sky-500" />, color: "from-sky-500/10 to-sky-500/5", glow: "hover:shadow-sky-500/20" },
  { name: "Git", icon: <GitBranch className="w-5 h-5 text-orange-500" />, color: "from-orange-500/10 to-orange-500/5", glow: "hover:shadow-orange-500/20" },
  { name: "Docker", icon: <Box className="w-5 h-5 text-blue-400" />, color: "from-blue-400/10 to-blue-400/5", glow: "hover:shadow-blue-400/20" },
  { name: "AWS", icon: <Cloud className="w-5 h-5 text-orange-400" />, color: "from-orange-400/10 to-orange-400/5", glow: "hover:shadow-orange-400/20" },
]

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Elite Dev",
    period: "2025 – Present",
    description: "Building and maintaining full-stack web applications, architecting scalable solutions, and leading feature development across the entire technology stack.",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/30",
    dotColor: "bg-violet-500",
    lineColor: "shadow-[0_0_10px_rgba(139,92,246,0.9)]",
  },
  {
    role: "Trainer in Software Development",
    company: "Garden TSS",
    period: "Sep 2024 – Jan 2025",
    description: "Providing hands-on training to students in software development, focusing on modern technologies and project-based learning.",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
    dotColor: "bg-purple-500",
    lineColor: "shadow-[0_0_10px_rgba(168,85,247,0.7)]",
  },
  {
    role: "Back-end Developer",
    company: "Kitech",
    period: "Aug 2024 – Sep 2024",
    description: "Built scalable APIs and backend services using modern tools, contributing to active product development and deployment.",
    icon: <Code2 className="w-5 h-5" />,
    color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
    dotColor: "bg-blue-500",
    lineColor: "shadow-[0_0_10px_rgba(96,165,250,0.7)]",
  },
  {
    role: "ICT Officer Intern",
    company: "KIBUNGO Level II Teaching Hospital",
    period: "Jul 2024 – Sep 2024",
    description: "Maintained networks, troubleshot hardware/software, and assisted in managing digital health systems.",
    icon: <Building2 className="w-5 h-5" />,
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30",
    dotColor: "bg-emerald-500",
    lineColor: "shadow-[0_0_10px_rgba(16,185,129,0.7)]",
  },
  {
    role: "Software Developer Intern",
    company: "IDA Technology",
    period: "Sep 2023 – Oct 2023",
    description: "Contributed to front-end and back-end projects, gaining hands-on experience with agile workflows and collaboration tools.",
    icon: <Briefcase className="w-5 h-5" />,
    color: "text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/30",
    dotColor: "bg-rose-500",
    lineColor: "shadow-[0_0_10px_rgba(244,63,94,0.7)]",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`
        heroRef.current.style.opacity = `${1 - scrollPosition * 0.0015}`
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-[#050812] overflow-x-hidden">

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">

        {/* Cyber dot grid */}
        <div className="absolute inset-0 cyber-grid opacity-70" />

        {/* Aurora blobs */}
        <div className="aurora-1 absolute -top-64 -left-64 w-[750px] h-[750px] rounded-full bg-gradient-to-br from-purple-600/12 to-blue-600/8 blur-3xl dark:from-purple-500/18 dark:to-blue-500/12 pointer-events-none" />
        <div className="aurora-2 absolute -bottom-40 -right-56 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-cyan-600/10 to-indigo-600/8 blur-3xl dark:from-cyan-500/15 dark:to-indigo-500/12 pointer-events-none" />
        <div className="aurora-3 absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-600/6 to-pink-600/6 blur-3xl dark:from-violet-500/10 dark:to-pink-500/10 pointer-events-none" />

        {/* Orbital rings */}
        <div className="animate-orbit-cw absolute pointer-events-none" style={{top:"50%",left:"50%",width:"520px",height:"520px",borderRadius:"50%",border:"1px solid rgba(124,58,237,0.12)"}} />
        <div className="animate-orbit-ccw absolute pointer-events-none" style={{top:"50%",left:"50%",width:"820px",height:"820px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.08)"}} />
        <div className="animate-orbit-cw absolute pointer-events-none animation-delay-5000" style={{top:"50%",left:"50%",width:"1100px",height:"1100px",borderRadius:"50%",border:"1px solid rgba(6,182,212,0.05)"}} />

        {/* Neon accent dots */}
        <div className="absolute top-[28%] left-[8%] w-2.5 h-2.5 rounded-full bg-purple-500 neon-dot-purple animate-pulse-glow hidden lg:block" />
        <div className="absolute top-[62%] right-[7%] w-2 h-2 rounded-full bg-cyan-400 neon-dot-cyan animate-pulse-glow animation-delay-1000 hidden lg:block" />
        <div className="absolute bottom-[30%] left-[22%] w-1.5 h-1.5 rounded-full bg-blue-400 neon-dot-blue animate-pulse-glow animation-delay-3000 hidden lg:block" />
        <div className="absolute top-[38%] right-[16%] w-2 h-2 rounded-full bg-pink-400 neon-dot-pink animate-pulse-glow animation-delay-2000 hidden lg:block" />
        <div className="absolute bottom-[50%] left-[5%] w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse-glow animation-delay-4000 hidden xl:block" />

        {/* Floating code snippet — left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="absolute top-28 left-4 xl:left-14 hidden xl:block pointer-events-none select-none"
          style={{ animation: "float 8s ease-in-out infinite" }}
        >
          <div className="tech-mono text-[11px] bg-gray-950/95 dark:bg-gray-900/95 border border-purple-500/25 rounded-2xl p-4 backdrop-blur-md shadow-xl shadow-purple-900/15 text-left w-[185px]">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="text-pink-400">const <span className="text-blue-300">dev</span> = {"{"}</div>
            <div className="pl-3 text-yellow-300">name: <span className="text-green-300">"Philemon"</span>,</div>
            <div className="pl-3 text-yellow-300">passion: <span className="text-orange-400">Infinity</span>,</div>
            <div className="pl-3 text-yellow-300">stack: <span className="text-cyan-400">fullstack</span></div>
            <div className="text-white">{"}"}</div>
          </div>
        </motion.div>

        {/* Floating code snippet — right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.0, duration: 0.9 }}
          className="absolute bottom-40 right-4 xl:right-14 hidden xl:block pointer-events-none select-none"
          style={{ animation: "float 10s ease-in-out 2s infinite" }}
        >
          <div className="tech-mono text-[11px] bg-gray-950/95 dark:bg-gray-900/95 border border-cyan-500/25 rounded-2xl p-4 backdrop-blur-md shadow-xl shadow-cyan-900/15 text-left w-[200px]">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="text-pink-400">async function <span className="text-blue-300">build</span>() {"{"}</div>
            <div className="pl-3 text-pink-400">const <span className="text-blue-300">app</span> = await</div>
            <div className="pl-5 text-yellow-300">innovate<span className="text-white">(</span><span className="text-green-300">"ideas"</span><span className="text-white">);</span></div>
            <div className="pl-3 text-pink-400">return <span className="text-cyan-400">app.impact</span>;</div>
            <div className="text-white">{"}"}</div>
          </div>
        </motion.div>

        {/* Floating tech chip — top right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="absolute top-32 right-6 xl:right-24 hidden lg:block pointer-events-none select-none"
          style={{ animation: "float 12s ease-in-out 1s infinite" }}
        >
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-950/90 dark:bg-gray-900/90 border border-blue-500/30 rounded-full backdrop-blur-sm text-xs text-blue-300 tech-mono shadow-lg shadow-blue-900/20">
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.9)]" />
            React + TypeScript
          </div>
        </motion.div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_50%,transparent_35%,white_100%)] dark:bg-[radial-gradient(ellipse_85%_70%_at_50%_50%,transparent_35%,#050812_100%)] pointer-events-none" />

        {/* ——— Hero main content ——— */}
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto" ref={heroRef}>

            {/* Available badge */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                Full Stack Developer @ Elite Dev
              </span>
            </motion.div>

            {/* Role badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="mb-5">
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />Full Stack Developer
              </Badge>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
            >
              <span className="gradient-text text-glow">SHIKAMUSENGE</span>
              <br />
              <span className="text-gray-800 dark:text-gray-100">Philemon</span>
            </motion.h1>

            {/* Terminal widget */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.18 }} className="mb-8">
              <div className="inline-flex flex-col bg-gray-950 dark:bg-[#0d1117] rounded-2xl border border-gray-700/60 overflow-hidden shadow-2xl shadow-purple-900/20 w-[300px] sm:w-[360px]">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/80 border-b border-gray-700/50">
                  <span className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </span>
                  <span className="flex-1 text-center text-xs text-gray-500 tech-mono">portfolio — zsh</span>
                </div>
                <div className="px-5 py-4 text-left">
                  <div className="tech-mono text-xs text-gray-600 mb-2">Last login: Mon Apr 21 10:30:00</div>
                  <div className="flex items-start gap-2 tech-mono text-sm">
                    <span className="text-purple-400 shrink-0">❯</span>
                    <span className="text-green-400">npm run create-awesome-app</span>
                  </div>
                  <div className="tech-mono text-xs text-gray-500 mt-1 pl-5">⚡ Compiling modules...</div>
                  <div className="flex items-center gap-2 tech-mono text-xs mt-0.5 pl-5">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Ready in <span className="text-yellow-400">230ms</span></span>
                    <span className="inline-block w-1.5 h-3.5 bg-purple-400 animate-pulse ml-1 rounded-sm" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10"
            >
              I architect digital experiences that blend innovative technology with intuitive design,
              crafting solutions that solve real problems and delight users.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white neon-btn hover:scale-105 transition-all duration-300 group px-8">
                <Link href="/projects">
                  Explore My Work
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:scale-105 transition-all duration-300 px-8 glass">
                <a href="/SHIKAMUSENGE_Philemon_CV.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />Download CV
                </a>
              </Button>
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-500"
            >
              <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-purple-500" /><span>Kigali, Rwanda</span></div>
              <div className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-purple-500" /><span>shikamusenge720@gmail.com</span></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-600"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Glowing section divider */}
      <div className="glow-divider" />

      {/* ===== STATS SECTION ===== */}
      <section className="py-14 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-600/5" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "2+", label: "Years Experience", color: "from-purple-500/10 to-purple-500/5", accent: "rgba(168,85,247,0.6)" },
              { number: "10+", label: "Projects Completed", color: "from-blue-500/10 to-blue-500/5", accent: "rgba(96,165,250,0.6)" },
              { number: "10+", label: "Happy Clients", color: "from-cyan-500/10 to-cyan-500/5", accent: "rgba(34,211,238,0.6)" },
              { number: "98%", label: "Client Satisfaction", color: "from-emerald-500/10 to-emerald-500/5", accent: "rgba(52,211,153,0.6)" },
            ].map((stat, index) => (
              <motion.div key={index} custom={index} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group relative overflow-hidden card-shine"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1 relative z-10">{stat.number}</div>
                <div className="text-sm text-gray-500 dark:text-gray-500 font-medium relative z-10">{stat.label}</div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glowing section divider */}
      <div className="glow-divider" />

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 mb-4">About Me</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4">Turning Ideas Into <span className="gradient-text">Impactful Code</span></h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  I&apos;m <span className="font-semibold text-purple-600 dark:text-purple-400">SHIKAMUSENGE Philemon</span>, a full-stack developer driven by innovation, efficiency, and real-world impact.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Whether building dynamic React interfaces, structuring backends with Node.js &amp; Express, or deploying intelligent solutions with MongoDB — I thrive on crafting tech that solves real problems.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Co-founder of <span className="font-medium text-purple-600 dark:text-purple-400">Tyaza Limited</span>. Holder of an Advanced Diploma in IT from <span className="font-medium">RP Ngoma College</span>. Always exploring new horizons in AI and user-focused design.
                </p>
                <Button asChild className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/25 hover:scale-105 transition-all duration-300 mt-2">
                  <a href="/SHIKAMUSENGE_Philemon_CV.pdf" target="_blank"><Download className="mr-2 h-4 w-4" />Download CV</a>
                </Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />, title: "Clean Code", desc: "Readable, maintainable, scalable" },
                  { icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />, title: "Web Dev", desc: "Full-stack web solutions" },
                  { icon: <Layers className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />, title: "Full Stack", desc: "End-to-end development" },
                  { icon: <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />, title: "Innovation", desc: "Always learning, always growing" },
                ].map((item, i) => (
                  <div key={i} className="glass-card rounded-2xl p-5 hover:scale-105 transition-transform duration-300 group cursor-default card-shine">
                    <div className="mb-3 p-2.5 rounded-xl bg-white/60 dark:bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div className="font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ===== SERVICES SECTION ===== */}
      <section id="service" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-900/5" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 mb-4">Services</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">What I Do</h2>
            <p className="text-gray-500 dark:text-gray-500 max-w-xl mx-auto text-lg">Crafting elegant, efficient solutions that tackle complex challenges head-on.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Code2 className="h-7 w-7" />, title: "Web Development", description: "Building responsive and performant web applications using modern frameworks and technologies.", gradient: "from-purple-500 to-purple-700", glow: "hover:shadow-purple-500/20" },
              { icon: <Layers className="h-7 w-7" />, title: "Full Stack Solutions", description: "Creating end-to-end solutions from database design to pixel-perfect frontend implementation.", gradient: "from-blue-500 to-blue-700", glow: "hover:shadow-blue-500/20" },
              { icon: <Globe className="h-7 w-7" />, title: "API Development", description: "Designing and implementing robust, scalable APIs that power modern applications.", gradient: "from-cyan-500 to-cyan-700", glow: "hover:shadow-cyan-500/20" },
            ].map((service, index) => (
              <motion.div key={index} custom={index} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="group">
                <div className={`glass-card rounded-3xl p-8 h-full hover:scale-[1.03] transition-all duration-300 hover:shadow-xl ${service.glow} card-shine`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-500 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px glow-divider" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 mb-4">Skills</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Technical Expertise</h2>
            <p className="text-gray-500 dark:text-gray-500 max-w-xl mx-auto text-lg">Constantly expanding my skillset to stay at the forefront of technology.</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} custom={index} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className={`skill-card glass-card rounded-2xl p-4 text-center bg-gradient-to-b ${skill.color} hover:shadow-lg ${skill.glow} hover:border-purple-400/30 dark:hover:border-purple-500/30 transition-all duration-300 group`}>
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                  <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">{skill.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ===== FEATURED PROJECTS ===== */}
      <FeaturedProjects projects={projects} />

      <div className="glow-divider" />

      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="experience" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-blue-900/5" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 mb-4">Experience</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Work History</h2>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-5 md:left-6 top-2 bottom-2 w-0.5 timeline-line" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} custom={index} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <div className="flex gap-6 md:gap-8 group">
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0 w-10 md:w-12 flex justify-center pt-5">
                      <div className={`w-3.5 h-3.5 rounded-full ${exp.dotColor} ${exp.lineColor} border-2 border-white dark:border-[#050812] z-10`} />
                    </div>
                    {/* Card */}
                    <div className="flex-1 glass-card rounded-2xl p-6 flex gap-4 hover:scale-[1.01] transition-all duration-300 card-shine mb-0">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${exp.color} group-hover:scale-110 transition-transform duration-300`}>{exp.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h3 className="font-bold text-lg leading-tight">{exp.role}</h3>
                          <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full whitespace-nowrap">
                            <CalendarDays className="w-3 h-3" />{exp.period}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">{exp.company}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/5 dark:bg-purple-500/8 blur-3xl rounded-full pointer-events-none" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">What Clients Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { quote: "Shikamusenge delivered our project ahead of schedule and exceeded all our expectations. His attention to detail and problem-solving skills are exceptional.", author: "IZABAYO Samuel", role: "CEO, SamTech Grp Ltd.", initials: "IS", color: "from-purple-500 to-purple-700" },
              { quote: "Working with Shikamusenge was a pleasure. He understood our requirements perfectly and implemented solutions that were both elegant and efficient.", author: "NTAKIRUTIMANA Sabin", role: "INTASOBWA Team Member", initials: "NS", color: "from-blue-500 to-blue-700" },
              { quote: "I was impressed by Shikamusenge's technical knowledge and his ability to explain complex concepts in simple terms. He's a true professional.", author: "KIREZI Damour", role: "Self Employed", initials: "KD", color: "from-cyan-500 to-cyan-700" },
              { quote: "Working with Mr Philemon  over the past four years has been one of the best decisions for my business. He didn’t just build our website—he became a true partner in our growth. From seamless feature updates to improving site speed and user experience, every recommendation has been spot-on", author: "ISHIMWE NASHUKURU Poline", role: "CEO Nexa Gear", initials: "IP", color: "from-pink-500 to-rose-600" },
            ].map((testimonial, index) => (
              <motion.div key={index} custom={index} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="glass-card rounded-3xl p-7 h-full flex flex-col hover:scale-[1.02] transition-all duration-300 group card-shine relative">
                  {/* Large decorative quote mark */}
                  <Quote className="absolute top-4 right-5 w-8 h-8 text-purple-500/10 dark:text-purple-400/15 group-hover:text-purple-500/20 transition-colors duration-300" />
                  <div className="flex mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />))}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg`}>{testimonial.initials}</div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-cyan-600/5" />
        {/* Aurora behind contact card */}
        <div className="aurora-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-purple-600/8 to-blue-600/8 blur-3xl dark:from-purple-500/12 dark:to-blue-500/12 rounded-full pointer-events-none" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grad-border-card rounded-3xl p-10 md:p-14 text-center shadow-2xl shadow-purple-500/10">
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 mb-6">Contact</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4">Let&apos;s Work <span className="gradient-text">Together</span></h2>
              <p className="text-gray-500 dark:text-gray-500 mb-10 text-lg max-w-xl mx-auto">I&apos;m currently available for freelance work and full-time opportunities.</p>
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "shikamusenge720@gmail.com", href: "mailto:shikamusenge720@gmail.com", color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30" },
                  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+250 784 589 448", href: "tel:+250784589448", color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Kigali, Rwanda", href: null, color: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30" },
                ].map((item, i) => (
                  <div key={i} className="glass-card rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300 card-shine">
                    <div className={`p-2.5 rounded-xl ${item.color}`}>{item.icon}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 font-medium">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-xs font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all text-center">{item.value}</a>
                    ) : (
                      <span className="text-xs font-semibold">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-3 mb-10">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/shikamusenge", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/shikamusenge-philemon-86494b291/", label: "LinkedIn" },
                  { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/ShikamusengeP", label: "Twitter" },
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all duration-300">{social.icon}</a>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white neon-btn hover:scale-105 transition-all duration-300 px-10">
                <a href="mailto:shikamusenge720@gmail.com"><Mail className="mr-2 h-4 w-4" />Send a Message</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
