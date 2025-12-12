export default function Philosophy() {
  const principles = [
    {
      number: "1",
      title: "Clarity",
      description: "No jargon. No confusion. Every goal, role, and KPI is defined upfront.",
    },
    {
      number: "2",
      title: "Speed",
      description: "We believe progress loves momentum. That's why most of our teams go live within 15 days.",
    },
    {
      number: "3",
      title: "Accountability",
      description:
        "Every project is managed by a dedicated PM or Tech Lead. You get sprint reports, dashboards, and transparency.",
    },
    {
      number: "4",
      title: "Scalability",
      description: "Start with one. Scale to ten. Adjust anytime.",
    },
    {
      number: "5",
      title: "Security",
      description:
        "NDA-backed contracts, IP protection, and GDPR/SOC2 compliance — your data, your code, your control.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-dark to-gray-800 text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Philosophy: Predictability Over Promises</h2>
          <p className="text-lg text-light/80 max-w-3xl mx-auto mb-4">We don't believe in "digital magic."</p>
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            We believe in predictable outcomes — the kind that come from clarity, accountability, and process.
          </p>
        </div>

        <p className="text-center text-lg mb-12 text-light/90">
          At Avaantra Global, every engagement — from hiring a single developer to scaling a 20-person delivery pod —
          runs on five principles:
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          {principles.map((principle, idx) => (
            <div
              key={idx}
              className="bg-light/10 backdrop-blur p-6 rounded-xl text-center hover:bg-light/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-dark mx-auto mb-4">
                {principle.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-sm text-light/80 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
