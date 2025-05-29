"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="w-full relative bg-white overflow-hidden">
      {/* Header */}
      <header className="w-full px-80 py-6 bg-white rounded-bl-[20px] rounded-br-[20px] shadow-[0px_24px_48px_-12px_rgba(10,13,18,0.18)] flex justify-between items-center fixed top-0 z-50">
        <div className="flex items-center">
          <div className="text-[#123293] text-2xl font-bold font-['Inter']">smalt</div>
        </div>

        <div className="flex justify-end items-center gap-4">
          <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
            <div className="text-right text-[#191818] text-base font-normal font-['Inter'] leading-tight">
              Mes projets
            </div>
          </div>
          <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
            <div className="text-right text-[#191818] text-base font-normal font-['Inter'] leading-tight">
              Ressources
            </div>
          </div>
        </div>

        <Button className="px-6 py-4 bg-[#123293] rounded-2xl text-white text-base font-bold font-['Inter'] leading-tight">
          Discuter de votre projet
        </Button>
      </header>

      {/* Hero Section */}
      <section className="w-full h-[1148px] pt-28 pb-24 relative bg-[#123293] flex justify-center items-center overflow-hidden">
        <div className="w-[679.59px] h-[754.89px] absolute right-[200px] top-[419.12px] origin-top-left rotate-[103.80deg] bg-white/10 rounded-sm border-2 border-white/20" />

        <div className="w-[1284px] px-80 flex flex-col justify-start items-center gap-8 relative z-10">
          <div className="w-[862px] flex flex-col justify-start items-start gap-5">
            <div className="self-stretch h-4 text-center text-white text-2xl font-bold font-['Helvetica_Neue'] uppercase leading-loose">
              Studio digital
            </div>
            <div className="self-stretch px-20 flex flex-col justify-center items-center gap-2.5">
              <div className="w-96 h-28 text-center text-white text-9xl font-bold font-['Helvetica_Neue'] leading-[142.80px]">
                Smart
              </div>
              <div className="w-[860.78px] h-28 px-2.5 py-1.5 origin-top-left -rotate-1 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(18,18,20,1.00)] flex justify-center items-center gap-2.5">
                <div className="w-[862.36px] h-32 text-center text-[#123293] text-9xl font-bold font-['Helvetica_Neue'] leading-[142.80px]">
                  Alternative
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-7 text-center text-white text-xl font-light font-['Inter'] leading-loose">
            Design agile, centré utilisateurs, orienté livraison
          </div>
          <Button className="px-6 py-4 bg-[#f9d45c] rounded-2xl text-[#123293] text-base font-bold font-['Inter'] leading-tight">
            Discuter de votre projet
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full pl-[470px] pr-72 py-24 bg-[#0f0f0f] flex flex-col justify-center items-center">
        <div className="self-stretch flex flex-col justify-center items-start gap-16">
          <div className="self-stretch flex flex-col justify-center items-start gap-6">
            <div className="p-2.5 origin-top-left -rotate-2 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
              <div className="text-[#123293] text-2xl font-bold font-['Inter'] leading-loose">Studio Smalt</div>
            </div>
            <div className="w-[574px] h-32 text-white text-6xl font-black font-['Helvetica_Neue'] leading-[64px]">
              Freelance oui, freestyle non
            </div>
            <div className="w-[587.83px]">
              <span className="text-white text-xl font-normal font-['Inter'] leading-loose">
                Chez Studio Smalt, je ne fais pas de design "au feeling".
                <br />
                Je suis{" "}
              </span>
              <span className="text-white text-xl font-bold font-['Inter'] leading-loose">Salomé Mullet</span>
              <span className="text-white text-xl font-normal font-['Inter'] leading-loose">
                , freelance en product design, et j'accompagne les équipes produit, tech et marketing dans la création
                d'interfaces claires, utiles et testées.
                <br />
                Pas de blabla ni de refontes uniquement cosmétiques : <br />
                chaque mission suit une méthodologie éprouvée, de l'atelier de cadrage jusqu'à la livraison prête à
                intégrer.
              </span>
            </div>
            <div className="w-[510.70px]">
              <span className="text-white text-xl font-bold font-['Inter'] leading-loose">
                🎯 Mon approche :<br />
              </span>
              <span className="text-white text-xl font-bold font-['Inter'] leading-loose">
                Structurer vos idées avec vos utilisateurs
                <br />
                Prototyper vite pour tester mieux
                <br />
                Livrer des parcours cohérents, conçus pour durer
              </span>
            </div>
            <div className="w-[638px] h-6 text-white text-xl font-bold font-['Inter'] leading-loose">
              En solo, oui — mais avec une rigueur de studio.
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 flex flex-col justify-center items-center">
        <div className="w-[1046.20px] flex flex-col justify-start items-center gap-12">
          <div className="self-stretch flex flex-col justify-start items-center gap-5">
            <div className="p-2.5 origin-top-left -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
              <div className="text-white text-2xl font-bold font-['Inter'] leading-loose">Mes services</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-5">
              <div className="self-stretch text-center">
                <span className="text-neutral-900 text-6xl font-black font-['Helvetica_Neue'] leading-[64px]">
                  Des solutions digitales qui{" "}
                </span>
                <span className="text-[#123293] text-6xl font-black font-['Helvetica_Neue'] leading-[64px]">
                  vous ressemblent
                </span>
                <span className="text-neutral-900 text-6xl font-black font-['Helvetica_Neue'] leading-[64px]">
                  , <br />
                  et qui fonctionnent{" "}
                </span>
              </div>
            </div>
            <div className="self-stretch opacity-70 text-center text-neutral-900 text-lg font-normal font-['Inter'] leading-snug">
              Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases.
              <br />
              On crée ensemble des solutions utiles, alignées sur votre vision, et qui parlent vraiment à vos
              utilisateurs.
            </div>
          </div>

          {/* Service Cards */}
          <div className="flex flex-col gap-8 w-full max-w-[985px]">
            {/* Product Design Card */}
            <Card className="p-10 bg-[#123293] rounded-[20px] flex justify-between items-start">
              <div className="h-52 py-px flex flex-col justify-between items-start">
                <div className="text-white text-2xl font-bold font-['Helvetica_Neue'] uppercase leading-loose">
                  VOTRE SITE EST-IL
                  <br />
                  VRAIMENT À LA
                  <br />
                  HAUTEUR ?
                </div>
                <div className="p-2.5 origin-top-left -rotate-2 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#123293] text-4xl font-bold font-['Helvetica_Neue'] leading-10">
                    Product Design
                  </div>
                </div>
              </div>
              <div className="w-[464px] self-stretch flex flex-col justify-between items-start">
                <div className="self-stretch opacity-80 text-white text-base font-normal font-['Inter'] leading-tight">
                  Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs: interfaces intuitives,
                  parcours fluides, maquettes testables, design systems…
                  <br />
                  Je travaille en collaboration étroite avec vos équipes produit et tech.
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch flex justify-start items-center gap-4 overflow-hidden">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">UI UX Design</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Design System</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Delivery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">
                        Prototype Figma
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-4 overflow-hidden">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Discovery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Design Sprint</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">
                        Test Utilisateurs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Web Design Card */}
            <Card className="p-10 bg-[#f9d45c] rounded-[20px] flex justify-between items-start">
              <div className="h-52 py-px flex flex-col justify-between items-start">
                <div className="text-[#191818] text-2xl font-bold font-['Helvetica_Neue'] uppercase leading-loose">
                  VOTRE SITE EST-IL
                  <br />
                  VRAIMENT À LA
                  <br />
                  HAUTEUR ?
                </div>
                <div className="p-2.5 origin-top-left -rotate-2 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#123293] text-4xl font-bold font-['Helvetica_Neue'] leading-10">Web Design</div>
                </div>
              </div>
              <div className="w-[464px] self-stretch flex flex-col justify-between items-start">
                <div className="self-stretch opacity-80 text-[#191818] text-base font-normal font-['Inter'] leading-tight">
                  Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs: interfaces intuitives,
                  parcours fluides, maquettes testables, design systems…
                  <br />
                  Je travaille en collaboration étroite avec vos équipes produit et tech.
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch flex justify-start items-center gap-4 overflow-hidden">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">
                        UI UX Design
                      </div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">
                        Design System
                      </div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">Delivery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">
                        Prototype Figma
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-4 overflow-hidden">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">Discovery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">
                        Design Sprint
                      </div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">
                        Test Utilisateurs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Facilitation Card */}
            <Card className="p-10 bg-[#0f0f0f] rounded-[20px] flex justify-between items-start">
              <div className="h-52 py-px flex flex-col justify-between items-start">
                <div className="text-white text-2xl font-bold font-['Helvetica_Neue'] uppercase leading-loose">
                  VOTRE SITE EST-IL
                  <br />
                  VRAIMENT À LA
                  <br />
                  HAUTEUR ?
                </div>
                <div className="p-2.5 origin-top-left -rotate-2 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#123293] text-4xl font-bold font-['Helvetica_Neue'] leading-10">
                    Facilitation
                  </div>
                </div>
              </div>
              <div className="w-[464px] self-stretch flex flex-col justify-between items-start">
                <div className="self-stretch opacity-80 text-white text-base font-normal font-['Inter'] leading-tight">
                  Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs: interfaces intuitives,
                  parcours fluides, maquettes testables, design systems…
                  <br />
                  Je travaille en collaboration étroite avec vos équipes produit et tech.
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch flex justify-start items-center gap-4 overflow-hidden">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">UI UX Design</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Design System</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Delivery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">
                        Prototype Figma
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-4 overflow-hidden">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Discovery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Design Sprint</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5 overflow-hidden">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">
                        Test Utilisateurs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col justify-start items-center gap-6">
            <Button className="self-stretch px-6 py-4 bg-[#123293] rounded-2xl text-white text-base font-bold font-['Inter'] leading-tight">
              Discuter de votre projet
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-24 bg-[#123293] flex flex-col justify-center items-center gap-12">
        <div className="w-[1046.20px] flex flex-col justify-start items-center gap-12">
          <div className="self-stretch flex flex-col justify-start items-center gap-5">
            <div className="self-stretch text-center text-white text-6xl font-black font-['Helvetica_Neue'] leading-[64px]">
              Une approche agile, simple et humaine
            </div>
            <div className="self-stretch opacity-70 text-center text-white text-lg font-normal font-['Inter'] leading-snug">
              Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases.
              <br />
              On crée ensemble des solutions utiles, alignées sur votre vision, et qui parlent vraiment à vos
              utilisateurs.
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start gap-6">
          <Card className="max-h-[461px] min-h-[461px] px-8 py-10 bg-white rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-12">
            <div className="w-40 h-40 relative">
              <img className="w-40 h-40 left-0 top-0 absolute" src="/placeholder.svg?height=157&width=164" />
            </div>
            <div className="flex justify-start items-start gap-12">
              <div className="text-[#191818] text-8xl font-black font-['Helvetica_Neue'] leading-[114px]">1</div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="flex justify-center items-center gap-2.5">
                  <div className="text-neutral-900 text-3xl font-bold font-['Helvetica_Neue'] leading-9">
                    Comprendre
                  </div>
                </div>
                <div className="w-80 text-[#191818] text-base font-normal font-['Inter'] leading-tight">
                  À travers des ateliers collaboratifs, des
                  <br />
                  interviews ciblées ou une observation
                  <br />
                  de vosusages terrain, je m'attache à<br />
                  comprendre vos objectifs, vos
                  <br />
                  contraintes, mais surtout vos
                  <br />
                  utilisateurs.
                </div>
              </div>
            </div>
          </Card>

          <Card className="max-h-[461px] min-h-[461px] px-8 py-10 bg-[#f9d45c] rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-12">
            <div className="w-52 h-40 relative">
              <img className="w-52 h-40 left-0 top-0 absolute" src="/placeholder.svg?height=155&width=203" />
            </div>
            <div className="flex justify-start items-start gap-12">
              <div className="text-[#191818] text-8xl font-black font-['Helvetica_Neue'] leading-[114px]">2</div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="flex justify-center items-center gap-2.5">
                  <div className="text-neutral-900 text-3xl font-bold font-['Helvetica_Neue'] leading-9">Concevoir</div>
                </div>
                <div className="w-80 text-neutral-900 text-base font-normal font-['Inter'] leading-tight">
                  Une fois les besoins clarifiés, je passe à<br />
                  la conception. Je traduis les idées en
                  <br />
                  parcours, puis en interfaces, à travers
                  <br />
                  des wireframes, des maquettes
                  <br />
                  interactives et un design UI soigné.
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-start items-start gap-6">
          <Card className="max-h-[461px] min-h-[461px] px-8 py-10 bg-[#0f0f0f] rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-12">
            <img className="w-32 h-40" src="/placeholder.svg?height=157&width=129" />
            <div className="flex justify-start items-start gap-12">
              <div className="text-white text-8xl font-black font-['Helvetica_Neue'] leading-[114px]">3</div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="flex justify-center items-center gap-2.5">
                  <div className="text-white text-3xl font-bold font-['Helvetica_Neue'] leading-9">Valider</div>
                </div>
                <div className="w-80 text-white text-base font-normal font-['Inter'] leading-tight">
                  Grâce à des retours utilisateurs
                  <br />
                  concrets et des itérations rapides, je
                  <br />
                  valide chaque étape avec vous pour
                  <br />
                  m'assurer que le produit répond
                  <br />
                  vraiment à vos enjeux et ceux de vos
                  <br />
                  utilisateurs.
                </div>
              </div>
            </div>
          </Card>

          <Card className="max-h-[461px] min-h-[461px] px-8 py-10 bg-white rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-12">
            <div className="w-44 h-36 relative">
              <img className="w-44 h-36 left-0 top-0 absolute" src="/placeholder.svg?height=144&width=173" />
            </div>
            <div className="flex justify-start items-start gap-12">
              <div className="text-[#191818] text-8xl font-black font-['Helvetica_Neue'] leading-[114px]">4</div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="flex justify-center items-center gap-2.5">
                  <div className="text-neutral-900 text-3xl font-bold font-['Helvetica_Neue'] leading-9">Livrer</div>
                </div>
                <div className="w-80 text-[#191818] text-base font-normal font-['Inter'] leading-tight">
                  Enfin, je vous remets un livrable propre,
                  <br />
                  structuré et prêt à l'usage. Que ce soit
                  <br />
                  un design finalisé prêt à être développé,
                  <br />
                  un design system complet, ou un site
                  <br />
                  Web mis en ligne sur une plateforme
                  <br />
                  no-code.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-[#0f0f0f] flex flex-col justify-center items-center gap-2">
        <div className="w-[1200px] px-6 flex justify-start items-start gap-6">
          <div className="w-96 flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-white text-2xl font-bold font-['Inter']">smalt</div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-start items-start gap-2">
            <div className="flex justify-start items-center gap-4">
              <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
                <div className="text-right text-white/70 text-base font-normal font-['Inter'] leading-tight">
                  Mes projets
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
                <div className="text-right text-white/70 text-base font-normal font-['Inter'] leading-tight">
                  Ressources
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
                <div className="text-right text-white/70 text-base font-normal font-['Inter'] leading-tight">
                  Mentions légales
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 self-stretch flex flex-col justify-between items-start">
            <div className="self-stretch h-20 flex flex-col justify-start items-start gap-2">
              <div className="self-stretch text-white/75 text-lg font-normal font-['Inter'] leading-snug">
                Incubée à la BGE
                <br />
                8, Rue Denis Papin
                <br />
                Business Pôle Les Prés,
                <br />
                59650 Villeneuve-d'Ascq
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
