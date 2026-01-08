"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ScrollToTop from "@/components/scroll-to-top"
import {
  CheckCircle2,
  Rocket,
  Users,
  Lightbulb,
  BarChart3,
  Lock,
  Clock,
  Target,
  Shield,
  Zap,
  FileCode,
} from "lucide-react"

export default function MVPDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Launch Smarter. Validate Faster.</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 text-pretty">
              We help you turn your idea into a Minimum Viable Product (MVP) — built to test, learn, and grow — in
              weeks, not months.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Book Free MVP Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Get Cost Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What an MVP Is */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              What an MVP Really Is — and Why It Matters
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                An MVP is not a "lite version" of your product.{" "}
                <span className="font-semibold">It's a proof of concept built with precision</span> — designed to test
                your idea with real users before heavy investment.
              </p>
              <p>
                At Avaantra Global, we treat MVPs as{" "}
                <span className="font-semibold text-purple-600">business experiments</span>, not just coding projects.
              </p>
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="font-semibold text-xl mb-4">Our goal:</p>
                <p className="text-gray-700">
                  Help you launch quickly, gather real feedback, attract investors, and plan the next phase confidently.
                </p>
              </div>
              <p className="text-center text-xl font-semibold text-purple-600">
                Every day you delay validation is a day of lost data. MVPs help you learn faster — while saving 60% of
                traditional build costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Build For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who We Build MVPs For</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Startups",
                  desc: "Founders with a vision but limited technical bandwidth. You need a fast, affordable way to test your idea.",
                  icon: Rocket,
                },
                {
                  title: "SaaS Founders",
                  desc: "Teams validating market demand before scaling infrastructure or hiring in-house devs.",
                  icon: Target,
                },
                {
                  title: "Digital Agencies",
                  desc: "Agencies building white-label products or testing client ideas with limited budgets or timelines.",
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
              Why Choose Avaantra Global for MVP Development
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Zap, title: "Speed to Market", desc: "6–12 weeks average MVP launch timeline" },
                {
                  icon: Users,
                  title: "Cross-Functional Team",
                  desc: "Product managers, UX designers, engineers, and QA under one roof",
                },
                {
                  icon: Lightbulb,
                  title: "Product-First Thinking",
                  desc: "We build what matters, not everything you can imagine",
                },
                { icon: BarChart3, title: "Outcome-Focused", desc: "Each MVP is tied to measurable success metrics" },
                {
                  icon: Shield,
                  title: "Risk-Free Ownership",
                  desc: "100% IP ownership, secure code repositories, and transparent reporting",
                },
                {
                  icon: Clock,
                  title: "Collaborative Process",
                  desc: "Weekly sprints, daily updates, and biweekly demos",
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

            <Card className="bg-purple-50 border-purple-200 shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 italic">
                  "Avaantra helped us move from concept to investor demo in under 9 weeks — complete with analytics,
                  backend, and clean UI."
                </p>
                <p className="text-purple-600 font-semibold mt-2">— Founder, SaaS Startup</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our MVP Development Services</h2>

            <div className="space-y-4">
              {[
                {
                  service: "MVP Strategy & Roadmap",
                  desc: "Define your core value proposition, MVP scope, and roadmap for validation.",
                  outcome: "Clear direction & prioritized features",
                },
                {
                  service: "UI/UX Design for MVP",
                  desc: "Design wireframes, clickable prototypes, and user flows.",
                  outcome: "Usability-driven experience",
                },
                {
                  service: "MVP Software Development",
                  desc: "Build core backend, frontend, and APIs — scalable & ready for expansion.",
                  outcome: "Live product ready for users",
                },
                {
                  service: "Cloud Setup & DevOps",
                  desc: "Configure cloud hosting, CI/CD pipelines, and deployment.",
                  outcome: "Reliable and cost-optimized infrastructure",
                },
                {
                  service: "Analytics & Feedback Loops",
                  desc: "Integrate Mixpanel, GA4, or custom dashboards to capture insights.",
                  outcome: "Data for next version decisions",
                },
                {
                  service: "Post-MVP Support & Optimization",
                  desc: "Iterate based on early feedback, fix bugs, and enhance performance.",
                  outcome: "Stronger retention and stability",
                },
              ].map((item, idx) => (
                <Card key={idx} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-purple-600 mb-2">{item.service}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                      <div className="md:w-64">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Proven MVP Development Process</h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              We've refined our process over 100+ product launches — predictable, transparent, and results-oriented.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "Step 1",
                  title: "Discovery & Validation",
                  desc: "We help you define the MVP goals, user personas, and success metrics.",
                  items: ["Market & competitor analysis", "Feature prioritization", "MVP success metrics"],
                  deliverable: "MVP Blueprint Document",
                },
                {
                  step: "Step 2",
                  title: "Design & Prototyping",
                  desc: "Before development begins, we create clickable wireframes to visualize user journeys and core screens.",
                  items: ["UX flows & wireframes", "Low/high-fidelity prototypes", "User testing feedback"],
                  deliverable: "Interactive Figma Prototype",
                },
                {
                  step: "Step 3",
                  title: "Agile MVP Development",
                  desc: "We build your MVP using a lean, sprint-based agile model.",
                  items: [
                    "Frontend (React, Vue, or Flutter)",
                    "Backend (Node.js, Python, .NET)",
                    "API integrations",
                    "QA testing per sprint",
                  ],
                  deliverable: "Working MVP (Deployed & Tested)",
                },
                {
                  step: "Step 4",
                  title: "Launch & Measure",
                  desc: "We set up analytics, deploy to production, and monitor key metrics.",
                  items: ["CI/CD deployment", "Error monitoring", "Usage and conversion tracking"],
                  deliverable: "Live MVP with insights dashboard",
                },
                {
                  step: "Step 5",
                  title: "Post-MVP Optimization & Scaling",
                  desc: "We help you analyze data and plan your next version.",
                  items: [
                    "Analyze real user data",
                    "Plan new features or redesigns",
                    "Prepare for SaaS architecture or scale-up",
                  ],
                  deliverable: "Optimization Roadmap",
                },
              ].map((process, idx) => (
                <Card key={idx} className="shadow-lg">
                  <CardHeader className="bg-purple-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm text-purple-600 font-semibold">{process.step}</p>
                        <CardTitle className="text-xl">{process.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">{process.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {process.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-purple-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-purple-700">Deliverable: {process.deliverable}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You Get (Deliverables)</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "MVP Blueprint Document",
                "UX Wireframes & Clickable Prototype",
                "Working MVP (Frontend + Backend + Database)",
                "Admin Dashboard (if required)",
                "Analytics Integration",
                "Hosting & Deployment Setup",
                "Post-launch Support (1–3 months)",
                "Complete Source Code & Documentation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <FileCode className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Tech Stack Expertise</h2>
              <p className="text-lg text-gray-700">We select technology based on your product goals, not trends.</p>
            </div>

            <div className="space-y-4">
              {[
                { category: "Frontend", tech: "React.js • Angular • Vue.js • Flutter • React Native" },
                { category: "Backend", tech: "Node.js • Python (Django/FastAPI) • Java • .NET" },
                { category: "Cloud & DevOps", tech: "AWS • Azure • GCP • Docker • Kubernetes • Terraform" },
                { category: "Database", tech: "PostgreSQL • MongoDB • MySQL • Redis" },
                { category: "Analytics", tech: "GA4 • Mixpanel • Segment • Hotjar" },
              ].map((item, idx) => (
                <Card key={idx} className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <h3 className="font-semibold text-lg text-purple-600 md:w-32">{item.category}:</h3>
                      <p className="text-gray-700">{item.tech}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Case Studies / Proof</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "SaaS Startup (UK)",
                  challenge: "Needed MVP for fundraising",
                  solution: "Built SaaS MVP with analytics dashboard in 10 weeks",
                  result: "Raised £600K Seed round, onboarded 1,200 users in 3 months",
                },
                {
                  title: "FinTech Product (UAE)",
                  challenge: "Compliance-heavy payment system prototype",
                  solution: "Designed, validated, and deployed MVP with secure APIs",
                  result: "Secured pilot with 2 enterprise clients",
                },
                {
                  title: "EdTech Startup (India)",
                  challenge: "Founder had concept but no design direction",
                  solution: "Discovery + MVP with gamified learning experience",
                  result: "35% higher engagement vs benchmark apps",
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Lock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Security & IP Assurance</h2>
              <p className="text-lg text-gray-700">We take data protection seriously — from day one.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "NDA signed before access or code sharing",
                "Secure code repositories under your control",
                "GDPR and SOC2 compliant workflows",
                "Full IP ownership guaranteed at project handoff",
                "Post-launch maintenance with version control",
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "What's the average timeline for MVP development?",
                  a: "Most MVPs are delivered within 6–12 weeks, depending on scope and integrations.",
                },
                {
                  q: "How much does an MVP cost?",
                  a: "Depends on complexity — typically 25–40% of full product cost. You get fixed estimates before kickoff.",
                },
                {
                  q: "Do I need a technical co-founder?",
                  a: "No. Our CTO-as-a-Service model provides full technical leadership during and after MVP.",
                },
                {
                  q: "How do you define the MVP scope?",
                  a: "We identify essential features needed to validate your core hypothesis — no extras, no waste.",
                },
                {
                  q: "Will I own the code and design files?",
                  a: "Absolutely. All assets and source code are transferred to you.",
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Build the MVP That Proves Your Idea Works.</h2>
            <p className="text-xl mb-8 text-purple-100">
              We help you design, develop, and launch your MVP faster — with the confidence that it's built for scale
              and success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Schedule MVP Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Get Cost & Timeline
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-purple-100">
              <span>20+ Years Expertise</span>
              <span>•</span>
              <span>100+ MVPs Delivered</span>
              <span>•</span>
              <span>100% IP Ownership</span>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
