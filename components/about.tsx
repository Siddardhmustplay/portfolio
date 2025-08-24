"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Code, Zap } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "@/components/count-up"

const highlights = [
  { icon: Calendar, label: "Years Experience", value: 1, suffix: "+" },
  { icon: Code, label: "Projects Completed", value: 7, suffix: "+" },
  { icon: Zap, label: "Technologies", value: 15, suffix: "+" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-[#A5AEC2] mb-8"
            >
              <MapPin className="h-5 w-5 text-[#6C5CE7]" />
              <span className="font-inter">Hyderabad, India</span>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass rounded-3xl p-8"
            >
              <p className="text-lg text-[#A5AEC2] leading-relaxed font-inter mb-6">
                I'm a passionate Full-Stack Software Developer with expertise in building scalable, user-centric
                applications. Currently working at Must Play Games Pvt Ltd, I specialize in Flask APIs, React
                integration, and database optimization.
              </p>

              <p className="text-lg text-[#A5AEC2] leading-relaxed font-inter mb-6">
                My journey in software development has led me to work with cutting-edge technologies including AI/LLM
                integration, where I've built intelligent data assistants and implemented semantic search solutions
                using GPT-3.5 embeddings.
              </p>

              <p className="text-lg text-[#A5AEC2] leading-relaxed font-inter">
                I'm driven by the challenge of solving complex problems and creating impactful solutions that enhance
                user experiences and drive business growth.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="glass rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-tr from-[#6C5CE7] to-[#00D1B2]">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold font-space-grotesk text-white">
                        <CountUp end={item.value} duration={2} />
                      </span>
                      <span className="text-2xl font-bold font-space-grotesk text-[#6C5CE7]">{item.suffix}</span>
                    </div>
                    <p className="text-[#A5AEC2] font-inter">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
