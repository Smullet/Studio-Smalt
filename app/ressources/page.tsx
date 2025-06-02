"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { HeroHeader } from "@/components/sections/hero-header"
import { MobileMenu } from "@/components/mobile-menu"
import { Footer } from "@/components/sections/footer"
import Image from "next/image"

const MotionCard = motion(Card)

// Articles de ressources
const resources = [
  {
    id: 1,
    title: "Jamstack, sauveur des petits commerces",
    date: "27 octobre 2023",
    excerpt: "Avec la crise du COVID-19, le e-commerce a explosé, tout comme le besoin de se différencier de la concurrence. Une opportunité pour le Jamstack de devenir le sauveur des petites entreprises.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    url: "#",
  },
  {
    id: 2,
    title: "Guide complet du Design System",
    date: "15 octobre 2023",
    excerpt: "Comment créer et maintenir un design system efficace ? Découvrez les meilleures pratiques et outils pour une cohérence visuelle parfaite.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    url: "#",
  },
  {
    id: 3,
    title: "L'importance des tests utilisateurs",
    date: "5 octobre 2023",
    excerpt: "Les tests utilisateurs sont essentiels pour créer des produits qui répondent aux besoins réels. Voici comment les mettre en place efficacement.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
    url: "#",
  },
]

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img src="/logo.svg" alt="Studio Smalt" className="h-8 sm:h-10" />
            </a>
            {/* Navigation desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#projets" className="text-gray-800 hover:text-[#123293] transition-colors text-base font-medium">
                Mes projets
              </a>
              <a href="/ressources" className="text-gray-800 hover:text-[#123293] transition-colors text-base font-medium">
                Ressources
              </a>
              <a 
                href="mailto:salomemullet@studiosmalt.fr?subject=Discussion%20de%20projet&body=Bonjour%20Salomé%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
                className="bg-[#123293] text-white px-6 py-2 rounded-[14px] hover:bg-blue-900 transition-colors text-base font-medium"
              >
                Discuter de votre projet
              </a>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-[#123293] text-white mt-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge className="inline-flex items-center justify-center gap-2.5 p-2.5 bg-white rounded-md shadow-[2px_2px_0px_#000000]">
              <span className="font-bold text-[#123293] text-xl sm:text-[27px] tracking-[-1.08px] leading-[1.2] sm:leading-[32.4px] whitespace-nowrap font-['Helvetica_Neue-Bold',Helvetica]">
                Mes ressources
              </span>
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
              Ressources <span className="text-white">Design UX/UI</span>
            </h1>
            
            <p className="max-w-2xl text-lg sm:text-xl opacity-90 font-light">
              Bienvenue dans l'espace ressources de Studio Smalt. Vous y trouverez mes articles pour approfondir vos connaissances en design UX/UI, ainsi qu'une sélection de ressources gratuites et séries de posts pour enrichir vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="w-full py-12 sm:py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <MotionCard
                key={resource.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden bg-white rounded-xl border border-gray-200"
              >
                <div className="aspect-video relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    <span>{resource.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#123293]">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{resource.excerpt}</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-[#123293] font-medium hover:no-underline"
                    asChild
                  >
                    <a href={resource.url} className="flex items-center gap-2">
                      Lire l'article
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Studio Smalt Section */}
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
    </main>
  )
} 