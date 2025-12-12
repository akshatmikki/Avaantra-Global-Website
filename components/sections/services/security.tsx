import { Shield, Lock, FileCheck, Clock, Users } from "lucide-react"

export function Security() {
  const features = [
    {
      icon: FileCheck,
      title: "NDA & IP ownership guaranteed",
    },
    {
      icon: Shield,
      title: "Secure cloud setups",
    },
    {
      icon: Lock,
      title: "Governance dashboard",
    },
    {
      icon: Clock,
      title: "Weekly sprint reports",
    },
    {
      icon: Users,
      title: "Resource replacement guarantee",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Security & Assurance</h2>
          <p className="text-lg text-gray-600">Your data, code, and intellectual property are always protected</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconComponent size={24} className="text-primary" />
                </div>
                <p className="text-sm font-semibold text-gray-700">{feature.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
