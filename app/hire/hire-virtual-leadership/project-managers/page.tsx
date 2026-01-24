import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  CalendarCheck,
  ShieldAlert,
  BarChart3,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Project Managers | Agile & IT Delivery Experts | Avaantra Global",
  description:
    "Hire certified project managers to ensure delivery excellence. Avaantra Global provides Agile, Scrum, and IT project managers — reliable, transparent, and result-oriented.",
};

export default function HireProjectManagersPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire Project Managers — Deliver Projects on Time, On Budget, Every
            Time
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Deadlines shouldn’t slip. Avaantra Global helps you hire certified
            project managers who lead teams, track progress, and guarantee
            successful delivery — without chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire Project Managers in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 text-left max-w-6xl mx-auto">
            {[
              "PMP, Scrum & Agile-certified PMs",
              "7–15 day onboarding",
              "40–60% faster delivery velocity",
              "Risk & change management expertise",
              "100% delivery accountability",
              "Daily progress reports & dashboards",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-start"
              >
                <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                <p className="text-sm text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Missed deadlines, unclear communication, and scope creep destroy
              profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "No structured delivery process",
                "Lack of ownership and accountability",
                "Projects overshoot deadlines and budgets",
                "Poor coordination across teams",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                You Don’t Need Task Checkers
              </h3>
              <p className="text-gray-600">
                You need project leaders who own timelines, risks, and outcomes
                — not just status updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Predictable Delivery & Zero Chaos
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We provide dedicated project managers who bring structure, clarity,
            and discipline to execution — from kickoff to delivery.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "90% on-time project delivery",
              "35% reduced project overhead",
              "100% visibility into progress",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <CalendarCheck className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Our Project Management Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Agile & Scrum Delivery",
                desc: "Sprint planning, velocity tracking & stakeholder sync",
                icon: BarChart3,
              },
              {
                title: "Waterfall & Hybrid Models",
                desc: "Best for enterprise & fixed-scope projects",
                icon: CalendarCheck,
              },
              {
                title: "Risk & Change Management",
                desc: "Prevent scope creep and budget overruns",
                icon: ShieldAlert,
              },
              {
                title: "Tools Expertise",
                desc: "Jira, Asana, ClickUp, Monday.com, Trello",
                icon: Users,
              },
              {
                title: "Communication & Reporting",
                desc: "Daily updates, dashboards & retrospectives",
                icon: BarChart3,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-dark">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Software & SaaS",
              "Healthcare & FinTech",
              "Enterprise Projects",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 shadow font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-dark">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow">
              <p className="italic mb-6 text-gray-700">
                “Avaantra’s PMs made delivery consistent and transparent — no
                more surprises.”
              </p>
              <p className="font-bold text-dark">
                CTO — B2B SaaS (Singapore)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-dark">
            Case Study: IT Delivery Excellence
          </h2>

          <div className="bg-gray-50 rounded-2xl p-10 shadow">
            <ul className="space-y-4 text-gray-700">
              <li>✅ 100% on-time delivery across 3 sprints</li>
              <li>✅ 35% reduction in rework</li>
              <li>✅ Team morale improved significantly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-dark">
            FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Are your project managers certified?",
                a: "Yes — PMP, Scrum Master, or Agile-certified professionals.",
              },
              {
                q: "Can they manage offshore teams?",
                a: "Absolutely. Timezone overlap and communication excellence are core requirements.",
              },
              {
                q: "Can I hire a PM short-term?",
                a: "Yes — 1–3 month project-based engagements are available.",
              },
              {
                q: "How do PMs report progress?",
                a: "Through dashboards, burndown charts, and sprint reviews.",
              },
              {
                q: "Can they manage third-party vendors?",
                a: "Yes — vendor alignment and milestone tracking are included.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold mb-2 text-dark">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hire Project Managers in 15 Days — Deliver Predictably, Scale
            Confidently
          </h2>

          <Link href="/contact">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-400 text-white"
            >
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
