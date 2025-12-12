import { AlertCircle, DollarSign, Clock, AlertTriangle } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      text: "Lack of in-house CTO or tech decision-maker",
    },
    {
      icon: AlertTriangle,
      text: "Confusion about architecture, scalability, and tools",
    },
    {
      icon: Clock,
      text: "Delays from poor vendor or dev team management",
    },
    {
      icon: DollarSign,
      text: "High cost of hiring a full-time CTO (₹40L–₹1Cr annually)",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">The Real Problem Founders Face</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Building great products requires strong technical leadership — but most early-stage companies face:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {problems.map((problem, index) => {
              const Icon = problem.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-gray-800 font-medium pt-2">{problem.text}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Without clear tech direction, startups waste time and money.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-dark leading-relaxed">
              That's where <span className="text-primary">Avaantra's Virtual CTOs</span> help — senior technology
              leaders who guide your development, hiring, and scaling strategy as your virtual partner, not a vendor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
