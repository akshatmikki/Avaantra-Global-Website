import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"

export default function StartupHero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-dark via-dark to-dark-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Rocket className="w-6 h-6 text-primary" />
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">For Startups</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-balance">
          Turn Your Idea Into a Scalable, Fundable Business
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto text-center mb-10 text-pretty">
          You've got a great idea — but transforming it into a real, working product and a fundable business can feel
          overwhelming. Avaantra Global helps founders like you build your MVP fast, validate your concept, attract
          funding, and grow confidently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="group">
            Book a Free Startup Strategy Call
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Explore How We Help Startups
          </Button>
        </div>
      </div>
    </section>
  )
}
