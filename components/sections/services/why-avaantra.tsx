import { Award, Shield, Target, Users2 } from "lucide-react"

export function WhyAvaantra() {
  const differentiators = [
    {
      icon: Award,
      title: "Deep Expertise",
      description: "80+ years combined experience in engineering, AI, marketing, and SaaS growth.",
      stat: "80+ Years",
    },
    {
      icon: Users2,
      title: "Global Talent Pool",
      description: "Pre-vetted teams across time zones ready to deliver.",
      stat: "100+ Experts",
    },
    {
      icon: Target,
      title: "End-to-End Ownership",
      description: "From code to campaigns — one accountable partner for everything.",
      stat: "One Partner",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "NDA, full IP control, secure SDLC, and cloud security as standard.",
      stat: "100% Secure",
    },
    {
      icon: Target,
      title: "Outcome-Driven",
      description: "We measure success by speed, quality, ROI, and reliability.",
      stat: "ROI Focused",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">A Partner Built for Predictability</h2>
          <p className="text-lg text-gray-600">
            We don't just deliver projects — we build partnerships based on trust, transparency, and tangible results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentiators.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-primary transition-all group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <IconComponent size={28} className="text-primary group-hover:text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{item.stat}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
