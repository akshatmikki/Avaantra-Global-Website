import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Hire Talent Fast | Skilled Developers, Marketers & Leaders",
  description:
    "Hire skilled developers, marketers, designers, and technology leaders in just 15 days — without hiring stress or long-term risk.",
};
export default function HirePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* HERO – Hire Talent */}
      <section className="relative bg-[#0F172A] text-white">
        <div className="container mx-auto px-6 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <span className="inline-block mb-4 rounded-full bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-400">
                Hire Talent On-Demand
              </span>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Build Your Team Faster
                <span className="block text-orange-500 mt-2">
                  Without Full-Time Overhead
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-xl text-[#CBD5E1] text-lg leading-relaxed">
                You don’t need more permanent employees. You need skilled
                developers, marketers, designers, and leaders who can start fast
                and deliver real results.
              </p>

              <p className="mt-3 max-w-xl text-[#94A3B8]">
                Avaantra Global helps you hire ready-to-work experts in just
                <span className="text-orange-400 font-medium"> 15 days </span>—
                without hiring stress or long-term risk.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-xl
                bg-[#F97316] hover:bg-[#EA580C]
                px-8 py-4 font-semibold text-white
                shadow-lg shadow-orange-500/30 transition"
                >
                  Book a Free Hiring Consultation
                </Link>

                <Link
                  href="/how-we-hire"
                  className="inline-flex items-center justify-center rounded-xl
                border border-white/20 px-8 py-4
                font-medium text-white
                transition hover:border-orange-400 hover:text-orange-400"
                >
                  See How Our Hiring Model Works →
                </Link>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div
              className="
    relative rounded-2xl p-8
    bg-gradient-to-br from-orange-500/25 via-orange-500/10 to-transparent
    border border-orange-500/30
    cursor-pointer

    animate-fade-up
    transition-all duration-300
    hover:-translate-y-2
    hover:shadow-[0_20px_40px_rgba(249,115,22,0.25)]
  "
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-orange-400">
                What You Get With Avaantra
              </h3>

              <ul className="space-y-5">
                {[
                  {
                    title: "Ready-to-Start Experts",
                    desc: "Pre-vetted talent deployed in 15 days",
                  },
                  {
                    title: "100% Dedicated Resources",
                    desc: "Fully focused on your product and goals",
                  },
                  {
                    title: "Lower Cost Than Full-Time Hiring",
                    desc: "Save up to 40% without sacrificing quality",
                  },
                  {
                    title: "Avaantra-Managed Delivery",
                    desc: "Daily updates, reporting, and accountability",
                  },
                  {
                    title: "Scale Up or Down Anytime",
                    desc: "Flexible teams as your needs evolve",
                  },
                  {
                    title: "IP & NDA Protected",
                    desc: "Full confidentiality and ownership",
                  },
                  {
                    title: "Clear Reports & Full Transparency",
                    desc: "Complete visibility into progress, performance, and outcomes",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-[#CBD5E1]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* PROBLEM vs PROMISE */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              The Reality of Hiring
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              The Real Problem — And the Right Way to Solve It
            </h2>

            <p className="text-[#475569] text-[16px]">
              Most businesses don’t fail because of ideas. They fail because
              they can’t build and support the right team fast enough.
            </p>
          </div>

          {/* Comparison Table */}
          <div
            className="
                grid lg:grid-cols-2
                rounded-2xl overflow-hidden bg-white
                border border-[#E2E8F0]
                shadow-[0_8px_24px_rgba(15,23,42,0.08),0_0_0_1px_rgba(249,115,22,0.08)]
            "
          >
            {/* LEFT — PROBLEMS */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
              <h3 className="text-[22px] font-semibold text-[#0F172A] mb-6">
                The Real Problem Today
              </h3>

              <ul className="space-y-4 text-[#475569]">
                {[
                  "You have work to deliver but not enough people",
                  "Hiring takes too long",
                  "Freelancers are not reliable",
                  "Outsourcing companies don’t take ownership",
                  "Quality drops when the team is small",
                  "Deadlines are missed due to lack of support",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 text-[#DC2626] font-bold text-sm leading-none">
                      ✕
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — PROMISE */}
            <div className="p-8 bg-[#0F172A] text-white">
              <h3 className="text-[22px] font-semibold mb-4">
                What You Really Need
              </h3>

              <p className="text-[#CBD5E1] mb-6">
                A dedicated expert or team that is fast to hire, easy to manage,
                skilled, and trustworthy.
                <br />
                <span className="text-white font-medium">
                  That’s exactly what we provide.
                </span>
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm">
                {[
                  "Pre-vetted experts in 15 days",
                  "100% focused on your project",
                  "Avaantra project manager if needed",
                  "Full IP & NDA protection",
                  "Scale or replace anytime",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#F97316] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* RESULTS STRIP */}
              <div className="pt-5 border-t border-white/10 flex gap-8 text-sm">
                <div>
                  <p className="text-white font-bold">Faster Hiring</p>
                  <p className="text-[#94A3B8]">Days, not months</p>
                </div>
                <div>
                  <p className="text-white font-bold">Lower Costs</p>
                  <p className="text-[#94A3B8]">No payroll overhead</p>
                </div>
                <div>
                  <p className="text-white font-bold">Full Ownership</p>
                  <p className="text-[#94A3B8]">IP & delivery control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire From Our Expert Groups */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Expert Hiring
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Hire From Our Expert Groups
            </h2>

            <p className="text-[#475569] text-[16px]">
              We help you hire trusted talent across engineering, marketing,
              leadership, and full delivery teams — without hiring risk.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 1. Hire Developers */}
            <div
              className="
    group relative
    border border-[#E2E8F0]
    rounded-2xl p-8 bg-white
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]
  "
            >
              {/* top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

              {/* icon + title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F97316] flex items-center justify-center text-xl">
                  💻
                </div>
                <h3 className="text-[22px] font-semibold text-[#0F172A]">
                  Hire Developers
                </h3>
              </div>

              <p className="text-[#475569] mb-5">
                Build software, applications, or cloud systems with skilled
                engineers.
              </p>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-[#475569] mb-6">
                {[
                  ".NET Developers",
                  "Python Developers",
                  "MERN / MEAN Developers",
                  "Full-Stack Developers",
                  "React & Node Developers",
                  "AWS & Azure Engineers",
                  "DevOps Engineers",
                  "QA Testers",
                  "AI & ML Developers",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E2E8F0] pt-4 flex justify-between items-center">
                <p className="text-sm font-medium text-[#0F172A]">
                  Result: Faster development & stable releases
                </p>
                <Link
                  href="/Hire/hire-developers"
                  className="text-[#F97316] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition"
                >
                  Explore Roles →
                </Link>
              </div>
            </div>

            {/* 2. Hire Digital Marketing Experts */}
            <div
              className="
    group relative
    border border-[#E2E8F0]
    rounded-2xl p-8 bg-white
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]
  "
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F97316] flex items-center justify-center text-xl">
                  📈
                </div>
                <h3 className="text-[22px] font-semibold text-[#0F172A]">
                  Hire Digital Marketing Experts
                </h3>
              </div>

              <p className="text-[#475569] mb-5">
                Grow traffic, leads, and revenue with performance-driven
                marketers.
              </p>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-[#475569] mb-6">
                {[
                  "SEO, SMO & PPC Experts",
                  "Marketing Automation",
                  "Content Writers & Planners",
                  "CRO Specialists",
                  "Performance Marketers",
                  "Marketing Consultants",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E2E8F0] pt-4 flex justify-between items-center">
                <p className="text-sm font-medium text-[#0F172A]">
                  Result: Higher ROI & lower cost per lead
                </p>
                <Link
                  href="/Hire/hire-marketing-experts"
                  className="text-[#F97316] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition"
                >
                  Explore Experts →
                </Link>
              </div>
            </div>

            {/* 3. Hire CXOs & Technology Leaders */}
            <div
              className="
    group relative
    border border-[#E2E8F0]
    rounded-2xl p-8 bg-white
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]
  "
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F97316] flex items-center justify-center text-xl">
                  🧠
                </div>
                <h3 className="text-[22px] font-semibold text-[#0F172A]">
                  Hire CXOs & Technology Leaders
                </h3>
              </div>

              <p className="text-[#475569] mb-5">
                Get senior leadership without the cost or commitment of
                full-time executives.
              </p>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-[#475569] mb-6">
                {[
                  "Virtual CTO",
                  "Virtual CMO",
                  "Product Strategy Consultants",
                  "Technology Advisors",
                  "Fractional CXO Teams",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E2E8F0] pt-4 flex justify-between items-center">
                <p className="text-sm font-medium text-[#0F172A]">
                  Result: Better decisions & faster progress
                </p>
                <Link
                  href="/Hire/hire-virtual-leadership"
                  className="text-[#F97316] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition"
                >
                  Explore Leadership →
                </Link>
              </div>
            </div>

            {/* 4. Hire Dedicated Teams */}
            <div
              className="
    group relative
    border border-[#E2E8F0]
    rounded-2xl p-8
    bg-white
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]
  "
            >
              {/* top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

              {/* icon + title */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="
        w-12 h-12 rounded-xl
        bg-orange-100 text-[#F97316]
        flex items-center justify-center
        text-xl
        group-hover:scale-105 transition
      "
                >
                  👨‍💻
                </div>

                <h3 className="text-[22px] font-semibold text-[#0F172A]">
                  Hire Dedicated Teams
                </h3>
              </div>

              {/* description */}
              <p className="text-[#475569] mb-5">
                Get a fully managed, cross-functional team instead of hiring one
                role at a time.
              </p>

              {/* roles */}
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-[#475569] mb-6">
                {[
                  "SaaS Product Teams",
                  "Web & Cloud Teams",
                  "Mobile App Teams",
                  "AI & Data Teams",
                  "Digital Marketing Teams",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* outcome */}
              <div className="border-t border-[#E2E8F0] pt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-[#0F172A]">
                  Result: Faster delivery, zero management stress
                </p>

                <Link
                  href="/Hire/hire-dedicated-teams"
                  className="text-[#F97316] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Hire a Dedicated Team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How Our Hiring Model Works */}
      <section className="py-20 px-4 bg-[#F8FAFC]" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Hiring Process
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              How Our Hiring Model Works
            </h2>

            <p className="text-[#475569] text-[16px]">
              We made hiring simple, transparent, and predictable — without the
              usual chaos.
            </p>
          </div>

          {/* Steps */}
          <div className="grid lg:grid-cols-5 gap-6 mb-14">
            {[
              {
                step: "01",
                title: "Share Your Needs",
                desc: "Tell us the roles you need. A hiring consultant is assigned.",
              },
              {
                step: "02",
                title: "Get Pre-Vetted Profiles",
                desc: "Receive 3–5 matched profiles within 48 hours. All skills tested.",
              },
              {
                step: "03",
                title: "Interview & Select",
                desc: "You interview candidates and choose the best fit.",
              },
              {
                step: "04",
                title: "Onboarding",
                desc: "Your expert joins within 15 days. We handle setup.",
              },
              {
                step: "05",
                title: "Ongoing Delivery",
                desc: "Daily standups and weekly reports keep everything visible.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            group bg-white
            border border-[#E2E8F0]
            rounded-2xl p-6
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]
          "
              >
                {/* step number */}
                <div className="mb-4">
                  <span className="text-[#F97316] font-bold text-sm">
                    Step {item.step}
                  </span>
                </div>

                <h3 className="text-[18px] font-semibold text-[#0F172A] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="max-w-4xl mx-auto bg-white border border-[#E2E8F0] rounded-2xl p-8 flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="text-center md:text-left">
              <h4 className="text-[20px] font-semibold text-[#0F172A] mb-1">
                The Result
              </h4>
              <p className="text-[#475569]">
                A hiring experience that feels controlled, fast, and
                stress-free.
              </p>
            </div>

            <div className="flex gap-6 text-sm text-[#0F172A] font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#F97316]">✓</span> No hiring stress
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F97316]">✓</span> Smooth delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F97316]">✓</span> Full flexibility
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Engagement Models
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Flexible Engagement Models
            </h2>

            <p className="text-[#475569] text-[16px]">
              Choose the hiring model that fits your workload, timeline, and
              level of involvement.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dedicated Expert",
                bestFor: "Regular, ongoing work",
                desc: "One full-time expert who works exclusively for your project.",
              },
              {
                title: "Managed Pod",
                bestFor: "Mixed-skill requirements",
                desc: "Avaantra manages a small cross-functional team for you.",
              },
              {
                title: "Project-Based",
                bestFor: "Fixed-scope work",
                desc: "Clear timeline, defined scope, and predictable cost.",
              },
              {
                title: "White Label",
                bestFor: "Agencies & partners",
                desc: "We work under your brand as an extended delivery team.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            group relative
            border border-[#E2E8F0]
            rounded-2xl p-6 bg-[#F8FAFC]
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-white
            hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]
          "
              >
                {/* accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

                <h3 className="text-[18px] font-semibold text-[#0F172A] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-[#F97316] mb-3">
                  Best for: {item.bestFor}
                </p>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Security & IP Protection */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Security & Trust
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Your IP and Data Are Always Safe
            </h2>

            <p className="text-[#475569] text-[16px]">
              We operate with enterprise-grade security, legal safeguards, and
              full transparency — so you stay in complete control.
            </p>
          </div>

          {/* Protection Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              "NDA signed before every engagement",
              "Full IP ownership from day one",
              "Secure cloud & infrastructure practices",
              "Encrypted communication channels",
              "Free replacement within 15 days",
              "You own everything we build",
            ].map((item, i) => (
              <div
                key={i}
                className="
            flex items-start gap-4
            bg-white border border-[#E2E8F0]
            rounded-xl p-6
          "
              >
                <span className="mt-1 text-[#F97316] font-bold">✓</span>
                <p className="text-[#475569] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Assurance Strip */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#0F172A] font-medium text-center md:text-left">
              No shared resources. No hidden clauses. No vendor lock-in.
              <br />
              <span className="text-[#475569] font-normal">
                Your data, your code, your business — always.
              </span>
            </p>

            <span className="text-sm font-semibold text-[#F97316]">
              Built for long-term trust
            </span>
          </div>
        </div>
      </section>
      {/* What Clients Say */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Client Feedback
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              What Clients Say
            </h2>

            <p className="text-[#475569] text-[16px]">
              Teams across industries trust Avaantra to scale faster without
              hiring risk.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We grew our engineering team three times faster without hiring anyone in-house.",
                author: "CTO",
                company: "SaaS Startup",
                region: "UK",
              },
              {
                quote:
                  "Avaantra’s hiring process is very smooth and fast. Exactly what we needed.",
                author: "Founder",
                company: "Marketing Agency",
                region: "UAE",
              },
              {
                quote:
                  "We launched faster and grew quicker because we had the right team.",
                author: "CEO",
                company: "HealthTech Company",
                region: "India",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            border border-[#E2E8F0]
            rounded-2xl p-6
            bg-[#F8FAFC]
          "
              >
                <p className="text-[#475569] text-sm leading-relaxed mb-4">
                  “{item.quote}”
                </p>

                <p className="text-[#0F172A] font-semibold text-sm">
                  — {item.author}
                </p>
                <p className="text-xs text-[#64748B]">
                  {item.company}, {item.region}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Study */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="border border-[#E2E8F0] rounded-2xl bg-white p-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <span className="inline-block mb-2 px-3 py-1 rounded-full bg-orange-100 text-[#F97316] text-xs font-semibold">
                  Case Study
                </span>

                <h3 className="text-[26px] font-bold text-[#0F172A] mb-3">
                  Scaling a B2B SaaS Platform
                </h3>

                <p className="text-[#475569] text-sm mb-4">
                  <strong className="text-[#0F172A]">Client:</strong> B2B SaaS
                  Platform
                  <br />
                  <strong className="text-[#0F172A]">Need:</strong> Developers
                  and marketers, fast
                  <br />
                  <strong className="text-[#0F172A]">Solution:</strong> React,
                  Node, SEO & PPC hybrid team
                </p>
              </div>

              {/* Right – Results */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-[#F8FAFC] rounded-xl p-4">
                  <p className="text-[22px] font-bold text-[#0F172A]">
                    7 Weeks
                  </p>
                  <p className="text-xs text-[#475569]">MVP Launched</p>
                </div>

                <div className="bg-[#F8FAFC] rounded-xl p-4">
                  <p className="text-[22px] font-bold text-[#0F172A]">240%</p>
                  <p className="text-xs text-[#475569]">Growth in 4 Months</p>
                </div>

                <div className="bg-[#F8FAFC] rounded-xl p-4">
                  <p className="text-[22px] font-bold text-[#0F172A]">100%</p>
                  <p className="text-xs text-[#475569]">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-right">
              <Link
                href="/case-studies"
                className="text-[#F97316] font-semibold inline-flex items-center gap-1"
              >
                Read All Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Industries We Support */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Industries
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Industries We Support
            </h2>

            <p className="text-[#475569] text-[16px]">
              Our hiring model adapts across industries, business sizes, and
              growth stages.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "💻",
                title: "SaaS & Technology",
                desc: "Product teams, platform engineering, and growth-focused delivery.",
              },
              {
                icon: "🚀",
                title: "Startups & Scaleups",
                desc: "Fast-moving teams that need talent without hiring delays.",
              },
              {
                icon: "🛒",
                title: "E-commerce & Retail",
                desc: "Engineering, marketing, and performance-driven execution.",
              },
              {
                icon: "🏥",
                title: "Healthcare & HealthTech",
                desc: "Secure, compliant teams with quality-focused delivery.",
              },
              {
                icon: "💳",
                title: "FinTech & Banking",
                desc: "Reliable engineers and marketers for regulated environments.",
              },
              {
                icon: "🤝",
                title: "Agencies & Consulting Firms",
                desc: "White-label teams working under your brand.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            group relative
            border border-[#E2E8F0]
            rounded-2xl p-6
            bg-[#F8FAFC]
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-white
            hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]
          "
              >
                {/* top accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

                {/* icon */}
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F97316] flex items-center justify-center text-xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-[18px] font-semibold text-[#0F172A] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Result Line */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#0F172A] font-medium text-[16px] mb-1">
              Result
            </p>
            <p className="text-[#475569]">
              A hiring model that works for all types of companies — from
              early-stage startups to growing enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Hiring Works */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
            Why Avaantra
          </span>

          <h2 className="text-[36px] font-bold text-[#0F172A] mb-6">
            Why Our Hiring Works So Well
          </h2>

          <p className="text-[#475569] text-[17px] leading-relaxed mb-6">
            Because we bring speed, skill, and support together in one place.
            <br />
            You get strong talent without the pain of hiring.
            <br />
            You stay in control — we handle the rest.
          </p>

          <p className="text-[#0F172A] font-medium text-[17px]">
            With Avaantra, you don’t just hire people.
            <br />
            You build a team that helps your business grow.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[36px] font-bold mb-6">
            Hire Developers, Marketers, and Leaders in Just 15 Days
          </h2>

          <p className="text-[#CBD5E1] text-[16px] mb-10">
            Skip hiring delays. Get vetted talent that’s ready to deliver from
            day one.
          </p>

          <a
            href="/contact-us"
            className="
        inline-flex items-center justify-center
        bg-[#F97316] hover:bg-[#EA580C]
        text-white px-10 py-4 rounded-xl
        font-semibold text-[16px]
        shadow-lg shadow-orange-500/30
        transition
      "
          >
            Book a Free Hiring Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
