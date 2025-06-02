"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Service tag component with minimal animation
const ServiceTag = ({ text, index }: { text: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.1 * index }}
    className="relative h-auto py-1 px-3 sm:h-[26.5px] sm:px-7 sm:py-0.5 rounded-[40px] overflow-hidden inline-flex items-center bg-[#f8f9fc]"
  >
    <div className="font-normal text-[#191818] text-xs sm:text-[15px] tracking-[-0.45px] leading-[1.4] sm:leading-[22.5px] whitespace-nowrap font-['Inter',Helvetica]">
      {text}
    </div>
  </motion.div>
)

export const SectionIntro = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  // Data for Product Design services
  const productDesignTags = [
    "UI UX Design",
    "Design System",
    "Prototype Figma",
    "Design Sprint",
    "Tests Utilisateurs",
    "Discovery",
    "Delivery",
  ]

  // Data for Web Design services
  const webDesignTags = [
    "Création de site vitrine",
    "Site responsive",
    "SEO friendly",
    "Identité visuelle",
    "Web design no-code",
  ]

  // Data for Facilitation services
  const facilitationTags = [
    "Facilitation UX",
    "Sprint Design",
    "Design Thinking",
    "Stratégie RSE",
    "Intelligence collective",
    "Atelier présentiel ou à distance",
    "Pitch decks & presentations",
  ]

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Premier bloc */}
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black font-['Inter'] text-[#191818] mb-6 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <span>Freelance </span>
              <span className="text-[#123293]">oui</span>
              <span>, freestyle </span>
              <span className="text-[#123293]">non</span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-[#191818] opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Des solutions digitales qui <span className="text-[#123293]">vous ressemblent</span>,<br />
              et qui <span className="text-[#123293]">fonctionnent</span>
            </motion.p>
          </motion.div>

          {/* Deuxième bloc */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div 
              className="space-y-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <h3 className="text-2xl sm:text-3xl font-black font-['Inter'] text-[#191818] tracking-tight">
                Une approche <span className="text-[#123293]">agile</span>,<br />
                <span className="text-[#123293]">simple</span> et <span className="text-[#123293]">humaine</span>
              </h3>
              <p className="text-[#191818] opacity-80">
                Je m'adapte à vos besoins et à votre contexte pour vous proposer des solutions sur mesure.
              </p>
            </motion.div>
            <motion.div 
              className="space-y-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <h3 className="text-2xl sm:text-3xl font-black font-['Inter'] text-[#191818] tracking-tight">
                Des offres <span className="text-[#123293]">claires</span>,<br />
                des tarifs <span className="text-[#123293]">justes</span>
              </h3>
              <p className="text-[#191818] opacity-80">
                Transparence et simplicité dans la collaboration pour une relation de confiance.
              </p>
            </motion.div>
          </div>

          {/* Call to action */}
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <h2 className="text-3xl sm:text-4xl font-black font-['Inter'] text-[#191818] mb-8 tracking-tight">
              Parlons de <span className="text-[#123293]">votre projet</span>
            </h2>
            <motion.button 
              className="px-6 py-3 bg-[#123293] text-white rounded-lg font-black font-['Inter'] text-lg tracking-wide hover:bg-[#0f2875] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Prendre rendez-vous
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
