import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "samtechgrp",
    title: "SamTech Group Website",
    description: "A corporate website for SamTech Group, showcasing services and company information.",
    longDescription: `
      <p>The SamTech Group website is a modern, responsive platform designed to present the company's services, portfolio, and contact information. Built with React for the frontend and Node.js with Express for the backend, it ensures fast performance and scalability.</p>
      <ul>
        <li><strong>Frontend:</strong> React</li>
        <li><strong>Backend:</strong> Node.js, Express</li>
        <li><strong>Features:</strong> Service listings, contact forms, company profile, responsive design</li>
      </ul>
    `,
    image: "/projects/samtech.png",
    screenshots: ["/placeholder.svg?height=600&width=800"],
    demoUrl: "https://samtechgrp.com",
    tags: ["React", "Node.js", "Express", "Web Development"],
    category: "web",
    featured: true,
    date: "2024-01-10",
    client: "SamTech Group",
  },
  {
    id: "unigatehub",
    title: "UnigateHub Platform",
     description: "A PHP-powered portal for managing user registrations and services.",
    longDescription: `
      <p>The unigatehub is a robust web application built with PHP, providing user registration, service management, and secure access for clients and administrators.</p>
      <ul>
        <li><strong>Stack:</strong> PHP</li>
        <li><strong>Features:</strong> User registration, service management, secure access</li>
      </ul>
    `,
    image: "/projects/unigatehub.png",
    screenshots: ["/placeholder.svg?height=600&width=800"],
    demoUrl: "https://app.unigatehub.org",
    tags: ["PHP", "Business Platform"],
    category: "web",
    featured: true,
    date: "2024-02-05",
    client: "UnigateHub",
  },
  {
    id: "ihahire-portal",
    title: "Ihahire Portal", 
    description: "A web application for managing business operations and workflows.",
    
    longDescription: `
      <p>ihahire-portal is a PHP-based platform that streamlines business processes, offering tools for workflow automation, document management, and team collaboration.</p>
      <ul>
        <li><strong>Stack:</strong> PHP</li>
        <li><strong>Features:</strong> Workflow automation, document management, team collaboration</li>
      </ul>
    `,
    image: "/projects/ihahire.png",
    screenshots: ["/placeholder.svg?height=600&width=800"],
    demoUrl: "https://portal.ihahire.rw",
    tags: ["PHP", "Portal", "Web Application"],
    category: "web",
    featured: true,
    date: "2024-03-12",
    client: "Ihahire",
  },
  {
    id: "rwbridgetocollege",
    title: "Rwanda Bridge to College",
    description: "A Next.js website for Rwanda Bridge to College, supporting educational initiatives.",
    longDescription: `
      <p>This project is a Next.js-based website for Rwanda Bridge to College, providing information about programs, events, and resources for students and educators.</p>
      <ul>
        <li><strong>Frontend:</strong> Next.js</li>
        <li><strong>Features:</strong> Program listings, event calendar, resource library</li>
      </ul>
    `,
    image: "/projects/rwbridgetocollege.png",
    screenshots: ["/placeholder.svg?height=600&width=800"],
    demoUrl: "https://rwbridgetocollege.com",
    tags: ["Next.js", "Education", "Web Development"],
    category: "web",
    featured: true,
    date: "2024-04-01",
    client: "Rwanda Bridge to College",
  },
  {
    id: "driver-assist-device",
    title: "Driver Assistive Device for Deafness",
    description: "A smart AI-powered system that helps deaf drivers by providing visual alerts for important road sounds.",
    longDescription: `
      <p>This assistive technology solution enhances driving safety for deaf individuals by converting critical auditory signals into visual alerts and vibrations.</p>
      <h3>Key Features</h3>
      <ul>
        <li><strong>Sound Classification:</strong> Identifies important road sounds (sirens, horns, skidding) in real-time</li>
        <li><strong>Visual Alerts:</strong> Converts sound into visual and haptic notifications</li>
      </ul>
      <h3>Future Development</h3>
      <ul>
        <li>Mobile app versions for Android and iOS</li>
        <li>Integration with formal banking systems</li>
        <li>Advanced analytics for environmental awareness</li>
      </ul>
    `,
    image: "projects/ikibina.png",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoUrl: "https://example.com/ikibina",
    codeUrl: "https://github.com/shikamusenge/ikibina",
    tags: ["React", "Node.js", "MySQL", "Express", "JWT", "PDF Generation", "USSD Integration"],
    category: "web",
    featured: true,
    date: "2023-08-20",
    client: "Community Savings Groups Association",
  },
  {
    id: "online-smart-voting",
    title: "Online Smart Voting",
    description: "A secure and user-friendly online voting platform that enables organizations to conduct transparent elections remotely.",
    longDescription: `...`, // No change to content
    image: "projects/smrtv.png",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    codeUrl: "https://github.com/shikamusenge/voting",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Socket.io"],
    category: "web",
    featured: true,
    date: "2023-05-15",
    client: "Electoral Commission",
  },
  {
    id: "js-piano",
    title: "JS Piano",
    description: "An interactive virtual piano built with JavaScript that allows users to play music directly in their browser.",
    longDescription: `...`, // No change to content
    image: "projects/piano.png",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoUrl: "https://philemonpiano.netlify.app",
    codeUrl: "https://github.com/shikamusenge/philemon-piano",
    tags: ["JavaScript", "HTML5", "CSS3", "Web Audio API", "Canvas", "LocalStorage"],
    category: "web",
    featured: true,
    date: "2022-11-03",
    client: "Self-initiated",
  },
  {
    id: "movie-library",
    title: "Movie Library",
    description: "A Netflix-inspired movie library application that allows users to browse, search, and discover films across various genres.",
    longDescription: `...`, // No change to content
    image: "/projects/movie.png",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoUrl: "https://shikamusenge.netlify.app/moive-lab.vercel.app/",
    codeUrl: "https://github.com/shikamusenge/movies",
    tags: ["React", "Redux", "TMDB API", "tailwind css"],
    category: "web",
    featured: true,
    date: "2023-02-10",
    client: "Personal",
  },
  {
    id: "et-sketch",
    title: "Et Sketch",
    description: "A drawing application that enables users to create digital art with various tools, colors, and brushes.",
    longDescription: `...`, // No change to content
    image: "/projects/sketch.png",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    codeUrl: "https://github.com/shikamusenge/sketch",
    tags: ["JavaScript", "Canvas API", "HTML5", "CSS3", "File API"],
    category: "web",
    featured: true,
    date: "2022-09-18",
    client: "Art Education Center",
  },
];
