import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Performance Marketing Experts | ROI, Growth & Conversion Specialists | Avaantra Global",
  description:
    "Hire performance marketing experts to scale ROI across paid media, SEO, analytics, and funnels. Avaantra Global delivers full-funnel growth with measurable outcomes.",
};

export default function HirePerformanceMarketingExpertsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire Performance Marketing Experts — ROI Over Vanity Metrics
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Visibility doesn’t pay the bills. Avaantra Global helps you hire
            performance marketers who engineer growth across channels with
            disciplined testing, attribution, and conversion focus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire Performance Marketers in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-5 gap-4 mt-14 text-left max-w-5xl mx-auto">
            {[
              "Cross-channel execution: Paid, SEO, CRO & Analytics",
              "ROI-first experimentation framework",
              "7–15 day onboarding",
              "Full-funnel attribution & dashboards",
              "Sprint-based optimization with weekly reporting",
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
              Why Growth Plateaus
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Channels operate in silos. Results become unpredictable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Clicks measured without conversion context",
                "Attribution gaps across channels",
                "Limited testing cadence",
                "No clear path from traffic to revenue",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                Performance Requires Systems
              </h3>
              <p className="text-gray-600">
                You don’t need more campaigns. You need a growth system that
                behaves like math—repeatable, testable, and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Predictable, Full-Funnel Growth
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We provide performance marketers who own outcomes—from acquisition
            to activation to revenue.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "3–6X ROAS within 90 days",
              "40% higher conversion rates",
              "Complete visibility on funnel performance",
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

      {/* Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our Performance Marketing Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated execution across the entire customer journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Paid Media Orchestration",
                desc: "Search, social, display & video coordination",
                outcome: "Higher efficiency across channels",
              },
              {
                title: "Conversion Rate Optimization",
                desc: "Landing pages, UX tests & experimentation",
                outcome: "More revenue per visit",
              },
              {
                title: "Funnel Mapping & Analytics",
                desc: "GA4, attribution & cohort analysis",
                outcome: "Clear decision-making",
              },
              {
                title: "Automation & Retargeting",
                desc: "Lifecycle flows and remarketing",
                outcome: "Improved LTV and ROAS",
              },
              {
                title: "Testing & Optimization",
                desc: "Sprint-based A/B testing cadence",
                outcome: "Continuous performance lift",
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
              Case Study: 4X ROI in 60 Days
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">E-commerce Brand</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Low ROAS and fragmented ad performance
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Unified paid + CRO + retargeting strategy
              </p>
            </div>

            <div>
              <p className="font-bold mb-4 text-orange-600">Results</p>
              <ul className="space-y-3">
                {[
                  "4.1X ROI",
                  "35% CPA reduction",
                  "3X repeat purchase rate",
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
            Scale What Works. Cut What Doesn’t.
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Performance marketing done right compounds.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Hire Performance Marketing Experts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
