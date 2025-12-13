// import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hire/virtual-cto/hero"
import { ProblemSection } from "@/components/sections/hire/virtual-cto/problem"
import { WhatCTODoes } from "@/components/sections/hire/virtual-cto/what-cto-does"
import { ProcessSection } from "@/components/sections/hire/virtual-cto/process"
import { EngagementModels } from "@/components/sections/hire/virtual-cto/engagement-models"
import { IndustriesServed } from "@/components/sections/hire/virtual-cto/industries"
import { CaseStudy } from "@/components/sections/hire/virtual-cto/case-study"
import { Testimonials } from "@/components/sections/hire/virtual-cto/testimonials"
import { FAQ } from "@/components/sections/hire/virtual-cto/faq"
import { FinalCTA } from "@/components/sections/hire/virtual-cto/final-cta"

export const metadata = {
  title: "Hire Virtual CTO | Technology Leadership & Strategy | Avaantra Global",
  description:
    "Hire a Virtual CTO to lead your technology strategy, development, and scaling. Avaantra Global provides on-demand CTOs for startups and growing businesses.",
}

export default function VirtualCTOPage() {
  return (
    <>
      {/* <Navigation /> */}
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatCTODoes />
        <ProcessSection />
        <EngagementModels />
        <IndustriesServed />
        <Testimonials />
        <CaseStudy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
