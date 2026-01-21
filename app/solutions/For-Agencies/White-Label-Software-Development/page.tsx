import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Layers,
  Rocket,
  Cpu,
  Palette,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "White Label Software Development for Agencies | Avaantra Global",
  description:
    "Deliver web, mobile, and SaaS projects under your agency brand. Avaantra Global offers 100% white-label software development for agencies — no hiring, no risk, just fast, reliable delivery.",
};

export default function WhiteLabelSoftwareDevelopmentPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Web & App Development",
      desc: "Custom web apps, mobile apps, eCommerce sites, and marketing portals.",
      outcome: "Fast, scalable, conversion-ready digital products",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "SaaS Product Development",
      desc: "Architecture, subscriptions, dashboards, and post-launch support.",
      outcome: "Fast-to-market SaaS platforms you can sell or manage",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "CRM & Marketing Integrations",
      desc: "HubSpot, Salesforce, Zoho, custom APIs, and automation workflows.",
      outcome: "Smarter systems with clean data flow",
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      title: "AI & Automation Projects",
      desc: "Chatbots, analytics dashboards, automation tools, and AI utilities.",
      outcome: "Modern AI-powered services without hiring specialists",
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "UI/UX Design",
      desc: "Wireframes, prototypes, design systems, and funnel design.",
      outcome: "User-friendly interfaces that reduce friction",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Deliver High-Quality Software Projects — Without Hiring a Tech Team
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10">
            Offer websites, apps, and SaaS confidently. We build everything
            under your brand while you keep 100% of the client relationship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free White Label Tech Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem for Agencies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "No in-house technical team",
                "Freelancers miss deadlines or disappear",
                "Developers speak jargon, not outcomes",
                "Clients expect seamless delivery",
                "Reputation is always on the line",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                Say Yes to Tech Projects — Safely
              </h3>
              <p className="text-gray-600">
                We let you expand into web, app, and SaaS delivery without
                hiring, managing developers, or risking client trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: You Sell. We Build. You Get the Credit.
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "40–50% faster delivery",
              "2–3X project capacity",
              "Zero tech management overhead",
              "Predictable pricing & timelines",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our White Label Software Development Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-purple-700">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Agencies Choose Avaantra */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why Agencies Choose Avaantra Global
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand both worlds — creative agencies and tech teams. You
              don’t want code dumps. You want reliable, branded delivery your
              clients trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "100% White Label Guarantee (NDA-secured)",
              "Project Managers who speak marketing — not tech jargon",
              "Fast & flexible Agile delivery",
              "AI-enhanced development & QA",
              "Transparent communication and reporting",
              "Zero exposure risk to your client relationships",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-700 font-semibold">
            You sell the solution. We make it real.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Simple, Predictable Process
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Discovery Call",
                desc: "Understand client goals",
              },
              {
                step: "2",
                title: "White Label Setup",
                desc: "Scope & timelines under your brand",
              },
              {
                step: "3",
                title: "Build & Test",
                desc: "Agile sprints with QA",
              },
              {
                step: "4",
                title: "Branded Delivery",
                desc: "Handover under your identity",
              },
              { step: "5", title: "Ongoing Support", desc: "Maintain & scale" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-purple-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-purple-100">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-purple-200 mt-10 font-semibold">
            Outcome: A clean, invisible workflow where your agency stays the
            hero
          </p>
        </div>
      </section>
      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600">
              Choose how you want to scale your development offering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Project-Based",
                bestFor: "One-time client projects",
                work: "Fixed scope & price",
                outcome: "Fast, predictable delivery",
              },
              {
                title: "Dedicated Tech Team",
                bestFor: "Agencies with steady dev demand",
                work: "Team works full-time under your brand",
                outcome: "Continuous delivery with full control",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Complex or multi-skill projects",
                work: "Avaantra manages sprints & reporting",
                outcome: "2–3X faster development velocity",
              },
              {
                title: "White Label Retainer",
                bestFor: "Ongoing client support",
                work: "Monthly fixed deliverables",
                outcome: "Stable income & service reliability",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-dark">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Best For:</strong> {item.bestFor}
                  </li>
                  <li>
                    <strong>How It Works:</strong> {item.work}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 text-gray-600">
            All plans include NDA & white-label contracts, a dedicated PM, Slack
            / Asana / ClickUp collaboration, and transparent pricing.
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What Agencies Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We’ve delivered 5 SaaS projects through Avaantra — every one on time and under budget. Clients think we built it all.",
                by: "Founder, Digital Agency (UK)",
              },
              {
                quote:
                  "They speak agency language — not tech jargon. My clients love the results.",
                by: "Agency Director (UAE)",
              },
              {
                quote:
                  "We stopped saying ‘no’ to web and app projects. Now we pitch them with confidence.",
                by: "CEO, Creative Agency (USA)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <p className="italic text-gray-700 mb-4">“{item.quote}”</p>
                <p className="font-semibold text-dark">{item.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Case Study: Turning a Marketing Agency Into a Tech Powerhouse
            </h2>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">
                B2B Marketing Agency (Singapore)
              </p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Losing SaaS and web projects due to no in-house developers
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Avaantra deployed a managed Agile Pod with full-stack developers
                and a PM
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "Delivered 8 projects in 4 months",
                  "Added $250K in new revenue",
                  "0 missed deadlines or client escalations",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 font-semibold">
                    <CheckCircle className="w-5 h-5 text-green-500" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              FAQs — Addressing Your Concerns
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Will clients know Avaantra is involved?",
                a: "No. Everything is fully white-labeled under your agency.",
              },
              {
                q: "What if I need urgent changes?",
                a: "Same-day turnaround is available for high-priority requests.",
              },
              {
                q: "Can you use our tools and processes?",
                a: "Yes. We adapt to Slack, Jira, ClickUp, or custom systems.",
              },
              {
                q: "What if my client changes scope mid-project?",
                a: "Agile sprints allow smooth scope adjustments.",
              },
              {
                q: "Is the code ours after completion?",
                a: "Yes. You and your client own 100% of the IP and source code.",
              },
              {
                q: "How soon can we start?",
                a: "Typically within 5 business days after onboarding.",
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
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Expand Your Services. Deliver Tech Projects Confidently.
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            You don’t need to become a tech company to deliver tech results.
            With Avaantra, you become full-service instantly.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free White Label Tech Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
