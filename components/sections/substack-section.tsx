"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"

// Sample blog posts - replace with actual data from Substack API
const blogPosts = [
  {
    id: 1,
    title: "Comment concevoir des produits numériques centrés sur l'utilisateur",
    excerpt:
      "Découvrez les principes fondamentaux du design centré sur l'utilisateur et comment les appliquer à vos projets numériques.",
    date: "12 Mai 2025",
    readTime: "5 min",
    url: "https://yoursubstack.substack.com/p/concevoir-produits-numeriques",
  },
  {
    id: 2,
    title: "Les tendances UX/UI à surveiller en 2025",
    excerpt:
      "Une analyse des tendances émergentes en matière de design d'interface et d'expérience utilisateur qui façonneront l'année à venir.",
    date: "5 Mai 2025",
    readTime: "7 min",
    url: "https://yoursubstack.substack.com/p/tendances-ux-ui-2025",
  },
  {
    id: 3,
    title: "Comment faciliter des ateliers de design thinking à distance",
    excerpt:
      "Techniques et outils pour animer des sessions collaboratives efficaces, même lorsque votre équipe travaille à distance.",
    date: "28 Avril 2025",
    readTime: "6 min",
    url: "https://yoursubstack.substack.com/p/ateliers-design-thinking-distance",
  },
]

export const SubstackSection = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to Substack
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail("")
    }, 1500)
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 flex flex-col w-full items-center justify-center relative">
      <div className="flex flex-col w-full max-w-[1046px] items-center gap-8 sm:gap-12 relative px-4">
        <div className="flex flex-col items-center gap-[21px] relative self-stretch w-full">
          <Badge className="inline-flex items-center justify-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 bg-[#123293] rounded-md shadow-[2px_2px_0px_#000000]">
            <span className="font-bold text-white text-xl sm:text-[27px] tracking-[-1.08px] leading-[1.2] sm:leading-[32.4px] whitespace-nowrap font-['Helvetica_Neue-Bold',Helvetica]">
              Blog
            </span>
          </Badge>

          <div className="flex flex-col items-center gap-5 relative self-stretch w-full">
            <h2 className="relative self-stretch mt-[-1.00px] font-normal text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[52.8px] font-['Helvetica_Neue-Bold',Helvetica]">
              <span className="font-bold text-[#191818]">Insights et </span>
              <span className="font-bold text-[#123293]">réflexions</span>
              <span className="font-bold text-[#191818]"> sur le design</span>
            </h2>

            <p className="max-w-[913px] opacity-70 font-normal text-[#191818] text-base sm:text-lg text-center tracking-[-0.18px] leading-[1.6] sm:leading-[25.2px] font-['Inter',Helvetica] px-4">
              Retrouvez mes articles sur le design, l'UX, la facilitation et les méthodes de travail collaboratives.
            </p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <Card className="w-full max-w-[820px] bg-[#f6f7f9] rounded-[24px] sm:rounded-[34px] border-none overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#123293] font-['Helvetica_Neue-Bold',Helvetica]">
                Abonnez-vous à ma newsletter
              </h3>

              <p className="text-center text-[#191818] opacity-80 text-sm sm:text-base font-['Inter',Helvetica]">
                Recevez mes derniers articles et réflexions directement dans votre boîte mail.
                <br />
                Pas de spam, juste du contenu pertinent sur le design et l'UX.
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    required
                    className="flex-1 px-4 py-2 rounded-md border border-[#d5d9e2] focus:outline-none focus:ring-2 focus:ring-[#123293]"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#123293] text-white hover:bg-[#123293]/90 font-['Helvetica_Neue-Bold',Helvetica]"
                  >
                    {isSubmitting ? "En cours..." : "S'abonner"}
                  </Button>
                </form>
              ) : (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-md text-center w-full max-w-md">
                  Merci pour votre inscription ! Vérifiez votre boîte mail pour confirmer.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[820px]">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-white border border-[#e7e8f0] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-5">
                <div className="flex flex-col gap-4 h-full">
                  <div className="flex justify-between items-center text-sm text-gray-500 font-['Inter',Helvetica]">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h4 className="font-bold text-lg text-[#0f0f0f] font-['Helvetica_Neue-Bold',Helvetica] line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-sm text-[#191818] opacity-80 font-['Inter',Helvetica] line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#123293] font-medium text-sm hover:underline font-['Helvetica_Neue-Bold',Helvetica] mt-2"
                  >
                    Lire l'article
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <Button
          className="bg-white border border-[#123293] text-[#123293] hover:bg-[#f6f7f9] font-['Helvetica_Neue-Bold',Helvetica]"
          asChild
        >
          <a
            href="https://yoursubstack.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Voir tous les articles
            <ArrowRight size={16} />
          </a>
        </Button>
      </div>
    </section>
  )
}
