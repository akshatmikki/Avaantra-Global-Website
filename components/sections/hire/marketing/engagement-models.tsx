import { User, Users, Briefcase, Handshake } from "lucide-react"

const models = [
  {
    icon: User,
    title: "Dedicated Marketer",
    idealFor: "Individual channel ownership",
    outcome: "Focused execution",
  },
  {
    icon: Users,
    title: "Managed Marketing Pod",
    idealFor: "Multi-channel growth",
    outcome: "2–3X faster outcomes",
  },
  {
    icon: Briefcase,
    title: "Project-Based",
    idealFor: "One-time campaigns",
    outcome: "Fast, goal-specific delivery",
  },
  {
    icon: Handshake,
    title: "White-Label Model",
    idealFor: "Agencies & partners",
    outcome: "Co-branded execution",
  },
]

export default function EngagementModels() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Engagement Models</h2>
          <p className="text-lg text-gray-600">Flexible models to fit your business needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {models.map((model, index) => {
            const Icon = model.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{model.title}</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Ideal For</p>
                    <p className="text-gray-700 font-medium text-sm">{model.idealFor}</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                    <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Outcome</p>
                    <p className="text-primary font-semibold text-sm">{model.outcome}</p>
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
