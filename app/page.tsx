"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HeroHeader } from "@/components/sections/hero-header"
import { LogosSection } from "@/components/sections/logos-section"

export default function Home() {
  return (
    <div className="w-full relative bg-white overflow-hidden">
      {/* Header - Responsive */}
      <header className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-80 py-4 sm:py-6 bg-white rounded-bl-[20px] rounded-br-[20px] shadow-[0px_24px_48px_-12px_rgba(10,13,18,0.18)] flex justify-between items-center fixed top-0 z-50">
        <div className="flex items-center">
          <div className="text-[#123293] text-xl sm:text-2xl font-bold font-['Inter']">smalt</div>
        </div>

        {/* Navigation - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex justify-end items-center gap-4">
          <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
            <div className="text-right text-[#191818] text-sm lg:text-base font-normal font-['Inter'] leading-tight">
              Mes projets
            </div>
          </div>
          <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
            <div className="text-right text-[#191818] text-sm lg:text-base font-normal font-['Inter'] leading-tight">
              Ressources
            </div>
          </div>
        </div>

        <Button className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 bg-[#123293] rounded-xl sm:rounded-2xl text-white text-sm sm:text-base font-bold font-['Inter'] leading-tight">
          <span className="hidden sm:inline">Discuter de votre projet</span>
          <span className="sm:hidden">Contact</span>
        </Button>
      </header>

      {/* Hero Section - Already responsive with HeroHeader component */}
      <HeroHeader />

      {/* About Section - Made responsive */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:pl-[470px] xl:pr-72 py-12 sm:py-16 md:py-24 bg-[#0f0f0f] flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl xl:max-w-none flex flex-col justify-center items-start gap-8 sm:gap-12 md:gap-16">
          <div className="w-full flex flex-col justify-center items-start gap-4 sm:gap-6">
            <div className="p-2 sm:p-2.5 origin-top-left -rotate-2 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
              <div className="text-[#123293] text-lg sm:text-xl md:text-2xl font-bold font-['Inter'] leading-loose">
                Studio Smalt
              </div>
            </div>
            <div className="w-full text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-['Helvetica_Neue'] leading-tight sm:leading-[64px]">
              Freelance oui, freestyle non
            </div>
            <div className="w-full">
              <span className="text-white text-base sm:text-lg md:text-xl font-normal font-['Inter'] leading-relaxed">
                Chez Studio Smalt, je ne fais pas de design "au feeling".
                <br className="hidden sm:block" />
                Je suis{" "}
              </span>
              <span className="text-white text-base sm:text-lg md:text-xl font-bold font-['Inter'] leading-relaxed">
                Salomé Mullet
              </span>
              <span className="text-white text-base sm:text-lg md:text-xl font-normal font-['Inter'] leading-relaxed">
                , freelance en product design, et j'accompagne les équipes produit, tech et marketing dans la création
                d'interfaces claires, utiles et testées.
                <br className="hidden sm:block" />
                Pas de blabla ni de refontes uniquement cosmétiques : <br className="hidden lg:block" />
                chaque mission suit une méthodologie éprouvée, de l'atelier de cadrage jusqu'à la livraison prête à
                intégrer.
              </span>
            </div>
            <div className="w-full">
              <span className="text-white text-base sm:text-lg md:text-xl font-bold font-['Inter'] leading-relaxed">
                🎯 Mon approche :<br />
              </span>
              <span className="text-white text-base sm:text-lg md:text-xl font-bold font-['Inter'] leading-relaxed">
                Structurer vos idées avec vos utilisateurs
                <br />
                Prototyper vite pour tester mieux
                <br />
                Livrer des parcours cohérents, conçus pour durer
              </span>
            </div>
            <div className="w-full text-white text-base sm:text-lg md:text-xl font-bold font-['Inter'] leading-relaxed">
              En solo, oui — mais avec une rigueur de studio.
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section - Already responsive */}
      <LogosSection />

      {/* Services Section - Made responsive */}
      <section className="w-full py-12 sm:py-16 md:py-24 flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="w-full max-w-6xl flex flex-col justify-start items-center gap-8 sm:gap-12">
          <div className="w-full flex flex-col justify-start items-center gap-5">
            <div className="p-2 sm:p-2.5 origin-top-left -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Inter'] leading-loose">
                Mes services
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-center gap-5">
              <div className="w-full text-center">
                <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
                  Des solutions digitales qui{" "}
                </span>
                <span className="text-[#123293] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
                  vous ressemblent
                </span>
                <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
                  , <br />
                  et qui fonctionnent{" "}
                </span>
              </div>
            </div>
            <div className="w-full opacity-70 text-center text-neutral-900 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed px-4">
              Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases.
              <br className="hidden sm:block" />
              On crée ensemble des solutions utiles, alignées sur votre vision, et qui parlent vraiment à vos
              utilisateurs.
            </div>
          </div>

          {/* Service Cards - Made responsive */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full">
            {/* Product Design Card */}
            <Card className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#123293] rounded-[20px] flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0">
              <div className="w-full lg:w-auto lg:h-52 py-px flex flex-col justify-between items-start gap-4 lg:gap-0">
                <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] uppercase leading-relaxed">
                  VOTRE SITE EST-IL
                  <br />
                  VRAIMENT À LA
                  <br />
                  HAUTEUR ?
                </div>
                <div className="p-2 sm:p-2.5 origin-top-left -rotate-2 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#123293] text-2xl sm:text-3xl md:text-4xl font-bold font-['Helvetica_Neue'] leading-10">
                    Product Design
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[464px] flex flex-col justify-between items-start gap-4 lg:gap-0 lg:self-stretch">
                <div className="w-full opacity-80 text-white text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                  Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs: interfaces intuitives,
                  parcours fluides, maquettes testables, design systems…
                  <br className="hidden sm:block" />
                  Je travaille en collaboration étroite avec vos équipes produit et tech.
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2.5">
                  <div className="w-full flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">UI UX Design</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Design System</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Delivery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">
                        Prototype Figma
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Discovery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Design Sprint</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
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
            <Card className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#f9d45c] rounded-[20px] flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0">
              <div className="w-full lg:w-auto lg:h-52 py-px flex flex-col justify-between items-start gap-4 lg:gap-0">
                <div className="text-[#191818] text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] uppercase leading-relaxed">
                  VOTRE SITE EST-IL
                  <br />
                  VRAIMENT À LA
                  <br />
                  HAUTEUR ?
                </div>
                <div className="p-2 sm:p-2.5 origin-top-left -rotate-2 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#123293] text-2xl sm:text-3xl md:text-4xl font-bold font-['Helvetica_Neue'] leading-10">
                    Web Design
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[464px] flex flex-col justify-between items-start gap-4 lg:gap-0 lg:self-stretch">
                <div className="w-full opacity-80 text-[#191818] text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                  Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs: interfaces intuitives,
                  parcours fluides, maquettes testables, design systems…
                  <br className="hidden sm:block" />
                  Je travaille en collaboration étroite avec vos équipes produit et tech.
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2.5">
                  <div className="w-full flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">
                        UI UX Design
                      </div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">
                        Design System
                      </div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">Delivery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">
                        Prototype Figma
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">Discovery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Inter'] leading-none">
                        Design Sprint
                      </div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
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
            <Card className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#0f0f0f] rounded-[20px] flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0">
              <div className="w-full lg:w-auto lg:h-52 py-px flex flex-col justify-between items-start gap-4 lg:gap-0">
                <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] uppercase leading-relaxed">
                  VOTRE SITE EST-IL
                  <br />
                  VRAIMENT À LA
                  <br />
                  HAUTEUR ?
                </div>
                <div className="p-2 sm:p-2.5 origin-top-left -rotate-2 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#123293] text-2xl sm:text-3xl md:text-4xl font-bold font-['Helvetica_Neue'] leading-10">
                    Facilitation
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[464px] flex flex-col justify-between items-start gap-4 lg:gap-0 lg:self-stretch">
                <div className="w-full opacity-80 text-white text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                  Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs: interfaces intuitives,
                  parcours fluides, maquettes testables, design systems…
                  <br className="hidden sm:block" />
                  Je travaille en collaboration étroite avec vos équipes produit et tech.
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2.5">
                  <div className="w-full flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">UI UX Design</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Design System</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Delivery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">
                        Prototype Figma
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Discovery</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Inter'] leading-none">Design Sprint</div>
                    </div>
                    <div className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
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

          <div className="flex flex-col justify-start items-center gap-6 w-full">
            <Button className="w-full sm:w-auto px-6 py-4 bg-[#123293] rounded-2xl text-white text-base font-bold font-['Inter'] leading-tight">
              Discuter de votre projet
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - Made responsive */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-[#123293] flex flex-col justify-center items-center gap-8 sm:gap-12 px-4 sm:px-6">
        <div className="w-full max-w-6xl flex flex-col justify-start items-center gap-8 sm:gap-12">
          <div className="w-full flex flex-col justify-start items-center gap-5">
            <div className="w-full text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[61px] font-black font-['Helvetica_Neue'] leading-tight xl:leading-[64px]">
              Une approche agile, simple et humaine
            </div>
            <div className="w-full opacity-70 text-center text-white text-base sm:text-lg font-normal font-['Inter'] leading-relaxed px-4">
              Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases.
              <br className="hidden sm:block" />
              On crée ensemble des solutions utiles, alignées sur votre vision, et qui parlent vraiment à vos
              utilisateurs.
            </div>
          </div>
        </div>

        {/* Process Cards - Made responsive */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="h-auto lg:h-[461px] p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-32 sm:w-40 h-32 sm:h-40 relative">
                <img className="w-full h-full object-contain" src="/placeholder.svg?height=157&width=164" />
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-12">
                <div className="text-[#191818] text-6xl sm:text-7xl md:text-8xl font-black font-['Helvetica_Neue'] leading-tight">
                  1
                </div>
                <div className="flex flex-col justify-start items-start gap-3 sm:gap-5">
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="text-neutral-900 text-xl sm:text-2xl md:text-3xl font-bold font-['Helvetica_Neue'] leading-tight">
                      Comprendre
                    </div>
                  </div>
                  <div className="text-[#191818] text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                    À travers des ateliers collaboratifs, des
                    <br className="hidden sm:block" />
                    interviews ciblées ou une observation
                    <br className="hidden sm:block" />
                    de vosusages terrain, je m'attache à<br className="hidden sm:block" />
                    comprendre vos objectifs, vos
                    <br className="hidden sm:block" />
                    contraintes, mais surtout vos
                    <br className="hidden sm:block" />
                    utilisateurs.
                  </div>
                </div>
              </div>
            </Card>

            <Card className="h-auto lg:h-[461px] p-4 sm:p-6 md:p-8 bg-[#f9d45c] rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-40 sm:w-52 h-32 sm:h-40 relative">
                <img className="w-full h-full object-contain" src="/placeholder.svg?height=155&width=203" />
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-12">
                <div className="text-[#191818] text-6xl sm:text-7xl md:text-8xl font-black font-['Helvetica_Neue'] leading-tight">
                  2
                </div>
                <div className="flex flex-col justify-start items-start gap-3 sm:gap-5">
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="text-neutral-900 text-xl sm:text-2xl md:text-3xl font-bold font-['Helvetica_Neue'] leading-tight">
                      Concevoir
                    </div>
                  </div>
                  <div className="text-neutral-900 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                    Une fois les besoins clarifiés, je passe à<br className="hidden sm:block" />
                    la conception. Je traduis les idées en
                    <br className="hidden sm:block" />
                    parcours, puis en interfaces, à travers
                    <br className="hidden sm:block" />
                    des wireframes, des maquettes
                    <br className="hidden sm:block" />
                    interactives et un design UI soigné.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="h-auto lg:h-[461px] p-4 sm:p-6 md:p-8 bg-[#0f0f0f] rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <img className="w-24 sm:w-32 h-32 sm:h-40 object-contain" src="/placeholder.svg?height=157&width=129" />
              <div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-12">
                <div className="text-white text-6xl sm:text-7xl md:text-8xl font-black font-['Helvetica_Neue'] leading-tight">
                  3
                </div>
                <div className="flex flex-col justify-start items-start gap-3 sm:gap-5">
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-['Helvetica_Neue'] leading-tight">
                      Valider
                    </div>
                  </div>
                  <div className="text-white text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                    Grâce à des retours utilisateurs
                    <br className="hidden sm:block" />
                    concrets et des itérations rapides, je
                    <br className="hidden sm:block" />
                    valide chaque étape avec vous pour
                    <br className="hidden sm:block" />
                    m'assurer que le produit répond
                    <br className="hidden sm:block" />
                    vraiment à vos enjeux et ceux de vos
                    <br className="hidden sm:block" />
                    utilisateurs.
                  </div>
                </div>
              </div>
            </Card>

            <Card className="h-auto lg:h-[461px] p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-[0px_3px_20px_0px_rgba(27,27,27,0.11)] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-36 sm:w-44 h-28 sm:h-36 relative">
                <img className="w-full h-full object-contain" src="/placeholder.svg?height=144&width=173" />
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-12">
                <div className="text-[#191818] text-6xl sm:text-7xl md:text-8xl font-black font-['Helvetica_Neue'] leading-tight">
                  4
                </div>
                <div className="flex flex-col justify-start items-start gap-3 sm:gap-5">
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="text-neutral-900 text-xl sm:text-2xl md:text-3xl font-bold font-['Helvetica_Neue'] leading-tight">
                      Livrer
                    </div>
                  </div>
                  <div className="text-[#191818] text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                    Enfin, je vous remets un livrable propre,
                    <br className="hidden sm:block" />
                    structuré et prêt à l'usage. Que ce soit
                    <br className="hidden sm:block" />
                    un design finalisé prêt à être développé,
                    <br className="hidden sm:block" />
                    un design system complet, ou un site
                    <br className="hidden sm:block" />
                    Web mis en ligne sur une plateforme
                    <br className="hidden sm:block" />
                    no-code.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Made responsive */}
      <footer className="w-full py-8 sm:py-12 bg-[#0f0f0f] flex flex-col justify-center items-center gap-2">
        <div className="w-full max-w-7xl px-4 sm:px-6 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-6">
          <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-4 sm:gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-white text-xl sm:text-2xl font-bold font-['Inter']">smalt</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-2">
            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-4">
              <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
                <div className="text-white/70 text-sm sm:text-base font-normal font-['Inter'] leading-tight">
                  Mes projets
                </div>
              </div>
              <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
                <div className="text-white/70 text-sm sm:text-base font-normal font-['Inter'] leading-tight">
                  Ressources
                </div>
              </div>
              <div className="py-1.5 rounded-lg flex justify-start items-center gap-2">
                <div className="text-white/70 text-sm sm:text-base font-normal font-['Inter'] leading-tight">
                  Mentions légales
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col justify-between items-start">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <div className="w-full text-white/75 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed">
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
