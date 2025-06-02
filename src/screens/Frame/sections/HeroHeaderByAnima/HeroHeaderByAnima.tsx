export const HeroHeaderByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-32 px-4">
      <div className="flex flex-col items-start gap-6 max-w-[980px]">
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-wrap items-center gap-6 w-full">
            <h1 className="font-bold text-8xl text-black tracking-[-3.84px] leading-[105.6px] [font-family:'Helvetica_Neue-Bold',Helvetica]">
              Smart
            </h1>

            <div className="inline-flex items-center justify-center px-2.5 py-1.5 bg-[#123293] rounded-md shadow-[2px_2px_0px_#121214]">
              <span className="font-bold text-white text-[84.9px] tracking-[-1.08px] leading-[80px] [font-family:'Helvetica_Neue-Bold',Helvetica]">
                Alternative
              </span>
            </div>
          </div>

          <h2 className="w-full font-bold text-[80px] text-[#191818] leading-[80px] [font-family:'Helvetica_Neue-Bold',Helvetica]">
            Studio digital
          </h2>
        </div>

        <p className="text-center text-[#191818] font-body-regular-m font-[number:var(--body-regular-m-font-weight)] text-[length:var(--body-regular-m-font-size)] tracking-[var(--body-regular-m-letter-spacing)] leading-[var(--body-regular-m-line-height)] [font-style:var(--body-regular-m-font-style)]">
          Smalt accompagne les TPE, PME, startups et collectivités dans la création de solutions numériques utiles,{" "}
          <br />
          humaines et adaptées à leurs besoins.
          <br />
          De la conception de produits digitaux à la création de sites web en passant par l&apos;animation
          d&apos;ateliers collaboratifs,
          <br />
          nous proposons des services sur- mesure, pensés pour vos utilisateurs et vos réalités terrain.
        </p>
      </div>
    </section>
  )
}
