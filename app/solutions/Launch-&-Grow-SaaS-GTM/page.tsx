import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Settings,
  Users,
  Rocket,
  Layers,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Launch & Grow Your SaaS with GTM Strategy, Automation & CRO | Avaantra Global",
  description:
    "Avaantra Global helps SaaS founders and product leaders achieve predictable ARR growth through GTM strategy, marketing automation, CRO, and retention frameworks.",
};

export default function SaaSGTMGrowthPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            📈 FOR SAAS FOUNDERS & CMOs
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Turn Your SaaS Product into a
            <br />
            Predictable Growth Engine
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Avaantra Global helps SaaS founders and growth teams launch, scale,
            and grow faster with GTM strategy, automation, CRO, and retention
            systems that deliver measurable ARR — not vanity metrics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
            >
              Book Your Free SaaS Growth Audit
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
            >
              See How We Scale SaaS
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why SaaS Growth Feels Unpredictable
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You have the product. What’s missing is momentum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Leads fluctuate month to month",
                "Trials drop before activation",
                "Conversions are inconsistent",
                "Ad spend outpaces ARR growth",
                "Retention and engagement are shaky",
                "No clear insight into what’s broken",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-700 mb-4">
                The problem isn’t your product — it’s the absence of a
                repeatable, data-driven growth system.
              </p>

              <p className="font-semibold text-dark">
                Growth should be engineered.
                <br />
                Not guessed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Predictable, Scalable SaaS Growth
          </h2>

          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {[
              "3–5X pipeline growth",
              "2X trial-to-paid conversions",
              "25–40% higher retention",
              "Lower CAC over time",
              "Live growth dashboards",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            We don’t run experiments. We build systems that compound.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Solutions to Launch & Grow SaaS GTM
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From GTM clarity to predictable ARR — end to end.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "SaaS Growth Strategy",
                desc: "ICP, GTM positioning, pricing & channel clarity.",
                outcome: "Lower CAC and higher-quality demand",
                link: "/solutions/Launch-&-Grow-SaaS-GTM/SaaS-Growth-strategy",
              },
              {
                title: "Conversion Rate Optimization (CRO)",
                desc: "Turn traffic and trials into revenue.",
                outcome: "2X trial-to-paid conversions",
                link: "/solutions/Launch-&-Grow-SaaS-GTM/Conversion-Optimization",
              },
              {
                title: "Customer Retention Programs",
                desc: "Reduce churn and increase LTV.",
                outcome: "Predictable renewals and expansion",
                link: "/solutions/Launch-&-Grow-SaaS-GTM/Customer-Retention-Programs",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="relative bg-gray-50 rounded-xl p-8 pb-16 hover:bg-white hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-primary">
                  Outcome: {item.outcome}
                </p>
                <div className="absolute bottom-6 right-6 flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Avaantra */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why SaaS Founders Choose Avaantra Global
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-7 h-7 text-primary" />,
                title: "Outcome-Driven Growth",
                desc: "No vanity metrics. Only revenue impact.",
              },
              {
                icon: <Settings className="w-7 h-7 text-primary" />,
                title: "Full-Funnel Systems",
                desc: "GTM → Automation → Retention.",
              },
              {
                icon: <Layers className="w-7 h-7 text-primary" />,
                title: "Managed Growth Pods",
                desc: "Strategy + execution under one roof.",
              },
              {
                icon: <Users className="w-7 h-7 text-primary" />,
                title: "SaaS-Native Team",
                desc: "We’ve scaled SaaS ourselves.",
              },
              {
                icon: <Rocket className="w-7 h-7 text-primary" />,
                title: "AI-Driven Insights",
                desc: "Smarter decisions, faster.",
              },
              {
                icon: <CheckCircle className="w-7 h-7 text-primary" />,
                title: "Predictable Dashboards",
                desc: "Full transparency, always.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Growth Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our SaaS Growth Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Growth doesn’t happen by accident — it happens by system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "GTM & Growth Audit",
                desc: "Identify funnel leaks across acquisition, activation, and retention.",
              },
              {
                step: "02",
                title: "Growth Blueprint",
                desc: "Define ICP, channels, KPIs, and success benchmarks.",
              },
              {
                step: "03",
                title: "Automation Setup",
                desc: "Build workflows, CRM, and real-time dashboards.",
              },
              {
                step: "04",
                title: "CRO Optimization",
                desc: "Test and improve conversion points continuously.",
              },
              {
                step: "05",
                title: "Retention & Upsell",
                desc: "Activate lifecycle, success, and expansion programs.",
              },
              {
                step: "06",
                title: "Review & Scale",
                desc: "Double down on what compounds ARR predictably.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all"
              >
                <div className="text-primary font-bold text-lg mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 font-semibold text-gray-700">
            Outcome: A repeatable, data-backed growth engine that compounds ARR
            month after month.
          </p>
        </div>
      </section>
      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600">
              Choose the structure that fits your SaaS growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Project-Based GTM",
                bestFor: "SaaS in launch or repositioning stage",
                work: "4–6 week strategy sprint",
                outcome: "Clear GTM roadmap",
              },
              {
                title: "Managed Growth Pods",
                bestFor: "Scaling SaaS post-MVP",
                work: "Avaantra runs full-funnel sprints",
                outcome: "Predictable campaign velocity",
              },
              {
                title: "Automation Retainer",
                bestFor: "Growing SaaS brands",
                work: "Continuous CRO & automation",
                outcome: "Compounding ARR",
              },
              {
                title: "Dedicated Team",
                bestFor: "Mature SaaS organizations",
                work: "In-house style team managed by you",
                outcome: "Consistent monthly delivery",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-dark">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <strong>Best For:</strong> {item.bestFor}
                  </li>
                  <li>
                    <strong>How It Works:</strong> {item.work}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-600">
            Every engagement includes 100% transparency, real-time dashboards,
            and zero lock-ins.
          </p>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              What Founders & Growth Leaders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Avaantra built our GTM system from scratch — we went from 100 to 600 active users in 90 days.",
                by: "Founder, SaaS Productivity Tool",
              },
              {
                quote:
                  "Their automation setup is next-level. Deals now close even when our team is offline.",
                by: "CMO, B2B SaaS (USA)",
              },
              {
                quote:
                  "We didn’t just grow traffic — ARR is now predictable. That changed everything.",
                by: "CEO, FinTech SaaS (UK)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <p className="italic text-gray-700 mb-4">“{item.quote}”</p>
                <p className="font-semibold text-dark">{item.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Case Study: From Flat Growth to Predictable ARR
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">B2B SaaS Platform</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                High churn, inconsistent conversions, poor funnel visibility
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                GTM revamp + automation + retention workflows
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "5X more qualified leads",
                  "2.3X conversion rate improvement",
                  "28% churn reduction in 60 days",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 font-semibold">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              FAQs — Before You Hire Us
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Do you only work with SaaS products?",
                a: "Yes. SaaS and tech-led platforms are our core focus.",
              },
              {
                q: "What if I already have a marketing team?",
                a: "We plug in to handle automation, CRO, or retention alongside your team.",
              },
              {
                q: "Can you support PLG and sales-led models?",
                a: "Absolutely. Our systems support both.",
              },
              {
                q: "How fast can I see results?",
                a: "Typically within 30–60 days for measurable KPIs.",
              },
              {
                q: "Is this affordable for early-stage SaaS?",
                a: "Yes. Pricing scales by stage — MVP, traction, or scale-up.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-bold text-dark mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make SaaS Growth Predictable Again
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Stop guessing. Start compounding.
          </p>

          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Book Your Free SaaS Growth Audit
          </Button>
        </div>
      </section>
    </main>
  );
}
