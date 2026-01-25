import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Layers,
  Cloud,
  Shield,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire SaaS Development Team | Dedicated SaaS Developers | Avaantra Global",
  description:
    "Hire a dedicated SaaS development team to design, build, scale, and optimize your product. Avaantra Global helps startups and enterprises launch reliable, scalable SaaS platforms faster.",
};

export default function HireSaaSDevelopmentTeamPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire a SaaS Development Team That Scales With You
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            From MVP to enterprise-grade platforms, we build SaaS products
            engineered for performance, security, and long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire SaaS Developers in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mt-14 text-left max-w-5xl mx-auto">
            {[
              "Full-stack SaaS experts",
              "Startup & enterprise experience",
              "Cloud-native architecture",
              "Secure & scalable systems",
              "Transparent delivery & reporting",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3"
              >
                <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                <p className="text-sm text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why Most SaaS Products Fail to Scale
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The idea is rarely the problem. Execution usually is.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Fragile MVP architecture",
                "Slow feature delivery",
                "Security & compliance gaps",
                "High infrastructure costs",
                "Engineering burnout",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                SaaS Needs a System, Not Just Code
              </h3>
              <p className="text-gray-600">
                We build products with scalability, observability,
                and maintainability baked in from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Predictable SaaS Growth
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              "Faster MVP to market",
              "Scalable multi-tenant architecture",
              "Lower long-term tech debt",
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
              Our SaaS Development Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="w-7 h-7 text-orange-500" />,
                title: "Full-Stack Development",
                desc: "React, Next.js, Node.js, Python, APIs",
                outcome: "Fast, maintainable product delivery",
              },
              {
                icon: <Layers className="w-7 h-7 text-orange-500" />,
                title: "SaaS Architecture",
                desc: "Multi-tenancy, RBAC, billing, subscriptions",
                outcome: "Scalable & secure foundations",
              },
              {
                icon: <Cloud className="w-7 h-7 text-orange-500" />,
                title: "Cloud & DevOps",
                desc: "AWS, Azure, CI/CD, monitoring",
                outcome: "Reliable deployments & uptime",
              },
              {
                icon: <Shield className="w-7 h-7 text-orange-500" />,
                title: "Security & Compliance",
                desc: "Data protection, auth, compliance readiness",
                outcome: "Trust-ready SaaS platforms",
              },
              {
                icon: <BarChart3 className="w-7 h-7 text-orange-500" />,
                title: "Analytics & Optimization",
                desc: "Usage tracking, performance, cost optimization",
                outcome: "Data-driven product decisions",
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
                <p className="text-sm font-semibold text-orange-600">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark">
            SaaS Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "B2B SaaS",
              "FinTech Platforms",
              "HealthTech SaaS",
              "EdTech Platforms",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow font-semibold"
              >
                {item}
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
              Case Study: Scaling a B2B SaaS Platform
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">B2B Workflow SaaS</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                MVP instability and slow feature releases
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Re-architected platform, CI/CD, and cloud optimization
              </p>
            </div>

            <div>
              <p className="font-bold mb-4 text-orange-600">Results</p>
              <ul className="space-y-3">
                {[
                  "3X faster feature delivery",
                  "99.9% uptime",
                  "50% reduction in infra costs",
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

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">FAQs</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Can you build our SaaS from scratch?",
                a: "Yes — from product discovery to production and scale.",
              },
              {
                q: "Do you support existing SaaS platforms?",
                a: "Absolutely. We modernize, optimize, and scale.",
              },
              {
                q: "Can we hire developers only?",
                a: "Yes — individual devs or full cross-functional teams.",
              },
              {
                q: "How fast can onboarding start?",
                a: "Typically within 7–15 days.",
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build a SaaS That Lasts?
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Let’s turn your product vision into a scalable, revenue-ready SaaS.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Hire SaaS Developers in 15 Days
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
