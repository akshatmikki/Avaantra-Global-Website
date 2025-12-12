import StartupHero from "@/components/sections/for-startups/startup-hero"
import StartupProblems from "@/components/sections/for-startups/startup-problems"
import StartupPromise from "@/components/sections/for-startups/startup-promise"
import StartupSolutions from "@/components/sections/for-startups/startup-solutions"
import StartupProcess from "@/components/sections/for-startups/startup-process"
import StartupTestimonials from "@/components/sections/for-startups/startup-testimonials"
import StartupFAQ from "@/components/sections/for-startups/startup-faq"
import StartupCTA from "@/components/sections/for-startups/startup-cta"

export const metadata = {
  title: "For Startups | Turn Your Idea Into a Scalable, Fundable Business",
  description:
    "Avaantra Global helps startups validate ideas, build MVPs fast, attract investors, and scale using product, tech, and marketing acceleration — all under one roof.",
}

export default function ForStartupsPage() {
  return (
    <main className="min-h-screen bg-light">
      <StartupHero />
      <StartupProblems />
      <StartupPromise />
      <StartupSolutions />
      <StartupProcess />
      <StartupTestimonials />
      <StartupFAQ />
      <StartupCTA />
    </main>
  )
}
