'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Server,
  TrendingUp,
  Code,
  Palette,
  Database,
  Zap,
  Shield,
  Layers,
  Users,
  BarChart3,
  Cpu,
  Cloud,
  GitBranch,
  Workflow,
  Lock,
  Gauge,
  CheckCircle,
  Star,
} from 'lucide-react'

export default function SkillsExpertise() {
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

  const expertiseAreas = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Custom Web Development',
      subtitle: 'Modern, Responsive & High-Performance',
      description: 'Building dynamic web applications with cutting-edge technologies that deliver seamless user experiences and drive business growth.',
      color: 'from-blue-600 to-cyan-600',
      technologies: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 92 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 98 },
      ],
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-Browser'],
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Custom Mobile App Development',
      subtitle: 'Cross-Platform & Native Solutions',
      description: 'Creating powerful mobile applications that work flawlessly across iOS and Android platforms with native performance and user experience.',
      color: 'from-purple-600 to-pink-600',
      technologies: [
        { name: 'React Native', level: 88 },
        { name: 'Expo', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'Firebase', level: 90 },
        { name: 'App Store Deploy', level: 85 },
      ],
      features: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Ready'],
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: 'Backend Development',
      subtitle: 'Scalable & Secure Infrastructure',
      description: 'Architecting robust backend systems with secure APIs, efficient databases, and cloud infrastructure that scales with your business needs.',
      color: 'from-green-600 to-emerald-600',
      technologies: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 92 },
      ],
      features: ['RESTful APIs', 'Authentication', 'Database Design', 'Cloud Deployment'],
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Business Solutions',
      subtitle: 'Strategic & Result-Driven',
      description: 'Transforming business processes through custom software solutions that automate workflows, increase efficiency, and drive measurable results.',
      color: 'from-orange-600 to-red-600',
      technologies: [
        { name: 'System Analysis', level: 88 },
        { name: 'Process Automation', level: 90 },
        { name: 'Data Analytics', level: 82 },
        { name: 'Integration APIs', level: 85 },
        { name: 'Business Logic', level: 92 },
      ],
      features: ['Workflow Automation', 'Data Integration', 'Analytics Dashboard', 'Scalable Architecture'],
    },
  ]

  const additionalSkills = [
    { icon: <Code className="h-6 w-6" />, name: 'Clean Code', color: 'text-blue-600' },
    // { icon: <Palette className="h-6 w-6" />, name: 'UI/UX Design', color: 'text-purple-600' },
    // { icon: <Database className="h-6 w-6" />, name: 'Database Design', color: 'text-green-600' },
    { icon: <Zap className="h-6 w-6" />, name: 'Performance Optimization', color: 'text-yellow-600' },
    { icon: <Shield className="h-6 w-6" />, name: 'Security Best Practices', color: 'text-red-600' },
    { icon: <GitBranch className="h-6 w-6" />, name: 'Version Control', color: 'text-indigo-600' },
    // { icon: <Cloud className="h-6 w-6" />, name: 'Cloud Services', color: 'text-cyan-600' },
    // { icon: <Workflow className="h-6 w-6" />, name: 'DevOps & CI/CD', color: 'text-orange-600' },
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
              🛠️ Skills & Expertise
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
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable solutions that transform businesses 
            and deliver exceptional user experiences across all platforms.
          </p>
        </motion.div>

        {/* Main Expertise Areas */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative p-8 rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-transparent overflow-hidden h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${area.color} text-white shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {area.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{area.title}</h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${area.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                        {area.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Technologies & Skills</h4>
                    <div className="space-y-3">
                      {area.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center justify-between">
                          <span className="text-foreground font-medium">{tech.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full bg-gradient-to-r ${area.color}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${tech.level}%` }}
                                transition={{ duration: 1.5, delay: techIndex * 0.1 }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground font-medium w-8">{tech.level}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.features.map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className={`px-3 py-1 rounded-lg text-sm font-medium border bg-gradient-to-r ${area.color} bg-opacity-10 text-foreground hover:scale-105 transition-transform`}
                          style={{
                            backgroundColor: `${area.color.split(' ')[1]}15`,
                            borderColor: `${area.color.split(' ')[1]}30`,
                          }}
                        >
                          <CheckCircle className="h-3 w-3 inline mr-1" />
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${area.color} opacity-5 rounded-full blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Additional Skills & Tools
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 mb-4 ${skill.color}`}>
                  {skill.icon}
                </div>
                <p className="text-foreground font-medium text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl p-12 border border-primary/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Cpu className="h-8 w-8" />, number: '10+', label: 'Technologies Mastered' },
              { icon: <Layers className="h-8 w-8" />, number: '50+', label: 'Projects Completed' },
              { icon: <Users className="h-8 w-8" />, number: '15+', label: 'Happy Clients' },
              { icon: <Star className="h-8 w-8" />, number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </h4>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}