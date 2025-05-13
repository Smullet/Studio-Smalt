"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// Service tag component
const ServiceTag = ({ text }: { text: string }) => (
  <div className="relative h-auto py-1 px-3 sm:h-[26.5px] sm:px-5 sm:py-0.5 rounded-md overflow-hidden inline-flex items-center bg-[#f8f9fc] hover:bg-white hover:shadow-sm transition-all duration-300">
    <div className="font-normal text-[#191818] text-xs sm:text-sm tracking-[-0.45px] leading-[1.4] sm:leading-[22.5px] whitespace-nowrap font-['Inter',Helvetica]">
      {text}
    </div>
  </div>
)

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

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

  const services = [
    {
      title: "Product Design",
      description:
        "Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs : interfaces intuitives, parcours fluides, maquettes testables, design systems… Je travaille en collaboration étroite avec vos équipes produit et tech.",
      tags: productDesignTags,
    },
    {
      title: "Web Design",
      description:
        "Je crée des sites clairs, performants et modernes pour valoriser votre activité. Sites vitrine, pages d'atterrissage ou plateformes simples, développés en no-code (Webflow, Framer…) et pensés pour être autonomes et évolutifs.",
      tags: webDesignTags,
    },
    {
      title: "Facilitation",
      description:
        "Vous avez des idées, des projets ou des équipes à aligner ? J'anime des ateliers pour structurer votre vision, clarifier vos priorités et avancer ensemble avec des formats courts, concrets et collaboratifs.",
      tags: facilitationTags,
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
              Mes services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Des solutions digitales qui <span className="text-[#123293]">vous ressemblent</span>, et qui{" "}
              <span className="text-[#123293]">fonctionnent</span>
            </h2>
            <p className="text-[#191818]/70 text-lg max-w-[600px] mt-2">
              Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases. On crée
              ensemble des solutions utiles, alignées sur votre vision, et qui parlent vraiment à vos utilisateurs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants} className="h-full">
                <Card className="bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-500 h-full transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-6 h-full">
                      <h3 className="text-xl font-bold text-[#123293] font-['Helvetica_Neue-Bold',Helvetica]">
                        {service.title}
                      </h3>
                      <p className="text-[#191818]/70 text-base flex-grow">{service.description}</p>
                      <div className="flex flex-wrap items-start gap-2 mt-auto">
                        {service.tags.slice(0, 5).map((tag, index) => (
                          <ServiceTag key={index} text={tag} />
                        ))}
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
