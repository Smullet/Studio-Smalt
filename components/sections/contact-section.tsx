"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const contactCards = [
    {
      title: "Souhaitez-vous réserver un appel découverte ?",
      description:
        "Un échange gratuit de 15 minutes pour discuter de vos besoins, répondre à vos questions, et voir si je peux vous accompagner efficacement. Pas d'engagement, juste une conversation simple pour clarifier votre projet.",
      buttonText: "Réserver mon appel découverte",
      buttonLink: "https://cal.com/salome-mullet-smalt",
    },
    {
      title: "Vous avez aimé travailler avec moi ?",
      description:
        "Votre retour compte énormément. En quelques mots, vous pouvez m'aider à faire grandir Smalt et à gagner la confiance de futurs clients. Laissez-moi un avis sur Google, c'est rapide et ça fait toute la différence. Merci d'avance pour votre soutien 🙏",
      buttonText: "Donner mon avis sur Google",
      buttonLink: "https://g.page/r/CRgCtZwKxSQyEBM/review",
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

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#123293] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/5 z-0"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rotate-45 border-2 border-white/10 z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/10 z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-start gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex flex-col items-start gap-6 md:w-1/2" variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Un projet à{" "}
              <span className="bg-white text-[#123293] px-2 py-1 inline-block transform -rotate-1">lancer</span> ?
              <br />
              Une idée à{" "}
              <span className="bg-white text-[#123293] px-2 py-1 inline-block transform -rotate-1">structurer</span> ?
            </h2>
            <p className="text-white/80 text-lg max-w-[600px]">
              Discutons de votre projet et voyons comment je peux vous aider à le concrétiser. Que ce soit pour un site
              web, un produit numérique ou un atelier collaboratif, je suis là pour vous accompagner.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 md:w-1/2">
            {contactCards.map((card, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="w-full bg-white rounded-lg overflow-hidden border-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-lg font-bold text-[#191818] font-['Helvetica_Neue-Bold',Helvetica]">
                        {card.title}
                      </h3>

                      <p className="text-[#191818]/70 text-sm">{card.description}</p>

                      <Button className="bg-[#123293] text-white hover:bg-[#123293]/90 rounded-md w-full mt-2" asChild>
                        <a href={card.buttonLink} rel="noopener noreferrer" target="_blank">
                          {card.buttonText}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
