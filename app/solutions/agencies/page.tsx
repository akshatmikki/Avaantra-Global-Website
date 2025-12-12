import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Shield, Zap, TrendingUp, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AgenciesPage() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="min-h-screen bg-light">
        {/* Hero Section with Image */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-light py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/creative-agency-team-brainstorming-session.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-700/90"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-light/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                🏷️ FOR AGENCIES
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-up">
                Scale Your Agency With Predictable Delivery—Without Hiring Full-Time Teams
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 text-pretty animate-slide-up animation-delay-100">
                From white-label marketing to full-stack development pods, Avaantra Global gives your agency the
                capacity, talent, and systems you need to grow—without adding overhead, risk, or complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
                <Button
                  size="lg"
                  className="bg-light text-purple-900 hover:bg-gray-100 rounded-full px-8 transform hover:scale-105 transition-all duration-300"
                >
                  Become a White-Label Partner
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-light text-light hover:bg-light/10 rounded-full px-8 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  Build Your Dedicated Team
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8 text-center">
                Why Agencies Choose Avaantra Global
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dark mb-4">The Problem</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Hiring is slow and expensive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Freelancers are unpredictable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Margins get squeezed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Client deadlines suffer</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dark mb-4">The Solution</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                      <span>Elastic capacity on-demand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                      <span>Senior experts integrated into your team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                      <span>Predictable quality and timelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                      <span>Work delivered under your brand</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-8 rounded-2xl text-center">
                <p className="text-2xl font-bold text-purple-900 italic">
                  "You handle the client. We handle the delivery. Together, you scale."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Agency Services We Offer</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete white-label delivery across marketing, development, and dedicated team solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Service Cards */}
              {[
                {
                  title: "White-Label Marketing Services",
                  icon: <Target size={28} />,
                  desc: "SEO, PPC, content, social media, and automation—all under your brand",
                  link: "#",
                  color: "bg-blue-500",
                },
                {
                  title: "White-Label Software Development",
                  icon: <Zap size={28} />,
                  desc: "Custom websites, SaaS products, web/mobile apps, and APIs",
                  link: "#",
                  color: "bg-green-500",
                },
                {
                  title: "Dedicated Teams for Agencies",
                  icon: <Users size={28} />,
                  desc: "Your own remote delivery department without hiring",
                  link: "#",
                  color: "bg-purple-500",
                },
                {
                  title: "Agency Partnership Program",
                  icon: <Shield size={28} />,
                  desc: "Long-term partnership with priority access and better pricing",
                  link: "#",
                  color: "bg-orange-500",
                },
                {
                  title: "Scale Engineering Without Risk",
                  icon: <TrendingUp size={28} />,
                  desc: "Senior full-stack engineers within 7–15 days",
                  link: "#",
                  color: "bg-red-500",
                },
                {
                  title: "AI & Automation for Agencies",
                  icon: <Zap size={28} />,
                  desc: "Speed up execution and increase margins with AI tools",
                  link: "#",
                  color: "bg-indigo-500",
                },
              ].map((service, idx) => (
                <Link key={idx} href={service.link} className="group">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-500 transition-all duration-500 hover:shadow-xl h-full transform hover:-translate-y-2 hover:scale-[1.02]">
                    <div
                      className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-light mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all duration-300">
                      Learn More{" "}
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Avaantra */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Why Avaantra Is the Perfect White-Label Partner
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "22+ Years Industry Experience", desc: "Deep engineering + marketing expertise" },
                { title: "Senior Talent Only", desc: "No juniors. No training needed" },
                { title: "NDA & Full Confidentiality", desc: "Clients never know we exist" },
                { title: "Predictable Pricing & SLAs", desc: "Clear costs, clear outcomes" },
                { title: "US, UK, EU Friendly Talent", desc: "Strong communication and cultural alignment" },
                { title: "95% Retention Rate", desc: "Agencies stay because delivery works" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                >
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="text-purple-500" size={20} />
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

        {/* Process */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Process for Agencies</h2>
              <p className="text-lg text-gray-600">Simple & Frictionless</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Partnership Kickoff",
                  desc: "Understand your services, clients, pricing, workflows",
                },
                { step: "2", title: "Resource / Pod Allocation", desc: "Assign developers, marketers, designers, PMs" },
                {
                  step: "3",
                  title: "Integration With Your Tools",
                  desc: "Slack, Asana, JIRA, ClickUp, HubSpot, GA4, etc.",
                },
                {
                  step: "4",
                  title: "White-Label Delivery Execution",
                  desc: "We deliver under your branding, tone & guidelines",
                },
                {
                  step: "5",
                  title: "Reporting & Optimization",
                  desc: "Weekly standups, monthly reviews, performance metrics",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 mb-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-light rounded-full flex items-center justify-center font-bold text-lg">
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
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Agencies Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Avaantra helped us grow our client base by 40% in 3 months—and every client thought it was all our
                  in-house team. Their white-label setup is flawless."
                </p>
                <p className="font-semibold text-dark">Agency Founder, UK</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "We used their Agile Pod for a SaaS client project. Delivery was on time, communication was seamless,
                  and our client renewed for a year."
                </p>
                <p className="font-semibold text-dark">Digital Director, Singapore</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-purple-900 to-purple-700 text-light">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Scale Your Delivery. Protect Your Margins. Impress Your Clients.
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Avaantra Global becomes your silent execution partner—helping you deliver more, deliver faster, and
              deliver with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-light text-purple-900 hover:bg-gray-100 rounded-full px-8">
                Start Your Agency Partnership
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-light text-light hover:bg-light/10 rounded-full px-8 bg-transparent"
              >
                Build a Dedicated Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
