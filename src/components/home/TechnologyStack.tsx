'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Smartphone,
  Flame,
  Palette,
  BookOpen,
  Database,
} from 'lucide-react'

export default function TechnologyStack() {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative inline-block mb-4"
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
              ✨ Latest Technologies ✨
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Technology{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern tools and frameworks I use to build scalable, efficient
            solutions that drive business growth
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Zap className="h-12 w-12" />,
              name: 'Next.js',
              desc: 'Full-stack React framework',
              proficiency: 95,
              color: 'cyan-blue',
              gradientFrom: '#06b6d4',
              gradientTo: '#3b82f6',
            },
            {
              icon: <Smartphone className="h-12 w-12" />,
              name: 'React Native',
              desc: 'Cross-platform mobile apps',
              proficiency: 90,
              color: 'blue-indigo',
              gradientFrom: '#3b82f6',
              gradientTo: '#6366f1',
            },
            {
              icon: <Flame className="h-12 w-12" />,
              name: 'Firebase',
              desc: 'Backend as a service',
              proficiency: 85,
              color: 'orange-red',
              gradientFrom: '#f97316',
              gradientTo: '#ef4444',
            },
            {
              icon: <Palette className="h-12 w-12" />,
              name: 'Tailwind CSS',
              desc: 'Utility-first CSS framework',
              proficiency: 95,
              color: 'teal-cyan',
              gradientFrom: '#14b8a6',
              gradientTo: '#06b6d4',
            },
            {
              icon: <BookOpen className="h-12 w-12" />,
              name: 'TypeScript',
              desc: 'Type-safe JavaScript',
              proficiency: 90,
              color: 'blue-purple',
              gradientFrom: '#2563eb',
              gradientTo: '#7c3aed',
            },
            {
              icon: <Database className="h-12 w-12" />,
              name: 'Supabase',
              desc: 'Backend as a service',
              proficiency: 88,
              color: 'green-emerald',
              gradientFrom: '#10b981',
              gradientTo: '#059669',
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="relative p-8 rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-transparent overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${tech.gradientFrom}15, ${tech.gradientTo}15)`,
                  }}
                />

                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${tech.gradientFrom}, ${tech.gradientTo})`,
                    padding: '2px',
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-card" />
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="inline-flex p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${tech.gradientFrom}, ${tech.gradientTo})`,
                      }}
                    >
                      {tech.icon}
                    </div>

                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-lg"
                      style={{
                        background: `linear-gradient(135deg, ${tech.gradientFrom}, ${tech.gradientTo})`,
                      }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {tech.name}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tech.desc}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Proficiency
                      </span>
                      <motion.span
                        className="text-lg font-bold text-foreground"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        {tech.proficiency}%
                      </motion.span>
                    </div>

                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <motion.div
                          className="h-3 rounded-full relative overflow-hidden shadow-sm"
                          style={{
                            background: `linear-gradient(90deg, ${tech.gradientFrom}, ${tech.gradientTo})`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.proficiency}%` }}
                          transition={{
                            duration: 2,
                            delay: index * 0.2,
                            ease: 'easeOut',
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 1,
                              ease: 'easeInOut',
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute top-8 right-8 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: tech.gradientFrom }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: tech.gradientTo }}
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}