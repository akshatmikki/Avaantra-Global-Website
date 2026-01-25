import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Layers,
  Settings,
  BarChart3,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Business Technology Consultants | Digital Transformation Experts | Avaantra Global",
  description:
    "Hire experienced business technology consultants to bridge strategy and IT. Avaantra Global provides experts to align systems, process, and technology for predictable business growth.",
};

export default function BusinessTechnologyConsultingPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire Business Technology Consultants — Turn Technology Into
            Competitive Advantage
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Your business runs on technology — but does it run efficiently?
            Avaantra Global helps you hire strategic business technology
            consultants who bridge the gap between business goals and IT
            execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire Business Technology Consultants in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 text-left max-w-6xl mx-auto">
            {[
              "15–20+ years of IT & business leadership",
              "Strategy → Architecture → Execution alignment",
              "Digital transformation & automation expertise",
              "30–50% faster ROI on tech investment",
              "100% vendor-neutral consulting",
              "NDA-protected, measurable engagement",
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

      {/* Real Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem Businesses Face
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Disconnected tools and systems",
                "Projects running in silos",
                "Overlapping software and wasted spend",
                "IT fixing problems instead of enabling growth",
                "Unclear ROI from technology investments",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                You Don’t Need Another Vendor
              </h3>
              <p className="text-gray-600">
                You need a technology partner who understands your business and
                designs systems that serve it — not complicate it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Align Business & Technology for Predictable Growth
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our consultants act as strategic advisors — aligning IT, operations,
            and leadership so every technology decision drives measurable value.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "35–50% improvement in process efficiency",
              "40% cost reduction via automation",
              "100% business–IT alignment within 90 days",
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

      {/* Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Our Consulting Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technology Strategy & Roadmapping",
                desc: "6–12 month plans aligned with business outcomes",
                icon: Layers,
              },
              {
                title: "Digital Transformation",
                desc: "Legacy modernization & cloud-first ecosystems",
                icon: Settings,
              },
              {
                title: "Business Process Automation",
                desc: "AI, RPA & workflow optimization",
                icon: Settings,
              },
              {
                title: "Vendor Management & Governance",
                desc: "Accountability, cost control & delivery alignment",
                icon: Users,
              },
              {
                title: "Data Strategy & Analytics",
                desc: "BI, AI analytics & predictive insights",
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
              "FinTech & Banking",
              "SaaS & B2B",
              "Healthcare",
              "E-commerce",
              "Education & EdTech",
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

      {/* Engagement Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-dark">
            Our Engagement Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Discovery Audit & System Assessment",
              "Technology Roadmap Creation",
              "Implementation Oversight",
              "Optimization & ROI Tracking",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow text-center font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-dark">
            Engagement Models
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Advisory Consulting",
              "Interim Technology Advisor",
              "Digital Transformation Partner",
              "Hybrid Advisory + Execution",
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

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Avaantra helped us unify our tech and business strategy. IT finally drives growth.",
                author: "COO",
                company: "FinTech Startup (India)",
              },
              {
                quote:
                  "They saved us 38% annually by rationalizing vendors and tools.",
                author: "CFO",
                company: "SaaS Platform (Singapore)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow">
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
            Case Study: Digital Transformation for a SaaS Firm
          </h2>

          <div className="bg-gray-50 rounded-2xl p-10 shadow">
            <ul className="space-y-4 text-gray-700">
              <li>✅ 45% improvement in process automation</li>
              <li>✅ 30% reduction in operational overhead</li>
              <li>✅ Unified analytics dashboard</li>
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
                q: "What does a business technology consultant do?",
                a: "They align technology investments with business goals to ensure measurable ROI.",
              },
              {
                q: "Do you handle implementation?",
                a: "Yes — we oversee or guide vendor delivery.",
              },
              {
                q: "How long is a typical engagement?",
                a: "2–6 months depending on complexity.",
              },
              {
                q: "Can you handle cloud or ERP planning?",
                a: "Yes — via specialized consultants and partners.",
              },
              {
                q: "Is engagement confidential?",
                a: "Absolutely. NDAs and restricted access apply.",
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
            Hire Business Technology Consultants in 15 Days — Align Technology
            with Growth
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
