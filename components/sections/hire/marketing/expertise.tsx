import { Search, Target, Zap, Share2, BarChart3, Mail } from "lucide-react"

const expertiseAreas = [
  {
    icon: Search,
    title: "SEO & Organic",
    description: "Rank higher, get found faster",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "PPC & Paid Ads",
    description: "Convert clicks into customers",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Scale without scaling headcount",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Build communities that convert",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make decisions with data",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Engage, nurture, convert",
    gradient: "from-teal-500 to-cyan-500",
  },
]

export default function Expertise() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Full-Stack Marketing Superpowers</h2>
          <p className="text-xl text-gray-600">Every channel. Every tactic. One team.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 hover:border-transparent rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-gray-900 group-hover:text-white mb-4 transition-colors" />
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">{area.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
