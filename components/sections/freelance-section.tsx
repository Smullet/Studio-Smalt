"use client"

import { motion } from "framer-motion"
import { RevealText } from "@/components/animations/reveal-text"

export const FreelanceSection = () => {
  return (
    <section className="w-full bg-[#F6F7F9] py-24">
      <div className="container mx-auto px-4 max-w-[1174px]">
        <div className="flex flex-col gap-6">
          {/* Logo Studio Smalt */}
          <motion.div 
            className="p-2.5 -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] leading-loose px-2">
              Studio Smalt
            </div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1 
            className="text-[#191818] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-['Helvetica_Neue'] leading-tight max-w-[574px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Freelance oui, freestyle non
          </motion.h1>

          {/* Description */}
          <div className="text-[#191818] text-lg font-normal font-['Helvetica_Neue'] leading-relaxed max-w-[588px] mt-8">
            <RevealText delay={0.4}>
              Chez Studio Smalt, je ne fais pas de design "au feeling".
              <br /><br />
              Je suis <span className="font-bold">Salomé Mullet</span>, freelance en product design, et j'accompagne les équipes produit, tech et marketing dans la création d'interfaces claires, utiles et testées.
              <br /><br />
              Pas de blabla ni de refontes uniquement cosmétiques : chaque mission suit une méthodologie éprouvée, de l'atelier de cadrage jusqu'à la livraison prête à intégrer.
            </RevealText>
          </div>

          {/* Points clés */}
          <motion.div 
            className="text-[#191818] text-lg font-normal font-['Helvetica_Neue'] leading-relaxed mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-[#123293]">🎯</span>
                <span>Structurer vos idées avec vos utilisateurs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#123293]">🎯</span>
                <span>Prototyper vite pour tester mieux</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#123293]">🎯</span>
                <span>Livrer des parcours cohérents, conçus pour durer</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 