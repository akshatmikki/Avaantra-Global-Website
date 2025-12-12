export default function Impact() {
  const metrics = [
    { metric: "120+", impact: "Active Clients Globally" },
    { metric: "15 Days", impact: "Avg Team Deployment" },
    { metric: "40-60%", impact: "Cost Savings" },
    { metric: "3-5X", impact: "Campaign ROI" },
    { metric: "99.9%", impact: "Delivery Reliability" },
  ]

  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">Impact in Numbers</h2>
        <p className="text-xl text-background/70 text-center mb-16 max-w-3xl mx-auto">
          Measurable results that demonstrate our commitment to client success
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {metrics.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">{item.metric}</div>
              <p className="text-base text-background/80">{item.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
