"use client"

import React from 'react'
import { motion } from "framer-motion"
import Link from "next/link"

export const Footer = () => {
  // Footer links data for easy maintenance
  const footerLinks = [
    { text: "Design & Dev @Studio Smalt", width: "149.24px" },
    { text: "Mentions légales", width: "88.34px" },
    { text: "Politique de confidentialité", width: "137.99px" },
  ]

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
      },
    }),
  }

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-10 py-6 sm:py-8 gap-4 sm:gap-0">
      <Link href="/">
        <motion.img
          src="/images/logo-alt.svg"
          alt="Studio Smalt"
          className="h-8 sm:h-10"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        />
      </Link>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {footerLinks.map((link, index) => (
          <motion.a
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            href="#"
            className="font-helvetica font-normal text-[#191818] text-[11px] leading-[15.4px] whitespace-nowrap text-center"
          >
            {link.text}
          </motion.a>
        ))}
      </div>
    </footer>
  )
}
