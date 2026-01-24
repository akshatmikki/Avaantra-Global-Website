import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function AIStrategyConsultingPage() {
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
                AI Strategy & Consulting
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Strategic <span className="text-primary">AI Guidance</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Get expert guidance on how AI can transform your business. We help you identify opportunities, 
                build roadmaps, and make informed decisions about AI investments that align with your goals.
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
                alt="AI Strategy & Consulting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Strategy & Consulting</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Strategic Roadmaps</h3>
              <p className="text-gray-600">Clear AI implementation roadmaps that align with business objectives.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Leverage deep AI expertise to make the right technology decisions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">ROI Focus</h3>
              <p className="text-gray-600">Identify AI opportunities that deliver measurable business value.</p>
            </div>
          </div>
        </div>
      </section>
      {/* AI Strategy & Consulting Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our AI Strategy & Consulting Services</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Clarity before code. Strategy before scale. AI decisions grounded in business reality.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "AI Opportunity Assessment",
          desc: "Identify where AI can create the most business impact",
        },
        {
          title: "AI Readiness Audit",
          desc: "Evaluate data, infrastructure, and organizational readiness",
        },
        {
          title: "Use Case Prioritization",
          desc: "Rank AI initiatives by feasibility, cost, and ROI",
        },
        {
          title: "AI Roadmap & Architecture",
          desc: "Define phased implementation and system design",
        },
        {
          title: "Vendor & Tool Selection",
          desc: "Choose the right models, platforms, and frameworks",
        },
        {
          title: "Governance & Risk Planning",
          desc: "Ethics, security, compliance, and responsible AI usage",
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

{/* AI Strategy Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our AI Strategy Process</h2>
      <p className="text-gray-600">
        A structured approach to reduce risk and maximize AI ROI.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Business Goals Alignment",
        "AI Use Case Discovery",
        "Feasibility & Data Analysis",
        "Roadmap & Investment Planning",
        "Execution Guidance",
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
      <h2 className="text-3xl font-bold mb-4">Industries We Advise</h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "SaaS & Technology",
        "E-commerce & Retail",
        "Healthcare",
        "Finance & Enterprises",
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
      <h2 className="text-3xl font-bold">AI Strategy Case Study</h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">Mid-size SaaS Company</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          Unclear AI direction and high experimentation costs
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          AI roadmap, prioritized use cases, and phased investment plan
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "Clear 12-month AI roadmap",
            "30% reduction in wasted AI spend",
            "Faster move from idea to production",
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
          q: "Is AI strategy only for large companies?",
          a: "No. Startups and mid-size companies benefit the most from early clarity.",
        },
        {
          q: "Do you also implement AI solutions?",
          a: "Yes — we support both strategy and execution.",
        },
        {
          q: "How long does AI strategy consulting take?",
          a: "Typically 2–6 weeks depending on scope and complexity.",
        },
        {
          q: "Will you recommend buying or building AI?",
          a: "We objectively evaluate both and recommend what fits best.",
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
      Ready to Define Your AI Strategy?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Make confident AI decisions backed by strategy, data, and experience.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free AI Strategy Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
