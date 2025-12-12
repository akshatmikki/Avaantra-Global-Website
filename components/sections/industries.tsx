"use client"

import { Building2, DollarSign, Heart, ShoppingBag, BookOpen, Zap, Building, Briefcase } from "lucide-react"

export default function Industries() {
  const industries = [
    {
      icon: Building,
      title: "SaaS & B2B Tech",
      description: "Scalable platforms, GTM, automation & product-led growth.",
      image: "/saas-platform-dashboard.jpg",
    },
    {
      icon: DollarSign,
      title: "FinTech & Payments",
      description: "Compliance-ready platforms, onboarding, verification & payment flows.",
      image: "/fintech-payment-security.jpg",
    },
    {
      icon: Heart,
      title: "HealthTech",
      description: "HIPAA-ready systems, secure patient data, AI diagnostics & automation.",
      image: "/healthcare-technology-interface.jpg",
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Omnichannel experiences, personalization engines, CRO & analytics.",
      image: "/ecommerce-shopping-experience.jpg",
    },
    {
      icon: BookOpen,
      title: "EdTech & Learning Platforms",
      description: "Engagement systems, LMS, content delivery & adaptive learning.",
      image: "/online-education-platform.jpg",
    },
    {
      icon: Zap,
      title: "Manufacturing & Industry 4.0",
      description: "IoT, automation, predictive maintenance & cloud modernization.",
      image: "/smart-manufacturing-iot.jpg",
    },
    {
      icon: Building2,
      title: "PropTech",
      description: "Marketplaces, dashboards & workflow automation for real estate tech.",
      image: "/real-estate-technology.jpg",
    },
    {
      icon: Briefcase,
      title: "Digital Agencies",
      description: "White-label engineering, design, marketing & automation.",
      image: "/digital-agency-workspace.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-dark text-balance">
            Industry Expertise That Drives Real Impact
          </h2>
          <p className="text-lg text-gray-600">Proven track record across diverse verticals</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => {
            const Icon = industry.icon
            return (
              <div
                key={idx}
                className="bg-light border border-gray-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={industry.image || "/placeholder.svg?height=128&width=400"}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <Icon className="absolute bottom-3 left-3 w-8 h-8 text-light" />
                </div>
                {/* </CHANGE> */}

                <div className="p-6">
                  <h3 className="font-bold text-dark mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
