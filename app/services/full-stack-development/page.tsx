import ScrollToTop from "@/components/scroll-to-top"
import { ArrowRight, Check, Code, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FullStackDevelopmentPage() {
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
              Full-Stack Development That <span className="text-purple-200">Actually Ships</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty">
              From frontend to backend, database to deployment — get a complete team that builds, tests, and scales your
              product end-to-end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                See Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <Code className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <p className="text-sm">React, Node, Python</p>
              </div>
              <div className="text-center">
                <Layers className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <p className="text-sm">Scalable Architecture</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <p className="text-sm">Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Full-Stack Means */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">You Need More Than Just Code</h2>
            <p className="text-lg text-gray-700 mb-8">
              You need a system that connects everything — frontend polish, backend logic, database design, API
              integrations, and cloud deployment.
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-gray-50 rounded-2xl p-8 border-2 border-purple-200">
              <p className="text-xl font-semibold text-primary mb-6">
                That's what Full-Stack Development delivers: Complete ownership from concept to production.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-purple-700 mb-2">Frontend</h3>
                  <p className="text-sm text-gray-600">React, Vue, Angular — fast, responsive, and beautiful UIs</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-purple-700 mb-2">Backend</h3>
                  <p className="text-sm text-gray-600">Node.js, Python, .NET — secure, scalable server logic</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-purple-700 mb-2">DevOps</h3>
                  <p className="text-sm text-gray-600">AWS, Azure, Docker — automated deployment & monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You Get With Our Full-Stack Team</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Modern Frontend Frameworks",
                  description: "React, Next.js, Vue, Angular — with responsive design and optimal performance.",
                },
                {
                  title: "Scalable Backend Systems",
                  description: "Node.js, Python (Django/Flask), .NET, Java — built for growth and reliability.",
                },
                {
                  title: "Database Architecture",
                  description: "PostgreSQL, MongoDB, MySQL — optimized for speed and data integrity.",
                },
                {
                  title: "RESTful & GraphQL APIs",
                  description: "Clean, documented APIs that connect your frontend to backend seamlessly.",
                },
                {
                  title: "Cloud Deployment",
                  description: "AWS, Azure, Google Cloud — with CI/CD pipelines for continuous delivery.",
                },
                {
                  title: "Mobile-First Development",
                  description: "Progressive Web Apps and responsive designs that work on any device.",
                },
                {
                  title: "Security & Compliance",
                  description: "SSL, OAuth, encryption — protecting user data and meeting compliance standards.",
                },
                {
                  title: "Testing & QA",
                  description: "Unit tests, integration tests, E2E testing — ensuring zero regressions.",
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

      {/* Benefits */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Full-Stack Development?</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Single Point of Accountability",
                  description: "One team owns the entire stack — no finger-pointing, just solutions.",
                },
                {
                  title: "Faster Development Cycles",
                  description: "Frontend and backend teams work in sync, reducing handoff delays.",
                },
                {
                  title: "Consistent Technology Stack",
                  description: "Unified architecture makes maintenance, updates, and scaling easier.",
                },
                {
                  title: "Cost Efficiency",
                  description: "40-60% cheaper than hiring separate frontend and backend teams locally.",
                },
                {
                  title: "Better User Experience",
                  description: "Seamless integration between UI and server ensures smooth, fast apps.",
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-primary to-gray-900 text-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Full-Stack Product?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Get a complete development team that handles frontend, backend, and everything in between — without the
              hiring chaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                Talk to an Expert
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>End-to-End Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>15-Day Onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Full IP Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
