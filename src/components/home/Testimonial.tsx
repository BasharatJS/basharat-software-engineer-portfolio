'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function Testimonial() {
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
      <div className="max-w-7xl mx-auto">
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
              ⭐ Client Testimonials ⭐
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
            What Clients{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - Here's what business owners say
            about working with me.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              name: 'Dr. Sarah Ahmed',
              role: 'Clinic Owner',
              company: 'Wellness Medical Center',
              rating: 5,
              text: 'Basharat transformed our appointment system completely. From manual booking to a smart digital solution - our efficiency increased by 80%. Highly recommended!',
              avatar: '👩‍⚕️',
              gradientFrom: '#3b82f6',
              gradientTo: '#06b6d4',
            },
            {
              name: 'Ahmad Khan',
              role: 'Restaurant Owner',
              company: 'Biryani Palace',
              rating: 5,
              text: 'The ordering system Basharat built for us revolutionized our business. Online orders, inventory tracking, everything automated. Sales increased 150%!',
              avatar: '👨‍🍳',
              gradientFrom: '#f97316',
              gradientTo: '#ef4444',
            },
            {
              name: 'Fatima Ali',
              role: 'Hospital Administrator',
              company: 'City Care Hospital',
              rating: 5,
              text: "Patient queue management was a nightmare before. Now with Basharat's solution, we manage 200+ patients daily without chaos. Amazing work!",
              avatar: '👩‍💼',
              gradientFrom: '#10b981',
              gradientTo: '#059669',
            },
            {
              name: 'Muhammad Hassan',
              role: 'Manufacturing CEO',
              company: 'Textile Solutions Ltd',
              rating: 5,
              text: 'Excel sheets to real-time ERP system - Basharat delivered beyond expectations. Production tracking is now seamless and automated.',
              avatar: '👨‍💼',
              gradientFrom: '#8b5cf6',
              gradientTo: '#7c3aed',
            },
            {
              name: 'Dr. Aisha Malik',
              role: 'Dental Practice Owner',
              company: 'Smile Care Clinic',
              rating: 5,
              text: "Professional, reliable, and innovative! Our patient management system works flawlessly. Basharat's support is exceptional too.",
              avatar: '👩‍⚕️',
              gradientFrom: '#06b6d4',
              gradientTo: '#0891b2',
            },
            {
              name: 'Omar Sheikh',
              role: 'Tech Startup Founder',
              company: 'InnovateHub',
              rating: 5,
              text: 'Working with Basharat was a game-changer. Clean code, modern design, and delivered on time. Will definitely work together again!',
              avatar: '👨‍💻',
              gradientFrom: '#ec4899',
              gradientTo: '#be185d',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
              whileHover={{
                scale: 1.03,
                rotateY: 2,
                z: 50,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="relative p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500 border border-border hover:border-transparent overflow-hidden h-full">
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
                    padding: '1px',
                  }}
                >
                  <div className="w-full h-full rounded-2xl bg-card" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <div
                      className="inline-flex p-2 rounded-lg text-white text-xl"
                      style={{
                        background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
                      }}
                    >
                      "
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-yellow-400 text-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
                      }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {testimonial.avatar}
                    </motion.div>

                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p
                        className="text-xs font-medium"
                        style={{ color: testimonial.gradientFrom }}
                      >
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-20"
                  style={{ backgroundColor: testimonial.gradientFrom }}
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how I can help you replace manual processes with
            smart, automated solutions that scale with your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get a Free Consultation</span>
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
              href="https://wa.me/919492976113?text=Hello!%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20project.%20Can%20we%20schedule%20a%20consultation%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Me
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: 'easeInOut',
                }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}