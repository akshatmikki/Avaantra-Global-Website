"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SoftwareEngineeringPage() {
  return (
    <main className="text-slate-900 bg-white">
      {/* ================= HERO (DARK) ================= */}
      <section className="relative bg-gradient-to-br from-black via-slate-900 to-black text-white">
        <div className="container mx-auto px-6 py-28 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Software Engineering That{" "}
            <span className="text-orange-500">
              Delivers Predictable Results
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            You need a partner who gets your vision, ships on time, and scales
            with you. From MVPs to full-scale platforms — Avaantra helps you
            build, launch, and grow with engineering that moves your business
            forward.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link href="/contact">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition">
                📅 Book a Free 15-Minute Consultation
              </button>
            </Link>

            <a
              href="/hire/hire-developers"
              className="inline-flex items-center gap-2 border border-slate-600 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
            >
              Hire Developers →
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICE OVERVIEW ================= */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            You don’t just need code.
            <br />
            <span className="text-orange-500">
              You need a system that keeps shipping without burning time or
              money.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Avaantra Global helps startups, SaaS companies, and agencies
            accelerate development through predictable, process-driven software
            engineering. Our services cover every stage of your digital product
            lifecycle.
          </p>

          {/* Services Grid */}
          <div className="mt-20 grid md:grid-cols-2 gap-10 text-left">
            {[
              {
                title: "Custom Software Development",
                desc: "Build exactly what your business needs — scalable apps, platforms, and automation tools aligned with your market goals.",
              },
              {
                title: "Product Engineering",
                desc: "From MVP to full product, get a team that handles design, backend, cloud, and analytics with a clear roadmap.",
              },
              {
                title: "Full-Stack Development",
                desc: "Seamless web, mobile, and API development that ensures speed, stability, and great UX.",
              },
              {
                title: "Software Modernization",
                desc: "Upgrade legacy systems to modern, high-performance architectures without downtime.",
              },
              {
                title: "DevOps & Cloud Enablement",
                desc: "Faster releases, better uptime, and cost efficiency through CI/CD pipelines and cloud-native deployment.",
              },
              {
                title: "API Development & Integration",
                desc: "Connect your platforms, CRMs, and payment systems securely and efficiently.",
              },
              {
                title: "QA & Testing Services",
                desc: "Manual and automated testing to guarantee performance, security, and scalability.",
              },
              {
                title: "Maintenance & Support",
                desc: "Continuous monitoring and enhancement to ensure your software evolves with your business.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERNAL LINKS ================= */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
        {/* soft ambient background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_55%)]" />

        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Explore Related <span className="text-orange-500">Services</span>
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            These services work seamlessly with our software engineering
            offering. Explore what fits your roadmap next.
          </p>

          {/* Animated Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Dedicated Teams",
                href: "/services/dedicated-teams",
              },
              {
                title: "Staff Augmentation",
                href: "/services/staff-augmentation",
              },
              {
                title: "Full-Stack Development",
                href: "/services/full-stack-development",
              },
              {
                title: "IT & Digital Consulting",
                href: "/services/it-digital-consulting",
              },
              {
                title: "Drive Revenue — Engineering + Growth",
                href: "/services/drive-revenue-engineering-growth",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
            relative h-24 flex items-center justify-center text-center px-4
            rounded-xl border border-gray-200 bg-white
            font-medium text-slate-800
            shadow-sm cursor-pointer
            transition-colors
            hover:border-orange-400 hover:text-orange-500
          "
              >
                {/* hover glow */}
                <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent_70%)]" />

                <span className="relative z-10">{item.title}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY IT WORKS FOR YOU ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why It Works for <span className="text-orange-500">You</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            When you work with Avaantra, you don’t just get engineers.
            <br />
            <span className="font-medium text-slate-800">
              You get predictability, performance, and peace of mind.
            </span>
          </p>

          {/* Value Cards */}
          {(() => {
            const items = [
              "Faster Time to Market — ship products in weeks, not months",
              "Cost Efficiency — save up to 60% compared to local hiring",
              "Senior Expertise — only vetted engineers with 5+ years’ experience",
              "Full IP Ownership — your product. your code. always yours",
              "Transparent Process — weekly sprint demos and KPI dashboards",
              "Zero Hiring Risk — replace any resource within 2 weeks",
              "Scalable Teams — add or remove talent anytime",
            ];

            return (
              <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
                {items.map((text, index) => {
                  const isLastOdd =
                    items.length % 2 !== 0 && index === items.length - 1;

                  return (
                    <div
                      key={index}
                      className={`
                  group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm
                  hover:-translate-y-2 hover:shadow-xl hover:border-orange-300
                  transition-all duration-300
                  ${isLastOdd ? "md:col-span-2 md:mx-auto md:max-w-xl" : ""}
                `}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-orange-500 text-xl mt-1">✓</span>
                        <p className="text-slate-700 text-lg group-hover:text-slate-900 transition">
                          {text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {/* Testimonial */}
          <div className="mt-28 max-w-4xl mx-auto">
            <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-10 shadow-sm">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-6xl text-orange-200">
                “
              </span>

              <blockquote className="text-slate-700 italic text-lg leading-relaxed">
                Avaantra gave us the velocity of a Series B company on a Series
                A budget. Their delivery was consistent, transparent, and
                reliable.
              </blockquote>

              <div className="mt-6 font-medium text-slate-500">
                — CTO, FinTech SaaS Startup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE AVAANTRA ================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* subtle background accent */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-orange-500">Avaantra Global</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            You care about results. We care about predictability.
            <br />
            Startups and digital agencies work with us because we remove chaos
            from execution.
          </p>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "🧠 Domain Expertise",
                text: "Over 20 years of combined leadership across product engineering, SaaS, and marketing.",
              },
              {
                title: "📈 Predictable Outcomes",
                text: "KPIs tied to real metrics — delivery timelines, sprint velocity, and defect ratios.",
              },
              {
                title: "🌍 Global Team, Local Accountability",
                text: "Cross-time-zone teams that communicate clearly and deliver consistently.",
              },
              {
                title: "🔒 Security & Compliance",
                text: "NDA-backed, SOC2-ready, and compliant with GDPR & ISO practices.",
              },
              {
                title: "💡 Founder-Level Insight",
                text: "You get attention from industry experts — not layers of account managers.",
                full: true,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`
            group bg-white border border-gray-200 rounded-2xl p-8
            hover:-translate-y-2 hover:shadow-xl hover:border-orange-300
            transition-all duration-300
            ${item.full ? "md:col-span-2 md:max-w-3xl md:mx-auto" : ""}
          `}
              >
                <h3 className="font-semibold text-xl mb-3 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <p className="mt-20 text-lg font-medium text-slate-700">
            Our goal: Make your roadmap move faster, without adding chaos.
          </p>
        </div>
      </section>

      {/* ================= HOW YOU GET RESULTS ================= */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-slate-100 relative overflow-hidden">
        {/* vertical accent line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-orange-200/70" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            How You Get <span className="text-orange-500">Results</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Our approach is simple, structured, and outcome-focused.
          </p>

          {/* Steps */}
          <div className="mt-24 space-y-16">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                text: "We start with a 60-minute discovery call to understand your business goals, target users, and success metrics. You receive a written plan with scope, milestones, and ROI projections.",
              },
              {
                step: "02",
                title: "Architecture & Design",
                text: "Our solution architects design scalable systems while UX/UI experts ensure every feature drives engagement and conversion.",
              },
              {
                step: "03",
                title: "Agile Development",
                text: "We run bi-weekly sprints with demos, QA checks, and measurable KPIs. You always know progress, blockers, and velocity.",
              },
              {
                step: "04",
                title: "Testing & QA",
                text: "Unit, integration, and performance testing ensure stability and security from day one.",
              },
              {
                step: "05",
                title: "Launch & Support",
                text: "Once live, we monitor performance, resolve issues, and help you scale through continuous feedback loops.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-500 text-black font-bold flex items-center justify-center text-lg shadow-lg">
                  {item.step}
                </div>

                {/* Card */}
                <div
                  className="bg-white rounded-2xl border border-gray-200 p-8 max-w-xl text-left
                          shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <h3 className="font-semibold text-xl mb-3">
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-12 py-5 rounded-xl transition shadow-lg hover:shadow-xl">
              📩 Discuss Your Engineering Roadmap
            </button>
          </div>
        </div>
      </section>
      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
        {/* subtle background texture */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_60%)]" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Engagement <span className="text-orange-500">Models</span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Different businesses. Different needs.
            <br />
            <span className="text-slate-200 font-medium">
              Same predictability.
            </span>
          </p>

          {/* Models Grid */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                model: "Dedicated Team",
                bestFor: "Long-term development projects",
                how: "A full-time team working as your in-house extension.",
              },
              {
                model: "Staff Augmentation",
                bestFor: "Temporary skill gaps",
                how: "Add vetted developers to your existing team fast.",
              },
              {
                model: "Project-Based",
                bestFor: "MVP or fixed-scope delivery",
                how: "Define requirements → we deliver end-to-end.",
              },
              {
                model: "White-Label Partnership",
                bestFor: "Digital agencies",
                how: "Avaantra delivers under your brand with full confidentiality.",
              },
              {
                model: "Hybrid Model",
                bestFor: "SaaS scale-ups",
                how: "Mix in-house and extended teams for balance and control.",
                full: true,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`
            group bg-slate-900 border border-slate-800 rounded-2xl p-8
            hover:border-orange-400 hover:-translate-y-2 hover:shadow-2xl
            transition-all duration-300
            ${item.full ? "md:col-span-2 md:max-w-3xl md:mx-auto" : ""}
          `}
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-400 transition">
                  {item.model}
                </h3>

                <div className="space-y-3 text-slate-300">
                  <p>
                    <span className="text-orange-400 font-medium">
                      Best for:
                    </span>{" "}
                    {item.bestFor}
                  </p>
                  <p>
                    <span className="text-orange-400 font-medium">
                      How it works:
                    </span>{" "}
                    {item.how}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-12 py-5 rounded-xl transition shadow-lg hover:shadow-xl">
              💬 Let’s Choose Your Model
            </button>
          </div>
        </div>
      </section>
      {/* ================= CASE STUDIES ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/30 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Case <span className="text-orange-500">Studies</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Real teams. Real constraints. Predictable delivery.
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-10 text-left">
            {/* Case 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <h3 className="font-semibold text-xl mb-4 text-orange-500">
                SaaS Product Launch (North America)
              </h3>

              <p className="text-slate-700 mb-3">
                <span className="font-medium">Challenge:</span> CTO faced
                4-month hiring delays and tight investor deadlines.
              </p>

              <p className="text-slate-700 mb-3">
                <span className="font-medium">Solution:</span> Avaantra deployed
                a 6-person dedicated team in 18 days.
              </p>

              <p className="text-slate-700">
                <span className="font-medium">Outcome:</span> MVP launched in 9
                weeks, $1.2M seed raised 2 months later.
              </p>
            </div>

            {/* Case 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <h3 className="font-semibold text-xl mb-4 text-orange-500">
                Digital Agency Partnership (Europe)
              </h3>

              <p className="text-slate-700 mb-3">
                <span className="font-medium">Challenge:</span> Agency lacked
                technical bandwidth for web projects.
              </p>

              <p className="text-slate-700 mb-3">
                <span className="font-medium">Solution:</span> Avaantra acted as
                their white-label development partner.
              </p>

              <p className="text-slate-700">
                <span className="font-medium">Outcome:</span> Revenue scaled by
                40% in 6 months with zero delivery delays.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= CLIENT TESTIMONIALS ================= */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* subtle accent */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Client <span className="text-orange-500">Testimonials</span>
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
              <p className="italic text-slate-700 text-base leading-relaxed">
                “Finally found a team that thinks in outcomes, not hours. They
                move like a startup but deliver like an enterprise.”
              </p>
              <div className="mt-4 text-slate-500 font-medium">
                — VP Product, Marketing Agency (UK)
              </div>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
              <p className="italic text-slate-700 text-base leading-relaxed">
                “Our engineers could focus on innovation again instead of hiring
                chaos.”
              </p>
              <div className="mt-4 text-slate-500 font-medium">
                — CTO, SaaS Startup (US)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We <span className="text-orange-500">Serve</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            We’ve helped 100+ companies scale across industries — always focused
            on predictable delivery and measurable outcomes.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "SaaS & Software",
                text: "Build and scale multi-tenant SaaS products with fast deployment cycles.",
              },
              {
                title: "FinTech",
                text: "Secure, compliant applications with real-time analytics and integrations.",
              },
              {
                title: "E-commerce",
                text: "Scalable web and mobile stores with seamless checkout and automation.",
              },
              {
                title: "HealthTech",
                text: "HIPAA-compliant applications and patient engagement platforms.",
              },
              {
                title: "EdTech",
                text: "Interactive LMS and learning platforms for modern users.",
              },
              {
                title: "Digital Agencies",
                text: "White-label technology delivery to scale services profitably.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-xl mb-3 text-orange-500">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= SECURITY & ASSURANCE ================= */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* subtle accent */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Security & <span className="text-orange-500">Assurance</span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Startups need speed without security risk.
            <br />
            <span className="font-medium text-slate-700">
              We make that balance work.
            </span>
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "NDA & IP Protection",
                text: "You own everything. All code, assets, and intellectual property remain fully yours.",
              },
              {
                title: "Governance Framework",
                text: "Every project is reviewed weekly by senior architects to ensure quality and alignment.",
              },
              {
                title: "Data Protection",
                text: "Encrypted access, SOC2 practices, and GDPR-compliant data handling.",
              },
              {
                title: "Code Security",
                text: "Static analysis, dependency scanning, and zero open vulnerabilities.",
              },
              {
                title: "Replacement Guarantee",
                text: "Any developer can be replaced within 2 weeks, no questions asked.",
                full: true,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`
            group bg-white border border-gray-200 rounded-xl p-6
            hover:border-orange-300 hover:shadow-lg
            transition-all duration-300
            ${item.full ? "md:col-span-2 md:max-w-3xl md:mx-auto" : ""}
          `}
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  {item.text}
                </p>
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
                q: "How long does it take to build custom software?",
                a: "It depends on scope. An MVP usually takes 8–12 weeks. Larger systems can take 4–6 months. You’ll receive a full project timeline before kickoff.",
              },
              {
                q: "What’s included in your software engineering service?",
                a: "Everything — architecture, coding, QA, deployment, and support. You get weekly demos, transparent reports, and post-launch optimization.",
              },
              {
                q: "Do I need a technical team to work with you?",
                a: "No. We work with both technical and non-technical founders. We translate business goals into technical plans and KPIs.",
              },
              {
                q: "Can you integrate with my current tools and systems?",
                a: "Yes. We work within your environment including GitHub, Slack, Jira, Asana, AWS, and Azure.",
              },
              {
                q: "How do you ensure quality?",
                a: "Every developer goes through a 5-stage vetting process. Code quality is measured through peer reviews and CI/CD checks.",
              },
              {
                q: "How do you protect my data and IP?",
                a: "All code, credentials, and access remain under your control. We operate under strict NDAs and follow ISO security protocols.",
              },
              {
                q: "What happens after launch?",
                a: "You can continue with our support retainer for monitoring, updates, and performance optimization.",
              },
              {
                q: "Can you replace a team member if needed?",
                a: "Yes — within 2 weeks, at no extra cost.",
              },
              {
                q: "What if I only need part-time developers?",
                a: "We provide flexible part-time and hourly models to fit your runway and scope.",
              },
              {
                q: "Why should I trust Avaantra over other offshore firms?",
                a: "Because you get founder-level involvement, predictable delivery, and transparent communication — not a faceless outsourcing shop.",
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
        {/* subtle glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_60%)]" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Build Software That{" "}
            <span className="text-orange-500">Moves Your Business Forward</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Get your roadmap back on track. Hire developers, start faster, and
            scale smarter — without adding hiring chaos or cost uncertainty.
          </p>

          {/* CTAs */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <Link href="/contact">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-black font-semibold px-10 py-5 rounded-xl transition shadow-lg hover:shadow-xl">
                📩 Book a Free Strategy Call
              </button>
            </Link>

            <button
              className="border border-slate-600 text-white px-10 py-5 rounded-xl
                         hover:bg-white hover:text-black transition"
            >
              💬 Talk to a Product Expert
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-400 text-sm md:text-base">
            <span className="flex items-center gap-2">✔ ISO Certified</span>
            <span className="flex items-center gap-2">✔ NDA & IP Secured</span>
            <span className="flex items-center gap-2">
              ✔ 100+ Projects Delivered
            </span>
            <span className="flex items-center gap-2">
              ✔ 20+ Years’ Experience
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
