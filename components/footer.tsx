"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Siddardhmustplay",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/madakalasiddu/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:siddumadakala2001@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#2A2A3A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-[#6C5CE7] hover:bg-[#6C5CE7]/10 transition-colors duration-200"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <p className="text-gray-500 text-xs mt-2">© 2024 All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
