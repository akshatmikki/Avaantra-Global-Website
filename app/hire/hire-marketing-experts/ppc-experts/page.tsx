import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire PPC Experts | Google, Meta & LinkedIn Ads Specialists | Avaantra Global",
  description:
    "Hire PPC experts to run high-ROI campaigns across Google, Meta, LinkedIn, and YouTube. Avaantra Global delivers transparent, performance-driven paid media execution.",
};

export default function HirePPCExpertsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire PPC Experts — Drive Immediate Growth with Predictable ROI
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Stop burning budget on untracked clicks. Avaantra Global helps you
            hire PPC experts who design, manage, and optimize paid campaigns
            focused purely on conversions and revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire PPC Experts in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-5 gap-4 mt-14 text-left max-w-5xl mx-auto">
            {[
              "Google, Meta, LinkedIn & YouTube Ads expertise",
              "Certified PPC specialists",
              "7–15 day onboarding",
              "Conversion-focused bidding & creatives",
              "Live dashboards with full transparency",
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
              Why Most PPC Campaigns Fail
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Paid traffic without accountability is just gambling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Spend optimized for impressions, not conversions",
                "Weak tracking and attribution",
                "No testing discipline for creatives",
                "Poor audience and funnel alignment",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                PPC Needs Precision
              </h3>
              <p className="text-gray-600">
                You don’t need more clicks. You need campaigns engineered for
                intent, conversion, and measurable ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: High-Performance Paid Media
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We provide PPC specialists who own results end-to-end — from setup
            and testing to optimization and scaling.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "3–5X ROAS within 90 days",
              "40–50% lower cost per lead",
              "100% transparency on ad spend",
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

      {/* PPC Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our PPC Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Full-funnel paid media execution, not isolated ads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Search & Shopping Ads",
                desc: "High-intent keyword targeting and bidding",
                outcome: "Consistent lead and sales flow",
              },
              {
                title: "Social Ads",
                desc: "Meta & LinkedIn ads with audience precision",
                outcome: "Lower CPA and higher relevance",
              },
              {
                title: "Creative Testing",
                desc: "Ad copy, visuals & landing page experiments",
                outcome: "Higher conversion rates",
              },
              {
                title: "Remarketing & Funnels",
                desc: "Multi-touch retargeting strategies",
                outcome: "Improved ROAS",
              },
              {
                title: "Tracking & Attribution",
                desc: "GA4, Tag Manager & conversion setup",
                outcome: "Clear ROI visibility",
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
              Case Study: Scaling PPC for a B2B SaaS Brand
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">B2B SaaS Platform</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                High CAC and unclear attribution
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Funnel rebuild with tracking and bid optimization
              </p>
            </div>

            <div>
              <p className="font-bold mb-4 text-orange-600">Results</p>
              <ul className="space-y-3">
                {[
                  "43% cost-per-lead reduction",
                  "3.6X ROAS",
                  "100% conversion visibility",
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
            Turn Ad Spend into Predictable Revenue
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Because PPC should behave like math — not luck.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Hire PPC Experts in 15 Days
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
