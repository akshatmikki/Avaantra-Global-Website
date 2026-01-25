import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Layers,
  PenTool,
  Code,
  Bug,
  BarChart,
} from "lucide-react";

export const metadata = {
  title: "Fast MVP Development & Launch Services | Avaantra Global",
  description:
    "Validate your SaaS or startup idea faster with Avaantra Global. Get a fully functional MVP in 4–8 weeks — designed, built, and launched for real users with predictable outcomes.",
};

export default function FastMVPPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* subtle background grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Launch Your MVP in Weeks —{" "}
            <span className="text-orange-400">Not Months</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            You have the idea. The vision. The market need.
            <br />
            But turning that idea into a working product feels slow, complex, and expensive.
            <br />
            <span className="text-slate-200 font-medium">
              At Avaantra Global, we help founders and product teams design, build, and launch
              a functional MVP in{" "}
              <span className="text-orange-400 font-semibold">4–8 weeks</span> — fast,
              validated, and investor-ready.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            {/* Primary CTA */}
            <Button
              size="lg"
              className="cursor-pointer group bg-white text-slate-900 px-8 py-4 text-lg font-semibold
                   hover:bg-slate-100 transform hover:scale-105
                   transition-all duration-300 hover:shadow-2xl"
            >
              Book a Free MVP Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            </Link>

          </div>
        </div>
      </section>


      {/* Problem */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              The Real Problem You’re Facing
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              You’ve done your research. You know there’s demand.
              <br />
              But when you try to build your MVP, reality hits.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 md:p-12 border border-slate-100">
            {/* Left: Problems */}
            <ul className="space-y-4 text-slate-700 text-lg">
              {[
                "Hiring a dev team takes months",
                "Freelancers overpromise and underdeliver",
                "Costs spiral out of control",
                "You’re stuck managing tech instead of building your business",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Right: Impact */}
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="font-semibold mb-4 text-slate-900">
                And every delay means:
              </p>

              <ul className="space-y-2 text-slate-700">
                <li>❌ Missed market timing</li>
                <li>❌ Missed investor interest</li>
                <li>❌ Missed first-mover advantage</li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-900 text-lg">
                  You don’t need more developers.
                </p>
                <p className="font-semibold text-orange-600 text-lg">
                  You need a structured, sprint-based MVP launch system —
                  predictable, fast, and validated.
                </p>
                <p className="mt-2 text-slate-600 font-medium">
                  That’s what Avaantra Global delivers.
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
            Our Promise: From Idea to Live MVP in{" "}
            <span className="text-orange-600">4–8 Weeks</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            We help you build only what matters, validate fast, and go live with a real,
            working MVP — designed to attract early adopters and investors.
          </p>

          {/* Promise Cards */}
          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {[
              "4–8 week MVP delivery",
              "Real-user validation",
              "UI/UX, development & QA managed",
              "Scalable codebase for future growth",
              "Transparent fixed pricing",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100
                     hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <p className="font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <div className="mt-14 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Predictable Outcome
            </h3>

            <div className="flex flex-col md:flex-row justify-center gap-6 text-slate-700 font-medium">
              <span>✔ Live, investor-ready MVP in record time</span>
              <span>✔ Market feedback from day one</span>
              <span>✔ Lower burn rate, higher ROI</span>
            </div>

            <p className="mt-8 text-lg font-semibold text-slate-900">
              We don’t build prototypes.
              <br />
              <span className="text-orange-600">
                We build functional products that test your market fit fast.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
   <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        Our Fast MVP Development Services
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        We combine design thinking, agile execution, and technical expertise
        to build your MVP the smart way — fast, focused, and future-ready.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          icon: <Layers className="w-8 h-8 text-orange-500" />,
          title: "Product Discovery & Scoping",
          desc: "Define the core problem, priority features, user journeys, and roadmap.",
          outcome:
            "Clear product vision and technical direction before you spend a dollar on development.",
        },
        {
          icon: <PenTool className="w-8 h-8 text-orange-500" />,
          title: "UI/UX Design & Prototyping",
          desc: "Wireframes, user flows, clickable prototypes, and brand-aligned UI design.",
          outcome:
            "Intuitive, user-centered design that reduces friction and boosts early adoption.",
        },
        {
          icon: <Code className="w-8 h-8 text-orange-500" />,
          title: "Rapid MVP Development",
          desc: "Sprint-based Agile development using modern, scalable tech stacks.",
          outcome:
            "Fully functional MVP built fast — no fluff, no wasted time.",
        },
        {
          icon: <Bug className="w-8 h-8 text-orange-500" />,
          title: "QA, Testing & Launch",
          desc: "Automation testing, device/browser checks, and smooth production rollout.",
          outcome:
            "Stable MVP launch that impresses early users and investors.",
        },
        {
          icon: <BarChart className="w-8 h-8 text-orange-500" />,
          title: "Real-World Validation & Analytics",
          desc: "User tracking, heatmaps, funnels, and engagement insights.",
          outcome:
            "Clear validation data to guide iterations or strengthen investor pitches.",
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
        Why Founders & Product Leaders Choose Avaantra Global
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Because we understand your real goals — speed, validation, and scalability.
        We don’t waste months building nice-to-haves.
        <br />
        We focus on the <span className="font-semibold">20%</span> that delivers
        <span className="font-semibold"> 80%</span> of the value.
      </p>
    </div>

    {/* Advantages Grid */}
    <div className="grid md:grid-cols-3 gap-6">
      {[
        "Proven MVP launch framework",
        "4–8 week guaranteed delivery",
        "Fixed-scope, fixed-cost model",
        "Dedicated product manager",
        "Scalable codebase for growth",
        "Post-launch support & momentum",
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
      You don’t just get an MVP —{" "}
      <span className="text-orange-600">you get momentum.</span>
    </p>
  </div>
</section>


      {/* MVP Launch Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Our Fast MVP Launch Process
      </h2>
      <p className="text-slate-300 max-w-3xl mx-auto">
        We’ve refined our process to make MVP building fast, simple,
        and stress-free — without chaos.
      </p>
    </div>

    {/* Process Grid */}
    <div className="grid md:grid-cols-5 gap-4">
      {[
        {
          step: "01",
          title: "Discovery Call",
          desc: "Define product vision, goals, and core features (1–2 days).",
        },
        {
          step: "02",
          title: "Wireframes & Blueprint",
          desc: "Clickable designs and a clear MVP roadmap (Week 1).",
        },
        {
          step: "03",
          title: "Sprint-Based Development",
          desc: "Agile builds with demos every 2 weeks (Weeks 2–6).",
        },
        {
          step: "04",
          title: "QA & Beta Launch",
          desc: "Testing, fixes, and launch to real users (Week 7).",
        },
        {
          step: "05",
          title: "Feedback & Validation",
          desc: "Usage tracking and investor-readiness (Week 8).",
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
      <h3 className="text-xl font-bold mb-4 text-slate-100">
        Outcome
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-slate-300 font-medium">
        <span>✔ Live MVP in 4–8 weeks</span>
        <span>✔ Feedback-backed iteration plan</span>
        <span>✔ Scalable product foundation</span>
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
        Choose the model that matches your speed and complexity.
      </p>
    </div>

    {/* Models Grid */}
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: "MVP Fast Track (Fixed Price)",
          bestFor: "Startups & SaaS founders",
          how: "Fixed scope, delivered in 4–8 weeks",
          outcome: "Predictable cost & timeline",
        },
        {
          title: "MVP + Growth Retainer",
          bestFor: "Founders seeking validation & early growth",
          how: "Includes post-launch GTM & analytics",
          outcome: "Faster traction",
        },
        {
          title: "Managed Agile Pod",
          bestFor: "Complex or multi-feature MVPs",
          how: "Avaantra manages the entire sprint team",
          outcome: "2–3× faster execution",
        },
        {
          title: "Tech + Marketing Hybrid Pod",
          bestFor: "SaaS teams needing build + launch together",
          how: "Engineers and marketers working as one pod",
          outcome: "End-to-end execution",
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
        All models include
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 text-slate-600">
        <span>✔ NDA & IP ownership</span>
        <span>✔ Transparent dashboards</span>
        <span>✔ Fixed sprint pricing</span>
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
        What Founders Say
      </h2>
      <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
        Real feedback from founders who shipped fast, validated early,
        and moved forward with confidence.
      </p>
    </div>

    {/* Testimonials */}
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          quote:
            "We had our SaaS MVP ready in 6 weeks — it looked and worked like a finished product.",
          by: "Founder, FinTech Startup",
          location: "UK",
        },
        {
          quote:
            "Avaantra helped us validate early and raise funding in 2 months. Worth every penny.",
          by: "Co-Founder, EdTech Platform",
          location: "India",
        },
        {
          quote:
            "They understood our idea better than we did. The MVP was live before we expected.",
          by: "CTO, HealthTech Startup",
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
    <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
        Case Study: From Idea to Live Product in 6 Weeks
      </h2>

      {/* Meta Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-10 text-slate-700">
        <p>
          <span className="font-semibold text-slate-900">Client:</span>{" "}
          Early-stage HealthTech Startup
        </p>
        <p>
          <span className="font-semibold text-slate-900">Challenge:</span>{" "}
          No tech team, tight funding, needed a live MVP for investors
        </p>
        <p>
          <span className="font-semibold text-slate-900">Solution:</span>{" "}
          Cross-platform MVP using Flutter + Node with analytics dashboard
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
              MVP live in 6 weeks
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-600 font-bold">✔</span>
            <span className="font-semibold text-slate-800">
              1,200 beta signups in 30 days
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-600 font-bold">✔</span>
            <span className="font-semibold text-slate-800">
              Secured $250K in seed funding
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
        FAQs — Before You Build
      </h2>
      <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
        Straight answers to the most common questions founders ask
        before building their MVP.
      </p>
    </div>

    {/* FAQ List */}
    <div className="space-y-6">
      {[
        {
          q: "Do I need technical knowledge?",
          a: "No. We guide you through every decision — from product design to deployment and launch.",
        },
        {
          q: "What if I want to add more features later?",
          a: "That’s expected. Your MVP is built on a scalable codebase, so features can be added after validation.",
        },
        {
          q: "How much does a Fast MVP typically cost?",
          a: "Most MVPs range between $8K–$25K depending on complexity, integrations, and scope.",
        },
        {
          q: "Can you help after launch?",
          a: "Yes. We offer post-MVP GTM, optimization, and growth retainers.",
        },
        {
          q: "Who owns the IP and code?",
          a: "You do. 100% IP and code ownership — always.",
        },
        {
          q: "What tools do you use for collaboration?",
          a: "Slack, Jira, ClickUp, and our custom Avaantra dashboards for full visibility.",
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

<section className="py-20 px-4 bg-slate-950 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
      Why This Works
    </h2>

    <p className="text-lg text-slate-300 mb-4">
      Because the biggest startup risk isn’t failure — it’s moving too slow.
    </p>

    <p className="text-slate-400 mb-8 leading-relaxed">
      Speed + validation = traction.
      <br />
      We help you launch fast, test smart, and scale confidently.
    </p>

    <p className="text-xl font-semibold text-slate-200">
      Your idea deserves to go live — not sit in a document.
      <br />
      <span className="text-orange-400 font-bold">
        Let’s make it happen.
      </span>
    </p>
  </div>
</section>

      {/* Final CTA */}
     <section className="py-24 px-4 bg-slate-900 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
      Launch Your MVP in Weeks — Not Months
    </h2>

    <p className="text-lg text-slate-300 mb-10">
      Your idea deserves to go live — not sit in a document.
    </p>

      <Link href="/contact">
    <Button
      size="lg"
      className="cursor-pointer group bg-white text-slate-900 px-8 py-4 text-lg font-semibold
                 hover:bg-slate-100 transform hover:scale-105
                 transition-all duration-300 hover:shadow-2xl"
    >
      Book a Free MVP Strategy Call
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
    </Button>
      </Link>
  </div>
</section>

    </main>
  );
}
