"use client"

import Image from "next/image"
import { useObserve } from "@/hooks/use-observe"

export default function Team() {
  const ref = useObserve()

  return (
    /* Add scroll animation observer to section */
    <section ref={ref} id="team" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Meet Our Team</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A dedicated group of professionals united by a common purpose: your financial success and security
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team%20Photo-hqq9osSv546KXl8V9yxob9QZdWUUEJ.jpg"
            alt="Winning As One Team"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            Together, we bring diverse expertise and shared values to every client relationship.
          </p>
          <p className="text-foreground/60">
            Our strength lies not just in individual excellence, but in our commitment to collaborative service.
          </p>
        </div>
      </div>
    </section>
  )
}
