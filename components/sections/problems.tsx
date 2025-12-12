"use client"

export default function Problems() {
  const problems = [
    {
      title: "Delayed Launches:",
      description: "Tech hiring gaps slow your time-to-market",
      icon: (
        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm2 2v14h14V4H5zm3 3h8v1H8V7zm0 3h8v1H8v-1zm0 3h5v1H8v-1z" />
        </svg>
      ),
    },
    {
      title: "Low Conversions:",
      description: "Campaigns attract clicks, not customers",
      icon: (
        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      ),
    },
    {
      title: "Marketing Spend Waste:",
      description: "No visibility into ROI",
      icon: (
        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      title: "Manual Processes:",
      description: "Productivity stuck on repeat tasks",
      icon: (
        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-dark text-balance">Growth Bottlenecks Are Everywhere</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            Every business hits the same roadblocks at some point —{" "}
            <span className="text-primary font-semibold">
              Limited capacity, slow launches, rising ad costs, and unclear ROI.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{problem.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-dark to-dark text-white rounded-2xl p-12 text-center space-y-4">
          <h3 className="text-3xl font-bold">You don't need multiple agencies.</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            <span className="font-semibold">
              You need one integrated partner that delivers measurable outcomes end to end.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
