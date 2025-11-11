"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 64 // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -my-2">
            <Image
              src="/logo.png"
              alt="Winning As One Logo"
              width={600}
              height={200}
              className="h-40 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection("culture")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Culture
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-accent transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary-foreground/10"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary-foreground/10"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection("culture")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary-foreground/10"
            >
              Culture
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary-foreground/10"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-accent"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}