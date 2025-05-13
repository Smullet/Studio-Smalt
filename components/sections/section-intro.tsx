"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Service tag component with animation
const ServiceTag = ({ text, index }: { text: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.1 * index }}
    className="relative h-[26.5px] rounded-[40px] overflow-hidden px-7 py-0.5 inline-flex items-center bg-[#f8f9fc]"
  >
    <div className="font-normal text-[#191818] text-[15px] tracking-[-0.45px] leading-[22.5px] whitespace-nowrap font-['Inter',Helvetica]">
      {text}
    </div>
  </motion.div>
)

export const SectionIntro = (): JSX.Element => {
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
    <section className="py-24 flex flex-col w-full items-center justify-center relative">
      <motion.div
        className="flex flex-col w-full max-w-[1046px] items-center gap-12 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center gap-[21px] relative self-stretch w-full"
          variants={itemVariants}
        >
          <Badge className="inline-flex items-center justify-center gap-2.5 p-2.5 bg-[#123293] rounded-md shadow-[2px_2px_0px_#000000]">
            <span className="font-bold text-white text-[27px] tracking-[-1.08px] leading-[32.4px] whitespace-nowrap font-['Inter',Helvetica]">
              Mes services
            </span>
          </Badge>

          <div className="flex flex-col items-center gap-5 relative self-stretch w-full">
            <motion.h2
              className="relative self-stretch h-11 mt-[-1.00px] font-normal text-5xl text-center tracking-[0] leading-[52.8px] whitespace-nowrap font-['Helvetica_Neue-Bold',Helvetica]"
              variants={itemVariants}
            >
              <span className="font-bold text-[#191818]">Des solutions digitales qui </span>
              <span className="font-bold text-[#123293]">vous ressemblent</span>
              <span className="font-bold text-[#191818]">,</span>
            </motion.h2>

            <motion.h2
              className="relative self-stretch h-11 font-normal text-5xl text-center tracking-[0] leading-[52.8px] whitespace-nowrap font-['Helvetica_Neue-Bold',Helvetica]"
              variants={itemVariants}
            >
              <span className="font-bold text-[#133293]">et qui </span>
              <span className="font-bold text-[#123293]">fonctionnent </span>
            </motion.h2>
          </div>

          <motion.p
            className="max-w-[913px] opacity-70 font-normal text-[#191818] text-lg text-center tracking-[-0.18px] leading-[25.2px] font-['Inter',Helvetica]"
            variants={itemVariants}
          >
            Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases. <br />
            On crée ensemble des solutions utiles, alignées sur votre vision, et qui parlent vraiment à vos
            utilisateurs.
          </motion.p>
        </motion.div>

        <div className="flex flex-col w-full max-w-[820px] items-start gap-5">
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-start gap-6 px-6 py-[31px] w-full bg-[#f6f7f9] rounded-[34px] border-none">
              <CardContent className="p-0 w-full">
                <div className="flex flex-col w-full items-start gap-[17px]">
                  <h3 className="self-stretch h-6 mt-[-1.00px] font-bold text-[#123293] text-[26px] tracking-[-1.04px] leading-[26px] whitespace-nowrap font-['Helvetica_Neue-Bold',Helvetica]">
                    Product&nbsp;&nbsp;Design
                  </h3>

                  <p className="self-stretch opacity-80 font-normal text-[#191818] text-[15px] tracking-[-0.45px] leading-[22.5px] font-['Inter',Helvetica]">
                    Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs
                    <br />: interfaces intuitives, parcours fluides, maquettes testables, design systems…
                    <br />
                    Je travaille en collaboration étroite avec vos équipes produit et tech.
                  </p>
                </div>

                <div className="flex flex-wrap items-start gap-[5px] mt-6 w-full">
                  {productDesignTags.map((tag, index) => (
                    <ServiceTag key={index} text={tag} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-start gap-6 px-6 py-[31px] w-full bg-[#f6f7f9] rounded-[34px] border-none">
              <CardContent className="p-0 w-full">
                <div className="flex flex-col w-full items-start gap-[17px] py-px">
                  <h3 className="w-[136px] h-6 mt-[-1.00px] font-bold text-[#123293] text-[25.4px] tracking-[-1.04px] leading-[26px] whitespace-nowrap font-['Helvetica_Neue-Bold',Helvetica]">
                    Web Design
                  </h3>

                  <p className="opacity-80 font-normal text-[#191818] text-[15px] tracking-[-0.45px] leading-[22.5px] font-['Inter',Helvetica]">
                    Vous avez des idées, des projets ou des équipes à aligner ? J&apos;anime des ateliers pour
                    structurer votre
                    <br />
                    vision, clarifier vos priorités et avancer ensemble avec des formats courts, concrets et
                    collaboratifs.
                  </p>
                </div>

                <div className="flex flex-wrap items-start gap-[10px_9px] mt-6">
                  {webDesignTags.map((tag, index) => (
                    <ServiceTag key={index} text={tag} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-start gap-6 px-6 py-[31px] w-full bg-[#f6f7f9] rounded-[34px] border-none">
              <CardContent className="p-0 w-full">
                <div className="flex flex-col items-start gap-[25px] w-full">
                  <h3 className="self-stretch h-6 mt-[-1.00px] font-bold text-[#123293] text-[25.9px] tracking-[-1.04px] leading-[26px] whitespace-nowrap font-['Helvetica_Neue-Bold',Helvetica]">
                    Facilitation
                  </h3>

                  <p className="opacity-80 font-normal text-[#191818] text-[15px] tracking-[-0.45px] leading-[22.5px] font-['Inter',Helvetica]">
                    Je crée des sites clairs, performants et modernes pour valoriser votre activité.
                    <br />
                    Sites vitrine, pages d&apos;atterrissage ou plateformes simples, développés en no-
                    <br />
                    code (Webflow, Framer…) et pensés pour être autonomes et évolutifs.
                  </p>
                </div>

                <div className="flex flex-wrap items-start gap-[10px_9px] mt-6 w-full">
                  {facilitationTags.map((tag, index) => (
                    <ServiceTag key={index} text={tag} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
