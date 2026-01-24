import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function OnlineReputationManagementPage() {
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
                <Clock className="inline mr-2" size={16} />
                Online Reputation Management
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Protect & Enhance Your <span className="text-primary">Brand Reputation</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Monitor, manage, and improve your online reputation across review sites, social media, and search results. 
                Build trust with potential customers and protect your brand from negative content.
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
                alt="Online Reputation Management"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Online Reputation Management</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600">Continuous monitoring of reviews, mentions, and brand sentiment across platforms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Crisis Management</h3>
              <p className="text-gray-600">Rapid response to negative content to minimize brand damage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Review Generation</h3>
              <p className="text-gray-600">Strategies to generate positive reviews and improve overall ratings.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ORM Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our Online Reputation Management Services</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Proactive reputation protection and long-term brand trust building.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Brand Monitoring",
          desc: "Track brand mentions, reviews, and sentiment across platforms",
        },
        {
          title: "Review Management",
          desc: "Respond to reviews and improve ratings on key platforms",
        },
        {
          title: "Negative Content Suppression",
          desc: "Push down harmful or misleading search results",
        },
        {
          title: "Crisis Response",
          desc: "Rapid action plans for reputation threats",
        },
        {
          title: "Positive Content Promotion",
          desc: "Build authority through PR, blogs, and brand assets",
        },
        {
          title: "Reporting & Insights",
          desc: "Sentiment analysis, visibility tracking, and reputation health",
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

{/* ORM Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our ORM Process</h2>
      <p className="text-gray-600">
        Reputation management as a continuous system — not a one-time fix.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Audit & Risk Assessment",
        "Monitoring Setup",
        "Response & Mitigation",
        "Positive Content Push",
        "Ongoing Optimization",
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
      <h2 className="text-3xl font-bold mb-4">Industries We Protect</h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "SaaS & B2B",
        "E-commerce Brands",
        "Healthcare & Clinics",
        "Professional Services",
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
      <h2 className="text-3xl font-bold">ORM Case Study</h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">Mid-size B2B Company</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          Negative reviews and outdated content impacting trust
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          Review response strategy, content promotion, and SERP cleanup
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "+4.2 → 4.7 average rating",
            "70% reduction in negative SERP visibility",
            "Improved brand trust & lead quality",
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
          q: "How long does ORM take to show results?",
          a: "Initial improvements in weeks, with compounding impact over months.",
        },
        {
          q: "Can you remove negative reviews?",
          a: "We focus on suppression, response, and legitimate removals when possible.",
        },
        {
          q: "Do you monitor social media too?",
          a: "Yes — reviews, social platforms, forums, and search results.",
        },
        {
          q: "Is ORM a one-time service?",
          a: "No. Reputation requires continuous monitoring and optimization.",
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
      Ready to Protect Your Brand Reputation?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Take control of your online presence and build long-term trust.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free ORM Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
