'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  FileText,
  Code,
  Rocket,
  Clock,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  MessageSquare,
  Settings,
  HeartHandshake,
} from 'lucide-react'

export default function HowWeWorkTogether() {
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

  const workProcess = [
    {
      id: 1,
      icon: <Phone className="h-12 w-12" />,
      title: 'Discovery Call',
      duration: '1-2 hours',
      description: 'We discuss your business needs, current challenges, and project goals.',
      detailedPoints: [
        'Understanding your business objectives',
        'Identifying pain points and challenges',
        'Exploring technical requirements',
        'Setting realistic expectations and timelines',
      ],
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      step: '01',
    },
    {
      id: 2,
      icon: <FileText className="h-12 w-12" />,
      title: 'Proposal & Planning',
      duration: '2-3 days',
      description: 'Detailed project scope, timeline, and technical specifications.',
      detailedPoints: [
        'Comprehensive project documentation',
        'Technical architecture design',
        'Milestone-based timeline creation',
        'Transparent pricing breakdown',
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      step: '02',
    },
    {
      id: 3,
      icon: <Code className="h-12 w-12" />,
      title: 'Development & Testing',
      duration: '4-12 weeks',
      description: 'Agile development with regular updates and milestone reviews.',
      detailedPoints: [
        'Weekly progress updates and demos',
        'Continuous testing and quality assurance',
        'Regular feedback incorporation',
        'Transparent development tracking',
      ],
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      step: '03',
    },
    {
      id: 4,
      icon: <Rocket className="h-12 w-12" />,
      title: 'Launch & Support',
      duration: 'Ongoing',
      description: 'Deployment, training, and ongoing maintenance support.',
      detailedPoints: [
        'Seamless production deployment',
        'User training and documentation',
        'Performance monitoring setup',
        '24/7 ongoing support and maintenance',
      ],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      step: '04',
    },
  ]

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaborative Approach',
      description: 'Your input is valued at every step',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Timely Delivery',
      description: 'Realistic timelines with milestone tracking',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Goal-Focused',
      description: 'Every decision aligns with your business objectives',
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: 'Long-term Partnership',
      description: 'Support that extends beyond project completion',
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
              🤝 Our Process
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
            How We Work{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A transparent, collaborative process that ensures your project success 
            from start to finish with clear communication and measurable results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Lines */}
          <div className="hidden lg:block">
            {/* Horizontal connecting line */}
            <div 
              className="absolute top-32 left-0 right-0 h-0.5 opacity-30"
              style={{
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #22c55e, #f97316)'
              }}
            ></div>
            
            {/* Animated progress line */}
            <motion.div
              className="absolute top-32 left-0 h-0.5 opacity-80"
              style={{
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #22c55e, #f97316)'
              }}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {workProcess.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className="group relative"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 z-20">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center font-bold text-lg shadow-lg`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Main Card */}
                  <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${step.bgColor} border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl overflow-hidden h-full`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className={`w-full h-full bg-gradient-to-br ${step.color}`}></div>
                    </div>

                    {/* Glowing Border Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{
                        background: `linear-gradient(135deg, ${step.color.split(' ')[1]}, ${step.color.split(' ')[3]})`,
                        padding: '2px',
                      }}
                    >
                      <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${step.bgColor}`} />
                    </motion.div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.icon}
                      </motion.div>

                      {/* Title and Duration */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Detailed Points */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                          What We Do:
                        </h4>
                        <div className="space-y-2">
                          {step.detailedPoints.map((point, pointIndex) => (
                            <motion.div
                              key={pointIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: pointIndex * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-foreground text-sm leading-relaxed">{point}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} opacity-20`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>

                  {/* Arrow for larger screens */}
                  {index < workProcess.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-32 -right-4 z-10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                    >
                      <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-primary shadow-lg">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Choose Our Process?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
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
            <MessageSquare className="h-8 w-8" />
          </motion.div>
          
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's schedule a discovery call to discuss your project and see how we can work together 
            to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule Discovery Call
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
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}