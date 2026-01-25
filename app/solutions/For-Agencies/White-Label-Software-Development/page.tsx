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
      icon: <Code className="w-8 h-8 text-orange-600" />,
      title: "Web & App Development",
      desc: "Custom web apps, mobile apps, eCommerce sites, and marketing portals.",
      outcome: "Fast, scalable, conversion-ready digital products",
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      title: "SaaS Product Development",
      desc: "Architecture, subscriptions, dashboards, and post-launch support.",
      outcome: "Fast-to-market SaaS platforms you can sell or manage",
    },
    {
      icon: <Layers className="w-8 h-8 text-orange-600" />,
      title: "CRM & Marketing Integrations",
      desc: "HubSpot, Salesforce, Zoho, custom APIs, and automation workflows.",
      outcome: "Smarter systems with clean data flow",
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-600" />,
      title: "AI & Automation Projects",
      desc: "Chatbots, analytics dashboards, automation tools, and AI utilities.",
      outcome: "Modern AI-powered services without hiring specialists",
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-600" />,
      title: "UI/UX Design",
      desc: "Wireframes, prototypes, design systems, and funnel design.",
      outcome: "User-friendly interfaces that reduce friction",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900 text-white relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Deliver High-Quality Software Projects —
            <br className="hidden sm:block" />
            Without Hiring a Tech Team
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-orange-100 max-w-4xl mx-auto mb-10 leading-relaxed">
            Your clients want websites, apps, and SaaS products.
            <br />
            But hiring developers, managing sprints, and handling QA isn’t what your
            agency does best.
            <br />
            <span className="font-semibold text-white">
              Avaantra Global helps you deliver complex software projects under your
              brand
            </span>{" "}
            — while we handle everything technical behind the scenes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-white text-slate-700 hover:bg-slate-50
                   transform hover:scale-105 transition-all duration-300
                   hover:shadow-xl"
            >
              Book a Free White Label Tech Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            </Link>

          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              The Real Problem for Agencies
            </h2>
            <p className="text-lg text-slate-600 mt-3 max-w-3xl mx-auto">
              You’ve earned client trust — but tech projects put that trust at risk.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 bg-orange-50 rounded-2xl p-8 md:p-12">
            {/* Problems */}
            <ul className="space-y-4 text-slate-700">
              {[
                "No in-house technical team",
                "Freelancers miss deadlines or disappear mid-project",
                "Developers speak jargon, not business outcomes",
                "Clients expect seamless delivery — not excuses",
                "Your agency’s reputation is always on the line",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Solution Tease */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Say “Yes” to Tech Projects — Safely
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Avaantra lets you deliver websites, apps, and SaaS products{" "}
                <strong>under your brand</strong> — without hiring developers,
                managing sprints, or risking client trust.
              </p>
              <p className="mt-4 font-semibold text-slate-900">
                You keep the client relationship.
                <br />
                We handle the technical execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Our Promise: You Sell. We Build. You Get the Credit.
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            We become your silent technology arm — delivering high-quality software,
            apps, and platforms entirely under your agency’s brand.
          </p>

          {/* Promise Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "40–50% faster project delivery",
              "2–3X more project capacity",
              "Zero tech management overhead",
              "Predictable pricing & timelines",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200
                     hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <p className="font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>

          {/* Supporting Guarantees */}
          <div className="max-w-4xl mx-auto mt-14">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "100% White-Label Guarantee — your brand, always",
                "Dedicated Project Manager under your agency account",
                "Fast, agile delivery with transparent communication",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-slate-200"
                >
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <p className="mt-14 text-xl font-semibold text-slate-900">
            You own the client relationship.
            <br />
            We handle the execution — reliably and invisibly.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our White-Label Software Development Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From simple websites to complex SaaS platforms — everything delivered
              under your agency’s brand.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Web & App Development",
                desc: "Design and build high-performing digital products tailored to your client’s goals.",
                outcome:
                  "Fast, conversion-optimized web and mobile products — fully white-label",
              },
              {
                title: "SaaS Product Development",
                desc: "End-to-end SaaS platforms your agency can deliver, manage, or resell.",
                outcome:
                  "Scalable SaaS solutions with subscriptions, dashboards, and analytics",
              },
              {
                title: "CRM & Marketing Automation Integrations",
                desc: "Seamless integrations between tools to eliminate manual work.",
                outcome:
                  "Smarter workflows, clean data, and operational efficiency",
              },
              {
                title: "AI & Automation Projects",
                desc: "AI-powered tools without hiring data scientists or ML engineers.",
                outcome:
                  "Innovative services that differentiate your agency offering",
              },
              {
                title: "UI / UX Design",
                desc: "User-centric design that balances aesthetics and usability.",
                outcome:
                  "Intuitive interfaces that improve engagement and conversions",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200
                     hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-sm font-semibold text-orange-700">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack (Optional, subtle) */}
          <p className="mt-14 text-center text-slate-600">
            <strong>Tech Stack:</strong> React, Next.js, Node.js, Flutter, PHP, Python,
            Laravel, .NET, WordPress, Shopify — selected based on client needs.
          </p>
        </div>
      </section>

      {/* Why Agencies Choose Avaantra */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Agencies Choose Avaantra Global
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We understand both worlds — creative agencies and technology delivery.
              You don’t want code dumps. You want reliable, branded execution your
              clients trust.
            </p>
          </div>

          {/* Advantage Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "100% White-Label Guarantee with NDA-secured delivery",
              "Project Managers who speak outcomes — not technical jargon",
              "Fast, flexible Agile delivery aligned to client timelines",
              "AI-enhanced development & QA for higher reliability",
              "Transparent communication, dashboards, and reporting",
              "Zero exposure risk to your client relationships",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200
                     hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-orange-600 mb-3" />
                <p className="font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <p className="text-center mt-12 text-lg font-semibold text-slate-900">
            You sell the solution.
            <br />
            We make it real — quietly and reliably.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Simple, Predictable Process
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Built to fit seamlessly into your agency workflow — no friction, no
              surprises.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Discovery Call",
                desc: "We learn about your client, goals, and expectations.",
              },
              {
                step: "2",
                title: "White Label Setup",
                desc: "We define scope, deliverables, and timelines — all under your agency name.",
              },
              {
                step: "3",
                title: "Design & Development",
                desc: "Our team builds, tests, and refines through Agile sprints.",
              },
              {
                step: "4",
                title: "Client Delivery (Branded for You)",
                desc: "We hand over everything — branded reports, builds, and documentation — under your identity.",
              },
              {
                step: "5",
                title: "Ongoing Support",
                desc: "We monitor, maintain, and scale based on client feedback.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6
                   hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-orange-500 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-200">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <p className="text-center text-slate-300 mt-12 text-lg font-semibold">
            Outcome: A clean, invisible workflow where
            <br />
            <span className="text-white">
              your agency stays the hero.
            </span>
          </p>
        </div>
      </section>

      {/* Engagement Models */}
     <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        Engagement Models
      </h2>
      <p className="text-lg text-slate-600">
        Choose how you want to scale your development offering.
      </p>
    </div>

    {/* Models */}
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
          className="bg-white border border-slate-200 rounded-2xl p-8
                     hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-bold mb-4 text-slate-900">
            {item.title}
          </h3>

          <ul className="space-y-2 text-slate-700">
            <li>
              <strong className="text-slate-900">Best For:</strong>{" "}
              {item.bestFor}
            </li>
            <li>
              <strong className="text-slate-900">How It Works:</strong>{" "}
              {item.work}
            </li>
            <li>
              <strong className="text-slate-900">Outcome:</strong>{" "}
              <span className="text-orange-600 font-semibold">
                {item.outcome}
              </span>
            </li>
          </ul>
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="text-center mt-10 text-slate-600 max-w-3xl mx-auto">
      All plans include <strong>NDA & white-label contracts</strong>, a
      <strong> dedicated Project Manager</strong>, Slack / Asana / ClickUp
      collaboration, and transparent pricing.
    </div>
  </div>
</section>

      {/* Testimonials */}
   <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        What Agencies Say
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Real feedback from agencies delivering more — without hiring or delivery stress.
      </p>
    </div>

    {/* Testimonials */}
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
        <div
          key={idx}
          className="bg-white border border-slate-200 rounded-2xl p-6
                     hover:shadow-xl transition-all duration-300"
        >
          <p className="italic text-slate-700 mb-4 leading-relaxed">
            “{item.quote}”
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="font-semibold text-slate-900">
              {item.by}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        Case Study: Turning a Marketing Agency Into a Tech Powerhouse
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        How a B2B agency unlocked SaaS and web delivery — without hiring developers.
      </p>
    </div>

    {/* Case Study Card */}
    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
      {/* Left Content */}
      <div>
        <p className="font-semibold text-slate-900 mb-1">Client</p>
        <p className="text-slate-600 mb-6">
          B2B Marketing Agency (Singapore)
        </p>

        <p className="font-semibold text-slate-900 mb-1">Challenge</p>
        <p className="text-slate-600 mb-6">
          Losing SaaS and web projects due to lack of in-house developers
        </p>

        <p className="font-semibold text-slate-900 mb-1">Solution</p>
        <p className="text-slate-600 leading-relaxed">
          Avaantra deployed a managed Agile Pod with full-stack developers and a
          dedicated project manager — operating fully under the agency’s brand.
        </p>
      </div>

      {/* Results */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <p className="font-bold text-slate-900 mb-4">
          Results
        </p>

        <ul className="space-y-4">
          {[
            "Delivered 8 projects in 4 months",
            "Added $250K in new revenue",
            "0 missed deadlines or client escalations",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <span className="font-medium text-slate-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        FAQs — Addressing Your Concerns
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Clear answers to the most common questions agencies ask before partnering
        with us.
      </p>
    </div>

    {/* FAQs */}
    <div className="max-w-4xl mx-auto space-y-6">
      {[
        {
          q: "Will clients know Avaantra is involved?",
          a: "No. Every file, communication, and report is fully white-labeled under your agency.",
        },
        {
          q: "What if I need urgent changes?",
          a: "We offer same-day turnaround for high-priority requests when required.",
        },
        {
          q: "Can you use our tools and processes?",
          a: "Yes. We adapt to your systems — Slack, Jira, ClickUp, or custom workflows.",
        },
        {
          q: "What if my client changes scope mid-project?",
          a: "We work in agile sprints, so scope changes are handled smoothly without disruption.",
        },
        {
          q: "Is the code ours after completion?",
          a: "Yes. You (and your client) own 100% of the IP and source code.",
        },
        {
          q: "How soon can we start?",
          a: "Typically within 5 business days after onboarding and scope agreement.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all duration-300"
        >
          <h3 className="font-semibold text-slate-900 mb-2">
            {item.q}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Final CTA */}
     <section className="py-20 px-4 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
  <div className="max-w-4xl mx-auto text-center">
    {/* Headline */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Expand Your Services. Deliver Tech Projects Confidently.
    </h2>

    {/* Subheadline */}
    <p className="text-lg text-orange-100 mb-8 leading-relaxed">
      You don’t need to become a tech company to deliver tech results.
      <br />
      With Avaantra, you become a full-service agency — instantly.
    </p>

    {/* CTA */}
    <Link href="/contact">
      <Button
        size="lg"
        className="cursor-pointergroup bg-white text-orange-700 hover:bg-orange-50
                   transform hover:scale-105 transition-all duration-300
                   hover:shadow-xl"
      >
        Book a Free White Label Tech Consultation
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
      </Button>
    </Link>

    {/* Why This Works */}
    <p className="mt-10 text-sm md:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
      <span className="font-semibold text-white">Why this works:</span>  
      You focus on strategy, sales, and client growth —
      while we handle technology, delivery, and execution behind the scenes.
    </p>
  </div>
</section>

    </main>
  );
}
