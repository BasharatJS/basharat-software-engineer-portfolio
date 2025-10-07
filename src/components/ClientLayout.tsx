'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from './LoadingScreen'
import Header from './header'
import Footer from './footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading screen on every refresh
    setIsLoading(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Header />
        {children}
        <Footer />
      </motion.div>
    </>
  )
}
