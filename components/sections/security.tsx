"use client"

import { Shield, Lock, CheckCircle, Award } from "lucide-react"

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC2 Type II, GDPR & HIPAA-aligned processes with secure code repositories",
      items: ["SOC2 Compliance", "GDPR Aligned", "HIPAA Ready"],
    },
    {
      icon: Lock,
      title: "Intellectual Property Protection",
      description: "100% IP ownership transfer with comprehensive NDA and legal protection",
      items: ["100% IP Ownership", "Full NDA Coverage", "Legal Protection"],
    },
    {
      icon: Award,
      title: "Compliance & Certifications",
      description: "Optional ISO certifications and penetration testing for enhanced security",
      items: ["ISO Certified", "Pen Testing Available", "Regular Audits"],
    },
    {
      icon: CheckCircle,
      title: "Data Protection",
      description: "Secure repositories, encrypted communications, and industry best practices",
      items: ["Encrypted Data", "Secure Repos", "Best Practices"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-dark text-balance">Built-In Security & Compliance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your data and IP are protected with enterprise-grade security standards and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="bg-light border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.items.map((item, iidx) => (
                        <span
                          key={iidx}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
