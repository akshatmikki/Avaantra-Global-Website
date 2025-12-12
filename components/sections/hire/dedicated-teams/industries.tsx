import { Building2, CreditCard, Heart, ShoppingBag } from "lucide-react"

export function IndustriesServed() {
  const industries = [
    {
      icon: Building2,
      name: "SaaS & B2B Platforms",
      description: "Dedicated product pods that accelerate release cycles and innovation.",
    },
    {
      icon: CreditCard,
      name: "FinTech & Banking",
      description: "Secure, compliant engineering teams with domain expertise.",
    },
    { icon: Heart, name: "HealthTech", description: "HIPAA-ready delivery pods with compliance oversight." },
    { icon: ShoppingBag, name: "E-commerce", description: "Design, develop, and scale your online store faster." },
  ]

  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Industries We Serve</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                <h3 className="text-lg font-bold mb-3">{industry.name}</h3>
                <p className="text-gray-700 text-sm">{industry.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
