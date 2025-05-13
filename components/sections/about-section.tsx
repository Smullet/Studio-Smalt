"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Bio paragraphs data
  const bioParagraphs = [
    {
      id: 1,
      content: "Je suis designer indépendante spécialisée en Product Design, facilitation et Web design.",
    },
    {
      id: 2,
      content:
        "Après plusieurs années en entreprise et en startup, j'ai choisi de me lancer seule pour travailler différemment : plus près des gens, plus à l'écoute des vrais besoins.",
    },
    {
      id: 3,
      content:
        "Aujourd'hui, je mets mes compétences au service de projets concrets, utiles et accessibles. J'aime travailler avec celles et ceux qui veulent rendre leur communication plus claire, leur produit plus fluide, leur idée plus tangible.",
    },
    {
      id: 4,
      content: "Je suis basée à Douai, mobile à Lille, et je travaille aussi très bien à distance.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col items-start gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex flex-col items-start gap-4" variants={itemVariants}>
            <span className="text-[#123293] text-sm font-['Helvetica_Neue-Bold',Helvetica] uppercase tracking-wider">
              À propos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Qui se cache derrière <span className="text-[#123293]">Smalt</span> ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <motion.div className="flex flex-col gap-8" variants={itemVariants}>
              {bioParagraphs.map((paragraph) => (
                <motion.p key={paragraph.id} className="text-lg text-[#191818]" variants={itemVariants}>
                  {paragraph.content}
                </motion.p>
              ))}
            </motion.div>

            <div className="flex flex-col gap-8">
              <motion.div className="aspect-square rounded-lg overflow-hidden" variants={imageVariants}>
                <img
                  src="/atcd5am1fncx4hnnypmrqtplhvo-jpeg.png"
                  alt="Salomé Mullet - Product Designer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div className="bg-[#123293] rounded-lg p-8 text-white" variants={itemVariants}>
                <h3 className="text-xl font-bold mb-4">Travaillons ensemble, vraiment</h3>
                <p className="mb-6">
                  Smalt, c'est aussi une aventure humaine. Je crois aux collaborations durables, basées sur la
                  confiance, la transparence et l'écoute mutuelle.
                </p>
                <Button className="bg-white text-[#123293] hover:bg-white/90 w-full">Envie de faire équipe ?</Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
