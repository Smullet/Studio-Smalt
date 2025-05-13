"use client"

import { Card, CardContent } from "@/components/ui/card"

export const SectionProjects = () => {
  // Data for the approach steps
  const approachSteps = [
    {
      id: 1,
      title: "Comprendre",
      description:
        "Avant de dessiner quoi que ce soit, je prends le temps de m'immerger dans votre univers. À travers des ateliers collaboratifs, des interviews ciblées ou une observation de vos usages terrain, je m'attache à comprendre vos objectifs, vos contraintes, mais surtout vos utilisateurs.",
    },
    {
      id: 2,
      title: "Concevoir",
      description:
        "Une fois les besoins clarifiés, je passe à la conception. Je traduis les idées en parcours, puis en interfaces, à travers des wireframes, des maquettes interactives et un design UI soigné. Chaque élément visuel est pensé pour être à la fois beau, fonctionnel et aligné avec votre identité.",
    },
    {
      id: 3,
      title: "Valider",
      description:
        "Le design n'est jamais figé. Je teste, j'écoute, j'ajuste. Grâce à des retours utilisateurs concrets et des itérations rapides, je valide chaque étape avec vous pour m'assurer que le produit répond vraiment à vos enjeux et ceux de vos utilisateurs.",
    },
    {
      id: 4,
      title: "Livrer",
      description:
        "Enfin, je vous remets un livrable propre, structuré et prêt à l'usage. Que ce soit un design finalisé prêt à être développé, un design system complet, ou un site Web mis en ligne sur une plateforme no-code, tout est pensé pour être maintenable, évolutif et durable dans le temps.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[#f9f9f9]">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-start gap-16">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[#123293] text-sm font-['Helvetica_Neue-Bold',Helvetica] uppercase tracking-wider">
              Notre approche
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Une approche <span className="text-[#123293]">agile</span>, <span className="text-[#123293]">simple</span>{" "}
              et <span className="text-[#123293]">humaine</span>
            </h2>
            <p className="text-[#191818]/70 text-lg max-w-[600px] mt-2">
              Notre méthodologie est centrée sur vos besoins et ceux de vos utilisateurs, avec un processus clair et
              efficace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {approachSteps.map((step) => (
              <Card
                key={step.id}
                className="bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#123293]/10 flex items-center justify-center text-[#123293] font-bold text-xl">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-bold text-[#123293] font-['Helvetica_Neue-Bold',Helvetica]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#191818]/70 text-base">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
