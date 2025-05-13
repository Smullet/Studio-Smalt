"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 })

  // Footer links data for easy maintenance
  const footerLinks = [
    { text: "Design & Dev @Studio Smalt", href: "#" },
    { text: "Mentions légales", href: "#" },
    { text: "Politique de confidentialité", href: "#" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <motion.footer
      ref={footerRef}
      className="py-12 bg-white border-t border-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <motion.div className="flex flex-col gap-2" variants={itemVariants}>
            <div className="relative w-24 h-[40px] [background:url(/link-1.png)_50%_50%_/_cover]" />
            <p className="text-[#191818]/50 text-xs">Agence full-service à Paris, Nantes & Lyon</p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-[#191818]/70 text-sm hover:text-[#123293] transition-colors"
                  variants={itemVariants}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>

            <motion.div className="flex items-center gap-2" variants={itemVariants}>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[#123293]">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-[#191818]/70 text-sm">4.95 (31 reviews) | Top digital agency 2023-2024</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
