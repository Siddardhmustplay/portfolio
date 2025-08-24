"use client"

import { motion } from "framer-motion"
import { Download, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C5CE7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D1B2]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFB020]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="gradient-text">Siddu Reddy</span>
              <br />
              <span className="text-white">Madakala</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-[#A5AEC2] mb-8 font-inter"
            >
              Full-Stack Software Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-[#A5AEC2] mb-12 max-w-2xl font-inter"
            >
              Building scalable, user-centric apps with modern stacks. Specializing in React, Flask, and AI integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6C5CE7] via-[#00D1B2] to-[#FFB020] hover:opacity-90 text-white font-medium px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6C5CE7]/25"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6C5CE7] via-[#00D1B2] to-[#FFB020] rounded-3xl blur-xl opacity-30" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20240125135442-D3ggfcWXh7EYDWmgUq2jqvWoUPXsUP.jpeg"
                alt="Siddu Reddy Madakala"
                width={400}
                height={400}
                className="relative rounded-3xl shadow-2xl shadow-[#6C5CE7]/20 object-cover w-80 h-80 lg:w-96 lg:h-96"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-[#6C5CE7] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-[#6C5CE7] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
