import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-dark via-gray-900 to-dark text-light pt-32 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Dedicated Development Teams</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Hire Dedicated Teams — Scale Faster Without Hiring Headaches
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 text-balance max-w-4xl mx-auto leading-relaxed">
              You don't need to grow your payroll — you need predictable delivery. Get dedicated, cross-functional teams
              of developers, designers, and marketers who work exclusively for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-dark rounded-full font-semibold px-8">
                Hire a Dedicated Team in 15 Days
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light/20 text-light hover:bg-light/10 rounded-full bg-transparent font-semibold"
              >
                See How Our Teams Deliver
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-gray-400">Dedicated Resources</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15-20</div>
              <div className="text-sm text-gray-400">Days to Onboard</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">40-60%</div>
              <div className="text-sm text-gray-400">Lower Cost</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2-3X</div>
              <div className="text-sm text-gray-400">Faster Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
