import { Building2, CreditCard, Heart, ShoppingBag, GraduationCap } from "lucide-react"

export function IndustriesServed() {
  const industries = [
    {
      icon: Building2,
      name: "SaaS & B2B Startups",
      description: "Build scalable platforms and reduce time-to-market with the right stack and architecture.",
    },
    {
      icon: CreditCard,
      name: "FinTech & Banking",
      description: "Secure systems design and compliance-driven technology oversight.",
    },
    {
      icon: Heart,
      name: "HealthTech",
      description: "HIPAA and data privacy-driven infrastructure strategy.",
    },
    {
      icon: ShoppingBag,
      name: "E-commerce",
      description: "Stable, high-speed architectures built to scale globally.",
    },
    {
      icon: GraduationCap,
      name: "EdTech",
      description: "Reliable learning platforms with high concurrency and uptime.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Industries We Serve</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                <p className="text-gray-700">{industry.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
