"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Server, Globe, Layers, GitBranch, Terminal, Cpu } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="h-6 w-6" />,
    items: [
      { name: "React.js", level: 60 },
      { name: "Next.js", level: 50 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: [
      { name: "Node.js", level: 50 },
      { name: "Express.js", level: 45 }
    ],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: [
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    category: "Other",
    icon: <Code className="h-6 w-6" />,
    items: [
      { name: "Git", level: 90 },
      { name: "DSA", level: 55 }
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" ref={ref} className="relative py-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-blue-500 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            My <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-blue-500 to-green-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Here's a comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-500 text-white">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + groupIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800 bg-gray-900/30 p-6 text-center backdrop-blur-sm">
            <Layers className="mb-3 h-10 w-10 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Full Stack</h3>
            <p className="mt-2 text-sm text-gray-400">End-to-end application development</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800 bg-gray-900/30 p-6 text-center backdrop-blur-sm">
            <GitBranch className="mb-3 h-10 w-10 text-green-400" />
            <h3 className="text-lg font-bold text-white">Version Control</h3>
            <p className="mt-2 text-sm text-gray-400">Git workflow and collaboration</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800 bg-gray-900/30 p-6 text-center backdrop-blur-sm">
            <Terminal className="mb-3 h-10 w-10 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Command Line</h3>
            <p className="mt-2 text-sm text-gray-400">Efficient terminal operations</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800 bg-gray-900/30 p-6 text-center backdrop-blur-sm">
            <Cpu className="mb-3 h-10 w-10 text-green-400" />
            <h3 className="text-lg font-bold text-white">Problem Solving</h3>
            <p className="mt-2 text-sm text-gray-400">Data structures and algorithms</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
