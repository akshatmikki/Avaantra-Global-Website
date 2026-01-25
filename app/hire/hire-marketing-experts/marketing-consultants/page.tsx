import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Digital Marketing Consultants | Growth Strategy, Planning & ROI Leadership | Avaantra Global",
  description:
    "Hire senior digital marketing consultants to audit, plan, and scale your growth strategy. Avaantra Global provides data-driven marketing leadership with clear ROI direction.",
};

export default function HireDigitalMarketingConsultantsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire Digital Marketing Consultants — Get Clarity Before You Spend
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Growth problems are rarely channel problems — they’re strategy
            problems. Avaantra Global helps you hire senior digital marketing
            consultants who diagnose gaps, design growth roadmaps, and guide
            execution with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire Marketing Consultants in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-5 gap-4 mt-14 text-left max-w-5xl mx-auto">
            {[
              "Senior consultants with cross-channel expertise",
              "Full-funnel audits & growth diagnostics",
              "Clear roadmap before execution",
              "Budget & channel allocation guidance",
              "ROI-focused decision frameworks",
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
              Why Most Marketing Spend Underperforms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Execution without clarity leads to wasted budget and stalled growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Too many channels, no unified strategy",
                "Budgets allocated without ROI logic",
                "KPIs tracked without revenue linkage",
                "Teams executing without leadership direction",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                Strategy Comes Before Scale
              </h3>
              <p className="text-gray-600">
                You don’t need to do more marketing. You need to do the right
                marketing — in the right order — with clear accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Clarity, Control & Confident Growth
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our consultants don’t just advise — they create executable growth
            plans grounded in data, funnel logic, and business goals.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "2–4X ROI improvement",
              "Clear channel & budget prioritization",
              "Leadership-level visibility into growth levers",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What Our Marketing Consultants Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic depth with execution awareness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Growth Audits & Diagnostics",
                desc: "End-to-end audit of channels, funnels, data & messaging",
                outcome: "Clear understanding of what’s broken and why",
              },
              {
                title: "Growth Roadmap Design",
                desc: "90-day and 6–12 month execution plans",
                outcome: "Structured, phased scaling",
              },
              {
                title: "Channel & Budget Strategy",
                desc: "SEO, PPC, content, automation & CRO prioritization",
                outcome: "Capital allocated where ROI is highest",
              },
              {
                title: "KPI & Measurement Frameworks",
                desc: "North-star metrics tied to revenue",
                outcome: "No more vanity reporting",
              },
              {
                title: "Execution Oversight",
                desc: "Guidance for in-house teams or agencies",
                outcome: "Strategy doesn’t die in execution",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-orange-600">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Case Study: Growth Strategy Reset for a SaaS Company
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">B2B SaaS Platform</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                High spend, flat pipeline, no attribution clarity
              </p>

              <p className="font-bold mb-2">Consulting Scope</p>
              <p className="text-gray-600">
                Full audit, channel reprioritization, KPI reset
              </p>
            </div>

            <div>
              <p className="font-bold mb-4 text-orange-600">Results</p>
              <ul className="space-y-3">
                {[
                  "3.8X pipeline growth in 90 days",
                  "38% reduction in wasted spend",
                  "Clear 12-month growth roadmap",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 font-semibold">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Spend with Confidence. Scale with Clarity.
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Because the best growth lever is knowing exactly what to do next.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Hire Digital Marketing Consultants
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}