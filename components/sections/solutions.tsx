"use client"
import { ArrowRight, Zap, Rocket, Bot, Users, Tag, Crown } from "lucide-react"

export default function Solutions() {
  const solutions = [
    {
      icon: Zap,
      title: "Accelerate Product Delivery",
      description: "Build and ship faster with dedicated engineering pods and sprint-led execution.",
      benefits: [
        "Senior engineers, PM, QA & UX as one pod",
        "40–60% faster product releases",
        "Clear sprint roadmap & weekly demos",
        "Scalable architecture and clean code delivery",
      ],
      link: "#",
    },
    {
      icon: Rocket,
      title: "Launch & Grow SaaS GTM",
      description: "Align product, marketing, conversions, and automation for predictable revenue.",
      benefits: [
        "SaaS positioning & messaging",
        "Growth experiments tied to ROI",
        "Funnel optimization + CRO",
        "Marketing automation & lifecycle journeys",
      ],
      link: "#",
    },
    {
      icon: Bot,
      title: "AI & Automation Sprints",
      description: "Deliver measurable ROI in 2–6 weeks with targeted AI use cases.",
      benefits: [
        "Workflow automation",
        "Predictive analytics",
        "AI agents for ops, support, and sales",
        "30–60% cost reduction opportunities",
      ],
      link: "#",
    },
    {
      icon: Users,
      title: "Dedicated Teams & Staff Augmentation",
      description: "Onboard senior talent without hiring delays or overhead.",
      benefits: [
        "Full-time or pod-based teams",
        "PM + QA + Tech Leads included",
        "Fast ramp-up & zero training burden",
        "Flexible scale-up/scale-down options",
      ],
      link: "#",
    },
    {
      icon: Tag,
      title: "White-Label Services for Agencies",
      description: "Execute under your brand with our engineering, design & marketing teams.",
      benefits: [
        "Multi-skill pods for delivery",
        "Consistent quality across projects",
        "No hiring or management overhead",
        "Scale capacity instantly",
      ],
      link: "#",
    },
    {
      icon: Crown,
      title: "Virtual CTO / CMO / CXO Leadership",
      description: "Strategic leadership without full-time cost.",
      benefits: [
        "Roadmaps & architecture",
        "Product & growth strategy",
        "Leadership for engineering + marketing",
        "Better decision-making with predictable outcomes",
      ],
      link: "#",
    },
  ]

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-dark text-balance">
            Solutions Engineered for Speed, Scale & Predictable Results
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon
            return (
              <div
                key={idx}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl hover:bg-light transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-dark mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>

                <ul className="space-y-2 mb-8">
                  {solution.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-primary hover:text-primary-dark font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
