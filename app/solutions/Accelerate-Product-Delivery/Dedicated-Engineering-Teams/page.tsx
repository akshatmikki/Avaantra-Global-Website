import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Code,
  Server,
  Smartphone,
  Bug,
  Cloud,
  Brain,
} from "lucide-react";

export const metadata = {
  title:
    "Dedicated Engineering Teams for SaaS & Product Companies | Avaantra Global",
  description:
    "Build, scale, and manage your engineering team without hiring. Avaantra Global provides dedicated, full-time tech teams for SaaS and product companies — fast, flexible, and fully managed.",
};

export default function DedicatedEngineeringTeamsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* subtle grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build an Expert Engineering Team —
            <br />
            <span className="text-orange-400">
              Without the Cost, Delay, or Hiring Risk
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            You need to move fast — new features, customer demands, investor pressure.
            But hiring engineers takes forever, managing them drains your time,
            and scaling delivery feels impossible.
            <br />
            <span className="text-slate-200 font-medium">
              With{" "}
              <span className="font-semibold text-orange-400">
                Avaantra Global
              </span>
              , you get a{" "}
              <strong>
                Dedicated Engineering Team
              </strong>{" "}
              that works as part of your company — full-time, white-labeled,
              and fully managed — so you can build faster, smarter, and stress-free.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-white text-slate-900 px-8 py-4 text-lg font-semibold
                   hover:bg-slate-100 transform hover:scale-105
                   transition-all duration-300 hover:shadow-2xl"
            >
              Book a Free Engineering Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            </Link>

            {/* Secondary CTA */}

          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              The Real Problem Product Teams Face
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Scaling development sounds easy — until you actually try it.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 md:p-12 border border-slate-100">
            {/* Left: Problems */}
            <ul className="space-y-4 text-slate-700 text-lg">
              {[
                "Hiring skilled developers takes months",
                "Freelancers come and go",
                "Agencies deliver code, not ownership",
                "Internal teams get overworked and morale drops",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Right: Impact + Truth */}
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-slate-700 mb-4">
                You’re stuck in the middle — your product needs to grow,
                but your team can’t keep up.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-900 text-lg">
                  The truth?
                </p>
                <p className="font-semibold text-slate-900 text-lg">
                  You don’t need more people.
                </p>
                <p className="font-semibold text-orange-600 text-lg">
                  You need a dependable team that scales with you.
                </p>
                <p className="mt-2 text-slate-600 font-medium">
                  That’s what our Dedicated Engineering Teams deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Our Promise: Scale Engineering{" "}
            <span className="text-orange-600">Predictably</span>, Without Managing Chaos
          </h2>

          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            We help SaaS and product companies build high-performing remote engineering
            teams that act like your internal developers — managed by Avaantra and
            aligned to your goals.
          </p>

          {/* Control Points */}
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 text-slate-700 font-medium">
            <span>✔ You control direction and priorities</span>
            <span>✔ We handle hiring, management & delivery</span>
            <span>✔ Scale up or down anytime</span>
          </div>

          {/* Outcomes */}
          <div className="grid md:grid-cols-4 gap-6 mt-14">
            {[
              "2–3× delivery capacity",
              "35–50% cost savings vs. in-house",
              "Zero HR or management overhead",
              "Faster releases, cleaner code",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100
                     hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <p className="font-semibold text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <p className="mt-12 text-lg font-semibold text-slate-900">
            Your team, your roadmap —{" "}
            <span className="text-orange-600">
              we handle execution and accountability.
            </span>
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              What You Get With Dedicated Engineering Teams
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Full-stack, cross-functional teams tailored to your product —
              ready in days, not months.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-orange-500" />,
                title: "Frontend Development",
                desc: "React, Next.js, Vue, Angular with UI-focused delivery.",
                outcome: "Faster feature releases and flawless user experiences",
              },
              {
                icon: <Server className="w-8 h-8 text-orange-500" />,
                title: "Backend Development",
                desc: "Node.js, Python, PHP, Java, .NET with scalable architecture.",
                outcome: "Reliable architecture and secure APIs at any scale",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-orange-500" />,
                title: "Mobile App Development",
                desc: "Flutter, React Native, Swift, Kotlin.",
                outcome: "High-quality, fast, and scalable mobile apps",
              },
              {
                icon: <Bug className="w-8 h-8 text-orange-500" />,
                title: "QA & Automation",
                desc: "Manual + automated testing with CI pipelines.",
                outcome: "99% bug-free deployments and high user trust",
              },
              {
                icon: <Cloud className="w-8 h-8 text-orange-500" />,
                title: "DevOps & Infrastructure",
                desc: "CI/CD pipelines, cloud setup, monitoring & scaling.",
                outcome: "Faster delivery, stable uptime, predictable operations",
              },
              {
                icon: <Brain className="w-8 h-8 text-orange-500" />,
                title: "AI, Data & Analytics (Optional)",
                desc: "Data engineers, ML developers, BI dashboards.",
                outcome: "Smarter systems and measurable, data-driven growth",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-100
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>

                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 mb-4">
                  {item.desc}
                </p>

                <p className="text-sm font-semibold text-orange-600">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Why CTOs & Product Founders Choose Avaantra Teams
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Because we understand the real pressure — speed, cost, and control.
              You’re not just hiring developers; you’re building a growth engine.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Pre-vetted engineers with 5–10 years of experience",
              "Full-time dedicated teams — no sharing, no freelancers",
              "Managed by Avaantra project leads",
              "Sprint-based delivery with measurable KPIs",
              "Scale teams up or down within 30 days",
              "100% code & IP ownership",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100
                     hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-orange-500 mb-3" />
                <p className="font-semibold text-slate-900">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <p className="text-center mt-12 text-lg font-semibold text-slate-900">
            You keep control of the roadmap —{" "}
            <span className="text-orange-600">
              we handle execution and accountability.
            </span>
          </p>
        </div>
      </section>


      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Our Process: How We Build Your Team
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Fast, flexible, and low-risk — without hiring chaos.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Discovery & Needs Assessment",
                desc: "We understand your product, tech stack, and delivery goals.",
              },
              {
                step: "02",
                title: "Team Blueprint",
                desc: "We define ideal roles: Frontend, Backend, QA, DevOps, and PM.",
              },
              {
                step: "03",
                title: "Team Setup & Onboarding",
                desc: "Your team goes live in 7–10 days inside your tools.",
              },
              {
                step: "04",
                title: "Sprint Execution & Reporting",
                desc: "2-week sprints with dashboards, demos, and measurable KPIs.",
              },
              {
                step: "05",
                title: "Scale or Optimize",
                desc: "Add, swap, or expand roles as your needs evolve.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6
                     hover:bg-white/10 hover:-translate-y-1
                     transition-all duration-300"
              >
                <div className="text-3xl font-bold text-orange-400 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2 text-slate-100">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <div className="mt-14 text-center">
            <p className="text-lg font-semibold text-slate-200">
              Outcome:
              <span className="text-orange-400">
                {" "}Your engineering team scales effortlessly — without risk or red tape.
              </span>
            </p>
          </div>
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
              Choose the structure that fits your delivery style.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Dedicated Team",
                bestFor: "Continuous product delivery",
                how: "You lead the roadmap, we execute",
                outcome: "Predictable monthly output",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Cross-functional projects",
                how: "Avaantra manages sprints, you review",
                outcome: "2–3× faster velocity",
              },
              {
                title: "Project-Based",
                bestFor: "Fixed-scope delivery",
                how: "Defined milestones & timelines",
                outcome: "Clear cost, fast results",
              },
              {
                title: "Hybrid Team + Support",
                bestFor: "SaaS teams needing flexibility",
                how: "Developers + QA + DevOps combined",
                outcome: "End-to-end delivery flow",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-100
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  {item.title}
                </h3>

                <ul className="space-y-3 text-slate-600">
                  <li>
                    <span className="font-semibold text-slate-800">Best For:</span>{" "}
                    {item.bestFor}
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">
                      How It Works:
                    </span>{" "}
                    {item.how}
                  </li>
                  <li>
                    <span className="font-semibold text-orange-600">
                      Outcome:
                    </span>{" "}
                    <span className="font-semibold">
                      {item.outcome}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Included */}
          <div className="text-center mt-12">
            <p className="font-semibold text-slate-900 mb-3">
              All engagement models include
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 text-slate-600">
              <span>✔ NDA & IP ownership</span>
              <span>✔ Transparent communication</span>
              <span>✔ Sprint-based reporting</span>
              <span>✔ Flexible scaling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Clients Say
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Feedback from leaders who scaled engineering teams without hiring chaos.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We hired a full engineering team in 10 days — they now handle all new feature releases.",
                role: "CTO, SaaS Platform",
                location: "UK",
              },
              {
                quote:
                  "They act exactly like our in-house team, just remote. Best decision we made this year.",
                role: "Founder, HealthTech Startup",
                location: "India",
              },
              {
                quote:
                  "Zero management stress and clean delivery every sprint. Worth every dollar.",
                role: "VP Engineering, FinTech Company",
                location: "Singapore",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100
                     hover:shadow-lg transition-all duration-300"
              >
                <p className="italic text-slate-700 mb-6 leading-relaxed">
                  “{item.quote}”
                </p>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-semibold text-slate-900">
                    {item.role}
                  </p>
                  <p className="text-sm text-orange-600 font-medium">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
              Case Study: Scaling Product Delivery Without Hiring
            </h2>

            {/* Meta Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-10 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Client:</span>{" "}
                B2B SaaS Platform (USA)
              </p>
              <p>
                <span className="font-semibold text-slate-900">Challenge:</span>{" "}
                Limited internal developers and long release cycles
              </p>
              <p>
                <span className="font-semibold text-slate-900">Solution:</span>{" "}
                6-member dedicated engineering team (React, Node, QA, DevOps)
              </p>
            </div>

            {/* Results */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">
                Results
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✔</span>
                  <span className="font-semibold text-slate-800">
                    50% faster releases
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✔</span>
                  <span className="font-semibold text-slate-800">
                    2.5× feature delivery capacity
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✔</span>
                  <span className="font-semibold text-slate-800">
                    0 production rollbacks in 90 days
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              FAQs — Before You Build Your Team
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Clear answers to the most common questions CTOs and founders ask
              before scaling their engineering teams.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {[
              {
                q: "Will the team work only for us?",
                a: "Yes. Every engineer is 100% dedicated to your company — no sharing, no side projects.",
              },
              {
                q: "Can I interview team members before they start?",
                a: "Absolutely. You interview and approve every team member before onboarding.",
              },
              {
                q: "How do you ensure productivity?",
                a: "Through sprint-based KPIs, code reviews, daily standups, and transparent dashboards.",
              },
              {
                q: "Can you match our time zone?",
                a: "Yes. We ensure sufficient overlap hours for smooth real-time collaboration.",
              },
              {
                q: "How soon can we start?",
                a: "Most teams are live within 7–10 business days after finalizing requirements.",
              },
              {
                q: "What if we need to scale mid-project?",
                a: "You can add or replace engineers within 48–72 hours as your needs evolve.",
              },
              {
                q: "Who owns the code and IP?",
                a: "You do — 100% ownership of all code, IP, and deliverables. Always.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100
                     hover:shadow-md transition-all duration-300"
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
      <section className="py-20 px-4 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
            Why This Works
          </h2>

          <p className="text-lg text-slate-300 mb-4">
            Because scaling engineering shouldn’t slow you down — it should speed you up.
          </p>

          <p className="text-slate-400 mb-8 leading-relaxed">
            We give you the talent, management, and systems to deliver predictably —
            without the cost, delay, or risk of building in-house.
          </p>

          <p className="text-xl font-semibold text-slate-200">
            With{" "}
            <span className="text-orange-400 font-bold">
              Avaantra Global
            </span>
            , your engineering becomes{" "}
            <span className="text-orange-400 font-bold">
              scalable, reliable, and unstoppable
            </span>
            .
          </p>
        </div>
      </section>
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
            Build Your Dream Engineering Team — Without Hiring Stress
          </h2>

          <p className="text-lg text-slate-300 mb-10">
            Scale delivery without slowing down your business.
          </p>

            <Link href="/contact">
          <Button
            size="lg"
            className="cursor-pointer group bg-white text-slate-900 px-8 py-4 text-lg font-semibold
                 hover:bg-slate-100 transform hover:scale-105
                 transition-all duration-300 hover:shadow-2xl"
          >
            Book a Free Engineering Strategy Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
            </Link>

          <p className="mt-6 text-sm text-slate-400">
            No long-term contracts • NDA available • Scale anytime
          </p>
        </div>
      </section>
    </main>
  );
}
