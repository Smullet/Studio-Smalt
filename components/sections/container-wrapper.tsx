"use client"

import { motion } from "framer-motion"
import { CheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

const MotionCard = motion(Card)

export const ContainerWrapper = () => {
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
      },
    }),
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
      },
    }),
  }

  const steps = [
    {
      title: "Comprendre",
      description: "Découverte de vos besoins, objectifs et contraintes. Analyse de l'existant et benchmark.",
      number: "01",
    },
    {
      title: "Concevoir",
      description: "Idéation, wireframes, maquettes, prototypes. Tests et itérations avec les utilisateurs.",
      number: "02",
    },
    {
      title: "Valider",
      description: "Tests utilisateurs, retours clients, ajustements et validation finale.",
      number: "03",
    },
    {
      title: "Livrer",
      description: "Documentation, design system, spécifications techniques et accompagnement.",
      number: "04",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 flex flex-col items-center justify-center relative">
      <div className="flex flex-col w-full max-w-[1200px] items-center justify-center px-2 sm:px-6 py-0">
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-[104px] w-full">
          {/* Section Header */}
          <motion.div
            className="flex flex-col items-center gap-[22px] w-full"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <Badge className="w-[60px] sm:w-[79px] h-[40px] sm:h-[51.75px] bg-[#123293] rounded-md shadow-[2px_2px_0px_#121214] flex items-center justify-center">
              <span className="font-['Helvetica_Neue-Bold',Helvetica] font-bold text-white text-xl sm:text-[27px] tracking-[-1.08px] leading-[1.2] sm:leading-[32.4px]">
                Tarifs
              </span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[52.8px] font-['Helvetica_Neue-Bold',Helvetica] max-w-[425px]">
              <span className="font-bold text-[#191818]">Des offres </span>
              <span className="font-bold text-[#123293]">claires</span>
              <span className="font-bold text-[#191818]">, des tarifs </span>
              <span className="font-bold text-[#123293]">justes</span>
            </h2>
          </motion.div>

          {/* Service Cards */}
          <div className="flex flex-wrap justify-center gap-[30px]">
            {services.map((service, index) => (
              <motion.div key={index} custom={index} initial="hidden" animate="visible" variants={cardVariants}>
                <Card className="w-full sm:w-[340px] rounded-xl border border-solid border-[#123293] relative card-basic">
                  <Badge
                    className={`absolute -top-6 sm:-top-8 left-[7px] bg-[#123293] rounded-md shadow-[2px_2px_0px_#121214] h-[40px] sm:h-[52px] px-3 flex items-center justify-center`}
                    style={{
                      width:
                        service.title === "Product Design"
                          ? "180px"
                          : service.title === "Web Design"
                            ? "140px"
                            : "130px",
                    }}
                  >
                    <span className="font-['Helvetica_Neue-Bold',Helvetica] font-bold text-white text-xl sm:text-[27px] tracking-[-1.08px] leading-[1.2] sm:leading-[32.4px]">
                      {service.title}
                    </span>
                  </Badge>

                  <CardContent className="pt-[25px] sm:pt-[31px] px-4 sm:px-[31px]">
                    <div className="flex flex-col w-full gap-px">
                      {/* Service Description */}
                      <div className="h-[340px]">
                        <div className="mb-[43px]">
                          <div className="font-['Helvetica_Neue-Bold',Helvetica] font-bold text-lg sm:text-xl tracking-[-0.40px] leading-[1.3] sm:leading-6 mb-3 sm:mb-4">
                            {service.title === "Product Design" ? (
                              <>
                                <span className="text-[#0f0f0f] tracking-[-0.08px]">
                                  Conception de produits
                                  <br />
                                </span>
                                <span className="text-[#123293] tracking-[-0.08px]">
                                  numériques utiles ,<br />
                                  ergonomiques et désirables{" "}
                                </span>
                                <span className="text-[#0f0f0f] tracking-[-0.08px]">.</span>
                              </>
                            ) : (
                              <span className="text-[#0f0f0f]">{service.description}</span>
                            )}
                          </div>
                          <p className="font-['Inter',Helvetica] font-normal text-[#0000008a] text-sm sm:text-[15px] tracking-[-0.45px] leading-[1.6] sm:leading-[22.1px]">
                            {service.subDescription}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="flex items-end">
                          {service.pricePrefix && (
                            <span className="font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#191818] text-[23px] tracking-[0] leading-[25.3px] mr-[5px]">
                              {service.pricePrefix}
                            </span>
                          )}
                          <div className="font-['Helvetica_Neue-Bold',Helvetica] font-bold text-[#191818] text-4xl sm:text-5xl tracking-[0] leading-[1.2] sm:leading-[52.8px]">
                            {service.price} <span className="text-lg sm:text-xl">€</span>
                          </div>
                          {service.priceUnit && (
                            <span className="font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#191818] text-[23px] tracking-[0] leading-[25.3px]">
                              {service.priceUnit}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-col gap-3.5 mt-4">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-5"
                            custom={idx}
                            initial="hidden"
                            animate="visible"
                            variants={featureVariants}
                          >
                            <div className="w-[29px] h-[29px] bg-[#123293] rounded-[40px] flex items-center justify-center flex-shrink-0">
                              <CheckIcon className="w-[9px] h-[9px] text-white" />
                            </div>
                            <p className="font-['Inter',Helvetica] font-normal text-[#191818] text-sm sm:text-[15px] tracking-[-0.45px] leading-[1.6] sm:leading-[22.5px]">
                              {feature}
                            </p>
                          </motion.div>
                        ))}

                        {service.footnote && (
                          <p className="text-[11px] text-[#302f2f] mt-8 leading-6">{service.footnote}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
            {steps.map((step, index) => (
              <MotionCard
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-[340px] rounded-xl border border-solid border-[#123293] relative card-basic"
              >
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[#123293] text-xl font-bold font-['Helvetica_Neue']">{step.title}</h3>
                    <span className="text-[#123293] text-xl font-bold font-['Helvetica_Neue']">{step.number}</span>
                  </div>
                  <p className="text-neutral-600 text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
