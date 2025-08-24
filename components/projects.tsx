"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { projectsData } from "@/data/projects"
import Image from "next/image"

export default function Projects() {
const projectImages: { [key: string]: string } = {
  "Concrete Echoes Bloom":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promotional-DYqcHXSOPc7gshnk3A39MCkruaHTty.jpeg",
  "SafeMeme ($SAFE)":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Safememe-WW8XgV0vStElKho8DqBVhTVfqX48Iy.jpeg",
  "Unit Converter Pro":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UnitConverter-ktYuKfKlZBDYN0CbT6CVvWsSIhvcQU.jpeg",
  "Bright Edge Digital Visions Marketing Website":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brightedge-7QxiTHT9yN7vzQZeXqhbz349d9zJzC.jpeg",
  "Flexi Convert":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flexiconvert-Ubf6aTkxTRcTwriUkhaRwncGa6jzYL.jpeg",
  "BonkOnBonk ($BONK)":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bonk-8NnHgLkTVt2n06muYO1uySSkFuwqU3.jpeg",
  "NeuraNest":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neuranest-QQUnIS3wzxjiE4Mj8QINzPg8lTyHkc.jpeg",
}


  // 🔥 Remove InsightGuru before rendering
  const filteredProjects = projectsData.filter((p) => p.title !== "InsightGuru")

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0F15]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#6C5CE7]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden backdrop-blur-sm transition-all duration-300 group bg-[#1A1A24]/50 border-[#2A2A3A] hover:bg-[#1A1A24]/70">
                <div className="relative overflow-hidden aspect-video">
                  {projectImages[project.title] ? (
                    <Image
                      src={projectImages[project.title] || "/placeholder.svg"}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-[#6C5CE7]/20 to-[#00D4AA]/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#0B0B10]/60 flex items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-300">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-bold text-white text-xl">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-[#2A2A3A] text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button asChild size="sm" className="bg-[#6C5CE7] hover:bg-[#5A4FCF] text-white">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#2A2A3A] text-gray-300 hover:bg-[#2A2A3A] bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
