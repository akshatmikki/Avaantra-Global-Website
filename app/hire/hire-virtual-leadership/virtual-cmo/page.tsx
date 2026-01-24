import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Layers,
  Users,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Virtual CMO | Marketing Strategy & Growth Leadership | Avaantra Global",
  description:
    "Hire an experienced Virtual CMO to drive brand growth, demand generation, and marketing strategy. Avaantra Global provides fractional CMOs for startups and enterprises.",
};

export default function HireVirtualCMOPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire a Virtual CMO — Build Brand, Demand & Predictable Growth Without
            Full-Time Overheads
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            You don’t need a full-time marketing head — you need a growth leader.
            Avaantra Global helps you hire experienced Virtual CMOs who build
            strategy, lead teams, and drive ROI at a fraction of the cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire Virtual CMO in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 text-left max-w-6xl mx-auto">
            {[
              "15–25+ years of marketing leadership",
              "B2B, SaaS & digital expertise",
              "Demand gen, branding & automation",
              "40–60% lower cost vs in-house",
              "Strategy + execution in 30 days",
              "Full performance accountability",
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
              You’re spending on marketing — but not scaling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "No unified strategy across content, ads, and brand",
                "Agencies lack long-term accountability",
                "Marketing data scattered across tools",
                "Founders managing campaigns instead of growth",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                You Don’t Need Another Agency
              </h3>
              <p className="text-gray-600">
                You need a senior marketing leader who owns strategy, aligns
                teams, and drives outcomes. That’s exactly what a Virtual CMO
                does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Strategic Marketing Leadership, Minus the Cost
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We help you hire fractional CMOs who plan growth, align execution,
            and own results — not just deliverables.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "2–3X higher qualified leads",
              "40% lower CAC",
              "Measurable ROI within 90 days",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual CMO Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Our Virtual CMO Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Demand Generation",
                desc: "Multi-channel B2B funnels across email, LinkedIn & PPC",
                icon: TrendingUp,
              },
              {
                title: "Marketing Automation",
                desc: "HubSpot, Zoho, ActiveCampaign & Salesforce",
                icon: Layers,
              },
              {
                title: "Content Strategy",
                desc: "SEO, thought leadership & sales enablement",
                icon: Users,
              },
              {
                title: "Brand & Positioning",
                desc: "Messaging architecture & visual consistency",
                icon: Layers,
              },
              {
                title: "Analytics & Reporting",
                desc: "Full-funnel dashboards, attribution & ROI",
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

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "SaaS & B2B Tech",
              "Healthcare & Wellness",
              "FinTech",
              "E-commerce",
              "EdTech",
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
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Our Virtual CMO from Avaantra grew inbound leads by 280% in just 3 months.",
                author: "Founder",
                company: "SaaS Company (UK)",
              },
              {
                quote:
                  "He aligned our brand, team, and campaigns — something no agency could do.",
                author: "CEO",
                company: "FinTech Startup (India)",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow"
              >
                <p className="italic mb-6 text-gray-700">
                  “{item.quote}”
                </p>
                <p className="font-bold text-dark">
                  {item.author} — {item.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-dark">
            Case Study: Scaling SaaS Demand Generation
          </h2>

          <div className="bg-gray-50 rounded-2xl p-10 shadow">
            <ul className="space-y-4 text-gray-700">
              <li>✅ +212% qualified leads</li>
              <li>✅ CAC reduced by 43%</li>
              <li>✅ Unified brand voice & demand funnel</li>
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
                q: "What does a Virtual CMO handle?",
                a: "They lead your entire marketing strategy, team, agencies, and automation.",
              },
              {
                q: "How is a Virtual CMO different from an agency?",
                a: "Agencies execute. Virtual CMOs strategize, align, and own results.",
              },
              {
                q: "What’s the ideal engagement duration?",
                a: "3–6 months for measurable growth; renewable quarterly.",
              },
              {
                q: "Can they train my in-house team?",
                a: "Yes — they mentor teams to become self-sufficient.",
              },
              {
                q: "How do you measure success?",
                a: "Clear KPIs: leads, CAC, retention & ROI benchmarks.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow"
              >
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
            Hire a Virtual CMO in 15 Days — Build Brand, Demand & Revenue
            Predictably
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
