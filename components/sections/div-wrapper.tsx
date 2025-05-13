"use client"
import React from "react"

export const DivWrapper = () => {
  // Step data for the process steps
  const steps = [
    {
      id: 1,
      title: "Appel découverte",
      description:
        "Réservez un appel gratuit de 20 minutes. Un premier échange pour comprendre votre besoin, clarifier vos enjeux et voir si on avance ensemble. C'est simple, sans engagement.",
    },
    {
      id: 2,
      title: "Devis sur-mesure",
      description:
        "On démarre sous 5 jours. Pas de process complexes, pas de mails qui traînent. Une organisation fluide pour que votre projet prenne vie rapidement.",
    },
    {
      id: 3,
      title: "Démarrage express",
      description:
        "Un site bien référencé sur les moteurs de recherche attire un trafic de qualité. Je m'assure que chaque aspect de votre site est optimisé pour maximiser votre visibilité en ligne.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[#f9f9f9]">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-start gap-16">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[#123293] text-sm font-['Helvetica_Neue-Bold',Helvetica] uppercase tracking-wider">
              Processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Lancer votre projet <span className="text-[#123293]">sans attendre</span>
            </h2>
            <p className="text-[#191818]/70 text-lg max-w-[600px] mt-2">
              Un processus simple et efficace pour démarrer rapidement votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-[url(/our0caa84upt9a1jyroqg6gdwy4-jpg.png)] bg-cover bg-center rounded-lg aspect-square md:aspect-auto md:h-full"></div>

            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#123293] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {step.id}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-[#123293] font-['Helvetica_Neue-Bold',Helvetica]">
                        {step.title}
                      </h3>
                      <p className="text-[#191818]/70 text-base">{step.description}</p>
                    </div>
                  </div>

                  {index < steps.length - 1 && <div className="w-full h-px bg-gray-200"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
