'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  isLoading: boolean
}

const loadingQuotes = [
  { percent: 0, text: 'Initializing...' },
  { percent: 20, text: 'Software Engineer' },
  { percent: 40, text: 'Full Stack Developer' },
  { percent: 60, text: 'Problem Solver' },
  { percent: 80, text: 'Code Craftsman' },
  { percent: 100, text: 'Ready to Launch!' },
]

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [percentage, setPercentage] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(loadingQuotes[0].text)

  useEffect(() => {
    if (isLoading) {
      setPercentage(0)
      setCurrentQuote(loadingQuotes[0].text)

      // Update percentage every 1 second (6 seconds total / 5 intervals = 1.2s per 20%)
      const interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          const newPercent = prev + 20

          // Update quote based on percentage
          const quote = loadingQuotes.find((q) => q.percent === newPercent)
          if (quote) {
            setCurrentQuote(quote.text)
          }

          return newPercent
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Animated loader */}
            <motion.div
              className="relative w-24 h-24 mx-auto mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 border-4 border-primary/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Percentage in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  key={percentage}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-bold text-primary"
                >
                  {percentage}%
                </motion.span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            >
              BasharatSolutions
            </motion.h2>

            {/* Dynamic quote */}
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-lg text-muted-foreground min-h-[28px]"
            >
              {currentQuote}
            </motion.p>

            {/* Loading dots */}
            <motion.div
              className="flex justify-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
