import { Button } from "@/components/ui/button"
import { ArrowRight, Tag, CheckCircle, Briefcase } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "For Agencies | Scale Your Agency Without Hiring Risk",
  description:
    "Avaantra Global helps digital, creative, and software agencies scale delivery without hiring risk — through white-label marketing, white-label development, dedicated teams, and flexible partnership programs.",
}

export default function ForAgenciesPage() {
  const solutions = [
    {
      title: "White Label Marketing Services",
      description: "Give your agency senior marketing talent without expanding your internal team.",
      features: ["SEO & technical SEO", "PPC & paid media", "Content marketing", "Marketing automation"],
      outcome: "Sell more services, deliver faster, improve retention",
      link: "/for-agencies/white-label-marketing",
      icon: "📊",
    },
    {
      title: "White Label Software Development",
      description: "For creative, design, or marketing agencies who need dependable engineering.",
      features: ["Custom websites", "SaaS products", "Mobile apps", "AI-enabled apps"],
      outcome: "Expand into software without expanding payroll",
      link: "/for-agencies/white-label-development",
      icon: "💻",
    },
    {
      title: "Dedicated Teams for Agencies",
      description: "Your own remote delivery department that works exactly like your in-house team.",
      features: ["Dedicated developers", "Designers", "QA specialists", "Project managers"],
      outcome: "Consistent delivery, no burnout, happy clients",
      link: "/for-agencies/dedicated-teams",
      icon: "👥",
    },
    {
      title: "Agency Partnership Program",
      description: "Long-term partnership model for agencies looking to scale capacity sustainably.",
      features: ["Priority talent access", "Better pricing tiers", "Co-branded case studies", "Deal registration"],
      outcome: "Sustainable growth with strategic partnership benefits",
      link: "/for-agencies/partnership-program",
      icon: "🤝",
    },
    {
      title: "Scale Engineering Without Hiring Risk",
      description: "Get senior full-stack engineers within 7–15 days who integrate instantly.",
      features: ["Sudden project spikes", "Enterprise projects", "Tight deadlines", "Developer shortages"],
      outcome: "Immediate capacity expansion with zero hiring overhead",
      link: "/for-agencies/scale-engineering",
      icon: "⚡",
    },
    {
      title: "AI & Automation for Agencies",
      description: "Use AI automation to speed up campaigns and build AI tools for clients.",
      features: ["Campaign execution", "Content production", "Lead scoring", "Analytics automation"],
      outcome: "Increased margins by reducing manual work",
      link: "/for-agencies/ai-automation",
      icon: "🤖",
    },
  ]

  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
            <Tag className="w-6 h-6 text-purple-200 animate-bounce" />
            <span className="text-purple-200 font-semibold uppercase tracking-wider text-sm">For Agencies</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-balance animate-slide-up">
            Scale Your Agency With Predictable Delivery — Without Hiring Full-Time Teams
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto text-center mb-10 text-pretty animate-slide-up delay-100">
            From white-label marketing to full-stack development pods, Avaantra Global gives your agency the capacity,
            talent, and systems you need to grow — without adding overhead, risk, or complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <Button
              size="lg"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Become a White-Label Partner
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Build Your Dedicated Team
            </Button>
          </div>
        </div>
      </section>

      {/* Why Agencies Choose Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Why Agencies Choose Avaantra Global</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Agencies grow fast — until delivery hits a wall. You get more clients, more retainers, more campaigns...
              but not enough hands to deliver reliably.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 md:p-12 mb-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">The Problem:</h3>
                <ul className="space-y-3">
                  {[
                    "Hiring is slow",
                    "Freelancers are unpredictable",
                    "Full-time teams are expensive",
                    "Margins get squeezed",
                    "Client deadlines suffer",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 transform hover:translate-x-2 transition-transform duration-300"
                    >
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">The Solution:</h3>
                <ul className="space-y-3">
                  {[
                    "White-label delivery you can trust",
                    "Dedicated engineering, design & marketing pods",
                    "Predictable outcomes, timelines & pricing",
                    "Zero hiring risk, zero overhead",
                    "Scale up or down anytime",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 transform hover:translate-x-2 transition-transform duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center bg-purple-600 text-white rounded-2xl p-8 hover:bg-purple-700 transition-all duration-300 hover:shadow-2xl">
            <p className="text-2xl font-bold">
              "You focus on selling, strategy, and client relationships. We quietly power your execution engine."
            </p>
          </div>
        </div>
      </section>

      {/* Agency Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Agency Services We Offer</h2>
            <p className="text-lg text-gray-600">Below is a simple overview. Each service links to a detailed page.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-500 transform hover:-translate-y-2 hover:scale-[1.02] group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2 text-sm">We Offer:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-sm text-gray-600 flex items-start gap-2 transform hover:translate-x-1 transition-transform duration-200"
                      >
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-3 mb-4 group-hover:bg-purple-100 transition-colors duration-300">
                  <p className="text-sm font-semibold text-purple-900">Outcome: {solution.outcome}</p>
                </div>

                <Link href={solution.link}>
                  <Button
                    className="w-full group/btn bg-transparent transform hover:scale-105 transition-all duration-300"
                    variant="outline"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Perfect Partner */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why Avaantra Is the Perfect White-Label Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏆", title: "22+ Years Industry Experience", desc: "Deep engineering + marketing expertise" },
              { icon: "👨‍💼", title: "Senior Talent Only", desc: "No juniors. No training needed" },
              { icon: "🔒", title: "NDA & Full Confidentiality", desc: "Clients never know we exist" },
              { icon: "💰", title: "Predictable Pricing & SLAs", desc: "Clear costs, clear outcomes" },
              { icon: "🌍", title: "Global Talent", desc: "US, UK, EU & Middle East friendly" },
              { icon: "⭐", title: "95% Retention Rate", desc: "Agencies stay because delivery works" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="text-3xl mb-3 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process for Agencies</h2>
            <p className="text-lg text-purple-100">Simple & Frictionless</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Partnership Kickoff", desc: "Understand your services & workflows" },
              { step: "2", title: "Resource Allocation", desc: "Assign developers, marketers, designers" },
              { step: "3", title: "Tool Integration", desc: "We use your Slack, JIRA, etc." },
              { step: "4", title: "White-Label Delivery", desc: "Execute under your branding" },
              { step: "5", title: "Reporting & Optimization", desc: "Weekly standups, monthly reviews" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group"
              >
                <div className="text-3xl font-bold text-purple-300 mb-3 transform group-hover:scale-125 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-purple-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Supported */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Industries We Support Through Agencies</h2>
            <p className="text-lg text-gray-600">
              Many agencies serve multiple industries. Avaantra helps you deliver across all of them.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "SaaS & B2B",
              "FinTech",
              "HealthTech",
              "Retail & eCommerce",
              "Real Estate",
              "EdTech",
              "Manufacturing",
              "Media & Entertainment",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-purple-50 rounded-lg p-4 text-center hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <p className="font-semibold text-purple-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Your Agency's Growth Engine</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Avaantra Global becomes your silent execution partner — helping you deliver more, deliver faster, and
            deliver with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Start Your Agency Partnership
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Build a Dedicated Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
