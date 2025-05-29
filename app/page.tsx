"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <header className="flex w-full items-center justify-between py-6 px-8 bg-white">
        <div className="flex items-center">
          <div className="text-xl font-bold">
            <span className="bg-[#1e3a8a] text-white px-3 py-1.5 rounded-md font-inter font-bold">smalt</span>
          </div>
        </div>

        <nav className="flex items-center gap-12">
          <a
            href="#"
            className="text-[#374151] font-inter text-base font-normal hover:text-[#1e3a8a] transition-colors"
          >
            Mes projets
          </a>
          <a
            href="#"
            className="text-[#374151] font-inter text-base font-normal hover:text-[#1e3a8a] transition-colors"
          >
            Ressources
          </a>
        </nav>

        <Button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-inter font-medium text-sm hover:bg-[#1e40af] transition-colors">
          Discuter de votre projet
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#3730a3] py-24 px-8 overflow-hidden min-h-[600px] flex items-center">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-white/10 rotate-45"></div>
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] border border-white/5 rotate-12"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] border border-white/5 -rotate-12"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-white/70 text-sm font-inter font-medium uppercase tracking-[0.2em] mb-8">
              STUDIO DIGITAL
            </p>
            <h1 className="text-7xl lg:text-8xl font-helvetica font-light text-white mb-6 leading-none">Smart</h1>
            <div className="inline-block bg-white px-8 py-4 rounded-lg transform -rotate-1 shadow-2xl mb-8">
              <span className="text-[#1e3a8a] text-6xl lg:text-7xl font-helvetica font-bold leading-none">
                Alternative
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg font-inter font-normal mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Design agile, centré utilisateurs, orienté livraison
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="bg-[#fbbf24] text-[#1e3a8a] px-8 py-4 rounded-lg font-inter font-semibold text-base hover:bg-[#f59e0b] transition-colors shadow-lg">
              Discuter de votre projet
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-6 px-8 bg-[#1e3a8a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between opacity-50">
            <div className="text-white text-sm font-inter font-medium">nestor</div>
            <div className="text-white text-sm font-inter font-medium">monabanq</div>
            <div className="text-white text-sm font-inter font-medium">🍎</div>
            <div className="text-white text-sm font-inter font-medium">Devtrotter</div>
            <div className="text-white text-sm font-inter font-medium">Fresh Sara</div>
            <div className="text-white text-sm font-inter font-medium">Morpland</div>
            <div className="text-white text-sm font-inter font-medium">OVHcloud</div>
            <div className="text-white text-sm font-inter font-medium">meneq</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-[#111111] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#1e3a8a] text-white px-4 py-2 rounded-lg mb-8 font-inter font-medium text-sm">
              Studio Smalt
            </div>

            <h2 className="text-5xl font-helvetica font-light mb-8 leading-tight">
              Freelance oui,
              <br />
              freestyle non
            </h2>

            <p className="text-white/90 text-lg font-inter font-normal mb-6 leading-relaxed">
              Chez Studio Smalt, je ne fais pas de design "au feeling".
            </p>

            <p className="text-white/80 font-inter font-normal mb-6 leading-relaxed">
              Je suis <strong className="text-white font-semibold">Salomé Mullet</strong>, freelance en product design,
              et j'accompagne les équipes produit, tech et marketing dans la création d'interfaces claires, utiles et
              testées.
            </p>

            <p className="text-white/80 font-inter font-normal mb-8 leading-relaxed">
              Pas de blabla ni de refontes uniquement cosmétiques : chaque mission suit une méthodologie éprouvée, de
              l'atelier de cadrage jusqu'à la livraison prête à intégrer.
            </p>

            <div className="mb-8">
              <p className="text-[#fbbf24] font-inter font-semibold mb-4">❤️ Mon approche :</p>
              <ul className="space-y-2 text-white/80 font-inter font-normal">
                <li>• Structurer vos idées avec vos utilisateurs</li>
                <li>• Prototyper vite pour tester mieux</li>
                <li>• Livrer des parcours cohérents, conçus pour durer</li>
              </ul>
            </div>

            <p className="text-white/70 font-inter font-normal italic">
              En solo, oui — mais avec une rigueur de studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-8 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-helvetica font-light mb-12 leading-tight">
                POURQUOI CHOISIR STUDIO SMALT ?
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-green-400 text-lg mt-1">✅</span>
                  <div>
                    <p className="font-inter font-semibold text-white mb-2">Expertise produit et UX/UI :</p>
                    <p className="text-white/70 font-inter font-normal text-sm leading-relaxed">
                      de l'idée au produit fini, en passant par des ateliers de cadrage, des tests utilisateurs et des
                      itérations rapides.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-green-400 text-lg mt-1">✅</span>
                  <div>
                    <p className="font-inter font-semibold text-white mb-2">Approche agile et humaine :</p>
                    <p className="text-white/70 font-inter font-normal text-sm leading-relaxed">
                      nous travaillons main dans la main avec vos équipes pour co-construire des solutions qui répondent
                      à vos enjeux business et utilisateurs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-green-400 text-lg mt-1">✅</span>
                  <div>
                    <p className="font-inter font-semibold text-white mb-2">Transparence et réactivité :</p>
                    <p className="text-white/70 font-inter font-normal text-sm leading-relaxed">
                      devis sous 24h, planning clair, livrables concrets, accompagnement sur-mesure.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Équipe en atelier collaboratif"
                className="rounded-xl w-full h-auto shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-[#111111] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex items-center">
              <div className="text-xl font-bold">
                <span className="bg-[#1e3a8a] text-white px-3 py-1.5 rounded-md font-inter font-bold">smalt</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors font-inter font-normal">
                  Mes projets
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-inter font-normal">
                  Ressources
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-inter font-normal">
                  Mentions légales
                </a>
              </div>

              <div className="flex flex-col gap-2 text-sm text-white/50 font-inter font-normal">
                <p>Incubée à la BGE</p>
                <p>9, Rue Denis Papin</p>
                <p>Business Pôle Les Prés,</p>
                <p>59650 Villeneuve d'Ascq</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
