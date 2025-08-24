'use client'

import { motion } from 'framer-motion'
import {
  Lightbulb,
  Target,
  Users,
  Rocket,
  Code2,
  Palette,
  TestTube,
  Settings,
  HeartHandshake,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Briefcase,
  Smartphone,
  Layers,
  TrendingUp,
} from 'lucide-react'

export default function MyStoryApproach() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const approach = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Understanding Your Vision',
      description: 'I start by deeply understanding your business goals, target audience, and unique challenges to create solutions that truly matter.',
      color: 'from-blue-600 to-cyan-600',
      step: '01',
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Design & Planning',
      description: 'Creating user-centric designs and robust architecture that ensures scalability, performance, and exceptional user experience.',
      color: 'from-purple-600 to-pink-600',
      step: '02',
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Development & Integration',
      description: 'Building with clean, maintainable code using modern technologies and best practices for optimal performance and security.',
      color: 'from-green-600 to-emerald-600',
      step: '03',
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: 'Testing & Refinement',
      description: 'Rigorous testing across devices and platforms to ensure flawless functionality and seamless user experience.',
      color: 'from-orange-600 to-red-600',
      step: '04',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Launch & Support',
      description: 'Smooth deployment with ongoing support and maintenance to ensure your solution continues to excel and evolve.',
      color: 'from-indigo-600 to-purple-600',
      step: '05',
    },
  ]

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Quality First',
      description: 'Every line of code is written with precision and purpose',
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: 'Client Partnership',
      description: 'Building lasting relationships through transparent communication',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Innovation Driven',
      description: 'Staying ahead with latest technologies and trends',
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Scalable Solutions',
      description: 'Building for today while preparing for tomorrow',
    },
  ]

  const journey = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Fell in love with code and began learning web development fundamentals',
      icon: <Play className="h-6 w-6" />,
      color: 'from-blue-600 to-cyan-600',
    },
    {
      year: '2021',
      title: 'First Professional Projects',
      description: 'Started working with local businesses to create their digital presence',
      icon: <Briefcase className="h-6 w-6" />,
      color: 'from-green-600 to-emerald-600',
    },
    {
      year: '2022',
      title: 'Mobile Development Expansion',
      description: 'Expanded skills to React Native and started building cross-platform apps',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'from-purple-600 to-pink-600',
    },
    {
      year: '2023',
      title: 'Full-Stack Mastery',
      description: 'Became proficient in end-to-end development with modern tech stacks',
      icon: <Layers className="h-6 w-6" />,
      color: 'from-orange-600 to-red-600',
    },
    {
      year: '2024',
      title: 'Helping Businesses Scale',
      description: 'Now helping businesses transform their operations with custom software solutions',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-indigo-600 to-purple-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative inline-block mb-6"
          >
            <motion.p
              className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative z-10"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              📖 My Story & Approach
            </motion.p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            My Story &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Approach
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From curiosity to expertise - Here's how I transform ideas into digital reality through 
            a proven methodology that delivers exceptional results.
          </p>
        </motion.div>

        {/* My Journey Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-3xl font-bold text-foreground mb-12 text-center"
          >
            My Journey
          </motion.h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600"></div>
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Icon */}
                  <motion.div 
                    className="relative z-10 flex-shrink-0"
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-xl border-4 border-background`}
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    {/* Pulsing ring around icon */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-20`}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* My Approach */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-3xl font-bold text-foreground mb-12 text-center"
          >
            My Development Approach
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative p-8 rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-transparent overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Step Number */}
                  <div className="absolute top-6 right-6">
                    <span className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20`}>
                      {step.step}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white shadow-lg mb-6`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-4">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    
                    {/* Arrow for connection (except last item) */}
                    {index < approach.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-muted-foreground opacity-30" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-3xl font-bold text-foreground mb-12 text-center"
          >
            What Drives Me
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl p-12 border border-primary/20"
        >
          <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Bring Your Ideas to Life?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. Your vision + my expertise = extraordinary results.
          </p>
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Let's Start Building
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}