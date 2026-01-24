import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Fingerprint } from "lucide-react"

export default function ResponsibleAIEthicsGovernancePage() {
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
                <Fingerprint className="inline mr-2" size={16} />
                Responsible AI, Ethics & Governance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build <span className="text-primary">Ethical AI</span> Systems
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Ensure your AI systems are fair, transparent, and aligned with ethical principles. We help you 
                implement governance frameworks, bias detection, and responsible AI practices that build trust.
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
                alt="Responsible AI, Ethics & Governance"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Responsible AI, Ethics & Governance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Bias Detection</h3>
              <p className="text-gray-600">Identify and mitigate bias in AI models to ensure fair and equitable outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">Build explainable AI systems that users and stakeholders can trust.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Governance Frameworks</h3>
              <p className="text-gray-600">Establish policies and processes for responsible AI development and deployment.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Responsible AI Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our Responsible AI Services
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Governance-first AI systems built for trust, compliance, and long-term adoption.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "AI Ethics Assessment",
          desc: "Evaluate risks, bias, and ethical implications of AI systems",
        },
        {
          title: "Bias Detection & Mitigation",
          desc: "Identify and reduce bias across data, models, and outputs",
        },
        {
          title: "Explainable AI (XAI)",
          desc: "Make AI decisions transparent and interpretable",
        },
        {
          title: "AI Governance Frameworks",
          desc: "Policies, controls, and accountability structures",
        },
        {
          title: "Compliance Readiness",
          desc: "Prepare for regulations like GDPR, AI Act, and industry standards",
        },
        {
          title: "Risk & Impact Assessments",
          desc: "Evaluate societal, operational, and legal AI risks",
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

{/* Responsible AI Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our Responsible AI Process
      </h2>
      <p className="text-gray-600">
        Ethics embedded throughout the AI lifecycle — not added at the end.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Risk & Ethics Audit",
        "Bias & Fairness Evaluation",
        "Governance Design",
        "Controls & Guardrails",
        "Ongoing Monitoring",
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
      <h2 className="text-3xl font-bold mb-4">
        Industries Requiring Responsible AI
      </h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "Healthcare",
        "Finance & Insurance",
        "Public Sector",
        "Enterprise SaaS",
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
      <h2 className="text-3xl font-bold">
        Responsible AI Case Study
      </h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">Financial Services Company</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          Regulatory risk and lack of transparency in AI decision-making
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          Bias audits, explainability layers, and governance framework
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "Improved regulatory compliance",
            "Transparent AI decision workflows",
            "Reduced legal and reputational risk",
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
          q: "Is responsible AI legally required?",
          a: "Increasingly yes, especially in regulated industries.",
        },
        {
          q: "Can you audit existing AI systems?",
          a: "Yes — including third-party and legacy models.",
        },
        {
          q: "Does responsible AI slow innovation?",
          a: "No — it reduces risk and accelerates adoption.",
        },
        {
          q: "Do you support ongoing governance?",
          a: "Yes — continuous monitoring and policy updates.",
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
      Ready to Build Trustworthy AI?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Deploy AI systems that are ethical, transparent, and built to last.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free Responsible AI Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
