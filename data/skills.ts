import { Code, Palette, Server, Database, Brain, Cloud } from "lucide-react"

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Flask", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Express.js", level: 75 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Supabase", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "AI/LLM",
    skills: [
      { name: "Lovable", level: 90 },
      { name: "Cursor", level: 85 },
      { name: "Roo-code", level: 80 },
      { name: "Bolt", level: 85 },
      { name: "Claude", level: 90 },
      { name: "V0", level: 95 },
      { name: "ChatGPT", level: 90 },
      { name: "RAG", level: 85 },
      { name: "AI/Agentic", level: 80 },
      { name: "Semantics", level: 75 },
    ],
  },
  {
    title: "Cloud/Tools",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Azure", level: 70 },
      { name: "Git", level: 90 },
      { name: "Postman", level: 85 },
      { name: "VSCode", level: 95 },
    ],
  },
]

export const skillsData = [
  {
    category: "Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    category: "Frontend",
    icon: Palette,
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Flask", "Node.js", "REST APIs", "Express.js"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    category: "AI/LLM",
    icon: Brain,
    skills: ["Lovable", "Cursor", "Roo-code", "Bolt", "Claude", "V0", "ChatGPT", "RAG", "AI/Agentic", "Semantics"],
  },
  {
    category: "Cloud/Tools",
    icon: Cloud,
    skills: ["AWS", "Azure", "Git", "Postman", "VSCode"],
  },
]
