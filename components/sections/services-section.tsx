"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

export const ServicesSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 flex flex-col justify-center items-center px-4 sm:px-6">
      <div className="w-full max-w-6xl flex flex-col justify-start items-center gap-8 sm:gap-12">
        <div className="w-full flex flex-col justify-start items-center gap-5">
          <div className="p-2 sm:p-2.5 origin-top-left -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
            <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Helvetica_Neue'] leading-loose">
              Mes services
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-5">
            <div className="w-full text-center">
              <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black font-['Helvetica_Neue'] leading-tight">
                Des solutions digitales qui{" "}
              </span>
              <span className="text-[#123293] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black font-['Helvetica_Neue'] leading-tight">
                vous ressemblent
              </span>
              <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black font-['Helvetica_Neue'] leading-tight">
                , <br />
                et qui fonctionnent{" "}
              </span>
            </div>
          </div>
          <div className="w-full opacity-70 text-center text-neutral-900 text-base sm:text-lg font-normal font-['Helvetica_Neue'] leading-relaxed px-4">
            Chez Smalt, chaque projet est conçu pour répondre à un vrai besoin, pas pour cocher des cases.
            <br className="hidden sm:block" />
            On crée ensemble des solutions utiles, alignées sur votre vision, et qui parlent vraiment à vos
            utilisateurs.
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Product Design Card */}
          <MotionCard 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#123293] rounded-[20px] flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0"
          >
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
              <div className="w-full opacity-80 text-white text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                Je vous aide à concevoir des produits numériques pensés pour vos utilisateurs: interfaces intuitives,
                parcours fluides, maquettes testables, design systems…
                <br className="hidden sm:block" />
                Je travaille en collaboration étroite avec vos équipes produit et tech.
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2.5">
                <div className="w-full flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                  {["UI UX Design", "Design System", "Delivery", "Prototype Figma"].map((tag) => (
                    <div key={tag} className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Helvetica_Neue'] leading-none">{tag}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                  {["Discovery", "Design Sprint", "Test Utilisateurs"].map((tag) => (
                    <div key={tag} className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Helvetica_Neue'] leading-none">{tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionCard>

          {/* Web Design Card */}
          <MotionCard 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#f9d45c] rounded-[20px] flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0"
          >
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
              <div className="w-full opacity-80 text-[#191818] text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                Je vous aide à concevoir des sites web qui convertissent : interfaces intuitives, parcours fluides,
                design moderne et adaptatif.
                <br className="hidden sm:block" />
                Je travaille en collaboration étroite avec vos équipes marketing et communication.
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2.5">
                <div className="w-full flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                  {["UI Design", "Responsive", "SEO", "Performance"].map((tag) => (
                    <div key={tag} className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Helvetica_Neue'] leading-none">{tag}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                  {["Webflow", "WordPress", "No-code"].map((tag) => (
                    <div key={tag} className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-[#191818]/70" />
                      </div>
                      <div className="text-[#191818]/70 text-xs font-normal font-['Helvetica_Neue'] leading-none">{tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionCard>

          {/* Facilitation Card */}
          <MotionCard 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-6 md:p-8 lg:p-10 bg-[#0f0f0f] rounded-[20px] flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0"
          >
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
              <div className="w-full opacity-80 text-white text-sm sm:text-base font-normal font-['Helvetica_Neue'] leading-relaxed">
                J'anime des ateliers collaboratifs pour faire avancer vos projets : design sprint, co-création,
                idéation, tests utilisateurs...
                <br className="hidden sm:block" />
                Je facilite les échanges et guide les équipes vers des solutions concrètes.
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2.5">
                <div className="w-full flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                  {["Design Sprint", "Co-création", "Idéation", "Tests"].map((tag) => (
                    <div key={tag} className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Helvetica_Neue'] leading-none">{tag}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-4">
                  {["Ateliers", "Formation", "Accompagnement"].map((tag) => (
                    <div key={tag} className="rounded-[40px] flex justify-start items-center gap-1.5">
                      <div className="w-3 h-3 relative">
                        <div className="w-3 h-2.5 left-0 top-[1px] absolute bg-white/70" />
                      </div>
                      <div className="text-white/70 text-xs font-normal font-['Helvetica_Neue'] leading-none">{tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionCard>
        </div>

        <div className="flex flex-col justify-start items-center gap-6 w-full">
          <Button className="w-full sm:w-auto px-6 py-4 bg-[#123293] rounded-2xl text-white text-base font-bold font-['Helvetica_Neue'] leading-tight">
            Discuter de votre projet
          </Button>
        </div>
      </div>
    </section>
  )
} 