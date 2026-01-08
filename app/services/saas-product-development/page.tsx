"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ScrollToTop from "@/components/scroll-to-top"
import {
  CheckCircle2,
  Cloud,
  Users,
  TrendingUp,
  BarChart3,
  Lock,
  Zap,
  RefreshCw,
  DollarSign,
  Shield,
} from "lucide-react"

export default function SaaSDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Build SaaS Products That Scale — Predictably
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 text-pretty">
              From idea to global launch — we design, develop, and optimize SaaS products engineered for performance,
              scalability, and growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Book SaaS Strategy Call
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Get Development Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is SaaS Development */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What SaaS Development Really Means</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                <span className="font-semibold">SaaS (Software as a Service)</span> is more than just "software in the
                cloud." It's a complete business model requiring subscription management, user analytics, scalable
                architecture, and continuous delivery.
              </p>
              <p>
                At Avaantra Global, we build <span className="font-semibold text-purple-600">SaaS platforms</span> that
                aren't just functional — they're built to grow revenue, retain users, and scale globally.
              </p>
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="font-semibold text-xl mb-4">We focus on:</p>
                <ul className="space-y-2">
                  {[
                    "Multi-tenant architecture for scalability",
                    "Subscription & billing automation",
                    "Performance optimization & uptime",
                    "Security & compliance (SOC2, GDPR, HIPAA)",
                    "Data-driven product analytics",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who We Build SaaS Products For</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Early-Stage Startups",
                  desc: "Turn your MVP into a full-scale SaaS platform ready for paying customers.",
                  icon: Zap,
                },
                {
                  title: "Growing SaaS Companies",
                  desc: "Scale your infrastructure, add new features, and optimize for retention.",
                  icon: TrendingUp,
                },
                {
                  title: "Digital Agencies",
                  desc: "Build white-label SaaS solutions for clients or launch your own products.",
                  icon: Users,
                },
              ].map((item, idx) => (
                <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Avaantra */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose Avaantra for SaaS Development
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Cloud,
                  title: "Cloud-Native Architecture",
                  desc: "Built on AWS, Azure, or GCP for reliability and scale",
                },
                {
                  icon: Users,
                  title: "Full-Stack Expertise",
                  desc: "Frontend, backend, DevOps, and product strategy in one team",
                },
                {
                  icon: RefreshCw,
                  title: "Agile & Continuous Delivery",
                  desc: "Regular releases with CI/CD pipelines",
                },
                {
                  icon: BarChart3,
                  title: "Product Analytics Built-In",
                  desc: "Track user behavior, retention, and revenue metrics",
                },
                { icon: Lock, title: "Security-First Approach", desc: "SOC2, GDPR, HIPAA compliance from day one" },
                {
                  icon: DollarSign,
                  title: "Revenue-Focused Features",
                  desc: "Subscription billing, tiered plans, and payment integrations",
                },
              ].map((item, idx) => (
                <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="h-10 w-10 text-purple-600 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our SaaS Development Services</h2>

            <div className="space-y-4">
              {[
                {
                  service: "SaaS Product Strategy & Architecture",
                  desc: "Define product roadmap, technology stack, and scalability plan.",
                  outcome: "Clear technical direction",
                },
                {
                  service: "Multi-Tenant SaaS Development",
                  desc: "Build secure, isolated environments for each customer.",
                  outcome: "Scalable architecture",
                },
                {
                  service: "Subscription & Billing Integration",
                  desc: "Stripe, Paddle, or custom payment flows with automated billing.",
                  outcome: "Revenue automation",
                },
                {
                  service: "API Development & Integrations",
                  desc: "RESTful APIs, webhooks, and third-party integrations.",
                  outcome: "Connected ecosystem",
                },
                {
                  service: "Admin Dashboard & Analytics",
                  desc: "Build internal tools for user management, reporting, and insights.",
                  outcome: "Data-driven decisions",
                },
                {
                  service: "Cloud Infrastructure & DevOps",
                  desc: "Set up CI/CD, auto-scaling, monitoring, and disaster recovery.",
                  outcome: "High availability",
                },
                {
                  service: "Security & Compliance",
                  desc: "Implement SOC2, GDPR, HIPAA standards and security audits.",
                  outcome: "Trust & compliance",
                },
                {
                  service: "Ongoing Support & Optimization",
                  desc: "Post-launch monitoring, feature updates, and performance tuning.",
                  outcome: "Continuous improvement",
                },
              ].map((item, idx) => (
                <Card key={idx} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-purple-600 mb-2">{item.service}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                      <div className="md:w-48">
                        <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {item.outcome}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our SaaS Development Process</h2>

            <div className="space-y-8">
              {[
                {
                  step: "Phase 1",
                  title: "Discovery & Planning",
                  desc: "Define product vision, user personas, and technical requirements.",
                  duration: "1-2 weeks",
                },
                {
                  step: "Phase 2",
                  title: "Architecture & Design",
                  desc: "Create system architecture, database schema, and UI/UX designs.",
                  duration: "2-3 weeks",
                },
                {
                  step: "Phase 3",
                  title: "Core Development",
                  desc: "Build frontend, backend APIs, database, and authentication.",
                  duration: "8-12 weeks",
                },
                {
                  step: "Phase 4",
                  title: "Billing & Subscription Setup",
                  desc: "Integrate payment gateway, subscription plans, and billing automation.",
                  duration: "2-3 weeks",
                },
                {
                  step: "Phase 5",
                  title: "Testing & QA",
                  desc: "Security testing, performance optimization, and bug fixes.",
                  duration: "2-3 weeks",
                },
                {
                  step: "Phase 6",
                  title: "Launch & Monitor",
                  desc: "Deploy to production, set up monitoring, and provide post-launch support.",
                  duration: "Ongoing",
                },
              ].map((process, idx) => (
                <Card key={idx} className="shadow-lg">
                  <CardHeader className="bg-purple-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-sm text-purple-600 font-semibold">{process.step}</p>
                          <CardTitle className="text-xl">{process.title}</CardTitle>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 font-semibold">{process.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-700">{process.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Essential SaaS Features We Build</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "User authentication & role-based access",
                "Subscription plans & billing automation",
                "Multi-tenant data isolation",
                "Real-time notifications & emails",
                "API access & developer documentation",
                "Admin dashboard & analytics",
                "Payment gateway integration (Stripe, Paddle)",
                "Performance monitoring & error tracking",
                "Data export & backup systems",
                "Mobile-responsive design",
                "Third-party integrations (Zapier, Slack)",
                "Compliance & security features",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">SaaS Success Stories</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Marketing SaaS (USA)",
                  challenge: "Needed to scale from 100 to 10,000 users",
                  solution: "Re-architected for multi-tenancy, added auto-scaling",
                  result: "99.9% uptime, 50% cost reduction",
                },
                {
                  title: "HR Tech Platform (UK)",
                  challenge: "Required SOC2 compliance for enterprise clients",
                  solution: "Implemented security controls and passed audit",
                  result: "Secured 5 enterprise contracts worth $2M ARR",
                },
                {
                  title: "Analytics SaaS (India)",
                  challenge: "Slow performance with large datasets",
                  solution: "Optimized database queries and caching layer",
                  result: "80% faster load times, 40% better retention",
                },
              ].map((study, idx) => (
                <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-purple-600">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm text-gray-500 mb-1">Challenge:</p>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500 mb-1">Solution:</p>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500 mb-1">Result:</p>
                      <p className="text-purple-600 font-semibold">{study.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
              <p className="text-lg text-gray-700">We build SaaS platforms that enterprises trust.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "SOC2 Type II compliance support",
                "GDPR & CCPA data privacy",
                "HIPAA compliance for healthcare",
                "End-to-end encryption",
                "Regular security audits & penetration testing",
                "DDoS protection & WAF",
                "Automated backup & disaster recovery",
                "Role-based access control (RBAC)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to build a SaaS product?",
                  a: "Typically 3-6 months for a full SaaS platform, depending on complexity and features.",
                },
                {
                  q: "What is multi-tenant architecture?",
                  a: "A design pattern where a single instance serves multiple customers with isolated data and configurations.",
                },
                {
                  q: "Do you provide ongoing maintenance?",
                  a: "Yes, we offer monthly support plans including monitoring, updates, and feature development.",
                },
                {
                  q: "Can you help with compliance (SOC2, HIPAA)?",
                  a: "Absolutely. We have experience implementing security controls required for compliance certifications.",
                },
                {
                  q: "What payment gateways do you integrate?",
                  a: "We work with Stripe, Paddle, PayPal, and can integrate custom payment solutions.",
                },
              ].map((faq, idx) => (
                <Card key={idx} className="shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-purple-600">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Build Your SaaS Platform?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's turn your vision into a scalable, revenue-generating SaaS product that users love.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Book Strategy Call
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Get Development Estimate
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-purple-100">
              <span>20+ Years Experience</span>
              <span>•</span>
              <span>50+ SaaS Products Built</span>
              <span>•</span>
              <span>Enterprise-Grade Security</span>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
