import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Layers,
  PenTool,
  Code,
  Bug,
  BarChart,
} from "lucide-react";

export const metadata = {
  title: "MVP Development & Validation Services for Startups | Avaantra Global",
  description:
    "Turn your idea into a market-ready MVP in 4–8 weeks. Avaantra Global helps startups design, build, and validate MVPs fast — with real users, data-driven feedback, and predictable outcomes.",
};

export default function MVPValidationPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Turn Your Startup Idea Into a Working MVP —
            <br />
            Fast, Smart, and Validated
          </h1>

          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10">
            Building from scratch is slow, expensive, and risky.
            <br />
            We help founders design, build, and validate MVPs in{" "}
            <strong>4–8 weeks</strong> — so you test real traction before
            investing big.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free MVP Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How We Validate Your Idea
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

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Teams build features no one asked for",
                "Development drags on while budgets drain",
                "MVP launches after the market has moved on",
                "Months of effort with zero validation",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-700 mb-4">The issue isn’t your vision.</p>
              <p className="text-gray-700 mb-6">
                It’s building too much, too slow, without proof.
              </p>

              <p className="font-semibold text-dark">
                You don’t need a perfect product.
                <br />
                You need a validated MVP that gets real feedback fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Live MVP in 4–8 Weeks — With Real Validation
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "4–8 week MVP delivery",
              "Real-user validation",
              "Fixed scope & fixed cost",
              "Cloud-ready scalable architecture",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            Outcome: Launch fast, learn faster, and build with confidence — not
            assumptions.
          </p>
        </div>
      </section>

      {/* Framework */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our MVP Development & Validation Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach combining design thinking, agile execution,
              and market testing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Layers className="w-8 h-8 text-purple-600" />,
                title: "Product Discovery & Research",
                desc: "Define users, pain points, value proposition, and roadmap.",
                outcome: "Clear product blueprint before development",
              },
              {
                icon: <PenTool className="w-8 h-8 text-purple-600" />,
                title: "UI/UX Design & Prototyping",
                desc: "Wireframes, prototypes, and intuitive user flows.",
                outcome: "Strong first impressions & usability",
              },
              {
                icon: <Code className="w-8 h-8 text-purple-600" />,
                title: "Agile MVP Development",
                desc: "Sprint-based development using modern tech stacks.",
                outcome: "Working MVP built fast and secure",
              },
              {
                icon: <Bug className="w-8 h-8 text-purple-600" />,
                title: "QA, Testing & Launch",
                desc: "Automation, UAT, beta launch, and monitoring.",
                outcome: "Stable, launch-ready product",
              },
              {
                icon: <BarChart className="w-8 h-8 text-purple-600" />,
                title: "Market Validation & Feedback",
                desc: "Analytics, adoption metrics, and qualitative insights.",
                outcome: "Proof for investors or iteration decisions",
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
                <p className="text-sm font-semibold text-purple-700">
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
              "MVP in 4–8 weeks",
              "Fixed price & timeline",
              "Full-stack product & marketing team",
              "Built-in validation strategy",
              "Post-launch scaling support",
              "Growth-first mindset",
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
            We don’t just build products — we help you build proof.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From Idea to Market Validation
            </h2>
            <p className="text-purple-200">
              A proven, sprint-based path from concept to real traction.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Discovery & Strategy",
                desc: "Define idea, audience, and goals (Week 1).",
              },
              {
                step: "2",
                title: "Design & Prototype",
                desc: "Clickable UI/UX prototypes for fast feedback (Weeks 2–3).",
              },
              {
                step: "3",
                title: "MVP Development",
                desc: "Core features built in agile sprints (Weeks 3–6).",
              },
              {
                step: "4",
                title: "Testing & Launch",
                desc: "QA, fixes, and live deployment (Week 7).",
              },
              {
                step: "5",
                title: "Validation & Feedback",
                desc: "Real usage data and insights (Week 8).",
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
            Outcome: Live MVP + market validation + funding readiness.
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
              Choose the right model based on speed, validation, and growth
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "MVP Fast Track",
                bestFor: "Founders validating a new idea",
                how: "4–8 week fixed-cost MVP build",
                outcome: "Live MVP with early traction",
              },
              {
                title: "MVP + Validation Retainer",
                bestFor: "Early startups testing markets",
                how: "MVP build plus analytics & insights",
                outcome: "Data-backed validation",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Funded startups scaling MVP",
                how: "Full tech + product sprint team",
                outcome: "Continuous feature growth",
              },
              {
                title: "Hybrid Tech + Marketing Pod",
                bestFor: "Launch + GTM together",
                how: "Engineering + growth experts",
                outcome: "Launch → validate → grow",
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
            All engagements include IP ownership, dedicated PM, sprint reports,
            and live demos.
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
                  "Avaantra helped us turn our idea into a live MVP in 6 weeks.",
                by: "Founder, EdTech Startup (India)",
              },
              {
                quote:
                  "We validated demand early and saved thousands in dev costs.",
                by: "CTO, FinTech SaaS (Singapore)",
              },
              {
                quote: "Their speed made us investor-ready in record time.",
                by: "CEO, AI Startup (USA)",
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
        <div className="max-w-4xl mx-auto bg-purple-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-dark">
            Case Study: From Idea to MVP to Funding
          </h2>

          <p className="mb-2">
            <strong>Client:</strong> HealthTech Startup (India)
          </p>
          <p className="mb-2">
            <strong>Challenge:</strong> MVP needed for investor pitch in 6 weeks
          </p>
          <p className="mb-6">
            <strong>Solution:</strong> Mobile + web MVP with analytics
          </p>

          <ul className="space-y-3 font-semibold">
            <li>✅ Live MVP in 6 weeks</li>
            <li>✅ 1,200 beta users in 30 days</li>
            <li>✅ $200K angel funding secured</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — Before You Build
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Do I need a technical background?",
                a: "No. We guide you through every step end-to-end.",
              },
              {
                q: "Can you help after MVP launch?",
                a: "Yes. We support GTM, scaling, and funding readiness.",
              },
              {
                q: "What if my idea isn’t fully clear?",
                a: "We help refine it during discovery and research.",
              },
              {
                q: "Who owns the IP and code?",
                a: "You do. 100% ownership, always.",
              },
              {
                q: "What if I need changes after launch?",
                a: "We offer flexible post-launch sprints and scaling.",
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
            Ready to Build and Validate Your MVP in 4–8 Weeks?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Build what matters. Validate fast. Scale with confidence.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Book a Free MVP Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </main>
  );
}
