import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Elegant glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium tracking-wide">Enterprise-Grade Technology Leadership</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
            Hire a <span className="text-primary">Virtual CTO</span>
            <span className="block mt-2 text-gray-400">Without the Full-Time Cost</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Strategic technology leadership that drives growth, manages risk, and scales your infrastructure — at a
            fraction of the cost of a full-time executive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black rounded-full px-10 h-14 text-base font-semibold shadow-2xl shadow-primary/20"
            >
              Schedule Strategy Call
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 rounded-full px-10 h-14 bg-transparent backdrop-blur-sm"
            >
              View Executive Profiles
            </Button>
          </div>

          {/* Executive stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10">
            {[
              { value: "15-20+", label: "Years Leadership Experience" },
              { value: "35-50%", label: "Cost Savings vs Full-Time" },
              { value: "2-3X", label: "Faster Implementation" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
