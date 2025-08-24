'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Building2,
  Briefcase,
  DollarSign,
  FileText,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function ContactHero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    projectType: '',
    budgetRange: '',
    projectDetails: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'Custom Software',
    'API Development',
    'Database Design',
    'System Integration',
    'Other'
  ]

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Let\'s Discuss'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        projectType: '',
        budgetRange: '',
        projectDetails: ''
      })
    }, 3000)
  }

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-accent/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Hero Section */}
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
            <motion.div
              className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Amazing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with custom software? Let's discuss your project 
            and explore how I can help you achieve your goals.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Project Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Send className="h-6 w-6" />
                  </motion.div>
                  Start Your Project
                </h2>
                <p className="text-muted-foreground">
                  Tell me about your project and let's bring your vision to life.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name and Email in one row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name - Required */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-accent/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    {/* Email - Required */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-accent/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Name - Optional */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-accent/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                        placeholder="Your company (optional)"
                      />
                    </div>
                  </div>

                  {/* Project Type - Required */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-accent/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground appearance-none cursor-pointer"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Budget Range - Optional */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Budget Range
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-accent/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground appearance-none cursor-pointer"
                      >
                        <option value="">Select budget range (optional)</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Details - Required */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 bg-accent/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                        placeholder="Describe your project requirements, goals, and any specific features you need..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Project Details
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
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
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="inline-flex p-4 bg-green-100 dark:bg-green-900/20 rounded-full mb-4"
                  >
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Side - Get in Touch */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                  >
                    <MessageCircle className="h-6 w-6" />
                  </motion.div>
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Ready to start? Reach out through any of these channels.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-white/50 dark:bg-card/30 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white group-hover:shadow-lg transition-shadow">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">softwaredeveloper@gmail.com</p>
                    <p className="text-sm text-muted-foreground">tutortaquee123@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-white/50 dark:bg-card/30 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white group-hover:shadow-lg transition-shadow">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 9492976113</p>
                    <p className="text-sm text-muted-foreground">+91 8178764456</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-white/50 dark:bg-card/30 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white group-hover:shadow-lg transition-shadow">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Pune, Maharashtra, India</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-white/50 dark:bg-card/30 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white group-hover:shadow-lg transition-shadow">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-green-600/10 rounded-2xl p-6 border border-green-600/20"
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Prefer to chat directly?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant responses on WhatsApp
                  </p>
                </div>
                
                <motion.a
                  href="https://wa.me/919492976113?text=Hi! I'm interested in discussing a project with you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          {/* Main CTA Card */}
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl p-12 border border-primary/20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="relative z-10">
              {/* Animated Icon */}
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
                <Sparkles className="h-8 w-8" />
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Transform
                </span>{' '}
                Your Business?
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 50+ successful businesses that have transformed their operations with custom software solutions. 
                Let's turn your vision into reality and drive measurable growth.
              </p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    4-8 Weeks
                  </div>
                  <p className="text-muted-foreground text-sm">Average Delivery Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <p className="text-muted-foreground text-sm">Ongoing Support</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <motion.button
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    // Scroll to form
                    const form = document.querySelector('form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Start Your Project Now
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

                <motion.a
                  href="https://wa.me/919492976113?text=Hi! I'm ready to discuss my project requirements."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Quick WhatsApp Chat
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
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">No Hidden Costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">6 Months Free Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          
        </motion.div>
      </div>
    </section>
  )
}