'use client'

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Open email client with pre-filled data
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Message from ${formData.name} (${formData.email}):\n\n${formData.message}`
    window.location.href = `mailto:chinmaypaliwal1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

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
    <section id="contact" ref={ref} className="relative py-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-green-500 blur-[100px]" />
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-blue-500 to-green-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Feel free to reach out if you have any questions or want to work together.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-500 text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="mt-1 text-gray-300">chinmaypaliwal96@gmail.com</p>
                <a
                  href="mailto:chinmaypaliwal1@gmail.com"
                  className="mt-1 inline-block text-sm text-blue-400 hover:text-blue-300"
                >
                  Send an email
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-500 text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="mt-1 text-gray-300">+91 6367857396</p>
                <a href="tel:+11234567890" className="mt-1 inline-block text-sm text-blue-400 hover:text-blue-300">
                  Give me a call
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-500 text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="mt-1 text-gray-300">Udaipur Rajasthan, India</p>
                <p className="mt-1 text-sm text-gray-400">Available for remote work worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  className="min-h-[120px] border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <Button
                type="submit"
                className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-green-500 text-white transition-all hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-700 to-green-600 opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
