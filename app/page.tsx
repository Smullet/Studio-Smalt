"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const services = [
    {
      title: "Product Design",
      subtitle: "VOTRE SITE EST-IL VRAIMENT À LA HAUTEUR DE VOS AMBITIONS ?",
      description:
        "Audit UX/UI complet, refonte d'interface, optimisation de l'expérience utilisateur pour maximiser vos conversions",
      features: ["Audit UX/UI", "Wireframing", "Prototypage", "Tests utilisateurs", "Design system"],
      color: "bg-[#123293]",
      textColor: "text-white",
    },
    {
      title: "Web Design",
      subtitle: "VOTRE SITE EST-IL VRAIMENT À LA HAUTEUR DE VOS AMBITIONS ?",
      description: "Création de sites web sur-mesure, landing pages performantes, refonte complète orientée conversion",
      features: ["Site vitrine", "E-commerce", "Landing page", "Responsive design", "SEO optimisé"],
      color: "bg-[#f9d45c]",
      textColor: "text-black",
    },
    {
      title: "Facilitation",
      subtitle: "VOTRE SITE EST-IL VRAIMENT À LA HAUTEUR DE VOS AMBITIONS ?",
      description: "Animation d'ateliers de co-création, facilitation de projets, accompagnement équipes produit",
      features: ["Ateliers UX", "Design thinking", "Idéation", "Prototypage rapide", "Formation"],
      color: "bg-[#0f0f0f]",
      textColor: "text-white",
    },
  ]

  const processSteps = [
    {
      number: "1",
      title: "Comprendre",
      description: "Analyse de vos besoins, audit de l'existant, définition des objectifs et contraintes techniques",
      color: "bg-white",
      textColor: "text-black",
      icon: "🔍",
    },
    {
      number: "2",
      title: "Concevoir",
      description:
        "Idéation, wireframing, prototypage et tests utilisateurs pour valider les concepts avant développement",
      color: "bg-[#f9d45c]",
      textColor: "text-black",
      icon: "💻",
    },
    {
      number: "3",
      title: "Valider",
      description: "Tests utilisateurs, itérations, validation des parcours et optimisation continue des performances",
      color: "bg-[#0f0f0f]",
      textColor: "text-white",
      icon: "✓",
    },
    {
      number: "4",
      title: "Comprendre",
      description: "Livraison des maquettes finales, accompagnement développement et suivi post-livraison personnalisé",
      color: "bg-white",
      textColor: "text-black",
      icon: "🎯",
    },
  ]

  const pricingPlans = [
    {
      title: "Product Design",
      price: "380",
      period: "/ jour",
      description: "Conception d'interfaces utilisateur, audit UX/UI complet, prototypage interactif",
      features: [
        "Audit UX/UI complet et recommandations",
        "Wireframing et prototypage interactif",
        "Tests utilisateurs et itérations",
        "Design system et guidelines",
        "Accompagnement développement",
        "Suivi post-livraison 1 mois",
        "Formation équipe interne",
        "Documentation complète",
      ],
      color: "border-[#123293]",
      buttonColor: "bg-[#123293]",
      dotColor: "text-[#123293]",
    },
    {
      title: "Web Design",
      price: "700",
      period: "/ projet",
      description: "Création de sites web complets, landing pages performantes, refonte orientée conversion",
      features: [
        "Site vitrine complet responsive",
        "Design moderne et sur-mesure",
        "Optimisation SEO technique",
        "Intégration CMS au choix",
        "Formation client complète",
        "Maintenance incluse 3 mois",
        "Support technique prioritaire",
        "Analytics et suivi performance",
      ],
      color: "border-[#f9d45c]",
      buttonColor: "bg-[#f9d45c]",
      popular: true,
      dotColor: "text-[#f9d45c]",
    },
    {
      title: "Facilitation",
      price: "450",
      period: "/ jour",
      description: "Animation d'ateliers créatifs, facilitation de projets, formation équipes produit",
      features: [
        "Ateliers de co-création sur-mesure",
        "Méthodes design thinking éprouvées",
        "Formation équipes aux bonnes pratiques",
        "Accompagnement projet personnalisé",
        "Outils et templates fournis",
        "Suivi et coaching continu",
        "Rapport détaillé post-atelier",
        "Recommandations stratégiques",
      ],
      color: "border-[#0f0f0f]",
      buttonColor: "bg-[#0f0f0f]",
      dotColor: "text-[#0f0f0f]",
    },
  ]

  const projects = [
    {
      title: "Refonte UX d'une plateforme SaaS",
      description: "Amélioration de l'expérience utilisateur d'une plateforme de gestion de projets pour startup tech",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-[#123293]",
    },
    {
      title: "Création d'un site e-commerce",
      description: "Conception et développement d'une boutique en ligne pour une marque de mode éthique",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-[#f9d45c]",
    },
    {
      title: "Design system pour startup",
      description: "Création d'un système de design complet pour une startup fintech en croissance",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-[#0f0f0f]",
    },
  ]

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <header className="flex w-full items-center justify-between py-6 px-8 bg-white">
        <div className="flex items-center">
          <div className="font-studio-smalt">
            <span className="bg-[#123293] text-white px-3 py-1.5 rounded-md">smalt</span>
          </div>
        </div>

        <nav className="flex items-center gap-12">
          <a href="#" className="font-text-regular-m text-[#191818] hover:text-[#123293] transition-colors">
            Mes projets
          </a>
          <a href="#" className="font-text-regular-m text-[#191818] hover:text-[#123293] transition-colors">
            Ressources
          </a>
        </nav>

        <Button className="bg-[#123293] text-white px-6 py-3 rounded-lg font-text-emphasis-m hover:bg-[#0f2570] transition-colors">
          Discuter de votre projet
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#123293] py-24 px-8 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-white/10 rotate-45"></div>
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] border border-white/5 rotate-12"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-white/70 font-text-regular-m uppercase tracking-[0.2em] mb-8">STUDIO DIGITAL</p>
            <h1 className="font-display-display-XL text-white mb-6 leading-none">Smart</h1>
            <div className="inline-block bg-white px-8 py-4 rounded-lg transform -rotate-1 shadow-2xl mb-8">
              <span className="text-[#123293] font-display-display-XL leading-none">Alternative</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 font-body-regular-l mb-12 max-w-2xl mx-auto"
          >
            Design agile, centré utilisateurs, orienté livraison
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="bg-[#f9d45c] text-[#123293] px-8 py-4 rounded-lg font-text-emphasis-m hover:bg-[#f7d03c] transition-colors shadow-lg">
              Discuter de votre projet
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-6 px-8 bg-[#123293] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between opacity-50">
            <div className="text-white font-text-regular-m">nestor</div>
            <div className="text-white font-text-regular-m">monabanq</div>
            <div className="text-white font-text-regular-m">🍎</div>
            <div className="text-white font-text-regular-m">Devtrotter</div>
            <div className="text-white font-text-regular-m">Fresh Sara</div>
            <div className="text-white font-text-regular-m">Morpland</div>
            <div className="text-white font-text-regular-m">OVHcloud</div>
            <div className="text-white font-text-regular-m">meneq</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-[#0f0f0f] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#123293] text-white px-4 py-2 rounded-lg mb-8 font-text-emphasis-m">
              Studio Smalt
            </div>

            <h2 className="font-display-display-s mb-8 leading-tight">
              Freelance oui,
              <br />
              freestyle non
            </h2>

            <p className="text-white/90 font-body-regular-l mb-6">
              Chez Studio Smalt, je ne fais pas de design "au feeling".
            </p>

            <p className="text-white/80 font-text-regular-l mb-6">
              Je suis <strong className="text-white font-text-emphasis-m">Salomé Mullet</strong>, freelance en product
              design, et j'accompagne les équipes produit, tech et marketing dans la création d'interfaces claires,
              utiles et testées.
            </p>

            <p className="text-white/80 font-text-regular-l mb-8">
              Pas de blabla ni de refontes uniquement cosmétiques : chaque mission suit une méthodologie éprouvée, de
              l'atelier de cadrage jusqu'à la livraison prête à intégrer.
            </p>

            <div className="mb-8">
              <p className="text-[#f9d45c] font-text-emphasis-m mb-4">❤️ Mon approche :</p>
              <ul className="space-y-2 text-white/80 font-text-regular-m">
                <li>• Structurer vos idées avec vos utilisateurs</li>
                <li>• Prototyper vite pour tester mieux</li>
                <li>• Livrer des parcours cohérents, conçus pour durer</li>
              </ul>
            </div>

            <p className="text-white/70 font-text-regular-m italic">En solo, oui — mais avec une rigueur de studio.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-ttile-title-m text-[#123293] mb-4">Des solutions digitales qui vous</h2>
            <h2 className="font-ttile-title-m text-[#123293] mb-4">ressemblent,</h2>
            <h2 className="font-ttile-title-m text-[#123293]">et qui fonctionnent</h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`${service.color} ${service.textColor} p-8 rounded-lg`}>
                  <CardContent className="p-0">
                    <h3 className="font-text-emphasis-XL mb-2">{service.title}</h3>
                    <p className="font-text-regular-m opacity-80 mb-4">{service.subtitle}</p>
                    <p className="font-text-regular-l mb-6 opacity-90">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="font-text-regular-m opacity-70 bg-black/10 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#123293] text-white px-8 py-3 rounded-lg font-text-emphasis-m hover:bg-[#0f2570] transition-colors">
              Voir mes projets
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-8 bg-[#123293] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-ttile-title-m mb-4">Une approche agile, simple</h2>
            <h2 className="font-ttile-title-m">et humaine</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`${step.color} ${step.textColor} p-8 rounded-lg h-full`}>
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <span className="font-display-display-s mr-4">{step.number}</span>
                      <h3 className="font-text-emphasis-XL">{step.title}</h3>
                    </div>
                    <p className="font-text-regular-l opacity-80">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-ttile-title-m text-[#123293] mb-4">Des offres claires,</h2>
            <h2 className="font-ttile-title-m text-[#123293]">des tarifs justes</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`border-2 ${plan.color} p-8 rounded-lg h-full relative ${plan.popular ? "ring-2 ring-[#f9d45c]" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#f9d45c] text-black px-4 py-1 rounded-full font-text-emphasis-m">
                      Populaire
                    </div>
                  )}
                  <CardContent className="p-0">
                    <h3 className="font-text-emphasis-XL mb-2">{plan.title}</h3>
                    <div className="mb-4">
                      <span className="font-display-display-s">{plan.price}</span>
                      <span className="font-text-regular-l opacity-70">{plan.period}</span>
                    </div>
                    <p className="font-text-regular-l opacity-80 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center font-text-regular-m">
                          <span className={`${plan.dotColor} mr-2`}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-text-emphasis-m hover:opacity-90 transition-opacity`}
                    >
                      Choisir cette offre
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-ttile-title-m text-[#123293]">Parlons de votre projet</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`${project.color} text-white p-6 rounded-lg h-full`}>
                  <CardContent className="p-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                    <h3 className="font-text-emphasis-m mb-2">{project.title}</h3>
                    <p className="font-text-regular-l opacity-80">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-[#123293] text-white px-8 py-3 rounded-lg font-text-emphasis-m hover:bg-[#0f2570] transition-colors">
              Voir tous mes projets
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-8 bg-[#0f0f0f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-ttile-title-m mb-12">POURQUOI CHOISIR STUDIO SMALT ?</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-green-400 text-lg mt-1">✅</span>
                  <div>
                    <p className="font-text-emphasis-m text-white mb-2">Expertise produit et UX/UI :</p>
                    <p className="text-white/70 font-text-regular-l">
                      de l'idée au produit fini, en passant par des ateliers de cadrage, des tests utilisateurs et des
                      itérations rapides.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-green-400 text-lg mt-1">✅</span>
                  <div>
                    <p className="font-text-emphasis-m text-white mb-2">Approche agile et humaine :</p>
                    <p className="text-white/70 font-text-regular-l">
                      nous travaillons main dans la main avec vos équipes pour co-construire des solutions qui répondent
                      à vos enjeux business et utilisateurs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-green-400 text-lg mt-1">✅</span>
                  <div>
                    <p className="font-text-emphasis-m text-white mb-2">Transparence et réactivité :</p>
                    <p className="text-white/70 font-text-regular-l">
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
      <footer className="py-16 px-8 bg-[#0f0f0f] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex items-center">
              <div className="font-studio-smalt">
                <span className="bg-[#123293] text-white px-3 py-1.5 rounded-md">smalt</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors font-text-regular-m">
                  Mes projets
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-text-regular-m">
                  Ressources
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-text-regular-m">
                  Mentions légales
                </a>
              </div>

              <div className="flex flex-col gap-2 text-sm text-white/50 font-text-regular-m">
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
