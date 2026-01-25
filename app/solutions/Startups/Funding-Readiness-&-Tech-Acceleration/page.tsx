import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  BarChart,
  TrendingUp,
  FileText,
  Rocket,
} from "lucide-react";

export const metadata = {
  title:
    "Startup Funding Readiness & Tech Acceleration Services | Avaantra Global",
  description:
    "Become investor-ready faster. Avaantra Global helps startups build scalable tech, validate traction, and prepare investor-ready decks, metrics, and systems for confident fundraising.",
};

export default function FundingReadinessPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get Investor-Ready —
            <br />
            Build Tech, Traction & Trust
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            You’ve built your MVP. You’re seeing traction.
            <br />
            Now investors want proof — not promises.
            <br />
            Avaantra helps you prepare the{" "}
            <strong>technology, metrics, and systems</strong> that make funding
            decisions easy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-white text-slate-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Funding Readiness Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How We Make Startups Investor-Ready
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem Founders Face
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Great product, but no data-backed validation",
                "Tech not ready to scale under real usage",
                "Pitch deck lacks traction metrics",
                "Growth story feels unclear or risky",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-700 mb-4">Investors don’t fund ideas.</p>
              <p className="text-gray-700 mb-6">
                They fund proof, readiness, and execution capability.
              </p>

              <p className="font-semibold text-dark">
                You don’t need hype.
                <br />
                You need credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Build Investor Confidence Through Real Readiness
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "Scalable product architecture",
              "Real traction & validation data",
              "Investor-ready metrics",
              "Post-funding scale systems",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            We don’t just make you look ready.
            <br />
            We make you technically and operationally ready.
          </p>
        </div>
      </section>

      {/* Framework */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our Funding Readiness & Tech Acceleration Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The systems investors expect — built before they ask.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-slate-700" />,
                title: "Product & Tech Readiness Audit",
                desc: "Architecture, scalability, DevOps, and compliance review.",
                outcome: "Clear technical readiness roadmap",
              },
              {
                icon: <BarChart className="w-8 h-8 text-slate-700" />,
                title: "Traction & Validation Metrics",
                desc: "MAU, MRR, CAC, LTV, retention, engagement dashboards.",
                outcome: "Investor-grade metrics visibility",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-slate-700" />,
                title: "Growth System Acceleration",
                desc: "Automated acquisition, CRM, and revenue systems.",
                outcome: "Real traction, not projections",
              },
              {
                icon: <FileText className="w-8 h-8 text-slate-700" />,
                title: "Pitch Deck & Funding Collateral",
                desc: "Decks, one-pagers, traction & tech documentation.",
                outcome: "Clear story backed by proof",
              },
              {
                icon: <Rocket className="w-8 h-8 text-slate-700" />,
                title: "Post-Funding Tech Acceleration",
                desc: "Dedicated teams, agile pods, infra scaling.",
                outcome: "Fast execution after funding",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-slate-700">
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
              Why Founders Choose Avaantra Global
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Launch-to-scale startup experience",
              "Tech + GTM under one roof",
              "AI-driven validation systems",
              "Investor-grade documentation",
              "Full-stack post-funding support",
              "Built for long-term scale",
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
            We help investors see what you already know —
            <br />
            that your startup is worth backing.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From MVP to Investor-Ready
            </h2>
            <p className="text-gray-300">
              A structured path to technical credibility, traction, and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Tech & Product Audit",
                desc: "Code quality, performance, and scalability review (Week 1).",
              },
              {
                step: "2",
                title: "Traction Framework Setup",
                desc: "Dashboards and growth metrics tracking (Weeks 2–3).",
              },
              {
                step: "3",
                title: "Validation & Proof",
                desc: "Launch or optimize campaigns to show traction (Weeks 3–5).",
              },
              {
                step: "4",
                title: "Investor Readiness Kit",
                desc: "Pitch deck, reports, and documentation (Weeks 6–7).",
              },
              {
                step: "5",
                title: "Scale & Support",
                desc: "Engineering and growth pods for post-funding scale.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gray-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 mt-10 font-semibold">
            Outcome: A technically sound, data-backed, investor-ready startup.
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
              Choose how deeply you want Avaantra involved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Funding Readiness Sprint",
                bestFor: "Early-stage startups",
                how: "6–8 week audit and validation setup",
                outcome: "Investor-ready metrics and pitch",
              },
              {
                title: "Tech Acceleration Pod",
                bestFor: "Funded startups scaling product",
                how: "Dedicated engineering + DevOps team",
                outcome: "Faster time-to-market",
              },
              {
                title: "Growth + Investor Retainer",
                bestFor: "Post-MVP startups",
                how: "Monthly traction and funding support",
                outcome: "Continuous proof of performance",
              },
              {
                title: "Audit + Advisory",
                bestFor: "Pre-fundraise founders",
                how: "Reports, roadmap, and investor coaching",
                outcome: "Clear funding direction",
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
            All engagements include investor dashboards, readiness reports, and
            a dedicated product & growth advisor.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              What Founders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Avaantra helped us raise $350K in seed funding. The traction reports were game-changing.",
                by: "Founder, EdTech Startup (India)",
              },
              {
                quote:
                  "Their audit showed exactly what investors wanted. We closed 2X faster.",
                by: "CTO, FinTech Startup (Singapore)",
              },
              {
                quote:
                  "They supported us from MVP to Series A. Total confidence boost.",
                by: "CEO, B2B SaaS (USA)",
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
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-dark">
            Case Study: From MVP to $500K Seed Funding
          </h2>

          <p className="mb-2">
            <strong>Client:</strong> HealthTech SaaS (India)
          </p>
          <p className="mb-2">
            <strong>Challenge:</strong> Strong MVP, weak metrics and investor
            trust
          </p>
          <p className="mb-6">
            <strong>Solution:</strong> Product analytics, retention automation,
            and investor pitch support
          </p>

          <ul className="space-y-3 font-semibold">
            <li>✅ $500K seed round closed in 60 days</li>
            <li>✅ 1,800 active users in 45 days</li>
            <li>✅ 3.2X valuation increase</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — Before You Raise
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What stage should we be in?",
                a: "Any stage post-MVP or pre-fundraising. We tailor accordingly.",
              },
              {
                q: "Can you help if we already have investors?",
                a: "Yes. We strengthen reporting and tech for future rounds.",
              },
              {
                q: "How long until we’re investor-ready?",
                a: "Typically 6–8 weeks for full readiness.",
              },
              {
                q: "Do you work across industries?",
                a: "Yes. SaaS, FinTech, HealthTech, EdTech, and more.",
              },
              {
                q: "Can you support during investor meetings?",
                a: "Yes. We provide insights, documentation, and presentation support.",
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
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become Investor-Ready and Scale Confidently?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Walk into investor meetings with proof, not promises.
          </p>
              
              <Link href="/contact">
          <Button
            size="lg"
            variant="secondary"
            className="cursor-pointer group bg-white text-black hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Book a Free Funding Readiness Call
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
