import { HireHero } from "@/components/sections/hire/hero"
import { WhyAvaantra } from "@/components/sections/hire/why-avaantra"
import { RealProblem } from "@/components/sections/hire/real-problem"
import { OurPromise } from "@/components/sections/hire/our-promise"
import { HireExperts } from "@/components/sections/hire/hire-experts"
import { HiringProcess } from "@/components/sections/hire/hiring-process"
import { EngagementModels } from "@/components/sections/hire/engagement-models"
import { Security } from "@/components/sections/hire/security"
import { HireTestimonials } from "@/components/sections/hire/testimonials"
import { CaseStudy } from "@/components/sections/hire/case-study"
import { HireCTA } from "@/components/sections/hire/final-cta"

export default function HirePage() {
  return (
    <main className="min-h-screen bg-light">
      <HireHero />
      <WhyAvaantra />
      <RealProblem />
      <OurPromise />
      <HireExperts />
      <HiringProcess />
      <EngagementModels />
      <Security />
      <HireTestimonials />
      <CaseStudy />
      <HireCTA />
    </main>
  )
}
