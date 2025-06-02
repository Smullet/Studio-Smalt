"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HeroHeader } from "@/components/sections/hero-header"
import { ServicesSection } from "@/components/sections/services-section"
import { MobileMenu } from "@/components/mobile-menu"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { RevealText } from '@/components/animations/RevealText'

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

export default function Home() {
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const pricingRef = useRef(null)
  const contactRef = useRef(null)

  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" })
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" })
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })

  return (
    <div className="w-full relative bg-white overflow-hidden">
      {/* Mobile menu */}
      <MobileMenu />

      {/* Hero Section */}
      <HeroHeader />

      {/* About Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:pl-[470px] xl:pr-72 py-12 sm:py-16 md:py-24 bg-[#0f0f0f] flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl xl:max-w-none flex flex-col justify-center items-start gap-8 sm:gap-12 md:gap-16">
          <div className="w-full flex flex-col justify-center items-start gap-4 sm:gap-6">
            <div className="p-2 sm:p-2.5 origin-top-left -rotate-2 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
              <div className="text-[#123293] text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] leading-loose">
                Studio Smalt
              </div>
            </div>
            <div className="w-full text-white text-3xl sm:text-4xl md:text-[48px] font-black font-['Helvetica_Neue'] leading-tight sm:leading-[64px]">
              <RevealText delay={0.2}>
                Freelance oui, freestyle non
              </RevealText>
            </div>
            <div className="w-full">
              <RevealText delay={0.4} className="text-white text-base sm:text-lg md:text-xl font-normal font-['Helvetica_Neue'] leading-relaxed">
                Chez Studio Smalt, je ne fais pas de design "au feeling".
                <br className="hidden sm:block" />
                Je suis{" "}
                <span className="font-bold">Salomé Mullet</span>
                , freelance en product design, et j'accompagne les équipes produit, tech et marketing dans la création
                d'interfaces claires, utiles et testées.
                <br className="hidden sm:block" />
                Pas de blabla ni de refontes uniquement cosmétiques : <br className="hidden lg:block" />
                chaque mission suit une méthodologie éprouvée, de l'atelier de cadrage jusqu'à la livraison prête à
                intégrer.
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Made responsive */}
      <ServicesSection />

      {/* Process Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-[#123293] flex flex-col justify-center items-center gap-8 sm:gap-12 px-4 sm:px-6">
        <div className="w-full max-w-6xl flex flex-col justify-start items-center gap-8 sm:gap-12">
          <div className="w-full flex flex-col justify-start items-center gap-5">
            <div className="w-full text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black font-['Helvetica_Neue'] leading-tight xl:leading-[64px]">
              Une approche agile, simple et humaine
            </div>
            <div className="w-full opacity-70 text-center text-white text-base sm:text-lg font-normal font-['Helvetica_Neue'] leading-relaxed px-4">
              Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases.
              <br className="hidden sm:block" />
              On crée ensemble des solutions utiles, alignées sur votre vision, et qui parlent vraiment à vos
              utilisateurs.
            </div>
          </div>
        </div>

        {/* Process Cards - Made responsive */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="h-auto lg:h-[461px] p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-32 sm:w-40 h-32 sm:h-40 relative">
                <img
                  className="w-full h-full object-contain"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comprendre-9wh6bDjLrCh4ZqIyuWZz47JdT91AoM.png"
                  alt="Comprendre - Loupe avec œil symbolisant l'analyse et la compréhension"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-12">
                <div className="text-[#191818] text-6xl sm:text-7xl md:text-8xl font-black font-['Helvetica_Neue'] leading-tight">
                  1
                </div>
                <div className="flex flex-col justify-start items-start gap-3 sm:gap-5">
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="text-neutral-900 text-xl sm:text-2xl md:text-3xl font-bold font-['Helvetica_Neue'] leading-tight">
                      Comprendre
                    </div>
                  </div>
                  <div className="text-[#191818] text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                    À travers des ateliers collaboratifs, des
                    <br className="hidden sm:block" />
                    interviews ciblées ou une observation
                    <br className="hidden sm:block" />
                    de vosusages terrain, je m'attache à<br className="hidden sm:block" />
                    comprendre vos objectifs, vos
                    <br className="hidden sm:block" />
                    contraintes, mais surtout vos
                    <br className="hidden sm:block" />
                    utilisateurs.
                  </div>
                </div>
              </div>
            </Card>

            <Card className="h-auto lg:h-[461px] p-4 sm:p-6 md:p-8 bg-[#f9d45c] rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-40 sm:w-52 h-32 sm:h-40 relative">
                <img
                  className="w-full h-full object-contain"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/concevoir-jXnXukmvdCd6kp1EYx6Y3MRxpTXYEb.png"
                  alt="Concevoir - Ordinateur portable symbolisant la conception digitale"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-12">
                <div className="text-[#191818] text-6xl sm:text-7xl md:text-8xl font-black font-['Helvetica_Neue'] leading-tight">
                  2
                </div>
                <div className="flex flex-col justify-start items-start gap-3 sm:gap-5">
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="text-neutral-900 text-xl sm:text-2xl md:text-3xl font-bold font-['Helvetica_Neue'] leading-tight">
                      Concevoir
                    </div>
                  </div>
                  <div className="text-neutral-900 text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                    Une fois les besoins clarifiés, je passe à<br className="hidden sm:block" />
                    la conception. Je traduis les idées en
                    <br className="hidden sm:block" />
                    parcours, puis en interfaces, à travers
                    <br className="hidden sm:block" />
                    des wireframes, des maquettes
                    <br className="hidden sm:block" />
                    interactives et un design UI soigné.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="h-auto lg:h-[461px] p-4 sm:p-6 md:p-8 bg-[#0f0f0f] rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <img
                className="w-24 sm:w-32 h-32 sm:h-40 object-contain"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/valider-DGqVrFFf4WLmSGhDKNzNdp9qsj3k5l.png"
                alt="Valider - Main tenant un téléphone symbolisant les tests et la validation"
              />
              <div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-12">
                <div className="text-white text-6xl sm:text-7xl md:text-8xl font-black font-['Helvetica_Neue'] leading-tight">
                  3
                </div>
                <div className="flex flex-col justify-start items-start gap-3 sm:gap-5">
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-['Helvetica_Neue'] leading-tight">
                      Valider
                    </div>
                  </div>
                  <div className="text-white text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                    Grâce à des retours utilisateurs
                    <br className="hidden sm:block" />
                    concrets et des itérations rapides, je
                    <br className="hidden sm:block" />
                    valide chaque étape avec vous pour
                    <br className="hidden sm:block" />
                    m'assurer que le produit répond
                    <br className="hidden sm:block" />
                    vraiment à vos enjeux et ceux de vos
                    <br className="hidden sm:block" />
                    utilisateurs.
                  </div>
                </div>
              </div>
            </Card>

            <Card className="h-auto lg:h-[461px] p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-36 sm:w-44 h-28 sm:h-36 relative">
                <img
                  className="w-full h-full object-contain"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livrer-EWRQTCsS04fGS7q6ZwIguCQXcuZsoJ.png"
                  alt="Livrer - Avion en papier symbolisant la livraison et le déploiement"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-12">
                <div className="text-[#191818] text-6xl sm:text-7xl md:text-8xl font-black font-['Helvetica_Neue'] leading-tight">
                  4
                </div>
                <div className="flex flex-col justify-start items-start gap-3 sm:gap-5">
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="text-neutral-900 text-xl sm:text-2xl md:text-3xl font-bold font-['Helvetica_Neue'] leading-tight">
                      Livrer
                    </div>
                  </div>
                  <div className="text-[#191818] text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                    Enfin, je vous remets un livrable propre,
                    <br className="hidden sm:block" />
                    structuré et prêt à l'usage. Que ce soit
                    <br className="hidden sm:block" />
                    un design finalisé prêt à être développé,
                    <br className="hidden sm:block" />
                    un design system complet, ou un site
                    <br className="hidden sm:block" />
                    Web mis en ligne sur une plateforme
                    <br className="hidden sm:block" />
                    no-code.
                  </div>
                </div>
              </div>
            </Card>
          </div>
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
                <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] leading-loose">
                  Tarifs
                </div>
              </div>
              <div className="text-center">
                <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
                  Des offres{" "}
                </span>
                <span className="text-[#123293] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
                  claires
                </span>
                <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
                  ,<br />
                  des tarifs{" "}
                </span>
                <span className="text-[#123293] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
                  justes
                </span>
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

      <section className="w-full py-12 sm:py-16 md:py-24 bg-white flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-8 sm:gap-16">
          <div className="w-full flex flex-col justify-start items-center gap-12 sm:gap-24">
            <div className="w-full flex flex-col justify-start items-center gap-5">
              <div className="text-center">
                <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
                  Parlons de{" "}
                </span>
                <span className="text-[#123293] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
                  votre projet
                </span>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-3">
            <Card className="w-full min-h-96 p-3 bg-[#123293] rounded-xl flex flex-col justify-start items-center gap-4">
              <img
                className="w-full h-52 rounded-md object-cover"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Call-5drVA2MdTaS3HrMZMU6Y9JXBMk9dFT.png"
                alt="Appel vidéo de consultation"
              />
              <div className="w-full text-center text-white text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                Parlez-moi de votre projet
              </div>
              <div className="w-full text-center text-white text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                Un échange de 30 minutes pour comprendre vos besoins et voir comment Studio Smalt peut transformer votre
                idée en produit digital concret et performant.
              </div>
            </Card>

            <Card className="w-full min-h-96 p-3 bg-[#f9d45c] rounded-xl flex flex-col justify-start items-center gap-4">
              <img
                className="w-full h-52 rounded-md object-cover"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proposition-CNe9enbmJ40w4YwGMgyIRtk5bdPJTr.png"
                alt="Document de proposition de design produit"
              />
              <div className="w-full text-center text-[#191818] text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                Recevez une proposition détaillée et sur-mesure
              </div>
              <div className="w-full text-center text-[#191818] text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                En moins de 24h, recevez un devis clair et actionnable.
              </div>
            </Card>

            <Card className="w-full min-h-96 p-3 bg-[#0f0f0f] rounded-xl flex flex-col justify-start items-center gap-4">
              <img
                className="w-full h-52 rounded-md object-cover"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2018-04-26-14.51.49-761x1024.jpg-8Xn7B27cpInEsoVOIzLSjjopoLPihV.jpeg"
                alt="Création de projet sur tableau blanc"
              />
              <div className="w-full text-center text-white text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                Démarrez rapidement
              </div>
              <div className="w-full text-center text-white text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                On définit ensemble le périmètre (atelier de cadrage, recherches, prototype, tests), et vous bénéficiez
                d'un suivi itératif dès les premiers jours.
              </div>
            </Card>
          </div>

          <div className="flex flex-col justify-start items-center gap-6 w-full">
            <a 
              href="mailto:salomemullet@studiosmalt.fr?subject=Discussion%20de%20projet&body=Bonjour%20Salomé%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
              className="w-full sm:w-auto px-6 py-4 bg-[#123293] rounded-[14px] text-white text-base font-bold font-['Helvetica_Neue'] leading-tight hover:bg-blue-900 transition-colors text-center"
            >
              Discuter de votre projet
            </a>
          </div>
        </div>
      </section>

      <section className="w-full py-12 sm:py-16 md:py-24 bg-[#0f0f0f] flex flex-col justify-center items-center gap-8 sm:gap-16 px-4 sm:px-6">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-start items-center gap-6">
          <div className="flex flex-col justify-start items-start gap-6 flex-1">
            <div className="w-full text-white text-xl sm:text-2xl font-bold font-['Helvetica_Neue'] uppercase leading-relaxed">
              Pourquoi choisir Studio Smalt ?
            </div>
            <div className="w-full text-white text-base sm:text-lg font-normal font-['Helvetica_Neue'] leading-relaxed">
              ✅ Expertise produit et UX/UI : de l'idée au produit final, en passant par des ateliers de cadrage, des
              tests utilisateurs et des itérations rapides.
              <br />
              <br />✅ Approche agile et humaine : nous travaillons main dans la main avec vos équipes pour
              co-construire des solutions qui répondent à vos enjeux business et utilisateurs.
              <br />
              <br />✅ Transparence et réactivité : devis sous 24h, planning clair, livrables concrets, accompagnement
              sur-mesure.
            </div>
          </div>
          <img
            className="w-full lg:w-[574px] h-64 sm:h-80 rounded-2xl object-cover"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/000-looping-creatif.jpg-3zFiVWVXM2wTVvfN7jGmqg9SYuWqvc.jpeg"
            alt="Studio Smalt - Processus créatif et collaboratif"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo and social links */}
            <div className="flex flex-col gap-6">
              <Image
                src="/logo blanc.svg"
                alt="Studio Smalt"
                width={120}
                height={40}
                className="h-8 sm:h-10"
              />
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/salome-mullet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded border border-white/50 flex items-center justify-center hover:border-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded border border-white/50 flex items-center justify-center hover:border-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.25 12.84C14.67 11.87 11.83 11.87 2.75 13.72" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-4">
              <a href="#projets" className="text-white/70 hover:text-white transition-colors">
                Mes projets
              </a>
              <a href="#ressources" className="text-white/70 hover:text-white transition-colors">
                Ressources
              </a>
              <a href="#mentions-legales" className="text-white/70 hover:text-white transition-colors">
                Mentions légales
              </a>
            </div>

            {/* Address */}
            <div className="text-white/75 space-y-2">
              <p>Incubée à la BGE</p>
              <p>8, Rue Denis Papin</p>
              <p>Business Pôle Les Prés,</p>
              <p>59650 Villeneuve-d'Ascq</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
