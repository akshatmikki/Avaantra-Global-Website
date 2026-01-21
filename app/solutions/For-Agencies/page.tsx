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

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
            >
              Build Your Dedicated Team
            </Button>
          </div>
        </div>
      </section>

      {/* Why Agencies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            Why Agencies Choose Avaantra Global
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problem */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-dark mb-4">The Problem</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Hiring is slow and expensive",
                  "Freelancers are unpredictable",
                  "Margins get squeezed",
                  "Deadlines start slipping",
                  "Delivery becomes a risk",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-dark mb-4">The Solution</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Elastic delivery capacity on demand",
                  "Senior engineers, marketers & designers",
                  "Predictable quality and timelines",
                  "100% white-label execution",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl text-center">
            <p className="text-2xl font-bold text-dark italic">
              “You handle the client. We handle the delivery.”
            </p>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            How Avaantra Supports Agencies
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "100% white-label delivery",
              "Dedicated pods aligned to your workflow",
              "Predictable timelines & pricing",
              "Zero hiring & HR overhead",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            You focus on sales, strategy, and client relationships.
            <br />
            We quietly power execution.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Agency Services We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is delivered white-label and NDA-backed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "White-Label Marketing Services",
                desc: "SEO, PPC, CRO, content, automation & reporting.",
                link: "/solutions/For-Agencies/White-Label-Marketing",
              },
              {
                title: "White-Label Software Development",
                desc: "Web, SaaS, mobile apps, APIs & AI solutions.",
                link: "/solutions/For-Agencies/White-Label-Software-Development",
              },
              {
                title: "Dedicated Teams for Agencies",
                desc: "Your own remote delivery department.",
                link: "/solutions/For-Agencies/Dedicated-Teams-for-Agencies",
              },
              {
                title: "Agency Partnership Program",
                desc: "Priority access, pricing tiers & revenue sharing.",
                link: "/solutions/For-Agencies/Agency-Partnership-Program",
              },
              {
                title: "Scale Engineering Without Hiring Risk",
                desc: "Senior engineers in 7–15 days.",
                link: "/solutions/For-Agencies/Scale-Engineering-Without-Hiring-Risk",
              },
              {
                title: "AI & Automation for Agencies",
                desc: "AI tools, workflow automation & analytics.",
                link: "/solutions/For-Agencies/AI-&-Automation",
              },
            ].map((item, idx) => (
              <Link key={idx} href={item.link} className="group">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 h-full">
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Avaantra Is the Perfect White-Label Partner
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Built for agencies who care about delivery quality,
              predictability, and reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-7 h-7 text-primary" />,
                title: "22+ Years Industry Experience",
                desc: "Deep engineering and marketing expertise across global markets.",
              },
              {
                icon: <Users className="w-7 h-7 text-primary" />,
                title: "Senior Talent Only",
                desc: "No juniors. No training needed. No hand-holding.",
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-primary" />,
                title: "NDA & Full Confidentiality",
                desc: "Clients never know we exist. You stay the face of delivery.",
              },
              {
                icon: <Settings className="w-7 h-7 text-primary" />,
                title: "Predictable Pricing & SLAs",
                desc: "Clear costs, clear outcomes, zero surprises.",
              },
              {
                icon: <Globe className="w-7 h-7 text-primary" />,
                title: "Global Client-Friendly Teams",
                desc: "US, UK, EU & Middle East-ready communication.",
              },
              {
                icon: <Rocket className="w-7 h-7 text-primary" />,
                title: "95% Retention Rate",
                desc: "Agencies stay because delivery works — every time.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-gray-700 font-semibold italic">
            “Our job is simple: make your agency look amazing.”
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process for Agencies
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Simple, frictionless, and designed to scale delivery without
              disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Partnership Kickoff",
                desc: "We understand your services, clients, workflows, and goals.",
              },
              {
                step: "02",
                title: "Resource / Pod Allocation",
                desc: "Senior developers, marketers, designers, or full pods assigned.",
              },
              {
                step: "03",
                title: "Tool & Workflow Integration",
                desc: "Slack, Jira, ClickUp, HubSpot, GA4 — we fit right in.",
              },
              {
                step: "04",
                title: "White-Label Delivery",
                desc: "Execution under your brand, tone, and standards.",
              },
              {
                step: "05",
                title: "Reporting & Optimization",
                desc: "Weekly standups, dashboards, and continuous improvement.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gray-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Industries We Support Through Agencies
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Accept bigger, more complex projects without worrying about
              execution.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "SaaS & B2B",
              "FinTech",
              "HealthTech",
              "Retail & eCommerce",
              "Real Estate / PropTech",
              "EdTech",
              "Manufacturing",
              "Media & Entertainment",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow text-center hover:shadow-lg transition-all"
              >
                <p className="font-semibold text-dark">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — Agencies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Will my clients know about Avaantra?",
                a: "No. Everything is white-label with strict NDAs. Invisible execution.",
              },
              {
                q: "Can I start with a small team?",
                a: "Yes — even 1 developer or marketer. Scale anytime.",
              },
              {
                q: "Do you work with agencies worldwide?",
                a: "Yes — US, UK, EU, Middle East, Singapore, India, Australia.",
              },
              {
                q: "What’s the minimum contract duration?",
                a: "Month-to-month, 90 days, or long-term engagements.",
              },
              {
                q: "How fast can teams start?",
                a: "Typically within 7–15 days depending on role.",
              },
              {
                q: "What if a resource doesn’t fit?",
                a: "Immediate replacement. No friction, no risk.",
              },
              {
                q: "Can you support enterprise projects?",
                a: "Yes — scoping, architecture, estimates, and delivery.",
              },
              {
                q: "What makes Avaantra better than freelancers?",
                a: "Predictability, accountability, seniority, and scale.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark mb-2">{item.q}</h3>
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
            Scale Your Delivery. Protect Your Margins. Impress Your Clients.
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Avaantra Global becomes your silent execution partner — helping you
            deliver more, faster, and with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-black">
              Start Your Agency Partnership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white"
            >
              Build a Dedicated Team
            </Button>
          </div>

          <p className="text-sm text-gray-400">
            ISO 27001 • GDPR Compliant • 22+ Years Experience • NDA Secured •
            95% Retention Rate
          </p>
        </div>
      </section>
    </main>
  );
}
