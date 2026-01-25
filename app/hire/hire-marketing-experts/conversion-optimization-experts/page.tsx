import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Layers,
  ShieldCheck,
  MousePointerClick,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Conversion Optimization Experts | CRO, A/B Testing & Funnel Specialists | Avaantra Global",
  description:
    "Hire CRO experts to turn traffic into revenue through testing, UX optimization, and data-driven funnels. Avaantra Global delivers measurable conversion lifts.",
};

export default function HireConversionOptimizationExpertsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hire Conversion Optimization Experts — Turn Traffic into Sales
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Traffic without conversion is wasted spend. Avaantra Global helps you
            hire CRO experts who systematically increase conversions across
            landing pages, funnels, and user journeys.
          </p>
          <Link href="/contact">
            <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
              Hire CRO Experts in 15 Days
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <div className="grid md:grid-cols-5 gap-4 mt-14 max-w-5xl mx-auto text-left">
            {[
              "A/B & multivariate testing",
              "UX & funnel audits",
              "Heatmaps & session recordings",
              "Copy & layout optimization",
              "Revenue-focused experimentation",
            ].map((t, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl flex gap-3">
                <CheckCircle className="text-orange-400 w-5 h-5 mt-1" />
                <p className="text-sm text-blue-100">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Real Problem with Conversion Rates
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-purple-50 p-12 rounded-2xl">
          <ul className="space-y-4 text-gray-700">
            {[
              "High traffic, low conversions",
              "Decisions based on assumptions",
              "UX friction left unaddressed",
              "Funnels not aligned with user intent",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500">✗</span> {t}
              </li>
            ))}
          </ul>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">
              CRO Is a Revenue Lever
            </h3>
            <p className="text-gray-600">
              Small conversion lifts compound massively over time. CRO turns
              existing traffic into scalable profit without increasing ad spend.
            </p>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Promise: Measurable Conversion Lift
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "25–60% conversion increase",
              "30% lower bounce rates",
              "Higher revenue per visitor",
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our Conversion Optimization Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CRO Audits & Research",
                desc: "UX analysis, heatmaps, recordings & funnel diagnostics",
                icon: MousePointerClick,
              },
              {
                title: "A/B & Multivariate Testing",
                desc: "Statistically valid experiments across pages & funnels",
                icon: Layers,
              },
              {
                title: "UX & Copy Optimization",
                desc: "Improve clarity, trust & action triggers",
                icon: Users,
              },
              {
                title: "Analytics & Experiment Tracking",
                desc: "GA4, Hotjar, VWO & experiment dashboards",
                icon: BarChart3,
              },
              {
                title: "Data Integrity & Governance",
                desc: "Clean data and reliable testing methodology",
                icon: ShieldCheck,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition"
              >
                <item.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["SaaS & B2B", "E-commerce", "FinTech", "EdTech"].map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow font-semibold"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Our CRO Experimentation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Data & Funnel Audit",
              "Hypothesis Creation",
              "Testing & Validation",
              "Scale Winning Variants",
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow font-semibold"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-gray-50 p-12 rounded-2xl grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-bold mb-2">Client</p>
            <p className="text-gray-600 mb-4">SaaS Product</p>
            <p className="font-bold mb-2">Solution</p>
            <p className="text-gray-600">
              Funnel audit + multivariate testing
            </p>
          </div>
          <div>
            <p className="font-bold mb-4 text-orange-600">Results</p>
            <ul className="space-y-3">
              {[
                "42% higher trial-to-paid conversions",
                "18% lower churn",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 font-semibold">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does CRO take to show results?",
                a: "Initial wins often appear within 4–6 weeks, with compounding impact over time.",
              },
              {
                q: "Do you need high traffic for CRO?",
                a: "Not always — we adjust testing methods based on traffic volume.",
              },
              {
                q: "What tools do you use?",
                a: "GA4, Hotjar, VWO, Optimizely, and custom analytics stacks.",
              },
              {
                q: "Is CRO a one-time project?",
                a: "No — CRO works best as an ongoing experimentation program.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-blue-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Make Every Visitor Count
        </h2>
        <Link href="/contact">
          <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
            Hire Conversion Optimization Experts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>
    </main>
  );
}
