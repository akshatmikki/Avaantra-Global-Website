import { Button } from "@/components/ui/button"
export function DigitalMarketingHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/marketing-team-analyzing-digital-campaign-metrics-.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 via-teal-500/90 to-cyan-500/90" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            📈 Data-Driven Growth Marketing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Turn Clicks into Customers — with{" "}
            <span className="bg-white text-green-600 px-4 py-1 rounded-lg inline-block">
              Predictable Digital Growth
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            We help you attract, convert, and scale your online presence through intelligent, ROI-focused marketing
            strategies tailored for SaaS, startups, and digital agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
              Request Free Growth Audit
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold bg-transparent"
            >
              Talk to a Marketing Strategist
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "+45%", label: "Avg Lead Increase" },
              { value: "-30%", label: "Lower CAC" },
              { value: "2.4x", label: "Higher ROAS" },
              { value: "22+", label: "Years Experience" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/15 backdrop-blur-md rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
