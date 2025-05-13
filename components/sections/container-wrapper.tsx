"use client"

import { CheckIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Service card data
const services = [
  {
    title: "Product Design",
    description: "Conception de produits numériques utiles, ergonomiques et désirables.",
    price: "380",
    priceUnit: "/ jour",
    features: [
      "Analyse des besoins utilisateurs et des objectifs métier",
      "Organisation de sessions de co-conception",
      "Conception de l'architecture et des flux de navigation",
      "Réalisation de maquettes cliquables",
      "Mise en place d'un système de composants",
      "Recueil de retours et ajustements",
    ],
  },
  {
    title: "Web Design",
    description: "Des sites web épurés, performants, pensés pour convertir.",
    price: "700",
    priceUnit: "",
    pricePrefix: "à partir de",
    features: [
      "Site responsive pour tous les appareils",
      "Identité visuelle cohérente",
      "Site rapide, léger et facile à maintenir",
      "Optimisation pour le référencement",
      "Mentions légales et politique de confidentialité",
      "Formation à la gestion du site",
    ],
    footnote: "*Quatre niveaux d'offre selon vos besoins : Basic, Essential, Professional et Advanced.",
  },
  {
    title: "Facilitation",
    description: "Workshops, design sprints, ateliers d'alignement ou d'idéation.",
    price: "450",
    priceUnit: "/ jour",
    features: [
      "Cadrage stratégique du projet",
      "Création de formats collaboratifs sur-mesure",
      "Animation dynamique et bienveillante",
      "Utilisation d'outils adaptés",
      "Restitution claire et actionnable",
      "Émergence de solutions alignées sur vos objectifs",
    ],
  },
]

export const ContainerWrapper = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-start gap-16">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[#123293] text-sm font-['Helvetica_Neue-Bold',Helvetica] uppercase tracking-wider">
              Tarifs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Des offres <span className="text-[#123293]">claires</span>, des tarifs{" "}
              <span className="text-[#123293]">justes</span>
            </h2>
            <p className="text-[#191818]/70 text-lg max-w-[600px] mt-2">
              Des tarifs transparents adaptés à vos besoins et à votre budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#123293] font-['Helvetica_Neue-Bold',Helvetica] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#191818]/70 text-base mb-4">{service.description}</p>

                      <div className="flex items-end gap-1 mb-6">
                        {service.pricePrefix && (
                          <span className="text-[#191818]/70 text-sm self-end mb-1">{service.pricePrefix}</span>
                        )}
                        <span className="text-3xl font-bold text-[#191818]">{service.price} €</span>
                        {service.priceUnit && (
                          <span className="text-[#191818]/70 text-sm self-end mb-1">{service.priceUnit}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#123293]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckIcon className="w-3 h-3 text-[#123293]" />
                          </div>
                          <p className="text-[#191818]/70 text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {service.footnote && <p className="text-xs text-[#191818]/50 mt-4">{service.footnote}</p>}
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
