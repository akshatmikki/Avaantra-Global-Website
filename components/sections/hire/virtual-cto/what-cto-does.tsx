import { Cpu, Network, Users, Shield, GraduationCap } from "lucide-react"

export function WhatCTODoes() {
  const responsibilities = [
    {
      icon: Cpu,
      title: "Technical Strategy & Roadmap",
      description: "Align your product roadmap with the right technology stack and scalability plan.",
      outcome: "Clear vision for short-term and long-term tech growth.",
    },
    {
      icon: Network,
      title: "Architecture & System Design",
      description: "Design modular, scalable, and secure infrastructure for SaaS and cloud applications.",
      outcome: "No more legacy tech debt — scalable systems from day one.",
    },
    {
      icon: Users,
      title: "Vendor & Team Management",
      description: "Oversee developers, vendors, and agencies to ensure quality and accountability.",
      outcome: "Predictable releases and budget control.",
    },
    {
      icon: Shield,
      title: "Security, DevOps & Compliance",
      description: "Implement best practices for uptime, resilience, and compliance (SOC2, GDPR).",
      outcome: "Peace of mind with secure, compliant systems.",
    },
    {
      icon: GraduationCap,
      title: "Technology Hiring & Mentorship",
      description: "Interview and train developers, DevOps engineers, and tech managers.",
      outcome: "A self-sufficient engineering team that scales smoothly.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative mb-16 rounded-3xl overflow-hidden">
          <img src="/executive-technology-leader-reviewing-digital-arch.jpg" alt="Virtual CTO Leadership" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-3xl px-8 md:px-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">What a Virtual CTO from Avaantra Does</h2>
              <p className="text-xl text-white/90 mb-6">
                We help startups, agencies, and enterprises hire experienced CTOs on-demand, providing leadership in
                architecture, team management, and innovation.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                  ✓ Strategic technology direction
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                  ✓ Vendor & delivery oversight
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                  ✓ Tech stack modernization
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                  ✓ Security strategy
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {responsibilities.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-primary">Outcome: {item.outcome}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
