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
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-start w-full bg-white">
      <header className="flex w-full items-center justify-between py-6 px-6 md:px-12 lg:px-20 sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="relative w-24 h-[40px] [background:url(/link-1.png)_50%_50%_/_cover]" />

        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#services"
            className="text-[#191818] hover:text-[#123293] transition-colors font-['Helvetica_Neue-Regular',Helvetica] text-sm"
          >
            Nos services
          </a>
          <a
            href="#approach"
            className="text-[#191818] hover:text-[#123293] transition-colors font-['Helvetica_Neue-Regular',Helvetica] text-sm"
          >
            Notre approche
          </a>
          <a
            href="#tarifs"
            className="text-[#191818] hover:text-[#123293] transition-colors font-['Helvetica_Neue-Regular',Helvetica] text-sm"
          >
            Tarifs
          </a>
          <a
            href="#blog"
            className="text-[#191818] hover:text-[#123293] transition-colors font-['Helvetica_Neue-Regular',Helvetica] text-sm"
          >
            Le blog
          </a>

          <Button className="bg-[#123293] text-white rounded-md hover:bg-[#123293]/90 font-['Helvetica_Neue-Regular',Helvetica] ml-4">
            Commencer un projet
          </Button>
        </nav>

        <button className="md:hidden flex items-center gap-2 text-[#191818]">
          Menu <ChevronDown size={16} />
        </button>
      </header>

      <main className="w-full">
        <HeroHeader />
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
