'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  MessageCircle,
  Code2,
  Shield,
  Award,
  TrendingUp,
  Clock,
  User,
  Smartphone,
  HeartHandshake,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export default function WhyWorkWithMe() {
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

  const benefits = [
    {
      id: 1,
      icon: <Zap className="h-12 w-12" />,
      title: 'Fast Delivery',
      description: 'Most projects completed in 4-8 weeks with regular milestone updates.',
      details: [
        'Rapid prototyping and development',
        'Weekly milestone demonstrations',
        'Agile development methodology',
        'Quick iteration and feedback cycles',
      ],
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10',
      highlight: '4-8 weeks',
    },
    {
      id: 2,
      icon: <MessageCircle className="h-12 w-12" />,
      title: 'Direct Communication',
      description: 'Work directly with me, the founder. No middlemen or account managers.',
      details: [
        'Direct access to the developer',
        'Clear and transparent communication',
        'Real-time project discussions',
        'Personal attention to your project',
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10',
      highlight: 'No Middlemen',
    },
    {
      id: 3,
      icon: <Code2 className="h-12 w-12" />,
      title: 'Modern Technology',
      description: 'Latest frameworks and best practices ensure your solution stays current.',
      details: [
        'Next.js, React, and TypeScript',
        'Modern UI/UX design principles',
        'Performance optimization techniques',
        'Future-proof architecture',
      ],
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10',
      highlight: 'Latest Tech',
    },
    {
      id: 4,
      icon: <Shield className="h-12 w-12" />,
      title: 'Ongoing Support',
      description: '6 months of free support and maintenance included with every project.',
      details: [
        'Bug fixes and updates included',
        'Performance monitoring',
        'Security updates and patches',
        'Feature enhancement discussions',
      ],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10',
      highlight: '6 Months Free',
    },
    {
      id: 5,
      icon: <Award className="h-12 w-12" />,
      title: 'Proven Track Record',
      description: '50+ successful projects with measurable business impact and ROI.',
      details: [
        'Diverse industry experience',
        'Measurable business results',
        'Client satisfaction guaranteed',
        'Portfolio of successful launches',
      ],
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10',
      highlight: '50+ Projects',
    },
    {
      id: 6,
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, from startup to enterprise scale.',
      details: [
        'Scalable architecture design',
        'Performance optimization',
        'Future expansion planning',
        'Enterprise-ready solutions',
      ],
      color: 'from-teal-600 to-cyan-600',
      bgColor: 'from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10',
      highlight: 'Enterprise Scale',
    },
  ]

  const stats = [
    { icon: <Clock className="h-8 w-8" />, number: '5+', label: 'Years Experience' },
    { icon: <User className="h-8 w-8" />, number: '15+', label: 'Happy Clients' },
    { icon: <Award className="h-8 w-8" />, number: '50+', label: 'Projects Delivered' },
    { icon: <Star className="h-8 w-8" />, number: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              ⭐ Why Choose Me
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
            Why Work{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              With Me?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Over 4 years of experience helping SMEs transform their operations 
            with custom software solutions that deliver real business results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
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
              <div className={`relative h-full rounded-3xl bg-gradient-to-br ${benefit.bgColor} border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl overflow-hidden`}>
                
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 bg-gradient-to-r ${benefit.color} text-white text-xs font-bold rounded-full`}>
                    {benefit.highlight}
                  </span>
                </div>

                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color.split(' ')[1]}, ${benefit.color.split(' ')[3]})`,
                    padding: '2px',
                  }}
                >
                  <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${benefit.bgColor}`} />
                </motion.div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${benefit.color}`}></div>
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {benefit.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Key Benefits:
                    </h4>
                    <div className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm leading-relaxed">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className={`absolute top-6 left-6 w-6 h-6 rounded-full bg-gradient-to-r ${benefit.color} opacity-20`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                <motion.div
                  className={`absolute bottom-6 right-6 w-4 h-4 rounded-full bg-gradient-to-r ${benefit.color} opacity-30`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 rounded-3xl p-12 border border-primary/10"
        >
          <motion.div
            className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="h-8 w-8" />
          </motion.div>
          
          <blockquote className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-relaxed">
            "Working with Basharat transformed our business operations completely. 
            From manual processes to automated workflows - efficiency increased by{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              80%
            </span>
            !"
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              SA
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Dr. Sarah Ahmed</p>
              <p className="text-muted-foreground text-sm">Clinic Owner, Wellness Medical Center</p>
            </div>
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
            <HeartHandshake className="h-8 w-8" />
          </motion.div>
          
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 50+ successful businesses that have transformed their operations with custom software solutions. 
            Let's discuss your project today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="h-5 w-5" />
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

            <motion.button
              className="px-10 py-4 border-2 border-primary/20 bg-card/50 backdrop-blur-sm text-foreground rounded-xl font-medium hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600/10 hover:via-purple-600/10 hover:to-indigo-600/10 transition-all hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}