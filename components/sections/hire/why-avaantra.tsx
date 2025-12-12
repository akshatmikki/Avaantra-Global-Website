import { Clock, Users, DollarSign, Shield, TrendingUp, FileCheck, BarChart } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Ready-to-start experts in 15 days",
    description: "Skip the long hiring process",
  },
  {
    icon: Users,
    title: "100% dedicated to you",
    description: "Full-time focus on your projects",
  },
  {
    icon: DollarSign,
    title: "Lower cost than hiring full-time",
    description: "Save on recruitment and overhead",
  },
  {
    icon: BarChart,
    title: "Managed by Avaantra with daily updates",
    description: "Complete visibility and accountability",
  },
  {
    icon: TrendingUp,
    title: "Easy to scale up or down",
    description: "Flexibility based on your needs",
  },
  {
    icon: Shield,
    title: "Full IP and NDA safety",
    description: "Your data and code are protected",
  },
  {
    icon: FileCheck,
    title: "Clear reports and full transparency",
    description: "Know exactly what is happening",
  },
]

export function WhyAvaantra() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance">
            Why teams pick Avaantra
          </h2>
          <p className="text-xl text-gray-600 text-balance">We make hiring fast, reliable, and risk-free</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-light border border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
