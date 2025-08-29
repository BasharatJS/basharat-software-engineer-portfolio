'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Code,
  Smartphone,
  Package,
  Workflow,
  Calculator,
  ArrowRightLeft,
  CheckCircle,
  Star,
  Zap,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export default function WhatICanBuild() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const services = [
    {
      id: 1,
      icon: <Globe className="h-12 w-12" />,
      title: 'Landing Page',
      description: 'Modern, responsive landing page built with Next.js, React, and TypeScript.',
      features: [
        'Progressive Web Apps',
        'Real-time functionality',
        'SEO optimized',
        'Mobile-first design',
      ],
      price: '$150',
      color: 'from-blue-600 to-cyan-600',
      popular: false,
    },
    {
      id: 2,
      icon: <Code className="h-12 w-12" />,
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built with Next.js, React, and TypeScript.',
      features: [
        'Progressive Web Apps',
        'Real-time functionality',
        'SEO optimized',
        'Mobile-first design',
      ],
      price: '$400',
      color: 'from-purple-600 to-pink-600',
      popular: true,
    },
    {
      id: 3,
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps using React Native for iOS and Android.',
      features: [
        'Native performance',
        'Offline functionality',
        'Push notifications',
        'App store deployment',
      ],
      price: '$400',
      color: 'from-green-600 to-emerald-600',
      popular: false,
    },
    {
      id: 4,
      icon: <Package className="h-12 w-12" />,
      title: 'Inventory Management Systems',
      description: 'Replace Excel chaos with real-time inventory tracking and automated workflows.',
      features: [
        'Barcode scanning',
        'Low stock alerts',
        'Supplier management',
        'Reporting dashboard',
      ],
      price: '$300',
      color: 'from-orange-600 to-red-600',
      popular: false,
    },
    {
      id: 5,
      icon: <Workflow className="h-12 w-12" />,
      title: 'Workflow Automation',
      description: 'Streamline business processes with custom workflow management solutions.',
      features: [
        'Process automation',
        'Team collaboration',
        'Task management',
        'Progress tracking',
      ],
      price: '$500',
      color: 'from-indigo-600 to-purple-600',
      popular: true,
    },
    {
      id: 6,
      icon: <Calculator className="h-12 w-12" />,
      title: 'Accounting & Financial Systems',
      description: 'Automated financial management with reporting and compliance features.',
      features: [
        'Automated bookkeeping',
        'Financial reporting',
        'Payroll integration',
        'Tax compliance',
      ],
      price: '$500',
      color: 'from-teal-600 to-cyan-600',
      popular: false,
    },
    {
      id: 7,
      icon: <ArrowRightLeft className="h-12 w-12" />,
      title: 'System Integration & Migration',
      description: 'Seamlessly migrate from legacy systems to modern, scalable solutions.',
      features: [
        'Data migration',
        'API integrations',
        'Legacy system replacement',
        'Zero downtime',
      ],
      price: '$100',
      color: 'from-violet-600 to-purple-600',
      popular: false,
    },
  ]

  return (
    <section id="what-i-can-build" className="py-20 px-4 sm:px-6 lg:px-8">
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
              💼 What I Can Build For You
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
            What I Can Build{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              For You
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive software solutions designed to transform how your business operates. 
            From simple landing pages to complex enterprise systems.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group relative"
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="relative h-full rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-transparent overflow-hidden">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Glowing Border Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`,
                    padding: '2px',
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-card" />
                </div>

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Starting at</span>
                        <span className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Get Started Button */}
                  <Link href="/contact">
                    <motion.button
                      className={`w-full py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden mt-auto bg-gradient-to-r ${service.color} border-2 border-transparent hover:border-white/20`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold">
                        <Zap className="h-4 w-4 text-white" />
                        Get Started
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-white" />
                      </span>
                      {/* Button Shine Effect */}
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
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 left-4 w-20 h-20 bg-gradient-to-r ${service.color} opacity-5 rounded-full blur-xl`}></div>
                <div className={`absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-r ${service.color} opacity-5 rounded-full blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl p-12 border border-primary/20"
        >
          <motion.div
            className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Zap className="h-8 w-8" />
          </motion.div>
          
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Don't See What You Need?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I create custom solutions for unique business challenges. Let's discuss your specific requirements 
            and build something amazing together.
          </p>
          
          <Link href="/contact">
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Discuss Your Project
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
        </motion.div>
      </div>
    </section>
  )
}