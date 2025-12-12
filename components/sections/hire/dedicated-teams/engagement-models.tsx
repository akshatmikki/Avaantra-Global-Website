export function EngagementModels() {
  const models = [
    { name: "Dedicated Pod", bestFor: "Continuous product development", outcome: "Predictable monthly output" },
    { name: "Managed Agile Team", bestFor: "Multi-skill projects", outcome: "2-3X faster delivery" },
    { name: "Project-Based Pod", bestFor: "MVP or one-time delivery", outcome: "Low-risk, fast completion" },
    { name: "White-Label Team", bestFor: "Agencies & partners", outcome: "Deliver under your brand seamlessly" },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Engagement Models</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-bold mb-4">{model.name}</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-gray-500">Best For: </span>
                  <span className="text-gray-800">{model.bestFor}</span>
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
