"use client"
import { Button } from "@/components/ui/button"

export const HeroHeader = () => {
  return (
    <section className="hero-header w-full min-h-screen pt-20 sm:pt-28 pb-12 sm:pb-24 relative bg-[#123293] flex justify-center items-center overflow-hidden px-4 sm:px-6">
      {/* Vector background - hidden on mobile for better performance */}
      <img
        className="vector absolute right-[10%] lg:right-[200px] top-[30%] lg:top-[419.12px] w-[400px] sm:w-[500px] lg:w-[679.59px] h-[400px] sm:h-[500px] lg:h-[754.89px] origin-top-left rotate-[103.80deg] bg-white/10 rounded-sm border-2 border-white/20 hidden sm:block"
        alt="Vector"
        src="/vector-13.png"
      />

      <div className="container w-full max-w-6xl flex flex-col justify-start items-center gap-6 sm:gap-8 relative z-10">
        <div className="ttile w-full flex flex-col justify-start items-start gap-3 sm:gap-5">
          <div className="heading-pourquoi w-full text-center text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] uppercase leading-loose">
            STUDIO DIGITAL
          </div>
          <div className="title w-full flex flex-col justify-center items-center gap-2 sm:gap-2.5">
            <div className="div w-full text-center text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-['Helvetica_Neue'] leading-tight">
              Smart
            </div>
            <div className="background-shadow w-full max-w-[90%] sm:max-w-[860.78px] px-2 sm:px-2.5 py-1 sm:py-1.5 origin-top-left -rotate-1 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(18,18,20,1.00)] flex justify-center items-center gap-2.5">
              <div className="text-wrapper-2 w-full text-center text-[#123293] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-['Helvetica_Neue'] leading-tight">
                Alternative
              </div>
            </div>
          </div>
        </div>
        <p className="p w-full text-center text-white text-base sm:text-lg md:text-xl font-light font-['Inter'] leading-relaxed px-4">
          Design agile, centré utilisateurs, orienté livraison
        </p>
        <Button className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-[#f9d45c] rounded-xl sm:rounded-2xl text-[#123293] text-sm sm:text-base font-bold font-['Inter'] leading-tight">
          Discuter de votre projet
        </Button>
      </div>
    </section>
  )
}
