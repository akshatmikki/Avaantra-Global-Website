import ScrollToTop from "@/components/scroll-to-top"
import { ArrowRight, Check, Code2, LineChart, Target, Users, Zap, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EngineeringGrowthPage() {
  return (
    <>
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-primary text-light pt-32 pb-16 overflow-hidden">
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
              Code Meets Conversion. <span className="text-purple-200">Growth Built Into Every Line.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty">
              We bridge engineering and growth — so your product not only works flawlessly but also drives real,
              measurable revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                Book Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                Request Strategy Call
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <Code2 className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <p className="text-sm">Engineering Excellence</p>
              </div>
              <div className="text-center">
                <LineChart className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <p className="text-sm">Data-Driven Growth</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <p className="text-sm">Rapid Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What "Engineering + Growth" Means</h2>
            <p className="text-lg text-gray-700 mb-8">
              Most companies separate product and marketing. Developers build. Marketers promote. But growth today needs
              both — tightly integrated.
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-gray-50 rounded-2xl p-8 border-2 border-purple-200">
              <p className="text-xl font-semibold text-primary mb-6">
                We merge engineering, analytics, and marketing systems to create a unified growth engine.
              </p>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-sm text-gray-600">Features that increase retention</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-sm text-gray-600">Code that improves conversion</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-sm text-gray-600">Automation that reduces acquisition cost</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-sm text-gray-600">Product updates driven by data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Founders Need This */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Why Founders & Agencies Need This Model</h2>
            <p className="text-center text-lg text-gray-700 mb-12">Because growth isn't random. It's engineered.</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4">Startups Struggle With:</h3>
                <ul className="space-y-3">
                  {[
                    "Building features users don't adopt",
                    "Leaky funnels and abandoned signups",
                    "Manual, disconnected growth workflows",
                    "Wasted ad spend with poor attribution",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-purple-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4">Agencies Struggle With:</h3>
                <ul className="space-y-3">
                  {[
                    "Scaling client campaigns without automation",
                    "Fragmented tech stacks and reporting chaos",
                    "Project delivery delays that kill retention",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-purple-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl font-semibold text-primary">
                Avaantra fixes these — with growth built into your tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What You Get — Our Engineering + Growth Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Product-Led Growth Engineering",
                  description: "Build onboarding, referral, and retention systems inside your product.",
                },
                {
                  title: "Conversion Optimization (CRO)",
                  description: "Identify friction points and optimize flows for more signups and purchases.",
                },
                {
                  title: "Marketing Automation",
                  description: "Integrate CRM, email, analytics, and ad platforms for predictable lead nurture.",
                },
                {
                  title: "Data Analytics & Attribution",
                  description: "Connect user behavior data with revenue insights using GA4, Mixpanel, or Segment.",
                },
                {
                  title: "A/B Testing & Experimentation",
                  description: "Run continuous product and funnel experiments to increase conversion.",
                },
                {
                  title: "User Retention & Engagement Systems",
                  description: "Use triggers, notifications, and feedback loops to retain customers longer.",
                },
                {
                  title: "Revenue Ops & Growth Dashboarding",
                  description: "See marketing, sales, and product performance in one place.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold text-purple-700 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">The Avaantra Advantage</h2>
            <p className="text-center text-lg text-gray-700 mb-12">
              You get a team that's half engineering, half growth science — and 100% focused on results.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Code2,
                  title: "Engineering Foundation",
                  description: "Every growth strategy backed by stable, scalable tech.",
                },
                {
                  icon: BarChart3,
                  title: "Data-Driven Decisions",
                  description: "Every change measured by conversion, retention, or revenue impact.",
                },
                {
                  icon: Users,
                  title: "Cross-Functional Experts",
                  description: "Developers, marketers, and analysts working as one.",
                },
                {
                  icon: Target,
                  title: "Real-Time Visibility",
                  description: "Growth dashboards with clear KPIs — not vanity metrics.",
                },
                {
                  icon: Zap,
                  title: "ROI in Weeks, Not Months",
                  description: "Most clients see measurable lift within the first 60 days.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md flex gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits — What You'll Achieve</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Higher Conversion Rates",
                  description: "UX improvements + better funnels = more signups and purchases.",
                },
                {
                  title: "Lower Customer Acquisition Cost (CAC)",
                  description: "Automated nurture + referral systems = lower paid acquisition dependency.",
                },
                {
                  title: "Improved Retention",
                  description: "Engineering triggers that bring users back — before they churn.",
                },
                {
                  title: "Faster Experimentation",
                  description: "Deploy A/B tests and new features weekly instead of quarterly.",
                },
                {
                  title: "Predictable Revenue Growth",
                  description: "Track product impact on MRR, ARPU, and retention metrics in real-time.",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md flex gap-4">
                  <div className="flex-shrink-0">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Process — How We Engineer Growth</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Growth Discovery Audit",
                  description: "We analyze your funnel, product analytics, and revenue model.",
                },
                {
                  title: "Strategy Blueprint",
                  description: "Define growth KPIs, technical dependencies, and quick wins.",
                },
                {
                  title: "Implement & Integrate",
                  description: "We build automation, analytics, and experiment frameworks right into your product.",
                },
                {
                  title: "Test, Measure, Improve",
                  description: "Continuous testing of user flows, pricing models, and campaign performance.",
                },
                {
                  title: "Scale Predictably",
                  description: "Expand what works — through automation and data-led decision-making.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-700 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Engagement Models</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  model: "Growth-as-a-Service (GaaS)",
                  bestFor: "Startups with active users but slow conversion",
                  whyItWorks: "Full-time growth engineering team optimizing funnels and features.",
                },
                {
                  model: "Growth Consulting Retainer",
                  bestFor: "SaaS companies and agencies",
                  whyItWorks: "Monthly advisory + implementation support with measurable KPIs.",
                },
                {
                  model: "Project-Based Optimization",
                  bestFor: "Product launches or MVP validation",
                  whyItWorks: "4–8 week engagement to set up analytics, CRO, and automation.",
                },
                {
                  model: "White-Label Growth Delivery",
                  bestFor: "Digital agencies",
                  whyItWorks: "Avaantra executes growth experiments under your brand.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-purple-700 mb-3">{item.model}</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">
                      Best For: <span className="font-normal">{item.bestFor}</span>
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      Why It Works: <span className="font-normal">{item.whyItWorks}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-primary to-gray-900 text-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Growth Into Your Product</h2>
            <p className="text-xl text-gray-200 mb-8">
              Combine engineering excellence with growth intelligence — and scale with confidence, clarity, and
              measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                Book Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                Talk to a Growth Strategist
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>100+ Growth Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>NDA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Predictable Outcomes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
