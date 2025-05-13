"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const Contact = () => {
  const contactCards = [
    {
      title: "Souhaitez-vous réserver un appel découverte ?",
      description:
        "Un échange gratuit de 15 minutes pour discuter de vos besoins, répondre à vos questions, et voir si je peux vous accompagner efficacement. Pas d'engagement, juste une conversation simple pour clarifier votre projet.",
      buttonText: "Réserver mon appel découverte",
      buttonLink: "https://cal.com/salome-mullet-smalt",
    },
    {
      title: "Vous avez aimé travailler avec moi ?",
      description:
        "Votre retour compte énormément. En quelques mots, vous pouvez m'aider à faire grandir Smalt et à gagner la confiance de futurs clients. Laissez-moi un avis sur Google, c'est rapide et ça fait toute la différence. Merci d'avance pour votre soutien 🙏",
      buttonText: "Donner mon avis sur Google",
      buttonLink: "https://g.page/r/CRgCtZwKxSQyEBM/review",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[#123293]">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
          <div className="flex flex-col items-start gap-6 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Un projet à{" "}
              <span className="bg-white text-[#123293] px-2 py-1 inline-block transform -rotate-1">lancer</span> ?
              <br />
              Une idée à{" "}
              <span className="bg-white text-[#123293] px-2 py-1 inline-block transform -rotate-1">structurer</span> ?
            </h2>
          </div>

          <div className="flex flex-col gap-6 md:w-1/2">
            {contactCards.map((card, index) => (
              <Card key={index} className="w-full bg-white rounded-lg overflow-hidden border-none">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#191818] font-['Helvetica_Neue-Bold',Helvetica]">
                      {card.title}
                    </h3>

                    <p className="text-[#191818]/70 text-sm">{card.description}</p>

                    <Button className="bg-[#123293] text-white hover:bg-[#123293]/90 rounded-md w-full mt-2" asChild>
                      <a href={card.buttonLink} rel="noopener noreferrer" target="_blank">
                        {card.buttonText}
                      </a>
                    </Button>
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
