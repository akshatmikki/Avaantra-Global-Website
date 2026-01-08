"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ScrollToTop from "@/components/scroll-to-top"
import {
  CheckCircle2,
  Target,
  Users,
  Lightbulb,
  BarChart3,
  FileText,
  Lock,
  ArrowRight,
  Search,
  Layers,
} from "lucide-react"

export default function ProductDiscoveryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Start Smart: Define, Validate, and Build What Really Matters
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 text-pretty">
              Turn ideas into actionable roadmaps. We help startups and digital agencies discover, plan, and validate
              the right product before writing a single line of code.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Book Discovery Call
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Request Product Blueprint
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What It Means Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              What Product Discovery & Roadmapping Really Means
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center text-pretty">
              Every successful product begins with clarity.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The biggest reason most startups fail? They build the wrong thing. They start coding without understanding
              user needs, market fit, or technical feasibility.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              That's where Avaantra's Product Discovery & Roadmapping comes in — a structured process that combines
              business insight, design thinking, and technical strategy to ensure your idea turns into a product that
              truly works.
            </p>

            <div className="bg-purple-50 rounded-lg p-8 mb-6">
              <h3 className="text-xl font-semibold mb-4">You get answers to critical questions like:</h3>
              <ul className="space-y-3">
                {[
                  "What should we build first?",
                  "Who are our target users?",
                  "What's the MVP scope?",
                  "How do we validate before investing big?",
                  "What's the right tech stack for scalability?",
                ].map((question, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{question}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xl font-semibold text-center text-purple-600">
              Discovery isn't a delay. It's the smartest shortcut you'll ever take.
            </p>
          </div>
        </div>
      </section>

      {/* Why Startups Need Discovery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why Startups & Agencies Need Discovery</h2>
            <p className="text-xl text-gray-700 mb-8 text-center font-semibold">Because guessing is expensive.</p>
            <p className="text-lg text-gray-700 mb-8 text-center">
              For startups, discovery prevents wasted funding on unvalidated ideas. For agencies, it ensures your
              client's projects stay aligned, within scope, and launch-ready.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Target, text: "Unclear product-market fit" },
                { icon: BarChart3, text: "MVPs that take too long or miss core needs" },
                { icon: FileText, text: "Rework caused by weak planning" },
                { icon: Users, text: "Misalignment between business, design, and tech teams" },
              ].map((item, idx) => (
                <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <item.icon className="h-8 w-8 text-purple-600 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-lg text-center mt-8 text-gray-700">
              Discovery fixes all that — giving you a shared vision, clear plan, and predictable build path.
            </p>
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Product Discovery Services</h2>

            <div className="space-y-4">
              {[
                {
                  service: "Business & Market Research",
                  description: "Identify user problems, market trends, and opportunities.",
                },
                {
                  service: "User Persona Development",
                  description: "Define who your target users are and what motivates them.",
                },
                { service: "Value Proposition Design", description: "Align features with real customer pain points." },
                {
                  service: "Feature Prioritization & MVP Scope",
                  description: "Decide what to build now vs later for maximum ROI.",
                },
                {
                  service: "Technology Feasibility Assessment",
                  description: "Evaluate the best tech stack and architecture options.",
                },
                {
                  service: "Product Roadmap Creation",
                  description: "Visual timeline of development phases, milestones, and dependencies.",
                },
                {
                  service: "Prototyping & UX Validation",
                  description: "Create clickable prototypes to test before coding.",
                },
              ].map((item, idx) => (
                <Card key={idx} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-purple-600 mb-2">{item.service}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-lg text-gray-700 mt-8">
              Each output becomes part of your{" "}
              <span className="font-semibold text-purple-600">Product Blueprint Document</span> — the foundation of your
              MVP and future growth.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Deliverables You'll Receive</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              When you complete discovery with Avaantra, you don't just get advice — you get tangible assets:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Product Vision Statement – clear definition of purpose and audience",
                "Feature List & Prioritization Matrix – what to build first",
                "User Persona Profiles – detailed behavior-driven personas",
                "Information Architecture (IA) – how screens and flows connect",
                "Technical Feasibility Report – recommended stack and scalability plan",
                "Interactive Prototype – visual representation of MVP",
                "Development Roadmap – phased delivery schedule with timelines and KPIs",
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

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose Avaantra Global for Discovery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Cross-Disciplinary Team",
                  desc: "Strategy + UX + Tech leadership under one roof",
                },
                { icon: Search, title: "Market-Led Approach", desc: "Every feature mapped to actual user needs" },
                { icon: Lightbulb, title: "Collaborative Workshops", desc: "We co-create, not just consult" },
                {
                  icon: ArrowRight,
                  title: "Faster Validation",
                  desc: "Go from idea to validated roadmap in 2–4 weeks",
                },
                {
                  icon: BarChart3,
                  title: "Data-Driven Insights",
                  desc: "Business and technical decisions backed by data",
                },
                {
                  icon: Layers,
                  title: "Scalable Outcomes",
                  desc: "Discovery outputs feed directly into MVP development",
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

            <p className="text-xl text-center mt-8 text-gray-700 font-semibold">
              We don't just define "what to build." We define why it matters and how it wins.
            </p>
          </div>
        </div>
      </section>

      {/* Discovery Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Avaantra Discovery Process</h2>

            <div className="space-y-8">
              {[
                {
                  step: "Step 1",
                  title: "Initial Consultation & Vision Mapping",
                  desc: 'We begin by understanding your goals — the "why" behind your idea.',
                  items: ["Define business objectives", "Clarify value proposition", "Identify early success metrics"],
                },
                {
                  step: "Step 2",
                  title: "User & Market Research",
                  desc: "We analyze the target market, competitors, and audience behaviors.",
                  items: ["Market gap analysis", "Competitor feature matrix", "User research interviews or surveys"],
                },
                {
                  step: "Step 3",
                  title: "Product Ideation & Prioritization Workshop",
                  desc: "Together, we brainstorm product features, rank priorities, and define the MVP scope.",
                  items: [
                    "Feature ideation sessions",
                    "MoSCoW or RICE prioritization frameworks",
                    "MVP definition and release phases",
                  ],
                },
                {
                  step: "Step 4",
                  title: "UX Mapping & Wireframing",
                  desc: "Our design team visualizes user journeys, flow diagrams, and wireframes.",
                  items: ["User flow diagrams", "Low-fidelity wireframes", "Clickable prototype"],
                },
                {
                  step: "Step 5",
                  title: "Technical Feasibility & Architecture Outline",
                  desc: "Our architects review the technical scope and select scalable technology stacks.",
                  items: ["API/integration planning", "Infrastructure design", "Cloud and DevOps recommendations"],
                },
                {
                  step: "Step 6",
                  title: "Product Roadmap Delivery",
                  desc: "We deliver a detailed product roadmap with milestones, budget estimate, and timeline.",
                  items: ["Visual roadmap (Gantt-style or Kanban)", "Resource plan", "Risk analysis and mitigation"],
                },
              ].map((process, idx) => (
                <Card key={idx} className="shadow-lg">
                  <CardHeader className="bg-purple-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
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
                    <ul className="space-y-2">
                      {process.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-purple-100 rounded-lg p-6 mt-8 text-center">
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-purple-600">Outcome:</span> You walk away with a complete product blueprint, ready
                for design, MVP development, and investor presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Case Studies / Results</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "FinTech MVP (USA)",
                  challenge: "Founder had a concept but no clarity on core features or compliance scope",
                  solution: "Avaantra discovery defined MVP features, user roles, and API roadmap",
                  outcome: "MVP built in 10 weeks, raised $800k pre-seed funding",
                },
                {
                  title: "EdTech Platform (India)",
                  challenge: "Startup struggled with student engagement",
                  solution: "Conducted product discovery and user journey analysis; redesigned UX flow",
                  outcome: "Retention improved by 42%, course completion +30%",
                },
                {
                  title: "Digital Agency (UK)",
                  challenge: "Clients often changed scope mid-project",
                  solution: "Implemented a discovery-first process to align deliverables",
                  outcome: "Reduced rework by 65%, increased profit margins by 25%",
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
                      <p className="font-semibold text-sm text-gray-500 mb-1">Outcome:</p>
                      <p className="text-purple-600 font-semibold">{study.outcome}</p>
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
              <Lock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Security & Assurance</h2>
              <p className="text-lg text-gray-700">Every engagement starts with confidentiality and trust.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "NDA signed before any discovery session",
                "IP ownership transferred upon completion",
                "Secure cloud-based collaboration (Notion, Miro, Figma, Jira)",
                "ISO 27001-aligned information management",
                "GDPR-compliant data handling",
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
                  q: "How long does a product discovery phase take?",
                  a: "Usually 2–4 weeks, depending on complexity and depth of research.",
                },
                {
                  q: "Is it mandatory before MVP?",
                  a: "We highly recommend it — discovery reduces cost overruns and delays by up to 60%.",
                },
                {
                  q: "Who participates in discovery?",
                  a: "Your stakeholders (founders, PMs, marketers) + our strategists, UX designers, and architects.",
                },
                {
                  q: "Can discovery help attract investors?",
                  a: "Absolutely. You receive a professional product roadmap, architecture plan, and financial estimate — perfect for pitch decks.",
                },
                {
                  q: "How is pricing structured?",
                  a: "Fixed cost per phase, based on scope — fully transparent before starting.",
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Know Before You Build. Win Before You Launch.</h2>
            <p className="text-xl mb-8 text-purple-100">
              Partner with Avaantra for a proven product discovery process that reduces risk, saves cost, and delivers
              clarity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Schedule Your Discovery Session
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Get Free Product Blueprint
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-purple-100">
              <span>20+ Years of Experience</span>
              <span>•</span>
              <span>100+ Products Validated</span>
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
