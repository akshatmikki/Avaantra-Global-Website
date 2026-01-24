import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function SaaSMarketingServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dark via-gray-900 to-dark text-light py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Users className="inline mr-2" size={16} />
                SaaS Marketing Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Grow Your SaaS with <span className="text-primary">Strategic Marketing</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Specialized marketing strategies for SaaS companies. From product-led growth to demand generation, 
                we help you acquire customers, reduce churn, and scale your subscription business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-8 py-6 text-lg">
                  Book Free Consultation →
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-team-working-on-software-development-.jpg"
                alt="SaaS Marketing Services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SaaS Marketing Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Product-Led Growth</h3>
              <p className="text-gray-600">Marketing strategies that leverage your product as the primary growth driver.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Demand Generation</h3>
              <p className="text-gray-600">Build a predictable pipeline of qualified leads for your sales team.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Retention Focus</h3>
              <p className="text-gray-600">Marketing programs that reduce churn and increase customer lifetime value.</p>
            </div>
          </div>
        </div>
      </section>
      {/* SaaS Marketing Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our SaaS Marketing Services</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Full-funnel SaaS marketing designed to acquire, activate, retain, and expand customers.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Product-Led Growth (PLG)",
          desc: "Onboarding, activation, and in-product conversion strategies",
        },
        {
          title: "Demand Generation",
          desc: "Inbound, outbound, and paid channels to fuel pipeline growth",
        },
        {
          title: "SaaS SEO",
          desc: "Buyer-intent keywords, content clusters, and organic acquisition",
        },
        {
          title: "Performance Marketing",
          desc: "Google, LinkedIn, and Meta ads optimized for CAC & LTV",
        },
        {
          title: "Lifecycle & Retention Marketing",
          desc: "Email, in-app messaging, and churn reduction campaigns",
        },
        {
          title: "Analytics & Attribution",
          desc: "Funnels, cohorts, CAC/LTV tracking, and revenue attribution",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SaaS Marketing Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our SaaS Growth Process</h2>
      <p className="text-gray-600">
        Marketing built as a system — not disconnected campaigns.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Product & Funnel Audit",
        "ICP & Positioning",
        "Channel Strategy",
        "Execution & Testing",
        "Scale What Converts",
      ].map((step, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow text-center"
        >
          <div className="text-3xl font-bold text-primary mb-3">
            {idx + 1}
          </div>
          <p className="font-semibold">{step}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Industries */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold mb-4">SaaS Industries We Work With</h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "B2B SaaS",
        "FinTech SaaS",
        "HealthTech SaaS",
        "EdTech Platforms",
      ].map((industry, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow text-center font-semibold"
        >
          {industry}
        </div>
      ))}
    </div>
  </div>
</section>

{/* Case Study */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">SaaS Marketing Case Study</h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">B2B SaaS Platform</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          High CAC, low activation, and inconsistent pipeline
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          PLG onboarding revamp, demand gen campaigns, and lifecycle automation
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "2.8X qualified pipeline growth",
            "35% increase in activation rate",
            "40% lower CAC",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 font-semibold">
              <span className="text-primary">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">FAQs</h2>
    </div>

    <div className="max-w-4xl mx-auto space-y-6">
      {[
        {
          q: "Do you work with early-stage SaaS companies?",
          a: "Yes — from MVP and PMF to growth and scale stages.",
        },
        {
          q: "Do you support product-led growth?",
          a: "Absolutely. PLG is a core part of our SaaS marketing approach.",
        },
        {
          q: "Can you work with our internal sales team?",
          a: "Yes — we align marketing with sales and RevOps teams.",
        },
        {
          q: "How soon can we see results?",
          a: "Early traction in 30–60 days, with compounding growth over time.",
        },
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">{item.q}</h3>
          <p className="text-gray-600">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Final CTA */}
<section className="py-24 bg-gradient-to-br from-dark via-gray-900 to-dark text-light">
  <div className="container mx-auto px-4 md:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Scale Your SaaS?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Let’s build a predictable SaaS growth engine that compounds over time.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free SaaS Marketing Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
