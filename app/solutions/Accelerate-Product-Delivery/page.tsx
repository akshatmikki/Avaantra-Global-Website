import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Layers,
  Settings,
  Users,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Accelerate Product Development for SaaS & Startups | Avaantra Global",
  description:
    "Accelerate SaaS and startup product delivery with Avaantra Global. Managed Agile Pods, DevOps automation, and dedicated engineering teams that help founders and CTOs build, launch, and scale faster — without hiring risk.",
};

export default function AccelerateProductDevelopmentPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 FOR SAAS & STARTUPS
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Build, Launch & Scale Products Faster
            <br />
            Without Hiring Stress
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Avaantra Global helps founders and CTOs ship products faster using
            Managed Agile Pods, DevOps automation, and dedicated engineering
            teams — so you focus on growth, not delivery chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
            >
              Book a Free Product Delivery Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
            >
              Explore How We Deliver
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Product Delivery Slows You Down
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You already have the roadmap. Execution is what’s breaking things.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Hiring engineers takes months",
                "Sprint velocity drops over time",
                "QA cycles are inconsistent",
                "Releases keep slipping",
                "Technical debt piles up",
                "Founders end up firefighting",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-700 mb-4">
                Every delay costs you momentum, market opportunity, and investor
                confidence.
              </p>

              <p className="font-semibold text-dark">
                You don’t need a bigger team.
                <br />
                You need a smarter delivery system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Speed, Quality & Predictability
          </h2>

          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {[
              "30–50% faster delivery",
              "MVPs in 4–6 weeks",
              "Zero hiring overhead",
              "Sprint-level transparency",
              "Fixed pricing, no surprises",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            We bring the discipline of a product company and the speed of a
            startup.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Solutions to Accelerate Product Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From MVP to scale — we cover execution end to end.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "DevOps & Automation",
                desc: "CI/CD, cloud, monitoring, and infrastructure automation.",
                outcome: "Faster releases, fewer errors, stable scaling",
                link: "/solutions/Accelerate-Product-Delivery/DevOps-&-Automation",
              },
              {
                title: "Fast MVP Launch",
                desc: "From idea to working MVP in weeks.",
                outcome: "Validate fast with lower risk",
                link: "/solutions/Accelerate-Product-Delivery/Fast-MVP-Launch",
              },
              {
                title: "Dedicated Engineering Teams",
                desc: "Pre-vetted engineers ready in days.",
                outcome: "Predictable delivery without recruitment pain",
                link: "/solutions/Accelerate-Product-Delivery/Dedicated-Engineering-Teams",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="relative bg-gray-50 rounded-xl p-8 pb-16 hover:bg-white hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-primary">
                  Outcome: {item.outcome}
                </p>
                <div className="absolute bottom-6 right-6 flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Avaantra */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Founders & CTOs Choose Avaantra Global
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Layers className="w-7 h-7 text-primary" />,
                title: "Managed Agile Pods",
                desc: "Accountability, speed, and clear ownership.",
              },
              {
                icon: <Settings className="w-7 h-7 text-primary" />,
                title: "DevOps & QA Automation",
                desc: "Enterprise-grade reliability at startup speed.",
              },
              {
                icon: <Users className="w-7 h-7 text-primary" />,
                title: "Senior Product Engineers",
                desc: "No juniors. No hand-holding.",
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-primary" />,
                title: "Predictable Pricing",
                desc: "Fixed sprint or monthly models.",
              },
              {
                icon: <Rocket className="w-7 h-7 text-primary" />,
                title: "AI-Augmented Delivery",
                desc: "Smarter execution with automation insights.",
              },
              {
                icon: <CheckCircle className="w-7 h-7 text-primary" />,
                title: "Full Transparency",
                desc: "Dashboards, demos, and sprint reporting.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From Concept to Launch
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              You stay in control of the roadmap. We accelerate delivery with
              structure, discipline, and predictable execution.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              {
                step: "1",
                title: "Discovery & Alignment",
                desc: "Understand goals, bottlenecks, and roadmap",
              },
              {
                step: "2",
                title: "Team Setup",
                desc: "Agile Pod or Dedicated Team",
              },
              {
                step: "3",
                title: "Sprint Planning",
                desc: "Milestones, scope, sprint goals",
              },
              {
                step: "4",
                title: "Build & Deliver",
                desc: "2-week sprints with demos & QA",
              },
              {
                step: "5",
                title: "Review & Optimize",
                desc: "Velocity tracking & improvements",
              },
              {
                step: "6",
                title: "Scale On Demand",
                desc: "Add or pause pods as needed",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl font-bold text-gray-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 mt-10 font-semibold">
            Outcome: Predictable speed, consistent quality, and transparent
            accountability.
          </p>
        </div>
      </section>
      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600">
              Choose how you want to accelerate delivery — without locking
              yourself in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Project-Based",
                bestFor: "MVPs or fixed-scope features",
                work: "Pay per project",
                outcome: "Fast delivery, no long-term tie",
              },
              {
                title: "Dedicated Team",
                bestFor: "Long-term product continuity",
                work: "You manage, we execute",
                outcome: "Predictable monthly output",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Cross-functional sprint delivery",
                work: "Fully managed by Avaantra",
                outcome: "2–3X faster velocity",
              },
              {
                title: "DevOps & QA Retainer",
                bestFor: "Ongoing optimization & stability",
                work: "Continuous monitoring & automation",
                outcome: "Scalable, reliable infrastructure",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-dark">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Best For:</strong> {item.bestFor}
                  </li>
                  <li>
                    <strong>How It Works:</strong> {item.work}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 text-gray-600">
            All models include NDA & IP protection, real-time dashboards,
            transparent pricing, and monthly performance reviews.
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What Founders & CTOs Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Avaantra helped us launch our SaaS MVP in 6 weeks. We closed our seed round within 2 months.",
                by: "Founder, HealthTech Startup",
              },
              {
                quote:
                  "Their Agile Pods are incredible. I don’t chase updates — I just check the dashboard.",
                by: "CTO, FinTech SaaS (Singapore)",
              },
              {
                quote:
                  "Our release cycle went from 10 days to 2. DevOps and QA are finally under control.",
                by: "Product Head, B2B SaaS (USA)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <p className="italic text-gray-700 mb-4">“{item.quote}”</p>
                <p className="font-semibold text-dark">{item.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Case Study: Faster Delivery, Happier Users
            </h2>
          </div>

          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">FinTech SaaS Company</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Slow releases, production bugs, growing tech debt
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                One Managed Agile Pod + DevOps automation + QA pipelines
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "Release cycles reduced by 60%",
                  "99.9% uptime post-deployment",
                  "+28% user retention in 3 months",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 font-semibold">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              FAQs — Common Concerns, Clear Answers
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Will you take over our product management?",
                a: "No. You own the roadmap. We own sprint execution.",
              },
              {
                q: "Can you integrate with our existing team?",
                a: "Yes. Our pods plug directly into your systems and standups.",
              },
              {
                q: "How do you ensure code quality?",
                a: "Peer reviews, automated testing, and QA audits every sprint.",
              },
              {
                q: "Can we scale up or pause?",
                a: "Yes. Scale pods up or down anytime — no lock-ins.",
              },
              {
                q: "What tech stacks do you support?",
                a: "React, Node, Python, .NET, PHP, Java, Flutter, AWS, Azure, and more.",
              },
              {
                q: "Do you support post-launch?",
                a: "Yes, via DevOps & QA retainer models.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-bold text-dark mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Make Product Delivery Predictable Again
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Build faster. Ship reliably. Scale without hiring chaos.
          </p>

          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Book a Free Strategy Session
          </Button>
        </div>
      </section>
    </main>
  );
}
