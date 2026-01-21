import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Cpu,
  Activity,
  Layers,
  Server,
} from "lucide-react";

export const metadata = {
  title:
    "DevOps & Automation Services for SaaS & Product Teams | Avaantra Global",
  description:
    "Accelerate product delivery with Avaantra’s DevOps and automation services. Faster releases, fewer errors, and predictable performance for SaaS and startup engineering teams.",
};

export default function DevOpsAutomationPage() {
  const services = [
    {
      icon: <Layers className="w-8 h-8 text-indigo-600" />,
      title: "CI/CD Pipeline Setup",
      desc: "Automated build, test, deploy, and rollback pipelines for modern applications.",
      outcome: "Faster, safer releases",
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      title: "Infrastructure as Code (IaC)",
      desc: "Provision and manage infrastructure using code, not manual steps.",
      outcome: "Repeatable, reliable environments",
    },
    {
      icon: <Cloud className="w-8 h-8 text-indigo-600" />,
      title: "Cloud Setup & Optimization",
      desc: "Cloud-native architecture with scaling, security, and cost control.",
      outcome: "High performance with lower cost",
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      title: "Continuous Testing & QA Automation",
      desc: "Automated tests baked directly into your delivery pipeline.",
      outcome: "Fewer bugs in production",
    },
    {
      icon: <Activity className="w-8 h-8 text-indigo-600" />,
      title: "Monitoring, Logging & Alerts",
      desc: "Real-time visibility into performance, errors, and system health.",
      outcome: "Issues caught before users notice",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ship Faster. Deploy Safer. <br />
            <span className="text-indigo-200">Automate Everything.</span>
          </h1>

          <p className="text-lg md:text-xl text-indigo-100 max-w-4xl mx-auto mb-10">
            We build production-grade DevOps systems that remove release chaos,
            prevent downtime, and help SaaS teams scale without burning out
            engineers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-indigo-700 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free DevOps Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How Automation Works
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
              The Real Problem Product Teams Face
            </h2>

            <p className="text-gray-600 mb-6">
              You’ve built a solid product — but delivery feels fragile.
            </p>

            <ul className="space-y-4 text-gray-700">
              {[
                "Every release feels risky",
                "Manual deployments cause downtime",
                "QA happens too late",
                "Dev and Ops work in silos",
                "Infra issues steal build time",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow">
            <p className="text-gray-700 mb-4">
              Releases slow down. Bugs reach users first.
            </p>
            <p className="text-gray-700 mb-6">
              Growth stalls — not because of code, but because delivery is
              unpredictable.
            </p>

            <p className="font-semibold text-dark">
              You don’t need more developers.
              <br />
              You need a DevOps system that works every time.
            </p>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            What You Get With Proper DevOps
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "40–60% faster deployments",
              "99.9% uptime",
              "30–50% fewer production bugs",
              "Complete release visibility",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              DevOps & Automation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything needed to make your delivery predictable and scalable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-indigo-700">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why SaaS Teams Trust Avaantra Global
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "DevOps-certified engineers",
              "Cloud-native & multi-cloud expertise",
              "AI-powered monitoring & automation",
              "Sprint-based delivery & reporting",
              "No vendor lock-in",
              "Full infra & code ownership",
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
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From Chaos to Continuous Delivery
            </h2>
            <p className="text-indigo-200">
              A structured, low-risk approach to fixing delivery without
              disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Audit & Discovery",
                desc: "We analyze your current development-to-release workflow.",
              },
              {
                step: "2",
                title: "Automation Blueprint",
                desc: "We design your CI/CD and DevOps roadmap.",
              },
              {
                step: "3",
                title: "Implementation",
                desc: "Infrastructure, pipelines, and testing automation.",
              },
              {
                step: "4",
                title: "Testing & Rollout",
                desc: "Dry runs, validation, and safe deployments.",
              },
              {
                step: "5",
                title: "Continuous Improvement",
                desc: "Monitoring, optimization, and scaling.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-indigo-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-indigo-100">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-indigo-200 mt-10 font-semibold">
            Outcome: Predictable delivery, zero deployment drama, happier teams.
          </p>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600">
              Flexible DevOps engagement based on your growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "DevOps Audit Sprint",
                bestFor: "Teams with broken delivery cycles",
                how: "2-week audit & roadmap",
                outcome: "Clear bottlenecks & fixes",
              },
              {
                title: "Managed DevOps Retainer",
                bestFor: "SaaS with frequent releases",
                how: "End-to-end DevOps ownership",
                outcome: "24/7 stability",
              },
              {
                title: "Dedicated DevOps Engineer",
                bestFor: "Hybrid teams",
                how: "You manage, we execute",
                outcome: "Speed with visibility",
              },
              {
                title: "Cloud Optimization Sprint",
                bestFor: "Cost or performance issues",
                how: "4-week optimization sprint",
                outcome: "Lower bills, higher uptime",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-dark">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Best For:</strong> {item.bestFor}
                  </li>
                  <li>
                    <strong>How It Works:</strong> {item.how}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-600 font-semibold">
            All plans include NDA, IP ownership, dashboards, and monitoring
            options.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Our deployment cycle dropped from 10 days to 2. Releases are boring now — in a good way.",
                by: "CTO, SaaS Platform (USA)",
              },
              {
                quote:
                  "Avaantra automated everything. We deploy confidently every week.",
                by: "Engineering Head, FinTech Startup",
              },
              {
                quote:
                  "They cut our cloud costs by 35% while improving uptime.",
                by: "Founder, B2B SaaS",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <p className="italic text-gray-700 mb-4">“{item.quote}”</p>
                <p className="font-semibold text-dark">{item.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-indigo-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-dark">
            Case Study: From Chaos to Continuous Delivery
          </h2>

          <p className="mb-2">
            <strong>Client:</strong> SaaS Product (India)
          </p>
          <p className="mb-2">
            <strong>Challenge:</strong> Manual deployments & frequent rollbacks
          </p>
          <p className="mb-6">
            <strong>Solution:</strong> CI/CD + IaC + automated testing
          </p>

          <ul className="space-y-3 font-semibold">
            <li>✅ 4X faster release cycles</li>
            <li>✅ 0 production rollbacks in 3 months</li>
            <li>✅ 99.98% uptime</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — Before You Automate
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can you integrate with our existing stack?",
                a: "Yes. We integrate with any CI/CD, cloud, or tooling you already use.",
              },
              {
                q: "Will this disrupt our current releases?",
                a: "No. Automation is built alongside your live system.",
              },
              {
                q: "Do you offer 24/7 monitoring?",
                a: "Yes, via our Managed DevOps engagement.",
              },
              {
                q: "How fast can we start?",
                a: "Within 7 business days after discovery.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-bold text-dark mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ship Without Fear?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Stop firefighting releases. Build a delivery system that just works.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="group bg-white text-indigo-700 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Book Your Free DevOps Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </main>
  );
}
