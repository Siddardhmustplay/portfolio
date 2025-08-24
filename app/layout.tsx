import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Siddu Reddy Madakala - Full-Stack Developer",
  description:
    "Building scalable, user-centric apps with modern stacks. Full-Stack Software Developer specializing in React, Flask, and AI integration.",
  keywords: "Full-Stack Developer, React, Flask, Python, JavaScript, AI, Machine Learning, Portfolio",
  authors: [{ name: "Siddu Reddy Madakala" }],
  creator: "Siddu Reddy Madakala",
  openGraph: {
    title: "Siddu Reddy Madakala - Full-Stack Developer",
    description: "Building scalable, user-centric apps with modern stacks.",
    url: "https://siddumadakala.vercel.app",
    siteName: "Siddu Reddy Madakala Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddu Reddy Madakala - Full-Stack Developer",
    description: "Building scalable, user-centric apps with modern stacks.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="bg-[#0B0B10] text-white overflow-x-hidden">{children}</body>
    </html>
  )
}
