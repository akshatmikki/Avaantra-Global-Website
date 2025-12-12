"use client"

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      duration: "1–3 Days",
      description: "Understand objectives, KPIs & challenges",
      details: ["Goal alignment", "Technical audit", "Team assessment"],
    },
    {
      number: "02",
      title: "Blueprint",
      duration: "3–7 Days",
      description: "Architecture, roadmap & success plan",
      details: ["Technical design", "Project roadmap", "Resource planning"],
    },
    {
      number: "03",
      title: "Team Onboarding",
      duration: "7–15 Days",
      description: "Pods ready with tools & sprint planning",
      details: ["Team assembly", "Tool setup", "Sprint kickoff"],
    },
    {
      number: "04",
      title: "Execution",
      duration: "Ongoing",
      description: "Weekly sprints, demos & quality checks",
      details: ["Sprint delivery", "Weekly demos", "Continuous QA"],
    },
    {
      number: "05",
      title: "Scale",
      duration: "Continuous",
      description: "Continuous improvement & long-term growth",
      details: ["Performance tracking", "Optimization", "Growth planning"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-light to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-dark text-balance">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From discovery to scale, we follow a proven predictable process designed for speed and quality
          </p>
        </div>

        {/* Desktop Flow Diagram */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Flow Line Background */}
            <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 transform -translate-y-1/2" />

            {/* Steps Container */}
            <div className="flex justify-between items-start gap-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center relative z-10">
                  {/* Circle Number */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-light flex items-center justify-center font-bold text-lg mb-6 shadow-lg border-4 border-light">
                    {step.number}
                  </div>

                  {/* Arrow to next step */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-8 left-full w-full flex items-center justify-center pointer-events-none">
                      <svg
                        className="w-12 h-12 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="w-full bg-light border-2 border-gray-200 hover:border-primary rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl">
                    <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                    <p className="text-sm font-semibold text-primary mb-3">{step.duration}</p>
                    <p className="text-sm text-gray-600 mb-4">{step.description}</p>

                    {/* Details List */}
                    <div className="space-y-2 border-t pt-4">
                      {step.details.map((detail, didx) => (
                        <div key={didx} className="flex items-center justify-center gap-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow Diagram */}
        <div className="md:hidden space-y-4">
          {steps.map((step, idx) => (
            <div key={idx}>
              <div className="flex gap-4">
                {/* Circle Number */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 text-light flex items-center justify-center font-bold text-lg shadow-lg border-4 border-light flex-shrink-0">
                    {step.number}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent mt-2" />
                  )}
                </div>

                {/* Card Content */}
                <div className="bg-light border-2 border-gray-200 hover:border-primary rounded-xl p-5 flex-1 transition-all duration-300">
                  <h3 className="text-lg font-bold text-dark mb-1">{step.title}</h3>
                  <p className="text-sm font-semibold text-primary mb-2">{step.duration}</p>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>

                  {/* Details List */}
                  <div className="space-y-1 border-t pt-3">
                    {step.details.map((detail, didx) => (
                      <div key={didx} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Ready to transform your product delivery?</p>
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-light rounded-lg font-semibold transition-all hover:shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  )
}
