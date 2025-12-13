// import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hire/dedicated-teams/hero"
import { ProblemSection } from "@/components/sections/hire/dedicated-teams/problem"
import { TeamTypes } from "@/components/sections/hire/dedicated-teams/team-types"
import { ProcessSection } from "@/components/sections/hire/dedicated-teams/process"
import { EngagementModels } from "@/components/sections/hire/dedicated-teams/engagement-models"
import { IndustriesServed } from "@/components/sections/hire/dedicated-teams/industries"
import { CaseStudy } from "@/components/sections/hire/dedicated-teams/case-study"
import { Testimonials } from "@/components/sections/hire/dedicated-teams/testimonials"
import { FAQ } from "@/components/sections/hire/dedicated-teams/faq"
import { FinalCTA } from "@/components/sections/hire/dedicated-teams/final-cta"

export const metadata = {
  title: "Hire Dedicated Teams | Scale Delivery Without Hiring Risk | Avaantra Global",
  description:
    "Hire dedicated teams of developers, designers, and marketers to scale projects fast without hiring risk. Avaantra Global offers fully managed, plug-and-play teams.",
}

export default function DedicatedTeamsPage() {
  return (
    <>
      {/* <Navigation /> */}
      <main>
        <HeroSection />
        <ProblemSection />
        <TeamTypes />
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
