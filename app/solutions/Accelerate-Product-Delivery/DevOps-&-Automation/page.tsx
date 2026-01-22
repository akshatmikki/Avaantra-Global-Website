import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Cpu,
  Activity,
  Layers,
  Server,
  Workflow,
  Bug,
} from "lucide-react";

export const metadata = {
  title:
    "DevOps & Automation Services for SaaS & Product Teams | Avaantra Global",
  description:
    "Accelerate product delivery with Avaantra’s DevOps and automation services. Faster releases, fewer errors, and predictable performance for SaaS and startup engineering teams.",
};

export default function DevOpsAutomationPage() {
  const services = [
  {
    title: "CI/CD Pipeline Setup",
    desc: "Automate integration and deployment — no more late-night manual pushes.",
    points: [
      "CI/CD for backend, frontend, and microservices",
      "GitHub Actions, Jenkins, GitLab CI, or CircleCI workflows",
      "Automated builds and rollback systems",
    ],
    outcome: "⚙️ Faster, safer releases with full version control.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    title: "Infrastructure as Code (IaC)",
    desc: "Manage infrastructure like software — consistent, reliable, and repeatable.",
    points: [
      "Terraform, AWS CloudFormation, Ansible",
      "Kubernetes-based infrastructure",
      "Versioned and auditable infra changes",
    ],
    outcome: "🧱 Seamless provisioning and environment replication in minutes.",
    icon: <Server className="w-8 h-8" />,
  },
  {
    title: "Cloud Setup & Optimization",
    desc: "Ensure your app performs efficiently, scales smoothly, and stays secure.",
    points: [
      "AWS, Azure, and Google Cloud support",
      "Auto-scaling & load balancing",
      "Cost optimization & monitoring",
    ],
    outcome: "☁️ Stable performance, lower cloud bills, zero downtime.",
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    title: "Continuous Testing & QA Automation",
    desc: "Catch bugs before they reach production.",
    points: [
      "Automated regression & smoke tests",
      "Integration testing pipelines",
      "Performance & stress testing",
    ],
    outcome: "🐞 50% fewer post-release issues and happier users.",
    icon: <Bug className="w-8 h-8" />,
  },
  {
    title: "Monitoring, Logging & Alerts",
    desc: "Stay proactive — know what’s wrong before your users do.",
    points: [
      "Grafana, Prometheus, ELK Stack",
      "Datadog & AWS CloudWatch setup",
      "Real-time alerts & dashboards",
    ],
    outcome: "📊 Real-time performance insights and instant error detection.",
    icon: <Activity className="w-8 h-8" />,
  },
];


  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0b1c2d] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Deliver Faster. Deploy Smarter.
            <br />
            <span className="text-orange-400">Automate Everything.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Tired of slow releases, manual errors, and endless deployment delays?
            <br className="hidden md:block" />
            Avaantra Global helps SaaS and product teams accelerate delivery with{" "}
            <span className="font-semibold text-white">
              modern DevOps and automation systems
            </span>{" "}
            that bring reliability, speed, and predictability — without increasing
            your workload.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-orange-500 text-black hover:bg-orange-400 rounded-full px-10 h-12 text-base font-semibold shadow-lg transition-all"
            >
              Book a Free DevOps Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>


      {/* Problem */}
     <section className="py-24 md:py-32 px-4 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
    {/* Left */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 leading-tight">
        The Real Problem{" "}
        <span className="text-orange-500">Product Teams Face</span>
      </h2>

      <p className="text-lg text-slate-600 mb-10 leading-relaxed">
        You’ve built a great product — but your delivery cycle is broken.
      </p>

      <ul className="space-y-5 text-slate-700">
        {[
          "Every release feels risky",
          "Manual deployments lead to errors and downtime",
          "QA happens late or inconsistently",
          "Developers and operations don’t sync smoothly",
          "Fixing infrastructure issues eats into build time",
        ].map((item, idx) => (
          <li key={idx} className="flex gap-4 items-start">
            <span className="text-orange-500 font-bold mt-1">✕</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Right */}
    <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
      <p className="text-slate-700 mb-4 leading-relaxed">
        As a result, releases slow down.
      </p>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Your users notice bugs before you do. Growth stalls — not because of
        code, but because delivery is chaotic.
      </p>

      <p className="text-lg font-semibold text-slate-900 leading-relaxed">
        You don’t need more developers.
        <br />
        <span className="text-orange-500">
          You need a DevOps system that works predictably.
        </span>
      </p>

      <p className="mt-4 text-slate-600">
        That’s what Avaantra Global provides.
      </p>
    </div>
  </div>
</section>

      {/* Promise */}
     <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
      Our Promise: Faster Releases, Fewer Errors, Happier Users
    </h2>

    {/* Subtitle */}
    <p className="max-w-3xl mx-auto text-slate-600 text-lg">
      We transform your delivery pipeline into a self-running, automated engine
      that continuously integrates, tests, and deploys updates — safely and
      efficiently.
    </p>

    {/* Features */}
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {[
        "Automated CI/CD pipelines",
        "Infrastructure as Code (IaC)",
        "Continuous testing & monitoring",
        "Cloud optimization & scaling",
        "Zero manual errors",
        "End-to-end automation",
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
        >
          <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
          <p className="font-medium text-slate-800">{item}</p>
        </div>
      ))}
    </div>

    {/* Predictable Outcomes */}
    <h3 className="text-2xl font-semibold text-slate-900 mt-16 mb-8">
      Predictable Outcomes
    </h3>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "40–60% faster deployment cycles",
        "99.9% uptime",
        "30–50% fewer production bugs",
        "Complete visibility into releases",
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-slate-900 rounded-xl p-6 shadow text-white"
        >
          <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-3" />
          <p className="font-semibold">{item}</p>
        </div>
      ))}
    </div>

    {/* Closing Line */}
    <p className="mt-12 text-lg text-slate-700">
      <span className="font-semibold text-slate-900">You focus on innovation.</span>{" "}
      <span className="text-orange-600 font-semibold">
        We make sure every update reaches users reliably.
      </span>
    </p>
  </div>
</section>

      {/* Services */}
      <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        Our DevOps & Automation Services
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        We help SaaS companies and startups build stable, scalable, and automated
        delivery pipelines from end to end.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {services.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-8 border border-slate-100
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Icon */}
          <div className="mb-4 text-orange-500">{item.icon}</div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-slate-900">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 mb-4">{item.desc}</p>

          {/* Bullets */}
          <ul className="text-sm text-slate-600 space-y-2 mb-4">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Outcome */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-sm font-semibold text-slate-900">
              Outcome:
            </p>
            <p className="text-sm text-orange-600 font-semibold">
              {item.outcome}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Trust */}
      <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        Why SaaS Teams Choose Avaantra Global
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-slate-600">
        Because we’re not just engineers — we’re{" "}
        <span className="font-semibold text-slate-900">
          product-minded DevOps partners
        </span>
        . We help you achieve clarity, speed, and control — not tool overload.
      </p>
    </div>

    {/* Trust Grid */}
    <div className="grid md:grid-cols-3 gap-6">
      {[
        "DevOps-certified engineers",
        "Cloud-native & multi-cloud expertise",
        "AI-enhanced monitoring & automation",
        "Sprint-based delivery & reporting",
        "No vendor lock-in",
        "Full infrastructure & code ownership",
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 border border-slate-100
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <CheckCircle className="w-6 h-6 text-orange-500 mb-3" />
          <p className="font-semibold text-slate-900">{item}</p>
        </div>
      ))}
    </div>

    {/* Closing Line */}
    <p className="text-center mt-12 text-lg text-slate-700">
      We make your delivery{" "}
      <span className="font-semibold text-slate-900">reliable and repeatable</span>{" "}
      — so you can{" "}
      <span className="font-semibold text-orange-600">scale faster</span>.
    </p>
  </div>
</section>


      {/* Process */}
   <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 text-white">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Our Process: From Chaos to Continuous Delivery
      </h2>
      <p className="text-slate-300">
        A structured, low-risk approach to fixing delivery without disruption.
      </p>
    </div>

    {/* Process Steps */}
    <div className="grid md:grid-cols-5 gap-4">
      {[
        {
          step: "01",
          title: "Audit & Discovery",
          desc: "We analyze your current development-to-release workflow.",
        },
        {
          step: "02",
          title: "Automation Blueprint",
          desc: "We map bottlenecks and design your CI/CD and DevOps roadmap.",
        },
        {
          step: "03",
          title: "Implementation & Cloud Setup",
          desc: "We build infrastructure, pipelines, and testing automation.",
        },
        {
          step: "04",
          title: "Testing & Rollout",
          desc: "We run dry runs, validate performance, and deploy safely.",
        },
        {
          step: "05",
          title: "Continuous Improvement",
          desc: "We monitor, optimize, and scale based on usage patterns.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white/10 border border-white/20 rounded-xl p-6
                     hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="text-3xl font-bold text-indigo-300 mb-3">
            {item.step}
          </div>
          <h3 className="font-bold mb-2">{item.title}</h3>
          <p className="text-sm text-slate-200">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Outcome */}
    <div className="mt-12 text-center">
      <p className="text-lg font-semibold text-white mb-4">Outcome</p>
      <div className="flex flex-col md:flex-row justify-center gap-4 text-slate-300">
        <span>✔ Predictable delivery cycles</span>
        <span>✔ Zero deployment drama</span>
        <span>✔ Happier engineers and users</span>
      </div>
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
        Flexible DevOps engagement based on your growth stage.
      </p>
    </div>

    {/* Models Grid */}
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: "DevOps Audit Sprint",
          bestFor: "Teams with broken delivery cycles",
          how: "2-week audit & roadmap",
          outcome: "Identify and fix bottlenecks",
        },
        {
          title: "Managed DevOps Retainer",
          bestFor: "SaaS with ongoing releases",
          how: "Avaantra manages entire DevOps lifecycle",
          outcome: "24/7 stability",
        },
        {
          title: "Dedicated DevOps Engineer",
          bestFor: "Hybrid teams",
          how: "You manage, we execute",
          outcome: "Faster delivery & full visibility",
        },
        {
          title: "Cloud Optimization Sprint",
          bestFor: "Cost or performance issues",
          how: "4-week optimization plan",
          outcome: "Reduce spend, boost uptime",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-slate-100 rounded-2xl p-8
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
              <span className="font-semibold">{item.outcome}</span>
            </li>
          </ul>
        </div>
      ))}
    </div>

    {/* Included Items */}
    <div className="text-center mt-12">
      <p className="font-semibold text-slate-900 mb-3">All plans include</p>
      <div className="flex flex-col md:flex-row justify-center gap-4 text-slate-600">
        <span>✔ NDA & IP ownership</span>
        <span>✔ Real-time dashboards</span>
        <span>✔ 24/7 monitoring option</span>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        What Clients Say
      </h2>
    </div>

    {/* Testimonials */}
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          quote:
            "Our deployment cycle went from 10 days to 2. We’ve never had a smoother release process.",
          by: "CTO, SaaS Platform",
          location: "USA",
        },
        {
          quote:
            "Avaantra automated everything. Now we deploy confidently every week.",
          by: "Engineering Head, FinTech Startup",
          location: "Singapore",
        },
        {
          quote:
            "Their DevOps team saved us 35% in cloud costs while improving uptime.",
          by: "Founder, B2B SaaS",
          location: "UK",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 border border-slate-100
                     hover:shadow-xl transition-all duration-300"
        >
          {/* Quote */}
          <p className="italic text-slate-700 mb-4 leading-relaxed">
            “{item.quote}”
          </p>

          {/* Author */}
          <div className="pt-4 border-t border-slate-100">
            <p className="font-semibold text-slate-900">
              {item.by}
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
     <section className="py-20 px-4 bg-slate-800">
  <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-2xl p-10 shadow-sm">
    {/* Heading */}
    <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
      Case Study: From Chaos to Continuous Delivery
    </h2>

    {/* Meta Info */}
    <div className="grid md:grid-cols-3 gap-6 mb-10 text-slate-700">
      <p>
        <span className="font-semibold text-slate-900">Client:</span>{" "}
        SaaS Product (India)
      </p>
      <p>
        <span className="font-semibold text-slate-900">Challenge:</span>{" "}
        Manual deployments & frequent rollback errors
      </p>
      <p>
        <span className="font-semibold text-slate-900">Solution:</span>{" "}
        Full CI/CD + IaC setup + automated testing
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
            4× faster release cycles
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-orange-600 font-bold">✔</span>
          <span className="font-semibold text-slate-800">
            0 production rollbacks in 3 months
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-orange-600 font-bold">✔</span>
          <span className="font-semibold text-slate-800">
            99.98% uptime
          </span>
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* FAQs */}
    <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-4xl mx-auto">
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        FAQs — Before You Automate
      </h2>
    </div>

    {/* FAQ List */}
    <div className="space-y-6">
      {[
        {
          q: "Can you integrate with our existing stack?",
          a: "Yes. We integrate with any CI/CD, cloud, or project management tools you already use.",
        },
        {
          q: "What if our app isn’t cloud-native yet?",
          a: "We help you containerize and migrate safely without disrupting production.",
        },
        {
          q: "Will this disrupt our current release schedule?",
          a: "No. Automation is built alongside your live system with zero downtime.",
        },
        {
          q: "Do you offer 24/7 monitoring?",
          a: "Yes, through our Managed DevOps Retainer option.",
        },
        {
          q: "How soon can we start?",
          a: "Within 7 business days after the initial audit.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 border border-slate-100
                     hover:shadow-lg transition-all duration-300"
        >
          <h3 className="font-bold text-slate-900 mb-2">
            {item.q}
          </h3>
          <p className="text-slate-600">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Final CTA */}
     <section className="py-16 px-4 bg-slate-950 text-white">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Why This Works
    </h2>

    <p className="text-lg text-slate-300 mb-3">
      Automation is not a luxury — it’s survival.
    </p>

    <p className="text-slate-400 leading-relaxed">
      Modern SaaS companies can’t afford downtime or manual errors.
      We bring the systems, speed, and reliability your product team needs to win.
    </p>
  </div>
</section>
<section className="py-16 px-4 bg-slate-900 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-2xl md:text-3xl font-semibold leading-snug text-slate-100">
      With{" "}
      <span className="text-orange-400 font-bold">
        Avaantra Global
      </span>
      , you don’t just ship code —
      <br />
      you ship{" "}
      <span className="text-orange-400 font-bold">
        confidently, continuously, and predictably
      </span>.
    </p>
  </div>
</section>

<section className="py-20 px-4 bg-slate-800 text-white">
  <div className="max-w-3xl mx-auto text-center">
    <h3 className="text-2xl md:text-3xl font-bold mb-6">
      🎯 Ready to Automate and Accelerate Delivery?
    </h3>

    <Button
      size="lg"
      className="bg-white text-slate-900 hover:bg-slate-100
                 px-8 py-4 text-lg font-semibold
                 transform hover:scale-105 transition-all duration-300
                 hover:shadow-2xl"
    >
      Book Your Free DevOps Consultation →
    </Button>
  </div>
</section>

    </main>
  );
}
