import { HeroSection } from "@/components/sections/services/hero"
import { ServiceOverview } from "@/components/sections/services/service-overview"
import { Benefits } from "@/components/sections/services/benefits"
import { WhyAvaantra } from "@/components/sections/services/why-avaantra"
import { ProcessSection } from "@/components/sections/services/process"
import { EngagementModels } from "@/components/sections/services/engagement-models"
import { CaseStudies } from "@/components/sections/services/case-studies"
import { Testimonials } from "@/components/sections/services/testimonials"
import { Industries } from "@/components/sections/services/industries"
import { Security } from "@/components/sections/services/security"
import { FAQ } from "@/components/sections/services/faq"
import { FinalCTA } from "@/components/sections/services/final-cta"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata = {
  title: "Services - Avaantra Global | Technology, Talent, Growth Delivered Predictably",
  description:
    "End-to-end services for startups, SaaS & agencies. Custom software development, AI automation, digital marketing, dedicated teams, and more.",
}

export default function ServicesPage() {
  return (
    <>
      <ScrollToTop />
      <main>
        <HeroSection />
        <ServiceOverview />
        <Benefits />
        <WhyAvaantra />
        <ProcessSection />
        <EngagementModels />
        <CaseStudies />
        <Testimonials />
        <Industries />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}
