import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Layers,
  Users,
  Lock,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Virtual CTO | Technology Leadership, Strategy & Scaling | Avaantra Global",
  description:
    "Hire a Virtual CTO to lead your technology strategy, development, and scaling. Avaantra Global provides on-demand CTOs for startups and growing businesses — cost-efficient, experienced, and hands-on.",
};

export default function HireVirtualCTOPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire a Virtual CTO — Drive Technology, Innovation & Scalability
            Without Full-Time Overhead
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Every startup needs strong tech leadership — but not everyone can
            afford a full-time CTO. Avaantra Global provides fractional CTO
            leadership to architect, scale, and manage your technology with
            predictable outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire Virtual CTO in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 text-left max-w-6xl mx-auto">
            {[
              "15–20+ years of technology leadership",
              "Ideal for SaaS, startups & scale-ups",
              "Fractional cost, full strategic value",
              "Tech roadmap & architecture ownership",
              "Security, scalability & delivery focus",
              "Sprint-based execution & reporting",
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
              The Real Problem Founders Face
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Without strong technical leadership, startups bleed time, money,
              and momentum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "No in-house CTO or tech decision-maker",
                "Confusion around architecture & scalability",
                "Delays from poor vendor or dev management",
                "₹40L–₹1Cr annual cost of a full-time CTO",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                You Don’t Need a Vendor
              </h3>
              <p className="text-gray-600">
                You need a senior technology leader who owns architecture,
                delivery, and long-term scalability — without full-time cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Tech Leadership Without Cost & Complexity
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We provide experienced CTOs on-demand to guide architecture, teams,
            vendors, and innovation — aligned with your business vision.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "2–3X faster development efficiency",
              "35–50% cost savings vs full-time CTO",
              "100% delivery alignment with business goals",
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

      {/* What Virtual CTO Does */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What a Virtual CTO from Avaantra Does
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Strategy & Roadmap",
                desc: "Align product vision with the right tech stack and growth plan",
                outcome: "Clear short- & long-term direction",
                icon: Layers,
              },
              {
                title: "Architecture & System Design",
                desc: "Scalable, modular & secure SaaS/cloud architectures",
                outcome: "Zero legacy tech debt",
                icon: Shield,
              },
              {
                title: "Vendor & Team Management",
                desc: "Oversee developers, vendors & agencies",
                outcome: "Predictable delivery & budget control",
                icon: Users,
              },
              {
                title: "Security, DevOps & Compliance",
                desc: "Uptime, resilience, SOC2, GDPR readiness",
                outcome: "Secure & compliant systems",
                icon: Lock,
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
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-orange-600">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Virtual CTOs bring domain-aware leadership across high-growth
              and compliance-heavy industries.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                title: "SaaS & B2B Startups",
                desc: "Scalable platforms with faster time-to-market",
              },
              {
                title: "FinTech & Banking",
                desc: "Secure, compliant systems with risk oversight",
              },
              {
                title: "HealthTech",
                desc: "HIPAA & data-privacy-driven architectures",
              },
              {
                title: "E-commerce",
                desc: "High-performance systems built to scale globally",
              },
              {
                title: "EdTech",
                desc: "Reliable platforms with high concurrency & uptime",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              How Virtual CTO Engagement Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured, low-friction process designed for fast alignment and
              measurable progress.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "1️⃣ Discovery Call",
                desc: "Understand your product, vision, and challenges",
                outcome: "Strategic direction defined",
              },
              {
                step: "2️⃣ CTO Alignment",
                desc: "Get 2–3 Virtual CTO profiles",
                outcome: "Choose the right leadership fit",
              },
              {
                step: "3️⃣ Onboarding & Kickoff",
                desc: "CTO integrates with your dev & business teams",
                outcome: "Fast ramp-up, zero friction",
              },
              {
                step: "4️⃣ Implementation",
                desc: "Weekly sprints, reviews, and delivery oversight",
                outcome: "Visible progress & accountability",
              },
              {
                step: "5️⃣ Optimization",
                desc: "Roadmap reviews & budget optimization",
                outcome: "Continuous improvement & scale",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-dark mb-2">{item.step}</h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-orange-500">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Engagement Models
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Fractional CTO (Part-Time)",
              "Project-Based CTO",
              "Interim CTO",
              "CTO-as-a-Service",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300 text-center font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What Clients Say */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founders trust our Virtual CTOs to bring clarity, control, and
              calm to complex technology decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Our Virtual CTO from Avaantra guided our entire product launch — we saved nearly 6 months and reduced costs by over 40%.",
                name: "Founder",
                role: "SaaS Platform",
                location: "Singapore",
              },
              {
                quote:
                  "He brought structure, process, and calm to our chaotic tech stack. For the first time, delivery felt predictable.",
                name: "CEO",
                role: "FinTech Startup",
                location: "India",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <p className="text-gray-700 italic mb-6">“{item.quote}”</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-dark">
                    {item.name} — {item.role}
                  </p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What does a Virtual CTO actually do?",
                a: "They provide hands-on technology leadership — owning architecture, vendors, delivery processes, and long-term scalability decisions.",
              },
              {
                q: "How is a Virtual CTO different from a tech consultant?",
                a: "Consultants advise. Virtual CTOs lead. They own outcomes, team alignment, and delivery accountability.",
              },
              {
                q: "How many hours per week does a Virtual CTO work?",
                a: "Typically 10–25 hours per week, depending on your engagement model and growth stage.",
              },
              {
                q: "Can they manage my internal or external dev teams?",
                a: "Yes. They oversee developers, agencies, and vendors to ensure quality, timelines, and budget control.",
              },
              {
                q: "How do you ensure confidentiality?",
                a: "Strict NDAs, secure access controls, and limited system permissions are standard practice.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-dark mb-2">{item.q}</h3>
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
            Build Scalable Tech Without Full-Time CTO Cost
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Because great technology leadership shouldn’t depend on budget size.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Virtual CTO Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
