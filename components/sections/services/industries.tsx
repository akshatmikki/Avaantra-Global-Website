import { Cloud, DollarSign, Heart, ShoppingCart, GraduationCap, Home, Briefcase } from "lucide-react"

export function Industries() {
  const industries = [
    {
      icon: Cloud,
      title: "SaaS & Technology",
      description: "Helping SaaS brands launch faster and scale without stress.",
      support: [
        "MVP to full product development",
        "AI feature integration",
        "Clean, scalable architecture",
        "Predictable lead and revenue generation",
      ],
    },
    {
      icon: DollarSign,
      title: "FinTech",
      description: "Secure and compliant tech for modern financial platforms.",
      support: [
        "Digital banking and payment apps",
        "Risk and fraud detection with AI",
        "KYC automation",
        "Safe cloud & data systems",
      ],
    },
    {
      icon: Heart,
      title: "HealthTech",
      description: "Powering healthcare platforms with safe, stable, smart systems.",
      support: [
        "HIPAA-ready setups",
        "AI-based reporting & workflows",
        "Patient and doctor-facing apps",
        "Smooth, simple user journeys",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Driving sales with strong digital systems and smart automation.",
      support: [
        "AI ads and personalization",
        "High-conversion storefronts",
        "Mobile apps and inventory systems",
        "CRM and logistics integrations",
      ],
    },
    {
      icon: GraduationCap,
      title: "EdTech",
      description: "Building modern learning platforms that are easy for students and teachers.",
      support: [
        "Online learning systems",
        "AI-driven assessments",
        "Scalable video, test, and classroom tools",
        "Clear and simple UX",
      ],
    },
    {
      icon: Home,
      title: "PropTech",
      description: "Smart, scalable solutions for real estate platforms.",
      support: [
        "Property search & listing systems",
        "Tenant, owner & agent portals",
        "Map, location & pricing tools",
        "Cloud-ready PropTech infrastructure",
      ],
    },
    {
      icon: Briefcase,
      title: "Digital Agencies",
      description: "Helping agencies scale delivery without hiring overhead.",
      support: [
        "White-label development",
        "White-label AI and marketing",
        "Full POD teams during peak load",
        "Predictable quality and on-time work",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600">
            We work with fast-growing companies across key industries. Our teams understand your challenges and help you
            build, automate, and scale with predictable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => {
            const IconComponent = industry.icon
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                <p className="text-sm font-semibold text-gray-700 mb-2">We support:</p>
                <ul className="space-y-1">
                  {industry.support.map((item, sidx) => (
                    <li key={sidx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
