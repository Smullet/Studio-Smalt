"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LogoMarquee from '@/components/LogoMarquee'
import { AnimatedText } from '@/components/animations/AnimatedText'

export const HeroHeader = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="https://www.studiosmalt.fr" className="flex items-center">
              <img src="/logo.svg" alt="Studio Smalt" className="h-8 sm:h-10" />
            </Link>
            {/* Navigation desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="https://www.studiosmalt.fr/projets" className="text-gray-800 hover:text-[#123293] transition-colors text-base font-medium">
                Mes projets
              </a>
              <a href="https://www.studiosmalt.fr/ressources" className="text-gray-800 hover:text-[#123293] transition-colors text-base font-medium">
                Ressources
              </a>
              <a 
                href="mailto:salomemullet@studiosmalt.fr?subject=Discussion%20de%20projet&body=Bonjour%20Salomé%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
                className="bg-[#123293] text-white px-6 py-2 rounded-[14px] hover:bg-blue-900 transition-colors text-base font-medium"
              >
                Discuter de votre projet
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <section className="hero-header w-full min-h-screen pt-20 sm:pt-28 pb-12 sm:pb-24 relative bg-[#123293] flex justify-center items-center overflow-hidden px-4 sm:px-6">
        <div className="container w-full max-w-3xl mx-auto flex flex-col justify-center items-center gap-8 relative z-10">
          <div className="heading-pourquoi text-center text-white text-lg sm:text-xl md:text-2xl font-black font-['Helvetica_Neue'] uppercase tracking-wide">
              STUDIO DIGITAL
            </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-11">
              <div className="text-center text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-['Helvetica_Neue'] leading-tight tracking-tight">
                Smart
              </div>
              <div className="background-shadow max-w-[90%] sm:max-w-[860.78px] px-2 sm:px-2.5 py-1 sm:py-1.5 origin-top-left -rotate-1 bg-white rounded-md shadow-[2px_2px_0px_0px_rgba(18,18,20,1.00)] flex justify-center items-center">
                <div className="text-center text-[#123293] text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-black font-['Helvetica_Neue'] leading-tight tracking-tight">
                  Alternative
                </div>
              </div>
            </div>
            <AnimatedText
              text="Design agile, centré utilisateurs, orienté livraison"
              className="max-w-xl text-center text-white text-base sm:text-lg md:text-xl font-light font-['Helvetica_Neue'] leading-relaxed"
            />
          </div>
          <div className="text-3xl sm:text-4xl md:text-[48px] text-center font-black text-[#123293] leading-tight">
            et qui fonctionnent
          </div>
          <a 
            href="mailto:salomemullet@studiosmalt.fr?subject=Discussion%20de%20projet&body=Bonjour%20Salomé%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
            className="w-auto px-4 sm:px-6 py-3 sm:py-4 bg-[#f9d45c] rounded-xl sm:rounded-2xl text-[#123293] text-sm sm:text-base font-black font-['Helvetica_Neue'] leading-tight tracking-wide hover:bg-[#f0c94f] transition-colors text-center mt-4"
          >
            Discuter de votre projet
          </a>
        </div>
        
        {/* Ajout du défilement des logos */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <LogoMarquee />
        </div>
      </section>
    </>
  )
}
