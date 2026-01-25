import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Target,
  MessageSquare,
  Megaphone,
  Briefcase,
  BarChart,
} from "lucide-react";

export const metadata = {
  title: "Startup Go-To-Market (GTM) Strategy Services | Avaantra Global",
  description:
    "Launch your startup with confidence. Avaantra Global helps you design and execute a winning Go-To-Market (GTM) strategy — from positioning and messaging to campaigns and customer acquisition systems.",
};

export default function GTMStrategyPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Launch Your Startup with a GTM Strategy
            <br />
            That Wins the Market
          </h1>

          <p className="text-lg md:text-xl text-emerald-100 max-w-4xl mx-auto mb-10">
            You’ve built something valuable — now it’s time to make sure the
            right people see it, understand it, and buy it.
            <br />
            We help startups launch smarter with a{" "}
            <strong>clear, data-backed Go-To-Market strategy</strong> that turns
            launches into traction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer group bg-white text-emerald-700 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Book a Free GTM Strategy Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How We Launch Startups
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem Startups Face
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-emerald-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Unclear buyer and ICP",
                "Messaging that doesn’t resonate",
                "Campaigns that get clicks, not customers",
                "Sales and marketing working in silos",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-700 mb-4">Your product has value.</p>
              <p className="text-gray-700 mb-6">
                But your audience doesn’t see it yet.
              </p>

              <p className="font-semibold text-dark">
                That’s where strategy beats noise.
                <br />
                And where Avaantra steps in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Clarity, Traction & Predictable Launch Success
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "End-to-end GTM roadmap",
              "Clear positioning & messaging",
              "Multi-channel launch system",
              "Measurable growth metrics",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            Outcome: Confident launches, qualified users, and early revenue —
            without guesswork.
          </p>
        </div>
      </section>

      {/* Framework */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our Go-To-Market Strategy Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We turn launch plans into repeatable growth systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-emerald-600" />,
                title: "Market & Competitor Research",
                desc: "Market sizing, ICP definition, competitor mapping.",
                outcome: "Clear market positioning",
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
                title: "Positioning & Messaging Strategy",
                desc: "UVP, differentiation, and narrative clarity.",
                outcome: "Messaging that converts",
              },
              {
                icon: <Megaphone className="w-8 h-8 text-emerald-600" />,
                title: "Channel & Campaign Planning",
                desc: "Channel selection, content, ads, and budgets.",
                outcome: "Focused launch roadmap",
              },
              {
                icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
                title: "Sales Enablement & Lead Systems",
                desc: "Funnels, lead scoring, sales playbooks.",
                outcome: "Predictable deal flow",
              },
              {
                icon: <BarChart className="w-8 h-8 text-emerald-600" />,
                title: "Growth Analytics & Optimization",
                desc: "Dashboards, attribution, testing, optimization.",
                outcome: "Scalable growth decisions",
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
                <p className="text-sm font-semibold text-emerald-700">
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
              Why Founders Trust Avaantra Global for GTM
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "20+ years of startup marketing experience",
              "AI-driven analytics & automation",
              "Cross-functional GTM teams",
              "Sprint-based execution model",
              "Fixed scope & predictable timelines",
              "Revenue-first mindset",
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
            You focus on the product. We make sure the market buys it.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From Launch Idea to Market Leadership
            </h2>
            <p className="text-emerald-200">
              A structured GTM system designed for traction, not guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Discovery & GTM Audit",
                desc: "Market, competitors, and customer journey analysis (Week 1).",
              },
              {
                step: "2",
                title: "Strategy Blueprint",
                desc: "Positioning, messaging, and channel plan (Weeks 2–3).",
              },
              {
                step: "3",
                title: "System Setup",
                desc: "Automation, tracking, CRM, and lead systems (Weeks 3–4).",
              },
              {
                step: "4",
                title: "Campaign Launch",
                desc: "Pre-launch and launch execution (Weeks 5–6).",
              },
              {
                step: "5",
                title: "Measure & Scale",
                desc: "Performance tracking and GTM optimization (Weeks 7–8).",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-emerald-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-emerald-100">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-emerald-200 mt-10 font-semibold">
            Outcome: Confident launch, measurable traction, and scalable GTM
            systems.
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
              Choose how hands-on you want Avaantra to be.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "GTM Fast Track",
                bestFor: "Early-stage startups",
                how: "6–8 week end-to-end GTM launch",
                outcome: "Live traction & validated launch",
              },
              {
                title: "Managed GTM Pod",
                bestFor: "Funded startups",
                how: "Tech + marketing hybrid sprint team",
                outcome: "Speed with execution power",
              },
              {
                title: "Consulting + Execution Retainer",
                bestFor: "Scaling startups",
                how: "Strategy plus monthly growth campaigns",
                outcome: "Continuous traction",
              },
              {
                title: "Audit + Training",
                bestFor: "In-house teams",
                how: "GTM playbooks and process setup",
                outcome: "Internal team enablement",
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
            All models include dashboards, reporting, dedicated strategists, and
            tool integration.
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
                  "Avaantra helped us go from zero to 1,000 active users in 60 days.",
                by: "Founder, FinTech Startup (India)",
              },
              {
                quote:
                  "They built a complete GTM system — messaging, automation, and growth.",
                by: "CTO, AI SaaS (USA)",
              },
              {
                quote:
                  "Structured, data-backed, and effective. Our launch finally made sense.",
                by: "CEO, HealthTech Startup (Singapore)",
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
        <div className="max-w-4xl mx-auto bg-emerald-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-dark">
            Case Study: From Idea to Market Traction
          </h2>

          <p className="mb-2">
            <strong>Client:</strong> SaaS Startup (Singapore)
          </p>
          <p className="mb-2">
            <strong>Challenge:</strong> Needed GTM traction before investor demo
          </p>
          <p className="mb-6">
            <strong>Solution:</strong> Positioning, CRM automation, and
            pre-launch funnel
          </p>

          <ul className="space-y-3 font-semibold">
            <li>✅ 2,300 beta users in 45 days</li>
            <li>✅ +38% trial-to-paid conversion</li>
            <li>✅ Seed funding secured post-launch</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — Before You Launch
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Is this suitable for pre-launch startups?",
                a: "Yes. We design both pre-launch and post-launch GTM plans.",
              },
              {
                q: "How soon can we see results?",
                a: "Typically within 4–8 weeks of campaign execution.",
              },
              {
                q: "Can you execute campaigns as well?",
                a: "Yes. We handle strategy, automation, content, and ads.",
              },
              {
                q: "What if we already have a team?",
                a: "We collaborate or manage specific GTM components.",
              },
              {
                q: "Do you help with investor traction reports?",
                a: "Yes. We provide GTM validation metrics for fundraising.",
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
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Startup the Smart Way?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Turn your launch into a system — not a gamble.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="cursor-pointer group bg-white text-emerald-700 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free GTM Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
