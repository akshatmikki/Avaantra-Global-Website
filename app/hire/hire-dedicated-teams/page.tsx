import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hire Dedicated Teams | Scalable Engineering & Marketing Pods | Avaantra Global",
  description:
    "Hire dedicated teams of developers, designers, and marketers to scale projects fast without hiring risk. Avaantra Global offers fully managed, plug-and-play teams for SaaS and startups.",
};

export default function HireDedicatedTeamsPage() {
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
              🤝 Plug-and-Play Delivery Teams
            </span>

            <h1 className="text-[48px] leading-[1.15] font-bold text-[#0F172A] mb-6">
              Hire Dedicated Teams —
              <br />
              Scale Faster, Deliver Better,
              <span className="text-[#F97316]"> Without Hiring Headaches</span>
            </h1>

            <p className="text-[18px] leading-[1.65] text-[#475569] mb-10 max-w-xl">
              You don’t need to grow your payroll — you need predictable
              delivery. Avaantra Global provides dedicated, cross-functional
              teams of developers, designers, and marketers who work exclusively
              for you, ensuring quality, accountability, and speed.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact-us"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-orange-500/25"
              >
                Hire a Dedicated Team in 15 Days
              </Link>

              <Link
                href="#process"
                className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-lg font-semibold"
              >
                See How Our Teams Deliver Predictable Outcomes ↓
              </Link>
            </div>

            {/* USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#475569]">
              <p>✅ 100% Dedicated — No shared resources</p>
              <p>✅ Onboard a full team in 15–20 days</p>
              <p>✅ PM + QA + Dev + Design + Marketing pods</p>
              <p>✅ Scale up or down on demand</p>
              <p>✅ 40–60% lower cost vs in-house teams</p>
              <p>✅ Full IP ownership & transparent reporting</p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="relative bg-white rounded-3xl border border-[#E2E8F0] p-10 shadow-2xl min-h-[420px]">
              {/* accent */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-l-3xl" />

              <h4 className="text-[20px] font-semibold text-[#0F172A] mb-8 pl-4">
                Dedicated Team Structure
              </h4>

              <div className="space-y-6 pl-4">
                {[
                  "Engineering (Frontend + Backend)",
                  "UI/UX Design & QA",
                  "Marketing & Growth",
                  "Dedicated Project Manager",
                  "Sprint-based Delivery",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-orange-100 text-[#F97316] font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <p className="text-[#475569]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-[#F8FAFC] rounded-2xl px-6 py-4 flex justify-between">
                <div>
                  <p className="text-xs text-[#64748B]">Avg. Onboarding</p>
                  <p className="text-lg font-bold text-[#0F172A]">15–20 Days</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#64748B]">Engagement Model</p>
                  <p className="text-lg font-bold text-[#0F172A]">
                    Fully Managed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="relative py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-sm font-semibold">
              Scaling Reality
            </span>

            <h2 className="text-[34px] font-bold text-[#0F172A] mb-4">
              The Real Problem
            </h2>

            <p className="text-[17px] text-[#475569]">
              Scaling projects sounds exciting — until you hit the hiring wall.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              "Finding and managing multiple freelancers is chaos.",
              "Agencies charge premium retainers but lack transparency.",
              "Full-time hiring takes months and adds overhead.",
              "Delivery slows when teams are fragmented.",
            ].map((item, i) => (
              <div
                key={i}
                className="
            flex items-start gap-3
            bg-white border border-[#E2E8F0]
            rounded-xl p-6
          "
              >
                <span className="text-[#F97316] font-bold mt-0.5">✕</span>
                <p className="text-[#475569] text-[15px] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[17px] text-[#475569]">
              You don’t need to build teams from scratch.
            </p>
            <p className="text-[17px] font-semibold text-[#0F172A] mt-1">
              You need Avaantra’s plug-and-play dedicated teams.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="relative py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Our Promise
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Speed, Skill & Accountability — In One Managed Team
            </h2>

            <p className="text-[#475569]">
              Avaantra’s dedicated teams work as an extension of your company,
              combining expert talent, project management, and delivery
              processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PromiseStat value="2–3X" label="Faster delivery" />
            <PromiseStat value="35–50%" label="Lower cost" />
            <PromiseStat value="100%" label="Alignment & ownership" />
          </div>
        </div>
      </section>
      {/* What You Get in a Dedicated Team */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* accents */}
        <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-[#F97316]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              What You Get
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-5">
              A Dedicated Team,
              <br />
              Built Around Your Delivery Goals
            </h2>

            <p className="text-[#475569] text-[17px] leading-relaxed mb-8 max-w-lg">
              Each team is assembled specifically for your timeline, tech stack,
              and execution needs — not pulled from a shared bench.
            </p>

            <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 max-w-lg">
              <p className="text-sm text-[#475569]">
                ⚙️{" "}
                <span className="font-semibold text-[#0F172A]">Outcome:</span>{" "}
                End-to-end delivery managed by Avaantra, branded entirely under
                you.
              </p>
            </div>
          </div>

          {/* Right: Team Stack */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Project Manager / Product Owner",
              "2–4 Developers (Frontend / Backend / Mobile)",
              "1–2 QA Engineers",
              "UI/UX Designer",
              "DevOps Engineer (optional)",
              "Digital Marketer (optional for growth pods)",
            ].map((role, i) => (
              <div
                key={i}
                className="
            bg-white border border-[#E2E8F0]
            rounded-xl p-5
            text-[#475569] text-sm
            hover:shadow-lg hover:-translate-y-0.5
            transition-all
          "
              >
                <span className="text-[#F97316] font-semibold mr-2">
                  {i + 1}.
                </span>
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology & Delivery Expertise */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        {/* accents */}
        <div className="absolute -bottom-32 -right-32 w-[320px] h-[320px] bg-[#0F172A]/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-sm font-semibold">
              Expertise
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Technology & Delivery Expertise
            </h2>

            <p className="text-[#475569] text-[17px] max-w-xl">
              Our teams operate across modern stacks and delivery models,
              adapting as your product evolves.
            </p>
          </div>

          {/* Expertise Rows */}
          <div className="space-y-4 mb-10">
            {[
              "Full-Stack Web Development (React, Node, Python, PHP, .NET)",
              "Mobile Apps (Flutter, React Native, iOS, Android)",
              "Cloud & DevOps (AWS, Azure, GCP)",
              "AI / ML / Data Science Pods",
              "Marketing Automation, SEO & PPC Execution",
            ].map((item, i) => (
              <div
                key={i}
                className="
            flex items-center gap-4
            bg-[#F8FAFC] border border-[#E2E8F0]
            rounded-xl px-6 py-4
            hover:bg-white hover:shadow-md
            transition
          "
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 text-[#F97316] font-bold flex items-center justify-center">
                  ✓
                </div>
                <p className="text-[#475569] text-[15px]">{item}</p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <div className="max-w-3xl bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6">
            <p className="text-[#475569]">
              📈 <span className="font-semibold text-[#0F172A]">Outcome:</span>{" "}
              Flexible delivery models that adapt seamlessly to your product
              roadmap.
            </p>
          </div>
        </div>
      </section>
      {/* Industries We Serve */}
      <section className="relative py-20 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle accents */}
        <div className="absolute -top-24 -right-24 w-[260px] h-[260px] bg-[#F97316]/15 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Industries
            </span>

            <h2 className="text-[34px] font-bold text-[#0F172A] mb-3">
              Industries We Serve
            </h2>

            <p className="text-[#475569] max-w-2xl mx-auto text-[16px]">
              Domain-focused teams built to deliver speed, compliance, and
              scale.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* SaaS */}
            <div className="group bg-white border border-[#E2E8F0] rounded-xl p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center text-lg">
                  💳
                </div>
                <p className="font-semibold text-[#0F172A] text-sm">
                  SaaS & B2B
                </p>
              </div>
              <p className="text-[#475569] text-[13px] leading-snug">
                Dedicated product pods accelerating releases and innovation.
              </p>
            </div>

            {/* FinTech */}
            <div className="group bg-white border border-[#E2E8F0] rounded-xl p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center text-lg">
                  🧠
                </div>
                <p className="font-semibold text-[#0F172A] text-sm">
                  FinTech & Banking
                </p>
              </div>
              <p className="text-[#475569] text-[13px] leading-snug">
                Secure, compliant engineering teams with domain expertise.
              </p>
            </div>

            {/* HealthTech */}
            <div className="group bg-white border border-[#E2E8F0] rounded-xl p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-lg">
                  🏥
                </div>
                <p className="font-semibold text-[#0F172A] text-sm">
                  HealthTech
                </p>
              </div>
              <p className="text-[#475569] text-[13px] leading-snug">
                HIPAA-ready delivery pods with compliance oversight.
              </p>
            </div>

            {/* E-commerce */}
            <div className="group bg-white border border-[#E2E8F0] rounded-xl p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#FFE4E6] text-[#E11D48] flex items-center justify-center text-lg">
                  🛒
                </div>
                <p className="font-semibold text-[#0F172A] text-sm">
                  E-commerce
                </p>
              </div>
              <p className="text-[#475569] text-[13px] leading-snug">
                Design, develop, and scale online stores faster.
              </p>
            </div>

            {/* EdTech */}
            <div className="group bg-white border border-[#E2E8F0] rounded-xl p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center text-lg">
                  📚
                </div>
                <p className="font-semibold text-[#0F172A] text-sm">
                  EdTech & E-learning
                </p>
              </div>
              <p className="text-[#475569] text-[13px] leading-snug">
                Interactive platforms with stable backend and seamless UX.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Process */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-sm font-semibold">
              How It Works
            </span>

            <h2 className="text-[34px] font-bold text-[#0F172A] mb-3">
              Our Process
            </h2>

            <p className="text-[#475569] max-w-2xl mx-auto text-[16px]">
              A simple, transparent process designed for speed, control, and
              clarity.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "1️⃣",
                title: "Requirement Analysis",
                process: "Share project goals & scope",
                outcome: "Team design & proposal",
              },
              {
                step: "2️⃣",
                title: "Team Assembly",
                process: "Get vetted profiles for each role",
                outcome: "You approve before onboarding",
              },
              {
                step: "3️⃣",
                title: "Onboarding",
                process: "Integrate team into your systems",
                outcome: "Instant productivity",
              },
              {
                step: "4️⃣",
                title: "Delivery & Sprints",
                process: "Managed agile execution",
                outcome: "Transparent reporting",
              },
              {
                step: "5️⃣",
                title: "Scale or Adjust",
                process: "Add or remove team members",
                outcome: "Flexibility & cost control",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            bg-[#F8FAFC] border border-[#E2E8F0]
            rounded-xl p-5
            hover:shadow-md transition
          "
              >
                <div className="text-2xl mb-2">{item.step}</div>
                <p className="font-semibold text-[#0F172A] text-sm mb-1">
                  {item.title}
                </p>
                <p className="text-[#475569] text-[13px] mb-1">
                  {item.process}
                </p>
                <p className="text-[#F97316] text-[13px] font-medium">
                  {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Engagement Models */}
      <section className="relative py-20 px-4 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Engagement
            </span>

            <h2 className="text-[34px] font-bold text-[#0F172A] mb-3">
              Engagement Models
            </h2>

            <p className="text-[#475569] max-w-2xl mx-auto text-[16px]">
              Choose the engagement structure that best fits your delivery
              needs.
            </p>
          </div>

          {/* Models */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Dedicated Pod",
                bestFor: "Continuous product development",
                outcome: "Predictable monthly output",
              },
              {
                title: "Managed Agile Team",
                bestFor: "Multi-skill projects",
                outcome: "2–3X faster delivery",
              },
              {
                title: "Project-Based Pod",
                bestFor: "MVP or one-time delivery",
                outcome: "Low-risk, fast completion",
              },
              {
                title: "White-Label Team",
                bestFor: "Agencies & partners",
                outcome: "Deliver under your brand",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            bg-white border border-[#E2E8F0]
            rounded-xl p-6
            hover:shadow-lg hover:-translate-y-0.5
            transition-all
          "
              >
                <p className="font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </p>

                <p className="text-[#475569] text-[13px] mb-2">
                  <span className="font-medium text-[#0F172A]">Best for:</span>{" "}
                  {item.bestFor}
                </p>

                <p className="text-[#F97316] text-[13px] font-medium">
                  {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="relative py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Client Proof
            </span>

            <h2 className="text-[34px] font-bold text-[#0F172A]">
              What Clients Say
            </h2>
          </div>

          {/* Quotes */}
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                quote:
                  "Avaantra’s dedicated team became our remote tech department — we scale at will.",
                author: "CTO, SaaS Platform",
                region: "Singapore",
              },
              {
                quote:
                  "It’s like having an in-house team without the hiring pain. Highly professional.",
                author: "Founder, FinTech Startup",
                region: "India",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            bg-white border border-[#E2E8F0]
            rounded-xl p-6
            hover:shadow-md transition
          "
              >
                <p className="text-[#475569] text-[14px] leading-relaxed mb-4">
                  “{item.quote}”
                </p>

                <p className="text-sm font-semibold text-[#0F172A]">
                  — {item.author}
                </p>
                <p className="text-xs text-[#64748B]">{item.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Study – Professional (Orange Accents) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Case Study
            </span>

            <h2 className="text-[30px] font-bold text-[#0F172A] max-w-4xl">
              Scaling SaaS Development with a Dedicated Team
            </h2>
          </div>

          {/* Case Container */}
          <div
            className="
      grid lg:grid-cols-[3fr_2fr] gap-6
      border border-[#E2E8F0] rounded-xl p-6
      hover:shadow-md transition
    "
          >
            {/* Left: Context */}
            <div className="space-y-3 relative">
              {/* orange accent line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[#F97316] rounded-full" />

              <div className="pl-4 space-y-3">
                <p className="text-sm text-[#64748B]">
                  Client:{" "}
                  <span className="font-semibold text-[#0F172A]">
                    B2B SaaS Company
                  </span>
                </p>

                <p className="text-[14px] text-[#475569] leading-relaxed">
                  <span className="font-semibold text-[#0F172A]">
                    Challenge:
                  </span>{" "}
                  Needed to double development capacity without hiring full-time
                  staff or slowing delivery.
                </p>

                <p className="text-[14px] text-[#475569] leading-relaxed">
                  <span className="font-semibold text-[#0F172A]">
                    Solution:
                  </span>{" "}
                  Avaantra deployed a 6-member dedicated team (React, Node, QA,
                  PM), embedded directly into sprint cycles and internal
                  workflows.
                </p>
              </div>
            </div>

            {/* Right: Results */}
            <div className="border-l border-[#E2E8F0] pl-6 flex items-center">
              <div className="grid grid-cols-3 gap-4 w-full text-center">
                <div className="group">
                  <p className="text-xl font-bold text-[#0F172A] group-hover:text-[#F97316] transition">
                    2.5×
                  </p>
                  <p className="text-[12px] text-[#64748B]">Faster releases</p>
                </div>

                <div className="group">
                  <p className="text-xl font-bold text-[#0F172A] group-hover:text-[#F97316] transition">
                    37%
                  </p>
                  <p className="text-[12px] text-[#64748B]">Lower cost</p>
                </div>

                <div className="group">
                  <p className="text-xl font-bold text-[#0F172A] group-hover:text-[#F97316] transition">
                    100%
                  </p>
                  <p className="text-[12px] text-[#64748B]">Sprint delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-sm font-semibold">
              FAQs
            </span>

            <h2 className="text-[32px] font-bold text-[#0F172A] mb-3">
              Before You Hire a Dedicated Team
            </h2>

            <p className="text-[#475569] text-[15px]">
              Clear answers to the most common questions.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {[
              [
                "How fast can I hire a dedicated team?",
                "Within 15–20 business days, depending on team size.",
              ],
              [
                "Will the team work only for us?",
                "Yes — each team is 100% exclusive to your company and projects.",
              ],
              [
                "How do I manage them?",
                "You can manage directly, or let Avaantra’s PM handle daily coordination.",
              ],
              [
                "What if I need to scale the team mid-project?",
                "We can add new members within 5–7 days without disrupting workflow.",
              ],
              [
                "How do you ensure communication and quality?",
                "Daily standups, weekly reviews, and sprint demos ensure transparency.",
              ],
              [
                "What about time zone overlap?",
                "We provide flexible shift coverage (IST, GMT, EST, PST).",
              ],
            ].map(([q, a]) => (
              <details
                key={q}
                className="
            group bg-[#F8FAFC] border border-[#E2E8F0]
            rounded-xl px-5 py-4
            open:bg-white open:shadow-sm
            transition
          "
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-[#0F172A] text-[14px]">
                    {q}
                  </span>
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-100 text-[#F97316] font-bold group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[#475569] text-[14px] leading-relaxed">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* Why This Works */}
      <section className="py-16 px-4 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-[30px] font-bold text-[#0F172A] mb-4">
            Why This Works
          </h3>

          <p className="text-[17px] text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Because scalability shouldn’t come with stress.
            <br />
            Avaantra’s dedicated teams give you the control of in-house talent —
            and the freedom of outsourcing.
          </p>
        </div>
      </section>
      {/* Final CTA */}
      <section className="relative py-24 px-4 bg-[#0F172A] text-white overflow-hidden">
        {/* glow */}
        <div className="absolute -top-32 -right-32 w-[360px] h-[360px] bg-[#F97316]/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-[36px] font-bold mb-5 leading-tight">
            Hire a Dedicated Team in 15 Days —
            <br />
            Scale Projects Without Hiring Risk.
          </h2>

          <p className="text-[#CBD5E1] text-[17px] mb-10 max-w-2xl mx-auto">
            Get a fully managed, exclusive team aligned to your goals, systems,
            and delivery roadmap — without long-term hiring commitments.
          </p>

          <a
            href="/contact-us"
            className="
        inline-flex items-center justify-center
        bg-[#F97316] hover:bg-[#EA580C]
        px-10 py-4 rounded-lg
        font-semibold
        transition-all duration-300
        hover:shadow-lg hover:shadow-orange-500/30
      "
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}

function PromiseStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-6 py-6 text-center">
      <p className="text-2xl font-bold text-[#0F172A] mb-1">{value}</p>
      <p className="text-sm text-[#475569]">{label}</p>
    </div>
  );
}
