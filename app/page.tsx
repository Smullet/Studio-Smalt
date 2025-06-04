"use client"
import React, { useRef, useEffect } from "react"
import type { JSX } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HeroHeader } from "@/components/sections/hero-header"
import { MobileMenu } from "@/components/mobile-menu"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "framer-motion"
import { RevealText } from '@/components/animations/RevealText'
import Link from "next/link"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export default function Home(): JSX.Element {
  const controls = useAnimation()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const pricingRef = useRef(null)
  const contactRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" })
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" })
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isHeroInView) {
      controls.start("visible")
    }
  }, [isHeroInView, controls])

  return (
    <div className="w-full relative bg-white overflow-hidden">
      {/* Mobile menu */}
      <MobileMenu />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 sm:pt-40 sm:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="flex flex-col items-center gap-8 text-center"
          >
            <motion.div variants={fadeInUp} className="inline-block p-2.5 -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]">
              <div className="text-white text-[27px] font-black font-['Inter'] leading-[32.4px]">
                Studio Smalt
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="max-w-4xl">
              <span className="text-[#191818] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Inter'] leading-tight">
                Des solutions digitales qui 
              </span>
              <span className="text-[#123293] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Inter'] leading-tight">
                vous ressemblent
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-2xl text-lg sm:text-xl text-gray-600">
              Je suis <span className="font-bold">Salomé Mullet</span>, freelance en product design. 
              J'accompagne les équipes dans la création d'interfaces claires, utiles et testées.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:salomemullet@studiosmalt.fr"
                className="bg-[#123293] text-white px-8 py-3 rounded-[14px] hover:bg-blue-900 transition-colors text-base font-medium"
              >
                Discuter de votre projet
              </a>
              <Link 
                href="/projets"
                className="border-2 border-[#123293] text-[#123293] px-8 py-3 rounded-[14px] hover:bg-[#123293] hover:text-white transition-colors text-base font-medium"
              >
                Voir mes projets
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Services */}
      <section ref={servicesRef} className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Cards */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 mb-6 relative overflow-hidden rounded-xl">
                <Image
                  src="/images/services/product-design.jpg"
                  alt="Product Design"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-black font-['Inter'] mb-4">Product Design</h3>
              <p className="text-gray-600">
                Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 mb-6 relative overflow-hidden rounded-xl">
                <Image
                  src="/images/services/web-design.jpg"
                  alt="Web Design"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-black font-['Inter'] mb-4">Web Design</h3>
              <p className="text-gray-600">
                Je vous aide à concevoir des sites web qui convertissent.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 mb-6 relative overflow-hidden rounded-xl">
                <Image
                  src="/images/services/facilitation.jpg"
                  alt="Facilitation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-black font-['Inter'] mb-4">Facilitation</h3>
              <p className="text-gray-600">
                J'anime des ateliers collaboratifs pour faire avancer vos projets.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 sm:py-24 bg-[#123293] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="flex flex-col items-center gap-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Inter'] mb-6">
                Une approche agile, simple et humaine
              </h2>
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                Chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
              {/* Process steps */}
              <motion.div variants={slideIn} className="bg-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-black font-['Inter'] mb-4">1. Comprendre</h3>
                <p className="text-white/80">
                  À travers des ateliers collaboratifs et des interviews ciblées, je comprends vos objectifs et vos utilisateurs.
                </p>
              </motion.div>

              <motion.div variants={slideIn} className="bg-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-black font-['Inter'] mb-4">2. Concevoir</h3>
                <p className="text-white/80">
                  Je traduis les idées en parcours et en interfaces à travers des wireframes et des maquettes interactives.
                </p>
              </motion.div>

              <motion.div variants={slideIn} className="bg-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-black font-['Inter'] mb-4">3. Valider</h3>
                <p className="text-white/80">
                  Des retours utilisateurs concrets et des itérations rapides valident chaque étape du projet.
                </p>
              </motion.div>

              <motion.div variants={slideIn} className="bg-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-black font-['Inter'] mb-4">4. Livrer</h3>
                <p className="text-white/80">
                  Je vous remets un livrable propre, structuré et prêt à l'usage.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section - New responsive section */}
      <section
        className="w-full py-12 sm:py-16 md:py-24 bg-white flex flex-col justify-center items-center px-4 sm:px-6 animated-gradient"
      >
        <div className="w-full max-w-7xl flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-start items-center gap-12 sm:gap-16 md:gap-24">
            <div className="w-full flex flex-col justify-start items-center gap-5">
              <div className="p-2 sm:p-2.5 origin-top-left -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
                <div className="text-white text-[27px] font-black font-['Inter'] leading-[32.4px]">
                  Tarifs
                </div>
              </div>
              <div className="text-center">
                <span className="text-[#191818] text-[61px] font-black font-['Inter'] leading-[64px]">Des offres </span>
                <span className="text-[#123293] text-[61px] font-black font-['Inter'] leading-[64px]">claires</span>
                <span className="text-[#191818] text-[61px] font-black font-['Inter'] leading-[64px]">,<br />des tarifs </span>
                <span className="text-[#123293] text-[61px] font-black font-['Inter'] leading-[64px]">justes</span>
              </div>
            </div>

            {/* Pricing Cards - Responsive grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
              {/* Product Design Card */}
              <div className="relative">
                <div className="p-2 sm:p-2.5 absolute -top-6 left-2 origin-top-left -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] flex justify-center items-center gap-2.5 z-10">
                  <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] leading-loose">
                    Product Design
                  </div>
                </div>
                <Card className="h-auto min-h-[980px] p-4 sm:p-6 rounded-xl border border-[#123293] flex flex-col justify-start items-start gap-2.5 pt-8">
                  <div className="w-full flex flex-col justify-start items-start gap-8 sm:gap-16">
                    <div className="w-full h-auto min-h-[320px] flex flex-col justify-between items-start">
                      <div className="py-2 flex flex-col justify-start items-start gap-4">
                        <div className="text-left">
                          <span className="text-stone-950 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                            Conception de produits
                            <br />
                          </span>
                          <span className="text-[#123293] text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                            numériques utiles,
                            <br />
                            ergonomiques et désirables{" "}
                          </span>
                          <span className="text-stone-950 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                            .
                          </span>
                        </div>
                        <div className="w-full text-black/50 text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                          Je vous accompagne de l'idée au prototype fonctionnel, en passant par la recherche
                          utilisateur, les wireframes, les maquettes et les tests. Idéal pour les startups et équipes
                          produit en phase de création ou d'évolution.
                        </div>
                      </div>
                      <div className="w-full h-auto flex justify-start items-end gap-1">
                        <div className="flex justify-start items-baseline">
                          <span className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-bold font-['Helvetica_Neue'] leading-tight">
                            380{" "}
                          </span>
                          <span className="text-neutral-900 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-tight">
                            €
                          </span>
                        </div>
                        <div className="text-neutral-900 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-tight">
                          / jour
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-3.5">
                      {[
                        "Analyse des besoins utilisateurs et des objectifs métier pour poser des bases solides.",
                        "Organisation de sessions de co-conception pour aligner les équipes et générer des idées.",
                        "Conception de l'architecture et des flux de navigation pour optimiser l'expérience",
                        "Réalisation de maquettes cliquables pour tester rapidement les fonctionnalités clés.",
                        "Mise en place ou amélioration d'un système de composants pour assurer la cohérence et la scalabilité.",
                        "Recueil de retours concrets pour ajuster le design avant la mise en production.",
                      ].map((feature, index) => (
                        <div key={index} className="w-full flex justify-start items-start gap-4">
                          <div className="w-7 h-7 bg-[#123293] rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-white rounded-sm" />
                          </div>
                          <div className="flex-1 text-neutral-900 text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Web Design Card */}
              <div className="relative">
                <div className="p-2 sm:p-2.5 absolute -top-6 left-2 origin-top-left -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] flex justify-center items-center gap-2.5 z-10">
                  <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] leading-loose">
                    Web Design
                  </div>
                </div>
                <Card className="h-auto min-h-[980px] p-4 sm:p-6 rounded-xl border border-[#123293] flex flex-col justify-start items-start gap-2.5 pt-8">
                  <div className="w-full flex flex-col justify-start items-start gap-8 sm:gap-16">
                    <div className="w-full h-auto min-h-[320px] flex flex-col justify-between items-start">
                      <div className="py-2 flex flex-col justify-start items-start gap-4">
                        <div className="text-left">
                          <span className="text-stone-950 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                            Des sites{" "}
                          </span>
                          <span className="text-[#123293] text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                            web épurés,
                            <br />
                            performants
                          </span>
                          <span className="text-stone-950 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                            , pensés pour
                            <br />
                            convertir.
                          </span>
                        </div>
                        <div className="w-full text-black/50 text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                          Idéal pour les entrepreneur·es, petites entreprises ou associations qui veulent une présence
                          en ligne efficace et facile à prendre en main.
                        </div>
                      </div>
                      <div className="h-auto flex justify-start items-end gap-1">
                        <div className="text-neutral-900 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                          à partir de
                        </div>
                        <div className="flex justify-start items-baseline">
                          <span className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-bold font-['Helvetica_Neue'] leading-tight">
                            700{" "}
                          </span>
                          <span className="text-neutral-900 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-tight">
                            €
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-3.5">
                      {[
                        "Un site clair, responsive et optimisé pour présenter votre activité avec impact.",
                        "Une identité visuelle cohérente avec vos valeurs, vos couleurs, vos typographies et vos visuels.",
                        "Un site rapide, léger et facile à maintenir, conçu sur un outil no-code selon vos besoins.",
                        "Des balises, métadonnées et bonnes pratiques intégrées pour améliorer votre visibilité sur Google.",
                        "Mentions légales, politique de confidentialité et gestion des cookies incluses.",
                        "Une session pour vous apprendre à gérer votre site en toute autonomie, sans jargon technique.",
                      ].map((feature, index) => (
                        <div key={index} className="w-full flex justify-start items-start gap-4">
                          <div className="w-7 h-7 bg-[#123293] rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-white rounded-sm" />
                          </div>
                          <div className="flex-1 text-neutral-900 text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Facilitation Card */}
              <div className="relative">
                <div className="p-2 sm:p-2.5 absolute -top-6 left-2 origin-top-left -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] flex justify-center items-center gap-2.5 z-10">
                  <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] leading-loose">
                    Facilitation
                  </div>
                </div>
                <Card className="h-auto min-h-[980px] p-4 sm:p-6 rounded-xl border border-[#123293] flex flex-col justify-start items-start gap-2.5 pt-8">
                  <div className="w-full flex flex-col justify-start items-start gap-8 sm:gap-16">
                    <div className="w-full h-auto min-h-[320px] flex flex-col justify-between items-start">
                      <div className="py-2 flex flex-col justify-start items-start gap-4">
                        <div className="text-stone-950 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                          Workshops, design sprints,
                          <br />
                          ateliers d'alignement ou
                          <br />
                          d'idéation.
                        </div>
                        <div className="w-full">
                          <span className="text-neutral-900/50 text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                            Je conçois et anime des sessions collaboratives qui font avancer vos projets, en impliquant
                            vos équipes. Disponible à la session ou en accompagnement régulier{" "}
                          </span>
                          <span className="text-black/50 text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                            .
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-auto flex justify-start items-end gap-1">
                        <div className="flex justify-start items-baseline">
                          <span className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-bold font-['Helvetica_Neue'] leading-tight">
                            450{" "}
                          </span>
                          <span className="text-neutral-900 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-tight">
                            €{" "}
                          </span>
                        </div>
                        <div className="text-neutral-900 text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-tight">
                          / jour
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-3.5">
                      {[
                        "Un cadrage stratégique pour définir les objectifs, les parties prenantes et le périmètre du projet pour démarrer sur de bonnes bases.",
                        "Création sur-mesure de formats collaboratifs adaptés à votre contexte et à vos enjeux.",
                        "Conduite dynamique et bienveillante pour faire émerger les idées et favoriser l'intelligence collective.",
                        "Utilisation d'outils comme le design thinking, le design sprint ou le co-développement selon les besoins.",
                        "Restitution claire et actionnable de ce qui a été produit pendant l'atelier.",
                        "Faire émerger collectivement des pistes réalistes, utiles et alignées sur les objectifs du groupe.",
                      ].map((feature, index) => (
                        <div key={index} className="w-full flex justify-start items-start gap-4">
                          <div className="w-7 h-7 bg-[#123293] rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-white rounded-sm" />
                          </div>
                          <div className="flex-1 text-neutral-900 text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="flex flex-col items-center gap-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Inter'] mb-6">
                Parlons de <span className="text-[#123293]">votre projet</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 bg-[#123293] text-white rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Échangeons</h3>
                <p className="mb-6">Un appel de 30 minutes pour comprendre vos besoins.</p>
                <a 
                  href="mailto:salomemullet@studiosmalt.fr"
                  className="inline-block bg-white text-[#123293] px-6 py-2 rounded-[14px] font-medium"
                >
                  Prendre rendez-vous
                </a>
              </Card>

              <Card className="p-6 bg-[#f9d45c] text-black rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Devis rapide</h3>
                <p className="mb-6">Recevez une proposition détaillée sous 24h.</p>
                <a 
                  href="mailto:salomemullet@studiosmalt.fr"
                  className="inline-block bg-[#123293] text-white px-6 py-2 rounded-[14px] font-medium"
                >
                  Demander un devis
                </a>
              </Card>

              <Card className="p-6 bg-black text-white rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Démarrage</h3>
                <p className="mb-6">On définit ensemble le périmètre et on commence.</p>
                <a 
                  href="mailto:salomemullet@studiosmalt.fr"
                  className="inline-block bg-white text-black px-6 py-2 rounded-[14px] font-medium"
                >
                  Lancer le projet
                </a>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/logo blanc.svg" alt="Studio Smalt" width={120} height={40} className="mb-6" />
              <div className="flex gap-4">
                <a href="https://linkedin.com" className="text-white/70 hover:text-white">LinkedIn</a>
                <a href="https://dribbble.com" className="text-white/70 hover:text-white">Dribbble</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <div className="flex flex-col gap-2">
                <Link href="/projets" className="text-white/70 hover:text-white">Mes projets</Link>
                <Link href="/ressources" className="text-white/70 hover:text-white">Ressources</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <address className="text-white/70 not-italic">
                Incubée à la BGE<br />
                8, Rue Denis Papin<br />
                Business Pôle Les Prés,<br />
                59650 Villeneuve-d'Ascq
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
