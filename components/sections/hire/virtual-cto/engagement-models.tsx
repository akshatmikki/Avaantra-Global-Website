export function EngagementModels() {
  const models = [
    {
      name: "Fractional CTO (Part-Time)",
      idealFor: "Startups & early-stage",
      howItWorks: "Weekly strategy + oversight",
      outcome: "Full leadership, minimal cost",
    },
    {
      name: "Project-Based CTO",
      idealFor: "MVP or transformation projects",
      howItWorks: "Fixed-scope delivery",
      outcome: "Short-term impact, long-term results",
    },
    {
      name: "Interim CTO",
      idealFor: "Leadership transitions",
      howItWorks: "Temporary full ownership",
      outcome: "Continuity & risk mitigation",
    },
    {
      name: "CTO-as-a-Service",
      idealFor: "Ongoing growth",
      howItWorks: "Scalable leadership support",
      outcome: "Predictable long-term direction",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Engagement Models</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the model that fits your growth stage and leadership needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-bold mb-4">{model.name}</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-gray-500">Ideal For: </span>
                  <span className="text-gray-800">{model.idealFor}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500">How It Works: </span>
                  <span className="text-gray-800">{model.howItWorks}</span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-sm font-semibold text-primary">Outcome: </span>
                  <span className="text-dark font-semibold">{model.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
