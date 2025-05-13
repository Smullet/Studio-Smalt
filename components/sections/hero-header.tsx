"use client"

export const HeroHeader = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-16 sm:py-24 md:py-32 px-4 overflow-hidden relative">
      <div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-[980px] z-10">
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 w-full">
            <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl text-black tracking-[-2px] sm:tracking-[-3.84px] leading-[1.1] sm:leading-[105.6px] [font-family:'Helvetica_Neue-Bold',Helvetica]">
              Smart
            </h1>

            <div className="inline-flex items-center justify-center px-2 sm:px-2.5 py-1 sm:py-1.5 bg-[#123293] rounded-md shadow-[2px_2px_0px_#121214] -rotate-1">
              <span className="font-bold text-white text-4xl sm:text-5xl md:text-[84.9px] tracking-[-1.08px] leading-[1.1] sm:leading-[80px] [font-family:'Inter',Helvetica]">
                Alternative
              </span>
            </div>
          </div>

          <h2 className="w-full font-bold text-4xl sm:text-5xl md:text-[80px] text-[#191818] leading-[1.1] sm:leading-[80px] [font-family:'Inter',Helvetica]">
            Studio digital
          </h2>
        </div>

        <p className="text-center text-[#191818] font-body-regular-m text-sm sm:text-base tracking-[var(--body-regular-m-letter-spacing)] leading-[1.6] sm:leading-[var(--body-regular-m-line-height)] [font-style:var(--body-regular-m-font-style)]">
          Smalt accompagne les TPE, PME, startups et collectivités dans la création de solutions numériques utiles,{" "}
          humaines et adaptées à leurs besoins.
          <br className="hidden sm:block" />
          De la conception de produits digitaux à la création de sites web en passant par l&apos;animation
          d&apos;ateliers collaboratifs,
          <br className="hidden sm:block" />
          nous proposons des services sur- mesure, pensés pour vos utilisateurs et vos réalités terrain.
        </p>
      </div>
    </section>
  )
}
