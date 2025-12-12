import { CheckCircle } from "lucide-react"

export default function StartupProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Roadmap",
      description: "We clarify your vision, user goals, and market potential.",
    },
    {
      number: "02",
      title: "Prototype & MVP Build",
      description: "Our agile pods design, develop, and test your MVP.",
    },
    {
      number: "03",
      title: "Market Validation",
      description: "We launch a beta version to gather real-world feedback.",
    },
    {
      number: "04",
      title: "GTM Launch & Growth Setup",
      description: "Our growth team activates campaigns and automations.",
    },
    {
      number: "05",
      title: "Funding & Scalability",
      description: "We prepare your investor materials and tech due diligence reports.",
    },
    {
      number: "06",
      title: "Scale & Optimize",
      description: "We refine user acquisition, retention, and revenue systems.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-dark text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Startup Acceleration Process</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            We guide you through every phase — from concept to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-primary/10 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Outcome</h3>
          </div>
          <p className="text-xl text-gray-200">
            A market-ready, scalable startup — built on solid systems, not chance.
          </p>
        </div>
      </div>
    </section>
  )
}
