"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    context: string
    objectives: string[]
    contribution: {
      analysis: string
      uxDesign: string[]
      visualIdentity: string[]
      responsive: string
    }
    images: string[]
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#102D84] z-50 overflow-y-auto"
      >
        <div className="min-h-screen px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="text-white hover:opacity-70 transition-opacity"
              >
                <X size={32} />
              </button>
            </div>

            <div className="space-y-12 text-white">
              <h2 className="text-4xl sm:text-5xl font-bold">{project.title}</h2>

              <section className="space-y-6">
                <h3 className="text-2xl font-bold">CONTEXTE ET ENJEUX</h3>
                <p className="text-lg leading-relaxed">{project.context}</p>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-bold">OBJECTIFS DU PROJET</h3>
                <ul className="space-y-2">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="text-lg leading-relaxed">
                      {objective}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-bold">CONTRIBUTION ET EXPERTISE</h3>
                <div className="space-y-8">
                  <p className="text-lg leading-relaxed">{project.contribution.analysis}</p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">🔍 Conception UX détaillée :</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {project.contribution.uxDesign.map((item, index) => (
                        <li key={index} className="text-lg leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">🎨 Création d'une identité visuelle modernisée :</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {project.contribution.visualIdentity.map((item, index) => (
                        <li key={index} className="text-lg leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">📱 Conception responsive :</h4>
                    <p className="text-lg leading-relaxed">{project.contribution.responsive}</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`Image ${index + 1} du projet`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 