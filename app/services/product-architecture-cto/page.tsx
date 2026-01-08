"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  MessageSquare,
  Target,
  Puzzle,
  TrendingUp,
  Brain,
  Shield,
  CheckCircle2,
  Users,
  Zap,
  Award,
  DollarSign,
  Globe,
  Code,
  BarChart3,
  Settings,
  FileCheck,
  UserPlus,
  GitBranch,
  FileText,
} from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function CTOServicePage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Get a CTO Without Giving Up Equity.</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 text-pretty">
              Avaantra Global's CTO-as-a-Service gives startups and scale-ups instant access to senior technical
              leadership — strategy, architecture, and growth execution on demand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free CTO Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Request Technical Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-purple-600 mb-2" />
              <div className="font-bold text-lg">20+ Years</div>
              <div className="text-sm text-gray-600">of Expertise</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-purple-600 mb-2" />
              <div className="font-bold text-lg">100+ Startups</div>
              <div className="text-sm text-gray-600">Guided</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-purple-600 mb-2" />
              <div className="font-bold text-lg">100% IP</div>
              <div className="text-sm text-gray-600">Ownership</div>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-purple-600 mb-2" />
              <div className="font-bold text-lg">Global</div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Every Startup Needs a CTO, But Few Can Afford One
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty">
              You have a product idea. Maybe even a team. But what you don't have is technical direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Without Technical Direction, You Face:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Misaligned tech decisions that slow down growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Developers building without a clear roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Founders spending 60% of time on tech firefighting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Missed deadlines, budget overruns, and scaling pain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Confusion between product vision and engineering execution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">The Solution: CTO-as-a-Service</h3>
                <p className="text-gray-700 mb-4">
                  Hiring a full-time CTO costs $150K–$300K/year — often before you even have revenue.
                </p>
                <p className="text-gray-700 mb-4">
                  CTO-as-a-Service (CaaS) gives you the same expertise, minus the overhead.
                </p>
                <p className="text-gray-700 font-semibold">
                  You get a senior technology partner focused on making your product scalable, predictable, and
                  investor-ready — without hiring risk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Is CTO-as-a-Service */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What CTO-as-a-Service Really Is</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty">
              CTO-as-a-Service means you rent experience, not just resources. It's like having a fractional Chief
              Technology Officer — available part-time or project-based — to lead your product and tech strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Strategic Partner</h3>
                <p className="text-gray-600 text-sm">Aligning tech decisions with business goals</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Puzzle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Technical Architect</h3>
                <p className="text-gray-600 text-sm">Defining scalable systems</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Growth Enabler</h3>
                <p className="text-gray-600 text-sm">Ensuring tech supports revenue goals</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Team Mentor</h3>
                <p className="text-gray-600 text-sm">Guiding your internal development team</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 font-semibold">
              We help founders go from "what should we build next?" to "here's how we'll scale to 10x users
              predictably."
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Who This Is For</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Startup Founders (Non-Technical)</h3>
                <p className="text-gray-600">
                  You have a vision but lack technical leadership. We translate your ideas into an executable tech
                  strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">SaaS CEOs / CTOs (Overwhelmed Teams)</h3>
                <p className="text-gray-600">
                  You have engineers but no bandwidth to plan, review, or scale properly. We step in to optimize
                  architecture and velocity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Digital Agencies</h3>
                <p className="text-gray-600">
                  You manage multiple client projects and need an on-demand CTO to advise, review, or lead technical
                  audits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Avaantra */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">Why Choose Avaantra Global</h2>
          <p className="text-xl text-center text-gray-700 mb-12">
            We don't act like consultants. We act like your co-founders.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">20+ Years Combined Leadership Experience</h3>
                <p className="text-gray-600">Across SaaS, AI, FinTech, EdTech</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Architecture-First Thinking</h3>
                <p className="text-gray-600">Build scalable foundations, not short-term fixes</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Founder-Centric Approach</h3>
                <p className="text-gray-600">Business-first, tech-second — always aligned with revenue goals</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Predictable Outcomes</h3>
                <p className="text-gray-600">Clear KPIs — uptime, velocity, MRR impact</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Team Integration</h3>
                <p className="text-gray-600">We work seamlessly with your dev team, not above them</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Global Expertise</h3>
                <p className="text-gray-600">North America, Europe, and APAC startups</p>
              </div>
            </div>
          </div>

          <Card className="mt-12 bg-purple-50 border-l-4 border-l-purple-600 shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg italic text-gray-700">
                "Avaantra's CTO-as-a-Service gave us technical leadership that matched Series B companies — at 1/5th the
                cost."
              </p>
              <p className="text-sm text-gray-600 mt-2">— Founder, HealthTech Startup</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Our CTO-as-a-Service Offerings
          </h2>

          <div className="grid gap-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                      <h3 className="font-bold text-lg">Technical Roadmap & Strategy</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Product roadmap, sprint strategy, architecture plan</p>
                    <p className="text-sm font-semibold text-purple-600">Clear direction and focus</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="h-6 w-6 text-purple-600" />
                      <h3 className="font-bold text-lg">Technology Stack Selection</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Evaluate and finalize backend, frontend, cloud, and tools
                    </p>
                    <p className="text-sm font-semibold text-purple-600">Future-proof tech stack</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="h-6 w-6 text-purple-600" />
                      <h3 className="font-bold text-lg">Architecture Design & Review</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Design scalable, secure system architecture</p>
                    <p className="text-sm font-semibold text-purple-600">99.9% uptime-ready foundations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <UserPlus className="h-6 w-6 text-purple-600" />
                      <h3 className="font-bold text-lg">Team Mentorship & Hiring</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Developer evaluation, interview process setup</p>
                    <p className="text-sm font-semibold text-purple-600">Faster hiring, better culture fit</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <GitBranch className="h-6 w-6 text-purple-600" />
                      <h3 className="font-bold text-lg">Process Setup & DevOps</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Agile sprint setup, CI/CD pipelines, quality gates</p>
                    <p className="text-sm font-semibold text-purple-600">Predictable delivery cycles</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <FileCheck className="h-6 w-6 text-purple-600" />
                      <h3 className="font-bold text-lg">Code Audit & Due Diligence</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Review for investors or M&A readiness</p>
                    <p className="text-sm font-semibold text-purple-600">Confidence in your codebase</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                  <h3 className="font-bold text-lg">Interim CTO Leadership</h3>
                </div>
                <p className="text-gray-600">Temporary CTO for early-stage or transition period</p>
                <p className="text-sm font-semibold text-purple-600 mt-2">Leadership continuity & speed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
            The Avaantra CTO Engagement Process
          </h2>
          <p className="text-xl text-center text-gray-700 mb-12">
            Structured for startups needing clarity fast — from first call to execution in weeks
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Discovery & Assessment",
                description: "We review your product vision, codebase, and current team structure",
                deliverable: "CTO Assessment Report",
                icon: Target,
              },
              {
                step: 2,
                title: "Technical Roadmap Creation",
                description: "We build a 3–6 month roadmap with milestones, KPIs, and priorities",
                deliverable: "Product & Tech Roadmap",
                icon: BarChart3,
              },
              {
                step: 3,
                title: "Architecture Design & Alignment",
                description: "We finalize architecture decisions — backend, APIs, cloud, database",
                deliverable: "Architecture Blueprint",
                icon: Settings,
              },
              {
                step: 4,
                title: "Team Mentorship & Delivery Setup",
                description: "We define sprints, implement agile rituals, and guide your dev team",
                deliverable: "Process Setup Playbook",
                icon: Users,
              },
              {
                step: 5,
                title: "Ongoing CTO-as-a-Service Support",
                description: "Your CTO participates in weekly leadership calls, roadmap reviews, and product updates",
                deliverable: "Monthly Growth & Technical Health Reports",
                icon: TrendingUp,
              },
              {
                step: 6,
                title: "Transition or Scale-up Support",
                description: "Once your internal CTO or tech lead is ready, we hand over with documentation",
                deliverable: "Transition Plan + Training Documentation",
                icon: FileText,
              },
            ].map((step) => (
              <Card key={step.step} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <step.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-purple-700">Deliverable:</p>
                    <p className="text-sm text-purple-900">{step.deliverable}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Engagement Models</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Fractional CTO</h3>
                <p className="text-sm text-gray-600 mb-4">Startups or agencies needing part-time leadership</p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-700">10–20 hours/month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Project-Based CTO</h3>
                <p className="text-sm text-gray-600 mb-4">Product launch or tech migration projects</p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-700">Fixed project duration</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Interim CTO</h3>
                <p className="text-sm text-gray-600 mb-4">Gap between outgoing and new CTO</p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-700">3–6 months full-time</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Advisory CTO</h3>
                <p className="text-sm text-gray-600 mb-4">Mature teams needing strategic guidance</p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-700">On-demand calls & reviews</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Deliverables You'll Receive</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "3–6 Month Technical Roadmap",
              "Architecture & Tech Stack Blueprint",
              "Product Backlog & Sprint Plan",
              "Developer Evaluation Framework",
              "Weekly Progress Reports",
              "Code Audit & Improvement Summary",
              "Cloud & Infrastructure Recommendations",
              "Technical Documentation",
              "CTO-to-Founder Reports",
            ].map((deliverable, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{deliverable}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Case Studies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">SaaS Startup (US)</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Challenge:</p>
                    <p className="text-gray-600">Non-technical founder lacked product direction</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Solution:</p>
                    <p className="text-gray-600">
                      Avaantra's CTO defined roadmap, led architecture, and hired dev team
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-600">Result:</p>
                    <p className="text-gray-600">MVP launched in 10 weeks; raised $500K pre-seed funding</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">FinTech Platform (UK)</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Challenge:</p>
                    <p className="text-gray-600">Legacy system causing downtime and high cloud bills</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Solution:</p>
                    <p className="text-gray-600">CTO audit and DevOps optimization</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-600">Result:</p>
                    <p className="text-gray-600">Reduced AWS cost by 45%, improved uptime to 99.98%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Digital Agency (Canada)</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Challenge:</p>
                    <p className="text-gray-600">Needed white-label tech leadership for client SaaS projects</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Solution:</p>
                    <p className="text-gray-600">Avaantra CTO supported 3 concurrent builds under NDA</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-600">Result:</p>
                    <p className="text-gray-600">25% higher delivery efficiency, 3 new retainer clients won</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Industries We Serve</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { industry: "Startups", help: "Technical clarity and faster investor readiness" },
              { industry: "SaaS Companies", help: "Architecture audits, scaling, and feature prioritization" },
              { industry: "FinTech", help: "Compliance-ready product architectures" },
              { industry: "HealthTech", help: "Secure and HIPAA-aligned tech leadership" },
              { industry: "Digital Agencies", help: "White-label CTO advisory for multiple client projects" },
            ].map((item, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.industry}</h3>
                      <p className="text-gray-600">{item.help}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & IP */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Security, IP & Governance</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Comprehensive NDAs signed at onboarding",
              "100% IP transfer of all deliverables",
              "SOC2 and GDPR-aligned best practices",
              "Secure access management for remote collaboration",
              "Transparent reporting and audit-ready documentation",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xl font-bold text-purple-600">Your product, your code, your ownership — always.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How is CTO-as-a-Service different from a consultant?",
                a: "Consultants give advice; a CaaS executive leads execution. Your Avaantra CTO is embedded in your product cycle — strategy to release.",
              },
              {
                q: "Can I hire CTO-as-a-Service for a short project?",
                a: "Yes. We support 3–6 month product launches, audits, or migrations.",
              },
              {
                q: "Do you replace the need for a full-time CTO?",
                a: "For early-stage startups — yes. For scaling companies, we complement or transition to your in-house CTO.",
              },
              {
                q: "How do you measure CTO success?",
                a: "We set measurable KPIs — team velocity, uptime, feature delivery, cloud cost, and time-to-market.",
              },
              {
                q: "What's the cost structure?",
                a: "Monthly retainer starting at $3,000, or project-based pricing. Predictable, no surprises.",
              },
              {
                q: "Can my remote team work with your CTO?",
                a: "Absolutely. Our CTOs are experts in global team collaboration (Slack, Notion, Jira, GitHub).",
              },
              {
                q: "What industries do you specialize in?",
                a: "SaaS, FinTech, HealthTech, EdTech, E-commerce, and Agencies.",
              },
              {
                q: "How soon can you start?",
                a: "Typically within 10–15 days from first consultation.",
              },
              {
                q: "Can your CTO help with investor pitches?",
                a: "Yes. We prepare technical decks, architecture visuals, and cost forecasts for fundraising rounds.",
              },
              {
                q: "What if I only need help hiring developers?",
                a: "We include hiring and vetting assistance as part of CTO-as-a-Service.",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-purple-600">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Your Product Deserves Strategic Tech Leadership
          </h2>
          <p className="text-xl mb-8 text-purple-100 text-pretty">
            Partner with Avaantra for a CTO who brings 20+ years of technical strategy — without the hiring hassle or
            equity cost.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule CTO Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Request Technical Roadmap
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-8 border-t border-purple-400/30">
            <div className="text-center">
              <Award className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm font-semibold">20+ Years Expertise</p>
            </div>
            <div className="text-center">
              <Users className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm font-semibold">100+ Startups Guided</p>
            </div>
            <div className="text-center">
              <Shield className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm font-semibold">100% IP Ownership</p>
            </div>
            <div className="text-center">
              <Globe className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm font-semibold">Global Experience</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm font-semibold">ISO Certified</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
