"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Code2, Download, Globe, Layers, Mail, MapPin, Sparkles, Star,Github, Linkedin, Twitter, Code,
  Atom,
  ServerCog,
  Database,
  Braces,
  GitBranch,
  Cloud,
  Box,
  BadgeCheck,
  LayoutDashboard,
  TerminalSquare,} from "lucide-react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { FeaturedProjects } from "@/components/projects/featured-projects"
import { projects } from "@/data/projects"


export default function Home() {

  const isMobile = useMobile()
  const heroRef = useRef<HTMLDivElement>(null)
const skills = [
  { name: "JavaScript", icon: <Braces className="w-6 h-6 text-yellow-500" /> },
  { name: "TypeScript", icon: <Braces className="w-6 h-6 text-blue-600" /> },
  { name: "React", icon: <Atom className="w-6 h-6 text-cyan-500" /> },
  { name: "Next.js", icon: <LayoutDashboard className="w-6 h-6 text-black dark:text-white" /> },
  { name: "Node.js", icon: <ServerCog className="w-6 h-6 text-green-600" /> },
  { name: "Express", icon: <TerminalSquare className="w-6 h-6 text-gray-500 dark:text-gray-300" /> },
  { name: "MongoDB", icon: <Database className="w-6 h-6 text-green-500" /> },
  { name: "PostgreSQL", icon: <Database className="w-6 h-6 text-blue-500" /> },
  { name: "TailwindCSS", icon: <Layers className="w-6 h-6 text-sky-500" /> },
  { name: "Git", icon: <GitBranch className="w-6 h-6 text-orange-500" /> },
  { name: "Docker", icon: <Box className="w-6 h-6 text-blue-400" /> },
  { name: "AWS", icon: <Cloud className="w-6 h-6 text-orange-500" /> },
];
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`
        heroRef.current.style.opacity = `${1 - scrollPosition * 0.002}`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const MotionImage = motion(Image)

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-44">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-black/[0.03] dark:bg-grid-white/[0.02] -z-10 light-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/90 to-white/90 dark:from-zinc-950/80 dark:to-zinc-900/80 backdrop-blur-sm -z-10" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 -z-10" />

        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 space-y-8" ref={heroRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 dark:border-purple-400/20"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Available for hire
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                  Hello, I'm <span className="text-purple-600 dark:text-purple-400">Shikamusenge</span>
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">
                  Full Stack Developer
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
              >
                I'm a passionate and dedicated full-stack developer with a knack for leveraging the latest technologies
                to bring creative solutions to life through the power of coding.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300"
                >
                  View My Work
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-6 text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                  <span>Available for projects</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full lg:w-1/2 aspect-square max-w-md"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/10 -z-10 blur-3xl" />
              <div
                className="absolute inset-0 rounded-full border border-purple-500/10 dark:border-purple-400/10 -z-10 animate-pulse"
                style={{ animationDuration: "4s" }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <MotionImage
                  src="philemon.png"
                  alt="Profile image"
                  fill
                  className="object-cover"
                  priority
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "10+", label: "Happy Clients" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
    {/* About Section */
    }
   <section id="about" className="bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-10 h-10 text-blue-600 dark:text-blue-400 animate-pulse" />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Turning Ideas into Impactful Code
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I'm <span className="font-semibold text-blue-600 dark:text-blue-400">SHIKAMUSENGE Philemon</span>, a full-stack developer driven by innovation, efficiency, and impact. With a love for clean code and smart systems, I build software that makes life easier, businesses smarter, and experiences smoother.
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Whether it’s building dynamic React interfaces, structuring backends with Node.js & Express, or deploying intelligent solutions with MongoDB, I thrive on crafting tech that solves real-world problems.
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I co-founded <span className="font-medium text-blue-600 dark:text-blue-400">Tyaza Limited</span> and gained field experience through a software internship at <span className="italic">IDA Technology</span>. I’m a holder of Advanced Diploma in IT from <span className="font-medium">RP Ngoma College</span> and always exploring new horizons in AI and user-focused design.
        </p>
        <div className="mt-10">
          <a
            href="/SHIKAMUSENGE_Philemon_CV.pdf"
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </section>
      {/* Services Section */}
      <section id="service" className="py-20 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 dark:border-purple-400/20 mb-4"
            >
              Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              With a strong foundation of knowledge and skills, I thrive on tackling complex challenges and turning them
              into elegant, efficient solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="h-6 w-6" />,
                title: "Web Development",
                description:
                  "Building responsive and performant web applications using modern frameworks and technologies.",
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: "Full Stack Solutions",
                description: "Creating end-to-end solutions from database design to frontend implementation.",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "API Development",
                description: "Designing and implementing robust APIs that power modern applications.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden light-card">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-700 dark:text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 dark:border-purple-400/20 mb-4"
            >
              Skills
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I continuously expand my skillset to stay at the forefront of technology trends and deliver cutting-edge
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
  <motion.div
    key={skill.name}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col items-center justify-center gap-2">
      {skill.icon}
      <div className="font-medium">{skill.name}</div>
    </div>
  </motion.div>
))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Now using the component */}
      <FeaturedProjects  projects={projects} />
      <section className="container mx-auto px-4 md:px-6 py-12" id="experience">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Experience</h2>
    <div className="space-y-8">
      
      <div className="border-l-4 border-purple-600 pl-4">
        <h3 className="text-xl font-semibold">Trainer in Software Development</h3>
        <p className="text-gray-600 dark:text-gray-400">Garden TSS — <span className="italic">SEP - 2024 to Jan - 2025</span></p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Providing hands-on training to students in software development, focusing on modern technologies and project-based learning.</p>
      </div>

      <div className="border-l-4 border-purple-600 pl-4">
        <h3 className="text-xl font-semibold">Back-end Developer</h3>
        <p className="text-gray-600 dark:text-gray-400">Kitech — August 2024 to September 2024</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Worked on building scalable APIs and backend services using modern development tools, contributing to active product development and deployment.</p>
      </div>

      <div className="border-l-4 border-purple-600 pl-4">
        <h3 className="text-xl font-semibold">ICT Officer Intern</h3>
        <p className="text-gray-600 dark:text-gray-400">KIBUNGO Level II Teaching Hospital — July 2024 to September 2024</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Supported the hospital's IT department by maintaining networks, troubleshooting hardware/software, and assisting in the management of digital health systems.</p>
      </div>

      <div className="border-l-4 border-purple-600 pl-4">
        <h3 className="text-xl font-semibold">Software Developer Intern</h3>
        <p className="text-gray-600 dark:text-gray-400">IDA TECHNOLOGY — September 2023 to October 2023</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Assisted in software development projects involving front-end and back-end coding, gained hands-on experience with agile workflows and collaboration tools.</p>
      </div>

    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 dark:border-purple-400/20 mb-4"
            >
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what some of my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Shikamusenge delivered our project ahead of schedule and exceeded all our expectations. His attention to detail and problem-solving skills are exceptional.",
                author: "IZABAYO Samuel",
                role: "CEO SamTech Grp Ltd.",
              },
              {
                quote:
                  "Working with Shikamusenge was a pleasure. He understood our requirements perfectly and implemented solutions that were both elegant and efficient.",
                author: "NTAKIRUTIMANA Sabin",
                role: "INTASOBWA Team Member",
              },
              {
                quote:
                  "I was impressed by Shikamusenge's technical knowledge and his ability to explain complex concepts in simple terms. He's a true professional.",
                author: "KIREZI Damour",
                role: "Self Employed",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 light-card">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact" className="container px-4 md:px-6 mx-auto py-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-2xl mx-auto text-center"
  >
    <Badge
      variant="outline"
      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 dark:border-purple-400/20 mb-4"
    >
      Contact
    </Badge>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
    <p className="text-gray-600 dark:text-gray-400 mb-6">
      I'm currently available for freelance work and full-time opportunities. If you're interested in working
      together, please get in touch!
    </p>

    <div className="space-y-2 text-gray-700 dark:text-gray-300 mb-8">
      <p>
        📧 <a href="mailto:shikamusenge720@gmail.com" className="text-blue-600 hover:underline">shikamusenge720@gmail.com</a>
      </p>
      <p>
        📱 <a href="tel:+250784589448" className="text-blue-600 hover:underline">+250 784 589 448</a>
      </p>
      <p>
        🌍 Kigali, Rwanda
      </p>
    </div>

    <div className="flex justify-center gap-4 mb-8">
      <a href="https://github.com/shikamusenge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:hover:text-white">
        <Github className="h-6 w-6" />
      </a>
      <a href="https://wa.me/+250784589448" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:hover:text-white">
        WhatsApp
      </a>
      <a href="https://www.linkedin.com/in/shikamusenge-philemon-86494b291/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
        <Linkedin className="h-6 w-6" />
      </a>
      <a href="https://twitter.com/ShikamusengeP" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
        <Twitter className="h-6 w-6" />
      </a>
    </div>

    <Button
      size="lg"
      className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300"
      onClick={() => window.location.href = "mailto:your.email@example.com"}
    >
      <Mail className="mr-2 h-4 w-4" />
      Contact Me
    </Button>
  </motion.div>
</div>

    </div>
  )
}
