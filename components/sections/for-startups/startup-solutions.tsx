import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, TrendingUp, Target, DollarSign, Users } from "lucide-react"

export default function StartupSolutions() {
  const solutions = [
    {
      icon: Rocket,
      title: "MVP Development & Validation",
      description:
        "Launch quickly. Learn early. Save big. Your MVP is your proof of concept. We help you design, build, and validate it fast.",
      features: [
        "Product discovery workshops",
        "UI/UX wireframing and design",
        "MVP development (Web, Mobile, or SaaS)",
        "QA & user testing",
        "Real-user feedback analysis",
      ],
      outcome: "MVP ready in 4–8 weeks with real market validation",
      cta: "Launch My MVP",
    },
    {
      icon: Target,
      title: "Go-To-Market (GTM) Strategy",
      description:
        "The fastest product is useless if nobody knows it exists. We help you design a data-driven GTM strategy.",
      features: [
        "Market and competitor research",
        "ICP definition and positioning",
        "Channel selection (SEO, paid, influencer, referral)",
        "Campaign strategy & first-launch execution",
      ],
      outcome: "Clear messaging, predictable lead flow, early traction for funding",
      cta: "Build My GTM Plan",
    },
    {
      icon: TrendingUp,
      title: "Product Scaling & Growth Marketing",
      description: "Once your MVP works, we help you accelerate adoption using performance-driven growth strategies.",
      features: [
        "Full-funnel marketing setup",
        "Paid campaigns with ROI tracking",
        "SEO + content scaling",
        "Conversion rate optimization",
        "Marketing automation for user onboarding",
      ],
      outcome: "3–5X user growth in 90 days with sustainable MRR increase",
      cta: "Scale My Startup",
    },
    {
      icon: DollarSign,
      title: "Funding Readiness & Tech Acceleration",
      description:
        "Impress investors with both vision and validation. We help you prepare investor decks, product demos, and financial projections.",
      features: [
        "Investor pitch deck design",
        "Tech due diligence support",
        "Product analytics & traction reports",
        "MVP & infrastructure audits",
        "Access to funding partners",
      ],
      outcome: "Investor confidence with clear traction data",
      cta: "Get Funding Ready",
    },
    {
      icon: Users,
      title: "Managed Startup Pods",
      description:
        "Your all-in-one growth team — without full-time hiring. Our pods combine designers, developers, marketers, and PMs.",
      features: [
        "Cross-functional agile team",
        "Managed by Avaantra Product Lead",
        "2-week sprint cycles",
        "Zero vendor coordination",
        "Predictable outcomes",
      ],
      outcome: "2–3X faster time to market with lower cost",
      cta: "Start with a Pod",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Solutions Tailored for Startups</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We designed our offerings to match your startup journey — from idea validation to growth scaling.
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-dark mb-3">Our Process Includes:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-3">Predictable Outcome:</h4>
                  <p className="text-gray-700 bg-white p-4 rounded-lg">{solution.outcome}</p>
                </div>
              </div>

              <Button className="group">
                {solution.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
