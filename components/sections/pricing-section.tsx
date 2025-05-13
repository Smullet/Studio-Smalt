"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Service card data
  const services = [
    {
      title: "Product Design",
      description: "Conception de produits numériques utiles, ergonomiques et désirables.",
      subDescription:
        "Je vous accompagne de l'idée au prototype fonctionnel, en passant par la recherche utilisateur, les wireframes, les maquettes et les tests. Idéal pour les startups et équipes produit en phase de création ou d'évolution.",
      price: "380",
      priceUnit: "/ jour",
      features: [
        "Analyse des besoins utilisateurs et des objectifs métier pour poser des bases solides.",
        "Organisation de sessions de co-conception pour aligner les équipes et générer des idées.",
        "Conception de l'architecture et des flux de navigation pour optimiser l'expérience",
        "Réalisation de maquettes cliquables pour tester rapidement les fonctionnalités clés.",
        "Mise en place ou amélioration d'un système de composants pour assurer la cohérence et la scalabilité.",
        "Recueil de retours concrets pour ajuster le design avant la mise en production.",
      ],
    },
    {
      title: "Web Design",
      description: "Des sites web épurés, performants, pensés pour convertir.",
      subDescription:
        "Idéal pour les entrepreneur·es, petites entreprises ou associations qui veulent une présence en ligne efficace et facile à prendre en main.",
      price: "700",
      priceUnit: "",
      pricePrefix: "à partir de",
      features: [
        "Un site clair, responsive et optimisé pour présenter votre activité avec impact.",
        "Une identité visuelle cohérente avec vos valeurs, vos couleurs, vos typographies et vos visuels.",
        "Un site rapide, léger et facile à maintenir, conçu sur un outil no-code selon vos besoins.",
        "Des balises, métadonnées et bonnes pratiques intégrées pour améliorer votre visibilité sur Google.",
        "Mentions légales, politique de confidentialité et gestion des cookies incluses.",
        "Une session pour vous apprendre à gérer votre site en toute autonomie, sans jargon technique.",
      ],
      footnote: "*Quatre niveaux d'offre selon vos besoins : Basic, Essential, Professional et Advanced.",
    },
    {
      title: "Facilitation",
      description: "Workshops, design sprints, ateliers d'alignement ou d'idéation.",
      subDescription:
        "Je conçois et anime des sessions collaboratives qui font avancer vos projets, en impliquant vos équipes. Disponible à la session ou en accompagnement régulier.",
      price: "450",
      priceUnit: "/ jour",
      features: [
        "Un cadrage stratégique pour définir les objectifs, les parties prenantes et le périmètre du projet pour démarrer sur de bonnes bases.",
        "Création sur-mesure de formats collaboratifs adaptés à ton contexte et à tes enjeux.",
        "Conduite dynamique et bienveillante pour faire émerger les idées et favoriser l'intelligence collective.",
        "Utilisation d'outils comme le design thinking, le design sprint ou le co-développement selon les besoins.",
        "Restitution claire et actionnable de ce qui a été produit pendant l'atelier.",
        "Faire émerger collectivement des pistes réalistes, utiles et alignées sur les objectifs du groupe",
      ],
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

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
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
              Tarifs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Des offres <span className="text-[#123293]">claires</span>, des tarifs{" "}
              <span className="text-[#123293]">justes</span>
            </h2>
            <p className="text-[#191818]/70 text-lg max-w-[600px] mt-2">
              Des tarifs transparents adaptés à vos besoins et à votre budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants} className="h-full">
                <Card className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-500 h-full transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-6 h-full">
                      <div>
                        <h3 className="text-xl font-bold text-[#123293] font-['Helvetica_Neue-Bold',Helvetica] mb-2">
                          {service.title}
                        </h3>
                        <p className="text-[#191818]/70 text-base mb-4">{service.description}</p>

                        <div className="flex items-end gap-1 mb-6">
                          {service.pricePrefix && (
                            <span className="text-[#191818]/70 text-sm self-end mb-1">{service.pricePrefix}</span>
                          )}
                          <span className="text-3xl font-bold text-[#191818]">{service.price} €</span>
                          {service.priceUnit && (
                            <span className="text-[#191818]/70 text-sm self-end mb-1">{service.priceUnit}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 flex-grow">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <motion.div key={idx} className="flex items-start gap-3" variants={featureVariants}>
                            <div className="w-5 h-5 rounded-full bg-[#123293]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckIcon className="w-3 h-3 text-[#123293]" />
                            </div>
                            <p className="text-[#191818]/70 text-sm">{feature}</p>
                          </motion.div>
                        ))}
                      </div>

                      {service.footnote && <p className="text-xs text-[#191818]/50 mt-4">{service.footnote}</p>}
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
