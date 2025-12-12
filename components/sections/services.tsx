"use client"

import { Code, Cpu, BarChart3, Briefcase, Shield } from "lucide-react"

export default function Services() {
  const serviceCategories = [
    {
      title: "Engineering & Product Development",
      icon: Code,
      items: [
        "Custom software development",
        "SaaS & platform development",
        "Web & mobile applications",
        "API & microservices",
        "DevOps, CI/CD, cloud engineering",
      ],
    },
    {
      title: "Product Engineering",
      icon: Cpu,
      items: [
        "Product roadmap & discovery",
        "MVP development",
        "UX/UI design",
        "Architecture modernization",
        "CTO-as-a-Service",
      ],
    },
    {
      title: "AI & Data Solutions",
      icon: BarChart3,
      items: [
        "AI strategy",
        "ML models & predictive analytics",
        "NLP & chatbots",
        "Computer vision",
        "Process automation",
      ],
    },
    {
      title: "Marketing & Growth Execution",
      icon: Briefcase,
      items: [
        "Performance marketing (PPC, Paid Social)",
        "SEO & organic growth",
        "CRO & landing page optimization",
        "Marketing automation",
        "Demand generation for SaaS",
      ],
    },
    {
      title: "Teams & Talent on Demand",
      icon: Shield,
      items: [
        "Developers (Frontend, Backend, Full-Stack)",
        "QA Engineers & Testers",
        "Designers (UI/UX)",
        "DevOps & Cloud Engineers",
        "Product, Project & Growth Managers",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-dark text-balance">
            Full-Stack Capabilities to Build, Scale & Grow
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From engineering and product to AI and growth, we have every capability you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="bg-light rounded-2xl p-8 border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-dark mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                      <span className="text-gray-700">{item}</span>
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
