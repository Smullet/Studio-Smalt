"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Logo {
  id: string
  name: string
  src: string
  alt: string
}

interface LogosCarouselProps {
  title?: string
  subtitle?: string
  logos?: Logo[]
  autoPlay?: boolean
  speed?: number
}

export const LogosCarousel = ({
  title = "Ils me font confiance",
  subtitle = "Des entreprises de toutes tailles qui ont choisi Smalt pour leurs projets digitaux",
  logos = defaultLogos,
  autoPlay = true,
  speed = 30,
}: LogosCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
    }, speed * 1000)

    return () => clearInterval(interval)
  }, [autoPlay, speed, logos.length])

  // Dupliquer les logos pour un effet de boucle infinie
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#f6f7f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#191818] mb-4 font-['Helvetica_Neue-Bold',Helvetica]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-[#191818] opacity-70 max-w-2xl mx-auto font-['Inter',Helvetica]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: `-${currentIndex * 200}px`,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
              >
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center mt-8 gap-2">
          {logos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex % logos.length ? "bg-[#123293]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Logos par défaut
const defaultLogos = [
  {
    id: "1",
    name: "Apple",
    src: "/placeholder.svg?height=48&width=120&text=Apple",
    alt: "Apple",
  },
  {
    id: "2",
    name: "Monabanq",
    src: "/placeholder.svg?height=48&width=120&text=Monabanq",
    alt: "Monabanq",
  },
  {
    id: "3",
    name: "OVH",
    src: "/placeholder.svg?height=48&width=120&text=OVH",
    alt: "OVH",
  },
  {
    id: "4",
    name: "Nestor",
    src: "/placeholder.svg?height=48&width=120&text=Nestor",
    alt: "Nestor",
  },
  {
    id: "5",
    name: "Cocon",
    src: "/placeholder.svg?height=48&width=120&text=Cocon",
    alt: "Cocon",
  },
  {
    id: "6",
    name: "Client 6",
    src: "/placeholder.svg?height=48&width=120&text=Client+6",
    alt: "Client 6",
  },
]
