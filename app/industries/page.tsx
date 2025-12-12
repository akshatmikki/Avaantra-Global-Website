import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Code, Heart, ShoppingCart, GraduationCap, Home, Factory, Truck } from "lucide-react"

export const metadata = {
  title: "Industries We Serve | Avaantra Global",
  description:
    "Avaantra Global delivers AI-powered growth solutions across FinTech, SaaS, HealthTech, Retail, EdTech, PropTech, Manufacturing, and more industries.",
}

export default function IndustriesPage() {
  const industries = [
    {
      icon: Code,
      title: "FinTech",
      description: "Secure, compliant, and easy-to-use fintech systems including digital banking and payment apps.",
      features: ["Digital banking", "Payment apps", "Lending tools", "Compliance-ready"],
      link: "/industries/fintech",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Building2,
      title: "SaaS and B2B Software",
      description: "Build strong cloud products, add new features fast, and scale to global markets.",
      features: ["Cloud products", "Feature development", "Global scaling", "B2B platforms"],
      link: "/industries/saas",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Heart,
      title: "HealthTech and MedTech",
      description: "Secure, HIPAA-ready digital tools that help doctors, clinics, and health businesses.",
      features: ["HIPAA compliance", "Patient portals", "Telehealth", "Health apps"],
      link: "/industries/healthtech",
      color: "from-red-500 to-red-700",
    },
    {
      icon: ShoppingCart,
      title: "Retail and E-commerce",
      description: "Online stores, shopping apps, and AI-based tools that help retail brands grow.",
      features: ["E-commerce platforms", "Shopping apps", "AI recommendations", "Omnichannel"],
      link: "/industries/retail",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: GraduationCap,
      title: "EdTech and eLearning",
      description: "Learning platforms, student apps, and teacher tools that make online education simple.",
      features: ["LMS platforms", "Student apps", "Assessment tools", "Virtual classrooms"],
      link: "/industries/edtech",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Home,
      title: "PropTech and Real Estate",
      description: "Property search systems, rental portals, and smart property management tools.",
      features: ["Property search", "Rental portals", "Management tools", "Smart buildings"],
      link: "/industries/proptech",
      color: "from-teal-500 to-teal-700",
    },
    {
      icon: Factory,
      title: "Manufacturing and Industry 4.0",
      description: "Digital tools like IoT, automation, and smart dashboards to improve operations.",
      features: ["IoT integration", "Automation", "Smart dashboards", "Supply chain"],
      link: "/industries/manufacturing",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Truck,
      title: "Logistics and Supply Chain",
      description: "Tools for routing, tracking, fleet management, and supply chain planning.",
      features: ["Route optimization", "Fleet tracking", "Warehouse management", "Planning tools"],
      link: "/industries/logistics",
      color: "from-indigo-500 to-indigo-700",
    },
  ]

  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-dark via-gray-900 to-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Technology That Helps Every Industry Grow
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 text-pretty">
              Avaantra Global helps companies improve, digitize, and scale with smart software, AI, and automation. We
              build solutions that are secure, fast, and ready to help your business grow in a predictable way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Explore Industry Solutions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Talk to a Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industries Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Why Industries Choose Avaantra Global</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every industry is changing. We help businesses grow with smart, secure, and scalable systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Build and release products faster", icon: "⚡" },
              { title: "Use AI to improve operations", icon: "🤖" },
              { title: "Connect strategy with real results", icon: "🎯" },
              { title: "Grow with secure and scalable systems", icon: "🔒" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="font-semibold text-dark">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-primary/5 rounded-2xl p-8">
            <p className="text-xl font-semibold text-dark">
              We do not just build software. We help your industry move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Based on your ICP industries</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className={`bg-gradient-to-r ${industry.color} p-8 text-white`}>
                  <industry.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-white/90">{industry.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-dark mb-3">Key Solutions:</h4>
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full group-hover:bg-primary-dark transition-colors">
                    Explore {industry.title} Solutions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Technology We Use</h2>
            <p className="text-lg text-gray-600">"One tech stack. Many possibilities."</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: "Frontend", tech: "React, Angular, Vue, Next" },
              { category: "Backend", tech: "Python, Node, .NET, Java" },
              { category: "Mobile", tech: "Flutter, React Native, Kotlin" },
              { category: "AI", tech: "OpenAI API, TensorFlow, ML tools" },
              { category: "Cloud", tech: "AWS, Azure, Google Cloud" },
              { category: "Security", tech: "GDPR, HIPAA, ISO standards" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-primary mb-2">{item.category}</h3>
                <p className="text-gray-600 text-sm">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build What Your Industry Needs Next</h2>
          <p className="text-lg text-white/90 mb-8">
            Avaantra Global helps you plan, build, and grow with predictable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group bg-white text-primary hover:bg-gray-100">
              Explore Industry Solutions
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Talk to an Expert
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <span>ISO Certified</span>
            <span>•</span>
            <span>GDPR Compliant</span>
            <span>•</span>
            <span>HIPAA Ready</span>
            <span>•</span>
            <span>22+ Years Experience</span>
            <span>•</span>
            <span>Global Delivery</span>
          </div>
        </div>
      </section>
    </main>
  )
}
