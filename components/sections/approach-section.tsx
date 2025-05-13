"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export const ApproachSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Data for the approach steps
  const approachSteps = [
    {
      id: 1,
      title: "Comprendre",
      description:
        "Avant de dessiner quoi que ce soit, je prends le temps de m'immerger dans votre univers. À travers des ateliers collaboratifs, des interviews ciblées ou une observation de vos usages terrain, je m'attache à comprendre vos objectifs, vos contraintes, mais surtout vos utilisateurs.",
      bgColor: "bg-[#123293]",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Concevoir",
      description:
        "Une fois les besoins clarifiés, je passe à la conception. Je traduis les idées en parcours, puis en interfaces, à travers des wireframes, des maquettes interactives et un design UI soigné. Chaque élément visuel est pensé pour être à la fois beau, fonctionnel et aligné avec votre identité.",
      bgColor: "bg-[#13329317]",
      textColor: "text-[#133293]",
    },
    {
      id: 3,
      title: "Valider",
      description:
        "Le design n'est jamais figé. Je teste, j'écoute, j'ajuste. Grâce à des retours utilisateurs concrets et des itérations rapides, je valide chaque étape avec vous pour m'assurer que le produit répond vraiment à vos enjeux et ceux de vos utilisateurs. Cette boucle de validation permet de limiter les risques et de gagner en justesse.",
      bgColor: "bg-[#e7e8f0]",
      textColor: "text-[#133293]",
    },
    {
      id: 4,
      title: "Livrer",
      description:
        "Enfin, je vous remets un livrable propre, structuré et prêt à l'usage. Que ce soit un design finalisé prêt à être développé, un design system complet, ou un site Web mis en ligne sur une plateforme no-code, tout est pensé pour être maintenable, évolutif et durable dans le temps.",
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#f9f9f9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col items-start gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex flex-col items-start gap-4" variants={itemVariants}>
            <span className="text-[#123293] text-sm font-['Helvetica_Neue-Bold',Helvetica] uppercase tracking-wider">
              Notre approche
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Une approche <span className="text-[#123293]">agile</span>, <span className="text-[#123293]">simple</span>{" "}
              et <span className="text-[#123293]">humaine</span>
            </h2>
            <p className="text-[#191818]/70 text-lg max-w-[600px] mt-2">
              Notre méthodologie est centrée sur vos besoins et ceux de vos utilisateurs, avec un processus clair et
              efficace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {approachSteps.map((step, index) => (
              <motion.div key={step.id} variants={itemVariants} className="h-full">
                <Card
                  className={`${step.bgColor} rounded-[20px] overflow-hidden border-none h-full transform hover:-translate-y-2 transition-all duration-500`}
                >
                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-6">
                        <div className={`text-6xl font-bold ${step.textColor} font-['Helvetica_Neue-Bold',Helvetica]`}>
                          {step.id}
                        </div>
                        <div className="flex flex-col gap-4">
                          <h3 className={`text-2xl font-bold ${step.textColor} font-['Helvetica_Neue-Bold',Helvetica]`}>
                            {step.title}
                          </h3>
                          <p
                            className={`text-base ${step.textColor} ${step.id === 1 ? "text-white/90" : "opacity-80"}`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
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
