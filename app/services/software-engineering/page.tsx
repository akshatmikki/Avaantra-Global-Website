import { Navigation } from "@/components/navigation"
import SoftwareEngineeringHero from "@/components/sections/services/software-engineering/hero"
import { ServiceOverview } from "@/components/sections/services/software-engineering/service-overview"
import { Footer } from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Benefits from "./Benefits"
import WhyAvaantra from "./WhyAvaantra"
import Process from "./Process"
import EngagementModels from "./EngagementModels"
import CaseStudies from "./CaseStudies"
import Testimonials from "./Testimonials"
import Industries from "./Industries"
import Security from "./Security"
import FAQ from "./FAQ"
import FinalCTA from "./FinalCTA"

export default function SoftwareEngineeringPage() {
  return (
    <>
      <Navigation />
      <SoftwareEngineeringHero />
      <ServiceOverview />
      <Benefits />
      <WhyAvaantra />
      <Process />
      <EngagementModels />
      <CaseStudies />
      <Testimonials />
      <Industries />
      <Security />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </>
  )
}
