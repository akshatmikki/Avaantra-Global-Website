import { Zap, Clock, Users, BarChart3, Target, Shield, DollarSign } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: BarChart3,
      title: "Predictable delivery with weekly visibility",
      description: "Track progress in real-time with transparent reporting",
    },
    {
      icon: Zap,
      title: "Faster time-to-market",
      description: "Launch products and features ahead of schedule",
    },
    {
      icon: DollarSign,
      title: "Cost-efficient scaling",
      description: "Grow without breaking the bank or sacrificing quality",
    },
    {
      icon: Users,
      title: "Skilled multi-stack teams on day one",
      description: "Pre-vetted experts ready to contribute immediately",
    },
    {
      icon: Target,
      title: "Measurable KPIs across every service",
      description: "Clear metrics that track success and ROI",
    },
    {
      icon: Shield,
      title: "No vendor chaos, one partner for tech, AI, and marketing",
      description: "Single point of contact for all your needs",
    },
    {
      icon: Clock,
      title: "Transparent pricing and reporting",
      description: "No hidden costs, complete visibility",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Companies Choose Avaantra</h2>
          <p className="text-lg text-gray-600">
            Work with a partner that delivers predictable outcomes, transparent processes, and measurable results every
            time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
