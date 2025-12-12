import { CheckCircle, TrendingUp, DollarSign, Users, Zap } from "lucide-react"

const promises = [
  {
    icon: Zap,
    title: "Pre-vetted experts in 15 days",
    description: "Thoroughly tested skills and experience",
  },
  {
    icon: Users,
    title: "100% focused on your project",
    description: "Dedicated resources for your success",
  },
  {
    icon: CheckCircle,
    title: "Avaantra project manager if needed",
    description: "Optional oversight and coordination",
  },
  {
    icon: CheckCircle,
    title: "Full IP and NDA protection",
    description: "Complete security and confidentiality",
  },
  {
    icon: TrendingUp,
    title: "You can scale or replace anytime",
    description: "Complete flexibility without commitment",
  },
]

const results = [
  { icon: Zap, text: "Faster hiring" },
  { icon: DollarSign, text: "Lower costs" },
  { icon: CheckCircle, text: "Full ownership" },
  { icon: TrendingUp, text: "Smooth delivery" },
]

export function OurPromise() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance">Our Promise</h2>
          <p className="text-xl text-gray-600">Hiring with us is simple and safe</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6">What you get</h3>
            <div className="space-y-4">
              {promises.map((promise, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <promise.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">{promise.title}</h4>
                    <p className="text-sm text-gray-600">{promise.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark mb-6">Expected results</h3>
            <div className="grid grid-cols-2 gap-6">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-light border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <result.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold text-dark">{result.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
