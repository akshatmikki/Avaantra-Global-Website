// app/hire-dedicated-developers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hire Dedicated Developers in 15 Days | Pre-Vetted Offshore Developers",
  description:
    "Hire experienced, pre-vetted developers from Avaantra Global — Python, React, Node.js, .NET, Java, DevOps, and more. Onboard in 15 days with full IP ownership.",
};

export default function HireDedicatedDevelopersPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Decorative background accents */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-[360px] h-[360px] bg-[#0F172A]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#F97316]/10 text-[#F97316] text-[14px] font-semibold">
              ⏱️ 15-Day Guaranteed Onboarding
            </div>

            <h1 className="text-[48px] leading-[1.2] font-bold text-[#0F172A] mb-6">
              Hire Senior Developers in Just 15 Days — Across Any Technology
              Stack
            </h1>

            <p className="text-[18px] leading-[1.65] text-[#475569] mb-10 max-w-xl">
              Get access to a global pool of top 3% developers. Pre-vetted,
              full-time professionals ready to start in 15 days.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact-us"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3 rounded-lg font-semibold text-[16px] shadow-lg shadow-orange-500/20"
              >
                Request 15-Minute Assessment
              </Link>

              <Link
                href="#developers-by-tech"
                className="border-2 border-[#0F172A] text-[#0F172A] px-7 py-3 rounded-lg font-semibold text-[16px]"
              >
                Explore Developer Profiles →
              </Link>
            </div>

            {/* Mini Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-[#475569]">
              <div>
                <span className="font-bold text-[#0F172A]">100+</span> Projects
                Delivered
              </div>
              <div>
                <span className="font-bold text-[#0F172A]">95%</span> Client
                Retention
              </div>
              <div>
                <span className="font-bold text-[#0F172A]">Top 3%</span> Vetted
                Talent
              </div>
            </div>
          </div>

          {/* Right Hero Visual – Vetting Pipeline */}
          <div className="relative hidden md:block">
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-[#E2E8F0]">
              {/* Title */}
              <h4 className="text-[18px] font-semibold text-[#0F172A] mb-6">
                Our 5-Step Developer Vetting Process
              </h4>

              {/* Steps */}
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Global Sourcing",
                    desc: "Senior engineers worldwide",
                  },
                  {
                    step: "02",
                    title: "Technical Screening",
                    desc: "Code & system design tests",
                  },
                  {
                    step: "03",
                    title: "Live Interviews",
                    desc: "Problem-solving & communication",
                  },
                  {
                    step: "04",
                    title: "Culture Fit Check",
                    desc: "Team & work ethics match",
                  },
                  {
                    step: "05",
                    title: "Fast Onboarding",
                    desc: "Start within 15 days",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Step Indicator */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-100 text-[#F97316] font-bold flex items-center justify-center">
                      {item.step}
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-[#0F172A] font-medium">{item.title}</p>
                      <p className="text-[#64748B] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom highlight */}
              <div className="mt-8 flex items-center justify-between bg-[#F8FAFC] rounded-xl p-4">
                <div>
                  <p className="text-sm text-[#64748B]">Average Onboarding</p>
                  <p className="text-lg font-bold text-[#0F172A]">15 Days</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#64748B]">IP Ownership</p>
                  <p className="text-lg font-bold text-[#0F172A]">100%</p>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2">
                <p className="text-sm font-semibold text-[#0F172A]">Top 3%</p>
                <p className="text-xs text-[#64748B]">Vetted Talent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Avaantra */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-[#F97316]" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Why Avaantra for Developer Hiring
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Built for speed, scale, and long-term engineering reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-14">
            {[
              {
                title: "🚀 Speed",
                desc: "48-hour profile delivery & 15-day onboarding.",
              },
              {
                title: "🧠 Top Talent",
                desc: "5-step vetting covering code, logic, and communication.",
              },
              {
                title: "⚙️ Scalability",
                desc: "Add or reduce developers any time.",
              },
              {
                title: "💼 Transparency",
                desc: "Clear monthly pricing — no recruitment overhead.",
              },
              {
                title: "🔒 Security",
                desc: "NDA, IP protection, and data confidentiality.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white p-6 rounded-xl border border-[#E2E8F0] hover:shadow-xl transition-all"
              >
                <div className="h-1 w-10 bg-[#F97316] rounded mb-4 group-hover:w-16 transition-all" />
                <h4 className="text-[20px] font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </h4>
                <p className="text-[#475569] text-[16px]">{item.desc}</p>
              </div>
            ))}
          </div>

          <blockquote className="max-w-3xl mx-auto text-center text-[#475569] italic">
            “We hired two Python developers in 10 days — seamless integration
            and zero drop in velocity.”
            <br />
            <span className="block mt-2 text-[#64748B] not-italic">
              — CTO, HealthTech SaaS
            </span>
          </blockquote>
        </div>
      </section>

      {/* Hire Developers by Technology */}
      <section
        id="developers-by-tech"
        className="relative py-28 px-4 bg-white overflow-hidden"
      >
        {/* background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8FAFC]" />

        <div className="relative max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-semibold">
              Technology Expertise
            </span>
            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Hire Developers by Technology
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Build high-performing teams across modern frameworks, platforms,
              and leadership roles.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            <TechCard
              icon="🧩"
              title="Backend Developers"
              roles="Python, Node.js, .NET, Java"
              links={[
                "Hire Python Developer →",
                "Hire Node.js Developer →",
                "Hire .NET Developer →",
                "Hire Java Developer →",
              ]}
            />

            <TechCard
              icon="🎨"
              title="Frontend Developers"
              roles="React, Angular, Vue.js"
              links={[
                "Hire React Developer →",
                "Hire Angular Developer →",
                "Hire Vue Developer →",
              ]}
            />

            <TechCard
              icon="🔗"
              title="Full Stack Developers"
              roles="MERN, MEAN, Django + React"
              links={["Hire Full-Stack Developer →"]}
            />

            <TechCard
              icon="📱"
              title="Mobile Developers"
              roles="Flutter, React Native, iOS, Android"
              links={["Hire Mobile App Developer →"]}
            />

            <TechCard
              icon="☁️"
              title="Cloud & DevOps Engineers"
              roles="AWS, Azure, Docker, Kubernetes"
              links={["Hire DevOps Engineer →"]}
            />

            <TechCard
              icon="🤖"
              title="AI / ML Engineers"
              roles="AI Developers, Data Scientists, NLP Experts"
              links={["Hire AI Developer →"]}
            />

            <TechCard
              icon="🧠"
              title="Tech Leadership"
              roles="Virtual CTO, Project Manager, QA Leads"
              links={["Hire Virtual CTO →"]}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-28 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FAFC]" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-semibold">
              Hiring Process
            </span>
            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              How It Works
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              A simple, transparent process designed to get you productive fast.
            </p>
          </div>

          {/* Steps */}
          <div className="relative space-y-10">
            {[
              "Share Requirements – Tech stack, experience, and project scope.",
              "Get Shortlisted Profiles – Within 48–72 hours.",
              "Technical Assessment – We facilitate skill evaluation and interviews.",
              "Onboard in 15 Days – Contract, access, setup handled by us.",
              "Scale Anytime – Increase or replace talent seamlessly.",
            ].map((text, index) => (
              <div
                key={index}
                className="group relative bg-white border border-[#E2E8F0] rounded-2xl p-8 pl-20 hover:shadow-xl transition-all"
              >
                {/* Step number */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <p className="text-[#475569] text-[16px] leading-relaxed">
                  {index + 1}️⃣ {text}
                </p>
              </div>
            ))}

            {/* Vertical connector */}
            <div className="absolute left-[44px] top-10 bottom-10 w-px bg-[#F97316]/30 hidden sm:block" />
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-orange-500/20"
            >
              Start Your Hiring Process →
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-28 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-semibold">
              Engagement Options
            </span>
            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Engagement Models
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Flexible engagement structures designed for startups, scale-ups,
              and enterprises.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-8 mb-14">
            {[
              {
                title: "Staff Augmentation",
                idealFor: "Extend in-house team",
                benefit: "Full-time remote engineers.",
              },
              {
                title: "Dedicated Team",
                idealFor: "Long-term projects",
                benefit: "Managed team with PM & QA.",
              },
              {
                title: "Project-Based",
                idealFor: "Fixed scope",
                benefit: "Turnkey delivery with deadlines.",
              },
              {
                title: "Hybrid Model",
                idealFor: "Enterprise scaling",
                benefit: "Onshore lead, offshore execution.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-2xl transition-all"
              >
                {/* accent ring */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#F97316]/10 group-hover:bg-[#F97316]/20 transition" />

                <h4 className="text-[20px] font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </h4>
                <p className="text-[#64748B] mb-2">{item.idealFor}</p>
                <p className="text-[#475569]">{item.benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/services/staff-augmentation"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-orange-500/20"
            >
              Explore Staff Augmentation →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="relative py-28 px-4 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-sm font-semibold">
              Hiring Comparison
            </span>
            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Comparison Chart
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              See how Avaantra compares against freelancers and in-house hiring.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#E2E8F0] bg-white rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="p-4 text-left">Criteria</th>
                  <th className="p-4 text-left bg-[#F97316] text-white">
                    Avaantra
                  </th>
                  <th className="p-4 text-left">Freelancers</th>
                  <th className="p-4 text-left">In-House</th>
                </tr>
              </thead>

              <tbody className="text-[#475569]">
                {[
                  ["Hiring Speed", "15 Days", "60+ Days", "90+ Days"],
                  [
                    "Quality Control",
                    "✅ Multi-level screening",
                    "❌ Varies",
                    "✅",
                  ],
                  [
                    "Cost Efficiency",
                    "✅ 40–60% lower",
                    "❌ Unstable",
                    "❌ High",
                  ],
                  ["IP Ownership", "✅ 100%", "❌ Risky", "✅"],
                  ["Management Overhead", "✅ Minimal", "❌ High", "❌ High"],
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-4 font-medium text-[#0F172A]">{row[0]}</td>
                    <td className="p-4 bg-[#F97316]/5 font-semibold">
                      {row[1]}
                    </td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-28 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-semibold">
              Real Results
            </span>
            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Case Studies
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Proven outcomes from companies that scaled with Avaantra.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-xl transition">
              <p className="text-3xl font-bold text-[#0F172A] mb-2">68%</p>
              <p className="text-[#475569] font-medium mb-4">
                Faster Feature Releases
              </p>
              <p className="text-[#64748B]">
                💡 SaaS Company: Hired 6 developers in 4 weeks
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-xl transition">
              <p className="text-3xl font-bold text-[#0F172A] mb-2">45%</p>
              <p className="text-[#475569] font-medium mb-4">Cost Savings</p>
              <p className="text-[#64748B]">
                💡 E-commerce Client: Replaced freelancers
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-xl transition">
              <p className="text-3xl font-bold text-[#0F172A] mb-2">99.9%</p>
              <p className="text-[#475569] font-medium mb-4">Platform Uptime</p>
              <p className="text-[#64748B]">
                💡 FinTech Platform: Remote Python team
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/case-studies"
              className="
                inline-flex items-center gap-2
                border-2 border-[#0F172A]
                text-[#0F172A]
                px-8 py-3 rounded-lg
                font-semibold
                transition-all duration-300
                hover:bg-[#F97316]
                hover:border-[#F97316]
                hover:text-white
                hover:shadow-lg hover:shadow-orange-500/30
              "
            >
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Security, IP & Guarantees – Enhanced */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* background accents */}
        <div className="absolute -top-32 -left-32 w-[320px] h-[320px] bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[320px] h-[320px] bg-[#0F172A]/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Trust & Assurance
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-3">
              Security, IP & Guarantees
            </h2>

            <p className="text-[#475569] max-w-3xl mx-auto">
              Built for long-term partnerships, not short-term promises.
            </p>
          </div>

          {/* Unified Container */}
          <div className="grid md:grid-cols-3 rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] shadow-md">
            {/* LEFT: Guarantees */}
            <div className="md:col-span-2 p-8 relative">
              {/* left accent */}
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#F97316] to-[#EA580C]" />

              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5 text-[#475569] text-[15px] pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#F97316]">✔</span>
                  NDA before engagement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F97316]">✔</span>
                  Full code handover and repository access
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F97316]">✔</span>
                  Replacement guarantee within agreed window
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F97316]">✔</span>
                  Weekly progress and monthly performance reports
                </li>
              </ul>
            </div>

            {/* RIGHT: Testimonial */}
            <div className="p-8 bg-gradient-to-br from-[#FFF7ED] to-white border-t md:border-t-0 md:border-l border-[#E2E8F0] flex items-center">
              <div>
                <p className="text-[#0F172A] text-[15px] leading-relaxed mb-4">
                  “Two senior engineers started in 12 days.
                  <span className="block font-semibold text-[#F97316] mt-1">
                    Our last sprint delivered 70% more.
                  </span>
                  ”
                </p>

                <p className="font-semibold text-[#0F172A] text-sm">
                  — CTO, US SaaS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-28 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* background wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC]" />

        <div className="relative max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block mb-4 px-5 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Common Questions
            </span>
            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">FAQs</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Everything you need to know before hiring dedicated developers.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                q: "How do you find developers?",
                a: "We source through our pre-screened global network of senior engineers.",
              },
              {
                q: "Can we hire for short-term projects?",
                a: "Yes, minimum 1-month engagement.",
              },
              {
                q: "What if the developer doesn’t fit?",
                a: "Replacement within 7 days, no additional charge.",
              },
              {
                q: "Do your developers work in our time zone?",
                a: "Yes. We match time zones to client preference (US/EU/APAC).",
              },
              {
                q: "What communication tools do you use?",
                a: "Slack, Jira, Trello, MS Teams, and daily standups.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-300 open:shadow-xl open:border-orange-200"
              >
                {/* left accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#F97316] to-[#EA580C] opacity-0 group-open:opacity-100 transition" />

                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none px-8 py-6">
                  <span className="text-[16px] font-semibold text-[#0F172A]">
                    {item.q}
                  </span>

                  {/* icon */}
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-orange-100 text-[#F97316] font-bold transition-all duration-300 group-open:rotate-45 group-open:bg-[#F97316] group-open:text-white">
                    +
                  </span>
                </summary>

                {/* answer wrapper */}
                <div className="px-8 pb-6 pt-2">
                  <div className="text-[#475569] leading-relaxed">{item.a}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 px-4 bg-[#0F172A] overflow-hidden">
        {/* subtle glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F97316]/20 blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-[36px] font-bold mb-6">
            Build Your Tech Team in 15 Days — No Hiring Headaches.
          </h2>
          <p className="text-[18px] mb-10 opacity-90">
            Access elite developers who fit your goals, stack, and time zone —
            fast.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact-us"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-orange-500/30"
            >
              Request a Free Assessment
            </Link>

            <Link
              href="#developers-by-tech"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold"
            >
              See Developer Profiles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Helper Components */

function TechCard({
  icon,
  title,
  roles,
  links,
}: {
  icon: string;
  title: string;
  roles: string;
  links: string[];
}) {
  return (
    <div className="group relative bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-2xl transition-all">
      {/* accent strip */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-2xl" />

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F97316]/10 text-2xl">
          {icon}
        </div>
        <div>
          <h4 className="text-[20px] font-semibold text-[#0F172A]">{title}</h4>
          <p className="text-[#64748B] text-sm mt-1">{roles}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {links.map((link) => (
          <div
            key={link}
            className="text-[#F97316] font-medium hover:underline cursor-pointer"
          >
            {link}
          </div>
        ))}
      </div>

      {/* hover indicator */}
      <div className="absolute bottom-4 right-4 text-[#CBD5E1] group-hover:text-[#F97316] transition">
        →
      </div>
    </div>
  );
}
