"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Zap,
  Award,
  Shield,
  Globe,
  ChevronRight,
  Star,
  Calendar,
  MessageSquare,
  Rocket,
  LineChart,
  Search,
  MousePointerClick,
  MessageCircle,
  Trophy,
  UserCheck,
} from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function DigitalMarketingPage() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-background">
      {/* Hero Section - Modified Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 px-4 py-20 text-white lg:py-32">
        <div className="absolute inset-0 bg-[url('/abstract-network.png')] opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <Badge className="bg-white/20 text-white hover:bg-white/30">
                <Rocket className="mr-2 h-3 w-3" />
                ROI-Focused Marketing
              </Badge>
              <h1 className="text-balance text-4xl font-bold leading-tight lg:text-6xl">
                Turn Clicks into Customers — with Predictable Digital Growth
              </h1>
              <p className="text-pretty text-lg text-purple-100 lg:text-xl">
                We help you attract, convert, and scale your online presence through intelligent, ROI-focused marketing
                strategies tailored for SaaS, startups, and digital agencies.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                  <Calendar className="mr-2 h-5 w-5" />
                  Request Free Growth Audit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Talk to a Marketing Strategist
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Traffic</span>
                    <span className="flex items-center gap-2 text-2xl font-bold text-green-300">
                      <TrendingUp className="h-6 w-6" />
                      +156%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Conversions</span>
                    <span className="flex items-center gap-2 text-2xl font-bold text-green-300">
                      <BarChart3 className="h-6 w-6" />
                      +94%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">ROI</span>
                    <span className="flex items-center gap-2 text-2xl font-bold text-green-300">
                      <Target className="h-6 w-6" />
                      +238%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b bg-white px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Award className="h-8 w-8 text-purple-600" />
              <p className="text-sm font-semibold">22+ Years</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Trophy className="h-8 w-8 text-purple-600" />
              <p className="text-sm font-semibold">100+ Projects</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Users className="h-8 w-8 text-purple-600" />
              <p className="text-sm font-semibold">Google Partner</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Shield className="h-8 w-8 text-purple-600" />
              <p className="text-sm font-semibold">ISO-Certified</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Globe className="h-8 w-8 text-purple-600" />
              <p className="text-sm font-semibold">Global Reach</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Star className="h-8 w-8 text-purple-600" />
              <p className="text-sm font-semibold">Transparent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Marketing Still Wins */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Why Digital Marketing Still Wins</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              In today's digital chaos, attention is the new currency. But most brands burn budgets chasing impressions
              — not impact.
            </p>
            <p className="text-xl font-semibold text-foreground">
              At Avaantra Global, we take a different path. We don't sell ads. We sell outcomes.
            </p>
            <p>
              Our team blends data, storytelling, and strategy to build digital ecosystems that generate measurable
              growth — not vanity metrics.
            </p>
            <blockquote className="border-l-4 border-purple-600 bg-purple-50 py-4 pl-6 text-xl font-medium italic text-purple-900">
              "The goal isn't traffic. It's traction."
            </blockquote>
            <p>
              Whether you're a SaaS startup preparing for funding or an agency scaling your client delivery, we design
              strategies that make marketing predictable, profitable, and scalable.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services - Modified Card Layout */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Our Core Digital Marketing Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive solutions designed to drive measurable growth</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: LineChart,
                title: "Performance Marketing",
                description: "Data-backed paid media campaigns across Google, Meta, and LinkedIn.",
                outcome: "Lower CAC and higher ROAS.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: Search,
                title: "SEO Services",
                description: "Organic growth strategies that improve visibility, rankings, and trust.",
                outcome: "Long-term traffic and authority.",
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                icon: MousePointerClick,
                title: "Conversion Rate Optimization (CRO)",
                description: "UX, A/B testing, and behavior analytics to maximize conversions.",
                outcome: "More sales from the same traffic.",
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
              {
                icon: MessageCircle,
                title: "Online Reputation Management (ORM)",
                description: "Manage, protect, and enhance your brand reputation online.",
                outcome: "Stronger trust, better perception.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: Rocket,
                title: "SaaS Marketing Services",
                description: "Full-stack SaaS demand generation for subscription growth.",
                outcome: "Reduced churn, increased MRR.",
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                icon: UserCheck,
                title: "Personal Branding Services",
                description: "Build a strong thought-leadership presence across digital channels.",
                outcome: "Influence, visibility, and trust.",
                color: "text-pink-600",
                bg: "bg-pink-50",
              },
            ].map((service, index) => (
              <Card key={index} className="group border-2 p-6 transition-all hover:border-purple-600 hover:shadow-xl">
                <div className={`mb-4 inline-flex rounded-lg ${service.bg} p-3`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                <div className="flex items-start gap-2 rounded-lg bg-green-50 p-3">
                  <Check className="h-4 w-4 shrink-0 text-green-600" />
                  <p className="text-sm font-medium text-green-800">{service.outcome}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Avaantra */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Why Choose Avaantra for Digital Marketing</h2>
            <p className="text-lg text-muted-foreground">
              We blend marketing psychology with engineering precision — because growth isn't luck, it's architecture.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Predictable ROI Framework",
                description: "Every campaign tied to measurable KPIs.",
              },
              {
                icon: Zap,
                title: "Performance + SEO + CRO Integration",
                description: "Unified growth system, not isolated tactics.",
              },
              {
                icon: Award,
                title: "22+ Years of Experience",
                description: "Strategy backed by execution excellence.",
              },
              {
                icon: Users,
                title: "Custom ICP Targeting",
                description: "Every plan mapped to your audience's pain, behavior, and goals.",
              },
              {
                icon: Globe,
                title: "Global Reach, Local Execution",
                description: "Multi-market campaigns optimized by geography.",
              },
              {
                icon: BarChart3,
                title: "Transparent Reporting",
                description: "Real-time dashboards — you see what we see.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  <div className="rounded-full bg-purple-100 p-3">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border-l-4 border-purple-600 bg-purple-50 p-8">
            <div className="flex gap-4">
              <div className="shrink-0 text-4xl">"</div>
              <div>
                <p className="mb-4 text-lg italic text-purple-900">
                  Avaantra's marketing team turned our ad spend into a measurable acquisition engine. Within 90 days,
                  our CAC dropped by 38%.
                </p>
                <p className="font-semibold text-purple-900">— CMO, SaaS Startup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Modified Timeline Design */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Our Digital Marketing Process</h2>
            <p className="text-lg text-muted-foreground">
              Predictable growth starts with a clear process. Here's how we make it work every single time.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Deep Discovery & ICP Mapping",
                description:
                  "We dive into your market, audience, and competitors to understand your exact positioning.",
                items: ["Market research", "Audience persona definition", "Channel benchmarking"],
                deliverable: "Marketing Opportunity Blueprint",
              },
              {
                step: "2",
                title: "Strategy & Funnel Design",
                description: "We build a full-funnel strategy aligned with your business model.",
                items: [
                  "Paid + organic integration",
                  "Channel prioritization (SEO, Paid, Email, Social)",
                  "Campaign messaging matrix",
                ],
                deliverable: "90-Day Growth Plan",
              },
              {
                step: "3",
                title: "Campaign Execution",
                description: "Our multidisciplinary team deploys targeted campaigns across channels.",
                items: [
                  "Ad creation, audience targeting, automation setup",
                  "SEO optimization and content production",
                  "Conversion tracking",
                ],
                deliverable: "Campaign Launch Dashboard",
              },
              {
                step: "4",
                title: "Optimization & Experimentation",
                description: "We analyze user behavior and performance data weekly.",
                items: [
                  "A/B testing for creatives and landing pages",
                  "Conversion optimization",
                  "Budget reallocation for ROI",
                ],
                deliverable: "Monthly Performance Report",
              },
              {
                step: "5",
                title: "Scale & Retain",
                description: "Once your funnel converts profitably, we scale.",
                items: [
                  "New channel expansion",
                  "Automation for retention and upsell",
                  "Advanced analytics integration",
                ],
                deliverable: "Growth Acceleration Framework",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="flex gap-6">
                  <div className="flex shrink-0 flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-xl font-bold text-white">
                      {process.step}
                    </div>
                    {index !== 4 && (
                      <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-indigo-600" />
                    )}
                  </div>
                  <Card className="flex-1 border-l-4 border-purple-600 p-6">
                    <h3 className="mb-3 text-xl font-bold">{process.title}</h3>
                    <p className="mb-4 text-muted-foreground">{process.description}</p>
                    <ul className="mb-4 space-y-2">
                      {process.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 shrink-0 text-purple-600" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 rounded-lg bg-purple-50 px-4 py-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-900">Deliverable: {process.deliverable}</span>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for You */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Digital Marketing That's Built for You</h2>
            <p className="text-lg text-muted-foreground">
              We design strategies you can actually execute — even with limited teams or budgets.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-t-4 border-t-blue-600 p-8">
              <h3 className="mb-4 text-xl font-bold">If You're a Startup…</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-blue-600" />
                  <span>Validate your go-to-market and gain first 1000 users.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-blue-600" />
                  <span>Lean marketing with maximum ROI.</span>
                </li>
              </ul>
            </Card>
            <Card className="border-t-4 border-t-purple-600 p-8">
              <h3 className="mb-4 text-xl font-bold">If You're a SaaS Founder…</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-purple-600" />
                  <span>Reduce churn, increase trial-to-paid conversions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-purple-600" />
                  <span>360° funnel from awareness to ARR.</span>
                </li>
              </ul>
            </Card>
            <Card className="border-t-4 border-t-indigo-600 p-8">
              <h3 className="mb-4 text-xl font-bold">If You're a Digital Agency…</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-indigo-600" />
                  <span>Scale client delivery via white-label campaigns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-indigo-600" />
                  <span>Predictable campaign performance with your brand.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 px-4 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Results That Speak</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { value: "45%", label: "Increase in qualified leads within 90 days" },
              { value: "30%", label: "Lower CAC for SaaS and B2B brands" },
              { value: "2.4x", label: "Higher ROAS across Google and Meta" },
              { value: "60%", label: "Improvement in landing page conversions" },
              { value: "100%", label: "Transparency in data and billing" },
            ].map((result, index) => (
              <Card key={index} className="border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-green-300">{result.value}</div>
                <p className="text-sm text-purple-100">{result.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Industries We Serve</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-purple-600">
                  <th className="p-4 text-left font-bold">Industry</th>
                  <th className="p-4 text-left font-bold">Example Campaigns</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { industry: "SaaS & Software", campaigns: "Lead gen & retention funnels." },
                  { industry: "FinTech", campaigns: "PPC + content strategy for compliance brands." },
                  { industry: "E-commerce", campaigns: "Product feed optimization, dynamic ads." },
                  { industry: "EdTech", campaigns: "Course enrollment funnels, SEO content marketing." },
                  { industry: "Healthcare", campaigns: "Local SEO + reputation management." },
                  { industry: "Agencies", campaigns: "White-label PPC + SEO delivery." },
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">{row.industry}</td>
                    <td className="p-4 text-muted-foreground">{row.campaigns}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-gray-50 px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Engagement Models</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Performance Retainer",
                ideal: "Long-term campaigns",
                description: "Ongoing optimization with ROI-linked goals.",
              },
              {
                title: "Project-Based",
                ideal: "Specific initiatives",
                description: "Fixed-scope SEO, CRO, or rebrand campaigns.",
              },
              {
                title: "White-Label Delivery",
                ideal: "Agencies",
                description: "Avaantra executes, you keep the brand visibility.",
              },
              {
                title: "Fractional CMO Model",
                ideal: "Funded startups",
                description: "Strategic oversight + tactical execution.",
              },
            ].map((model, index) => (
              <Card key={index} className="p-6">
                <h3 className="mb-2 text-lg font-bold">{model.title}</h3>
                <Badge className="mb-3 bg-purple-100 text-purple-700">{model.ideal}</Badge>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Case Studies</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "SaaS CRM Platform (US)",
                challenge: "CAC higher than ARR recovery rate.",
                solution: "CRO + Paid Ads Optimization + Funnel Redesign.",
                results: "CAC ↓ 42%, MRR ↑ 35% within 90 days.",
              },
              {
                title: "FinTech App (UK)",
                challenge: "No visibility in search; paid ads expensive.",
                solution: "SEO revamp + content strategy + ORM cleanup.",
                results: "200% organic traffic growth, brand mentions up 3x.",
              },
              {
                title: "Agency Partner (UAE)",
                challenge: "Limited in-house capacity.",
                solution: "Avaantra white-label SEO + PPC.",
                results: "Delivered 4 new client projects in 3 months.",
              },
            ].map((study, index) => (
              <Card key={index} className="p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-purple-600">{study.title}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="mb-1 text-sm font-semibold">Challenge:</p>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold">Solution:</p>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3">
                    <p className="mb-1 text-sm font-semibold text-green-800">Results:</p>
                    <p className="text-sm font-medium text-green-700">{study.results}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Governance */}
      <section className="bg-gray-50 px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Security, Reporting & Governance</h2>
          <p className="mb-8 text-xl font-semibold">Your data. Your IP. Your control.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "100% ownership of accounts, ads, and analytics.",
              "NDA and GDPR compliance.",
              "Monthly KPI reporting and strategic reviews.",
              "Real-time dashboards and performance scorecards.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg bg-white p-4 text-left">
                <Shield className="h-5 w-5 shrink-0 text-purple-600" />
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg font-medium text-purple-900">
            You see every dollar and every result — no hidden numbers, no fluff.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold lg:text-4xl">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What makes Avaantra different from other marketing agencies?",
                a: "We integrate marketing with product and revenue strategy — no silos. Every channel drives measurable ROI.",
              },
              {
                q: "How soon can I see results?",
                a: "PPC and CRO improvements start within weeks; SEO shows 60–90-day traction.",
              },
              {
                q: "Do you work with early-stage startups?",
                a: "Yes. We tailor lean marketing systems that scale with funding milestones.",
              },
              {
                q: "What's your minimum engagement duration?",
                a: "Typically 3–6 months for meaningful results.",
              },
              {
                q: "Do I get ownership of my ad accounts?",
                a: "Yes. You retain full ownership of all assets and data.",
              },
              {
                q: "Can you manage multiple regions or markets?",
                a: "Absolutely. We specialize in geo-targeted campaigns for North America, Europe, and APAC.",
              },
              {
                q: "How do you measure success?",
                a: "We track CAC, CLV, ROAS, and conversion velocity — not vanity metrics.",
              },
              {
                q: "Do you offer white-label services?",
                a: "Yes. We deliver under your agency brand with your reporting format.",
              },
              {
                q: "Can you help with SaaS product positioning?",
                a: "Yes. Our SaaS marketing team handles messaging, ICP targeting, and GTM strategy.",
              },
              {
                q: "What tools do you use for analytics and tracking?",
                a: "Google Analytics 4, HubSpot, SEMrush, Hotjar, and Looker Studio.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="mb-3 font-bold">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 px-4 py-20 text-center text-white">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Marketing You Can Measure. Growth You Can Trust.</h2>
          <p className="mb-8 text-xl text-purple-100">
            Partner with Avaantra Global to create digital marketing systems that generate predictable, compounding
            growth.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              <Calendar className="mr-2 h-5 w-5" />
              Request Free Marketing Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              <MessageSquare className="mr-2 h-5 w-5" />
              Schedule a Strategy Call
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>22+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              <span>100+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Google Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>ISO-Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>100% Transparent Reporting</span>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
