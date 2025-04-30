"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Image to audio Converter ",
    description:
      "A unique tool that transforms images into descriptive audio files. This project uses advanced algorithms to analyze the content of an image, converting the key features, text, and objects within the image into an audio narration. It's perfect for visually impaired individuals, or anyone looking for an accessible way to interpret visual content. The application leverages powerful image processing and text-to-speech technology to provide an interactive, user-friendly experience.",
    image: "/imgtoaudio.png?height=400&width=600",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/chinmaypaliwal1/imagetoaudio",
    demo: "https://imagetoaudio.vercel.app/",
  },
  {
    id: 2,
    title: "Amazon Clone E-commerce App",
    description: "A responsive frontend-only e-commerce interface inspired by Amazon. It includes product listings, a clean UI, dynamic product detail pages, and a mock cart functionality. Built using Next.js, TypeScript, and Tailwind CSS, the project focuses on UI/UX and component-based architecture without backend integration.",
    image: "/Amazon.png?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/chinmaypaliwal1/Amazon-clone-app",
    demo: "amazon-clone-app-seven.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive and interactive personal portfolio showcasing projects, skills, and contact information. Built with React, Tailwind CSS, and Framer Motion to deliver smooth animations, modern UI/UX design, and a clean layout optimized for all devices.",
    image: "/Protfolio.png?height=400&width=600",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/chinmaypaliwal1/portfolio",
    demo: "#",
  },
  {
    id: 4,
    title: "Weather App",
    description: "A sleek and responsive weather forecasting application that provides real-time weather updates based on your current location or any city you search for. Built using Next.js and TypeScript, the app fetches accurate data such as temperature, humidity, wind speed, and weather conditions from a reliable weather API. It features a modern UI with Tailwind CSS and stores user preferences using Supabase, offering a seamless and personalized weather-checking experience",
    image: "/Weather.png?height=400&width=600",
    technologies: ["React", "OpenWeather API",],
    github: "https://github.com/chinmaypaliwal1/Weather-app",
    demo: "weather-app-teal-sigma.vercel.app",
  }
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const visibleProjects = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % projects.length
      result.push(projects[index])
    }
    return result
  }

  return (
    <section id="projects" ref={ref} className="relative py-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-green-500 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-blue-500 to-green-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {visibleProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  className="w-full flex-none md:w-1/2 lg:w-1/3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full overflow-hidden border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-800 text-blue-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 bg-gray-800/50 text-white hover:bg-gray-700/50 hover:text-blue-300"
                        asChild
                      >
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-green-500 text-white hover:from-blue-700 hover:to-green-600"
                        asChild
                      >
                        <Link href={project.demo}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 bg-gray-900/50 text-white backdrop-blur-sm hover:bg-gray-800/50 hover:text-blue-400"
              onClick={prevProject}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous project</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 bg-gray-900/50 text-white backdrop-blur-sm hover:bg-gray-800/50 hover:text-blue-400"
              onClick={nextProject}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next project</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
