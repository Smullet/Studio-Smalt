"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-800 hover:text-[#123293] transition-colors"
        aria-label="Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-4 border-b">
              <div className="text-xl font-bold text-[#123293]">Studio Smalt</div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-800 hover:text-[#123293] transition-colors"
                aria-label="Fermer le menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu items */}
            <nav className="flex flex-col px-4 py-8 gap-6">
              <a
                href="#projets"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-[#123293] transition-colors text-lg font-medium"
              >
                Mes projets
              </a>
              <a
                href="#ressources"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-[#123293] transition-colors text-lg font-medium"
              >
                Ressources
              </a>
              <a 
                href="mailto:salomemullet@studiosmalt.fr?subject=Discussion%20de%20projet&body=Bonjour%20Salomé%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
                className="bg-[#123293] text-white px-6 py-2 rounded-[14px] hover:bg-blue-900 transition-colors"
              >
                Discuter de votre projet
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
} 