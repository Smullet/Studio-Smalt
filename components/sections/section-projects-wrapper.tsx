"use client"

import { Button } from "@/components/ui/button"

export const SectionProjectsWrapper = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-start gap-16">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[#123293] text-sm font-['Helvetica_Neue-Bold',Helvetica] uppercase tracking-wider">
              À propos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Qui se cache derrière <span className="text-[#123293]">Smalt</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="flex flex-col gap-6">
              <p className="text-[#191818] text-lg">
                <span className="text-[#191818]/70">Je suis designer indépendante spécialisée</span>{" "}
                <span className="font-medium">en Product Design, facilitation et Web design.</span>
              </p>

              <p className="text-[#191818] text-lg">
                <span className="text-[#191818]/70">Après plusieurs années en entreprise et en startup,</span>{" "}
                <span className="font-medium">j'ai choisi de me lancer seule</span>{" "}
                <span className="text-[#191818]/70">pour travailler différemment :</span>{" "}
                <span className="font-medium">plus près des gens, plus à l'écoute des vrais besoins.</span>
              </p>

              <p className="text-[#191818] text-lg">
                <span className="text-[#191818]/70">Aujourd'hui, je mets mes compétences au service de</span>{" "}
                <span className="font-medium">projets concrets, utiles et accessibles.</span>{" "}
                <span className="text-[#191818]/70">J'aime travailler avec celles et ceux qui veulent rendre leur</span>{" "}
                <span className="font-medium">
                  communication plus claire, leur produit plus fluide, leur idée plus tangible.
                </span>
              </p>

              <p className="text-[#191818] text-lg">
                <span className="text-[#191818]/70">Je suis basée à</span>{" "}
                <span className="font-medium">Douai, mobile à Lille, et je travaille aussi très bien à distance.</span>
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/atcd5am1fncx4hnnypmrqtplhvo-jpeg.png"
                  alt="Salomé Mullet - Product Designer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#123293] rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Travaillons ensemble, vraiment</h3>
                <p className="mb-6">
                  Smalt, c'est aussi une aventure humaine. Je crois aux collaborations durables, basées sur la
                  confiance, la transparence et l'écoute mutuelle.
                </p>
                <Button className="bg-white text-[#123293] hover:bg-white/90 w-full">Envie de faire équipe ?</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
