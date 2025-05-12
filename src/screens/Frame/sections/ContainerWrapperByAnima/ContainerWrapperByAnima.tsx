import { CheckIcon } from "lucide-react"
import { Badge } from "../../../../components/ui/badge"
import { Card, CardContent } from "../../../../components/ui/card"

// Service card data
const services = [
  {
    title: "Product Design",
    description: "Conception de produits numériques utiles, ergonomiques et désirables.",
    subDescription:
      "Je vous accompagne de l'idée au prototype fonctionnel, en passant par la recherche utilisateur, les wireframes, les maquettes et les tests. Idéal pour les startups et équipes produit en phase de création ou d'évolution.",
    price: "380",
    priceUnit: "/ jour",
    features: [
      "Analyse des besoins utilisateurs et des objectifs métier pour poser des bases solides.",
      "Organisation de sessions de co-conception pour aligner les équipes et générer des idées.",
      "Conception de l'architecture et des flux de navigation pour optimiser l'expérience",
      "Réalisation de maquettes cliquables pour tester rapidement les fonctionnalités clés.",
      "Mise en place ou amélioration d'un système de composants pour assurer la cohérence et la scalabilité.",
      "Recueil de retours concrets pour ajuster le design avant la mise en production.",
    ],
  },
  {
    title: "Web Design",
    description: "Des sites web épurés, performants, pensés pour convertir.",
    subDescription:
      "Idéal pour les entrepreneur·es, petites entreprises ou associations qui veulent une présence en ligne efficace et facile à prendre en main.",
    price: "700",
    priceUnit: "",
    pricePrefix: "à partir de",
    features: [
      "Un site clair, responsive et optimisé pour présenter votre activité avec impact.",
      "Une identité visuelle cohérente avec vos valeurs, vos couleurs, vos typographies et vos visuels.",
      "Un site rapide, léger et facile à maintenir, conçu sur un outil no-code selon vos besoins.",
      "Des balises, métadonnées et bonnes pratiques intégrées pour améliorer votre visibilité sur Google.",
      "Mentions légales, politique de confidentialité et gestion des cookies incluses.",
      "Une session pour vous apprendre à gérer votre site en toute autonomie, sans jargon technique.",
    ],
    footnote: "*Quatre niveaux d'offre selon vos besoins : Basic, Essential, Professional et Advanced.",
  },
  {
    title: "Facilitation",
    description: "Workshops, design sprints, ateliers d'alignement ou d'idéation.",
    subDescription:
      "Je conçois et anime des sessions collaboratives qui font avancer vos projets, en impliquant vos équipes. Disponible à la session ou en accompagnement régulier.",
    price: "450",
    priceUnit: "/ jour",
    features: [
      "Un cadrage stratégique pour définir les objectifs, les parties prenantes et le périmètre du projet pour démarrer sur de bonnes bases.",
      "Création sur-mesure de formats collaboratifs adaptés à ton contexte et à tes enjeux.",
      "Conduite dynamique et bienveillante pour faire émerger les idées et favoriser l'intelligence collective.",
      "Utilisation d'outils comme le design thinking, le design sprint ou le co-développement selon les besoins.",
      "Restitution claire et actionnable de ce qui a été produit pendant l'atelier.",
      "Faire émerger collectivement des pistes réalistes, utiles et alignées sur les objectifs du groupe",
    ],
  },
]

export const ContainerWrapperByAnima = (): JSX.Element => {
  return (
    <section className="py-24 px-4 flex flex-col items-center justify-center relative">
      <div className="flex flex-col w-full max-w-[1200px] items-center justify-center px-6 py-0">
        <div className="flex flex-col items-center gap-[104px] w-full">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-[22px] w-full">
            <Badge className="w-[79px] h-[51.75px] bg-[#123293] rounded-md shadow-[2px_2px_0px_#121214] flex items-center justify-center">
              <span className="font-['Inter',Helvetica] font-bold text-white text-[27px] tracking-[-1.08px] leading-[32.4px]">
                Tarifs
              </span>
            </Badge>

            <h2 className="text-5xl text-center tracking-[0] leading-[52.8px] font-['Helvetica_Neue-Bold',Helvetica] max-w-[425px]">
              <span className="font-bold text-[#191818]">Des offres </span>
              <span className="font-bold text-[#123293]">claires </span>
              <span className="font-bold text-[#191818]">
                ,<br />
                des tarifs{" "}
              </span>
              <span className="font-bold text-[#123293]">justes</span>
            </h2>
          </div>

          {/* Service Cards */}
          <div className="flex flex-wrap justify-center gap-[30px]">
            {services.map((service, index) => (
              <Card key={index} className="w-[340px] rounded-xl border border-solid border-[#123293] relative">
                <Badge
                  className={`absolute -top-8 left-[7px] bg-[#123293] rounded-md shadow-[2px_2px_0px_#121214] h-[52px] px-3 flex items-center justify-center`}
                  style={{
                    width:
                      service.title === "Product Design" ? "212px" : service.title === "Web Design" ? "163px" : "149px",
                  }}
                >
                  <span className="font-['Inter',Helvetica] font-bold text-white text-[27px] tracking-[-1.08px] leading-[32.4px]">
                    {service.title}
                  </span>
                </Badge>

                <CardContent className="pt-[31px] px-[31px]">
                  <div className="flex flex-col w-full gap-px">
                    {/* Service Description */}
                    <div className="h-[340px]">
                      <div className="mb-[43px]">
                        <div className="font-['Inter',Helvetica] font-bold text-xl tracking-[-0.40px] leading-6 mb-4">
                          {service.title === "Product Design" ? (
                            <>
                              <span className="text-[#0f0f0f] tracking-[-0.08px]">
                                Conception de produits
                                <br />
                              </span>
                              <span className="text-[#123293] tracking-[-0.08px]">
                                numériques utiles ,<br />
                                ergonomiques et désirables{" "}
                              </span>
                              <span className="text-[#0f0f0f] tracking-[-0.08px]">.</span>
                            </>
                          ) : (
                            <span className="text-[#0f0f0f]">{service.description}</span>
                          )}
                        </div>
                        <p className="font-['Inter',Helvetica] font-normal text-[#0000008a] text-[15px] tracking-[-0.45px] leading-[22.1px]">
                          {service.subDescription}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="flex items-end">
                        {service.pricePrefix && (
                          <span className="font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#191818] text-[23px] tracking-[0] leading-[25.3px] mr-[5px]">
                            {service.pricePrefix}
                          </span>
                        )}
                        <div className="font-['Inter',Helvetica] font-bold text-[#191818] text-5xl tracking-[0] leading-[52.8px]">
                          {service.price} <span className="text-xl">€</span>
                        </div>
                        {service.priceUnit && (
                          <span className="font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#191818] text-[23px] tracking-[0] leading-[25.3px]">
                            {service.priceUnit}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-3.5 mt-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-5">
                          <div className="w-[29px] h-[29px] bg-[#123293] rounded-[40px] flex items-center justify-center flex-shrink-0">
                            <CheckIcon className="w-[9px] h-[9px] text-white" />
                          </div>
                          <p className="font-['Inter',Helvetica] font-normal text-[#191818] text-[15px] tracking-[-0.45px] leading-[22.5px]">
                            {feature}
                          </p>
                        </div>
                      ))}

                      {service.footnote && (
                        <p className="text-[11px] text-[#302f2f] mt-8 leading-6">{service.footnote}</p>
                      )}
                    </div>
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
