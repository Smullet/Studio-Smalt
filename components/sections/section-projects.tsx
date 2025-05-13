"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export const SectionProjects = (): JSX.Element => {
  // Data for the approach steps
  const approachSteps = [
    {
      id: 1,
      title: "Comprendre",
      description: [
        "Avant de dessiner quoi que ce soit, je prends le temps de m'immerger dans votre univers.",
        "À travers des ateliers collaboratifs, des interviews ciblées ou une observation de vosusages terrain, je m'attache à comprendre vos objectifs, vos contraintes, mais surtout vos utilisateurs.",
        "Cette phase me permet de poser les bonnes bases et de cadrer un projet en phase avec vos besoins réels.",
      ],
      bgColor: "bg-[#123293]",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Concevoir",
      description: [
        "Une fois les besoins clarifiés, je passe à la conception. Je traduis les idées en parcours, puis en interfaces, à travers des wireframes, des maquettes interactives et un design UI soigné.",
        "Chaque élément visuel est pensé pour être à la fois beau, fonctionnel et aligné avec votre identité. L'objectif : créer une expérience fluide, claire et engageante.",
      ],
      bgColor: "bg-[#13329317]",
      textColor: "text-[#133293]",
    },
    {
      id: 3,
      title: "Valider",
      description: [
        "Le design n'est jamais figé. Je teste, j'écoute, j'ajuste.",
        "Grâce à des retours utilisateurs concrets et des itérations rapides, je valide chaque étape avec vous pour m'assurer que le produit répond vraiment à vos enjeux et ceux de vos utilisateurs.",
        "Cette boucle de validation permet de limiter les risques et de gagner en justesse.",
      ],
      bgColor: "bg-[#e7e8f0]",
      textColor: "text-[#133293]",
    },
    {
      id: 4,
      title: "Livrer",
      description: [
        "Enfin, je vous remets un livrable propre, structuré et prêt à l'usage. Que ce soit un design finalisé prêt à être développé, un design system complet, ou un site Web mis en ligne sur une plateforme no-code, tout est pensé pour être maintenable, évolutif et durable dans le temps.",
      ],
      bgColor: "bg-[#e7e8f0]",
      textColor: "text-[#133293]",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section className="py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 max-w-[1200px] w-full">
        <motion.div
          className="flex flex-col items-center gap-12 max-w-[952px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-5xl font-bold text-center leading-[52.8px] tracking-normal max-w-[691px]"
            variants={titleVariants}
          >
            <span className="text-[#191818]">Une approche </span>
            <span className="text-[#123293]">agile</span>
            <span className="text-[#191818]">, </span>
            <span className="text-[#123293]">simple </span>
            <span className="text-[#191818]"> et </span>
            <span className="text-[#123293]">humaine&nbsp;&nbsp;</span>
          </motion.h2>

          <div className="flex flex-col items-center gap-[30px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
              {approachSteps.slice(0, 2).map((step, index) => (
                <motion.div key={step.id} custom={index} variants={itemVariants}>
                  <Card className={`${step.bgColor} rounded-[30px] overflow-hidden border-none h-[494px]`}>
                    <CardContent className="flex items-start gap-[50px] p-10">
                      <div className={`text-[90px] font-normal tracking-[-1.04px] leading-[90px] ${step.textColor}`}>
                        {step.id}
                      </div>
                      <div className="flex flex-col py-3.5">
                        <h3
                          className={`text-[26px] font-bold tracking-[-1.04px] leading-[32.4px] mb-[22px] ${step.textColor}`}
                        >
                          {step.title}
                        </h3>
                        <div className="flex flex-col gap-[25px]">
                          {step.description.map((paragraph, idx) => (
                            <p
                              key={idx}
                              className={`text-[15px] font-normal tracking-[-0.45px] leading-[22.1px] ${step.textColor}`}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
              {approachSteps.slice(2, 4).map((step, index) => (
                <motion.div key={step.id} custom={index + 2} variants={itemVariants}>
                  <Card className={`${step.bgColor} rounded-[30px] overflow-hidden border-none h-[492px]`}>
                    <CardContent className="flex items-start gap-[50px] p-10">
                      <div className={`text-[90px] font-normal tracking-[-1.04px] leading-[90px] ${step.textColor}`}>
                        {step.id}
                      </div>
                      <div className="flex flex-col py-3.5">
                        <h3
                          className={`text-[26px] font-bold tracking-[-1.04px] leading-[32.4px] mb-[22px] ${step.textColor}`}
                        >
                          {step.title}
                        </h3>
                        <div className="flex flex-col gap-[25px]">
                          {step.description.map((paragraph, idx) => (
                            <p
                              key={idx}
                              className={`text-[15px] font-normal tracking-[-0.45px] leading-[22.1px] ${step.textColor}`}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
