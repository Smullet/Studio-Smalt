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
    <section className="flex flex-col items-center justify-center gap-16 py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#123293] via-[#2d4cad] to-[#7e96e9] opacity-90 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-white/5 z-0"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rotate-45 border-2 border-white/10 z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/10 z-0"></div>

      <div className="flex flex-wrap items-center gap-6 px-6 py-0 relative max-w-[1200px] w-full z-10">
        <div className="flex flex-col items-center justify-center relative flex-1 min-w-[300px]">
          <div className="flex items-center justify-center gap-[9.37px] py-[3.34px] relative">
            <div className="relative [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-[52.8px] whitespace-nowrap">
              Un projet à
            </div>

            <div className="inline-flex items-center justify-center p-2.5 relative bg-white -rotate-1 rounded-md shadow-[2px_2px_0px_#121214]">
              <div className="w-fit text-5xl text-center tracking-[0] leading-[52.8px] relative mt-[-1.00px] [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#123293] whitespace-nowrap">
                lancer ?
              </div>

              <div className="w-full h-full rounded-md border-[#121214] absolute top-0 left-0 border border-solid" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-[9.38px] pt-0 pb-[5px] relative mt-4">
            <div className="relative [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-[52.8px] whitespace-nowrap">
              Une idée à
            </div>

            <div className="inline-flex items-center justify-center p-2.5 relative bg-white -rotate-1 rounded-md shadow-[2px_2px_0px_#121214]">
              <div className="w-fit text-5xl text-center tracking-[0] leading-[52.8px] relative mt-[-1.00px] [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#123293] whitespace-nowrap">
                structurer ?
              </div>

              <div className="w-full h-full rounded-md border-[#121214] absolute top-0 left-0 border border-solid" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 relative flex-1 min-w-[300px] max-w-[436px]">
          {contactCards.map((card, index) => (
            <Card
              key={index}
              className="w-full bg-white rounded-[20px] overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="flex flex-col items-start gap-6 p-6">
                <div className="flex flex-col items-start gap-6 w-full">
                  <h3 className="mt-[-1.00px] font-['Helvetica_Neue-Bold',Helvetica] text-lg text-[#0f0f0f] leading-tight">
                    {card.title}
                  </h3>

                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#0f0f0f]/70 text-sm tracking-[0] leading-[1.5]">
                    {card.description}
                  </p>
                </div>

                <Button
                  className="h-[47.4px] w-full bg-[#123293] rounded-full border-none text-white px-4 py-0 hover:bg-[#123293]/90 transition-all duration-300"
                  asChild
                >
                  <a
                    className="font-['Helvetica_Neue-Bold',Helvetica] text-[15px] tracking-normal leading-[1.5] whitespace-nowrap"
                    href={card.buttonLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {card.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
