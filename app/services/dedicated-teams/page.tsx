import ScrollToTop from "@/components/scroll-to-top"
import { ArrowRight, Shield, TrendingUp, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DedicatedTeamsPage() {
  return (
    <>
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary to-gray-800 text-light pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Your Own Product Team. <span className="text-primary-light">Without the Hiring Chaos.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-pretty">
              Skip the long hiring cycle. Get a ready-to-go engineering team that builds, tests, and ships on your
              roadmap — all while you stay in control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                Get Team Estimate
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary-light" />
                <span>15-Day Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary-light" />
                <span>NDA & IP Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary-light" />
                <span>40-60% Cost Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">You want to build fast. You want control.</h2>
            <p className="text-lg text-gray-700 mb-4">
              But building an in-house team takes months — and every wrong hire sets you back.
            </p>
            <p className="text-xl font-semibold text-primary mb-6">That's why Dedicated Development Teams exist.</p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                You get a full team — developers, QA, DevOps, designers — who work <strong>as your team</strong>,
                aligned with your culture, tools, and time zone.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                You manage priorities. We handle the hiring, setup, and delivery.
              </p>
              <p className="text-2xl font-bold text-primary">
                It's not outsourcing. It's team extension — without the risk or overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Real Problem Startups & Agencies Face
            </h2>
            <p className="text-lg text-center text-gray-700 mb-8">
              If you're like most founders or agency owners, you've faced one or more of these:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Hiring takes forever — 3–6 months to find the right developer",
                "Local salaries are 2–3x your budget",
                "Freelancers vanish mid-project",
                "Communication gaps slow progress",
                "You can't scale without losing quality",
              ].map((problem, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
                  <p className="text-gray-800 font-medium">{problem}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl font-semibold text-primary mb-4">
                That's why you need predictable capacity — a long-term team that ships code, not excuses.
              </p>
              <p className="text-lg text-gray-700">With Avaantra Global, you get just that.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Core Services */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What You Get — Core Services</h2>
            <p className="text-lg text-center text-gray-700 mb-12">
              A Dedicated Development Team gives you continuity, reliability, and results.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Full-Stack Developers",
                  description: "Senior engineers in React, Node, Python, .NET, and Java who code and ship end-to-end.",
                },
                {
                  title: "DevOps Engineers",
                  description: "CI/CD pipelines, cloud deployments, and monitoring for faster releases.",
                },
                {
                  title: "Quality Assurance (QA)",
                  description: "Manual + automated testing for every sprint to ensure zero regressions.",
                },
                {
                  title: "UI/UX Designers",
                  description: "Clean, conversion-focused design for web and mobile products.",
                },
                {
                  title: "Product Managers (Optional)",
                  description: "Sprint planning, roadmap clarity, and milestone ownership.",
                },
                {
                  title: "Tech Leads / Architects",
                  description: "Scalable architecture, performance, and code quality assurance.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-dark text-light rounded-2xl p-8 text-center">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-4xl font-bold mb-2">15 Days</p>
                  <p className="text-lg">Average Ramp-Up Time</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">40-60%</p>
                  <p className="text-lg">Cost Savings vs Local Hiring</p>
                </div>
              </div>
              <div className="border-t border-light/30 pt-6">
                <p className="text-lg italic">
                  "They became our internal team in less than three weeks — same tools, same sprint rituals, zero
                  friction."
                </p>
                <p className="mt-2 font-semibold">— VP Engineering, SaaS Startup (US)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dedicated Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose a Dedicated Team</h2>

            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Predictable Delivery",
                  description:
                    "You get a team that works full-time on your roadmap. You decide priorities. We ensure consistent delivery every sprint.",
                },
                {
                  number: "2",
                  title: "No Hiring Headaches",
                  description:
                    "We recruit, vet, and onboard every engineer. You skip interviews, payroll, HR, and compliance.",
                },
                {
                  number: "3",
                  title: "Aligned to Your Stack & Culture",
                  description:
                    "Your team works in your tools — GitHub, Slack, Jira, Notion. They join your daily standups.",
                },
                {
                  number: "4",
                  title: "Full IP Ownership",
                  description: "You own everything: code, designs, repositories, documentation.",
                },
                {
                  number: "5",
                  title: "Transparent Pricing",
                  description: "Flat monthly fees per resource — no hidden markup, no overhead.",
                },
                {
                  number: "6",
                  title: "Scale Up or Down Anytime",
                  description: "Add developers within 2–4 weeks. Scale down with 30-day notice. No lock-ins.",
                },
                {
                  number: "7",
                  title: "Founder-Led Oversight",
                  description:
                    "Our leadership reviews every engagement weekly. You're never managed by a junior coordinator.",
                },
              ].map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md flex gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-light rounded-full flex items-center justify-center text-xl font-bold">
                    {advantage.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{advantage.title}</h3>
                    <p className="text-gray-700">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Process — How You Get Your Team</h2>
            <p className="text-lg text-center text-gray-700 mb-12">
              We built this process so you can start fast — without losing control.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Discovery & Alignment",
                  description:
                    "You tell us what you're building, what roles you need, and what outcomes matter. We align your roadmap with the right skills and team size.",
                },
                {
                  step: "2",
                  title: "Team Assembly",
                  description:
                    "We shortlist 3–5 pre-vetted candidates per role within 5 days. You interview, approve, and handpick your team.",
                },
                {
                  step: "3",
                  title: "Onboarding & Integration",
                  description:
                    "Your new team joins your Slack, Jira, and codebase. They adapt to your time zone and sprint rhythm.",
                },
                {
                  step: "4",
                  title: "Delivery & Reporting",
                  description: "Weekly demos, sprint metrics, and progress dashboards keep you in control.",
                },
                {
                  step: "5",
                  title: "Scale, Optimize, or Transfer",
                  description:
                    "Add more roles, optimize velocity, or transition the team in-house through our Build-Operate-Transfer (BOT) model.",
                },
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-light rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-gray-700 text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Product Deserves a Team That Cares as Much as You Do
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Skip the long hiring cycle. Get your dedicated team in 15 days and ship features faster — with full
              control and zero risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                Schedule a 15-Minute Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                See Developer Profiles
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>100+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>NDA & IP Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
