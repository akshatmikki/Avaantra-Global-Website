const processSteps = [
  {
    step: "1",
    title: "Strategy Definition",
    process: "Audit + goal mapping",
    outcome: "Custom roadmap",
  },
  {
    step: "2",
    title: "Team Selection",
    process: "Get 3–5 expert profiles",
    outcome: "Perfect skill fit",
  },
  {
    step: "3",
    title: "Onboarding",
    process: "Connect to your systems",
    outcome: "Start within 7–15 days",
  },
  {
    step: "4",
    title: "Execution & Optimization",
    process: "Sprint-based campaigns",
    outcome: "Measurable progress",
  },
  {
    step: "5",
    title: "Reporting & Scale",
    process: "Weekly dashboards",
    outcome: "Transparent ROI tracking",
  },
]

export default function Process() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Process</h2>
          <p className="text-lg text-gray-600">From strategy to execution in 5 transparent steps</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-6 top-6 bottom-6 w-0.5 bg-primary/20" />

            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl flex-shrink-0 shadow-sm">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                    </div>
                    <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-semibold text-gray-500 mb-1 uppercase">Process</p>
                      <p className="text-gray-700 font-medium">{item.process}</p>
                    </div>
                    <div className="md:w-1/3 bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <p className="text-xs font-semibold text-gray-500 mb-1 uppercase">Outcome</p>
                      <p className="text-primary font-semibold">{item.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
