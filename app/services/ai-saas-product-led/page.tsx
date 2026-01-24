import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { MonitorSpeaker } from "lucide-react"

export default function AISaaSProductLedPage() {
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
                <MonitorSpeaker className="inline mr-2" size={16} />
                AI for SaaS & Product-Led Businesses
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered <span className="text-primary">Product Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Integrate AI into your SaaS product to enhance user experience, drive adoption, and increase retention. 
                From intelligent features to AI-powered onboarding, we help product-led businesses leverage AI for growth.
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
                alt="AI for SaaS & Product-Led Businesses"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI for SaaS & Product-Led Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Product Integration</h3>
              <p className="text-gray-600">Seamlessly integrate AI features that enhance your product's value proposition.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">User Experience</h3>
              <p className="text-gray-600">AI-powered features that improve user experience and drive product adoption.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Growth Metrics</h3>
              <p className="text-gray-600">AI solutions that directly impact key SaaS metrics like activation and retention.</p>
            </div>
          </div>
        </div>
      </section>
      {/* AI for SaaS & Product-Led Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our AI Solutions for SaaS & Product-Led Teams
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        AI features designed to improve activation, engagement, retention, and expansion.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "AI-Powered Onboarding",
          desc: "Guided onboarding, in-app assistants, and smart walkthroughs",
        },
        {
          title: "Personalization Engines",
          desc: "Dynamic experiences tailored to user behavior and intent",
        },
        {
          title: "In-Product AI Assistants",
          desc: "Copilots that help users get value faster inside your product",
        },
        {
          title: "Usage Analytics & Insights",
          desc: "AI-driven insights into feature adoption and user behavior",
        },
        {
          title: "Churn Prediction",
          desc: "Identify at-risk users before they disengage",
        },
        {
          title: "Expansion & Upsell Intelligence",
          desc: "AI signals to drive upgrades and account expansion",
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

{/* AI Product-Led Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our AI Product-Led Growth Process
      </h2>
      <p className="text-gray-600">
        AI embedded into the product — not bolted on as a feature.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Product & Funnel Audit",
        "AI Use Case Mapping",
        "UX & Feature Design",
        "Model & System Build",
        "Iteration & Optimization",
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

{/* Use Cases */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold mb-4">
        Product-Led AI Use Cases
      </h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "Self-Serve User Onboarding",
        "In-App Support & Guidance",
        "Feature Adoption Acceleration",
        "Retention & Expansion Signals",
      ].map((useCase, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow text-center font-semibold"
        >
          {useCase}
        </div>
      ))}
    </div>
  </div>
</section>

{/* Case Study */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">
        AI for SaaS Case Study
      </h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">B2B SaaS Platform</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          Low activation rates and high early-stage churn
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          AI onboarding assistant, usage insights, and churn prediction models
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "42% increase in activation rate",
            "30% reduction in churn",
            "Higher product adoption across core features",
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
          q: "Is this only for AI-native SaaS products?",
          a: "No — we retrofit AI into existing SaaS platforms as well.",
        },
        {
          q: "Can AI features be rolled out gradually?",
          a: "Yes — we use phased rollouts and feature flags.",
        },
        {
          q: "Does this replace product or growth teams?",
          a: "No — AI enhances teams by amplifying product-led growth.",
        },
        {
          q: "Can you work with our product roadmap?",
          a: "Yes — AI initiatives align tightly with your roadmap.",
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
      Ready to Build AI Into Your Product?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Turn your SaaS into a smarter, stickier, AI-powered product.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free AI Product Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
