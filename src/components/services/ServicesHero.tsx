'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Code,
  Smartphone,
  Database,
  Users,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import Link from 'next/link'

export default function ServicesHero() {
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

  const floatingIcons = [
    { icon: <Code className="h-8 w-8" />, position: 'top-10 left-10', delay: 0, color: 'from-blue-600 to-cyan-600' },
    { icon: <Smartphone className="h-8 w-8" />, position: 'top-20 right-16', delay: 0.5, color: 'from-purple-600 to-pink-600' },
    { icon: <Database className="h-8 w-8" />, position: 'bottom-32 left-20', delay: 1, color: 'from-green-600 to-emerald-600' },
    { icon: <Shield className="h-8 w-8" />, position: 'bottom-20 right-10', delay: 1.5, color: 'from-orange-600 to-red-600' },
    { icon: <Users className="h-8 w-8" />, position: 'top-32 left-1/3', delay: 2, color: 'from-indigo-600 to-purple-600' },
    { icon: <Rocket className="h-8 w-8" />, position: 'bottom-40 right-1/3', delay: 2.5, color: 'from-teal-600 to-cyan-600' },
  ]

  const benefits = [
    'Modern Technology Stack',
    'Scalable Solutions',
    'Industry Expertise',
    '24/7 Support',
    'Rapid Development',
    'Cost-Effective',
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 relative overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: item.delay }}
        >
          <motion.div
            className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.5,
            }}
          >
            {item.icon}
          </motion.div>
        </motion.div>
      ))}

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="relative inline-block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative inline-block"
            >
              <motion.p
                className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative z-10 px-4 py-2"
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
                🚀 Professional Services
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
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight"
          >
            Custom Software{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Transform your business operations with modern, scalable software solutions 
            tailored to your specific needs and industry requirements.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link href="/contact">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="h-6 w-6" />
                  Start Your Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
            </Link>

            <motion.a
              href="#what-i-can-build"
              className="px-10 py-4 border-2 border-primary/20 bg-card/50 backdrop-blur-sm text-foreground rounded-xl font-medium hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600/10 hover:via-purple-600/10 hover:to-indigo-600/10 transition-all hover:scale-105 hover:shadow-lg text-lg inline-block text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('what-i-can-build');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Our Services
            </motion.a>
          </motion.div>

         
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}