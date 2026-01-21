import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Code,
  Server,
  Smartphone,
  Bug,
  Cloud,
  Brain,
} from "lucide-react";

export const metadata = {
  title:
    "Dedicated Engineering Teams for SaaS & Product Companies | Avaantra Global",
  description:
    "Build, scale, and manage your engineering team without hiring. Avaantra Global provides dedicated, full-time tech teams for SaaS and product companies — fast, flexible, and fully managed.",
};

export default function DedicatedEngineeringTeamsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Build an Expert Engineering Team —
            <br />
            Without the Hiring Risk
          </h1>

          <p className="text-lg md:text-xl text-indigo-100 max-w-4xl mx-auto mb-10">
            Hiring engineers takes forever. Managing them drains your time.
            Scaling delivery feels impossible.
            <br />
            With Avaantra, you get a{" "}
            <strong>full-time, dedicated engineering team</strong> that works
            like your in-house developers — without the overhead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-indigo-700 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Engineering Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How Our Teams Work
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem Product Teams Face
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-indigo-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Hiring skilled developers takes months",
                "Freelancers come and go",
                "Agencies deliver code, not ownership",
                "Internal teams burn out under pressure",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-700 mb-4">Your product needs to scale.</p>
              <p className="text-gray-700 mb-6">
                But your team can’t keep up — and you’re stuck managing chaos.
              </p>

              <p className="font-semibold text-dark">
                You don’t need more people.
                <br />
                You need a dependable team that scales with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Scale Engineering Without the Chaos
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "2–3X delivery capacity",
              "35–50% cost savings",
              "Zero HR & hiring overhead",
              "Faster releases, cleaner code",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            Your team, your roadmap — we handle execution and accountability.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What You Get With Dedicated Engineering Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cross-functional, full-time teams tailored to your product — ready
              in days, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-indigo-600" />,
                title: "Frontend Development",
                desc: "React, Next.js, Vue, Angular with UI-focused delivery.",
                outcome: "Faster features and flawless UX",
              },
              {
                icon: <Server className="w-8 h-8 text-indigo-600" />,
                title: "Backend Development",
                desc: "Node, Python, PHP, Java, .NET with scalable architecture.",
                outcome: "Secure, reliable systems",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
                title: "Mobile App Development",
                desc: "Flutter, React Native, Swift, Kotlin.",
                outcome: "High-quality mobile experiences",
              },
              {
                icon: <Bug className="w-8 h-8 text-indigo-600" />,
                title: "QA & Automation",
                desc: "Manual + automated testing with CI pipelines.",
                outcome: "99% bug-free releases",
              },
              {
                icon: <Cloud className="w-8 h-8 text-indigo-600" />,
                title: "DevOps & Infrastructure",
                desc: "CI/CD, cloud setup, monitoring & scaling.",
                outcome: "Fast, stable deployments",
              },
              {
                icon: <Brain className="w-8 h-8 text-indigo-600" />,
                title: "AI, Data & Analytics (Optional)",
                desc: "ML engineers, data pipelines, BI dashboards.",
                outcome: "Smarter, data-driven systems",
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
              Why CTOs & Product Founders Choose Avaantra
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Pre-vetted engineers with 5–10 years experience",
              "Full-time dedicated teams only",
              "Managed by Avaantra project leads",
              "Sprint-based delivery with KPIs",
              "Scale up or down in 30 days",
              "Full code & IP ownership",
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
            You keep control of the roadmap. We handle execution.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: How We Build Your Team
            </h2>
            <p className="text-indigo-200">
              Fast, flexible, and low-risk — without hiring chaos.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Discovery & Needs Assessment",
                desc: "We understand your product, tech stack, and delivery goals.",
              },
              {
                step: "2",
                title: "Team Blueprint",
                desc: "We define ideal roles: Frontend, Backend, QA, DevOps, PM.",
              },
              {
                step: "3",
                title: "Team Setup & Onboarding",
                desc: "Your team goes live in 7–10 days inside your tools.",
              },
              {
                step: "4",
                title: "Sprint Execution & Reporting",
                desc: "2-week sprints with dashboards, demos, and KPIs.",
              },
              {
                step: "5",
                title: "Scale or Optimize",
                desc: "Add, swap, or expand roles as your needs evolve.",
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
            Outcome: Your engineering team scales effortlessly — without red
            tape.
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
              Choose the structure that fits your delivery style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Dedicated Team",
                bestFor: "Continuous product delivery",
                how: "You lead the roadmap, we execute",
                outcome: "Predictable monthly output",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Cross-functional initiatives",
                how: "Avaantra manages the sprint team",
                outcome: "2–3X faster velocity",
              },
              {
                title: "Project-Based",
                bestFor: "Fixed-scope delivery",
                how: "Defined milestones & timelines",
                outcome: "Clear cost, fast results",
              },
              {
                title: "Hybrid Team + Support",
                bestFor: "SaaS teams needing flexibility",
                how: "Dev + QA + DevOps combined",
                outcome: "End-to-end delivery flow",
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
            All models include NDA, IP ownership, transparent communication, and
            sprint-based reporting.
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
                  "We hired a full engineering team in 10 days. They now handle all feature releases.",
                by: "CTO, SaaS Platform (UK)",
              },
              {
                quote:
                  "They work exactly like our in-house team — just remote.",
                by: "Founder, HealthTech Startup (India)",
              },
              {
                quote: "Zero management stress. Clean delivery every sprint.",
                by: "VP Engineering, FinTech Company",
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
            Case Study: Scaling Product Delivery Without Hiring
          </h2>

          <p className="mb-2">
            <strong>Client:</strong> B2B SaaS Platform (USA)
          </p>
          <p className="mb-2">
            <strong>Challenge:</strong> Limited internal devs, long release
            cycles
          </p>
          <p className="mb-6">
            <strong>Solution:</strong> 6-member dedicated team (React, Node, QA,
            DevOps)
          </p>

          <ul className="space-y-3 font-semibold">
            <li>✅ 50% faster releases</li>
            <li>✅ 2.5X feature delivery capacity</li>
            <li>✅ 0 production rollbacks in 90 days</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — Before You Build Your Team
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Will the team work only for us?",
                a: "Yes. Every engineer is 100% dedicated to your company.",
              },
              {
                q: "Can I interview team members?",
                a: "Absolutely. You approve every team member.",
              },
              {
                q: "How do you ensure productivity?",
                a: "Sprint KPIs, code reviews, daily standups, and dashboards.",
              },
              {
                q: "Can you match our time zone?",
                a: "Yes. We ensure overlap hours for smooth collaboration.",
              },
              {
                q: "How fast can we start?",
                a: "Most teams go live in 7–10 business days.",
              },
              {
                q: "Who owns the code and IP?",
                a: "You do. 100% ownership, always.",
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
            Build Your Dream Engineering Team — Without Hiring Stress
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Scale delivery without slowing down your business.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="group bg-white text-indigo-700 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Book a Free Engineering Strategy Call
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </main>
  );
}
