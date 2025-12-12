import { User, Users, Briefcase, Tag } from "lucide-react"

const models = [
  {
    icon: User,
    title: "Dedicated Expert",
    bestFor: "Best for regular, ongoing work",
    description: "One full-time expert that works only for you",
  },
  {
    icon: Users,
    title: "Managed Pod",
    bestFor: "Best for mixed-skill needs",
    description: "Avaantra manages a small team for you",
  },
  {
    icon: Briefcase,
    title: "Project-Based",
    bestFor: "Best for fixed-scope work",
    description: "Clear timeline and clear cost",
  },
  {
    icon: Tag,
    title: "White Label",
    bestFor: "Best for agencies",
    description: "We work under your brand",
  },
]

export function EngagementModels() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance">Engagement Models</h2>
          <p className="text-xl text-gray-600">Choose the model that fits your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors">
                <model.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{model.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{model.bestFor}</p>
              <p className="text-sm text-gray-600">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
