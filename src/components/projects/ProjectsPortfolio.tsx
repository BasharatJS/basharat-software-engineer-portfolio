'use client'

import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Code,
  Smartphone,
  Globe,
  Palette,
  Database,
  Zap,
  Star,
  Calendar,
  Users,
  Award,
  ArrowRight,
  Building,
  ShoppingBag,
  Utensils,
  MapPin,
  Camera,
  Heart,
} from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPortfolio() {
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

  const projects = [
    // Featured Projects (First 4)
    {
      id: 1,
      title: 'EvonChat - Real-time Chat Application',
      category: 'Communication',
      type: 'Featured',
      description: 'Modern real-time chat application with secure authentication, message synchronization, and responsive design for seamless communication experience.',
      fullDescription: 'A sophisticated real-time chat application built with modern web technologies. Features secure Firebase authentication, real-time message synchronization, responsive design, and intuitive user interface for seamless communication.',
      image: 'from-emerald-500 to-teal-500',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript', 'Real-time Database'],
      gradientFrom: '#10b981',
      gradientTo: '#14b8a6',
      icon: '💬',
      status: 'Completed',
      duration: '2.5 months',
      link: 'https://evon-chat-app.vercel.app/auth/login',
      features: ['Real-time Messaging', 'Secure Authentication', 'Responsive Design', 'TypeScript Support'],
    },
    {
      id: 2,
      title: 'Dental Surgeon Appointment Booking',
      category: 'Healthcare',
      type: 'Featured',
      description: 'A modern Dental Surgeon Appointment Booking App built with Next.js 15, Tailwind CSS v4.1, and Framer Motion. Enables patients to easily schedule, manage, and track appointments.',
      fullDescription: 'A sophisticated dental appointment booking system featuring clean UI, smooth animations, and comprehensive appointment management. Patients can easily schedule appointments, track their booking history, and receive automated reminders for upcoming visits.',
      image: 'from-blue-500 to-cyan-500',
      tech: ['Next.js 15', 'Tailwind CSS v4.1', 'Framer Motion', 'Appointment Management', 'Responsive Design'],
      gradientFrom: '#3b82f6',
      gradientTo: '#06b6d4',
      icon: '🦷',
      status: 'Completed',
      duration: '2.5 months',
      link: 'https://dental-surgeon-appointment-booking.vercel.app/',
      features: ['Easy Scheduling', 'Appointment Tracking', 'Clean UI', 'Smooth Animations'],
    },
    {
      id: 3,
      title: 'Family Homeo Clinic Appointment Booking',
      category: 'Healthcare',
      type: 'Featured',
      description: 'Comprehensive homeopathic clinic appointment booking system with patient management, treatment history, and seamless appointment scheduling for holistic healthcare.',
      fullDescription: 'A specialized appointment booking system designed for homeopathic clinics, featuring patient treatment history, holistic health assessments, and integrated appointment management for comprehensive homeopathic care.',
      image: 'from-green-500 to-emerald-500',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Patient Management', 'Treatment History'],
      gradientFrom: '#10b981',
      gradientTo: '#059669',
      icon: '🌿',
      status: 'Completed',
      duration: '3 months',
      link: 'https://homoe-clinic-appointment-booking-ap.vercel.app/',
      features: ['Homeopathic Specialization', 'Treatment History', 'Patient Management', 'Health Assessments'],
    },
    {
      id: 4,
      title: 'Patient Queue Management System',
      category: 'Healthcare',
      type: 'Featured',
      description: 'Smart queue management with real-time updates, priority handling, and waiting time predictions to optimize patient flow.',
      fullDescription: 'An intelligent queue management system that transforms the patient experience in healthcare facilities. The system provides real-time updates, dynamic queue optimization, and predictive wait time calculations.',
      image: 'from-green-500 to-emerald-500',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'Real-time Updates', 'Analytics'],
      gradientFrom: '#10b981',
      gradientTo: '#059669',
      icon: '🏥',
      status: 'Completed',
      duration: '2.5 months',
      link: 'https://patient-queue-management-system.vercel.app/',
      features: ['Smart Queuing', 'Real-time Updates', 'Priority Management', 'Wait Time Prediction'],
    },
    {
      id: 5,
      title: 'Biryani Order & Sales Management',
      category: 'Restaurant',
      type: 'Featured',
      description: 'Complete restaurant management system with online ordering, inventory tracking, sales analytics, and customer management.',
      fullDescription: 'A full-featured restaurant management platform that handles everything from online ordering to inventory management. Includes customer loyalty programs, detailed analytics, and multi-location support.',
      image: 'from-orange-500 to-red-500',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'Payment Gateway', 'Analytics'],
      gradientFrom: '#f97316',
      gradientTo: '#ef4444',
      icon: '🍛',
      status: 'Completed',
      duration: '4 months',
      link: 'https://biryani-classical-sales-app.vercel.app',
      features: ['Online Ordering', 'Inventory Management', 'Sales Analytics', 'Customer Management'],
    },
    // Additional Projects
    {
      id: 6,
      title: 'Moon Shine Interiors',
      category: 'Interior Design',
      type: 'Business Website',
      description: 'Moon Shine Interior is a premium interior design company specializing in luxury residential and commercial spaces.',
      fullDescription: 'A sophisticated website for a premium interior design company, showcasing their portfolio of luxury residential and commercial projects. Features elegant galleries, service showcases, and client testimonials with smooth animations.',
      image: 'from-purple-500 to-indigo-500',
      tech: ['Next.js', 'Framer Motion', 'CSS3', 'NoCodeAPI', 'JavaScript'],
      gradientFrom: '#8b5cf6',
      gradientTo: '#6366f1',
      icon: '🏡',
      status: 'Completed',
      duration: '2 months',
      link: 'https://interior-designer-web.vercel.app/',
      features: ['Luxury Portfolio', 'Smooth Animations', 'Responsive Design', 'Client Gallery'],
    },
    {
      id: 7,
      title: 'Bengal Label Manufacturing',
      category: 'Manufacturing',
      type: 'Corporate Website',
      description: 'Bengal Label Manufacturing is a leading textile manufacturing company specializing in high-quality labels and packaging solutions for the fashion industry.',
      fullDescription: 'A comprehensive corporate website for a leading textile manufacturing company. Showcases their manufacturing capabilities, product catalog, and industry expertise with interactive elements and location mapping.',
      image: 'from-teal-500 to-cyan-500',
      tech: ['React.js', 'CSS3', 'JavaScript', 'Framer Motion', 'Google Maps'],
      gradientFrom: '#14b8a6',
      gradientTo: '#06b6d4',
      icon: '🏭',
      status: 'Completed',
      duration: '2.5 months',
      link: 'https://www.bengallabel.in/',
      features: ['Product Catalog', 'Manufacturing Process', 'Google Maps Integration', 'Responsive Design'],
    },
    {
      id: 8,
      title: 'Evonnexis - Web & Mobile Development',
      category: 'Software Company',
      type: 'Company Website',
      description: 'A comprehensive software development company website showcasing modern web solutions, innovative technologies, and professional services with elegant design and smooth animations.',
      fullDescription: 'A modern and professional website for a software development company, featuring service portfolios, technology showcases, team profiles, and client success stories with interactive animations.',
      image: 'from-indigo-500 to-purple-500',
      tech: ['Next.js', 'Framer Motion', 'CSS3', 'JavaScript', 'Google Maps'],
      gradientFrom: '#6366f1',
      gradientTo: '#8b5cf6',
      icon: '💻',
      status: 'Completed',
      duration: '3 months',
      link: 'https://www.evonnexis.com/',
      features: ['Service Showcase', 'Technology Portfolio', 'Team Profiles', 'Client Testimonials'],
    },
    {
      id: 9,
      title: 'Om Vatika Guest House - Banquet Booking',
      category: 'Hospitality',
      type: 'Booking System',
      description: 'Developed a responsive and modern web application for Ohm Vatika Guest House to streamline banquet hall bookings. Built using Next.js 15, Tailwind CSS v4.1, and Framer Motion.',
      fullDescription: 'A modern banquet booking system that allows users to check availability, view banquet details, and send booking inquiries. Features clean UI, smooth transitions, and mobile-first design to enhance user experience.',
      image: 'from-rose-500 to-pink-500',
      tech: ['Next.js 15', 'Tailwind CSS v4.1', 'Framer Motion', 'Responsive Design', 'Next.js'],
      gradientFrom: '#f43f5e',
      gradientTo: '#ec4899',
      icon: '🏨',
      status: 'Completed',
      duration: '2 months',
      link: 'https://hotel-booking-banquet-app.vercel.app/',
      features: ['Availability Check', 'Banquet Details', 'Booking Inquiries', 'Mobile-First Design'],
    },
    {
      id: 10,
      title: 'Dayprise - Social Network App',
      category: 'Social Media',
      type: 'Mobile Application',
      description: 'DAYPRISE is a unique application which gives real emotions and a meaning to the word social network based on time, where each event rhymes with a unique experience.',
      fullDescription: 'An innovative social networking mobile application that focuses on time-based events and experiences. Users can share birthdays, weddings, graduations, outings with friends, and career milestones in a meaningful way.',
      image: 'from-violet-500 to-purple-500',
      tech: ['React Native', 'React Hooks', 'Redux', 'TypeScript', 'Cross-platform Development'],
      gradientFrom: '#8b5cf6',
      gradientTo: '#7c3aed',
      icon: '📱',
      status: 'Completed',
      duration: '5 months',
      link: 'https://play.google.com/store/apps/details?id=com.myoptimind.dayprise&hl=en_IN',
      features: ['Event Sharing', 'Time-based Social Network', 'Cross-platform', 'Real-time Updates'],
    },
  ]

  const categories = ['All', 'Featured', 'Healthcare', 'Restaurant', 'Business Website', 'Corporate Website', 'Company Website', 'Booking System', 'Mobile Application']

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
              🚀 My Projects Portfolio
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
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Projects{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover my journey through innovative projects that solve real-world problems. 
            From healthcare solutions to business automation, each project showcases technical excellence and user-centric design.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: <Code className="h-6 w-6" />, number: '10', label: 'Total Projects', color: 'from-blue-600 to-cyan-600' },
            { icon: <Users className="h-6 w-6" />, number: '15+', label: 'Happy Clients', color: 'from-purple-600 to-pink-600' },
            { icon: <Calendar className="h-6 w-6" />, number: '4', label: 'Years Experience', color: 'from-green-600 to-emerald-600' },
            { icon: <Award className="h-6 w-6" />, number: '100%', label: 'Success Rate', color: 'from-orange-600 to-red-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                {stat.icon}
              </div>
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
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
              <div className="relative rounded-3xl bg-card shadow-xl hover:shadow-2xl transition-all duration-500 border border-border hover:border-transparent overflow-hidden h-full">
                {/* Featured Badge */}
                {project.type === 'Featured' && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                    {project.status}
                  </span>
                </div>

                {/* Glowing Border Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                    padding: '2px',
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-card" />
                </div>

                {/* Project Image/Hero Section */}
                <div className="relative">
                  <div className={`aspect-[16/10] bg-gradient-to-br ${project.image} relative overflow-hidden`}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Floating Icon */}
                    <motion.div
                      className="absolute top-6 left-6 text-6xl"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {project.icon}
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute bottom-6 left-6">
                      <span
                        className="px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg backdrop-blur-sm"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradientFrom}CC, ${project.gradientTo}CC)`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-6 right-6">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="relative z-10 p-8">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 text-sm">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Key Features
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-300"
                          style={{
                            backgroundColor: `${project.gradientFrom}15`,
                            borderColor: `${project.gradientFrom}30`,
                            color: project.gradientFrom,
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: project.gradientFrom,
                            color: 'white',
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 rounded-xl font-semibold text-white text-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden block text-center"
                      style={{
                        background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </span>
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/BasharatJS?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-border bg-card hover:bg-accent transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                    </motion.a>
                  </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
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
            <Zap className="h-8 w-8" />
          </motion.div>
          
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          
          <Link href="/contact">
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
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
        </motion.div>
      </div>
    </section>
  )
}