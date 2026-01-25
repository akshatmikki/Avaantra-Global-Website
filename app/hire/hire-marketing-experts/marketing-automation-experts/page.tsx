import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Layers,
  BarChart3,
  Users,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Marketing Automation Experts | CRM, HubSpot & Workflow Specialists | Avaantra Global",
  description:
    "Hire marketing automation experts to design CRM workflows, lead scoring, and lifecycle automation. Avaantra Global builds scalable systems that convert 24/7.",
};

export default function HireMarketingAutomationExpertsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hire Marketing Automation Experts — Systems That Scale While You Sleep
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Stop chasing leads manually. Avaantra Global helps you hire automation
            experts who build intelligent workflows that attract, nurture, and
            convert leads automatically.
          </p>
          <Link href="/contact">
            <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
              Hire Automation Experts in 15 Days
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <div className="grid md:grid-cols-5 gap-4 mt-14 max-w-5xl mx-auto text-left">
            {[
              "HubSpot, ActiveCampaign, Zoho, Marketo",
              "7–15 day onboarding",
              "AI-assisted workflows & scoring",
              "CRM + email + sales sync",
              "Full-funnel analytics",
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
            The Real Problem with Marketing Automation
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-purple-50 p-12 rounded-2xl">
          <ul className="space-y-4 text-gray-700">
            {[
              "Leads drop between marketing and sales",
              "CRMs are powerful but underutilized",
              "Emails lack behavioral personalization",
              "No visibility into funnel movement",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500">✗</span> {t}
              </li>
            ))}
          </ul>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">
              Automation Is a Revenue System
            </h3>
            <p className="text-gray-600">
              Automation only works when strategy, data, and execution are
              aligned. We don’t build sequences — we build systems.
            </p>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Promise: Smarter Funnels, Faster Revenue
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "3–4X faster lead-to-sale time",
              "30% lower churn",
              "100% funnel visibility",
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
            Our Marketing Automation Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CRM Architecture & Setup",
                desc: "HubSpot, Zoho, Salesforce & Marketo configuration",
                icon: Layers,
              },
              {
                title: "Lead Scoring & Routing",
                desc: "AI-assisted qualification and sales handoff",
                icon: Workflow,
              },
              {
                title: "Lifecycle Automation",
                desc: "Onboarding, nurturing, retention & win-back",
                icon: Users,
              },
              {
                title: "Analytics & Attribution",
                desc: "Track every touchpoint across the funnel",
                icon: BarChart3,
              },
              {
                title: "Data Hygiene & Compliance",
                desc: "Clean, compliant, and scalable systems",
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
            Our Automation Implementation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "CRM & Funnel Audit",
              "Workflow & Scoring Design",
              "Implementation & Testing",
              "Optimization & Scaling",
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

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Which tools do you support?",
                a: "HubSpot, ActiveCampaign, Zoho, Marketo, Salesforce, and more.",
              },
              {
                q: "Do you redesign existing CRMs?",
                a: "Yes — most engagements start with cleanup and restructuring.",
              },
              {
                q: "Can automation replace manual sales follow-ups?",
                a: "It enhances them — not replaces — with better timing and context.",
              },
              {
                q: "How fast can automation go live?",
                a: "Initial workflows can launch within 2–3 weeks.",
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
          Automate Growth, Not Just Emails
        </h2>
        <Link href="/contact">
          <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
            Hire Marketing Automation Experts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>
    </main>
  );
}
