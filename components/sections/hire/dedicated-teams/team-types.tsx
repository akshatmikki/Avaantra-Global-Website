import { Code, Globe, Smartphone, Brain } from "lucide-react"

export function TeamTypes() {
  const teams = [
    {
      icon: Code,
      title: "SaaS Development Teams",
      description: "End-to-end SaaS product teams with Frontend, Backend, QA, DevOps & PM",
      features: ["React, Node, Python", "Microservices Architecture", "CI/CD & Cloud Native", "99.9% Uptime"],
      outcome: "2-3X faster feature delivery",
    },
    {
      icon: Globe,
      title: "Web Development Teams",
      description: "Full-stack web developers for fast, scalable, SEO-optimized sites",
      features: ["WordPress, React, PHP", "Mobile-first & Responsive", "SEO Optimization", "Performance Tuning"],
      outcome: "50% improved page performance",
    },
    {
      icon: Smartphone,
      title: "Mobile App Teams",
      description: "Cross-platform & native mobile app development experts",
      features: ["Flutter, React Native", "iOS & Android Native", "App Store Publishing", "CI/CD Integration"],
      outcome: "99.5% crash-free performance",
    },
    {
      icon: Brain,
      title: "AI & Data Science Teams",
      description: "Build predictive models, analytics dashboards & automation workflows",
      features: ["Machine Learning", "Data Engineering", "Business Intelligence", "MLOps & Deployment"],
      outcome: "3-4X faster insights",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">What You Get in a Dedicated Team</h2>
            <p className="text-xl text-gray-600 mb-8">
              Each team is assembled around your goals, timeline, and tech stack
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-lg font-semibold text-dark mb-4">Typical Team Composition:</p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="bg-white px-4 py-2 rounded-full">1 Project Manager</span>
                <span className="bg-white px-4 py-2 rounded-full">2-4 Developers</span>
                <span className="bg-white px-4 py-2 rounded-full">1-2 QA Engineers</span>
                <span className="bg-white px-4 py-2 rounded-full">1 UI/UX Designer</span>
                <span className="bg-white px-4 py-2 rounded-full">1 DevOps Engineer</span>
                <span className="bg-white px-4 py-2 rounded-full">1 Digital Marketer</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/diverse-software-development-team-collaborating-on.jpg"
              alt="Dedicated teams"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
              <p className="text-3xl font-bold text-primary mb-1">100+</p>
              <p className="text-gray-600">Expert developers ready to join your team</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teams.map((team, index) => {
            const Icon = team.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-primary transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{team.title}</h3>
                <p className="text-gray-700 mb-6">{team.description}</p>
                <div className="space-y-2 mb-6">
                  {team.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-primary">Outcome: {team.outcome}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
