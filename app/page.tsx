"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroHeader } from "@/components/sections/hero-header"
import { SectionIntro } from "@/components/sections/section-intro"
import { SectionProjects } from "@/components/sections/section-projects"
import { ContainerWrapper } from "@/components/sections/container-wrapper"
import { SectionProjectsWrapper } from "@/components/sections/section-projects-wrapper"
import { DivWrapper } from "@/components/sections/div-wrapper"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { SubstackSection } from "@/components/sections/substack-section"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const headerBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"])

  // Animation controls for sections
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    intro: useRef<HTMLDivElement>(null),
    approach: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    substack: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  // InView hooks for each section
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: false })
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: false })
  const [approachRef, approachInView] = useInView({ threshold: 0.1, triggerOnce: false })
  const [pricingRef, pricingInView] = useInView({ threshold: 0.1, triggerOnce: false })
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: false })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: false })
  const [substackRef, substackInView] = useInView({ threshold: 0.1, triggerOnce: false })
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: false })

  return (
    <div className="flex flex-col items-start w-full bg-white">
      <motion.header
        className="flex w-full items-center justify-center py-4 px-8 sticky top-0 z-10 backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)]"
        style={{ backgroundColor: headerBackground }}
      >
        <div className="flex w-full max-w-[980px] items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-[53px] [background:url(/link-1.png)_50%_50%_/_cover]"
          />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-end gap-4 rounded-[10px] border border-solid border-black"
          >
            <Button
              variant="outline"
              className="bg-white rounded-lg border border-solid border-black font-body-emphasis-m text-black"
            >
              Discuter de votre projet
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="w-full">
        <div ref={heroRef}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <HeroHeader />
          </motion.div>
        </div>

        <div ref={introRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <SectionIntro />
          </motion.div>
        </div>

        <div ref={approachRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <SectionProjects />
          </motion.div>
        </div>

        <div ref={pricingRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <ContainerWrapper />
          </motion.div>
        </div>

        <div ref={processRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <DivWrapper />
          </motion.div>
        </div>

        <div ref={aboutRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <SectionProjectsWrapper />
          </motion.div>
        </div>

        <div ref={substackRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={substackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <SubstackSection />
          </motion.div>
        </div>

        <div ref={contactRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.div>
        </div>

        <Footer />
      </main>
    </div>
  )
}
