"use client"

import { motion } from "framer-motion"

interface Logo {
  id: string
  name: string
  src: string
  alt: string
  width?: number
  height?: number
}

interface LogosSectionProps {
  title?: string
  subtitle?: string
  logos?: Logo[]
}

export const LogosSection = ({
  title = "Ils me font confiance",
  subtitle = "Des entreprises de toutes tailles qui ont choisi Smalt pour leurs projets digitaux",
  logos = defaultLogos,
}: LogosSectionProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
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

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                width={logo.width}
                height={logo.height}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Logos par défaut - vous pouvez les remplacer par vos vrais logos
const defaultLogos: Logo[] = [
  {
    id: "1",
    name: "Apple",
    src: "/logos/apple.png",
    alt: "Apple",
    width: 120,
    height: 48,
  },
  {
    id: "2",
    name: "Monabanq",
    src: "/logos/monabanq.png",
    alt: "Monabanq",
    width: 120,
    height: 48,
  },
  {
    id: "3",
    name: "OVH",
    src: "/logos/ovh.png",
    alt: "OVH",
    width: 120,
    height: 48,
  },
  {
    id: "4",
    name: "Nestor",
    src: "/logos/nestor.png",
    alt: "Nestor",
    width: 120,
    height: 48,
  },
  {
    id: "5",
    name: "Cocon",
    src: "/logos/cocon.png",
    alt: "Cocon",
    width: 120,
    height: 48,
  },
  {
    id: "6",
    name: "Client 6",
    src: "/logos/client6.png",
    alt: "Client 6",
    width: 120,
    height: 48,
  },
  {
    id: "7",
    name: "Client 7",
    src: "/logos/client7.png",
    alt: "Client 7",
    width: 120,
    height: 48,
  },
  {
    id: "8",
    name: "Client 8",
    src: "/logos/client8.png",
    alt: "Client 8",
    width: 120,
    height: 48,
  },
  {
    id: "9",
    name: "Client 9",
    src: "/logos/client9.png",
    alt: "Client 9",
    width: 120,
    height: 48,
  },
  {
    id: "10",
    name: "Client 10",
    src: "/logos/client10.png",
    alt: "Client 10",
    width: 120,
    height: 48,
  },
  {
    id: "11",
    name: "Client 11",
    src: "/logos/client11.png",
    alt: "Client 11",
    width: 120,
    height: 48,
  },
  {
    id: "12",
    name: "Client 12",
    src: "/logos/client12.png",
    alt: "Client 12",
    width: 120,
    height: 48,
  },
]
