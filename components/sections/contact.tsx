"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const Contact = () => {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-8 sm:gap-16 py-12 sm:py-16 md:py-24 relative bg-[#123293] w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6 px-4 sm:px-6 py-0 relative max-w-[1200px] w-full z-10">
        <div className="flex flex-col items-center justify-center relative w-full md:flex-1 md:min-w-[300px]">
          <motion.div
            className="flex items-center justify-center gap-[9.37px] py-[3.34px] relative"
            variants={titleVariants}
          >
            <div className="relative font-['Helvetica_Neue-Bold',Helvetica] font-bold text-relevant-places-631301framerappwhite text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[52.8px]">
              Un projet à
            </div>

            <div className="inline-flex items-center justify-center p-2.5 relative bg-relevant-places-631301framerappwhite -rotate-1 rounded-md shadow-[2px_2px_0px_#121214]">
              <div className="w-fit text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[52.8px] relative mt-[-1.00px] font-['Helvetica_Neue-Bold',Helvetica] font-bold text-relevant-places-631301framerapptorea-bay whitespace-nowrap">
                lancer ?
              </div>

              <div className="w-full h-full rounded-md border-[#121214] absolute top-0 left-0 border border-solid" />
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-[9.38px] pt-0 pb-[5px] relative mt-4"
            variants={titleVariants}
          >
            <div className="relative font-['Helvetica_Neue-Bold',Helvetica] font-bold text-relevant-places-631301framerappwhite text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[52.8px]">
              Une idée à
            </div>

            <div className="inline-flex items-center justify-center p-2.5 relative bg-relevant-places-631301framerappwhite -rotate-1 rounded-md shadow-[2px_2px_0px_#121214]">
              <div className="w-fit text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[52.8px] relative mt-[-1.00px] font-['Helvetica_Neue-Bold',Helvetica] font-bold text-relevant-places-631301framerapptorea-bay whitespace-nowrap">
                structurer ?
              </div>

              <div className="w-full h-full rounded-md border-[#121214] absolute top-0 left-0 border border-solid" />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-6 relative w-full md:flex-1 md:min-w-[300px] md:max-w-[436px]">
          {contactCards.map((card, index) => (
            <motion.div key={index} custom={index} variants={cardVariants}>
              <Card className="w-full bg-relevant-places-631301framerappwild-sand rounded-[16px] sm:rounded-[20px] overflow-hidden border-none card-basic">
                <CardContent className="flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6">
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="mt-[-1.00px] font-['Helvetica_Neue-Bold',Helvetica] font-[number:var(--relevant-places-631301-framer-app-inter-medium-font-weight)] text-[#0f0f0f] text-base sm:text-[length:var(--relevant-places-631301-framer-app-inter-medium-font-size)] tracking-[var(--relevant-places-631301-framer-app-inter-medium-letter-spacing)] leading-[1.4] sm:leading-[var(--relevant-places-631301-framer-app-inter-medium-line-height)] [font-style:var(--relevant-places-631301-framer-app-inter-medium-font-style)]">
                      {card.title}
                    </h3>

                    <p className="font-['Inter',Helvetica] font-normal text-relevant-places-631301framerappblack-60 text-xs sm:text-[11px] tracking-[0] leading-[1.6] sm:leading-[15.4px]">
                      {card.description}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="h-[40px] sm:h-[47.4px] w-full bg-relevant-places-631301framerappwhite rounded-[8px] sm:rounded-[10px] border border-solid border-black px-3 sm:px-4 py-0"
                    asChild
                  >
                    <a
                      className="font-['Helvetica_Neue-Bold',Helvetica] font-[number:var(--relevant-places-631301-framer-app-semantic-link-font-weight)] text-relevant-places-631301framerappblack text-sm sm:text-[length:var(--relevant-places-631301-framer-app-semantic-link-font-size)] tracking-[var(--relevant-places-631301-framer-app-semantic-link-letter-spacing)] leading-[1.4] sm:leading-[var(--relevant-places-631301-framer-app-semantic-link-line-height)] whitespace-nowrap [font-style:var(--relevant-places-631301-framer-app-semantic-link-font-style)]"
                      href={card.buttonLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {card.buttonText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
