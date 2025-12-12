import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CaseStudies() {
  const cases = [
    {
      industry: "FinTech SaaS",
      result: "8 senior developers onboarded → 60% faster release cycles.",
      metric: "60%",
      metricLabel: "Faster Releases",
    },
    {
      industry: "Retail Brand",
      result: "AI-driven optimization → 2.8X ROAS in 90 days.",
      metric: "2.8X",
      metricLabel: "ROAS Increase",
    },
    {
      industry: "HealthTech Platform",
      result: "Workflow automation → 70% time saved.",
      metric: "70%",
      metricLabel: "Time Saved",
    },
    {
      industry: "B2B SaaS",
      result: "CRO-led redesign → 42% conversion lift.",
      metric: "42%",
      metricLabel: "Conversion Lift",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative mb-16 rounded-3xl overflow-hidden h-80">
          <img
            src="/business-success-metrics-data-visualization-dashboa.jpg"
            alt="Success metrics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real Results, Real Impact</h2>
            <p className="text-lg text-white/90 max-w-2xl">
              See how we've helped companies like yours achieve measurable success.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="text-sm font-semibold text-gray-500 mb-4">{item.metricLabel}</div>
              <div className="text-sm font-bold text-dark mb-2">{item.industry}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.result}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 group bg-transparent"
          >
            See All Case Studies
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
