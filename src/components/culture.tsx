"use client"

import { useObserve } from "@/hooks/use-observe"

export default function Culture() {
  const ref = useObserve()

  const values = [
    {
      name: "Gratitude",
      description: "We appreciate every opportunity and relationship in our journey",
    },
    {
      name: "Respect",
      description: "We honor the trust and individuality of each person we work with",
    },
    {
      name: "Proactive",
      description: "We anticipate needs and take initiative to create positive outcomes",
    },
    {
      name: "Integrity",
      description: "We operate with honesty, transparency, and unwavering ethical standards",
    },
    {
      name: "Positive",
      description: "We approach challenges with optimism and a growth mindset",
    },
  ]

  return (
    /* Add scroll animation observer to section */
    <section ref={ref} id="culture" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These five principles guide everything we do and define who we are as a team
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 stagger">
          {values.map((value, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 border transition-all group cursor-pointer ${
                index % 2 === 0
                  ? "bg-black text-white border-black hover:bg-gray-800"
                  : "bg-white text-black border-black hover:bg-gray-50"
              }`}
            >
              <div className="mb-4">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg font-bold transition-colors ${
                    index % 2 === 0 ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{value.name}</h3>
              <p className={`text-sm leading-relaxed ${index % 2 === 0 ? "text-gray-200" : "text-gray-700"}`}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
