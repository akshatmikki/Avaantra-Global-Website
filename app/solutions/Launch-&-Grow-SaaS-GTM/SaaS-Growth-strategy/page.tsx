import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Layers,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "SaaS Growth Strategy Services | Predictable Revenue Systems by Avaantra Global",
  description:
    "Avaantra Global helps SaaS companies design and execute growth strategies that drive predictable signups, conversions, and recurring revenue — powered by AI, automation, and proven GTM frameworks.",
};

export default function SaaSGrowthStrategyPage() {
  const framework = [
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "ICP & Buyer Journey Mapping",
      desc: "Define your ideal customers, buying triggers, and friction points across the funnel.",
      outcome: "Sharper targeting and higher conversion rates",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "Product Positioning & Messaging",
      desc: "Clarify differentiation, category positioning, and product storytelling.",
      outcome: "Messaging that feels made for your audience",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Demand Generation Systems",
      desc: "SEO, paid acquisition, outbound, referrals, and compounding channels.",
      outcome: "Consistent, multi-channel qualified demand",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Trial-to-Paid Conversion",
      desc: "Onboarding, lifecycle emails, in-app nudges, and analytics.",
      outcome: "2–3X improvement in trial conversions",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-slide-up">
            Turn Your SaaS Growth From Guesswork to a Predictable System
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10 animate-slide-up delay-100">
            If your SaaS growth feels random — one month booming, the next
            silent — it’s not your product. It’s your system. Avaantra Global
            builds growth engines that convert traffic into revenue,
            predictably.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <Button
              size="lg"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free SaaS Growth Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              See How Our Framework Works
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem Most SaaS Founders Face
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You’ve built the product. Maybe even landed early users. But
              scaling feels chaotic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4">
              {[
                "Ad spend with no clear MRR impact",
                "Content that doesn’t convert",
                "Trials that don’t stick",
                "Data without direction",
                "Reactive, trend-chasing growth",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-red-500 mt-1">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-dark">
                What You Actually Need
              </h3>
              <p className="text-gray-600 mb-4">
                Not more marketing. A connected SaaS growth engine that aligns
                product, marketing, and revenue.
              </p>
              <p className="font-semibold text-purple-700">
                That’s exactly what we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Predictable, Compounding SaaS Growth
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "3–5X qualified signups",
              "2–3X trial-to-paid conversion",
              "30–40% retention lift",
              "Consistent MRR growth",
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
        </div>
      </section>

      {/* Framework */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our SaaS Growth Strategy Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategy, systems, and execution — designed to scale ARR, not
              vanity metrics.
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

      {/* Why SaaS Founders Choose Avaantra */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why SaaS Founders Choose Avaantra Global
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine marketing science, SaaS experience, and AI automation —
              and focus on outcomes, not activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "20+ years of SaaS GTM & marketing experience",
              "AI-assisted analytics & automation setup",
              "Predictable, transparent growth roadmaps",
              "Hybrid team of strategists, marketers & data engineers",
              "Sprint-based delivery for constant progress",
              "No random acts of marketing — only systems",
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From Chaos to Growth Engine
            </h2>
            <p className="text-lg text-purple-100">
              A clear, sprint-based path to predictable SaaS growth
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Growth Audit",
                desc: "Assess funnel, messaging & data systems",
              },
              {
                step: "2",
                title: "ICP & Strategy Blueprint",
                desc: "Define positioning & value metrics",
              },
              {
                step: "3",
                title: "Channel & System Setup",
                desc: "Automation, campaigns & tracking",
              },
              {
                step: "4",
                title: "Pilot Sprint",
                desc: "Test channels, offers & messaging",
              },
              {
                step: "5",
                title: "Optimize & Scale",
                desc: "Double down on what works",
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
            Outcome: A full-funnel SaaS growth engine ready to scale predictably
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
                title: "Growth Audit Sprint",
                bestFor: "SaaS under $1M ARR",
                work: "2-week audit + roadmap",
                outcome: "Identify hidden growth levers",
              },
              {
                title: "GTM Strategy + Setup",
                bestFor: "SaaS launching or pivoting",
                work: "End-to-end GTM plan",
                outcome: "Fast market entry",
              },
              {
                title: "Growth Retainer",
                bestFor: "Scaling SaaS ($1M–$10M ARR)",
                work: "Monthly optimization & execution",
                outcome: "Predictable pipeline",
              },
              {
                title: "Hybrid Growth Pod",
                bestFor: "Tech + marketing teams",
                work: "Managed execution",
                outcome: "2–3X faster implementation",
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
            All plans include growth dashboards, transparent sprint reporting,
            and a dedicated Growth Strategist.
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
                  "Our MRR doubled in 6 months. Avaantra helped us focus on what actually mattered.",
                by: "Founder, B2B SaaS (USA)",
              },
              {
                quote:
                  "They brought clarity to chaos. We finally have a predictable funnel.",
                by: "CMO, FinTech SaaS (UK)",
              },
              {
                quote:
                  "The hybrid team model is genius — marketers, data, and automation in one.",
                by: "CTO, AI SaaS Startup (India)",
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Case Study: Building a Predictable Growth Engine
            </h2>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-2">
                Client
              </p>
              <p className="font-bold text-lg text-dark mb-4">
                B2B SaaS Product (Singapore)
              </p>

              <p className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-2">
                Challenge
              </p>
              <p className="text-gray-700 mb-4">
                Unstable MRR, high churn, unclear ICP
              </p>

              <p className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-2">
                Solution
              </p>
              <p className="text-gray-700">
                Avaantra built a growth playbook — refined ICP, automation, and
                conversion optimization.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-4">
                Results
              </p>
              <ul className="space-y-3">
                {[
                  "+3.8X trials",
                  "+2.4X trial-to-paid conversions",
                  "+38% retention rate increase",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-dark font-semibold"
                  >
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              FAQs — Before You Build Your Growth Engine
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Will this work for early-stage SaaS?",
                a: "Yes. We adapt strategies for pre-seed to growth-stage companies.",
              },
              {
                q: "How soon can we see results?",
                a: "Most clients see measurable growth within 6–10 weeks.",
              },
              {
                q: "Can you integrate with our current marketing stack?",
                a: "Yes. We work with HubSpot, Zoho, Salesforce, Marketo, and others.",
              },
              {
                q: "What makes your approach different?",
                a: "We connect product, marketing, and automation into one predictable system.",
              },
              {
                q: "Can you handle execution too?",
                a: "Yes — we offer managed pods for full-funnel execution.",
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
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Turn Your SaaS Growth Into a Predictable System?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            You focus on product innovation. We make sure the market actually
            adopts it.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free SaaS Growth Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
