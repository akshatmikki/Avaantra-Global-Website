import ScrollToTop from "@/components/scroll-to-top";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Rocket,
  Tag,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen bg-light">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-dark via-gray-900 to-dark text-light py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Accelerate Your Growth with Predictable, Scalable Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 text-pretty">
                Whether you're an agency struggling to scale, a SaaS founder
                trying to grow MRR, or a startup building your first MVP,
                Avaantra Global helps you move faster with less stress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-light rounded-full px-8"
                >
                  Book a Free Growth Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-light text-light hover:bg-light/10 rounded-full px-8 bg-transparent"
                >
                  Explore Solutions ↓
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Why Choose Avaantra Global Solutions
              </h2>
              <p className="text-lg text-gray-600">
                We built Avaantra Global to help ambitious companies grow
                without breaking. Today's growth challenges don't come from lack
                of opportunity—they come from complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Scale</h3>
                <p className="text-gray-600">
                  Without hiring or burnout. Get instant capacity when you need
                  it.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="text-blue-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Speed</h3>
                <p className="text-gray-600">
                  Get products and campaigns to market faster with agile
                  delivery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="text-green-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  Build systems that compound over time for long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Solutions – Compact but Alive */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Our Core Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built for agencies, SaaS teams, and startups that want speed
                without chaos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                {
                  title: "For Agencies",
                  desc: "White-label delivery, dedicated pods, and scalable execution without hiring.",
                  link: "/solutions/For-Agencies",
                  icon: Target,
                },
                {
                  title: "Product Delivery",
                  desc: "Agile pods, DevOps, and faster time-to-market for digital products.",
                  link: "/solutions/Accelerate-Product-Delivery",
                  icon: Zap,
                },
                {
                  title: "SaaS GTM",
                  desc: "Predictable acquisition, activation, and revenue growth for SaaS.",
                  link: "/solutions/Launch-&-Grow-SaaS-GTM",
                  icon: TrendingUp,
                },
                {
                  title: "For Startups",
                  desc: "MVPs, validation, and investor-ready products built fast.",
                  link: "/solutions/Startups",
                  icon: Rocket,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    className="group relative bg-white hover:bg-primary/5
                       rounded-xl border border-gray-200 p-5
                       hover:border-primary/40 hover:shadow-md
                       transition flex flex-col justify-between overflow-hidden"
                  >
                    {/* left accent */}
                    <span className="absolute left-0 top-0 h-full w-1 bg-primary/60 group-hover:bg-primary transition" />

                    <div className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-dark mb-2 group-hover:text-primary transition">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-end text-sm text-primary font-medium opacity-70 group-hover:opacity-100 transition">
                      <span className="mr-1">Explore</span>
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-16 md:py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Why Businesses Choose Avaantra Global
              </h2>
              <p className="text-lg text-gray-600">
                Because we think like founders, not vendors. We understand your
                pain—managing delivery, growth, and talent at the same time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Hybrid AI + Human Teams",
                  desc: "Faster, accurate, cost-effective delivery",
                },
                {
                  title: "Transparent Communication",
                  desc: "Your tools, your dashboards, full visibility",
                },
                {
                  title: "Sprint-Based Execution",
                  desc: "Measurable results every 2 weeks",
                },
                {
                  title: "Predictable Pricing",
                  desc: "No billing surprises, clear SLAs",
                },
                {
                  title: "End-to-End Growth Partner",
                  desc: "From code to customer acquisition",
                },
                {
                  title: "Peace of Mind",
                  desc: "Predictable results you can count on",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-primary" size={20} />
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                The Avaantra Growth Process
              </h2>
              <p className="text-lg text-gray-600">
                Our process stays consistent across all solutions—it's how we
                guarantee speed and quality.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Discovery & Goal Setting",
                  desc: "Understand your vision, challenges, and success metrics",
                },
                {
                  step: "2",
                  title: "Custom Solution Blueprint",
                  desc: "We design a plan—team, tools, sprints, and deliverables",
                },
                {
                  step: "3",
                  title: "Pilot Sprint or MVP Phase",
                  desc: "We start small, build fast, and show results",
                },
                {
                  step: "4",
                  title: "Scale Seamlessly",
                  desc: "Add pods, channels, or projects as demand grows",
                },
                {
                  step: "5",
                  title: "Continuous Improvement",
                  desc: "Monthly reviews, dashboards, and optimizations",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 mb-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-light rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Avaantra helped us double our delivery capacity without
                  hiring a single person. We now say yes to every client."
                </p>
                <p className="font-semibold text-dark">
                  Co-Founder, Marketing Agency (UK)
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "They took our SaaS GTM from scattered to systematic. We
                  finally have predictable MRR."
                </p>
                <p className="font-semibold text-dark">
                  Founder, B2B SaaS Platform (Canada)
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "We went from idea to funded MVP in 6 weeks. Their team
                  understood everything—product, tech, and growth."
                </p>
                <p className="font-semibold text-dark">
                  Startup Founder (India)
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Case Study Snapshot Highlights */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Case Study Snapshot Highlights
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real outcomes. Real businesses. No fluffy promises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  client: "Marketing Agency",
                  challenge: "Overflowing projects",
                  solution: "White-label pods + automation",
                  result: "3X delivery, 0 missed deadlines",
                },
                {
                  client: "SaaS Company",
                  challenge: "Poor trial conversions",
                  solution: "Automation + CRO + Retention",
                  result: "2.3X conversions, 25% less churn",
                },
                {
                  client: "Startup",
                  challenge: "MVP delays",
                  solution: "Fast-track MVP + GTM plan",
                  result: "Live in 6 weeks, raised seed funding",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all"
                >
                  <h3 className="text-xl font-bold text-dark mb-4">
                    {item.client}
                  </h3>

                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li>
                      <span className="font-semibold text-dark">
                        Challenge:
                      </span>{" "}
                      {item.challenge}
                    </li>
                    <li>
                      <span className="font-semibold text-dark">Solution:</span>{" "}
                      {item.solution}
                    </li>
                    <li>
                      <span className="font-semibold text-dark">Result:</span>{" "}
                      {item.result}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* FAQs */}
        <section className="py-16 md:py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Straight answers to the questions everyone asks.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "Are your solutions customizable?",
                  a: "Yes. Each solution is tailored to your business goals and team structure.",
                },
                {
                  q: "Can you work with my existing team?",
                  a: "Of course. We integrate directly with your tools, workflows, and people.",
                },
                {
                  q: "What industries do you serve?",
                  a: "SaaS, FinTech, HealthTech, EdTech, Agencies, and B2B service providers.",
                },
                {
                  q: "Is this affordable for startups or small agencies?",
                  a: "Yes. Engagements scale based on your stage: MVP, Growth, or Scale.",
                },
                {
                  q: "Do you offer ongoing support?",
                  a: "Yes. Most clients stay with us on long-term partnership retainers.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200"
                >
                  <h3 className="font-semibold text-dark mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Built for Your Stage of Growth */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Built for Your Stage of Growth
              </h2>
              <p className="text-lg text-gray-600">
                One system. Adapted to where you are today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Agencies
                </h3>
                <p className="text-sm text-gray-600">
                  Scale delivery capacity and margins without hiring more
                  people.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-dark mb-2">
                  SaaS Founders
                </h3>
                <p className="text-sm text-gray-600">
                  Build predictable growth engines with automation and CRO.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Startups
                </h3>
                <p className="text-sm text-gray-600">
                  Validate fast, launch MVPs, and attract early investment.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center mt-10">
              <p className="text-base text-gray-600">
                You bring the vision. We bring execution, systems, and
                accountability.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-light">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Ready to Scale Smarter?
            </h2>
            <p className="text-lg text-light/90 mb-8 max-w-xl mx-auto">
              Let’s build predictable growth systems that move your business
              forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-light text-primary hover:bg-gray-100 rounded-full px-8"
              >
                Book a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-light text-light hover:bg-light/10 rounded-full px-8 bg-transparent"
              >
                Download Capability Deck
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
