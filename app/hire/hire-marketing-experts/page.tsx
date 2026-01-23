import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hire Digital Marketing Experts | SEO, PPC, Automation & Growth Strategy | Avaantra Global",
  description:
    "Hire dedicated digital marketing experts to drive traffic, leads, and predictable growth. Avaantra Global offers SEO, PPC, content, and automation professionals ready to scale your marketing ROI.",
};

export default function HireDigitalMarketingExpertsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-28 px-4 overflow-hidden">
        {/* background accents */}
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[380px] h-[380px] bg-[#0F172A]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              🚀 Build Predictable Growth Engines
            </span>

            <h1 className="text-[48px] leading-[1.15] font-bold text-[#0F172A] mb-6">
              Hire Digital Marketing Experts — Scale Traffic, Leads & Revenue
              with
              <span className="text-[#F97316]"> Predictable ROI</span>
            </h1>

            <p className="text-[18px] leading-[1.65] text-[#475569] mb-10 max-w-xl">
              You don’t need more campaigns — you need measurable growth.
              Avaantra Global helps you hire experienced digital marketing
              professionals who align with your goals, systems, and KPIs —
              delivering real business results.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact-us"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-orange-500/25"
              >
                Hire Digital Marketing Experts in 15 Days
              </Link>

              <Link
                href="#process"
                className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-lg font-semibold"
              >
                See How We Deliver Growth Predictably ↓
              </Link>
            </div>

            {/* USPs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#475569]">
              <p>✅ Experts across SEO, PPC, Social, Content, and Automation</p>
              <p>✅ Start in 7–15 days — no hiring delays</p>
              <p>✅ 35–50% lower cost vs agencies or in-house teams</p>
              <p>✅ AI + data-driven marketing execution</p>
              <p>✅ Managed by Avaantra PMs for accountability</p>
              <p>✅ Transparent ROI reporting & dashboards</p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="relative bg-white rounded-3xl border border-[#E2E8F0] p-10 shadow-2xl min-h-[420px]">
              {/* Left accent */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-l-3xl" />

              <h4 className="text-[20px] font-semibold text-[#0F172A] mb-8 pl-4">
                Growth Execution Framework
              </h4>

              {/* Steps */}
              <div className="relative space-y-6 pl-4">
                {/* vertical connector */}
                <div className="absolute left-[18px] top-4 bottom-4 w-px bg-[#F97316]/30" />

                {[
                  "Strategy & Goal Mapping",
                  "Channel Alignment",
                  "Campaign Execution",
                  "Automation & Optimization",
                  "ROI Reporting & Scale",
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-orange-100 text-[#F97316] font-bold flex items-center justify-center z-10">
                      {i + 1}
                    </div>
                    <p className="text-[#475569] text-[16px]">{step}</p>
                  </div>
                ))}
              </div>

              {/* Bottom stats strip */}
              <div className="mt-10 bg-[#F8FAFC] rounded-2xl px-6 py-4 flex justify-between">
                <div>
                  <p className="text-xs text-[#64748B]">Avg. Onboarding</p>
                  <p className="text-lg font-bold text-[#0F172A]">7–15 Days</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#64748B]">Execution Model</p>
                  <p className="text-lg font-bold text-[#0F172A]">
                    Data-Driven
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-white shadow-xl rounded-xl px-4 py-2">
                <p className="text-sm font-semibold text-[#0F172A]">
                  Predictable ROI
                </p>
                <p className="text-xs text-[#64748B]">Measured Weekly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="relative py-32 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle background accents */}
        <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-[#F97316]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-[#0F172A]/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block mb-5 px-5 py-2 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-sm font-semibold">
              Marketing Reality Check
            </span>

            <h2 className="text-[40px] leading-tight font-bold text-[#0F172A] mb-6">
              The Real Problem
            </h2>

            <p className="text-[18px] leading-relaxed text-[#475569]">
              Your marketing efforts should drive sales — not confusion.
            </p>
          </div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              "You spend money across channels, but can’t track ROI.",
              "Agencies overpromise and hide behind vanity metrics.",
              "Freelancers lack accountability and strategic focus.",
              "In-house hiring is expensive and slow.",
            ].map((problem, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm"
              >
                {/* left accent */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-[#F97316] rounded-l-2xl" />

                <p className="pl-4 text-[16px] leading-relaxed text-[#475569]">
                  {problem}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion Box */}
          <div className="max-w-4xl mx-auto bg-white border border-[#E2E8F0] rounded-3xl p-10 shadow-md text-center">
            <p className="text-[18px] leading-relaxed text-[#475569] mb-4">
              You don’t need more noise — you need proven experts who connect
              data, content, and performance into one predictable system.
            </p>

            <p className="text-[18px] font-semibold text-[#0F172A]">
              That’s where Avaantra Global’s Digital Marketing Experts come in.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-32 -right-32 w-[360px] h-[360px] bg-[#F97316]/6 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Our Promise
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Measurable Growth. Not Guesswork.
            </h2>

            <p className="text-[16px] text-[#475569]">
              We help startups, SaaS brands, and enterprises scale with
              marketing experts who plan, execute, and report growth with
              complete transparency.
            </p>
          </div>

          {/* Promise Core */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Integrated Framework",
                desc: "Strategy + Execution + Reporting in one aligned system.",
              },
              {
                title: "Cross-Channel Alignment",
                desc: "SEO, PPC, automation, and content working together.",
              },
              {
                title: "Transparent Reporting",
                desc: "Weekly performance reports tied directly to ROI.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6"
              >
                {/* accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl" />

                <p className="mt-2 font-semibold text-[#0F172A] mb-1">
                  {item.title}
                </p>
                <p className="text-[#475569] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Outcome Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <CompactStat value="3–5X" label="ROI within 90 days" />
            <CompactStat value="2–3X" label="Qualified lead growth" />
            <CompactStat value="40%" label="Lower acquisition cost" />
          </div>
        </div>
      </section>

      {/* Our Digital Marketing Expertise */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-32 -left-32 w-[360px] h-[360px] bg-[#F97316]/6 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Our Expertise
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Our Digital Marketing Expertise
            </h2>

            <p className="text-[16px] text-[#475569]">
              End-to-end digital marketing capabilities designed to drive
              predictable, measurable growth.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SEO & Organic Growth",
                points: [
                  "On-page, technical, and off-page SEO",
                  "Keyword mapping & content optimization",
                ],
                outcome: "Long-term organic visibility and lead generation.",
              },
              {
                title: "PPC & Paid Ads",
                points: [
                  "Google, Meta, LinkedIn & YouTube Ads",
                  "Conversion optimization & retargeting",
                ],
                outcome: "Fast, measurable lead and sales growth.",
              },
              {
                title: "Marketing Automation & CRM",
                points: [
                  "HubSpot, ActiveCampaign, Zoho, Marketo",
                  "Email nurturing, scoring, and funnel automation",
                ],
                outcome: "Consistent engagement and pipeline velocity.",
              },
              {
                title: "Social Media & Brand Marketing",
                points: [
                  "SMO, content calendars, influencer strategy",
                  "Reputation management & brand storytelling",
                ],
                outcome: "Stronger community, trust, and brand recall.",
              },
              {
                title: "Performance Tracking & Analytics",
                points: ["Google Analytics 4, Tag Manager, Looker Studio"],
                outcome: "Real-time insight into ROI and conversions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-lg transition"
              >
                {/* top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl" />

                <h3 className="mt-3 text-[20px] font-semibold text-[#0F172A] mb-4">
                  {i + 1}️⃣ {item.title}
                </h3>

                <ul className="space-y-2 text-sm text-[#475569] mb-4">
                  {item.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>

                <div className="mt-4 bg-white border border-[#E2E8F0] rounded-xl px-4 py-3">
                  <p className="text-sm font-medium text-[#0F172A]">Outcome:</p>
                  <p className="text-sm text-[#475569]">{item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries We Serve */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -bottom-32 -right-32 w-[360px] h-[360px] bg-[#F97316]/6 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Industries
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Industries We Serve
            </h2>

            <p className="text-[16px] text-[#475569]">
              Domain-focused marketing expertise tailored to regulatory, growth,
              and customer acquisition needs.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "SaaS & B2B",
                desc: "Pipeline-focused marketing with automation.",
              },
              {
                icon: "💳",
                title: "FinTech",
                desc: "Compliance-safe lead funnels and brand authority.",
              },
              {
                icon: "🏥",
                title: "Healthcare",
                desc: "Trust-driven campaigns with strict privacy.",
              },
              {
                icon: "🛒",
                title: "E-commerce",
                desc: "Full-funnel growth with retargeting & remarketing.",
              },
              {
                icon: "📚",
                title: "EdTech",
                desc: "Enrollment and engagement campaigns.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-lg transition"
              >
                {/* top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl" />

                <div className="flex items-start gap-4 mt-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-[#0F172A] mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#475569]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section
        id="process"
        className="relative py-32 px-4 bg-[#F8FAFC] overflow-hidden"
      >
        {/* subtle background accents */}
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-[#0F172A]/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block mb-5 px-5 py-2 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-sm font-semibold">
              Execution Flow
            </span>

            <h2 className="text-[40px] font-bold text-[#0F172A] mb-6">
              Our Process
            </h2>

            <p className="text-[18px] text-[#475569] max-w-3xl mx-auto">
              A structured, transparent process designed to deliver results fast
              — without hiring friction.
            </p>
          </div>

          {/* Horizontal Steps */}
          <div className="relative">
            {/* connector line */}
            <div className="absolute top-10 left-0 right-0 h-px bg-[#F97316]/30 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                [
                  "Strategy Definition",
                  "Audit + goal mapping",
                  "Custom roadmap",
                ],
                [
                  "Team Selection",
                  "Get 3–5 expert profiles",
                  "Perfect skill fit",
                ],
                ["Onboarding", "Connect to your systems", "Start in 7–15 days"],
                [
                  "Execution & Optimization",
                  "Sprint-based campaigns",
                  "Measurable progress",
                ],
                ["Reporting & Scale", "Weekly dashboards", "Transparent ROI"],
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative bg-white border border-[#E2E8F0] rounded-2xl p-8 text-center shadow-sm"
                >
                  {/* step number */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-100 text-[#F97316] font-bold flex items-center justify-center border border-[#F97316]/30">
                    {i + 1}
                  </div>

                  <p className="mt-6 font-semibold text-[#0F172A] mb-2">
                    {step[0]}
                  </p>
                  <p className="text-[#64748B] text-sm">{step[1]}</p>
                  <p className="text-[#475569] text-sm mt-1">{step[2]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-32 -left-32 w-[360px] h-[360px] bg-[#F97316]/6 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Engagement Options
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Engagement Models
            </h2>

            <p className="text-[16px] text-[#475569]">
              Flexible engagement structures designed to match your goals,
              timelines, and scale.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Dedicated Marketer",
                ideal: "Individual channel ownership",
                outcome: "Focused execution",
              },
              {
                title: "Managed Marketing Pod",
                ideal: "Multi-channel growth",
                outcome: "2–3X faster outcomes",
              },
              {
                title: "Project-Based",
                ideal: "One-time campaigns",
                outcome: "Fast, goal-specific delivery",
              },
              {
                title: "White-Label Model",
                ideal: "Agencies & partners",
                outcome: "Co-branded execution",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-lg transition"
              >
                {/* top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl" />

                <p className="mt-3 font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </p>

                <div className="text-sm text-[#475569] space-y-2">
                  <p>
                    <span className="font-medium text-[#0F172A]">
                      Ideal for:
                    </span>{" "}
                    {item.ideal}
                  </p>
                  <p>
                    <span className="font-medium text-[#0F172A]">Outcome:</span>{" "}
                    {item.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What Clients Say */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-32 -right-32 w-[360px] h-[360px] bg-[#F97316]/6 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Client Feedback
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              What Clients Say
            </h2>

            <p className="text-[16px] text-[#475569]">
              Real outcomes shared by founders and marketing leaders we’ve
              worked with.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
              <p className="text-[#475569] text-[16px] mb-6 leading-relaxed">
                “Avaantra’s marketing experts grew our pipeline by 260% in 3
                months — true partners.”
              </p>
              <p className="font-semibold text-[#0F172A]">
                — Founder, SaaS Startup
              </p>
              <p className="text-sm text-[#64748B]">India</p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
              <p className="text-[#475569] text-[16px] mb-6 leading-relaxed">
                “They don’t just run campaigns — they deliver predictable
                growth.”
              </p>
              <p className="font-semibold text-[#0F172A]">
                — CMO, B2B Platform
              </p>
              <p className="text-sm text-[#64748B]">Singapore</p>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white border border-[#E2E8F0] rounded-3xl p-10 shadow-md">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-sm font-semibold">
                  Case Study
                </span>

                <h3 className="text-[28px] font-bold text-[#0F172A] mb-4">
                  Multi-Channel Lead Growth
                </h3>

                <div className="text-sm text-[#475569] space-y-2 mb-6">
                  <p>
                    <span className="font-medium text-[#0F172A]">Client:</span>{" "}
                    B2B SaaS Company
                  </p>
                  <p>
                    <span className="font-medium text-[#0F172A]">
                      Challenge:
                    </span>{" "}
                    Low ROI from scattered marketing vendors
                  </p>
                  <p>
                    <span className="font-medium text-[#0F172A]">
                      Solution:
                    </span>{" "}
                    Avaantra provided SEO, PPC & automation experts as a unified
                    pod
                  </p>
                </div>
              </div>

              {/* Right Results */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8">
                <p className="font-semibold text-[#0F172A] mb-4">Results</p>

                <ul className="space-y-3 text-[#475569] text-sm">
                  <li>✅ +212% MQL growth</li>
                  <li>✅ CAC reduced by 38%</li>
                  <li>✅ 4.5X ROI within 90 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-32 -left-32 w-[360px] h-[360px] bg-[#F97316]/6 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              FAQs
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-[16px] text-[#475569]">
              Quick answers to common questions about hiring digital marketing
              experts.
            </p>
          </div>

          <div className="space-y-4">
            {[
              [
                "What marketing experts can I hire?",
                "SEO, PPC, Content, Automation, Social, and Performance specialists.",
              ],
              [
                "Can I hire one or multiple experts?",
                "Yes — choose individuals or a full managed pod.",
              ],
              [
                "How do you measure performance?",
                "Weekly reports with KPIs like leads, CAC, conversion rate, and ROI.",
              ],
              [
                "Do you provide tools and dashboards?",
                "Yes — we use GA4, Looker Studio, and HubSpot dashboards.",
              ],
              [
                "Can I white-label your experts under my agency?",
                "Absolutely — our experts work under your brand as ghost resources.",
              ],
            ].map(([q, a]) => (
              <details
                key={q}
                className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-6 py-5 open:bg-white open:shadow-md transition"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-[#0F172A]">{q}</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-[#F97316] font-bold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-[#475569] text-[15px] leading-relaxed">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* Why This Works */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-[32px] font-bold text-[#0F172A] mb-6">
            Why This Works
          </h3>

          <p className="text-[18px] text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Because growth doesn’t come from channels — it comes from alignment.
            <br />
            We bring experts who think, plan, and execute in one integrated
            framework.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 px-4 bg-[#0F172A] text-white overflow-hidden">
        {/* subtle glow */}
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-[#F97316]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-[38px] font-bold mb-6 leading-tight">
            Hire Digital Marketing Experts in 15 Days —
            <br />
            Drive Predictable Growth at Scale.
          </h2>

          <p className="text-[#CBD5E1] text-[18px] mb-10">
            Get senior marketers aligned to your goals, KPIs, and growth roadmap
            — without hiring friction.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-[#F97316] hover:bg-[#EA580C] px-10 py-4 rounded-lg font-semibold shadow-xl shadow-orange-500/30"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}

function CompactStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-5 text-center">
      <p className="text-2xl font-bold text-[#0F172A] mb-1">{value}</p>
      <p className="text-sm text-[#475569]">{label}</p>
    </div>
  );
}
