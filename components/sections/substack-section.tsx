"use client"

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
  return (
    <section className="py-20 md:py-32 bg-[#f9f9f9]">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-start gap-16">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[#123293] text-sm font-['Helvetica_Neue-Bold',Helvetica] uppercase tracking-wider">
              Le blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Insights et <span className="text-[#123293]">réflexions</span> sur le design
            </h2>
            <p className="text-[#191818]/70 text-lg max-w-[600px] mt-2">
              Retrouvez mes articles sur le design, l'UX, la facilitation et les méthodes de travail collaboratives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex justify-between items-center text-sm text-[#191818]/50">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h4 className="font-bold text-lg text-[#191818] font-['Helvetica_Neue-Bold',Helvetica] line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-[#191818]/70 text-sm line-clamp-3 flex-grow">{post.excerpt}</p>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#123293] font-medium text-sm hover:underline mt-2"
                    >
                      Lire l'article
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <Button className="bg-[#123293] text-white hover:bg-[#123293]/90 rounded-md" asChild>
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
        </div>
      </div>
    </section>
  )
}
