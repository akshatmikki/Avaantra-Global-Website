import { CheckCircle } from "lucide-react"

export default function StartupPromise() {
  const promises = [
    "Build a working MVP in 4–8 weeks",
    "Validate product-market fit quickly",
    "Create predictable user acquisition systems",
    "Get investor-ready with data-backed traction",
    "Scale without worrying about tech or delivery",
  ]

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Build Faster. Launch Smarter. Grow Predictably.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We help you move from concept to customer with clarity, speed, and confidence — using a structured framework
            that reduces risk and increases investor readiness.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-dark text-center">With Avaantra Global, you can:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{promise}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-dark">We don't just build products. We help you build momentum.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
