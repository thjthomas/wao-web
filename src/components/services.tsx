"use client"

import { Shield, TrendingUp, Home, PiggyBank, Heart, FileText } from "lucide-react"
import { useObserve } from "@/hooks/use-observe"

export default function Services() {
  const ref = useObserve()

  const services = [
    {
      icon: Shield,
      name: "Life Insurance",
      description: "Comprehensive life insurance coverage to protect your loved ones and secure their financial future",
    },
    {
      icon: TrendingUp,
      name: "Income Protection",
      description: "Guard against income loss with protection plans that ensure continued financial stability",
    },
    {
      icon: Home,
      name: "Loan Cancellation",
      description: "Protect your family from outstanding debts through specialized loan cancellation insurance",
    },
    {
      icon: PiggyBank,
      name: "Retirement Planning",
      description: "Build a comfortable retirement with strategic planning and investment solutions",
    },
    {
      icon: Heart,
      name: "Child Education",
      description: "Secure your child's future education with dedicated planning and investment strategies",
    },
    {
      icon: FileText,
      name: "Estate Planning",
      description: "Comprehensive will and trust services to protect your legacy and family assets",
    },
  ]

  return (
    /* Add scroll animation observer to section */
    <section ref={ref} id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-black transition-all group"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-100 text-black group-hover:bg-black group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
