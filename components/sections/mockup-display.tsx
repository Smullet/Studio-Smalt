"use client"

export const MockupDisplay = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6f7f9] to-white z-0"></div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-10 relative z-10">
        <div className="flex flex-col max-w-[500px] gap-8">
          <h2 className="text-4xl sm:text-5xl font-bold [font-family:'Helvetica_Neue-Bold',Helvetica] leading-tight">
            <span className="text-[#191818]">Des sites web </span>
            <span className="text-[#123293]">optimisés</span>
            <span className="text-[#191818]"> pour convertir</span>
          </h2>

          <p className="text-[#191818]/80 text-lg">
            Je crée des sites web à votre image, centrés sur l'utilisateur et optimisés pour les moteurs de recherche.
            Simples à mettre à jour, ils évoluent avec votre entreprise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#123293] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <p className="text-[#191818]/70 text-sm">Sites responsive pour tous les appareils</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#123293] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <p className="text-[#191818]/70 text-sm">Optimisés pour le référencement</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#123293] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <p className="text-[#191818]/70 text-sm">Design soigné et personnalisé</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#123293] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <p className="text-[#191818]/70 text-sm">Faciles à maintenir et à mettre à jour</p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[400px] h-[600px]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[270px] h-[540px] border-[12px] border-black rounded-[40px] bg-white overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-8 bg-black"></div>
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-full"></div>
            <div className="h-full w-full overflow-hidden">
              <div className="w-full h-full bg-[#123293] relative">
                <div className="absolute top-8 left-4 right-4 bottom-4 overflow-hidden">
                  <div className="w-full h-20 bg-white/10 rounded-t-lg flex items-center px-4">
                    <span className="text-white font-['Helvetica_Neue-Bold',Helvetica] text-xl">Smalt</span>
                  </div>
                  <div className="w-full h-[calc(100%-80px)] bg-white/5 flex items-center justify-center p-4">
                    <div className="text-white font-['Helvetica_Neue-Bold',Helvetica] text-4xl text-center">
                      Solutions digitales sur-mesure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 rounded-full border-4 border-[#123293]/20 z-0"></div>
          <div className="absolute bottom-20 left-0 w-16 h-16 bg-[#123293]/10 rounded-lg z-0"></div>
        </div>
      </div>
    </section>
  )
}
