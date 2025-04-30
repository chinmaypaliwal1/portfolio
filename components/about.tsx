"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" ref={ref} className="relative py-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-500 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            About <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-blue-500 to-green-500"></div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-gray-800 shadow-xl">
              <Image src="/myself.jpeg?height=320&width=320" alt="Chinmay Paliwal" fill className="object-cover" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-green-500/20"></div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            <motion.h3 variants={itemVariants} className="mb-4 text-2xl font-bold text-white">
              Full Stack Developer
            </motion.h3>

            <motion.p variants={itemVariants} className="mb-6 text-gray-300">
              I'm a passionate Full Stack Developer with 1 year of professional experience at Kiwi Commerce, where I've
              honed my skills in building robust and scalable web applications.
            </motion.p>

            <motion.p variants={itemVariants} className="mb-6 text-gray-300">
              I specialize in modern JavaScript frameworks like React.js and Next.js for frontend development, and
              Node.js with Express.js for backend services. I'm also proficient in database technologies like MongoDB.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="mb-2 font-semibold text-blue-400">Experience</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-400">•</span>
                    <span>1 Year at Kiwi Commerce</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-blue-400">Education</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-400">•</span>
                    <span>Computer Science</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
