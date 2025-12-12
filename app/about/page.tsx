import AboutHero from "@/components/sections/about/hero"
import OurStory from "@/components/sections/about/our-story"
import MissionVision from "@/components/sections/about/mission-vision"
import WhatWeDo from "@/components/sections/about/what-we-do"
import CoreStrengths from "@/components/sections/about/core-strengths"
import Values from "@/components/sections/about/values"
import Leadership from "@/components/sections/about/leadership"
import Impact from "@/components/sections/about/impact"
import FinalCTA from "@/components/sections/final-cta"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhatWeDo />
      <CoreStrengths />
      <Values />
      <Leadership />
      <Impact />
      <FinalCTA />
    </main>
  )
}
