"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Sample blog posts
  const blogPosts = [
    {
      title: "Comment créer une expérience utilisateur mémorable",
      excerpt:
        "Découvrez les principes clés pour concevoir des interfaces qui marquent l'esprit de vos utilisateurs et les fidélisent.",
      date: "12 Mai 2023",
      image: "/our0caa84upt9a1jyroqg6gdwy4-jpg.png",
      url: "#",
    },
    {
      title: "Les tendances UX/UI à surveiller en 2023",
      excerpt: "Une analyse des nouvelles directions du design numérique et comment les intégrer dans vos projets.",
      date: "3 Avril 2023",
      image: "/atcd5am1fncx4hnnypmrqtplhvo-jpeg.png",
      url: "#",
    },
    {
      title: "Faciliter l'innovation avec le Design Sprint",
      excerpt: "Comment utiliser cette méthodologie pour accélérer la résolution de problèmes complexes en équipe.",
      date: "18 Mars 2023",
      image: "/our0caa84upt9a1jyroqg6gdwy4-jpg.png",
      url: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#f9f9f9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col items-start gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex flex-col items-start gap-4" variants={itemVariants}>
            <span className="text-[#123293] text-sm font-['Helvetica_Neue-Bold',Helvetica] uppercase tracking-wider">
              Le blog
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#191818] max-w-[800px] leading-tight font-['Helvetica_Neue-Bold',Helvetica]">
              Réflexions et <span className="text-[#123293]">conseils</span> sur le design
            </h2>
            <p className="text-[#191818]/70 text-lg max-w-[600px] mt-2">
              Des articles pour partager mon expertise et vous aider à mieux comprendre le monde du design numérique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {blogPosts.map((post, index) => (
              <motion.div key={post.title} variants={itemVariants} className="h-full">
                <Card className="bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-500 h-full transform hover:-translate-y-2 overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 h-full">
                      <span className="text-sm text-[#123293]">{post.date}</span>
                      <h3 className="text-xl font-bold text-[#191818] font-['Helvetica_Neue-Bold',Helvetica]">
                        {post.title}
                      </h3>
                      <p className="text-[#191818]/70 text-base flex-grow">{post.excerpt}</p>
                      <a href={post.url} className="text-[#123293] font-medium hover:underline mt-4 inline-block">
                        Lire l'article →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div className="w-full flex justify-center mt-8" variants={itemVariants}>
            <Button className="bg-[#123293] text-white hover:bg-[#123293]/90 rounded-full px-8 py-6">
              Voir tous les articles
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
