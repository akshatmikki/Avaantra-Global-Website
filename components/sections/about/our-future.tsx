export default function OurFuture() {
  const initiatives = [
    "Launching AI-powered delivery dashboards",
    "Expanding into 20+ global markets",
    "Partnering with startups to co-build scalable SaaS products",
  ]

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-12 text-center">Our Future</h2>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We're building toward a future where AI, human talent, and business growth operate in perfect sync.
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-light p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-dark mb-6">Our next chapter includes:</h3>
            <div className="space-y-4">
              {initiatives.map((initiative, idx) => (
                <div key={idx} className="flex items-center justify-center gap-3">
                  <span className="text-primary text-xl">●</span>
                  <p className="text-lg text-gray-700">{initiative}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xl font-semibold text-primary leading-relaxed">
            Because we don't just want to support growth — we want to engineer it.
          </p>

          <div className="pt-8 space-y-4">
            <p className="text-2xl font-bold text-dark">Our Clients Call Us Partners — Not Vendors</p>
            <p className="text-lg text-gray-700">
              We work quietly behind the scenes — but our clients make the loudest impact.
            </p>
            <p className="text-lg text-gray-700">
              Our success isn't measured by projects — it's measured by trust, transparency, and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
