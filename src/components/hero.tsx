"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    /* Added team photo as background with overlay, adjusted layout */
    <section className="relative min-h-screen px-4 bg-white overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Team Photo.jpg"
          alt="Winning As One Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content on top of background */}
      <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-white animate-slide-down">
          <span>Winning As One</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-white mb-8 text-balance animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Your trusted partner in financial and wealth management planning
        </p>
        <p
          className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          Secure your future and achieve financial peace of mind with our expert guidance and comprehensive solutions
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  )
}
