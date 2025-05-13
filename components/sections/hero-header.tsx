"use client"

import { Button } from "@/components/ui/button"

export const HeroHeader = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-24 md:py-32 px-4 overflow-hidden relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#123293] via-[#2d4cad] to-[#7e96e9] opacity-90 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm z-0"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-[#fff]/5 rotate-45 z-0"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 rounded-full border-2 border-white/10 z-0"></div>

      <div className="flex flex-col items-center text-center gap-8 sm:gap-10 max-w-[1000px] z-10">
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
          <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl text-white tracking-[-2px] leading-[1.1] [font-family:'Helvetica_Neue-Bold',Helvetica]">
            <span className="block">Studio digital</span>
            <span className="text-[#e7e8f0]">alternative</span>
          </h1>

          <p className="text-center text-white font-body-regular-m text-lg sm:text-xl max-w-[800px] leading-[1.6] mt-4">
            Smalt accompagne les TPE, PME, startups et collectivités dans la création de solutions numériques utiles,
            humaines et adaptées à leurs besoins.
          </p>
        </div>

        <Button className="bg-white text-[#123293] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-['Helvetica_Neue-Bold',Helvetica] transition-all hover:scale-105">
          15 MIN POUR DISCUTER DE VOTRE PROJET
        </Button>

        <div className="flex flex-wrap gap-8 justify-center mt-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <span className="text-white">★</span>
            </div>
            <span className="text-white text-sm">Des solutions sur-mesure</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <span className="text-white">★</span>
            </div>
            <span className="text-white text-sm">Sans engagement</span>
          </div>
        </div>
      </div>
    </section>
  )
}
