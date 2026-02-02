"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductEngineeringPage() {
  return (
    <main className="text-slate-900 bg-white">
      {/* ================= HERO (DARK) ================= */}
      <section className="relative bg-gradient-to-br from-black via-slate-900 to-black text-white">
        <div className="container mx-auto px-6 py-28 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Turn Your Idea Into a{" "}
            <span className="text-orange-500">
              Scalable Product That Delivers
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            From discovery to deployment — you get predictable product
            engineering that builds faster, scales better, and grows revenue
            smarter.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link href="/contact">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition">
                📅 Book Free Product Strategy Call
              </button>
            </Link>

            <button className="border border-slate-600 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition">
              💬 Discuss Your MVP →
            </button>
          </div>

          {/* hero visual hint */}
          <div className="mt-16 text-slate-400 text-sm">
            Idea → Discovery → MVP → Scale → Growth
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-28 bg-gradient-to-b from-orange-50/40 via-gray-50 to-white relative overflow-hidden">
        {/* subtle background accent */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Building a digital product isn’t just about writing code.
            <br />
            <span className="text-orange-500">
              It’s about turning an idea into a market-ready business asset.
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto">
            Product engineering brings together technology strategy, design
            thinking, scalable architecture, and business alignment.
            <br />
            <br />
            At Avaantra Global, we partner with startups, SaaS founders, and
            digital agencies to build products that succeed — technically,
            financially, and operationally.
          </p>

          {/* Pillars */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Technology Strategy",
                text: "What to build and why — aligned with real business goals.",
              },
              {
                title: "Design Thinking",
                text: "How users experience your product from first click to retention.",
              },
              {
                title: "Scalable Architecture",
                text: "Performance, reliability, and flexibility as you grow.",
              },
              {
                title: "Business Alignment",
                text: "Engineering decisions that support revenue and scale.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="
            group bg-white border border-gray-200 rounded-2xl p-8
            shadow-sm hover:shadow-xl hover:border-orange-300
            transition-all duration-300
          "
              >
                <h3 className="text-lg font-semibold mb-3 text-slate-800 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-20 text-lg font-medium text-slate-700 max-w-3xl mx-auto"
          >
            You get more than code — you get a product that’s ready for users,
            investors, and scale.
          </motion.p>
        </div>
      </section>

      {/* ================= PRODUCT ENGINEERING ECOSYSTEM ================= */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* subtle background accent */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Product Engineering{" "}
            <span className="text-orange-500">Ecosystem</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Every successful product follows a journey — and Avaantra supports
            every step.
          </p>

          {/* Ecosystem Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                stage: "1. Product Roadmap & Discovery",
                service:
                  "Define vision, users, tech requirements, and success metrics.",
                outcome: "Clear business and technical blueprint.",
              },
              {
                stage: "2. MVP Development",
                service: "Build a functional, testable product fast.",
                outcome: "Launch faster and validate with real users.",
              },
              {
                stage: "3. SaaS Development Services",
                service: "Scalable subscription-based platforms.",
                outcome: "SaaS architecture ready for growth.",
              },
              {
                stage: "4. Product Architecture & CTO-as-a-Service",
                service: "Strategic tech leadership and architecture guidance.",
                outcome: "Enterprise-grade foundation and direction.",
              },
              {
                stage: "5. UX/UI Design & Product Research",
                service: "Data-driven design and usability research.",
                outcome: "Intuitive experiences users love.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="
            group bg-white border border-gray-200 rounded-2xl p-8
            shadow-sm hover:shadow-xl hover:border-orange-300
            transition-all duration-300
          "
              >
                {/* Stage */}
                <h3 className="font-semibold text-lg mb-3 text-orange-500">
                  {item.stage}
                </h3>

                {/* Service */}
                <p className="text-slate-700 mb-2">
                  <span className="font-medium">Service:</span> {item.service}
                </p>

                {/* Outcome */}
                <p className="text-slate-600">
                  <span className="font-medium">Outcome:</span> {item.outcome}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing Line */}
          <p className="mt-20 text-lg font-medium text-slate-700 max-w-3xl mx-auto">
            Each service stands alone but connects seamlessly — creating a
            complete product engineering lifecycle.
          </p>
        </div>
      </section>

      {/* ================= WHY STARTUPS & AGENCIES CHOOSE AVAANTRA ================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Startups & Agencies{" "}
            <span className="text-orange-500">Choose Avaantra</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Startups choose us because they need speed and predictability.
            <br />
            Agencies choose us because they need scalable delivery partners who
            understand both technology and business.
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "🧠 Product Thinking, Not Just Coding",
                text: "Every feature is mapped to a real business outcome, not just technical completion.",
              },
              {
                title: "⚙️ Full Lifecycle Ownership",
                text: "From discovery to post-launch optimization, we own the entire product journey.",
              },
              {
                title: "💡 Global Expertise",
                text: "Developers, designers, and strategists with 20+ years of combined experience.",
              },
              {
                title: "🌍 Flexible Engagement Models",
                text: "From fixed-scope MVPs to long-term retainer partnerships.",
              },
              {
                title: "🔒 Security & Compliance Built-In",
                text: "IP ownership, NDAs, and data protection guaranteed by default.",
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
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-20 text-lg font-medium text-slate-700 max-w-3xl mx-auto">
            We build digital products engineered for business performance — not
            guesswork.
          </p>
        </div>
      </section>
      {/* ================= KEY BENEFITS YOU GAIN ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Key <span className="text-orange-500">Benefits</span> You Gain
          </h2>

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              "Predictable Time-to-Market — agile frameworks reduce launch cycles by up to 40%",
              "Scalable Architecture — systems built to handle 10x growth",
              "User-Driven Decisions — data-backed UX and product roadmapping",
              "Lower Development Risk — early validation and frequent releases",
              "Cross-Functional Expertise — designers, developers, and strategists under one roof",
              "Long-Term Partnership — continuous optimization and post-launch advisory",
            ].map((text, index) => {
              const isLastOdd = 6 % 2 !== 0 && index === 5; // safe pattern reuse

              return (
                <div
                  key={index}
                  className={`
              group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm
              hover:-translate-y-2 hover:shadow-xl hover:border-orange-300
              transition-all duration-300
              ${isLastOdd ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}
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
        </div>
      </section>
      {/* ================= PRODUCT ENGINEERING PROCESS ================= */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-slate-100 relative overflow-hidden">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-orange-200/70" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Proven{" "}
            <span className="text-orange-500">Product Engineering Process</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            A five-phase process that takes you from concept to growth with
            clarity and control.
          </p>

          <div className="mt-24 space-y-16">
            {[
              {
                step: "01",
                title: "Product Discovery & Roadmapping",
                text: "User research, problem definition, feasibility assessment, roadmap planning, and success metrics.",
                deliverable:
                  "Product Discovery Document — your execution blueprint.",
                linkText: "Product Roadmap & Discovery Services",
                href: "/services/product-roadmap-discovery",
              },
              {
                step: "02",
                title: "MVP Development",
                text: "Prioritized features, rapid prototyping, agile sprints, QA, and release support.",
                deliverable:
                  "Live MVP ready for users, pitching, or validation.",
                linkText: "MVP Development",
                href: "/services/mvp-development",
              },
              {
                step: "03",
                title: "SaaS Development & Scaling",
                text: "Multi-tenant SaaS architecture, billing systems, integrations, and cloud optimization.",
                deliverable:
                  "Production-ready SaaS platform built for recurring revenue.",
                linkText: "SaaS Development Services",
                href: "/services/saas-development",
              },
              {
                step: "04",
                title: "Architecture & CTO-as-a-Service",
                text: "System architecture, cloud strategy, code audits, and technical leadership.",
                deliverable:
                  "Architecture blueprint + ongoing technical governance.",
                linkText: "CTO-as-a-Service",
                href: "/services/cto-as-a-service",
              },
              {
                step: "05",
                title: "UX/UI Design & Product Research",
                text: "UX research, wireframes, design systems, usability testing, and iteration.",
                deliverable: "Validated designs and interactive prototypes.",
                linkText: "UX/UI Design & Product Research",
                href: "/services/ux-ui-design",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Bubble */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-500 text-black font-bold flex items-center justify-center text-lg shadow-lg">
                  {item.step}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-xl text-left shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <h3 className="font-semibold text-xl mb-3">{item.title}</h3>

                  <p className="text-slate-600 mb-3">{item.text}</p>

                  <p className="text-slate-700 font-medium mb-4">
                    Deliverable: {item.deliverable}
                  </p>

                  {/* Learn more link */}
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 text-orange-500 font-medium hover:underline"
                  >
                    👉 Learn more: {item.linkText} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= OUR ENGAGEMENT MODELS ================= */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
        {/* subtle orange glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_60%)]" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-orange-500">Engagement Models</span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Different product goals require different engagement models. We help
            you choose what fits best.
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Dedicated Product Team",
                ideal: "Startups in build or growth stage",
                how: "Full-time engineers, designers, QA, and PMs integrated into your workflow.",
              },
              {
                title: "Fixed-Scope Delivery",
                ideal: "MVPs or clearly defined projects",
                how: "Pre-set milestones, fixed budget, and a clear delivery schedule.",
              },
              {
                title: "Hybrid Model",
                ideal: "Agencies managing multiple clients",
                how: "A retained core team with specialists added when needed.",
              },
              {
                title: "White-Label Partnership",
                ideal: "Agencies offering custom software",
                how: "We deliver under your brand while you retain the client relationship.",
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

                <p className="text-slate-400">
                  <span className="font-medium text-orange-400">
                    How it works:
                  </span>{" "}
                  {item.how}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-12 py-5 rounded-xl transition shadow-lg hover:shadow-xl">
              Discuss Your Model →
            </button>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES / RESULTS ================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Case Studies & <span className="text-orange-500">Results</span>
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "SaaS Startup (US)",
                challenge: "Founder needed a working MVP before investor demo.",
                solution:
                  "Delivered MVP in 9 weeks with analytics integration.",
                outcome:
                  "Raised $1.5M seed funding and reached 2,000 users in 90 days.",
              },
              {
                title: "Digital Agency (UK)",
                challenge:
                  "Lacked internal dev capacity for a custom client portal.",
                solution: "White-label product delivered in 6 weeks.",
                outcome: "Agency increased annual recurring revenue by 32%.",
              },
              {
                title: "HealthTech Platform (EU)",
                challenge:
                  "Legacy system with outdated UX and performance issues.",
                solution: "Full re-architecture with modern design system.",
                outcome:
                  "65% faster load times and 40% higher user engagement.",
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
                  <span className="font-medium">Outcome:</span> {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We <span className="text-orange-500">Serve</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            We tailor technology stacks and UX to fit your industry, audience,
            and growth goals.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                industry: "SaaS & Software",
                example: "Multi-tenant apps, CRMs, analytics platforms.",
              },
              {
                industry: "FinTech",
                example: "Secure payments, trading systems, compliance tools.",
              },
              {
                industry: "HealthTech",
                example:
                  "Patient portals, remote diagnostics, data visualization.",
              },
              {
                industry: "E-commerce",
                example: "Custom marketplaces, product configurators.",
              },
              {
                industry: "EdTech",
                example: "Learning management systems, engagement analytics.",
              },
              {
                industry: "Agencies",
                example: "White-label platforms, client portals, integrations.",
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
      {/* ================= SECURITY & TRUST ================= */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Security & <span className="text-orange-500">Trust</span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Your product’s data, code, and IP are protected at every stage.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
            {[
              "NDA and IP transfer included by default",
              "Code repositories managed securely under your ownership",
              "Compliance with GDPR, HIPAA, and ISO standards",
              "Version control, backup, and disaster recovery policies",
              "Regular vulnerability assessments and penetration tests",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition"
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
                q: "How is product engineering different from software development?",
                a: "Software development focuses on building features. Product engineering focuses on building value — aligning technology, business, and user needs for long-term success.",
              },
              {
                q: "Can I start with just an idea?",
                a: "Yes. We begin with product discovery, define scope, and help validate your idea before major investment.",
              },
              {
                q: "What’s the average time to launch an MVP?",
                a: "Typically 8–12 weeks depending on complexity and integrations.",
              },
              {
                q: "What engagement flexibility do I have?",
                a: "You can start project-based or with a dedicated team, and scale up or down anytime.",
              },
              {
                q: "Do you work with non-technical founders?",
                a: "Yes. Our CTO-as-a-Service provides technical leadership without the need for a full-time hire.",
              },
              {
                q: "Can you handle design and development together?",
                a: "Absolutely. UX/UI designers work directly with engineers for seamless execution.",
              },
              {
                q: "What happens after product launch?",
                a: "We offer continuous optimization, feature enhancement, and maintenance to support growth.",
              },
              {
                q: "Which tech stacks do you specialize in?",
                a: "React, Node.js, Python, .NET, Flutter, AWS, Azure, Docker, Kubernetes, PostgreSQL, MongoDB, and more.",
              },
              {
                q: "Do you sign NDAs and guarantee IP ownership?",
                a: "Always. All work and intellectual property remain fully yours.",
              },
              {
                q: "How do you ensure predictable outcomes?",
                a: "Clear milestones, weekly sprint reports, and defined success metrics keep delivery measurable.",
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
            Let’s Build the Product That{" "}
            <span className="text-orange-500">
              Defines Your Next Growth Phase
            </span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            From roadmap to real-world success — Avaantra turns your ideas into
            scalable, market-ready software.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <Link href="/contact">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-black font-semibold px-10 py-5 rounded-xl transition shadow-lg hover:shadow-xl">
                📅 Book Free Product Strategy Call
              </button>
            </Link>

            <button className="border border-slate-600 text-white px-10 py-5 rounded-xl hover:bg-white hover:text-black transition">
              💬 Talk to a Product Expert
            </button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-400 text-sm md:text-base">
            <span>✔ 20+ Years Expertise</span>
            <span>✔ 100+ Products Delivered</span>
            <span>✔ Startup & Agency Focused</span>
            <span>✔ 100% IP Ownership</span>
          </div>
        </div>
      </section>
    </main>
  );
}
