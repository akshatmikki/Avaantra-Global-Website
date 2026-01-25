import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Palette,
  Code,
  Layers,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dedicated Teams for Agencies | Avaantra Global",
  description:
    "Build your agency’s delivery capacity with Avaantra’s Dedicated Teams. Scale your design, development, and marketing output without hiring risk. Fully managed, transparent, and white-labeled.",
};

export default function DedicatedTeamsForAgenciesPage() {
  const capabilities = [
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Marketing & Growth Teams",
      desc: "SEO, paid ads, content, automation, and analytics specialists.",
      outcome: "Faster campaigns, deeper insights, measurable ROI",
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "Design & Creative Teams",
      desc: "UI/UX, web, branding, motion, and visual design experts.",
      outcome: "Consistent, on-brand creative without burnout",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Development & Tech Teams",
      desc: "Frontend, backend, DevOps, QA, and product roles.",
      outcome: "Stable, scalable tech delivery under your brand",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "Hybrid Growth Pods",
      desc: "Cross-functional teams combining tech, design, and marketing.",
      outcome: "Unified delivery and faster execution",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Build a Reliable Delivery Team — Without the Cost or Risk of Hiring
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10">
            Scale your agency with dedicated design, marketing, and development
            teams that work like your in-house staff — without adding a single
            employee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Team Strategy Session
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How Dedicated Teams Work
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem for Growing Agencies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              More projects shouldn’t mean more stress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Project overload keeps you up at night",
                "Your team is already at full capacity",
                "Hiring is slow and expensive",
                "Freelancers lack consistency",
                "Quality drops during peak demand",
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
                You need a true extension of your agency — people who think,
                act, and deliver like your in-house team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Your Extended Agency Team — Ready in Days, Not Months
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "2–3X delivery capacity",
              "35–50% cost efficiency vs in-house",
              "100% transparency & control",
              "Zero HR or hiring overhead",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-600 font-semibold">
            We don’t replace your team — we expand it intelligently.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Dedicated Team Capabilities for Agencies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You choose the roles. We build and manage the team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => (
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

      {/* Why Agencies Choose Avaantra Dedicated Teams */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why Agencies Choose Avaantra Dedicated Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We go beyond providing manpower — we deliver management, systems,
              and predictability so your agency can scale with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "100% White Label Execution",
              "Dedicated Project Manager under your brand",
              "Real-time dashboards for full visibility",
              "AI-powered workflow & performance management",
              "Flexible team scaling up or down anytime",
              "Zero operational overhead for your agency",
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
            You focus on clients and growth — we handle execution, training, and
            reporting.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From Setup to Delivery
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                desc: "Assess workflows & needs",
              },
              {
                step: "2",
                title: "Role Selection",
                desc: "You approve every member",
              },
              {
                step: "3",
                title: "Onboarding",
                desc: "Tools & process integration",
              },
              {
                step: "4",
                title: "Dedicated Delivery",
                desc: "Full-time execution",
              },
              {
                step: "5",
                title: "Optimize Monthly",
                desc: "KPIs & performance tuning",
              },
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
            Outcome: A team that feels internal — without internal costs.
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
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Dedicated Team",
                bestFor: "Continuous workstreams",
                work: "You manage priorities, we deliver",
                outcome: "Predictable monthly output",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Multi-skill projects",
                work: "Avaantra manages the team",
                outcome: "2–3X faster velocity",
              },
              {
                title: "Project-Based",
                bestFor: "Short-term needs",
                work: "Fixed scope & pricing",
                outcome: "Risk-free quick delivery",
              },
              {
                title: "White Label Retainer",
                bestFor: "Steady delivery",
                work: "Fully managed monthly output",
                outcome: "Stress-free long-term scale",
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
            All plans include NDA protection, real-time dashboards, dedicated
            PMs, and transparent pricing.
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
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
                  "Avaantra gave us a dedicated SEO + DevOps team in 10 days. We doubled client output without adding a single hire.",
                by: "Agency Director (USA)",
              },
              {
                quote:
                  "Their team joins our daily calls. Clients genuinely believe they’re our internal staff.",
                by: "Co-Founder, Creative Agency (UK)",
              },
              {
                quote:
                  "We used to lose projects due to limited capacity. Now we take every one confidently.",
                by: "Founder, Marketing Agency (India)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow">
                <p className="italic text-gray-700 mb-4">“{item.quote}”</p>
                <p className="font-semibold text-dark">{item.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Study */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Case Study: From Overloaded to Overperforming
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">Digital Agency (Australia)</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Too many ongoing projects and not enough internal bandwidth
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Avaantra deployed a dedicated 5-member hybrid team (SEO,
                Developer, Designer, Project Manager)
              </p>
            </div>

            <div>
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "3X more client projects handled",
                  "98% on-time delivery rate",
                  "+42% profit margin improvement",
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              FAQs — Before You Hire Your Team
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Can I choose who joins my team?",
                a: "Yes. You approve every team member before they start.",
              },
              {
                q: "Will the team work only for my agency?",
                a: "Yes. Your dedicated team works exclusively on your projects.",
              },
              {
                q: "Can I scale the team up or down?",
                a: "Absolutely. Adjust team size anytime with a 30-day notice.",
              },
              {
                q: "How is communication handled?",
                a: "Direct access via Slack, Zoom, or email — plus a PM for coordination.",
              },
              {
                q: "Do I manage payroll or HR?",
                a: "No. We handle hiring, training, payroll, and compliance.",
              },
              {
                q: "What if I want to switch team members?",
                a: "We replace or adjust roles quickly based on your feedback.",
              },
              {
                q: "What’s the minimum engagement term?",
                a: "Just one month — no long-term lock-ins.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
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
            Let’s Build Your Extended Delivery Team
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            No HR. No overhead. No stress. Just consistent, predictable growth.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="cursor-pointer group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Dedicated Team Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
