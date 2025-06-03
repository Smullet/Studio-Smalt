'use client';

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HeroHeader } from "@/components/sections/hero-header"
import { ServicesSection } from "@/components/sections/services-section"
import { MobileMenu } from "@/components/mobile-menu"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { RevealText } from '@/components/animations/RevealText'
import Link from "next/link"
import { Footer } from "@/components/ui/footer"
import '../styles/animations.css'
import '../styles/sliding-cards.css'

export function ClientPage() {
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const contactRef = useRef(null)

  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" })
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })

  const processSteps = [
    {
      number: "1",
      title: "Comprendre",
      description: "À travers des ateliers collaboratifs, des interviews ciblées ou une observation de vos usages terrain, je m'attache à comprendre vos objectifs, vos contraintes, mais surtout vos utilisateurs.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comprendre-9wh6bDjLrCh4ZqIyuWZz47JdT91AoM.png"
    },
    {
      number: "2",
      title: "Concevoir",
      description: "Une fois les besoins clarifiés, je passe à la conception. Je traduis les idées en parcours, puis en interfaces, à travers des wireframes, des maquettes interactives et un design UI soigné.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/concevoir-jXnXukmvdCd6kp1EYx6Y3MRxpTXYEb.png"
    },
    {
      number: "3",
      title: "Valider",
      description: "Grâce à des retours utilisateurs concrets et des itérations rapides, je valide chaque étape avec vous pour m'assurer que le produit répond vraiment à vos enjeux et ceux de vos utilisateurs.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/valider-DGqVrFFf4WLmSGhDKNzNdp9qsj3k5l.png"
    },
    {
      number: "4",
      title: "Livrer",
      description: "Enfin, je vous remets un livrable propre, structuré et prêt à l'usage. Que ce soit un design finalisé prêt à être développé, un design system complet, ou un site Web mis en ligne sur une plateforme no-code.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livrer-EWRQTCsS04fGS7q6ZwIguCQXcuZsoJ.png"
    }
  ]

  return (
    <div className="w-full relative bg-white overflow-hidden">
      {/* Mobile menu */}
      <MobileMenu />

      {/* Hero Section */}
      <HeroHeader />

      {/* About Section */}
      <section className="w-full py-24 bg-[#F6F7F9]">
        <div className="container mx-auto px-4 max-w-[1174px]">
          <div className="flex flex-col gap-6">
            <div className="p-2.5 -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center w-fit">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] leading-loose px-2">
                Studio Smalt
              </div>
            </div>

            <h1 className="text-[#191818] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-['Helvetica_Neue'] leading-tight max-w-[574px] text-reveal">
              Freelance oui, freestyle non
            </h1>

            <div className="text-[#191818] text-lg font-normal font-['Helvetica_Neue'] leading-relaxed max-w-[588px] mt-8">
              <RevealText delay={0.4}>
                Chez Studio Smalt, je ne fais pas de design "au feeling".
                <br /><br />
                Je suis <span className="font-bold">Salomé Mullet</span>, freelance en product design, et j'accompagne les équipes produit, tech et marketing dans la création d'interfaces claires, utiles et testées.
                <br /><br />
                Pas de blabla ni de refontes uniquement cosmétiques : chaque mission suit une méthodologie éprouvée, de l'atelier de cadrage jusqu'à la livraison prête à intégrer.
              </RevealText>
            </div>

            <div className="text-[#191818] text-lg font-normal font-['Helvetica_Neue'] leading-relaxed max-w-[511px] mt-12">
              <RevealText delay={0.6}>
                🎯 Mon approche :
                <br /><br />
                • Structurer vos idées avec vos utilisateurs
                <br />
                • Prototyper vite pour tester mieux
                <br />
                • Livrer des parcours cohérents, conçus pour durer
              </RevealText>
            </div>

            <div className="mt-8">
              <RevealText delay={0.8}>
                <a 
                  href="mailto:salomemullet@studiosmalt.fr?subject=Discussion%20de%20projet&body=Bonjour%20Salomé%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
                  className="text-[#123293] text-lg font-bold hover:text-blue-700 transition-colors"
                >
                  Alors... parlons plus !
                </a>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Process Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-[#1C1E28] flex flex-col justify-center items-center gap-8 sm:gap-12 px-4 sm:px-6">
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

        {/* Process Cards - Sliding */}
        <div className="sliding-cards-container">
          {processSteps.map((step, index) => (
            <div key={index} className="sliding-card" style={{backgroundImage: `url(${step.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="sliding-card-content">
                <div className="sliding-card-number">{step.number}</div>
                <h3 className="sliding-card-title">{step.title}</h3>
                <p className="sliding-card-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
} 