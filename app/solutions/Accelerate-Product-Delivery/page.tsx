import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Accelerate Product Development for SaaS & Startups | Avaantra Global",
  description:
    "Accelerate SaaS and startup product delivery with Avaantra Global. Managed Agile Pods, DevOps automation, and dedicated engineering teams that help founders and CTOs build, launch, and scale faster — without hiring risk.",
};

export default function AccelerateProductDevelopmentPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 FOR SAAS & STARTUPS
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Build, Launch & Scale Products Faster
            <br />
            Without Hiring Stress
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Avaantra Global helps founders and CTOs ship products faster using
            Managed Agile Pods, DevOps automation, and dedicated engineering
            teams — so you focus on growth, not delivery chaos.
          </p>

          <div className="flex justify-center mt-10">
  <div className="relative">
    <div className="absolute inset-0 rounded-full blur-lg bg-orange-500/40" />
    <Button
      size="lg"
      className="relative bg-orange-500 text-white hover:bg-orange-400 rounded-full px-10 h-12 text-base font-semibold shadow-xl flex items-center gap-2"
    >
      Book a Free Product Delivery Consultation
      <ArrowRight className="w-4 h-4" />
    </Button>
  </div>
</div>

        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              The Problem You’re Facing{" "}
              <span className="text-orange-500">(and Why It’s Costing You)</span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              As a founder or CTO, you already know this story.
              You’ve got the idea, the roadmap — maybe even traction.
              <br className="hidden md:block" />
              But execution gets messy.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 bg-slate-900 rounded-2xl p-8 md:p-12">
            {/* Pain Points */}
            <div>
              <p className="font-semibold text-white mb-6">
                What’s slowing your product down:
              </p>

              <ul className="space-y-4 text-slate-300">
                {[
                  "Hiring developers takes too long",
                  "Teams lose momentum between sprints",
                  "QA cycles are inconsistent",
                  "Releases are delayed",
                  "Technical debt keeps piling up",
                  "You spend your day firefighting instead of building the product",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="mt-1 text-orange-500 font-bold text-lg">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Card */}
            <div className="bg-slate-800 border border-white/10 rounded-xl p-8 flex flex-col justify-between">
              <div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Every delay costs you — not just time, but missed opportunities,
                  lost market share, and weakened investor confidence.
                </p>

                <p className="text-lg font-semibold text-white leading-snug">
                  You don’t need a bigger team.
                  <br />
                  <span className="text-orange-400">
                    You need a smarter, faster, and more predictable
                    product delivery system.
                  </span>
                </p>
              </div>

              <p className="mt-6 font-semibold text-orange-500">
                That’s where Avaantra Global steps in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Our Promise:{" "}
            <span className="text-orange-500">
              Predictable Speed, Quality & Scalability
            </span>
          </h2>

          {/* Positioning Statement */}
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            We don’t just add people —{" "}
            <span className="text-white font-semibold">
              we add performance systems.
            </span>{" "}
            Our teams operate as an extension of your product organization, running
            sprint cycles, automation, and QA at enterprise standards.
          </p>

          {/* Promise Cards */}
          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {[
              "Cut product delivery time by 30–50%",
              "Launch MVPs in 4–6 weeks",
              "Scale teams without hiring overhead",
              "Full transparency with sprint dashboards",
              "Fixed pricing with guaranteed outcomes",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-white/10 rounded-xl p-6 hover:border-orange-500/40 transition-all"
              >
                <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <p className="font-semibold text-white leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <p className="mt-12 text-lg font-semibold text-slate-300">
            We bring the{" "}
            <span className="text-white">structure of a product company</span> and the{" "}
            <span className="text-orange-400">speed of a startup</span>.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              Solutions to{" "}
              <span className="text-orange-500">
                Accelerate Product Development
              </span>
            </h2>

            <p className="text-lg text-orange-500 max-w-3xl mx-auto leading-relaxed">
              We combine engineering excellence, automation, and agile execution to
              help you move from{" "}
              <span className="text-slate-900 font-semibold">
                concept → launch → growth
              </span>{" "}
              faster than ever.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Managed Agile Pods */}
            <div className="relative bg-slate-800 border border-orange-500/40 rounded-2xl p-8">
              <span className="absolute -top-4 left-6 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                CORE MODEL
              </span>

              <h3 className="text-2xl font-bold text-white mb-3">
                Managed Agile Pods
              </h3>

              <p className="text-slate-300 mb-6">
                Your product, delivered by a fully managed, cross-functional team.
                Each pod includes developers, QA, DevOps, UI/UX, and a Scrum Master —
                working in focused two-week sprint cycles.
              </p>

              <ul className="space-y-3 text-slate-300 mb-6">
                {[
                  "Roadmap aligned to sprint milestones",
                  "Daily standups, demos, and retrospectives",
                  "Real-time dashboards & weekly reports",
                  "You set priorities — we handle execution",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-orange-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-white font-semibold mb-6">
                Predictable Outcomes:
              </p>

              <ul className="space-y-2 text-slate-300">
                <li>⚡ 2–3X faster sprint velocity</li>
                <li>🧠 Zero management overhead</li>
                <li>🔍 Full transparency</li>
                <li>💰 Fixed sprint pricing — no scope creep</li>
              </ul>

              <Link
                href="/solutions/Accelerate-Product-Delivery/Managed-Agile-Pods"
                className="inline-flex items-center gap-2 mt-6 text-orange-500 font-semibold"
              >
                Start with a Managed Agile Pod
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 2. DevOps & Automation */}
            <div className="bg-slate-800 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                DevOps & Automation
              </h3>

              <p className="text-slate-300 mb-6">
                Faster releases, fewer errors, happier users. We automate your
                infrastructure, deployments, and monitoring so your team can focus on
                innovation — not maintenance.
              </p>

              <ul className="space-y-2 text-slate-300 mb-6">
                <li>• CI/CD pipelines</li>
                <li>• Infrastructure as Code (IaC)</li>
                <li>• Cloud setup & migration (AWS, Azure, GCP)</li>
                <li>• Automated monitoring & scaling</li>
                <li>• Security & compliance</li>
              </ul>

              <p className="text-slate-300 mb-6">
                <span className="text-white font-semibold">Outcome:</span> Faster
                releases, smarter resource use, secure infrastructure.
              </p>

              <Link
                href="/solutions/Accelerate-Product-Delivery/DevOps-&-Automation"
                className="inline-flex items-center gap-2 text-orange-400 font-semibold"
              >
                Automate My DevOps Pipeline
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3. Fast MVP Launch */}
            <div className="bg-slate-800 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Fast MVP Launch
              </h3>

              <p className="text-slate-300 mb-6">
                From idea to MVP in weeks — not months. Validate fast, reduce risk, and
                get real feedback before scaling.
              </p>

              <ul className="space-y-2 text-slate-300 mb-6">
                <li>• Product strategy & roadmap</li>
                <li>• UI/UX design</li>
                <li>• MVP development (Web / Mobile / SaaS)</li>
                <li>• QA testing & launch</li>
                <li>• Post-launch analytics</li>
              </ul>

              <p className="text-slate-300 mb-6">
                <span className="text-white font-semibold">Outcome:</span> MVP in 4–6
                weeks with real-world validation.
              </p>

              <Link
                href="/solutions/Accelerate-Product-Delivery/Fast-MVP-Launch"
                className="inline-flex items-center gap-2 text-orange-400 font-semibold"
              >
                Launch My MVP
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 4. Dedicated Engineering Teams */}
            <div className="bg-slate-800 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Dedicated Engineering Teams
              </h3>

              <p className="text-slate-300 mb-6">
                Scale your product capability without recruitment pain. Fully vetted
                engineers working as part of your team.
              </p>

              <ul className="space-y-2 text-slate-300 mb-6">
                <li>• Frontend, Backend & Full Stack Engineers</li>
                <li>• QA Automation Specialists</li>
                <li>• DevOps & Cloud Engineers</li>
                <li>• AI/ML Developers</li>
              </ul>

              <p className="text-slate-300 mb-6">
                <span className="text-white font-semibold">Outcome:</span> Predictable
                delivery, deep expertise, cost-effective scaling.
              </p>

              <Link
                href="/solutions/Accelerate-Product-Delivery/Dedicated-Engineering-Teams"
                className="inline-flex items-center gap-2 text-orange-400 font-semibold"
              >
                Hire a Dedicated Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 5. Continuous Delivery & QA */}
            <div className="md:col-span-2 bg-slate-800 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Continuous Delivery & QA Automation
              </h3>

              <p className="text-slate-300 mb-6">
                We make sure your product performs at its best — every single release.
              </p>

              <ul className="grid md:grid-cols-2 gap-3 text-slate-300 mb-6">
                <li>• Automated test pipelines</li>
                <li>• Regression testing</li>
                <li>• Performance monitoring</li>
                <li>• Real-time bug tracking</li>
              </ul>

              <p className="text-slate-300 mb-6">
                <span className="text-white font-semibold">Result:</span> Faster
                go-lives, zero downtime, happier users.
              </p>

              <Link
                href="/solutions/Accelerate-Product-Delivery/Continuous-Delivery-QA"
                className="inline-flex items-center gap-2 text-orange-400 font-semibold"
              >
                Talk to a QA Specialist
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Why Avaantra */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Why Founders & CTOs Choose{" "}
              <span className="text-orange-500">Avaantra Global</span>
            </h2>

            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Because we think like you.
              <br className="hidden md:block" />
              We’ve led marketing, technology, and SaaS teams for over{" "}
              <span className="text-white font-semibold">20 years</span> — so we
              understand your delivery challenges at a strategic level.
            </p>
          </div>

          {/* Core Message */}
          <div className="bg-slate-800 border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
              When we say{" "}
              <span className="text-white font-semibold">“accelerate”</span>, we don’t
              mean chaos or burnout.
              <br />
              We mean{" "}
              <span className="text-orange-400 font-semibold">
                measurable, sustainable acceleration
              </span>{" "}
              — built on systems, discipline, and accountability.
            </p>
          </div>

          {/* Unique Edge Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Managed Agile Pods",
                desc: "Cross-functional pods delivering faster sprints with full ownership and accountability.",
                icon: "🔁",
              },
              {
                title: "DevOps & QA Automation",
                desc: "Enterprise-grade reliability, stability, and release confidence at scale.",
                icon: "⚙️",
              },
              {
                title: "AI-Augmented Delivery",
                desc: "Smarter execution using automation and predictive insights — not guesswork.",
                icon: "🧠",
              },
              {
                title: "Transparent Communication",
                desc: "Slack, Jira, ClickUp, or Asana — full visibility, zero black boxes.",
                icon: "🤝",
              },
              {
                title: "Predictable Pricing",
                desc: "Fixed sprint or monthly models with no hidden costs or surprises.",
                icon: "💰",
              },
              {
                title: "Product-First Thinking",
                desc: "We align delivery with business outcomes, not just tickets or hours.",
                icon: "🚀",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-white/10 rounded-xl p-6 hover:border-orange-500/40 transition-all"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-16">
            <p className="text-xl font-semibold text-white">
              You don’t just get developers.
              <br />
              <span className="text-orange-500">
                You get a complete product acceleration partner.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Our Process:{" "}
              <span className="text-orange-500">From Concept to Launch</span>
            </h2>

            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We designed our process to keep you in control while we accelerate
              delivery with structure, discipline, and predictable execution.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-6 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Alignment",
                desc: "Understand your goals, bottlenecks, and technical roadmap",
              },
              {
                step: "02",
                title: "Team Setup",
                desc: "Agile Pod or Dedicated delivery model",
              },
              {
                step: "03",
                title: "Sprint Planning",
                desc: "Break down milestones and define sprint goals",
              },
              {
                step: "04",
                title: "Build & Deliver",
                desc: "Two-week sprints with daily standups and QA checks",
              },
              {
                step: "05",
                title: "Review & Optimize",
                desc: "Track velocity, fix bottlenecks, and improve performance",
              },
              {
                step: "06",
                title: "Scale On Demand",
                desc: "Add or pause pods based on product growth cycles",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 hover:translate-y-[-2px] transition-all"
              >
                <div className="text-orange-500 font-bold text-sm mb-3">
                  STEP {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <div className="mt-16 text-center">
            <p className="text-lg font-semibold text-white mb-6">
              Outcome
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 text-slate-300">
              <span className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                Predictable speed
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                Consistent quality
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                Transparent accountability
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Engagement{" "}
              <span className="text-orange-500">Models</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose how you want to work with us — flexible models designed for speed,
              scale, and predictability.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Project-Based",
                bestFor: "Fixed-scope builds (MVPs or features)",
                work: "Pay per project",
                outcome: "Fast delivery, no long-term tie",
              },
              {
                title: "Dedicated Team",
                bestFor: "Long-term resource continuity",
                work: "You manage, we deliver",
                outcome: "Predictable monthly output",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "End-to-end managed, cross-functional sprints",
                work: "Avaantra manages everything",
                outcome: "2–3X faster velocity, full accountability",
                highlight: true,
              },
              {
                title: "DevOps & QA Retainer",
                bestFor: "Ongoing optimization & stability",
                work: "Continuous monitoring",
                outcome: "Stable, scalable infrastructure",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 border transition-all ${item.highlight
                    ? "bg-white border-orange-500/40 shadow-lg"
                    : "bg-white border-slate-200 hover:shadow-lg"
                  }`}
              >
                {item.highlight && (
                  <span className="absolute -top-4 left-6 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {item.title}
                </h3>

                <ul className="space-y-3 text-slate-700 text-sm">
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
                    {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-14 text-slate-700">
            <p className="font-medium mb-4">
              Every engagement model includes:
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <span>✓ NDA & IP protection</span>
              <span>✓ Real-time dashboards</span>
              <span>✓ Transparent pricing</span>
              <span>✓ Monthly performance reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What{" "}
              <span className="text-orange-500">Founders & CTOs</span> Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from teams who needed faster, more predictable product
              delivery.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Avaantra helped us launch our SaaS MVP in 6 weeks. We closed our seed round within 2 months of going live.",
                by: "Founder, HealthTech Startup",
              },
              {
                quote:
                  "Their Agile Pods are incredible. I don’t have to chase updates — I just check the dashboard, and it’s all there.",
                by: "CTO, FinTech SaaS (Singapore)",
              },
              {
                quote:
                  "They scaled our DevOps and QA setup so smoothly — our release cycle went from 10 days to 2.",
                by: "Product Head, B2B SaaS (USA)",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200"
              >
                <div className="text-orange-500 text-4xl leading-none mb-4">“</div>

                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  {item.quote}
                </p>

                <div className="h-px bg-slate-200 mb-4" />

                <p className="font-semibold text-slate-900">
                  {item.by}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Case Study:{" "}
              <span className="text-orange-500">
                Faster Delivery, Happier Users
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              How a FinTech SaaS team fixed slow releases and improved product
              reliability with Avaantra Global.
            </p>
          </div>

          {/* Case Study Card */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 border border-slate-200">
            {/* Left: Context */}
            <div>
              <div className="mb-6">
                <p className="text-sm uppercase tracking-wide font-semibold text-orange-500 mb-1">
                  Client
                </p>
                <p className="text-slate-800 font-medium">
                  FinTech SaaS Company
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm uppercase tracking-wide font-semibold text-orange-500 mb-1">
                  Challenge
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Slow release cycles, bugs in production, and mounting technical debt
                  were impacting user trust and internal velocity.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide font-semibold text-orange-500 mb-1">
                  Solution
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Avaantra deployed{" "}
                  <span className="font-semibold text-slate-800">
                    one Managed Agile Pod
                  </span>{" "}
                  supported by{" "}
                  <span className="font-semibold text-slate-800">
                    DevOps automation and QA pipelines
                  </span>{" "}
                  to stabilize delivery and accelerate releases.
                </p>
              </div>
            </div>

            {/* Right: Results */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <p className="text-lg font-bold text-slate-900 mb-6">
                Results
              </p>

              <ul className="space-y-4">
                {[
                  "Release cycles reduced by 60%",
                  "99.9% uptime post-deployment",
                  "+28% user retention within 3 months",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 items-start text-slate-700 font-medium"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              FAQs —{" "}
              <span className="text-orange-500">
                Common Concerns, Clear Answers
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything founders and CTOs usually ask before getting started.
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Will you take over our product management?",
                a: "No — we work alongside you. You own the product roadmap, while we own sprint execution and delivery.",
              },
              {
                q: "Can you integrate with our existing development team?",
                a: "Yes. Our Agile Pods plug directly into your workflows, tools, and standups with minimal disruption.",
              },
              {
                q: "How do you ensure code quality?",
                a: "We use peer code reviews, automated testing, and QA audits in every sprint to maintain enterprise-grade quality.",
              },
              {
                q: "What if we need to pause or scale down?",
                a: "You can scale pods or teams up or down anytime — no lock-ins or long-term commitments.",
              },
              {
                q: "Do you support both frontend and backend stacks?",
                a: "Absolutely. We work across React, Node, Python, .NET, PHP, Java, Flutter, AWS, Azure, and more.",
              },
              {
                q: "How do we communicate day-to-day?",
                a: "Slack, Jira, ClickUp, Asana, or your preferred tools — we adapt to your communication style.",
              },
              {
                q: "Can you handle post-launch support?",
                a: "Yes. We offer ongoing DevOps and QA retainer models to support scaling and stability post-launch.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-orange-500 font-bold">Q{idx + 1}.</span>
                  {item.q}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why{" "}
              <span className="text-orange-500">This Works</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Traditional hiring and outsourcing models fail product teams at scale.
              Avaantra Global bridges the gaps — without introducing new ones.
            </p>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Old Models */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                What Usually Breaks
              </h3>
              <ul className="space-y-4 text-slate-700">
                <li>✕ Hiring full-time teams is slow and expensive</li>
                <li>✕ Freelancers are inconsistent</li>
                <li>✕ Agencies lack product ownership and technical depth</li>
              </ul>
            </div>

            {/* Avaantra Model */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">
                Why Avaantra Works
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li>
                  <span className="text-orange-500 font-bold">✓</span>{" "}
                  Like a team, we understand your product vision
                </li>
                <li>
                  <span className="text-orange-500 font-bold">✓</span>{" "}
                  Like a partner, we share delivery accountability
                </li>
                <li>
                  <span className="text-orange-500 font-bold">✓</span>{" "}
                  Like a system, we scale without breaking
                </li>
              </ul>
            </div>
          </div>

          {/* Closing Line */}
          <div className="text-center mt-16">
            <p className="text-xl font-semibold text-slate-900">
              We’re the invisible force behind{" "}
              <span className="text-orange-500">
                fast, stable, and scalable
              </span>{" "}
              product growth.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Make{" "}
            <span className="text-orange-500">
              Product Delivery Predictable
            </span>{" "}
            Again
          </h2>

          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Build faster. Ship reliably. Scale confidently — without hiring chaos
            or delivery stress.
          </p>

          <Button
            size="lg"
            className="bg-orange-500 text-black hover:bg-orange-400 rounded-full px-10 h-12 text-base font-semibold shadow-lg"
          >
            Book a Free Strategy Session
          </Button>
        </div>
      </section>
    </main>
  );
}
