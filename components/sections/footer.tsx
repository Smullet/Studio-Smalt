"use client"

import { motion } from "framer-motion"

export const Footer = (): JSX.Element => {
  // Footer links data for easy maintenance
  const footerLinks = [
    { text: "Design & Dev @Studio Smalt", width: "149.24px" },
    { text: "Mentions légales", width: "88.34px" },
    { text: "Politique de confidentialité", width: "137.99px" },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.footer
      className="flex justify-between items-center w-full px-10 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="relative w-32 h-[67.11px] [background:url(..//link-1.png)_50%_50%_/_cover]"
        variants={itemVariants}
      />

      <div className="flex gap-8">
        {footerLinks.map((link, index) => (
          <motion.a
            key={index}
            href="#"
            className="font-['Inter',Helvetica] font-normal text-[#191818] text-[11px] leading-[15.4px] whitespace-nowrap hover:underline"
            style={{ width: link.width }}
            variants={itemVariants}
          >
            {link.text}
          </motion.a>
        ))}
      </div>
    </motion.footer>
  )
}
