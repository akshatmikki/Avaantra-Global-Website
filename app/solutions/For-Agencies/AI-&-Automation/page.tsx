import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  Zap,
  BarChart3,
  Bot,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "AI & Automation Services for Agencies | Avaantra Global",
  description:
    "Scale faster and increase margins with AI & automation services for agencies. Avaantra Global delivers white-label AI workflows, automation systems, and analytics under your brand.",
};

export default function AIAutomationForAgenciesPage() {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-indigo-600" />,
      title: "AI Content & Creative Automation",
      desc: "AI-assisted content, ad creatives, and campaign assets built under your brand.",
      outcome: "Faster execution with consistent quality",
    },
    {
      icon: <Workflow className="w-8 h-8 text-indigo-600" />,
      title: "Workflow & Process Automation",
      desc: "Automate repetitive marketing, reporting, and ops workflows.",
      outcome: "Reduced manual effort and faster delivery",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      title: "Analytics & Reporting Automation",
      desc: "Real-time dashboards, auto-generated reports, and insights.",
      outcome: "Clear ROI visibility for every client",
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      title: "Custom AI Tools for Clients",
      desc: "Chatbots, internal AI tools, and client-facing AI features.",
      outcome: "High-value retainers and differentiation",
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "CRM & Lead Automation",
      desc: "Lead scoring, routing, follow-ups, and CRM workflows.",
      outcome: "Higher conversions with zero manual follow-up",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Deliver Faster. Increase Margins.
            <br />
            Automate Your Agency With AI.
          </h1>

          <p className="text-lg md:text-xl text-indigo-100 max-w-4xl mx-auto mb-10">
            Avaantra Global helps agencies implement AI & automation systems
            under their own brand — so you deliver faster, reduce manual work,
            and scale without hiring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-indigo-700 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free AI Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See AI Use Cases
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Bottleneck Isn’t Talent — It’s Manual Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Agencies don’t fail because of ideas. They slow down because
              everything still depends on humans doing repetitive work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-indigo-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Too much time spent on reporting & ops",
                "Manual follow-ups kill speed",
                "Campaign execution doesn’t scale",
                "Margins shrink as workload increases",
                "Clients expect faster turnaround",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                AI Fixes This — If Done Right
              </h3>
              <p className="text-gray-600">
                We help agencies apply AI practically — not hype — to remove
                bottlenecks and protect margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Smarter Delivery, Not More Headcount
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "30–50% reduction in manual work",
              "Faster turnaround without burnout",
              "White-label AI systems",
              "Predictable margins & scalability",
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
              AI & Automation Services for Agencies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical AI systems you can sell, deliver, and retain — under
              your brand.
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

      {/* Why Agencies Trust Avaantra – AI & Automation */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why Agencies Trust Avaantra for AI & Automation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Anyone can talk about AI. We help agencies actually use it to
              deliver faster, reduce workload, and protect margins — without
              breaking workflows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Practical AI use cases — not hype",
              "100% white-label automation systems",
              "AI-enhanced reporting & optimization",
              "Human-in-the-loop quality control",
              "Works with your existing tools",
              "Start small, scale automation safely",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-700 font-semibold">
            Our goal: help you deliver faster with AI — without risking quality
            or trust.
          </p>
        </div>
      </section>
      {/* AI & Automation Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our AI & Automation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Use-Case Audit",
                desc: "Find automation opportunities",
              },
              {
                step: "2",
                title: "Workflow Design",
                desc: "Human + AI balance",
              },
              {
                step: "3",
                title: "AI Setup",
                desc: "Models, tools & integrations",
              },
              {
                step: "4",
                title: "Pilot Run",
                desc: "Test with real projects",
              },
              {
                step: "5",
                title: "Scale & Optimize",
                desc: "Expand safely across clients",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl font-bold text-indigo-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-indigo-100">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-indigo-200 mt-10 font-semibold">
            Outcome: AI systems that feel invisible but massively improve
            delivery speed.
          </p>
        </div>
      </section>
      {/* Engagement Models – AI & Automation */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              AI & Automation Engagement Models
            </h2>
            <p className="text-lg text-gray-600">
              Flexible ways to introduce AI without disrupting your agency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Automation Sprint",
                bestFor: "Testing AI in real projects",
                work: "2–4 week fixed scope",
                outcome: "Quick productivity gains",
              },
              {
                title: "Dedicated Automation Team",
                bestFor: "Ongoing optimization",
                work: "AI + ops specialists",
                outcome: "Continuous efficiency improvement",
              },
              {
                title: "Managed AI Pods",
                bestFor: "Complex multi-client automation",
                work: "Fully managed by Avaantra",
                outcome: "2–3X faster delivery",
              },
              {
                title: "AI Retainer",
                bestFor: "Agencies scaling aggressively",
                work: "Monthly AI & automation support",
                outcome: "Predictable performance gains",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-dark">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Best for:</strong> {item.bestFor}
                  </li>
                  <li>
                    <strong>How it works:</strong> {item.work}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials – AI & Automation */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              What Agencies Say About Our AI Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "AI cut our reporting time by 60%. Clients think we hired more staff.",
                by: "Founder, Performance Agency (UK)",
              },
              {
                quote:
                  "Their automation let us handle double the clients with the same team.",
                by: "Agency Owner (USA)",
              },
              {
                quote:
                  "This is the first AI setup that didn’t break our workflows.",
                by: "Operations Lead, Digital Agency (Singapore)",
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
      {/* Case Study – AI Automation */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Case Study: Automating Agency Operations
            </h2>
          </div>

          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">
                Mid-size Digital Agency (USA)
              </p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Manual reporting, slow campaign launches, team overload
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                AI reporting automation + CRM workflows + content automation
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "60% reduction in manual work",
                  "2X faster campaign launches",
                  "Higher margins without hiring",
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
      {/* FAQs – AI & Automation */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — AI & Automation
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Will AI replace our team?",
                a: "No. AI supports your team by removing repetitive work.",
              },
              {
                q: "Is the AI white-labeled?",
                a: "Yes. Dashboards, tools, and reports carry your branding.",
              },
              {
                q: "Can this work with our existing tools?",
                a: "Yes. We integrate with CRMs, ad platforms, and PM tools.",
              },
              {
                q: "Is there a quality risk?",
                a: "We use human-in-the-loop systems to maintain quality.",
              },
              {
                q: "How fast can we start?",
                a: "Usually within 5–7 business days.",
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
            Ready to Automate Your Agency?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Stop scaling people. Start scaling systems.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-indigo-700 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free AI Automation Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
