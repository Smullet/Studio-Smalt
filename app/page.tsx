"use client"

import { useEffect } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
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

  // Animation controls for sections
  const heroControls = useAnimation()
  const introControls = useAnimation()
  const approachControls = useAnimation()
  const pricingControls = useAnimation()
  const processControls = useAnimation()
  const aboutControls = useAnimation()
  const substackControls = useAnimation()
  const contactControls = useAnimation()

  // Refs for detecting when sections are in view
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [approachRef, approachInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [pricingRef, pricingInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [substackRef, substackInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) heroControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
  }, [heroInView, heroControls])

  useEffect(() => {
    if (introInView) introControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
  }, [introInView, introControls])

  useEffect(() => {
    if (approachInView) approachControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
  }, [approachInView, approachControls])

  useEffect(() => {
    if (pricingInView) pricingControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
  }, [pricingInView, pricingControls])

  useEffect(() => {
    if (processInView) processControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
  }, [processInView, processControls])

  useEffect(() => {
    if (aboutInView) aboutControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
  }, [aboutInView, aboutControls])

  useEffect(() => {
    if (substackInView) substackControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
  }, [substackInView, substackControls])

  useEffect(() => {
    if (contactInView) contactControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
  }, [contactInView, contactControls])

  return (
    <div className="flex flex-col items-start w-full bg-white">
      <header className="flex w-full items-center justify-center py-3 sm:py-4 px-4 sm:px-8 sticky top-0 z-10 bg-[#ffffffbf] backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)]">
        <div className="flex w-full max-w-[980px] items-center justify-between">
          <div className="relative w-24 sm:w-32 h-[40px] sm:h-[53px] [background:url(/link-1.png)_50%_50%_/_cover]" />

          <div className="flex items-center justify-end">
            <Button
              variant="outline"
              className="bg-white rounded-lg border border-solid border-black font-['Helvetica_Neue-Bold',Helvetica] text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
            >
              Discuter de votre projet
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full">
        <motion.div ref={heroRef} initial={{ opacity: 0, y: 50 }} animate={heroControls}>
          <HeroHeader />
        </motion.div>

        <motion.div ref={introRef} initial={{ opacity: 0, y: 50 }} animate={introControls}>
          <SectionIntro />
        </motion.div>

        <motion.div ref={approachRef} initial={{ opacity: 0, y: 50 }} animate={approachControls}>
          <SectionProjects />
        </motion.div>

        <motion.div ref={pricingRef} initial={{ opacity: 0, y: 50 }} animate={pricingControls}>
          <ContainerWrapper />
        </motion.div>

        <motion.div ref={processRef} initial={{ opacity: 0, y: 50 }} animate={processControls}>
          <DivWrapper />
        </motion.div>

        <motion.div ref={aboutRef} initial={{ opacity: 0, y: 50 }} animate={aboutControls}>
          <SectionProjectsWrapper />
        </motion.div>

        <motion.div ref={substackRef} initial={{ opacity: 0, y: 50 }} animate={substackControls}>
          <SubstackSection />
        </motion.div>

        <motion.div ref={contactRef} initial={{ opacity: 0, y: 50 }} animate={contactControls}>
          <Contact />
        </motion.div>

        <Footer />
      </main>
    </div>
  )
}
