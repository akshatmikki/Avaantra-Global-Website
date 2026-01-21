import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Layers,
  PenTool,
  Code,
  Bug,
  BarChart,
} from "lucide-react";

export const metadata = {
  title: "Fast MVP Development & Launch Services | Avaantra Global",
  description:
    "Validate your SaaS or startup idea faster with Avaantra Global. Get a fully functional MVP in 4–8 weeks — designed, built, and launched for real users with predictable outcomes.",
};

export default function FastMVPPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Launch Your MVP in Weeks — Not Months
          </h1>

          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10">
            You have the idea, the vision, and the market need.
            <br />
            We help you design, build, and launch a real MVP in{" "}
            <strong>4–8 weeks</strong> — fast, validated, and investor-ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free MVP Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How We Launch Faster
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem You’re Facing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Hiring a dev team takes months",
                "Freelancers overpromise and underdeliver",
                "Costs spiral out of control",
                "You manage tech instead of the business",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="font-semibold mb-4">And every delay means:</p>
              <ul className="space-y-2 text-gray-700">
                <li>❌ Missed market timing</li>
                <li>❌ Missed investor interest</li>
                <li>❌ Missed first-mover advantage</li>
              </ul>

              <p className="mt-6 font-semibold text-dark">
                You don’t need more developers.
                <br />
                You need a predictable MVP launch system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: From Idea to Live MVP in 4–8 Weeks
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "4–8 week MVP delivery",
              "Real-user validation",
              "Scalable production-ready code",
              "Fixed scope & transparent pricing",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            Outcome: A live, investor-ready MVP with real market feedback — not
            a prototype collecting dust.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our Fast MVP Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We build only what matters — fast, focused, and future-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Layers className="w-8 h-8 text-purple-600" />,
                title: "Product Discovery & Scoping",
                desc: "Define core problems, priority features, user journeys, and roadmap.",
                outcome: "Clear product vision before development starts",
              },
              {
                icon: <PenTool className="w-8 h-8 text-purple-600" />,
                title: "UI/UX Design & Prototyping",
                desc: "Wireframes, clickable prototypes, and brand-aligned UI design.",
                outcome: "High adoption with minimal friction",
              },
              {
                icon: <Code className="w-8 h-8 text-purple-600" />,
                title: "Rapid MVP Development",
                desc: "Agile sprint-based development with modern tech stacks.",
                outcome: "Fully functional MVP built fast",
              },
              {
                icon: <Bug className="w-8 h-8 text-purple-600" />,
                title: "QA, Testing & Launch",
                desc: "Automation, compatibility testing, and smooth production launch.",
                outcome: "Stable launch that impresses users & investors",
              },
              {
                icon: <BarChart className="w-8 h-8 text-purple-600" />,
                title: "Validation & Analytics",
                desc: "User tracking, heatmaps, and funnel insights.",
                outcome: "Real data to guide next iterations or pitches",
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
              "Proven MVP launch framework",
              "4–8 week guaranteed delivery",
              "Fixed-scope, fixed-cost model",
              "Dedicated product manager",
              "Scalable codebase for growth",
              "Post-launch support & momentum",
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
            You don’t just get an MVP. You get momentum.
          </p>
        </div>
      </section>

      {/* MVP Launch Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Fast MVP Launch Process
            </h2>
            <p className="text-purple-200">
              A refined system to build, validate, and launch without chaos.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Discovery Call",
                desc: "Define vision, goals, and core features (1–2 days).",
              },
              {
                step: "2",
                title: "Wireframes & Blueprint",
                desc: "Clickable designs and MVP roadmap (Week 1).",
              },
              {
                step: "3",
                title: "Sprint Development",
                desc: "Agile builds with demos every 2 weeks (Weeks 2–6).",
              },
              {
                step: "4",
                title: "QA & Beta Launch",
                desc: "Testing, fixes, and real-user launch (Week 7).",
              },
              {
                step: "5",
                title: "Validation & Feedback",
                desc: "Usage tracking and investor readiness (Week 8).",
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
            Outcome: Live MVP in 4–8 weeks, feedback-backed roadmap, scalable
            foundation.
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
              Choose the model that matches your speed and complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "MVP Fast Track (Fixed Price)",
                bestFor: "Startups & SaaS founders",
                how: "Fixed scope, delivered in 4–8 weeks",
                outcome: "Predictable cost & timeline",
              },
              {
                title: "MVP + Growth Retainer",
                bestFor: "Founders seeking validation & traction",
                how: "MVP + GTM + analytics",
                outcome: "Faster adoption & learning",
              },
              {
                title: "Managed Agile Pod",
                bestFor: "Complex or multi-feature MVPs",
                how: "Dedicated sprint team managed by Avaantra",
                outcome: "2–3X faster execution",
              },
              {
                title: "Tech + Marketing Hybrid Pod",
                bestFor: "Build + launch together",
                how: "Engineers + marketers in one pod",
                outcome: "End-to-end execution",
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
            All models include NDA, IP ownership, dashboards, and fixed sprint
            pricing.
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
                  "We had our SaaS MVP live in 6 weeks — it felt like a finished product.",
                by: "Founder, FinTech Startup (UK)",
              },
              {
                quote:
                  "Avaantra helped us validate early and raise funding in 2 months.",
                by: "Co-Founder, EdTech Platform (India)",
              },
              {
                quote:
                  "They understood our idea better than we did. MVP went live fast.",
                by: "CTO, HealthTech Startup (Singapore)",
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
            Case Study: From Idea to Live Product in 6 Weeks
          </h2>

          <p className="mb-2">
            <strong>Client:</strong> Early-stage HealthTech Startup
          </p>
          <p className="mb-2">
            <strong>Challenge:</strong> No tech team, tight funding, investor
            deadline
          </p>
          <p className="mb-6">
            <strong>Solution:</strong> Cross-platform MVP (Flutter + Node) with
            analytics
          </p>

          <ul className="space-y-3 font-semibold">
            <li>✅ MVP live in 6 weeks</li>
            <li>✅ 1,200 beta signups in 30 days</li>
            <li>✅ $250K seed funding secured</li>
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
                q: "Do I need technical knowledge?",
                a: "No. We guide you through design, development, and launch.",
              },
              {
                q: "Can I add features later?",
                a: "Yes. The MVP is built on a scalable codebase.",
              },
              {
                q: "How much does a Fast MVP cost?",
                a: "Most MVPs range between $8K–$25K depending on scope.",
              },
              {
                q: "Who owns the IP and code?",
                a: "You do. 100% ownership, always.",
              },
              {
                q: "Can you help after launch?",
                a: "Yes. We offer post-MVP growth and GTM retainers.",
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
            Launch Your MVP in Weeks, Not Months
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Your idea deserves to go live — not sit in a document.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Book a Free MVP Strategy Call
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </main>
  );
}
