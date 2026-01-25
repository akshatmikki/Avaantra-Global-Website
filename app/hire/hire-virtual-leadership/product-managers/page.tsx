import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Layers,
  Users,
  BarChart3,
  GitBranch,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Product Managers | SaaS, B2B & Startup Product Experts | Avaantra Global",
  description:
    "Hire experienced product managers to define strategy, manage teams, and accelerate delivery. Avaantra Global provides SaaS and startup product management experts.",
};

export default function HireProductManagersPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire Product Managers — From Vision to Market, Delivered Predictably
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Great ideas fail without great execution. Avaantra Global helps you
            hire experienced Product Managers who turn ideas into scalable,
            market-winning products — fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire Product Managers in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 text-left max-w-6xl mx-auto">
            {[
              "SaaS & startup product experience",
              "7–15 day onboarding",
              "Roadmap + delivery alignment",
              "Agile, Scrum & Lean PM",
              "100% transparent reporting",
              "Part-time or full-time options",
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
              Startups and SaaS teams don’t fail because of bad ideas — they fail
              because of product chaos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Developers build without a clear product vision",
                "Stakeholders demand features without priorities",
                "Delivery delays stall growth momentum",
                "No single owner of product outcomes",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                You Don’t Need a Task Tracker
              </h3>
              <p className="text-gray-600">
                You need a product leader who owns roadmap, priorities, and
                outcomes — not just tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Clarity, Speed & Customer-Centric Delivery
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We provide dedicated Product Managers who align vision, teams, and
            execution — keeping delivery focused on measurable results.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "2–3X faster product delivery",
              "40% fewer scope changes",
              "100% roadmap transparency",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <BarChart3 className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Management Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Our Product Management Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Product Strategy & Roadmap Design",
                desc: "Turn ideas into clear milestones and success metrics",
                icon: Layers,
              },
              {
                title: "Agile Execution & Backlog Management",
                desc: "Sprint planning, backlog grooming, and delivery tracking",
                icon: GitBranch,
              },
              {
                title: "User Research & Feedback Loops",
                desc: "Customer insights translated into actionable improvements",
                icon: Users,
              },
              {
                title: "Cross-Team Collaboration",
                desc: "Align engineering, design, and marketing teams",
                icon: Users,
              },
              {
                title: "Data-Driven Optimization",
                desc: "Analytics-led decisions to refine product-market fit",
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
              "SaaS & B2B",
              "HealthTech",
              "FinTech",
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
                “Our Avaantra PM brought structure and speed — product releases
                finally stayed on schedule.”
              </p>
              <p className="font-bold text-dark">
                Founder — SaaS Company (UK)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-dark">
            Case Study: Building SaaS MVP Faster
          </h2>

          <div className="bg-gray-50 rounded-2xl p-10 shadow">
            <ul className="space-y-4 text-gray-700">
              <li>✅ MVP launched 6 weeks early</li>
              <li>✅ Zero missed sprints</li>
              <li>✅ 3.5X faster iteration cycles</li>
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
                q: "What does a product manager handle?",
                a: "They own roadmap, delivery timelines, and stakeholder alignment.",
              },
              {
                q: "How soon can I hire one?",
                a: "Within 7–15 business days after role finalization.",
              },
              {
                q: "Can PMs work remotely with global teams?",
                a: "Yes — we support IST, GMT, EST, and PST overlaps.",
              },
              {
                q: "How do they measure success?",
                a: "Through KPIs like NPS, retention, velocity, and adoption.",
              },
              {
                q: "Can I scale with multiple PMs later?",
                a: "Yes — we help build full product organizations as you grow.",
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
            Hire Product Managers in 15 Days — Deliver Smarter, Faster &
            Predictably
          </h2>

          <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer bg-orange-500 hover:bg-orange-400 text-white"
            >
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
