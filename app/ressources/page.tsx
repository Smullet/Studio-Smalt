"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { HeroHeader } from "@/components/sections/hero-header"
import { MobileMenu } from "@/components/mobile-menu"

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
    </main>
  )
} 