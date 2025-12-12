export function ProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Discovery Call",
      process: "Understand your product & challenges",
      outcome: "Strategic roadmap definition",
    },
    {
      step: "2",
      title: "CTO Alignment",
      process: "Get 2–3 profile options",
      outcome: "Choose who fits your vision",
    },
    {
      step: "3",
      title: "Onboarding & Kickoff",
      process: "Integrate CTO with your dev & business teams",
      outcome: "Fast ramp-up",
    },
    {
      step: "4",
      title: "Implementation",
      process: "Weekly sprints & reports",
      outcome: "Visible progress",
    },
    {
      step: "5",
      title: "Optimization",
      process: "Roadmap reviews & budget analysis",
      outcome: "Continuous improvement",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Our Process: How Virtual CTO Engagement Works
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
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
      </div>
    </section>
  )
}
