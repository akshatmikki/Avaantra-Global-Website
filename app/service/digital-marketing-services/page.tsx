"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DigitalMarketingPage() {
  return (
    <main className="text-slate-900 bg-white">
      {/* ================= HERO (DARK) ================= */}
      <section className="relative bg-gradient-to-br from-black via-slate-900 to-black text-white">
        <div className="container mx-auto px-6 py-28 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Turn Clicks into Customers —{" "}
            <span className="text-orange-500">
              with Predictable Digital Growth
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            We help you attract, convert, and scale your online presence through
            intelligent, ROI-focused marketing strategies tailored for SaaS,
            startups, and digital agencies.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link href="/contact">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition">
                📅 Request Free Growth Audit
              </button>
            </Link>

            <button className="border border-slate-600 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition">
              💬 Talk to a Marketing Strategist
            </button>
          </div>

          {/* visual hint */}
          <div className="mt-16 text-slate-400 text-sm">
            Traffic ↑ Conversions ↑ ROI ↑
          </div>
        </div>
      </section>

      {/* ================= WHY DIGITAL MARKETING STILL WINS ================= */}
      <section className="py-28 bg-gradient-to-b from-orange-50/40 via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            In today’s digital chaos,{" "}
            <span className="text-orange-500">
              attention is the new currency.
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto">
            But most brands burn budgets chasing impressions — not impact.
            <br />
            <br />
            At Avaantra Global, we take a different path.
            <br />
            <span className="font-medium text-slate-700">
              We don’t sell ads. We sell outcomes.
            </span>
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Data over Vanity Metrics",
                text: "Every decision is driven by performance, not impressions.",
              },
              {
                title: "Storytelling with Strategy",
                text: "We combine messaging, positioning, and funnels that convert.",
              },
              {
                title: "Predictable Growth Systems",
                text: "Marketing ecosystems designed to scale, not spike.",
              },
              {
                title: "Built for SaaS & Agencies",
                text: "Strategies aligned with funding goals, MRR, and retention.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="
                  group bg-white border border-gray-200 rounded-2xl p-8
                  shadow-sm hover:shadow-xl hover:border-orange-300
                  transition-all duration-300
                "
              >
                <h3 className="text-lg font-semibold mb-3 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-20 text-lg font-medium text-slate-700 max-w-3xl mx-auto">
            The goal isn’t traffic. It’s traction.
          </p>
        </div>
      </section>

      {/* ================= CORE DIGITAL MARKETING SERVICES ================= */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Core{" "}
            <span className="text-orange-500">Digital Marketing Services</span>
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Performance Marketing",
                desc: "Data-backed paid campaigns across Google, Meta, and LinkedIn.",
                outcome: "Lower CAC and higher ROAS.",
                href: "/services/performance-marketing",
              },
              {
                title: "SEO Services",
                desc: "Organic growth strategies for visibility, rankings, and trust.",
                outcome: "Long-term traffic and authority.",
                href: "/services/seo-services",
              },
              {
                title: "Conversion Rate Optimization (CRO)",
                desc: "UX, A/B testing, and behavior analytics.",
                outcome: "More sales from the same traffic.",
                href: "/services/cro",
              },
              {
                title: "Online Reputation Management (ORM)",
                desc: "Manage and enhance brand perception online.",
                outcome: "Stronger trust and credibility.",
                href: "/services/orm",
              },
              {
                title: "SaaS Marketing Services",
                desc: "Demand generation built for subscriptions.",
                outcome: "Reduced churn, increased MRR.",
                href: "/services/saas-marketing",
              },
              {
                title: "Personal Branding Services",
                desc: "Thought leadership across digital channels.",
                outcome: "Influence, visibility, and trust.",
                href: "/services/personal-branding",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="
            relative bg-white border border-gray-200 rounded-2xl p-8
            shadow-sm hover:shadow-xl hover:border-orange-300
            transition-all duration-300
          "
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-500">
                  {item.title}
                </h3>

                <p className="text-slate-700 mb-2">{item.desc}</p>

                <p className="text-slate-600 mb-10">
                  <span className="font-medium">Outcome:</span> {item.outcome}
                </p>

                {/* Learn more – bottom right */}
                <a
                  href={item.href}
                  className="absolute bottom-6 right-6 inline-flex items-center gap-1
                       text-orange-500 font-medium text-sm hover:underline"
                >
                  Learn more <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE AVAANTRA ================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Avaantra for{" "}
            <span className="text-orange-500">Digital Marketing</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            We blend marketing psychology with engineering precision — because
            growth isn’t luck, it’s architecture.
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "🚀 Predictable ROI Framework",
                text: "Every campaign is tied to measurable KPIs and revenue outcomes.",
              },
              {
                title: "📊 Performance + SEO + CRO Integration",
                text: "A unified growth system, not isolated marketing tactics.",
              },
              {
                title: "🧠 22+ Years of Experience",
                text: "Strategy backed by execution excellence across industries.",
              },
              {
                title: "🧩 Custom ICP Targeting",
                text: "Messaging mapped to your audience’s pain, behavior, and goals.",
              },
              {
                title: "🌍 Global Reach, Local Execution",
                text: "Multi-market campaigns optimized by geography.",
              },
              {
                title: "🔒 Transparent Reporting",
                text: "Real-time dashboards — you see what we see.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            group bg-white border border-gray-200 rounded-2xl p-8
            hover:-translate-y-2 hover:shadow-xl hover:border-orange-300
            transition-all duration-300
          "
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <blockquote className="mt-24 max-w-3xl mx-auto italic text-slate-600">
            “Avaantra’s marketing team turned our ad spend into a measurable
            acquisition engine. Within 90 days, our CAC dropped by 38%.”
            <div className="mt-4 font-medium text-slate-500">
              — CMO, SaaS Startup
            </div>
          </blockquote>
        </div>
      </section>
      {/* ================= DIGITAL MARKETING PROCESS ================= */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-slate-100 relative overflow-hidden">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-orange-200/70" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Proven{" "}
            <span className="text-orange-500">Digital Marketing Process</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Predictable growth starts with a clear process.
          </p>

          <div className="mt-24 space-y-16">
            {[
              {
                step: "01",
                title: "Deep Discovery & ICP Mapping",
                text: "Market research, persona definition, and channel benchmarking.",
                deliverable: "Marketing Opportunity Blueprint",
              },
              {
                step: "02",
                title: "Strategy & Funnel Design",
                text: "Paid + organic integration, channel prioritization, messaging matrix.",
                deliverable: "90-Day Growth Plan",
              },
              {
                step: "03",
                title: "Campaign Execution",
                text: "Ad creation, SEO, content, automation, and conversion tracking.",
                deliverable: "Campaign Launch Dashboard",
              },
              {
                step: "04",
                title: "Optimization & Experimentation",
                text: "A/B testing, conversion optimization, and ROI-based budget shifts.",
                deliverable: "Monthly Performance Report",
              },
              {
                step: "05",
                title: "Scale & Retain",
                text: "Channel expansion, automation, retention, and advanced analytics.",
                deliverable: "Growth Acceleration Framework",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-500 text-black font-bold flex items-center justify-center text-lg shadow-lg">
                  {item.step}
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-xl text-left shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-3">{item.text}</p>
                  <p className="text-slate-700 font-medium">
                    Deliverable: {item.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= DIGITAL MARKETING BUILT FOR YOU ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Digital Marketing That’s{" "}
            <span className="text-orange-500">Built for You</span>
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-orange-300 transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                If You’re a Startup…
              </h3>
              <p className="text-slate-600">
                Validate your go-to-market, gain your first 1,000 users, and run
                lean marketing with maximum ROI.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-orange-300 transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                If You’re a SaaS Founder…
              </h3>
              <p className="text-slate-600">
                Reduce churn, improve trial-to-paid conversion, and build a 360°
                funnel from awareness to ARR.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-orange-300 transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                If You’re a Digital Agency…
              </h3>
              <p className="text-slate-600">
                Scale client delivery through white-label campaigns with
                predictable performance under your brand.
              </p>
            </div>
          </div>

          <p className="mt-20 text-lg font-medium text-slate-700 max-w-3xl mx-auto">
            We design strategies you can actually execute — even with limited
            teams or budgets.
          </p>
        </div>
      </section>
      {/* ================= RESULTS THAT SPEAK ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Results That <span className="text-orange-500">Speak</span>
          </h2>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              "45% average increase in qualified leads within 90 days",
              "30% lower CAC for SaaS and B2B brands",
              "2.4x higher ROAS across Google and Meta campaigns",
              "60% improvement in landing page conversions",
              "100% transparency in data and billing",
            ].map((text, index) => (
              <div
                key={index}
                className="
            bg-white border border-gray-200 rounded-2xl p-6
            hover:-translate-y-2 hover:shadow-xl hover:border-orange-300
            transition-all duration-300
          "
              >
                <div className="flex items-start gap-4">
                  <span className="text-green-600 text-xl mt-1">■</span>
                  <p className="text-slate-700 text-lg">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We <span className="text-orange-500">Serve</span>
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                industry: "SaaS & Software",
                example: "Lead generation and retention funnels.",
              },
              {
                industry: "FinTech",
                example:
                  "PPC and content strategies for compliance-driven brands.",
              },
              {
                industry: "E-commerce",
                example: "Product feed optimization and dynamic ad campaigns.",
              },
              {
                industry: "EdTech",
                example: "Course enrollment funnels and SEO content marketing.",
              },
              {
                industry: "Healthcare",
                example: "Local SEO and reputation management.",
              },
              {
                industry: "Agencies",
                example: "White-label PPC and SEO delivery.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            bg-white border border-gray-200 rounded-2xl p-8
            hover:-translate-y-2 hover:shadow-xl hover:border-orange-300
            transition-all duration-300
          "
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-500">
                  {item.industry}
                </h3>
                <p className="text-slate-600">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_60%)]" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Engagement <span className="text-orange-500">Models</span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Choose an engagement model that aligns with your growth stage and
            goals.
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Performance Retainer",
                ideal: "Long-term campaigns",
                desc: "Ongoing optimization with ROI-linked goals and reporting.",
              },
              {
                title: "Project-Based",
                ideal: "Specific initiatives",
                desc: "Fixed-scope SEO, CRO, or rebranding campaigns.",
              },
              {
                title: "White-Label Delivery",
                ideal: "Agencies",
                desc: "Avaantra executes while you retain brand visibility.",
              },
              {
                title: "Fractional CMO Model",
                ideal: "Funded startups",
                desc: "Strategic oversight combined with hands-on execution.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            group bg-slate-900 border border-slate-800 rounded-2xl p-8
            hover:-translate-y-2 hover:shadow-2xl hover:border-orange-400
            transition-all duration-300
          "
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                <p className="text-slate-300 mb-2">
                  <span className="font-medium text-orange-400">
                    Ideal for:
                  </span>{" "}
                  {item.ideal}
                </p>

                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CASE STUDIES ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Case <span className="text-orange-500">Studies</span>
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "SaaS CRM Platform (US)",
                challenge: "CAC higher than ARR recovery rate.",
                solution: "CRO + paid ads optimization + funnel redesign.",
                result: "CAC ↓ 42%, MRR ↑ 35% within 90 days.",
              },
              {
                title: "FinTech App (UK)",
                challenge: "Low search visibility; paid ads too expensive.",
                solution: "SEO revamp + content strategy + ORM cleanup.",
                result: "200% organic traffic growth, brand mentions ↑ 3x.",
              },
              {
                title: "Agency Partner (UAE)",
                challenge: "Limited in-house delivery capacity.",
                solution: "White-label SEO + PPC execution.",
                result: "4 new client projects delivered in 3 months.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            bg-white border border-gray-200 rounded-2xl p-8
            hover:-translate-y-2 hover:shadow-xl hover:border-orange-300
            transition-all duration-300
          "
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-500">
                  {item.title}
                </h3>

                <p className="text-slate-700 mb-2">
                  <span className="font-medium">Challenge:</span>{" "}
                  {item.challenge}
                </p>

                <p className="text-slate-700 mb-2">
                  <span className="font-medium">Solution:</span> {item.solution}
                </p>

                <p className="text-slate-600">
                  <span className="font-medium">Results:</span> {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= SECURITY, REPORTING & GOVERNANCE ================= */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Security, Reporting &{" "}
            <span className="text-orange-500">Governance</span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Your data. Your IP. Your control.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
            {[
              "100% ownership of accounts, ads, and analytics",
              "NDA and GDPR compliance by default",
              "Monthly KPI reporting and strategic reviews",
              "Real-time dashboards and performance scorecards",
              "Full transparency — no hidden numbers, no fluff",
            ].map((text, index) => (
              <div
                key={index}
                className="
            bg-white border border-gray-200 rounded-xl p-6
            hover:shadow-lg hover:border-orange-300
            transition-all
          "
              >
                <div className="flex items-start gap-4">
                  <span className="text-orange-500 text-xl mt-1">✓</span>
                  <p className="text-slate-600 text-sm md:text-base">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= FAQs ================= */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>

          <div className="mt-20 space-y-4 text-left">
            {[
              {
                q: "What makes Avaantra different from other marketing agencies?",
                a: "We integrate marketing with product and revenue strategy — no silos. Every channel drives measurable ROI.",
              },
              {
                q: "How soon can I see results?",
                a: "PPC and CRO improvements start within weeks; SEO typically shows traction within 60–90 days.",
              },
              {
                q: "Do you work with early-stage startups?",
                a: "Yes. We design lean marketing systems that scale alongside funding milestones.",
              },
              {
                q: "What’s your minimum engagement duration?",
                a: "Typically 3–6 months for meaningful and measurable results.",
              },
              {
                q: "Do I get ownership of my ad accounts?",
                a: "Yes. You retain full ownership of all assets, accounts, and data.",
              },
              {
                q: "Can you manage multiple regions or markets?",
                a: "Absolutely. We run geo-targeted campaigns across North America, Europe, and APAC.",
              },
              {
                q: "How do you measure success?",
                a: "We track CAC, CLV, ROAS, and conversion velocity — not vanity metrics.",
              },
              {
                q: "Do you offer white-label services?",
                a: "Yes. We deliver under your agency brand using your preferred reporting format.",
              },
              {
                q: "Can you help with SaaS product positioning?",
                a: "Yes. Our SaaS marketing team handles messaging, ICP targeting, and GTM strategy.",
              },
              {
                q: "What tools do you use for analytics and tracking?",
                a: "Google Analytics 4, HubSpot, SEMrush, Hotjar, and Looker Studio.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-xl p-6 open:bg-gray-50 transition"
              >
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-slate-800">
                  {item.q}
                  <span className="text-orange-500 group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* ================= FINAL CTA ================= */}
      <section className="py-32 bg-gradient-to-br from-black via-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_60%)]" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Marketing You Can Measure.{" "}
            <span className="text-orange-500">Growth You Can Trust.</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Partner with Avaantra Global to create digital marketing systems
            that generate predictable, compounding growth.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <Link href="/contact">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-black font-semibold px-10 py-5 rounded-xl transition shadow-lg hover:shadow-xl">
                📅 Request Free Marketing Audit
              </button>
            </Link>

            <button className="border border-slate-600 text-white px-10 py-5 rounded-xl hover:bg-white hover:text-black transition">
              💬 Schedule a Strategy Call
            </button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-400 text-sm md:text-base">
            <span>✔ 22+ Years Experience</span>
            <span>✔ 100+ Projects Delivered</span>
            <span>✔ Google Partner</span>
            <span>✔ ISO-Certified</span>
            <span>✔ 100% Transparent Reporting</span>
          </div>
        </div>
      </section>
    </main>
  );
}
