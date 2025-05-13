"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import React from "react"

export const DivWrapper = () => {
  // Step data for the process steps
  const steps = [
    {
      id: 1,
      icon: "/component-1-2.svg",
      title: "Appel découverte",
      description: [
        "Réservez un appel gratuit de 20 minutes",
        "Un premier échange pour comprendre votre besoin,",
        "clarifier vos enjeux et voir si on avance ensemble. C'est",
        "simple, sans engagement.",
      ],
    },
    {
      id: 2,
      icon: "/component-1-5.svg",
      title: "Devis sur-mesure",
      description: [
        "On démarre sous 5 jours Pas de process complexes,",
        "pas de mails qui traînent. Une organisation fluide pour",
        "que votre projet prenne vie rapidement.",
      ],
    },
    {
      id: 3,
      icon: "/component-1-3.svg",
      title: "Démarrage express",
      description: [
        "Un site bien référencé sur les moteurs de recherche",
        "attire un trafic de qualité. Je m'assure que chaque",
        "aspect de votre site est optimisé pour maximiser votre",
        "visibilité en ligne.",
      ],
    },
  ]

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
      },
    }),
  }

  const progressVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "50%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 flex flex-col w-full items-center justify-center relative">
      <div className="flex flex-col w-full max-w-[1200px] items-center justify-center gap-8 sm:gap-[60px] px-4 sm:px-6 py-0 relative">
        <motion.div
          className="flex items-center gap-[3px] relative"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h2 className="relative font-['Helvetica_Neue-Bold',Helvetica] font-bold text-[#0f0f0f] text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-[1.2] sm:leading-[52.8px]">
            Lancer votre projet
          </h2>

          <div className="flex items-center justify-center p-2 sm:p-2.5 relative bg-relevant-places-631301framerapptorea-bay -rotate-1 rounded-md shadow-[2px_2px_0px_#121214]">
            <div className="relative w-fit mt-[-1.00px] font-['Helvetica_Neue-Bold',Helvetica] text-relevant-places-631301framerappwhite text-2xl sm:text-3xl md:text-[length:var(--relevant-places-631301-framer-app-semantic-heading-2-font-size)] tracking-[var(--relevant-places-631301-framer-app-semantic-heading-2-letter-spacing)] leading-[1.2] sm:leading-[var(--relevant-places-631301-framer-app-semantic-heading-2-line-height)] whitespace-nowrap [font-style:var(--relevant-places-631301-framer-app-semantic-heading-2-font-style)]">
              sans attendre
            </div>

            <div className="w-full h-full rounded-md border-[#121214] absolute top-0 left-0 border border-solid" />
          </div>
        </motion.div>

        <Card className="flex items-start justify-center gap-4 sm:gap-8 px-0 py-4 sm:py-6 relative self-stretch w-full bg-relevant-places-631301framerappwhite shadow-none">
          <CardContent className="p-0 flex flex-col md:flex-row items-start justify-center gap-6 sm:gap-8 w-full">
            <motion.div
              className="flex flex-col w-full max-w-[638px] items-center justify-center relative self-stretch bg-[#f6f7f9] rounded-xl overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="relative self-stretch w-full h-[250px] sm:h-[350px] md:h-[564px] bg-[url(/our0caa84upt9a1jyroqg6gdwy4-jpg.png)] bg-cover bg-[50%_50%]" />
              <div className="w-full h-full rounded-xl border-[#d5d9e2] absolute top-0 left-0 border border-solid" />
            </motion.div>

            <div className="flex flex-col w-full max-w-[528px] items-end gap-6 sm:gap-8 relative">
              <motion.div
                className="flex flex-col items-start relative self-stretch w-full bg-[#eceef2] rounded-[96px] overflow-hidden h-0.5 mb-8"
                initial="hidden"
                animate="visible"
                variants={progressVariants}
              >
                <div className="relative w-[248.84px] h-0.5 bg-relevant-places-631301framerapptorea-bay rounded-[96px]" />
                <div className="absolute w-full h-0.5 top-0 left-0 rounded-[96px] border border-solid border-[#d5d9e2]" />
              </motion.div>

              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={stepVariants}
                  className="w-full"
                >
                  <div className="flex items-start gap-6 relative self-stretch w-full">
                    <div className="flex items-center justify-center p-3 relative bg-relevant-places-631301framerapptorea-bay rounded-[96px]">
                      <img
                        className="relative self-stretch w-[11px]"
                        alt={`Step ${step.id} icon`}
                        src={step.icon || "/placeholder.svg"}
                      />
                      <div className="w-[35px] h-[35px] rounded-[96px] border-neutral-950 absolute top-0 left-0 border border-solid" />
                    </div>

                    <div className="flex flex-col w-full items-start gap-[7px] relative">
                      <h3 className="self-stretch text-xl sm:text-[27px] tracking-[-1.08px] leading-[1.2] sm:leading-[32.4px] relative mt-[-1.00px] font-['Helvetica_Neue-Bold',Helvetica] font-bold text-relevant-places-631301framerapptorea-bay">
                        {step.title}
                      </h3>

                      <p className="relative self-stretch font-['Inter',Helvetica] font-[number:var(--relevant-places-631301-framer-app-inter-regular-font-weight)] text-relevant-places-631301framerappblack-60 text-sm sm:text-[length:var(--relevant-places-631301-framer-app-inter-regular-font-size)] tracking-[var(--relevant-places-631301-framer-app-inter-regular-letter-spacing)] leading-[1.6] sm:leading-[var(--relevant-places-631301-framer-app-inter-regular-line-height)] [font-style:var(--relevant-places-631301-framer-app-inter-regular-font-style)]">
                        {step.description.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < step.description.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <Separator className="self-stretch w-full h-0.5 bg-relevant-places-631301framerappathens-gray rounded-[96px] overflow-hidden mt-8" />
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
