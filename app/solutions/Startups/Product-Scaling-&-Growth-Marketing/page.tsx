import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  BarChart,
  Target,
  Megaphone,
  Workflow,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title:
    "Startup Product Scaling & Growth Marketing Services | Avaantra Global",
  description:
    "Scale your startup from MVP to market leader. Avaantra Global helps startups accelerate growth with full-funnel marketing, automation, and data-driven systems that drive predictable revenue.",
};

export default function ProductScalingGrowthPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Scale Your Product.
            <br />
            Grow Predictably.
            <br />
            Win Your Market.
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            You’ve launched your MVP — now growth matters.
            <br />
            We help startups turn early traction into{" "}
            <strong>repeatable, scalable growth</strong> using proven growth
            frameworks, automation, and data-driven execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-blue-700 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Growth Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How We Scale Startups
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem Scaling Startups Face
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-blue-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Growth stalls after early adoption",
                "Paid acquisition becomes expensive",
                "Customer acquisition isn’t predictable",
                "No clarity on which channel drives real ROI",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-700 mb-4">
                You’ve outgrown startup hustle.
              </p>
              <p className="text-gray-700 mb-6">
                Now you need structure, systems, and sustainable growth.
              </p>

              <p className="font-semibold text-dark">
                That’s exactly what Avaantra Global builds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: From MVP to Market-Leading Growth
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "3–5X user growth",
              "2–3X improvement in retention",
              "Lower CAC",
              "Consistent MRR growth",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            We don’t run campaigns. We build growth engines.
          </p>
        </div>
      </section>

      {/* Framework */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our Product Scaling & Growth Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sustainable growth built on data, automation, and retention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart className="w-8 h-8 text-blue-600" />,
                title: "Product Growth Audit & Analytics",
                desc: "Funnel analysis, CAC vs LTV, churn and conversion bottlenecks.",
                outcome: "Clear roadmap for scale",
              },
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: "Growth Strategy & System Design",
                desc: "Full-funnel strategy from acquisition to retention.",
                outcome: "Predictable growth framework",
              },
              {
                icon: <Megaphone className="w-8 h-8 text-blue-600" />,
                title: "Demand Generation & Performance Marketing",
                desc: "Paid media, SEO, partnerships, and retargeting.",
                outcome: "Lower CAC & consistent inbound",
              },
              {
                icon: <Workflow className="w-8 h-8 text-blue-600" />,
                title: "Marketing Automation & CRM Scaling",
                desc: "Lead nurturing, scoring, and product-triggered workflows.",
                outcome: "24/7 automated growth",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: "Retention, Expansion & Monetization",
                desc: "Upsells, referrals, expansion revenue systems.",
                outcome: "Higher LTV & compounding MRR",
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
                <p className="text-sm font-semibold text-blue-700">
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
              Why Founders & CMOs Choose Avaantra Global
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Startup-to-scaleup growth playbooks",
              "AI-powered analytics & optimization",
              "Full-stack growth team",
              "Sprint-based delivery with KPIs",
              "Predictable ROI focus",
              "No vanity metrics",
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
            You focus on product innovation. We scale adoption.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From MVP to Growth Machine
            </h2>
            <p className="text-blue-200">
              A structured system to turn traction into compounding growth.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Growth Audit",
                desc: "Analyze funnel, audience, and revenue data (Week 1).",
              },
              {
                step: "2",
                title: "Growth Blueprint",
                desc: "Define scaling model, KPIs, and roadmap (Weeks 2–3).",
              },
              {
                step: "3",
                title: "System Setup",
                desc: "Automation, tracking, and campaigns (Weeks 3–5).",
              },
              {
                step: "4",
                title: "Pilot Sprint",
                desc: "Test channels, messaging, and offers (Weeks 6–8).",
              },
              {
                step: "5",
                title: "Optimize & Scale",
                desc: "Double down on ROI and build compounding growth.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-blue-200 mt-10 font-semibold">
            Outcome: A measurable, repeatable, and scalable growth system.
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
              Choose how aggressively you want to scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Growth Sprint (Fixed Scope)",
                bestFor: "Post-MVP startups",
                how: "8-week setup & pilot sprint",
                outcome: "Fast traction boost",
              },
              {
                title: "Growth Retainer",
                bestFor: "Funded startups",
                how: "Monthly optimization & execution",
                outcome: "Compounding, predictable growth",
              },
              {
                title: "Hybrid Growth Pod",
                bestFor: "Tech + marketing scaling",
                how: "PM, data, ads, CRM pod",
                outcome: "End-to-end growth system",
              },
              {
                title: "Audit + Advisory",
                bestFor: "In-house teams",
                how: "Strategy, dashboards & guidance",
                outcome: "Empowered internal growth team",
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
            All models include a dedicated growth strategist, dashboards,
            CAC/LTV tracking, and continuous optimization.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              What Startup Founders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "We grew from 500 to 2,800 paying users in 90 days.",
                by: "Founder, Productivity SaaS (India)",
              },
              {
                quote:
                  "They connected product, marketing, and automation into one engine.",
                by: "CMO, FinTech App (Singapore)",
              },
              {
                quote: "Every decision is data-backed. No guesswork.",
                by: "CEO, EdTech Platform (USA)",
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
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-dark">
            Case Study: Scaling From MVP to Market Leader
          </h2>

          <p className="mb-2">
            <strong>Client:</strong> B2B SaaS Startup (Singapore)
          </p>
          <p className="mb-2">
            <strong>Challenge:</strong> Growth stalled after MVP launch
          </p>
          <p className="mb-6">
            <strong>Solution:</strong> Multi-channel demand gen, automation,
            retention
          </p>

          <ul className="space-y-3 font-semibold">
            <li>✅ 4.3X user growth in 6 months</li>
            <li>✅ 35% reduction in CAC</li>
            <li>✅ +42% increase in LTV</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — Before You Scale
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "When should we start scaling?",
                a: "After product-market fit or consistent early traction.",
              },
              {
                q: "Can you work with our internal team?",
                a: "Yes. We can collaborate or take full ownership.",
              },
              {
                q: "How soon can we see results?",
                a: "Typically within 6–10 weeks of execution.",
              },
              {
                q: "Do you manage paid ads?",
                a: "Yes. We handle creatives, performance, and budgets.",
              },
              {
                q: "Can you help with investor growth reports?",
                a: "Yes. We build investor-ready dashboards and metrics.",
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Predictably and Grow Faster?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Turn growth into a system that compounds every month.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="group bg-white text-blue-700 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Book a Free Growth Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </main>
  );
}
