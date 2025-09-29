'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  Download,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const heroContent = [
    {
      title: "Let's Code Your Vision",
      subtitle: 'Turning Ideas into Digital Reality — One Line at a Time',
    },
    {
      title: 'Your Ideas, My Code',
      subtitle:
        'Transforming Business Challenges into Smart Software Solutions',
    },
    {
      title: 'Stop Struggling, Start Scaling',
      subtitle: 'Custom Software That Actually Works for Your Business',
    },
    {
      title: 'Beyond Code, Beyond Ordinary',
      subtitle: 'Exceptional Software for Exceptional Businesses',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [heroContent.length])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
      <div className="max-w-7xl mx-auto text-center w-full">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-4"
        >
          <div className="space-y-2 w-full">
            <div className="relative h-20 sm:h-24 lg:h-28 flex items-center justify-center overflow-visible w-full">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentSlide}
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    duration: 0.8,
                  }}
                  className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight text-center px-2 whitespace-nowrap"
                >
                  <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {heroContent[currentSlide].title}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="relative h-16 sm:h-18 flex items-center justify-center overflow-hidden w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    duration: 0.8,
                    delay: 0.1,
                  }}
                  className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed text-center px-4"
                >
                  {heroContent[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <a
              href="https://github.com/BasharatJS?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-primary/20 bg-card/50 backdrop-blur-sm text-foreground rounded-xl font-medium hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:text-white transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/md-basharat-taquee-84a6a922b"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-primary/20 bg-card/50 backdrop-blur-sm text-foreground rounded-xl font-medium hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:text-white transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~018d3356e7952c4294?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-primary/20 bg-card/50 backdrop-blur-sm text-foreground rounded-xl font-medium hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:text-white transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              Upwork Profile
            </a>
            <a
              href="/Basharat-Software-Engineer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-primary/20 bg-card/50 backdrop-blur-sm text-foreground rounded-xl font-medium hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:text-white transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto"
          >
            <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 border border-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 rounded-2xl"></div>
              <h3 className="relative text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                50+
              </h3>
              <p className="relative text-muted-foreground mt-3 font-medium">
                Projects Delivered
              </p>
            </div>
            <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 border border-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 rounded-2xl"></div>
              <h3 className="relative text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                15+
              </h3>
              <p className="relative text-muted-foreground mt-3 font-medium">
                Happy Clients
              </p>
            </div>
            <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 border border-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 rounded-2xl"></div>
              <h3 className="relative text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                5+
              </h3>
              <p className="relative text-muted-foreground mt-3 font-medium">
                Years Experience
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}