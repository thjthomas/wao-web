"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useObserve } from "@/hooks/use-observe"

export default function Contact() {
  const ref = useObserve()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxFZOMj9tV0PC2Tg7f94O-_6l2fEu8G9dgQKN_tJw2CnbrVY17dmGqZkZa7uYqWAmE6/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      )

      setSubmitStatus("success")
      setFormData({ fullName: "", email: "", phone: "", message: "" })
      e.currentTarget.reset()
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    /* Add scroll animation observer to section */
    <section ref={ref} id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to start your financial journey? Contact us today for a personalized consultation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 stagger">
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70">contact@winningasoneteam.com</p>
          </div>

          <div className="bg-accent/5 rounded-lg p-6 border border-accent/20 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-foreground/70">+6012-4142168</p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 border border-secondary/40 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-secondary-foreground mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-foreground/70">138-05-06, Anson Cube, Jalan Anson, 10400 George Town, Penang Malaysia</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-border max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-accent transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send size={20} />}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-600 text-center font-semibold">Thank you! We will be in touch soon.</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 text-center font-semibold">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}