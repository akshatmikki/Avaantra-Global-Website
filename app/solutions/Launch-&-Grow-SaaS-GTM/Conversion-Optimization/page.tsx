import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Layers,
  Rocket,
  Target,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "SaaS Conversion Optimization Services | Avaantra Global",
  description:
    "Convert more trials, demos, and leads into paying customers. Avaantra Global helps SaaS companies optimize every step of their funnel — from landing pages to onboarding — for predictable, scalable growth.",
};

export default function SaaSConversionOptimizationPage() {
  const framework = [
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Funnel & Behavior Analysis",
      desc: "Analyze drop-offs, user behavior, and conversion leaks across your funnel.",
      outcome: "Clear visibility into what’s hurting conversions",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "Landing Page & Website Optimization",
      desc: "Improve copy, UX, speed, trust signals, and CTAs.",
      outcome: "20–50% higher conversion from the same traffic",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Onboarding & Activation Optimization",
      desc: "Fix signup flows, onboarding UX, nudges, and feature discovery.",
      outcome: "2–3X faster activation and better retention",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Pricing & A/B Testing",
      desc: "Test pricing, plans, messaging, and psychological triggers.",
      outcome: "Higher plan adoption and smoother upgrades",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Turn More Visitors and Trials into Paying Customers
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10">
            Your SaaS is getting attention — but conversions are inconsistent.
            We optimize every step of your funnel so more users convert, stay,
            and pay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Conversion Audit
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How We Increase Conversions
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem Most SaaS Companies Face
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Traffic is coming in. Signups are happening. Revenue isn’t.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Trial users don’t activate",
                "Demos don’t convert to paid",
                "Landing pages get traffic but no action",
                "Pricing pages confuse buyers",
                "Marketing spend isn’t turning into revenue",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                The Issue Isn’t Traffic
              </h3>
              <p className="text-gray-600">
                It’s your conversion system — or the lack of one. That’s what we
                fix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Higher Conversions, Predictable Growth
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "2–3X trial-to-paid conversion",
              "20–40% more demo signups",
              "25–50% onboarding completion lift",
              "Lower churn, higher LTV",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-600 font-semibold">
            You don’t need more traffic — you need more traction.
          </p>
        </div>
      </section>

      {/* Framework */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our SaaS Conversion Optimization Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven, test-driven system blending analytics, UX, psychology,
              and experimentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {framework.map((item, idx) => (
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
      {/* Why Choose Avaantra */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why SaaS Founders & CMOs Choose Avaantra
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don’t do surface-level design tweaks. We build conversion
              systems that scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Deep SaaS funnel expertise",
              "AI-assisted data & behavior analysis",
              "Conversion psychology + UX experience",
              "Sprint-based delivery model",
              "Transparent dashboards & reporting",
              "Focus on measurable outcomes, not opinions",
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
      {/* CRO Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From Insights to Measurable Impact
            </h2>
            <p className="text-lg text-purple-100">
              CRO done as a system, not a one-time experiment
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Discovery & Audit",
                desc: "Funnel, pages, trials, and data review",
              },
              {
                step: "2",
                title: "Hypothesis & Strategy",
                desc: "Identify quick wins & leverage points",
              },
              {
                step: "3",
                title: "Implement & Test",
                desc: "Design, copy, UX & A/B tests",
              },
              {
                step: "4",
                title: "Validate & Report",
                desc: "Insights, learnings & results",
              },
              {
                step: "5",
                title: "Scale Optimization",
                desc: "Continuous CRO as a system",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-purple-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-purple-100">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-purple-200 mt-10 font-semibold">
            Outcome: Consistent improvement in signups, trials, and revenue —
            month over month
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
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "CRO Sprint (Fixed Scope)",
                bestFor: "SaaS under $1M ARR",
                work: "4-week optimization cycle",
                outcome: "Quick, measurable conversion lift",
              },
              {
                title: "Ongoing CRO Retainer",
                bestFor: "Growth-stage SaaS",
                work: "Monthly testing & UX iteration",
                outcome: "Compounding conversion gains",
              },
              {
                title: "Hybrid Growth Pod",
                bestFor: "CRO + Marketing teams",
                work: "Cross-functional execution pod",
                outcome: "End-to-end optimization",
              },
              {
                title: "Audit + Training Package",
                bestFor: "In-house teams",
                work: "Full-funnel audit + enablement",
                outcome: "Empowered internal growth",
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
            All plans include weekly dashboards, A/B test documentation,
            heatmaps, data insights, and a dedicated CRO specialist.
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What SaaS Founders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We improved trial-to-paid conversions by 120% in 3 months. Avaantra’s CRO process is gold.",
                by: "Founder, Productivity SaaS (UK)",
              },
              {
                quote:
                  "Their mix of data and psychology turned our landing pages into high-converting assets.",
                by: "CMO, FinTech SaaS (USA)",
              },
              {
                quote:
                  "It felt like unlocking revenue we already had but couldn’t reach.",
                by: "CTO, B2B SaaS (India)",
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
      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              FAQs — Before You Optimize
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How long before we see results?",
                a: "Most clients see measurable conversion lift in 30–45 days.",
              },
              {
                q: "Can you work with our existing design or marketing team?",
                a: "Yes. We integrate seamlessly and share insights weekly.",
              },
              {
                q: "Do you use specific CRO tools?",
                a: "Yes — Hotjar, GA4, VWO, Mixpanel, Amplitude, plus our own analytics stack.",
              },
              {
                q: "What if our traffic is low?",
                a: "We combine CRO with demand generation strategies when needed.",
              },
              {
                q: "Do you optimize both website and in-app flows?",
                a: "Absolutely. Web, product, email — all conversion touchpoints.",
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

      {/* Case Study */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Case Study: Boosting Conversions for a B2B SaaS Platform
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">Workflow SaaS (Singapore)</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                High trial signups, low paid conversion (7%)
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Optimized onboarding, pricing page, and automated nurture flows
              </p>
            </div>

            <div>
              <p className="font-bold mb-4 text-green-600">Results</p>
              <ul className="space-y-3">
                {[
                  "2.7X conversion (7% → 19%)",
                  "+28% retention after 3 months",
                  "1.8X increase in ARR",
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

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Double Your SaaS Conversion Rate?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Your product already attracts attention. We help you convert it into
            predictable, recurring revenue.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="cursor-pointer group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Conversion Audit
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
