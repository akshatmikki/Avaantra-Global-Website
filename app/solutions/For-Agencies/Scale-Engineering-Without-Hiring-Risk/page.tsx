import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Cpu,
  Layers,
  Shield,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "Scale Engineering Without Hiring Risk | Avaantra Global",
  description:
    "Expand your agency’s technical delivery with zero hiring risk. Avaantra Global provides managed engineering pods and development teams that help agencies scale confidently — faster, leaner, and profitably.",
};

export default function ScaleEngineeringPage() {
  const capabilities = [
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Web, App & Portal Development",
      desc: "Websites, apps, SaaS platforms, dashboards, and internal tools — delivered under your brand.",
      outcome: "Scalable, high-quality products built fast",
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-600" />,
      title: "Automation & Integrations",
      desc: "CRMs, payment gateways, marketing automation, APIs, and workflows.",
      outcome: "Less manual work and smarter operations",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "DevOps & Infrastructure",
      desc: "Cloud setup, CI/CD pipelines, monitoring, and security compliance.",
      outcome: "Stable launches with zero deployment stress",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "Quality Assurance & Testing",
      desc: "Manual testing, automation, regression, and performance validation.",
      outcome: "Bug-free releases and fewer client escalations",
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      title: "AI, Data & Analytics",
      desc: "Chatbots, dashboards, predictive models, and AI-powered tools.",
      outcome: "Modern, future-ready client solutions",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Scale Your Agency’s Engineering Power — Without Hiring or Risk
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10">
            Say yes to apps, integrations, automations, and platforms without
            building a dev department. Avaantra provides managed engineering
            pods that scale with your agency — fast, predictable, and
            white-labeled.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Engineering Scale Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem Agencies Face When Scaling Tech
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Hiring developers is slow and expensive",
                "Freelancers disappear or miss deadlines",
                "Vendors overpromise and underdeliver",
                "Managing code, QA, and releases drains your time",
                "You turn down profitable projects to protect your reputation",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                What If You Could Say “Yes” Every Time?
              </h3>
              <p className="text-gray-600">
                Avaantra gives you on-demand engineering power — without hiring,
                risk, or chaos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Expand Your Tech Capabilities — Without Expanding Payroll
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "2–3X project capacity",
              "40–50% faster delivery",
              "35–45% lower cost vs in-house",
              "Zero management overhead",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-600 font-semibold">
            We’re not a vendor — we’re your engineering backbone.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What You Can Build With Avaantra Engineering Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Instantly deliver high-value technical projects — end to end.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-purple-700">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why Agencies Trust Avaantra for Engineering Scale
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "100% white-label engineering delivery",
              "Managed Agile Pods with sprint-based execution",
              "Dedicated PMs and transparent sprint reports",
              "AI-enhanced QA and DevOps automation",
              "Scalable resources without long-term commitment",
              "Lower cost and higher predictability than in-house teams",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-700 font-semibold">
            You stay client-facing. We stay performance-focused.
          </p>
        </div>
      </section>
      {/* Engineering Scale Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our Engineering Scale Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple, transparent, and built for agency reality.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                desc: "Assess capacity & client needs",
              },
              {
                step: "2",
                title: "Pod Setup",
                desc: "Developers, QA, DevOps & PM",
              },
              {
                step: "3",
                title: "Onboarding",
                desc: "Integrate with your tools",
              },
              {
                step: "4",
                title: "Sprint Execution",
                desc: "2-week delivery cycles",
              },
              {
                step: "5",
                title: "Delivery & QA",
                desc: "Code, reports & releases",
              },
              {
                step: "6",
                title: "Scale or Optimize",
                desc: "Add pods anytime",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-purple-600 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-700 font-semibold">
            Outcome: Full engineering capability — without building a tech
            department.
          </p>
        </div>
      </section>
      {/* Engagement Models */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600">
              Choose a flexible way to grow your engineering power.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Dedicated Engineering Team",
                bestFor: "Long-term projects",
                work: "You manage priorities, we deliver",
                outcome: "Predictable monthly output",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Multi-project workloads",
                work: "Avaantra manages pods",
                outcome: "2–3X faster velocity",
              },
              {
                title: "White Label Retainer",
                bestFor: "Recurring tech support",
                work: "Fixed deliverables & monthly cost",
                outcome: "Stable income & delivery",
              },
              {
                title: "Project-Based",
                bestFor: "One-time builds",
                work: "Fixed scope & timeline",
                outcome: "Fast, risk-free execution",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-dark">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Best For:</strong> {item.bestFor}
                  </li>
                  <li>
                    <strong>How It Works:</strong> {item.work}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 text-gray-600">
            All models include NDA & white-label protection, dedicated PMs,
            transparent sprint reports, and flexible scaling.
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What Agencies Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Avaantra gave us full tech capability overnight. We delivered SaaS, web, and mobile projects without hiring.",
                by: "Founder, Digital Agency (UK)",
              },
              {
                quote:
                  "Their managed pods are brilliant. We handle strategy; they handle all the code.",
                by: "CEO, Marketing Agency (USA)",
              },
              {
                quote:
                  "Now we pitch tech-driven projects confidently — knowing Avaantra will deliver flawlessly.",
                by: "Partner, Creative Studio (Dubai)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow">
                <p className="italic text-gray-700 mb-4">“{item.quote}”</p>
                <p className="font-semibold text-dark">{item.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Study */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Case Study: How an Agency Scaled Engineering Capacity 3X
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">Marketing Agency (Singapore)</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Losing app and platform projects due to lack of in-house tech
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Avaantra deployed two Managed Engineering Pods (Dev + QA +
                DevOps)
              </p>
            </div>

            <div>
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "Delivered 10+ projects in 5 months",
                  "3X project capacity",
                  "+40% profit margin",
                  "100% client retention",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 font-semibold">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              FAQs — Before You Scale
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Will my clients know Avaantra is behind the project?",
                a: "No. Everything is fully white-labeled under your agency brand.",
              },
              {
                q: "Can you work with our designers or marketers?",
                a: "Yes. We integrate seamlessly with your existing team.",
              },
              {
                q: "What tech stacks do you support?",
                a: "React, Node, Python, PHP, Flutter, .NET, Laravel, WordPress, Shopify, and more.",
              },
              {
                q: "Can I start with a pilot?",
                a: "Yes. Start with a 2-week or single-project pilot.",
              },
              {
                q: "How do you ensure code quality?",
                a: "Automated QA, peer reviews, CI/CD pipelines, and version control.",
              },
              {
                q: "Who owns the code?",
                a: "100% IP ownership stays with you or your client.",
              },
              {
                q: "Can we scale mid-project?",
                a: "Yes. Additional pods can be added within 48–72 hours.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-dark mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why This Works & Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Say Yes to Every Project — Without Hiring Anyone
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Scaling engineering isn’t about headcount — it’s about systems,
            predictability, and partnerships.
          </p>

          <Button
            size="lg"
            className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Book a Free Engineering Scale Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </main>
  );
}
