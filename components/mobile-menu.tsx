"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] bg-white shadow-lg p-4"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/projets"
                className="text-gray-800 hover:text-[#123293] transition-colors text-base font-medium px-4 py-2"
                onClick={toggleMenu}
              >
                Mes projets
              </Link>
              <Link
                href="/ressources"
                className="text-gray-800 hover:text-[#123293] transition-colors text-base font-medium px-4 py-2"
                onClick={toggleMenu}
              >
                Ressources
              </Link>
              <a
                href="mailto:salomemullet@studiosmalt.fr?subject=Discussion%20de%20projet&body=Bonjour%20Salomé%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
                className="bg-[#123293] text-white px-6 py-2 rounded-[14px] hover:bg-blue-900 transition-colors text-base font-medium text-center"
                onClick={toggleMenu}
              >
                Discuter de votre projet
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 