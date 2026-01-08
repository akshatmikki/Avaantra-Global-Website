"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Check,
  Calendar,
  MessageSquare,
  Brain,
  Lightbulb,
  Settings,
  Search,
  PenTool,
  Eye,
  FileText,
  BarChart3,
  Layers,
  Zap,
} from "lucide-react"
import Link from "next/link"
import ScrollToTop from "@/components/scroll-to-top"

export default function UXUIDesignPage() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 px-6 py-20 text-white md:py-32">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <PenTool className="h-4 w-4" />
              <span>User-Centered Design</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Search className="h-4 w-4" />
              <span>Data-Driven Research</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              <span>Conversion Optimized</span>
            </div>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Design That Converts. Experiences That Scale.
          </h1>

          <p className="mb-8 max-w-3xl text-balance text-lg text-purple-100 md:text-xl">
            We help you build products users love — powered by UX research, data-driven design, and human behavior
            insight.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              <Calendar className="mr-2 h-5 w-5" />
              Book Design Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <MessageSquare className="mr-2 h-5 w-5" />
              Request UX Audit
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </section>

      {/* Why Great UX/UI Section */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold text-gray-900 md:text-4xl">
              Why Great UX/UI Is the Real Growth Engine
            </h2>
            <p className="text-xl font-semibold text-purple-600">
              A beautiful product isn't enough. A usable one drives revenue.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Most startups and SaaS companies lose users not because of poor tech — but because the experience doesn't
              connect.
            </p>
            <p>That's where Avaantra's UX/UI and Product Research team steps in.</p>
            <p>
              We go beyond design trends to create{" "}
              <strong>conversion-optimized, user-validated, growth-focused interfaces</strong> that turn first-time
              users into lifelong customers.
            </p>
            <p className="text-xl font-semibold text-purple-700">
              Design isn't decoration. It's the difference between "looks nice" and "works great."
            </p>
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="bg-gray-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            What We Offer — UX/UI & Product Research Services
          </h2>

          <div className="overflow-x-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Search,
                  service: "UX Research & Discovery",
                  description: "User interviews, surveys, journey mapping, and behavior analytics.",
                  outcome: "Product decisions backed by data.",
                },
                {
                  icon: Layers,
                  service: "Information Architecture (IA)",
                  description: "Define structure, hierarchy, and navigation for seamless usability.",
                  outcome: "Simplified, intuitive user flow.",
                },
                {
                  icon: FileText,
                  service: "Wireframing & Prototyping",
                  description: "Visualize the product flow before coding begins.",
                  outcome: "Reduced rework and faster validation.",
                },
                {
                  icon: PenTool,
                  service: "UI Design & Design Systems",
                  description: "High-fidelity interfaces, responsive layouts, and reusable components.",
                  outcome: "Brand consistency and faster scaling.",
                },
                {
                  icon: Eye,
                  service: "Usability Testing & Optimization",
                  description: "Validate real user experience and identify friction points.",
                  outcome: "Higher conversion and retention rates.",
                },
                {
                  icon: Zap,
                  service: "UX for SaaS & Web Apps",
                  description: "Specialized UX for subscription-based or multi-tenant apps.",
                  outcome: "Better activation and lower churn.",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6 shadow-lg transition-shadow hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.service}</h3>
                  <p className="mb-4 text-gray-600">{item.description}</p>
                  <p className="font-semibold text-purple-700">
                    <Check className="mr-2 inline h-4 w-4" />
                    {item.outcome}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Avaantra */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Why Startups & SaaS Teams Choose Avaantra
          </h2>

          <p className="mb-12 text-center text-xl text-gray-700">
            We combine psychology, technology, and storytelling into every pixel.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "Data-Driven Design",
                text: "Every decision backed by analytics and user insight.",
              },
              { icon: Lightbulb, title: "Business-First Thinking", text: "We align design with revenue, not vanity." },
              {
                icon: Settings,
                title: "Full-Stack Collaboration",
                text: "UX, UI, engineering, and marketing teams work together.",
              },
              { icon: Search, title: "User Validation at Every Step", text: "Prototype → Test → Improve → Launch." },
              {
                icon: Layers,
                title: "Brand-Aligned Design Systems",
                text: "We create scalable systems, not static layouts.",
              },
              {
                icon: Zap,
                title: "Cross-Platform Expertise",
                text: "SaaS dashboards, mobile apps, enterprise portals.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <item.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-purple-50 p-8">
            <blockquote className="text-center">
              <p className="mb-4 text-lg italic text-gray-700">
                "Avaantra's design team didn't just make our product look good — they made it make sense. Engagement
                went up 45% in three months."
              </p>
              <footer className="font-semibold text-purple-700">— CEO, B2B SaaS Company</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-gray-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Our Proven UX/UI Design Process
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Our process balances creative exploration with business validation.
          </p>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Research & Discovery",
                description:
                  "We start with empathy. Understanding your users, their frustrations, and what success looks like.",
                points: [
                  "Stakeholder interviews",
                  "User personas & empathy maps",
                  "Competitor analysis",
                  "UX KPIs definition",
                ],
                deliverable: "UX Research Report + Persona Profiles",
              },
              {
                step: 2,
                title: "Information Architecture & User Flow",
                description: "We translate research into navigation and structure.",
                points: ["User journey maps", "Site/app information hierarchy", "Flow diagrams and screen connections"],
                deliverable: "IA Map + User Journey Flow",
              },
              {
                step: 3,
                title: "Wireframing & Prototyping",
                description: "We bring your product vision to life in low- and high-fidelity mockups.",
                points: ["Clickable wireframes", "Prototypes for testing", "Multiple design iterations"],
                deliverable: "Interactive Prototype (Figma or Adobe XD)",
              },
              {
                step: 4,
                title: "UI Design & Design System Creation",
                description: "We finalize visual identity — colors, typography, components, interactions.",
                points: [
                  "High-fidelity screens",
                  "Responsive UI for all devices",
                  "Design systems & reusable libraries",
                ],
                deliverable: "UI Kit + Final Design Mockups",
              },
              {
                step: 5,
                title: "Usability Testing & Iteration",
                description: "We validate designs with real users before development begins.",
                points: ["A/B testing", "Heatmaps and session replays", "Feedback analysis"],
                deliverable: "UX Test Report + Improvement Plan",
              },
              {
                step: 6,
                title: "Developer Handoff & Support",
                description:
                  "We provide design documentation, style guides, and collaborate with developers for pixel-perfect implementation.",
                points: ["Figma dev-ready specs", "UI assets export", "QA and post-launch review"],
                deliverable: "Complete Design Package + Implementation Guide",
              },
            ].map((process) => (
              <Card key={process.step} className="p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold text-white">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">{process.title}</h3>
                    <p className="mb-4 text-gray-700">{process.description}</p>
                    <ul className="mb-4 space-y-2">
                      {process.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-purple-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-lg bg-purple-50 p-4">
                      <p className="font-semibold text-purple-700">
                        <FileText className="mr-2 inline h-5 w-5" />
                        Deliverable: {process.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Deliverables You'll Receive
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "UX Research Report",
              "User Personas & Journey Maps",
              "Information Architecture (IA)",
              "Wireframes (Low + High Fidelity)",
              "Clickable Prototype",
              "Final UI Designs (Figma/Adobe XD)",
              "Design System / UI Kit",
              "Usability Test Reports",
              "Developer Handoff Files",
              "Post-Launch UX Optimization Plan",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-purple-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Focus Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            UX/UI for SaaS Products (Special Focus)
          </h2>

          <p className="mb-8 text-center text-lg text-gray-700">
            SaaS is not just "another website." It's a living product with daily user interactions.
          </p>

          <p className="mb-8 text-center text-gray-700">
            We specialize in UX for subscription-based and B2B SaaS systems that demand:
          </p>

          <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Intuitive onboarding",
              "Role-based dashboards",
              "Subscription and billing UX",
              "Retention-oriented flows",
              "Data visualization and analytics UX",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Check className="h-5 w-5 shrink-0 text-purple-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-xl font-bold text-gray-900">Example UX Deliverables for SaaS:</h3>
            <ul className="space-y-3">
              {[
                "Admin/User dashboard design",
                "Analytics or KPI module design",
                "Empty state UX (for first-time users)",
                "Pricing page conversion optimization",
                "In-app onboarding flows",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-purple-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/saas-development" className="font-semibold text-purple-600 hover:text-purple-700">
                Learn More: SaaS Development Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Research */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Product Research & Validation
          </h2>

          <p className="mb-12 text-center text-xl font-semibold text-purple-600">
            We don't rely on opinions — we rely on evidence.
          </p>

          <div className="mb-8 rounded-lg bg-gray-50 p-8">
            <p className="mb-6 text-lg text-gray-700">
              Our product research process combines quantitative analytics with qualitative insights:
            </p>
            <ul className="space-y-3">
              {[
                "Heatmaps & click tracking",
                "Surveys & interviews",
                "Feature desirability studies",
                "Funnel analysis (activation → retention → referral)",
                "Usability metrics (task completion, time-on-task, drop-offs)",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <BarChart3 className="mt-1 h-5 w-5 shrink-0 text-purple-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-purple-600 p-8 text-center text-white">
            <p className="mb-2 font-semibold">Deliverable:</p>
            <p className="text-lg">Product Research Report + Design Recommendations</p>
            <p className="mt-4 text-purple-100">
              You'll know exactly which features users want — before spending a dollar building them.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-gray-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Engagement Models
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                model: "UX/UI Design Sprint",
                bestFor: "Startups validating early ideas.",
                why: "Launch-ready designs in 2–3 weeks.",
              },
              {
                model: "End-to-End Product Design",
                bestFor: "SaaS or web apps needing full lifecycle design.",
                why: "Research → UX → UI → Testing.",
              },
              {
                model: "UX Audit & Redesign",
                bestFor: "Products with poor engagement metrics.",
                why: "Measurable improvement in conversion.",
              },
              {
                model: "Dedicated Design Team",
                bestFor: "Agencies managing multiple design clients.",
                why: "Scale fast, predictable delivery.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-purple-600">{item.model}</h3>
                <div className="mb-3">
                  <p className="mb-1 text-sm font-semibold uppercase text-gray-500">Best For</p>
                  <p className="text-gray-700">{item.bestFor}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase text-gray-500">Why It Works</p>
                  <p className="font-medium text-gray-900">{item.why}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Case Studies / Results
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "SaaS Platform (US)",
                challenge: "Low onboarding completion rate (28%).",
                solution: "Redesigned onboarding UX with progressive disclosure.",
                result: "Completion increased to 78%, support tickets down 35%.",
              },
              {
                title: "FinTech App (UAE)",
                challenge: "Users found data visualization complex.",
                solution: "Simplified dashboard layout + contextual tooltips.",
                result: "Session duration up 62%, satisfaction score +4.2⭐️.",
              },
              {
                title: "EdTech Portal (India)",
                challenge: "Students dropped off mid-course.",
                solution: "Gamified UX with progress tracking and reminders.",
                result: "Course completion improved 40%.",
              },
            ].map((study, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <div className="bg-purple-600 p-6 text-white">
                  <h3 className="text-2xl font-bold">
                    Case {index + 1} – {study.title}
                  </h3>
                </div>
                <div className="grid gap-6 p-8 md:grid-cols-3">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase text-gray-500">Challenge</p>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase text-gray-500">Solution</p>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase text-gray-500">Result</p>
                    <p className="font-semibold text-purple-600">{study.result}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Industries We Serve
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { industry: "SaaS", solution: "Role-based dashboards & onboarding optimization." },
              { industry: "FinTech", solution: "Data visualization and simplified transaction UX." },
              { industry: "HealthTech", solution: "HIPAA-compliant interfaces & accessibility." },
              { industry: "EdTech", solution: "Learning UX for engagement and retention." },
              { industry: "E-commerce", solution: "High-converting product and checkout flows." },
              { industry: "Agencies", solution: "White-label UX/UI design for client products." },
            ].map((item, index) => (
              <Card key={index} className="p-6 shadow-md">
                <h3 className="mb-3 text-xl font-bold text-purple-600">{item.industry}</h3>
                <p className="text-gray-600">{item.solution}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Tools & Technologies
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="mb-2 font-semibold text-gray-900">Research & Prototyping:</p>
              <p className="text-gray-700">Figma • Miro • Maze • Hotjar • FigJam</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="mb-2 font-semibold text-gray-900">Analytics:</p>
              <p className="text-gray-700">Google Analytics • Mixpanel • Amplitude</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="mb-2 font-semibold text-gray-900">UI Design:</p>
              <p className="text-gray-700">Adobe XD • Figma • Sketch</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="mb-2 font-semibold text-gray-900">Collaboration:</p>
              <p className="text-gray-700">Notion • Slack • Zeplin</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="mb-2 font-semibold text-gray-900">Testing:</p>
              <p className="text-gray-700">UserTesting.com • PlaybookUX</p>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            We use tools your developers already love — ensuring smooth handoff and implementation.
          </p>
        </div>
      </section>

      {/* Security */}
      <section className="bg-gray-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Security & IP Protection
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "NDAs signed before access to any data.",
              "100% ownership of designs and research.",
              "Cloud-stored assets on secure systems.",
              "Access-controlled collaboration spaces.",
              "ISO and GDPR-aligned workflow.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Check className="mt-1 h-5 w-5 shrink-0 text-purple-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What's the difference between UX and UI?",
                a: "UX focuses on usability and user flow. UI is the visual layer. Together, they create the full product experience.",
              },
              {
                q: "How long does the UX/UI design process take?",
                a: "Typically 4–8 weeks depending on project size and user testing cycles.",
              },
              {
                q: "Do you handle product research too?",
                a: "Yes. We run discovery, user interviews, and data analytics before designing.",
              },
              {
                q: "Can you redesign our existing SaaS product?",
                a: "Absolutely. We conduct a UX audit, identify friction points, and redesign for better engagement.",
              },
              {
                q: "What's included in usability testing?",
                a: "We test with real users, record sessions, measure completion time, and analyze feedback.",
              },
              {
                q: "Will your designs be developer-ready?",
                a: "Yes. We deliver pixel-perfect files with component libraries and dev notes.",
              },
              {
                q: "Do you provide branding too?",
                a: "Yes, as part of UI design, we can create logos, color palettes, and typography systems.",
              },
              {
                q: "Do you offer white-label design services?",
                a: "Yes — agencies can deliver our work under their own brand.",
              },
              {
                q: "How do you measure design success?",
                a: "We track metrics like task completion, NPS, conversion rate, and activation.",
              },
              {
                q: "Can you work with our in-house dev team?",
                a: "Yes. Our designers collaborate daily with your developers using Figma, Slack, and Jira.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 shadow-md">
                <h3 className="mb-3 text-lg font-bold text-gray-900">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            Your Product Deserves More Than a Pretty Interface.
          </h2>

          <p className="mb-8 text-balance text-lg text-purple-100 md:text-xl">
            Partner with Avaantra to build digital experiences that convert, engage, and grow — backed by real user
            research.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Design Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <MessageSquare className="mr-2 h-5 w-5" />
              Request UX Audit
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-100">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>100+ Products Designed</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>User-Tested Frameworks</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>100% IP Ownership</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
