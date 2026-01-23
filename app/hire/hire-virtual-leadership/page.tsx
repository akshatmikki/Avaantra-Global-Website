import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hire Virtual Leadership | Virtual CTO, CMO & Fractional CXOs | Avaantra Global",
  description:
    "Hire virtual leadership experts including Virtual CTOs, CMOs, Product Managers, and Fractional CXOs. Executive expertise without full-time overhead.",
};
export default function HireVirtualLeadershipPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero – Hire Virtual Leadership */}
      <section className="relative py-28 px-4 bg-white overflow-hidden">
        {/* subtle background accents */}
        <div className="absolute -top-32 -right-32 w-[380px] h-[380px] bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-[320px] h-[320px] bg-[#0F172A]/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block mb-6 px-5 py-2 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Hire Virtual Leadership
            </span>

            <h1 className="text-[48px] leading-[1.15] font-bold text-[#0F172A] mb-6">
              Executive Leadership —
              <br />
              <span className="text-[#F97316]">Without Full-Time Overhead</span>
            </h1>

            <p className="text-[18px] text-[#475569] leading-relaxed mb-10 max-w-xl">
              Bring senior leadership into your business without long-term
              hiring. Avaantra provides Virtual CTOs, CMOs, Product Leaders, and
              Fractional CXOs who guide strategy, execution, and growth —
              exactly when you need them.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact-us"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Hire Virtual Leadership
              </a>

              <a
                href="#roles"
                className="border border-[#0F172A]/20 text-[#0F172A] px-8 py-4 rounded-lg font-semibold hover:border-[#F97316] transition"
              >
                Explore Leadership Roles →
              </a>
            </div>
          </div>

          {/* Right Visual (Upgraded) */}
          <div className="hidden md:block">
            <div className="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white border border-[#E2E8F0] rounded-xl px-4 py-2 shadow-sm">
                <p className="text-xs font-semibold text-[#0F172A]">
                  Senior Leadership
                </p>
                <p className="text-[11px] text-[#64748B]">On-Demand</p>
              </div>

              <p className="text-sm uppercase tracking-wide text-[#F97316] mb-6 font-semibold">
                What Virtual Leaders Drive
              </p>

              {/* Leadership Areas */}
              <div className="space-y-4">
                {[
                  {
                    title: "Technology Direction",
                    desc: "Architecture, scalability, and long-term tech decisions",
                  },
                  {
                    title: "Product & Delivery",
                    desc: "Roadmaps, execution governance, and velocity control",
                  },
                  {
                    title: "Growth & Revenue",
                    desc: "Go-to-market alignment and monetization strategy",
                  },
                  {
                    title: "Teams & Processes",
                    desc: "Hiring strategy, process maturity, and accountability",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
            group flex gap-3 items-start
            bg-white border border-[#E2E8F0]
            rounded-xl p-4
            hover:shadow-md transition
          "
                  >
                    {/* Accent dot */}
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-[#F97316]" />

                    <div>
                      <p className="font-semibold text-[#0F172A] text-sm mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-[#475569] text-[12.5px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Virtual Leadership */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-24 -left-24 w-[320px] h-[320px] bg-[#F97316]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Why It Works
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Why Virtual Leadership Works
            </h2>

            <p className="text-[#475569] text-[17px] leading-relaxed">
              Scaling leadership is harder than scaling teams — unless you
              approach it strategically.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Hiring Is Slow",
                desc: "Executive hiring takes months and locks you into long-term costs.",
              },
              {
                title: "Advisors Lack Ownership",
                desc: "Consultants advise but rarely stay accountable for execution.",
              },
              {
                title: "Founders Get Stretched",
                desc: "Strategic decisions suffer when founders juggle everything.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            relative bg-white border border-[#E2E8F0]
            rounded-2xl p-7
            hover:shadow-lg transition
          "
              >
                {/* accent bar */}
                <div className="absolute top-0 left-0 h-1 w-full bg-[#F97316]/70 rounded-t-2xl" />

                <p className="font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </p>

                <p className="text-[#475569] text-[14.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      ;{/* Leadership Roles */}
      <section id="roles" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Leadership Roles
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A]">
              Hire Virtual Leaders Across Functions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Virtual CTO", link: "/hire-virtual-cto" },
              { name: "Virtual CMO", link: "/hire-virtual-cmo" },
              {
                name: "Technology Consultants",
                link: "/hire-technology-consultants",
              },
              { name: "Product Managers", link: "/hire-product-managers" },
              { name: "Project Managers", link: "/hire-project-managers" },
              {
                name: "Fractional CXO Team",
                link: "/hire-fractional-cxo-team",
              },
            ].map((role, i) => (
              <a
                key={i}
                href={role.link}
                className="
            group bg-[#F8FAFC] border border-[#E2E8F0]
            rounded-xl p-6
            hover:shadow-lg transition
          "
              >
                <p className="font-semibold text-[#0F172A] mb-2 group-hover:text-[#F97316]">
                  {role.name}
                </p>
                <p className="text-sm text-[#475569]">
                  Strategic leadership tailored to your stage and goals.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-24 -right-24 w-[320px] h-[320px] bg-[#F97316]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Engagement Process
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              How Virtual Leadership Engagement Works
            </h2>

            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">
              A structured engagement model designed to bring senior leadership
              clarity, speed, and accountability.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Define Leadership Gap",
                desc: "We understand your challenges, goals, and leadership needs.",
              },
              {
                title: "Match Senior Expert",
                desc: "We assign a leader with proven experience in your domain.",
              },
              {
                title: "Align on KPIs",
                desc: "Clear ownership, outcomes, and success metrics are defined.",
              },
              {
                title: "Operate & Scale",
                desc: "Your virtual leader executes and scales with your business.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="
            relative bg-white border border-[#E2E8F0]
            rounded-2xl p-7
            hover:shadow-lg transition
          "
              >
                {/* Step number */}
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F97316]/15 text-[#F97316] font-bold">
                    {i + 1}
                  </span>
                </div>

                <p className="font-semibold text-[#0F172A] mb-2">
                  {step.title}
                </p>

                <p className="text-[#475569] text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Engagement Models */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -bottom-24 -left-24 w-[320px] h-[320px] bg-[#F97316]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Engagement Models
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Flexible Leadership Engagement Models
            </h2>

            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">
              Choose the level of leadership involvement that fits your stage,
              complexity, and business goals.
            </p>
          </div>

          {/* Models */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Fractional Leadership",
                desc: "Part-time senior leadership focused on strategy and oversight.",
                bestFor: "Early-stage & scaling teams",
              },
              {
                title: "Advisory + Execution",
                desc: "Hands-on leadership that guides and actively drives execution.",
                bestFor: "Growing products & platforms",
              },
              {
                title: "Interim Leadership",
                desc: "Short-term leadership during transitions or critical phases.",
                bestFor: "Turnarounds & leadership gaps",
              },
              {
                title: "On-Demand Consulting",
                desc: "Expert input for specific decisions, audits, or roadmaps.",
                bestFor: "Targeted strategic needs",
              },
            ].map((model, i) => (
              <div
                key={i}
                className="
            relative bg-[#F8FAFC] border border-[#E2E8F0]
            rounded-2xl p-7
            hover:shadow-lg transition
          "
              >
                {/* accent bar */}
                <div className="absolute top-0 left-0 h-1 w-full bg-[#F97316]/70 rounded-t-2xl" />

                <p className="font-semibold text-[#0F172A] mb-3">
                  {model.title}
                </p>

                <p className="text-[#475569] text-[14.5px] leading-relaxed mb-4">
                  {model.desc}
                </p>

                <p className="text-sm text-[#64748B]">
                  <span className="font-medium text-[#0F172A]">Best for:</span>{" "}
                  {model.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Client Proof */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-24 -right-24 w-[300px] h-[300px] bg-[#F97316]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Client Proof
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Leadership That Delivers Real Impact
            </h2>

            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">
              Companies trust Avaantra’s virtual leaders to guide strategy,
              execution, and critical decisions during key growth phases.
            </p>
          </div>

          {/* Proof Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Virtual CTO Engagement",
                quote:
                  "Our virtual CTO helped us stabilize architecture, streamline delivery, and prepare for scale within weeks.",
                author: "CTO, SaaS Company",
              },
              {
                title: "Fractional CMO Support",
                quote:
                  "The leadership clarity and execution focus completely changed how we approached growth.",
                author: "Founder, B2B Startup",
              },
              {
                title: "Product Leadership Advisory",
                quote:
                  "Having senior product leadership on-demand helped us align teams and hit delivery milestones.",
                author: "Product Head, Tech Firm",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            bg-white border border-[#E2E8F0]
            rounded-2xl p-7
            hover:shadow-lg transition
          "
              >
                {/* accent */}
                <div className="w-10 h-1 bg-[#F97316] mb-4 rounded-full" />

                <p className="font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </p>

                <p className="text-[#475569] text-[14.5px] leading-relaxed mb-4">
                  “{item.quote}”
                </p>

                <p className="text-sm text-[#64748B] font-medium">
                  — {item.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Client Proof */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-24 -right-24 w-[300px] h-[300px] bg-[#F97316]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              Client Proof
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Leadership That Delivers Real Impact
            </h2>

            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">
              Companies trust Avaantra’s virtual leaders to guide strategy,
              execution, and critical decisions during key growth phases.
            </p>
          </div>

          {/* Proof Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Virtual CTO Engagement",
                quote:
                  "Our virtual CTO helped us stabilize architecture, streamline delivery, and prepare for scale within weeks.",
                author: "CTO, SaaS Company",
              },
              {
                title: "Fractional CMO Support",
                quote:
                  "The leadership clarity and execution focus completely changed how we approached growth.",
                author: "Founder, B2B Startup",
              },
              {
                title: "Product Leadership Advisory",
                quote:
                  "Having senior product leadership on-demand helped us align teams and hit delivery milestones.",
                author: "Product Head, Tech Firm",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            bg-white border border-[#E2E8F0]
            rounded-2xl p-7
            hover:shadow-lg transition
          "
              >
                {/* accent */}
                <div className="w-10 h-1 bg-[#F97316] mb-4 rounded-full" />

                <p className="font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </p>

                <p className="text-[#475569] text-[14.5px] leading-relaxed mb-4">
                  “{item.quote}”
                </p>

                <p className="text-sm text-[#64748B] font-medium">
                  — {item.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-[#F97316]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
              FAQs
            </span>

            <h2 className="text-[36px] font-bold text-[#0F172A] mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-[#475569] text-[16px]">
              Clear answers before you engage virtual leadership.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {[
              {
                q: "What is virtual leadership?",
                a: "Virtual leadership provides senior-level expertise such as CTOs, CMOs, or CXOs on a fractional or on-demand basis without full-time hiring.",
              },
              {
                q: "Will the virtual leader work exclusively with us?",
                a: "Yes. During the engagement, the leader is dedicated to your organization and aligned to your goals and priorities.",
              },
              {
                q: "How quickly can we onboard a virtual leader?",
                a: "Most engagements begin within 7–15 days depending on role complexity and availability.",
              },
              {
                q: "Can virtual leaders execute or only advise?",
                a: "Our leaders do both — they provide strategic guidance and actively drive execution alongside your teams.",
              },
              {
                q: "Is this suitable for startups or only large companies?",
                a: "Virtual leadership works for startups, scale-ups, and enterprises that need senior expertise without long-term overhead.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="
            group bg-[#F8FAFC] border border-[#E2E8F0]
            rounded-xl px-6 py-5
            open:bg-white open:shadow-sm
            transition
          "
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-[#0F172A] text-[15px]">
                    {item.q}
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F97316]/15 text-[#F97316] font-bold group-open:rotate-45 transition">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-[#475569] text-[14.5px] leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* Why This Works */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">
        {/* subtle accent */}
        <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[#F97316]/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-semibold">
            Why This Works
          </span>

          <h2 className="text-[36px] font-bold text-[#0F172A] mb-6">
            Senior Leadership Without the Risk of Full-Time Hiring
          </h2>

          <p className="text-[#475569] text-[17px] leading-relaxed max-w-3xl mx-auto">
            Virtual leadership works because it removes friction — no long
            hiring cycles, no fixed overhead, and no loss of accountability.
            <br />
            <span className="font-semibold text-[#0F172A]">
              You get experience, ownership, and execution — exactly when you
              need it.
            </span>
          </p>

          {/* Highlights */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              "Access proven leaders without long-term commitment",
              "Faster decision-making and execution clarity",
              "Aligned strategy, delivery, and accountability",
            ].map((point, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg transition"
              >
                <p className="text-[#475569] text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="relative py-28 px-4 bg-white overflow-hidden">
        {/* accent */}
        <div className="absolute -bottom-32 -right-32 w-[360px] h-[360px] bg-[#F97316]/15 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-[38px] font-bold text-[#0F172A] mb-6 leading-tight">
            Bring Senior Leadership Into Your Business —
            <br />
            Without Long-Term Hiring Commitments
          </h2>

          <p className="text-[#475569] text-[17px] mb-10 max-w-2xl mx-auto">
            Talk to us about your leadership needs and get matched with
            experienced virtual leaders who align with your goals, stage, and
            execution model.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact-us"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-10 py-4 rounded-lg font-semibold transition"
            >
              Book a Free Strategy Call
            </a>

            <a
              href="#roles"
              className="border border-[#0F172A]/20 text-[#0F172A] px-10 py-4 rounded-lg font-semibold hover:border-[#F97316] transition"
            >
              Explore Leadership Roles
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
