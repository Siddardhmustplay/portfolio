"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { experienceData } from "@/data/experience"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-[#6C5CE7]">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey through various roles and projects that have shaped my expertise in software development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-[#1A1A24]/50 border-[#2A2A3A] backdrop-blur-sm hover:bg-[#1A1A24]/70 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{experience.position}</h3>
                    <p className="text-[#6C5CE7] font-medium mb-2">{experience.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-400">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">{experience.description}</p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-[#2A2A3A] text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
