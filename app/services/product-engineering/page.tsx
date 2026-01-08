"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Check,
  Lightbulb,
  Rocket,
  Layers,
  Users,
  Shield,
  ArrowRight,
  Calendar,
  MessageCircle,
  Target,
  Zap,
  TrendingUp,
  Database,
  Cloud,
  Lock,
} from "lucide-react"
import Link from "next/link"
import ScrollToTop from "@/components/scroll-to-top"

export default function ProductEngineeringPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Turn Your Idea Into a Scalable Product That Delivers
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto text-pretty">
              From discovery to deployment — you get predictable product engineering that builds faster, scales better,
              and grows revenue smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Product Strategy Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Discuss Your MVP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="font-medium">20+ Years Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-purple-600" />
              <span className="font-medium">100+ Products Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Startup & Agency Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-purple-600" />
              <span className="font-medium">100% IP Ownership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">What Is Product Engineering?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Building a digital product isn't just about writing code. It's about turning an idea into a market-ready
              business asset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Technology Strategy</h3>
                      <p className="text-muted-foreground">What to build and why</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Design Thinking</h3>
                      <p className="text-muted-foreground">How users experience it</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Layers className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Scalable Architecture</h3>
                      <p className="text-muted-foreground">How it performs as you grow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Alignment</h3>
                      <p className="text-muted-foreground">How it supports your revenue goals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <p className="text-lg text-pretty max-w-4xl mx-auto">
              At Avaantra Global, we partner with startups, SaaS founders, and digital agencies to build products that
              succeed — technically, financially, and operationally. Our approach combines engineering, UX, and growth
              strategy into one seamless process. You get more than code — you get a product that's ready for users,
              investors, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Product Engineering Ecosystem */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Product Engineering Ecosystem</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Every successful product follows a journey — and Avaantra supports every step
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                stage: "1. Product Roadmap & Discovery",
                service: "Define the vision, user needs, tech requirements, and success metrics.",
                outcome: "Clear business and technical blueprint.",
                icon: Target,
                link: "/services/product-roadmap-discovery",
              },
              {
                stage: "2. MVP Development",
                service: "Build a functional, testable version quickly to validate ideas.",
                outcome: "Launch faster, learn from real users.",
                icon: Rocket,
                link: "/services/mvp-development",
              },
              {
                stage: "3. SaaS Development Services",
                service: "Build scalable, subscription-based software platforms.",
                outcome: "SaaS architecture ready for growth and integrations.",
                icon: Cloud,
                link: "/services/saas-product-development",
              },
              {
                stage: "4. Product Architecture & CTO-as-a-Service",
                service: "Strategic tech leadership, architecture design, and ongoing advisory.",
                outcome: "Enterprise-grade foundation and direction.",
                icon: Database,
                link: "/services/product-architecture-cto",
              },
              {
                stage: "5. UX/UI Design & Product Research",
                service: "Data-driven design and usability research.",
                outcome: "Intuitive experiences users love.",
                icon: Lightbulb,
                link: "/services/ui-ux-design-services",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-lg">{item.stage}</h3>
                        <p className="text-muted-foreground">{item.service}</p>
                        <p className="text-sm font-medium text-purple-600">{item.outcome}</p>
                      </div>
                      <Link href={item.link}>
                        <Button variant="ghost" size="sm">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-pretty">
            Each service stands alone but connects seamlessly to the next — creating a complete product engineering
            lifecycle.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Why Startups & Agencies Choose Avaantra</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Startups choose us because they need speed and predictability. Agencies choose us because they need
              scalable delivery partners who understand both tech and business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Product Thinking, Not Just Coding",
                description: "Every feature mapped to a real business outcome",
              },
              {
                icon: Layers,
                title: "Full Lifecycle Ownership",
                description: "Discovery to post-launch optimization",
              },
              {
                icon: Users,
                title: "Global Expertise",
                description: "Developers, designers, and strategists with 20+ years of combined experience",
              },
              {
                icon: Zap,
                title: "Flexible Engagement Models",
                description: "From fixed-scope MVPs to ongoing retainer partnerships",
              },
              {
                icon: Shield,
                title: "Security & Compliance Built-In",
                description: "IP ownership, NDAs, and data protection guaranteed",
              },
              {
                icon: Target,
                title: "Business Performance Focus",
                description: "Digital products engineered for business performance — not guesswork",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Key Benefits You Gain</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Predictable Time-to-Market – Our agile frameworks and pre-built accelerators shorten launch cycles by 40%",
              "Scalable Architecture – Code and systems built to handle 10x growth",
              "User-Driven Decisions – Data-backed UX and product roadmapping",
              "Lower Development Risk – Early validation and frequent releases minimize rework",
              "Cross-Functional Expertise – Designers, developers, and strategists under one roof",
              "Long-Term Partnership – Continuous optimization and post-launch advisory",
            ].map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start bg-background p-6 rounded-lg shadow-sm">
                <Check className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-pretty">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Engagement Models</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                model: "Dedicated Product Team",
                idealFor: "Startups in build or growth stage",
                howItWorks: "Full-time engineers, designers, QA, PM integrated into your workflow",
              },
              {
                model: "Fixed-Scope Delivery",
                idealFor: "MVP or defined projects",
                howItWorks: "Pre-set milestones, fixed budget, clear delivery schedule",
              },
              {
                model: "Hybrid Model",
                idealFor: "Agencies managing multiple clients",
                howItWorks: "Core team retained; specialists added when needed",
              },
              {
                model: "White-Label Partnership",
                idealFor: "Agencies offering custom software",
                howItWorks: "We deliver under your brand, you retain client relationship",
              },
            ].map((engagement, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-2 text-purple-600">{engagement.model}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium">Ideal For:</span> {engagement.idealFor}
                  </p>
                  <p className="text-sm text-pretty">{engagement.howItWorks}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Discuss Your Model <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "SaaS Startup (US)",
                challenge: "Founder needed a working MVP before investor demo",
                solution: "Delivered MVP in 9 weeks, including analytics integration",
                outcome: "Raised $1.5M seed funding, reached 2,000 users in first 90 days",
              },
              {
                title: "Digital Agency (UK)",
                challenge: "Agency lacked internal dev capacity to build custom client portal",
                solution: "Avaantra delivered product under their branding within 6 weeks",
                outcome: "Agency increased annual recurring revenue by 32%",
              },
              {
                title: "HealthTech Platform (EU)",
                challenge: "Legacy system with outdated UX",
                solution: "Full re-architecture + modern design system",
                outcome: "65% faster load times, +40% user engagement",
              },
            ].map((study, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4 text-purple-600">{study.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Challenge:</span>
                      <p className="text-muted-foreground mt-1 text-pretty">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="font-medium">Solution:</span>
                      <p className="text-muted-foreground mt-1 text-pretty">{study.solution}</p>
                    </div>
                    <div>
                      <span className="font-medium text-purple-600">Outcome:</span>
                      <p className="text-muted-foreground mt-1 text-pretty">{study.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              We tailor tech stack and UX to fit your industry, audience, and growth goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { industry: "SaaS & Software", example: "Multi-tenant apps, CRMs, analytics platforms" },
              { industry: "FinTech", example: "Secure payments, trading systems, compliance tools" },
              { industry: "HealthTech", example: "Patient portals, remote diagnostics, data visualization" },
              { industry: "E-commerce", example: "Custom marketplaces, product configurators" },
              { industry: "EdTech", example: "Learning management systems, engagement analytics" },
              { industry: "Agencies", example: "White-label platforms, client portals, integrations" },
            ].map((item, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">{item.industry}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{item.example}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <Shield className="h-16 w-16 text-purple-600 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Security & Trust</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Your product's data, code, and IP are protected at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "NDA and IP transfer included by default",
              "Code repositories managed securely under your ownership",
              "Compliance with GDPR, HIPAA, and ISO standards",
              "Version control, backup, and disaster recovery policies",
              "Regular vulnerability assessments and penetration tests",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start bg-background p-4 rounded-lg">
                <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-pretty">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How is product engineering different from software development?",
                a: "Software development focuses on building features. Product engineering focuses on building value — aligning tech, business, and user needs for long-term success.",
              },
              {
                q: "Can I start with just an idea?",
                a: "Yes. We start with product discovery, define scope, and help you validate the concept before investing heavily.",
              },
              {
                q: "What's the average time to launch an MVP?",
                a: "Typically 8–12 weeks depending on complexity and integrations.",
              },
              {
                q: "What engagement flexibility do I have?",
                a: "You can start project-based or with a dedicated team, and scale up or down anytime.",
              },
              {
                q: "Do you work with non-technical founders?",
                a: "Yes. Our CTO-as-a-Service ensures you have technical leadership and clarity without hiring full-time.",
              },
              {
                q: "Can you handle design and development together?",
                a: "Absolutely — our UX/UI design team collaborates directly with engineers for seamless execution.",
              },
              {
                q: "What happens after product launch?",
                a: "We offer continuous optimization, feature enhancement, and maintenance to support your growth.",
              },
              {
                q: "Which tech stacks do you specialize in?",
                a: "React, Node.js, Python, .NET, Flutter, AWS, Azure, Docker, Kubernetes, PostgreSQL, MongoDB, and more.",
              },
              {
                q: "Do you sign NDAs and guarantee IP ownership?",
                a: "Always. All work and IP remain fully yours.",
              },
              {
                q: "How do you ensure predictable outcomes?",
                a: "We define clear milestones, weekly sprint reports, and success metrics — so delivery is always measurable.",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-pretty">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Let's Build the Product That Defines Your Next Growth Phase
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto text-pretty">
            From roadmap to real-world success — Avaantra turns your ideas into scalable, market-ready software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Product Strategy Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to a Product Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
