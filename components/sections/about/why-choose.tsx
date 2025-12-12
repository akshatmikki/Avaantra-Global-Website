export default function WhyChoose() {
  const reasons = [
    "Because we merge marketing + technology under one roof",
    "Because we help you scale teams in 15 days, not 90",
    "Because we measure success by your outcomes, not deliverables",
    "Because we believe in relationships, not transactions",
  ]

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-12 text-center">Why Businesses Choose Avaantra</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-gradient-to-r from-primary/10 to-light p-6 rounded-xl">
              <span className="text-2xl text-primary">✅</span>
              <p className="text-lg text-gray-700 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-primary">
            We're not the biggest agency — we're the most accountable partner.
          </p>
        </div>
      </div>
    </section>
  )
}
