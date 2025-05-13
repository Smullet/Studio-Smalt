"use client"

import { Button } from "@/components/ui/button"

export const HeroHeader = () => {
  return (
    <section className="flex flex-col items-start justify-center w-full py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden relative bg-white">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col items-start gap-8 max-w-[800px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#191818] leading-[1.1] [font-family:'Helvetica_Neue-Bold',Helvetica]">
            Nous sommes un <span className="text-[#123293]">studio digital</span>, pour lancer et accélérer vos produits
            numériques.
          </h1>

          <p className="text-[#191818]/70 text-lg md:text-xl max-w-[600px] leading-relaxed">
            Smalt accompagne les TPE, PME, startups et collectivités dans la création de solutions numériques utiles,
            humaines et adaptées à leurs besoins.
          </p>

          <Button className="bg-[#123293] text-white hover:bg-[#123293]/90 rounded-md px-8 py-6 text-base font-['Helvetica_Neue-Bold',Helvetica] mt-4">
            Découvrir nos réalisations
          </Button>
        </div>
      </div>
    </section>
  )
}
