"use client"

import { Card, CardContent } from "@/components/ui/card"

// Service tag component with minimal animation
const ServiceTag = ({ text }: { text: string }) => (
  <div className="relative h-auto py-1 px-3 sm:h-[26.5px] sm:px-5 sm:py-0.5 rounded-md overflow-hidden inline-flex items-center bg-[#f8f9fc] hover:bg-white hover:shadow-sm transition-all duration-300">
    <div className="font-normal text-[#191818] text-xs sm:text-sm tracking-[-0.45px] leading-[1.4] sm:leading-[22.5px] whitespace-nowrap font-['Inter',Helvetica]">
      {text}
    </div>
  </div>
)

export const SectionIntro = () => {
  // Data for Product Design services
  const productDesignTags = [
    "UI UX Design",
    "Design System",
    "Prototype Figma",
    "Design Sprint",
    "Tests Utilisateurs",
    "Discovery",
    "Delivery",
  ]

  // Data for Web Design services
  const webDesignTags = [
    "Création de site vitrine",
    "Site responsive",
    "SEO friendly",
    "Identité visuelle",
    "Web design no-code",
  ]

  // Data for Facilitation services
  const facilitationTags = [
    "Facilitation UX",
    "Sprint Design",
    "Design Thinking",
    "Stratégie RSE",
    "Intelligence collective",
    "Atelier présentiel ou à distance",
    "Pitch decks & presentations",
  ]

  return (
    <section className="py-20 md:py-32 flex flex-col w-full items-start justify-center relative bg-white">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-start gap-16">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[#123293] text-sm font-['Helvetica_Neue-Bold',Helvetica] uppercase tracking-wider">
              Nos services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Des solutions digitales qui <span className="text-[#123293]">vous ressemblent</span>, et qui{" "}
              <span className="text-[#123293]">fonctionnent</span>
            </h2>
            <p className="text-[#191818]/70 text-lg max-w-[600px] mt-2">
              Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases. On crée
              ensemble des solutions utiles, alignées sur votre vision, et qui parlent vraiment à vos utilisateurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <Card className="bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#123293] font-['Helvetica_Neue-Bold',Helvetica]">
                    Product Design
                  </h3>
                  <p className="text-[#191818]/70 text-base">
                    Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs : interfaces
                    intuitives, parcours fluides, maquettes testables, design systems…
                  </p>
                  <div className="flex flex-wrap items-start gap-2 mt-4">
                    {productDesignTags.slice(0, 5).map((tag, index) => (
                      <ServiceTag key={index} text={tag} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#123293] font-['Helvetica_Neue-Bold',Helvetica]">
                    Web Design
                  </h3>
                  <p className="text-[#191818]/70 text-base">
                    Je crée des sites clairs, performants et modernes pour valoriser votre activité. Sites vitrine,
                    pages d'atterrissage ou plateformes simples, développés en no-code.
                  </p>
                  <div className="flex flex-wrap items-start gap-2 mt-4">
                    {webDesignTags.slice(0, 5).map((tag, index) => (
                      <ServiceTag key={index} text={tag} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#123293] font-['Helvetica_Neue-Bold',Helvetica]">
                    Facilitation
                  </h3>
                  <p className="text-[#191818]/70 text-base">
                    Vous avez des idées, des projets ou des équipes à aligner ? J'anime des ateliers pour structurer
                    votre vision, clarifier vos priorités et avancer ensemble.
                  </p>
                  <div className="flex flex-wrap items-start gap-2 mt-4">
                    {facilitationTags.slice(0, 5).map((tag, index) => (
                      <ServiceTag key={index} text={tag} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
