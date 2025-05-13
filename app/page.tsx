"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"

// Import sections
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { ProcessSection } from "@/components/sections/process-section"
import { AboutSection } from "@/components/sections/about-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const headerBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"])

  // Refs for scroll navigation
  const servicesRef = useRef<HTMLDivElement>(null)
  const approachRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    setMenuOpen(false)
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <div className="flex flex-col items-start w-full bg-white overflow-hidden">
      {/* Header */}
      <motion.header
        className="flex w-full items-center justify-center py-6 px-6 md:px-12 fixed top-0 z-50 backdrop-blur-md"
        style={{ backgroundColor: headerBackground }}
      >
        <div className="flex w-full max-w-[1400px] items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-24 h-[40px] [background:url(/link-1.png)_50%_50%_/_cover]"
          />

          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => scrollToSection(servicesRef)}
                className="text-[#191818] hover:text-[#123293] transition-colors font-['Helvetica_Neue-Regular',Helvetica] text-sm"
              >
                Services
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => scrollToSection(approachRef)}
                className="text-[#191818] hover:text-[#123293] transition-colors font-['Helvetica_Neue-Regular',Helvetica] text-sm"
              >
                Approche
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => scrollToSection(pricingRef)}
                className="text-[#191818] hover:text-[#123293] transition-colors font-['Helvetica_Neue-Regular',Helvetica] text-sm"
              >
                Tarifs
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => scrollToSection(aboutRef)}
                className="text-[#191818] hover:text-[#123293] transition-colors font-['Helvetica_Neue-Regular',Helvetica] text-sm"
              >
                À propos
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => scrollToSection(blogRef)}
                className="text-[#191818] hover:text-[#123293] transition-colors font-['Helvetica_Neue-Regular',Helvetica] text-sm"
              >
                Blog
              </motion.button>
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                onClick={() => scrollToSection(contactRef)}
                className="bg-[#123293] text-white hover:bg-[#123293]/90 rounded-full px-6 py-2 text-sm font-['Helvetica_Neue-Bold',Helvetica]"
              >
                Commencer un projet
              </Button>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center"
          >
            <MenuIcon className="w-6 h-6 text-[#191818]" />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <div className="relative w-24 h-[40px] [background:url(/link-1.png)_50%_50%_/_cover]" />
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6 text-[#191818]" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                onClick={() => scrollToSection(servicesRef)}
                className="text-[#191818] text-2xl font-['Helvetica_Neue-Bold',Helvetica]"
              >
                Services
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={() => scrollToSection(approachRef)}
                className="text-[#191818] text-2xl font-['Helvetica_Neue-Bold',Helvetica]"
              >
                Approche
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                onClick={() => scrollToSection(pricingRef)}
                className="text-[#191818] text-2xl font-['Helvetica_Neue-Bold',Helvetica]"
              >
                Tarifs
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                onClick={() => scrollToSection(aboutRef)}
                className="text-[#191818] text-2xl font-['Helvetica_Neue-Bold',Helvetica]"
              >
                À propos
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                onClick={() => scrollToSection(blogRef)}
                className="text-[#191818] text-2xl font-['Helvetica_Neue-Bold',Helvetica]"
              >
                Blog
              </motion.button>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="mt-8"
              >
                <Button
                  onClick={() => {
                    setMenuOpen(false)
                    scrollToSection(contactRef)
                  }}
                  className="bg-[#123293] text-white hover:bg-[#123293]/90 rounded-full px-8 py-6 text-lg font-['Helvetica_Neue-Bold',Helvetica]"
                >
                  Commencer un projet
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full">
        <HeroSection />

        <div ref={servicesRef}>
          <ServicesSection />
        </div>

        <div ref={approachRef}>
          <ApproachSection />
        </div>

        <div ref={pricingRef}>
          <PricingSection />
        </div>

        <div ref={processRef}>
          <ProcessSection />
        </div>

        <div ref={aboutRef}>
          <AboutSection />
        </div>

        <div ref={blogRef}>
          <BlogSection />
        </div>

        <div ref={contactRef}>
          <ContactSection />
        </div>

        <Footer />
      </main>
    </div>
  )
}
