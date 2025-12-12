export default function Values() {
  const values = [
    {
      number: "01",
      title: "Partnership Over Transaction",
      description: "We measure success by client retention, not project count",
    },
    {
      number: "02",
      title: "Transparency in Everything",
      description: "You'll always know what's happening with budgets, timelines, and people",
    },
    {
      number: "03",
      title: "Learning Never Stops",
      description: "We evolve with AI, data, and markets so our clients stay ahead",
    },
    {
      number: "04",
      title: "Integrity First",
      description: "We say 'no' when we can't deliver. Honest over impressive",
    },
    {
      number: "05",
      title: "Global Collaboration",
      description: "Operating across time zones with one global standard: excellence",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16 text-center">Our Values</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-5xl font-bold text-foreground/10">{value.number}</div>
              <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
