import Hero from "@/components/sections/hero"
import Problems from "@/components/sections/problems"
import Solutions from "@/components/sections/solutions"
import Services from "@/components/sections/services"
import WhyAvaantra from "@/components/sections/why-avaantra"
import Process from "@/components/sections/process"
import Outcomes from "@/components/sections/outcomes"
import Industries from "@/components/sections/industries"
import TechStack from "@/components/sections/tech-stack"
import Security from "@/components/sections/security"
import Testimonials from "@/components/sections/testimonials"
import FAQ from "@/components/sections/faq"
import FinalCTA from "@/components/sections/final-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Hero />
      <Problems />
      <Solutions />
      <Services />
      <WhyAvaantra />
      <Process />
      <Outcomes />
      <Industries />
      <TechStack />
      <Security />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
