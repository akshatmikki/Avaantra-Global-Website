export function ProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Requirement Analysis",
      process: "Share project goals & scope",
      outcome: "Team design & proposal",
    },
    {
      step: "2",
      title: "Team Assembly",
      process: "Get vetted profiles for each role",
      outcome: "You approve before onboarding",
    },
    { step: "3", title: "Onboarding", process: "Integrate team into your systems", outcome: "Instant productivity" },
    { step: "4", title: "Delivery & Sprints", process: "Managed agile execution", outcome: "Transparent reporting" },
    {
      step: "5",
      title: "Scale or Adjust",
      process: "Add/remove team members anytime",
      outcome: "Flexibility & cost control",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Our Process: How It Works</h2>
        </div>
        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-dark rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1 grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">STEP</div>
                    <div className="font-bold text-lg">{item.title}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">PROCESS</div>
                    <div className="text-gray-700">{item.process}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">OUTCOME</div>
                    <div className="text-primary font-semibold">{item.outcome}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
