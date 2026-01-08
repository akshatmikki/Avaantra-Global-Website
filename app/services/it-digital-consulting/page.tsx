import ScrollToTop from "@/components/scroll-to-top"
import { ArrowRight, Check, Brain, Lightbulb, TrendingUp, Shield, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConsultingPage() {
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
              Turn Technology into a <span className="text-purple-200">Growth Engine</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty">
              From digital strategy to IT consulting — we help startups and agencies build scalable systems, smarter
              products, and faster growth with engineering that drives outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                Book a Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                Request Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <Brain className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <p className="text-sm">Strategic Foresight</p>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <p className="text-sm">Data-Driven Results</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <p className="text-sm">Fast Implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why IT & Digital Consulting Matters</h2>
            <p className="text-lg text-gray-700 mb-8">
              Every startup or agency has tech. But not every one of them turns it into a competitive advantage. The
              systems don't talk to each other, teams work in silos, and growth feels random, not repeatable.
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-gray-50 rounded-2xl p-8 border-2 border-purple-200">
              <p className="text-xl font-semibold text-primary mb-6">
                We bridge your business goals with technology execution, ensuring that every product feature, marketing
                funnel, and customer touchpoint connects seamlessly.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-purple-700 mb-2">Strategy</h3>
                  <p className="text-sm text-gray-600">Clarity on what to build, when, and why</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-purple-700 mb-2">Systems</h3>
                  <p className="text-sm text-gray-600">Connected technology that works as one</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-purple-700 mb-2">Results</h3>
                  <p className="text-sm text-gray-600">Measurable business outcomes you can track</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Challenge */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Core Challenge We Solve</h2>
            <p className="text-lg text-gray-700 mb-8">
              Most startups struggle not because they lack talent — but because they lack clarity.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Scaling tech too early or too late",
                "Running on outdated stacks",
                "Missing data to make confident growth decisions",
                "Spending on tools that don't integrate or deliver ROI",
                "Lacking visibility across marketing, product, and tech performance",
              ].map((challenge, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-purple-600" />
                  </div>
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xl font-semibold text-primary">
                Avaantra helps you align strategy → systems → results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our IT & Digital Consulting Services</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Technology Strategy Consulting",
                  description:
                    "Identify the right tech stack, architecture, and roadmap for your next phase of growth.",
                },
                {
                  title: "Digital Transformation Consulting",
                  description: "Modernize legacy systems, automate workflows, and improve digital maturity.",
                },
                {
                  title: "Product Strategy & Roadmapping",
                  description: "Define vision, user journeys, and KPIs for product-market fit and scale.",
                },
                {
                  title: "Cloud & Infrastructure Consulting",
                  description: "Optimize cloud architecture for cost, scalability, and reliability.",
                },
                {
                  title: "Data & Analytics Strategy",
                  description: "Build dashboards, data pipelines, and analytics layers for decision-making.",
                },
                {
                  title: "Process Optimization & Automation",
                  description: "Streamline delivery, automate routine tasks, and improve operational efficiency.",
                },
                {
                  title: "Growth Consulting (Engineering + Marketing)",
                  description: "Connect product improvements to user acquisition, conversion, and retention.",
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

      {/* Why Choose */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Why Choose Avaantra Global</h2>
            <p className="text-center text-lg text-gray-700 mb-12">
              Because your success shouldn't depend on guesswork. You need a consulting partner who speaks both
              languages — the language of business and the language of code.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Brain,
                  title: "Strategic Foresight",
                  description: "20+ years of combined experience across IT, marketing, and digital strategy.",
                },
                {
                  icon: Lightbulb,
                  title: "End-to-End Thinking",
                  description: "From engineering design to GTM (Go-To-Market) execution.",
                },
                {
                  icon: TrendingUp,
                  title: "Data-Driven Roadmaps",
                  description: "Every recommendation is backed by data, not buzzwords.",
                },
                {
                  icon: Shield,
                  title: "Security by Design",
                  description: "Governance, compliance, and data protection built in.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits — What You Gain</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Clarity on What to Build Next",
                  description: "Stop guessing. Know exactly which initiatives create the biggest ROI.",
                },
                {
                  title: "Tech Decisions with Confidence",
                  description: "Choose the right platforms, frameworks, and architecture for scale.",
                },
                {
                  title: "Operational Efficiency",
                  description: "Automate manual work, reduce waste, and improve delivery velocity.",
                },
                {
                  title: "Unified Growth Framework",
                  description: "Align marketing, product, and tech teams under one measurable strategy.",
                },
                {
                  title: "Faster Time-to-Market",
                  description: "Get from idea to launch faster with proven playbooks.",
                },
                {
                  title: "Long-Term Scalability",
                  description: "Build systems that grow as your business grows — without rebuilding every year.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our 5-Step Consulting Process</h2>

            <div className="space-y-6">
              {[
                {
                  step: "Step 1",
                  title: "Discovery & Diagnosis",
                  description:
                    "We analyze your systems, workflows, tech stack, and KPIs to uncover performance bottlenecks.",
                },
                {
                  step: "Step 2",
                  title: "Strategy Blueprint",
                  description:
                    "We co-create a clear roadmap — covering architecture, growth levers, and success metrics.",
                },
                {
                  step: "Step 3",
                  title: "Implementation Support",
                  description: "Our engineers and consultants work with your team to execute the strategy effectively.",
                },
                {
                  step: "Step 4",
                  title: "Integration & Optimization",
                  description: "We ensure your tech, data, and marketing stack work as one cohesive ecosystem.",
                },
                {
                  step: "Step 5",
                  title: "Ongoing Advisory",
                  description: "Monthly reviews, analytics reports, and continuous improvement guidance.",
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
                  model: "Strategic Consulting (Retainer)",
                  bestFor: "Startups in scaling phase",
                  howItWorks: "Monthly advisory with hands-on leadership.",
                },
                {
                  model: "Project-Based Consulting",
                  bestFor: "One-time transformation projects",
                  howItWorks: "Fixed-scope, milestone-based delivery.",
                },
                {
                  model: "Technology Audit",
                  bestFor: "SaaS companies",
                  howItWorks: "2–3 week review of architecture, codebase, and cloud costs.",
                },
                {
                  model: "Growth Consulting (Hybrid)",
                  bestFor: "Agencies & Product Teams",
                  howItWorks: "Combines tech + marketing to drive measurable KPIs.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-purple-700 mb-3">{item.model}</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">
                      Best For: <span className="font-normal">{item.bestFor}</span>
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      How It Works: <span className="font-normal">{item.howItWorks}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Smarter</h2>
            <p className="text-xl text-gray-200 mb-8">
              Align your technology, teams, and strategy for measurable business outcomes. Book a free digital
              consultation with Avaantra experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                Talk to a Consultant
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>NDA & IP Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>100+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
