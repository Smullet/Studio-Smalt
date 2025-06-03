"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ProjectModal } from "@/components/ui/project-modal"
import { useState } from "react"

const MotionCard = motion(Card)

const ovhProjectData = {
  title: "OVH-Refonte UX/UI d'un site complexe et multi-parcours",
  context: "OVH, leader européen des solutions cloud et d'hébergement, souhaitait moderniser son site web pour améliorer l'expérience utilisateur et refléter une image plus professionnelle et innovante. La complexité des parcours et la multiplicité des services proposés rendaient la navigation confuse et peu engageante, aussi bien pour les développeurs techniques que pour les PME et grandes entreprises à la recherche de solutions adaptées.",
  objectives: [
    "Clarifier la structure du site en divisant les offres en trois univers distincts : Cloud, Sites & Hébergements, Serveurs Dédiés.",
    "Simplifier les parcours d'achat et de souscription pour tous les profils d'utilisateurs.",
    "Renforcer l'image de marque d'OVH avec un design moderne, cohérent et orienté utilisateur."
  ],
  contribution: {
    analysis: "Analyse des besoins utilisateurs : identification des attentes et des points de friction sur le site existant, prise en compte des usages spécifiques (techniques, PME, grandes entreprises).",
    uxDesign: [
      "Wireframes clairs et hiérarchisés par univers, guidant chaque utilisateur vers les informations pertinentes.",
      "Parcours simplifiés pour l'achat et la souscription, intégrant des comparateurs de produits et des guides pédagogiques pour les non-initiés."
    ],
    visualIdentity: [
      "Charte graphique professionnelle alignée avec le positionnement innovant d'OVH.",
      "Typographies modernes, palettes de couleurs adaptées, composants cohérents pour une expérience fluide sur desktop et mobile."
    ],
    responsive: "Conception responsive : interfaces optimisées pour une expérience utilisateur sans friction sur tous les supports."
  },
  images: [
    "/projects/ovh-1.jpg",
    "/projects/ovh-2.jpg",
    "/projects/ovh-3.jpg",
    "/projects/ovh-4.jpg"
  ]
}

// Données des projets
const projects = [
  {
    id: 1,
    title: "MODERNISATION D'UN SITE COMPLEXE POUR UNE NAVIGATION INTUITIVE",
    client: "OVH",
    image: "/projects/ovh.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "PLATEFORME DE GESTION DES INVESTISSEMENTS",
    client: "Institut Catholique de Lille",
    image: "/projects/icl.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "UNE REFONTE UX CENTRÉE UTILISATEUR",
    client: "Monabanq",
    image: "/projects/monabanq.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "PLATEFORME DE MATCHING ENTRE CANDIDATS ET RECRUTEURS",
    client: "MENEA",
    image: "/projects/menea.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "UNE REFONTE UX CENTRÉE UTILISATEUR",
    client: "FRESH DATA",
    image: "/projects/freshdata.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "AMÉLIORATION DE L'ACCESSIBILITÉ NUMÉRIQUE DES ENTREPRISES",
    client: "WARREN WALTER",
    image: "/projects/warrenwalter.jpg",
    link: "#"
  }
]

// Données des cartes de contact
const contactCards = [
  {
    id: 1,
    title: "Parlez-moi de votre projet",
    description: "Un échange de 30 minutes pour comprendre vos besoins et voir comment Studio Smalt peut transformer votre idée en produit digital concret et performant.",
    image: "/contact/call.jpg",
    bgColor: "bg-[#123293]",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Recevez une proposition détaillée et sur-mesure",
    description: "En moins de 24h, recevez un devis clair et actionnable.",
    image: "/contact/proposal.jpg",
    bgColor: "bg-[#f9d45c]",
    textColor: "text-[#123293]",
  },
  {
    id: 3,
    title: "Démarrez rapidement",
    description: "On définit ensemble le périmètre (atelier de cadrage, wireframes, maquettes...) et on commence dès validation d'un suivi itératif dès les premiers jours.",
    image: "/contact/start.jpg",
    bgColor: "bg-[#0f0f0f]",
    textColor: "text-white",
  },
]

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Studio Smalt" width={120} height={40} className="h-8 sm:h-10" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/projets" className="text-gray-800 hover:text-[#123293] transition-colors text-base font-medium">
                Mes projets
              </Link>
              <Link href="/ressources" className="text-gray-800 hover:text-[#123293] transition-colors text-base font-medium">
                Ressources
              </Link>
              <a 
                href="mailto:salomemullet@studiosmalt.fr?subject=Discussion%20de%20projet&body=Bonjour%20Salomé%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
                className="bg-[#123293] text-white px-6 py-2 rounded-[14px] hover:bg-blue-900 transition-colors text-base font-medium"
              >
                Discuter de votre projet
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-white text-black mt-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="p-2.5 -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
              <div className="text-white text-[27px] font-black font-['Inter'] leading-[32.4px]">
                Mes projets
              </div>
            </div>
            <h1 className="text-center">
              <span className="text-[#191818] text-[61px] font-black font-['Inter'] leading-[64px]">Des projets qui </span>
              <span className="text-[#123293] text-[61px] font-black font-['Inter'] leading-[64px]">font la différence</span>
            </h1>
            
            <p className="max-w-2xl text-lg sm:text-xl opacity-90">
              Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases.
              On crée ensemble des solutions utiles, alignées sur votre vision.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-12 sm:py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <MotionCard
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[24px] bg-white shadow-none border-none transition-all duration-300 hover:bg-[#102D84] group cursor-pointer"
                onClick={() => project.id === 1 && setIsModalOpen(true)}
              >
                <div className="p-4">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full rounded-lg"
                      priority={project.id <= 2}
                      quality={90}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#102D84] group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-900 group-hover:text-white transition-colors duration-300">
                      {project.client}
                    </p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-white flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-8 sm:gap-16">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full min-h-96 p-3 bg-[#123293] rounded-xl flex flex-col justify-start items-center gap-4"
            >
              <div className="w-full h-52 rounded-md overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Call-5drVA2MdTaS3HrMZMU6Y9JXBMk9dFT.png"
                  alt="Parlez-moi de votre projet"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full text-center text-white text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                Parlez-moi de votre projet
              </div>
              <div className="w-full text-center text-white text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                Un échange de 30 minutes pour comprendre vos besoins et voir comment Studio Smalt peut transformer votre idée en produit digital concret et performant.
              </div>
            </MotionCard>

            <MotionCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full min-h-96 p-3 bg-[#f9d45c] rounded-xl flex flex-col justify-start items-center gap-4"
            >
              <div className="w-full h-52 rounded-md overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proposition-CNe9enbmJ40w4YwGMgyIRtk5bdPJTr.png"
                  alt="Recevez une proposition détaillée"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full text-center text-[#191818] text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                Recevez une proposition détaillée et sur-mesure
              </div>
              <div className="w-full text-center text-[#191818] text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                En moins de 24h, recevez un devis clair et actionnable.
              </div>
            </MotionCard>

            <MotionCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full min-h-96 p-3 bg-[#0f0f0f] rounded-xl flex flex-col justify-start items-center gap-4"
            >
              <div className="w-full h-52 rounded-md overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2018-04-26-14.51.49-761x1024.jpg-8Xn7B27cpInEsoVOIzLSjjopoLPihV.jpeg"
                  alt="Démarrez rapidement"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full text-center text-white text-lg sm:text-xl font-bold font-['Helvetica_Neue'] leading-relaxed">
                Démarrez rapidement
              </div>
              <div className="w-full text-center text-white text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                On définit ensemble le périmètre (atelier de cadrage, wireframes, maquettes...) et on commence dès validation d'un suivi itératif dès les premiers jours.
              </div>
            </MotionCard>
          </div>

          <div className="flex flex-col justify-start items-center gap-6 w-full">
            <a 
              href="mailto:salomemullet@studiosmalt.fr?subject=Discussion%20de%20projet&body=Bonjour%20Salomé%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
              className="w-auto px-6 py-4 bg-[#123293] rounded-[14px] text-white text-base font-bold font-['Helvetica_Neue'] leading-tight hover:bg-blue-900 transition-colors text-center"
            >
              Discuter de votre projet
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo and social links */}
            <div className="flex flex-col gap-6">
              <Image
                src="/logo-blanc.svg"
                alt="Studio Smalt"
                width={120}
                height={40}
                className="h-8 sm:h-10"
              />
              <div className="flex gap-4">
                <Link
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
                </Link>
                <Link
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
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-4">
              <Link href="https://www.studiosmalt.fr/projets" className="text-white/70 hover:text-white transition-colors">
                Mes projets
              </Link>
              <Link href="https://www.studiosmalt.fr/ressources" className="text-white/70 hover:text-white transition-colors">
                Ressources
              </Link>
              <Link href="#mentions-legales" className="text-white/70 hover:text-white transition-colors">
                Mentions légales
              </Link>
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

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={ovhProjectData}
      />
    </main>
  )
} 