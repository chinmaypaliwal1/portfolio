"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative border-t border-gray-800 bg-gray-950 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white">Chinmay Paliwal</h3>
            <p className="mt-1 text-sm text-gray-400">Full Stack Developer</p>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/chinmaypaliwal1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-gray-400 transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/chinmay-paliwal-592079232/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-gray-400 transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>

            <motion.a
              href="mailto:chinmaypaliwal96@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-gray-400 transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-gray-400 transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
          >
            <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            <span className="sr-only">Back to top</span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Chinmay Paliwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
