import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { UserCheck } from "lucide-react"

export default function ConversionRateOptimizationPage() {
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
                <UserCheck className="inline mr-2" size={16} />
                Conversion Rate Optimization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Turn Visitors into <span className="text-primary">Customers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Optimize your website and landing pages to convert more visitors into customers. Through data-driven 
                testing and optimization, we improve user experience and increase conversion rates.
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
                alt="Conversion Rate Optimization"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Conversion Rate Optimization</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data-Driven Testing</h3>
              <p className="text-gray-600">A/B testing and multivariate testing to identify what truly converts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">User Experience Focus</h3>
              <p className="text-gray-600">Improve UX to remove friction and guide users toward conversion.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
              <p className="text-gray-600">Track improvements in conversion rates and revenue impact.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CRO Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our CRO Services</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Systematic conversion optimization across pages, funnels, and user journeys.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Conversion Audits",
          desc: "Identify leaks, friction points, and drop-offs across your funnel",
        },
        {
          title: "A/B & Multivariate Testing",
          desc: "Experiment with layouts, copy, CTAs, and UX variations",
        },
        {
          title: "Landing Page Optimization",
          desc: "High-converting layouts, messaging, and visual hierarchy",
        },
        {
          title: "UX & Behavior Analysis",
          desc: "Heatmaps, session recordings, and user behavior insights",
        },
        {
          title: "Checkout & Funnel Optimization",
          desc: "Reduce abandonment and improve completion rates",
        },
        {
          title: "Analytics & Tracking Setup",
          desc: "GA4, events, funnels, and conversion tracking",
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

{/* CRO Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our CRO Process</h2>
      <p className="text-gray-600">
        Optimization is a loop — not a one-time tweak.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Data & Funnel Audit",
        "Hypothesis Creation",
        "Test Design & Launch",
        "Analyze Results",
        "Iterate & Scale",
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
      <h2 className="text-3xl font-bold mb-4">Industries We Optimize For</h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "SaaS & B2B",
        "E-commerce",
        "FinTech",
        "EdTech",
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
      <h2 className="text-3xl font-bold">CRO Case Study</h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">B2B SaaS Company</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          High traffic but low trial-to-paid conversion
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          Funnel analysis, onboarding optimization, and A/B testing
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "+120% conversion rate increase",
            "35% lower bounce rate",
            "2.5X revenue per visitor",
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
          q: "How long does CRO take to show results?",
          a: "Initial insights in weeks, meaningful lifts within 30–60 days.",
        },
        {
          q: "Do you need high traffic for CRO?",
          a: "Higher traffic helps, but CRO can work with moderate volumes too.",
        },
        {
          q: "What tools do you use?",
          a: "GA4, Hotjar, VWO, Google Optimize alternatives, and custom analytics.",
        },
        {
          q: "Do you optimize landing pages and products?",
          a: "Yes — websites, funnels, checkout, onboarding, and in-app flows.",
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
      Ready to Convert More Visitors?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Turn traffic into revenue with a structured, data-driven CRO strategy.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free CRO Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
