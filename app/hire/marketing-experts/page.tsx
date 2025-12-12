import MarketingHero from "@/components/sections/hire/marketing/hero"
import WhyChoose from "@/components/sections/hire/marketing/why-choose"
import Expertise from "@/components/sections/hire/marketing/expertise"
import Process from "@/components/sections/hire/marketing/process"
import EngagementModels from "@/components/sections/hire/marketing/engagement-models"
import Industries from "@/components/sections/hire/marketing/industries"
import Testimonials from "@/components/sections/hire/marketing/testimonials"
import CaseStudy from "@/components/sections/hire/marketing/case-study"
import FAQ from "@/components/sections/hire/marketing/faq"
import FinalCTA from "@/components/sections/hire/marketing/final-cta"

export const metadata = {
  title: "Hire Digital Marketing Experts | SEO, PPC, Automation & Growth | Avaantra Global",
  description:
    "Hire dedicated digital marketing experts to drive traffic, leads, and predictable growth. Avaantra Global offers SEO, PPC, content, and automation professionals ready to scale your marketing ROI.",
}

export default function MarketingExpertsPage() {
  return (
    <main>
      <MarketingHero />
      <WhyChoose />
      <Expertise />
      <Process />
      <EngagementModels />
      <Industries />
      <CaseStudy />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
