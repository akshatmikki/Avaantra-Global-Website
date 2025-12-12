import { Code, DollarSign, Heart, ShoppingBag, GraduationCap } from "lucide-react"

const industries = [
  {
    icon: Code,
    title: "SaaS & B2B",
    description: "Pipeline-focused marketing with automation",
  },
  {
    icon: DollarSign,
    title: "FinTech",
    description: "Compliance-safe lead funnels and brand authority",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Trust-driven campaigns with strict privacy",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Full-funnel growth with retargeting & remarketing",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Enrollment and engagement campaigns",
  },
]

export default function Industries() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600">Specialized expertise across key verticals</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
