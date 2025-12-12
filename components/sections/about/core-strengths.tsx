import { Cpu, Globe, Layers, UserCheck } from "lucide-react"

export default function CoreStrengths() {
  const strengths = [
    {
      title: "Hybrid Model",
      description: "AI-driven tools combined with human expertise for faster, efficient delivery",
      icon: Cpu,
    },
    {
      title: "Global Talent Network",
      description: "Pre-vetted experts handpicked for skill, communication, and accountability",
      icon: Globe,
    },
    {
      title: "Cross-Functional Capability",
      description: "Everything needed to build and scale a digital business under one roof",
      icon: Layers,
    },
    {
      title: "Leadership-Driven",
      description: "Strategic leads ensuring alignment, quality, and measurable results",
      icon: UserCheck,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative">
            <img
              src="/global-business-network-connections-across-world-m.jpg"
              alt="Global team network"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold mb-2">150+</p>
              <p className="text-white/90">Expert professionals across 4 continents</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Core Strengths</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              What sets us apart is our unique combination of AI-powered efficiency, global talent access, and
              leadership-driven execution that delivers measurable results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, idx) => {
            const Icon = strength.icon
            return (
              <div
                key={idx}
                className="bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-foreground mb-4">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
