"use client"

import { Card } from "@/components/ui/card"

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Monabanq",
      description: "Refonte de l'interface de gestion des comptes",
      image: "/projects/monabanq.jpg",
      tags: ["UX Design", "UI Design", "Design System"],
    },
    {
      title: "OVHcloud",
      description: "Design de l'interface d'administration cloud",
      image: "/projects/ovh.jpg",
      tags: ["Product Design", "UX Research", "Design System"],
    },
    {
      title: "Nestor",
      description: "Application de livraison de repas d'entreprise",
      image: "/projects/nestor.jpg",
      tags: ["Mobile App", "UX Design", "UI Design"],
    },
  ]

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-[#f6f7f9] flex flex-col justify-center items-center px-4 sm:px-6">
      <div className="w-full max-w-6xl flex flex-col justify-start items-center gap-8 sm:gap-12">
        <div className="w-full flex flex-col justify-start items-center gap-5">
          <div className="p-2 sm:p-2.5 origin-top-left -rotate-2 bg-[#123293] rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] inline-flex justify-center items-center gap-2.5">
            <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-['Inter'] leading-loose">
              Mes projets
            </div>
          </div>
          <div className="w-full text-center">
            <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
              Des projets{" "}
            </span>
            <span className="text-[#123293] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
              concrets
            </span>
            <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
              , <br />
              des résultats{" "}
            </span>
            <span className="text-[#123293] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Helvetica_Neue'] leading-tight">
              mesurables
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 