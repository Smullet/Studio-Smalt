"use client"

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
import { MockupDisplay } from "@/components/sections/mockup-display"

export default function Home() {
  return (
    <div className="flex flex-col items-start w-full bg-white">
      <header className="flex w-full items-center justify-center py-4 px-8 sticky top-0 z-50 bg-white/95 backdrop-blur-md">
        <div className="flex w-full max-w-[1200px] items-center justify-between">
          <div className="relative w-32 h-[53px] [background:url(/link-1.png)_50%_50%_/_cover]" />

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-[#123293] font-['Helvetica_Neue-Bold',Helvetica] hover:opacity-80 transition-opacity"
            >
              Mes services
            </a>
            <a
              href="#approach"
              className="text-[#123293] font-['Helvetica_Neue-Bold',Helvetica] hover:opacity-80 transition-opacity"
            >
              Approche
            </a>
            <a
              href="#tarifs"
              className="text-[#123293] font-['Helvetica_Neue-Bold',Helvetica] hover:opacity-80 transition-opacity"
            >
              Tarifs
            </a>
            <a
              href="#blog"
              className="text-[#123293] font-['Helvetica_Neue-Bold',Helvetica] hover:opacity-80 transition-opacity"
            >
              Blog
            </a>
          </nav>

          <Button
            variant="outline"
            className="bg-[#123293] text-white rounded-full border-none hover:bg-[#123293]/90 font-['Helvetica_Neue-Bold',Helvetica] px-6"
          >
            ON EN PARLE ?
          </Button>
        </div>
      </header>

      <main className="w-full">
        <HeroHeader />
        <MockupDisplay />
        <div id="services">
          <SectionIntro />
        </div>
        <div id="approach">
          <SectionProjects />
        </div>
        <div id="tarifs">
          <ContainerWrapper />
        </div>
        <DivWrapper />
        <SectionProjectsWrapper />
        <div id="blog">
          <SubstackSection />
        </div>
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
