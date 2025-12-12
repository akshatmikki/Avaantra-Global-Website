"use client"

import { Zap, Shield, Users, Target, Rocket, Eye, Lock, TrendingUp } from "lucide-react"

export default function WhyAvaantra() {
  const reasons = [
    {
      icon: Zap,
      title: "Hybrid Powerhouse",
      description: "Engineering + AI + Marketing + Leadership = Zero coordination issues.",
    },
    {
      icon: Target,
      title: "Predictable Outcomes Framework™",
      description: "Clear KPIs, velocity tracking, and measurable ROI on every project.",
    },
    {
      icon: Users,
      title: "Senior Talent Only",
      description: "Our specialists have 10–20+ years of experience across deep tech & growth.",
    },
    {
      icon: Rocket,
      title: "High-Performance Pods",
      description: "Pre-structured teams including PM, Tech Lead, QA, Designer, AI, and Growth.",
    },
    {
      icon: TrendingUp,
      title: "Faster Time-to-Market",
      description: "Ship products 40–60% faster with sprint-led execution and automation.",
    },
    {
      icon: Eye,
      title: "Transparent Pricing",
      description: "No surprises — cost visibility and ROI calculators from day one.",
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Security",
      description: "SOC, GDPR, HIPAA-aligned workflows + NDA + full IP transfer.",
    },
    {
      icon: Shield,
      title: "Long-Term Partnership",
      description: "We think like an extension of your team — not a vendor.",
    },
  ]

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/why-trust-avaantra-team-collaboration.jpg"
            alt="Why companies trust Avaantra Global"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent flex items-center">
            <div className="px-8 md:px-16 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-light mb-4">Why Companies Trust Avaantra Global</h2>
              <p className="text-lg text-light/90">Built for speed, quality, and predictable outcomes</p>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-light hover:border-primary hover:shadow-lg transition-all"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-dark mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
