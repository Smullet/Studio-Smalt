"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export const PortfolioSection = () => {
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
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 flex flex-col w-full items-center justify-center relative bg-white">
      <div className="flex flex-col w-full max-w-[1200px] items-center gap-8 sm:gap-12 relative px-4">
        <div className="flex flex-col items-center gap-[21px] relative self-stretch w-full">
          <Badge className="inline-flex items-center justify-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 bg-[#123293] rounded-md shadow-[2px_2px_0px_#000000]">
            <span className="font-bold text-white text-xl sm:text-[27px] tracking-[-1.08px] leading-[1.2] sm:leading-[32.4px] whitespace-nowrap font-['Helvetica_Neue-Bold',Helvetica]">
              Portfolio
            </span>
          </Badge>

          <motion.h2
            className="relative self-stretch mt-[-1.00px] font-normal text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[52.8px] font-['Helvetica_Neue-Bold',Helvetica]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="font-bold text-[#191818]">Mes </span>
            <span className="font-bold text-[#123293]">réalisations</span>
          </motion.h2>

          <motion.p
            className="max-w-[913px] opacity-70 font-normal text-[#191818] text-base sm:text-lg text-center tracking-[-0.18px] leading-[1.6] sm:leading-[25.2px] font-['Inter',Helvetica] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Découvrez une sélection de projets qui illustrent mon approche : des solutions digitales pensées pour
            répondre aux besoins réels des utilisateurs et des entreprises.
          </motion.p>
        </div>

        {/* Portfolio Grid - Reproduction exacte du Figma */}
        <motion.div
          className="w-full max-w-[1400px] mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="w-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Espace_Salom_C3_A9-RuXyv0EV6xSNioGC1xNcN368EATLx7.png"
              alt="Portfolio Salomé - Projets de design et développement web"
              className="w-full h-auto object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex flex-col items-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-center text-[#191818] opacity-70 font-normal text-base sm:text-lg tracking-[-0.18px] leading-[1.6] sm:leading-[25.2px] font-['Inter',Helvetica]">
            Envie de voir plus de détails sur ces projets ?
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 bg-[#123293] text-white rounded-lg font-['Helvetica_Neue-Bold',Helvetica] font-bold text-sm sm:text-base hover:bg-[#0f2875] transition-colors duration-300 shadow-[2px_2px_0px_#000000]">
            Découvrir mes case studies
          </button>
        </motion.div>
      </div>
    </section>
  )
}
