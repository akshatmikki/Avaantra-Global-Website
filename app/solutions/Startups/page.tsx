import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  TrendingUp,
  Target,
  Layers,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Startup Product Development, MVP & Growth Services | Avaantra Global",
  description:
    "Avaantra Global helps startups validate ideas, build MVPs fast, attract investors, and scale using product, tech, and marketing acceleration — all under one roof.",
};

export default function ForStartupsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            🚀 FOR STARTUPS
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turn Your Idea Into a Scalable,
            <br /> Fundable Business
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            Avaantra Global helps founders build MVPs fast, validate ideas,
            attract investors, and scale confidently with an all-in-one startup
            acceleration framework.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black">
              Book a Free Startup Strategy Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white"
            >
              Explore How We Help Startups
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              The Real Problem You’re Facing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most startups don’t fail because of bad ideas — they fail because
              execution is slow, validation comes late, and scaling breaks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4 text-gray-700">
              {[
                "No reliable tech team",
                "MVP takes months to launch",
                "Built features users don’t need",
                "No traction to show investors",
                "Too much time spent firefighting",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-700 mb-4">
                Avaantra helps startups move faster with clarity, structure, and
                execution systems — so you can focus on vision, not chaos.
              </p>

              <p className="font-semibold text-dark">
                Build fast. Validate early. Scale with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise to Startup Founders
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Rocket className="w-8 h-8 text-primary mx-auto" />,
                text: "MVP in 4–8 weeks",
              },
              {
                icon: <Target className="w-8 h-8 text-primary mx-auto" />,
                text: "Early product-market validation",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary mx-auto" />,
                text: "Investor-ready traction & metrics",
              },
              {
                icon: <Layers className="w-8 h-8 text-primary mx-auto" />,
                text: "Scalable tech foundation",
              },
              {
                icon: <Users className="w-8 h-8 text-primary mx-auto" />,
                text: "Managed teams, zero hiring stress",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-primary mx-auto" />,
                text: "Predictable pricing & delivery",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow">
                {item.icon}
                <p className="mt-4 font-semibold text-dark">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 font-semibold">
            We don’t just build products — we build momentum.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Solutions Tailored for Startups
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From idea validation to funding readiness and growth scaling —
              everything you need under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "MVP Development & Validation",
                desc: "Design, build, and validate your MVP fast.",
                cta: "Launch My MVP",
                link: "/solutions/Startups/MVP-Development-&-Validation",
              },
              {
                title: "Go-To-Market Strategy",
                desc: "Position your product and generate early traction.",
                cta: "Build My GTM Plan",
                link: "/solutions/Startups/Go-To-Market-Strategy",
              },
              {
                title: "Product Scaling & Growth Marketing",
                desc: "Turn traction into predictable growth.",
                cta: "Scale My Startup",
                link: "/solutions/Startups/Product-Scaling-&-Growth-Marketing",
              },
              {
                title: "Funding Readiness & Tech Acceleration",
                desc: "Impress investors with real metrics and demos.",
                cta: "Get Funding Ready",
                link: "/solutions/Startups/Funding-Readiness-&-Tech-Acceleration",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-xl p-6 pb-16 shadow hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>

                <Link
                  href={item.link}
                  className="absolute bottom-6 right-6 inline-flex items-center font-semibold text-primary hover:underline"
                >
                  {item.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Startup Acceleration Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven Startup Acceleration Process
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              From raw idea to scalable, fundable startup — executed step by
              step.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              "Discovery & Roadmap",
              "Prototype & MVP Build",
              "Market Validation",
              "GTM Launch & Growth",
              "Funding Readiness",
              "Scale & Optimize",
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl font-bold text-gray-300 mb-3">
                  {idx + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 font-semibold text-gray-300">
            Outcome: A market-ready startup built on systems — not guesswork.
          </p>
        </div>
      </section>
      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600">
              Choose what fits your startup stage — scale when you’re ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "MVP Fast Track",
                best: "Early-stage founders",
                work: "4–8 week MVP build",
                outcome: "Launch fast, validate early",
              },
              {
                title: "Managed Startup Pod",
                best: "Funded startups",
                work: "Cross-functional agile pod",
                outcome: "2–3X faster execution",
              },
              {
                title: "Growth Retainer",
                best: "Post-MVP startups",
                work: "Continuous growth & optimization",
                outcome: "Compounding users & revenue",
              },
              {
                title: "Funding Readiness Sprint",
                best: "Pre-seed / Seed stage",
                work: "Pitch, metrics & tech prep",
                outcome: "Investor-ready in 30 days",
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
                    <strong>Best For:</strong> {item.best}
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

          <p className="text-center mt-10 text-gray-600">
            All models include NDA & IP ownership, dedicated PM, real-time
            dashboards, and flexible scaling.
          </p>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              What Founders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Avaantra built our MVP in 6 weeks. We launched before competitors finished planning.",
                by: "Founder, HealthTech Startup",
              },
              {
                quote:
                  "They thought like partners — not vendors. From product to funding.",
                by: "Co-Founder, SaaS Platform (Singapore)",
              },
              {
                quote:
                  "We raised $200K while Avaantra handled execution end-to-end.",
                by: "Founder, EdTech Startup (India)",
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Case Study: From Idea to Funded MVP
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">FinTech Startup (India)</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                No tech team, needed MVP fast for investors
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                MVP build + GTM setup + pitch support
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "MVP live in 6 weeks",
                  "1,000 beta users in 30 days",
                  "₹2.5 crore seed funding raised",
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — What Founders Usually Ask
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "I don’t have a tech team. Can you still help?",
                a: "Yes. Our Managed Startup Pods handle everything end-to-end.",
              },
              {
                q: "Will I own the code and IP?",
                a: "100%. You retain full ownership — always.",
              },
              {
                q: "How much does an MVP cost?",
                a: "Typically $8K–$25K depending on scope. Fixed pricing.",
              },
              {
                q: "Can you help with investors?",
                a: "Yes — pitch decks, metrics, and warm introductions.",
              },
              {
                q: "How soon can we start?",
                a: "Within 7 business days of onboarding.",
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
            Let’s Turn Your Startup Dream Into a Fundable Reality
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            You bring the vision. We bring the velocity.
          </p>

          <Button size="lg" className="bg-white text-black">
            Book a Free Strategy Call
          </Button>
        </div>
      </section>
    </main>
  );
}
