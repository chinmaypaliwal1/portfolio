"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown, ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Hi, I'm Chinmay Paliwal – a Full Stack Developer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 md:px-8">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-green-500 blur-[100px]" />
      </div>

      <motion.div
        className="z-10 flex max-w-4xl flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {text}
          <span className="animate-blink ml-1 inline-block h-10 w-1 bg-blue-400"></span>
        </motion.h1>

        <motion.p
          className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Passionate about building beautiful, functional, and user-friendly web applications with modern technologies.
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="/resumeChinmaypaliwal.pdf" download>
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-500 px-8 text-white transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FileDown className="h-5 w-5" />
              Download Resume
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-700 to-green-600 opacity-0 transition-opacity group-hover:opacity-100"></span>
          </Button>
        </a>


          <Button
            variant="outline"
            size="lg"
            className="border-gray-700 bg-gray-900/50 text-white backdrop-blur-sm hover:bg-gray-800/50"
            asChild
          >
            <Link href="#projects">View My Work</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <Link href="#about" className="flex flex-col items-center text-gray-400 transition-colors hover:text-blue-400">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </Link>
      </motion.div>
    </section>
  )
}
