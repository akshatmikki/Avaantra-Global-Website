import ScrollToTop from "@/components/scroll-to-top"
import Link from "next/link"
import { ArrowRight, CheckCircle, Zap, Rocket, Tag, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SolutionsPage() {
  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen bg-light">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-dark via-gray-900 to-dark text-light py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Accelerate Your Growth with Predictable, Scalable Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 text-pretty">
                Whether you're an agency struggling to scale, a SaaS founder trying to grow MRR, or a startup building
                your first MVP, Avaantra Global helps you move faster with less stress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-light rounded-full px-8">
                  Book a Free Growth Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-light text-light hover:bg-light/10 rounded-full px-8 bg-transparent"
                >
                  Explore Solutions ↓
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Avaantra Global Solutions</h2>
              <p className="text-lg text-gray-600">
                We built Avaantra Global to help ambitious companies grow without breaking. Today's growth challenges
                don't come from lack of opportunity—they come from complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Scale</h3>
                <p className="text-gray-600">Without hiring or burnout. Get instant capacity when you need it.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="text-blue-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Speed</h3>
                <p className="text-gray-600">Get products and campaigns to market faster with agile delivery.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="text-green-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Sustainability</h3>
                <p className="text-gray-600">Build systems that compound over time for long-term growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Solutions Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">Our Core Solution Framework</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every business we work with faces 3 universal needs: Scale, Speed, and Sustainability. That's why our
                solutions are designed across four proven pillars.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* For Agencies */}
              <Link href="/solutions/agencies" className="group">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-10 rounded-3xl text-light h-full hover:scale-[1.02] transition-all shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Tag size={32} />
                    <h3 className="text-2xl font-bold">For Agencies</h3>
                  </div>
                  <p className="text-lg mb-6 text-purple-100">Scale delivery without hiring. Deliver without chaos.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>White Label Marketing & Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>Dedicated Teams for Agencies</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>2–3X delivery capacity in 90 days</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-light font-semibold group-hover:gap-4 transition-all">
                    Explore For Agencies <ArrowRight size={20} />
                  </div>
                </div>
              </Link>

              {/* Accelerate Product Development */}
              <Link href="/solutions/product-development" className="group">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl text-light h-full hover:scale-[1.02] transition-all shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap size={32} />
                    <h3 className="text-2xl font-bold">Accelerate Product Development</h3>
                  </div>
                  <p className="text-lg mb-6 text-blue-100">Build & launch products faster without the hiring risk.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>Managed Agile Pods</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>DevOps & Automation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>40–50% faster time-to-market</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-light font-semibold group-hover:gap-4 transition-all">
                    Explore Product Development <ArrowRight size={20} />
                  </div>
                </div>
              </Link>

              {/* Launch & Grow SaaS GTM */}
              <Link href="/solutions/saas-gtm" className="group">
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-10 rounded-3xl text-light h-full hover:scale-[1.02] transition-all shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket size={32} />
                    <h3 className="text-2xl font-bold">Launch & Grow SaaS GTM</h3>
                  </div>
                  <p className="text-lg mb-6 text-green-100">
                    Drive predictable user & revenue growth for SaaS products.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>SaaS Growth Strategy</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>Marketing Automation & CRO</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>3–5X qualified pipeline</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-light font-semibold group-hover:gap-4 transition-all">
                    Explore SaaS GTM <ArrowRight size={20} />
                  </div>
                </div>
              </Link>

              {/* For Startups */}
              <Link href="/solutions/startups" className="group">
                <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-10 rounded-3xl text-light h-full hover:scale-[1.02] transition-all shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Target size={32} />
                    <h3 className="text-2xl font-bold">For Startups</h3>
                  </div>
                  <p className="text-lg mb-6 text-orange-100">From idea to investor—faster and smarter.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>MVP Development & Validation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>Go-To-Market Strategy</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>MVP + traction in 90 days</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-light font-semibold group-hover:gap-4 transition-all">
                    Explore For Startups <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-16 md:py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Businesses Choose Avaantra Global</h2>
              <p className="text-lg text-gray-600">
                Because we think like founders, not vendors. We understand your pain—managing delivery, growth, and
                talent at the same time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Hybrid AI + Human Teams", desc: "Faster, accurate, cost-effective delivery" },
                { title: "Transparent Communication", desc: "Your tools, your dashboards, full visibility" },
                { title: "Sprint-Based Execution", desc: "Measurable results every 2 weeks" },
                { title: "Predictable Pricing", desc: "No billing surprises, clear SLAs" },
                { title: "End-to-End Growth Partner", desc: "From code to customer acquisition" },
                { title: "Peace of Mind", desc: "Predictable results you can count on" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-primary" size={20} />
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">The Avaantra Growth Process</h2>
              <p className="text-lg text-gray-600">
                Our process stays consistent across all solutions—it's how we guarantee speed and quality.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Discovery & Goal Setting",
                  desc: "Understand your vision, challenges, and success metrics",
                },
                {
                  step: "2",
                  title: "Custom Solution Blueprint",
                  desc: "We design a plan—team, tools, sprints, and deliverables",
                },
                { step: "3", title: "Pilot Sprint or MVP Phase", desc: "We start small, build fast, and show results" },
                { step: "4", title: "Scale Seamlessly", desc: "Add pods, channels, or projects as demand grows" },
                { step: "5", title: "Continuous Improvement", desc: "Monthly reviews, dashboards, and optimizations" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 mb-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-light rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Our Clients Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Avaantra helped us double our delivery capacity without hiring a single person. We now say yes to
                  every client."
                </p>
                <p className="font-semibold text-dark">Co-Founder, Marketing Agency (UK)</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "They took our SaaS GTM from scattered to systematic. We finally have predictable MRR."
                </p>
                <p className="font-semibold text-dark">Founder, B2B SaaS Platform (Canada)</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "We went from idea to funded MVP in 6 weeks. Their team understood everything—product, tech, and
                  growth."
                </p>
                <p className="font-semibold text-dark">Startup Founder (India)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary-dark text-light">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to Scale Smarter?</h2>
            <p className="text-xl text-light/90 mb-8 max-w-2xl mx-auto">
              You bring the vision. We bring the velocity, systems, and accountability. Together, we build predictable
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-light text-primary hover:bg-gray-100 rounded-full px-8">
                Book a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-light text-light hover:bg-light/10 rounded-full px-8 bg-transparent"
              >
                Download Capability Deck
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
