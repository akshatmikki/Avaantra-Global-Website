import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Users,
  ShieldCheck,
  Rocket,
  Settings,
  Globe,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "White-Label Partner for Agencies | Avaantra Global",
  description:
    "Avaantra Global helps agencies scale delivery without hiring risk through white-label marketing, development, dedicated teams, and flexible partnership programs.",
};

export default function AgenciesPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            🏷️ FOR AGENCIES
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Scale Your Agency With Predictable Delivery
            <br />
            Without Hiring Full-Time Teams
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            From white-label marketing to full-stack development pods, Avaantra
            Global gives your agency the talent, capacity, and systems to grow —
            without overhead, hiring risk, or complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 transition-all"
            >
              Become a White-Label Partner
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            {/* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
            >
              Build Your Dedicated Team
            </Button> */}
          </div>
        </div>
      </section>

      {/* Why Agencies */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Agencies Choose Avaantra Global
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Agencies grow fast — until delivery hits a wall.
              You win more clients, more retainers, more campaigns…
              but not enough hands to deliver reliably.
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {/* Problem */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                The Problem
              </h3>
              <ul className="space-y-4 text-slate-700 text-lg">
                {[
                  "Hiring is slow and expensive",
                  "Freelancers are unpredictable",
                  "Margins get squeezed",
                  "Client deadlines start slipping",
                  "Delivery becomes a risk",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-orange-500 font-bold mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                The Avaantra Solution
              </h3>
              <ul className="space-y-4 text-slate-700 text-lg">
                {[
                  "Elastic delivery capacity on demand",
                  "Senior engineers, marketers & designers",
                  "Predictable quality and timelines",
                  "100% white-label execution under your brand",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="text-orange-500 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Positioning Statement */}
          <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
            <p className="text-2xl font-bold text-slate-900 italic mb-4">
              “You handle the client. We handle the delivery.”
            </p>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Avaantra gives agencies elastic capacity —
              senior talent that integrates into your team,
              works under your brand, and delivers with predictable quality.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            How Avaantra Supports Agencies
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We help agencies scale delivery without stress —
            quietly, reliably, and completely under your brand.
          </p>

          {/* Support Grid */}
          <div className="grid md:grid-cols-5 gap-6 mt-14">
            {[
              {
                title: "100% White-Label Delivery",
                desc: "All work delivered under your brand — NDA-backed, transparent, and client-safe.",
              },
              {
                title: "Dedicated Pods",
                desc: "Engineering, design, and marketing pods aligned to your workflows, tools, and culture.",
              },
              {
                title: "Predictable Timelines & Pricing",
                desc: "Clear SLAs, fixed expectations, and zero delivery surprises.",
              },
              {
                title: "Zero Hiring & HR Overhead",
                desc: "No recruiting, training, benefits, or people management to worry about.",
              },
              {
                title: "Elastic Scaling",
                desc: "Scale teams up or down instantly as client demand changes.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100
                     hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <p className="mt-14 text-lg font-semibold text-slate-900">
            You focus on sales, strategy, and client relationships.
            <br />
            <span className="text-orange-600">
              We quietly power your execution engine.
            </span>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Agency Services We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each service is delivered{" "}
              <span className="font-semibold">100% white-label</span>, NDA-backed,
              and designed to help agencies scale delivery without risk.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "White-Label Marketing Services",
                desc: "SEO, PPC, CRO, content, automation, analytics & reporting.",
                link: "/solutions/For-Agencies/White-Label-Marketing",
              },
              {
                title: "White-Label Software Development",
                desc: "Web, SaaS, mobile apps, APIs & AI-enabled solutions.",
                link: "/solutions/For-Agencies/White-Label-Software-Development",
              },
              {
                title: "Dedicated Teams for Agencies",
                desc: "Your own remote delivery department — fully integrated.",
                link: "/solutions/For-Agencies/Dedicated-Teams-for-Agencies",
              },
              {
                title: "Agency Partnership Program",
                desc: "Priority access, pricing tiers, revenue sharing & growth support.",
                link: "/solutions/For-Agencies/Agency-Partnership-Program",
              },
              {
                title: "Scale Engineering Without Hiring Risk",
                desc: "Senior engineers deployed in 7–15 days, ready to deliver.",
                link: "/solutions/For-Agencies/Scale-Engineering-Without-Hiring-Risk",
              },
              {
                title: "AI & Automation for Agencies",
                desc: "AI tools, workflow automation & analytics for modern agencies.",
                link: "/solutions/For-Agencies/AI-&-Automation",
              },
            ].map((item, idx) => (
              <Link key={idx} href={item.link} className="group h-full">
                <div
                  className="bg-white rounded-2xl p-8 h-full border border-slate-200
                       hover:border-orange-500 hover:shadow-xl
                       transform hover:-translate-y-2 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3
                           group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 font-semibold text-orange-600">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Avaantra */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Avaantra Is the Perfect White-Label Partner
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Built for agencies that care about delivery quality,
              predictability, and protecting their reputation.
            </p>
          </div>

          {/* Trust Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-7 h-7 text-orange-500" />,
                title: "22+ Years Industry Experience",
                desc: "Deep engineering and marketing expertise across global markets.",
              },
              {
                icon: <Users className="w-7 h-7 text-orange-500" />,
                title: "Senior Talent Only",
                desc: "No juniors. No training. No hand-holding.",
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-orange-500" />,
                title: "NDA & Full Confidentiality",
                desc: "Clients never know we exist — you stay the face of delivery.",
              },
              {
                icon: <Settings className="w-7 h-7 text-orange-500" />,
                title: "Predictable Pricing & SLAs",
                desc: "Clear costs, clear outcomes, zero surprises.",
              },
              {
                icon: <Globe className="w-7 h-7 text-orange-500" />,
                title: "Global Client-Friendly Teams",
                desc: "US, UK, EU & Middle East-ready communication and alignment.",
              },
              {
                icon: <Rocket className="w-7 h-7 text-orange-500" />,
                title: "95% Retention Rate",
                desc: "Agencies stay because delivery works — consistently.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Positioning Line */}
          <p className="text-center mt-14 text-xl font-semibold italic text-slate-900">
            “Our job is simple:{" "}
            <span className="text-orange-600">
              make your agency look amazing.
            </span>”
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Our Process for Agencies
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Simple, frictionless, and built to scale delivery
              without disrupting your clients or workflows.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid md:grid-cols-5 gap-5">
            {[
              {
                step: "01",
                title: "Partnership Kickoff",
                desc: "We understand your services, clients, workflows, and delivery goals.",
              },
              {
                step: "02",
                title: "Resource / Pod Allocation",
                desc: "Senior developers, marketers, designers, or full pods are assigned.",
              },
              {
                step: "03",
                title: "Tool & Workflow Integration",
                desc: "Slack, Jira, ClickUp, HubSpot, GA4 — we fit right into your stack.",
              },
              {
                step: "04",
                title: "White-Label Delivery",
                desc: "Execution under your brand, tone, and quality standards.",
              },
              {
                step: "05",
                title: "Reporting & Optimization",
                desc: "Weekly syncs, dashboards, and continuous performance improvement.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6
                     hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-orange-400 mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome Line */}
          <p className="text-center mt-14 text-lg font-semibold text-slate-200">
            Outcome:{" "}
            <span className="text-orange-400">
              Seamless delivery, full visibility, and zero client disruption.
            </span>
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industries We Support Through Agencies
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Take on bigger, more complex client engagements
              without worrying about delivery execution.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "SaaS & B2B",
              "FinTech",
              "HealthTech",
              "Retail & eCommerce",
              "Real Estate & PropTech",
              "EdTech",
              "Manufacturing",
              "Media & Entertainment",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6
                     text-center font-semibold text-slate-800
                     hover:border-orange-500 hover:text-orange-600
                     transition-all duration-300"
              >
                {industry}
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <p className="text-center mt-12 text-lg font-semibold text-slate-900">
            This means your agency can confidently say{" "}
            <span className="text-orange-600">
              “yes” to larger, more complex projects
            </span>{" "}
            — without adding delivery risk.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              FAQs — Agencies
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              Common questions agencies ask before partnering with Avaantra.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Will my clients know about Avaantra?",
                a: "No. Everything is 100% white-label with strict NDAs. We stay completely invisible.",
              },
              {
                q: "Can I start with a small team?",
                a: "Yes. Even 1 developer or marketer. Scale up or down anytime.",
              },
              {
                q: "Do you work with agencies worldwide?",
                a: "Yes — US, UK, EU, Middle East, Singapore, India, Australia.",
              },
              {
                q: "What’s the minimum contract duration?",
                a: "Flexible models: month-to-month, 90 days, or long-term engagements.",
              },
              {
                q: "How fast can teams start?",
                a: "Typically within 7–15 days depending on the role and seniority.",
              },
              {
                q: "What if a resource doesn’t fit?",
                a: "Immediate replacement — no friction, no risk.",
              },
              {
                q: "Can you support enterprise projects?",
                a: "Yes. We handle scoping, architecture, estimates, and delivery for large clients.",
              },
              {
                q: "What makes Avaantra better than freelancers?",
                a: "Predictability, accountability, senior talent, and the ability to scale safely.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200
                     hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-orange-500 font-bold">Q.</span>
                  {item.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Trust Line */}
          <p className="text-center mt-14 text-lg font-semibold text-slate-900">
            Still have questions?{" "}
            <span className="text-orange-600">
              We’re happy to walk you through everything.
            </span>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
            Scale Your Delivery. Protect Your Margins. Impress Your Clients.
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Avaantra Global becomes your{" "}
            <span className="text-orange-400 font-semibold">
              silent execution partner
            </span>{" "}
            — helping you deliver more, deliver faster,
            and deliver with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="bg-white text-slate-900 font-semibold px-8
                   hover:bg-slate-100 transform hover:scale-105
                   transition-all duration-300 hover:shadow-2xl"
            >
              🤝 Start Your Agency Partnership
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border border-white/30 text-black px-8
                   hover:bg-white/10 transition-all duration-300"
            >
              ⚙️ Build a Dedicated Team
            </Button>
          </div>

          {/* Trust Badges */}
          <p className="text-sm text-slate-400 tracking-wide">
            ISO 27001 • GDPR Compliant • 22+ Years Experience • NDA Secured • 95%
            Retention Rate
          </p>
        </div>
      </section>
    </main>
  );
}
