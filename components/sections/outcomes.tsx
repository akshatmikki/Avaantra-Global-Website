"use client"

export default function Outcomes() {
  const outcomes = [
    {
      industry: "SaaS",
      metric: "60% faster",
      description: "time-to-market",
    },
    {
      industry: "FinTech",
      metric: "+2.8x ROAS",
      description: "through AI-driven optimization",
    },
    {
      industry: "HealthTech",
      metric: "70% reduction",
      description: "in manual operations",
    },
    {
      industry: "E-commerce",
      metric: "42% increase",
      description: "in conversion rate",
    },
    {
      industry: "Agencies",
      metric: "3x capacity",
      description: "through white-label pods",
    },
  ]

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/business-success-growth-metrics.jpg"
            alt="Predictable success outcomes"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent flex items-center">
            <div className="px-8 md:px-16 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold text-light mb-4 text-balance">
                What Predictable Success Looks Like
              </h2>
              <p className="text-lg text-light/90">Real results across industries</p>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center hover:shadow-lg transition-all"
            >
              <p className="text-sm font-semibold text-primary mb-3">{outcome.industry}</p>
              <p className="text-3xl font-bold text-dark mb-2">{outcome.metric}</p>
              <p className="text-sm text-gray-600">{outcome.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-primary hover:text-primary-dark font-semibold flex items-center justify-center gap-2 mx-auto">
            View Case Studies →
          </button>
        </div>
      </div>
    </section>
  )
}
