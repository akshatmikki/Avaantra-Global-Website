"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AIServicesPage() {
  return (
    <main className="text-slate-900 bg-white">
      {/* ================= HERO (DARK) ================= */}
      <section className="relative bg-gradient-to-br from-black via-slate-900 to-black text-white">
        <div className="container mx-auto px-6 py-28 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            AI Services & Solutions That{" "}
            <span className="text-orange-500">
              Deliver Predictable Business Impact
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Integrate Artificial Intelligence with clarity, confidence, and
            speed. Avaantra Global helps startups, SaaS founders, and digital
            agencies turn AI innovation into measurable growth.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link href="/contact">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition">
                🚀 Get Free AI Consultation
              </button>
            </Link>

            <button className="border border-slate-600 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition">
              💬 Talk to an AI Strategist
            </button>
          </div>

          <div className="mt-16 text-slate-400 text-sm">
            Strategy → Build → Scale → Optimize
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-28 bg-gradient-to-b from-orange-50/40 via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Beyond Buzzwords,{" "}
            <span className="text-orange-500">Build Real AI Advantage</span>
          </h2>

          <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto">
            AI isn’t the future — it’s the differentiator right now.
            <br />
            <br />
            Most businesses fail because they start with tools, not strategy. We
            help you connect AI directly to business outcomes like speed,
            efficiency, and product innovation.
          </p>

          <p className="mt-10 text-lg font-medium text-slate-700 max-w-3xl mx-auto">
            We help you see AI not as technology — but as a growth lever.
          </p>
        </div>
      </section>

      {/* ================= AI SERVICES & SOLUTIONS ================= */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-orange-500">AI Services & Solutions</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            We offer end-to-end AI transformation — from ideation to deployment.
            Whether you’re validating your first use case or embedding AI into
            your SaaS product, we provide a predictable roadmap to get you
            there.
          </p>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "AI Strategy & Consulting",
                subtitle:
                  "Discover and define AI opportunities aligned with your business goals.",
                points: [
                  "AI Readiness Assessments",
                  "Business Use-Case Workshops",
                  "ROI Mapping & Roadmaps",
                  "Implementation Planning",
                ],
                cta: "Learn More",
                href: "/services/ai-strategy-consulting",
              },
              {
                title: "Generative AI Solutions",
                subtitle:
                  "Transform creative workflows and customer experiences using Generative AI.",
                points: [
                  "Chatbots & Virtual Assistants",
                  "Custom LLMs & Embeddings",
                  "Content, Image & Video Generation",
                ],
                cta: "Explore",
                href: "/services/generative-ai",
              },
              {
                title: "Machine Learning & Predictive Analytics",
                subtitle:
                  "Leverage your data to predict trends, behavior, and outcomes.",
                points: [
                  "Forecasting Models",
                  "Recommendation Engines",
                  "Anomaly & Risk Detection",
                ],
                cta: "Discover",
                href: "/services/machine-learning",
              },
              {
                title: "AI Agents & Automation",
                subtitle:
                  "Automate workflows and operations with intelligent AI agents.",
                points: [
                  "AI Co-pilots for Teams",
                  "Process Automation",
                  "Workflow Optimization",
                ],
                cta: "See",
                href: "/services/ai-automation",
              },
              {
                title: "Computer Vision & Imaging AI",
                subtitle:
                  "Enhance visual accuracy with advanced AI-powered analysis.",
                points: [
                  "Object & Face Recognition",
                  "Quality Inspection",
                  "AR / VR Visual Insights",
                ],
                cta: "Explore",
                href: "/services/computer-vision",
              },
              {
                title: "AI for SaaS & Product-Led Businesses",
                subtitle:
                  "Embed AI into your SaaS product to scale faster and smarter.",
                points: [
                  "Smart Recommendations",
                  "Predictive Analytics Dashboards",
                  "AI-driven User Experience",
                ],
                cta: "Learn More",
                href: "/services/ai-for-saas",
              },
              {
                title: "Responsible AI, Ethics & Governance",
                subtitle:
                  "Build AI that’s transparent, compliant, and trusted.",
                points: [
                  "Data Privacy & Bias Mitigation",
                  "Explainable AI",
                  "AI Risk & Governance Frameworks",
                ],
                cta: "Explore",
                href: "/services/responsible-ai",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            relative bg-white border border-gray-200 rounded-2xl p-8
            shadow-sm hover:shadow-xl hover:border-orange-300
            transition-all duration-300
          "
              >
                <h3 className="text-xl font-semibold mb-2 text-orange-500">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm mb-5">{item.subtitle}</p>

                {/* feature grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-10">
                  {item.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-slate-700 text-sm"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* CTA bottom-right */}
                <a
                  href={item.href}
                  className="
              absolute bottom-6 right-6 inline-flex items-center gap-1
              text-orange-500 font-medium text-sm hover:underline
            "
                >
                  {item.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE AVAANTRA ================= */}
      <section className="py-32 bg-gradient-to-b from-orange-50/40 via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Why Choose <span className="text-orange-500">Avaantra Global</span>
          </h2>

          <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto">
            We combine 20+ years of digital engineering with AI innovation — so
            you don’t just adopt AI; you adapt and scale it with confidence.
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                icon: "⚙️",
                title: "Predictable Outcomes",
                text: "KPI-backed execution focused on measurable results, not trial-and-error.",
              },
              {
                icon: "🧠",
                title: "Cross-Functional Expertise",
                text: "AI, SaaS, data engineering, and strategy working together as one team.",
              },
              {
                icon: "🌍",
                title: "Global Talent, Local Understanding",
                text: "AI experts across 5 regions with strong market and domain context.",
              },
              {
                icon: "🔒",
                title: "Secure & Compliant",
                text: "NDA-backed delivery with GDPR and SOC 2–ready processes.",
              },
              {
                icon: "📈",
                title: "Scalable Engagement Models",
                text: "Start small with pilots and scale fast with flexible AI teams.",
              },
              {
                icon: "🧩",
                title: "White-Label Friendly",
                text: "Invisible, compliant AI delivery for agencies and partners.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            group bg-white border border-gray-200 rounded-2xl p-8
            shadow-sm hover:shadow-xl hover:border-orange-300
            hover:-translate-y-2 transition-all duration-300
          "
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-3xl">{item.icon}</div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="mt-24 max-w-3xl mx-auto italic text-slate-600">
            “Avaantra Global bridges business intent with AI execution —
            combining human understanding with machine intelligence.”
          </blockquote>
        </div>
      </section>

      {/* ================= AI PROCESS ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* vertical timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-orange-200/70" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Proven <span className="text-orange-500">AI Process</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            A structured, outcome-driven approach that takes AI from strategy to
            scalable execution.
          </p>

          <div className="mt-24 space-y-20">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "Identify opportunities, assess readiness, and define measurable AI goals.",
                time: "1–2 weeks",
              },
              {
                step: "02",
                title: "Design & Architecture",
                desc: "Plan data flow, select tools, and design solution architecture.",
                time: "2–3 weeks",
              },
              {
                step: "03",
                title: "Prototype & Validation",
                desc: "Build PoC or MVP to test assumptions and validate ROI.",
                time: "3–5 weeks",
              },
              {
                step: "04",
                title: "Development & Integration",
                desc: "Deploy models, build APIs, and integrate AI into your systems.",
                time: "6–10 weeks",
              },
              {
                step: "05",
                title: "Optimization & Scaling",
                desc: "Monitor performance, refine models, and scale usage across teams.",
                time: "Ongoing",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* step bubble */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="
              z-10 w-16 h-16 rounded-full bg-orange-500 text-black
              font-bold flex items-center justify-center text-lg
              shadow-lg
            "
                >
                  {item.step}
                </motion.div>

                {/* content card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="
              bg-gray-50 border border-gray-200 rounded-2xl
              p-8 max-w-xl text-left
              shadow-sm hover:shadow-xl hover:border-orange-300
              transition-all duration-300
            "
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="text-sm font-medium text-orange-500">
                    Timeline: {item.time}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-10 py-5 rounded-xl transition shadow-lg hover:shadow-xl">
              📎 Discuss Your AI Roadmap
            </button>
          </div>
        </div>
      </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_60%)]" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Engagement <span className="text-orange-500">Models</span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Flexible ways to engage — designed to match your AI maturity and
            growth stage.
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Consulting + Strategy",
                ideal: "Early-stage planning",
                desc: "Roadmaps, feasibility studies, and business alignment.",
              },
              {
                title: "Project-Based AI Development",
                ideal: "Startups & SMEs",
                desc: "End-to-end delivery within a clearly defined scope.",
              },
              {
                title: "Dedicated AI Teams",
                ideal: "Long-term growth projects",
                desc: "Scalable AI talent with predictable monthly cost.",
              },
              {
                title: "White-Label AI Solutions",
                ideal: "Agencies & partners",
                desc: "Confidential execution with full branded delivery.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="
            group bg-slate-900 border border-slate-800 rounded-2xl p-8
            hover:border-orange-400 hover:shadow-2xl
            transition-all duration-300
          "
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">
                  {item.title}
                </h3>

                <p className="text-slate-300 mb-2">
                  <span className="text-orange-400 font-medium">Best for:</span>{" "}
                  {item.ideal}
                </p>

                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
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
            AI solutions tailored to industry-specific challenges and growth
            goals.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
            {[
              [
                "SaaS & Technology",
                "Product intelligence, predictive churn, automation",
              ],
              ["FinTech", "Fraud detection, credit scoring, chatbots"],
              ["E-commerce", "Recommendation engines, visual search"],
              ["HealthTech", "Diagnostic imaging, prediction models"],
              ["Marketing & Agencies", "AI content, campaign automation"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                className="
            bg-white border border-gray-200 rounded-2xl p-8
            hover:shadow-xl hover:border-orange-300
            transition-all duration-300
          "
              >
                <h3 className="text-orange-500 font-semibold mb-3">{title}</h3>
                <p className="text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-24 text-lg text-slate-700 max-w-3xl mx-auto italic">
            “Every industry can benefit from AI — but only if implemented with
            clarity and measurable intent.”
          </p>
        </div>
      </section>

      {/* ================= AI CASE STUDIES ================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            AI <span className="text-orange-500">Case Studies</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            How organizations across industries turned AI into measurable
            business impact.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "SaaS Startup (North America)",
                challenge: "Lack of insight into customer churn patterns.",
                solution:
                  "Built a machine learning model predicting churn 30 days in advance.",
                result: "27% reduction in churn, saving $400K in ARR.",
              },
              {
                title: "Marketing Agency (UK)",
                challenge: "Manual reporting and campaign optimization delays.",
                solution: "Automated analytics and content tagging using AI.",
                result:
                  "60% faster reporting and 35% increase in campaign ROI.",
              },
              {
                title: "Retail Platform (UAE)",
                challenge: "Low product recommendation accuracy.",
                solution: "Implemented an AI-based recommendation engine.",
                result: "+44% improvement in conversion rates.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="
            group bg-white border border-gray-200 rounded-2xl p-8
            hover:border-orange-300 hover:shadow-xl
            transition-all duration-300
          "
              >
                <h3 className="text-orange-500 font-semibold mb-4 group-hover:text-orange-600 transition">
                  {item.title}
                </h3>

                <div className="space-y-3 text-slate-600 text-sm">
                  <p>
                    <span className="font-medium text-slate-800">
                      Challenge:
                    </span>{" "}
                    {item.challenge}
                  </p>
                  <p>
                    <span className="font-medium text-slate-800">
                      Solution:
                    </span>{" "}
                    {item.solution}
                  </p>
                  <p>
                    <span className="font-medium text-slate-800">Result:</span>{" "}
                    <span className="text-orange-500 font-medium">
                      {item.result}
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <a
              href="/case-studies"
              className="
          inline-flex items-center gap-2
          text-orange-500 font-medium
          hover:underline
        "
            >
              📎 Read More Case Studies →
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECURITY & COMPLIANCE ================= */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Security & <span className="text-orange-500">Compliance</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Your data, models, and IP are protected at every stage of the AI
            lifecycle.
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
            {[
              "NDA-protected engagements",
              "SOC 2 & GDPR-compliant data handling",
              "IP ownership transfer",
              "Encrypted model training environments",
              "Role-based access control for data governance",
            ].map((item, index) => (
              <div
                key={index}
                className="
            bg-white border border-gray-200 rounded-2xl p-6
            hover:-translate-y-1 hover:shadow-lg hover:border-orange-300
            transition-all
          "
              >
                <div className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-400 shrink-0" />
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= FAQs ================= */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>

          <div className="mt-16 space-y-4">
            {[
              {
                q: "How long does it take to implement AI solutions?",
                a: "Most projects start delivering results within 6–12 weeks, depending on data availability and complexity.",
              },
              {
                q: "Do I need a data science team?",
                a: "No. Our AI engineers and analysts handle the full cycle — from data preparation to deployment.",
              },
              {
                q: "Is AI expensive to implement?",
                a: "We structure engagements for scalability — starting with pilots before expanding investment.",
              },
              {
                q: "Can AI integrate with our existing software?",
                a: "Yes. We build APIs compatible with your CRM, ERP, or SaaS tools.",
              },
              {
                q: "How do you ensure security?",
                a: "End-to-end encryption, NDAs, and compliance with international standards.",
              },
              {
                q: "What kind of ROI can we expect?",
                a: "Typical clients see 2–5× efficiency gains or 20–40% cost reductions within months.",
              },
              {
                q: "What industries benefit most from AI?",
                a: "SaaS, FinTech, Healthcare, Retail, Marketing, and Education.",
              },
              {
                q: "What AI frameworks do you use?",
                a: "TensorFlow, PyTorch, LangChain, OpenAI, Scikit-learn, HuggingFace.",
              },
              {
                q: "Can you provide white-label AI services?",
                a: "Yes. We work with digital agencies globally under white-label agreements.",
              },
              {
                q: "How do you measure success?",
                a: "Every project includes KPI-based performance reporting tied to business metrics.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <summary className="cursor-pointer font-medium text-slate-800 flex justify-between items-center">
                  {item.q}
                  <span className="text-orange-500 group-open:rotate-180 transition">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* ================= FINAL CTA ================= */}
      <section className="py-32 bg-gradient-to-br from-black via-slate-900 to-black text-white relative overflow-hidden">
        {/* glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_60%)]" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Turn AI Potential Into{" "}
            <span className="text-orange-500">Profit</span> — Predictably.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Partner with Avaantra Global to design, build, and scale AI
            solutions that accelerate business outcomes with clarity and
            confidence.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <Link href="/contact">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-black font-semibold px-10 py-5 rounded-xl transition shadow-lg hover:shadow-xl">
                📩 Book a Free AI Strategy Session
              </button>
            </Link>

            <button className="border border-slate-600 text-white px-10 py-5 rounded-xl hover:bg-white hover:text-black transition">
              📊 Download AI Readiness Checklist
            </button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-400 text-sm md:text-base">
            <span>✔ ISO Certified</span>
            <span>✔ GDPR Compliant</span>
            <span>✔ 100+ Projects Delivered</span>
            <span>✔ 95% Client Retention</span>
            <span>✔ Global Delivery Centers</span>
          </div>
        </div>
      </section>
    </main>
  );
}
