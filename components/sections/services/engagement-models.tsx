import { Users, UserPlus, FileCheck, Layers, Tag } from "lucide-react"

export function EngagementModels() {
  const models = [
    {
      icon: Users,
      title: "Dedicated Teams",
      description: "Full-time, long-term teams working like your own staff.",
      features: ["Fully integrated", "Long-term commitment", "Culture fit", "Scalable on demand"],
    },
    {
      icon: UserPlus,
      title: "Staff Augmentation",
      description: "Add specialists for skill gaps or extra bandwidth.",
      features: ["Flexible duration", "Specific expertise", "Quick onboarding", "No hiring overhead"],
    },
    {
      icon: FileCheck,
      title: "Project-Based Delivery",
      description: "Fixed scope. Fixed timeline. Clear outcomes.",
      features: ["Defined deliverables", "Predictable budget", "Milestone-based", "End-to-end execution"],
    },
    {
      icon: Layers,
      title: "Hybrid PODs",
      description: "Engineers + AI experts + designers + marketers in one team.",
      features: ["Cross-functional", "Collaborative workflow", "All-in-one solution", "Faster delivery"],
    },
    {
      icon: Tag,
      title: "White-Label Delivery",
      description: "We deliver under your brand for agency scalability.",
      features: ["Your branding", "Agency partnership", "Confidential delivery", "Quality assured"],
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Flexible Collaboration Built for Every Business
          </h2>
          <p className="text-lg text-gray-600">
            Choose the engagement model that fits your project needs, timeline, and team structure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((model, idx) => {
            const IconComponent = model.icon
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary/50 transition-all group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <IconComponent size={26} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{model.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, fidx) => (
                    <li key={fidx} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      {feature}
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
