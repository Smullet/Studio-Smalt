"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface RevealTextProps {
  children: ReactNode
  delay?: number
  className?: string
}

export const RevealText = ({ children, delay = 0, className = "" }: RevealTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 