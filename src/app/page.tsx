import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import VisionMission from "@/components/vision-mission"
import Culture from "@/components/culture"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <Culture />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
