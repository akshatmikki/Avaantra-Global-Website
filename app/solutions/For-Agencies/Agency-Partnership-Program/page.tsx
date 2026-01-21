import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Handshake,
  Layers,
  TrendingUp,
  Cpu,
  Rocket,
} from "lucide-react";

export const metadata = {
  title: "Agency Partnership Program | Avaantra Global",
  description:
    "Partner with Avaantra Global to scale your agency, expand your service offerings, and earn more revenue. White-label delivery, co-marketing, and growth collaboration for ambitious agencies.",
};

export default function AgencyPartnershipProgramPage() {
  const programPillars = [
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "White-Label Delivery Partnership",
      desc: "Sell confidently while we handle marketing, tech, automation, and AI delivery under your brand.",
      outcome: "2–3X service capacity without hiring",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Co-Marketing & Growth Collaboration",
      desc: "Joint webinars, content, campaigns, and thought leadership to grow visibility.",
      outcome: "More inbound leads and authority",
    },
    {
      icon: <Handshake className="w-8 h-8 text-purple-600" />,
      title: "Referral Revenue Program",
      desc: "Earn recurring commissions when you refer or co-deliver clients with us.",
      outcome: "Predictable partner income",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Managed Agile Pods (Co-Delivery)",
      desc: "Cross-functional pods combining your strategy with our execution.",
      outcome: "Faster delivery with full transparency",
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      title: "Partner Tools & Resources",
      desc: "Access AI tools, training, beta features, and shared case studies.",
      outcome: "Stronger client results and team capability",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Partner with Avaantra Global — Grow Faster, Deliver More, Earn
            Better
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10">
            Scale beyond capacity limits with white-label delivery,
            co-marketing, and shared growth initiatives. You lead strategy and
            relationships — we power execution and scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Apply for Partnership Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How the Program Works
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Problem Most Agencies Face
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Growth shouldn’t feel like a constant trade-off.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Limited by bandwidth or team size",
                "Can’t launch new services fast enough",
                "Too much time spent on operations",
                "Losing deals to larger multi-service agencies",
                "Every new client adds stress instead of leverage",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                You Don’t Need Another Vendor
              </h3>
              <p className="text-gray-600">
                You need a partner who helps you scale sustainably, expand
                profitably, and grow without chaos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Scale, Earn, and Expand Without Losing Control
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "3–5X delivery capacity",
              "20–30% revenue growth in 3–6 months",
              "100% brand control",
              "Zero operational risk",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What’s Inside the Avaantra Agency Partnership Program
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built to help agencies scale faster through collaboration — not
              competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programPillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-purple-700">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why Agencies Choose to Partner with Avaantra Global
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We think like an agency — and deliver like a technology
              powerhouse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "20+ years of combined agency & enterprise experience",
              "100% NDA-protected, white-labeled operations",
              "Transparent dashboards & project visibility",
              "Fast team setup (within 7 days)",
              "AI & automation built into every process",
              "Partnership-first mindset — not vendor thinking",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-700 font-semibold">
            You don’t just get a partner — you get a profit accelerator.
          </p>
        </div>
      </section>
      {/* How Partnership Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              How the Agency Partnership Program Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple, transparent, and built to scale with you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Apply for Partnership",
                desc: "Book a call with our partnership consultant",
              },
              {
                step: "2",
                title: "Discovery & Alignment",
                desc: "We align on services, goals & capacity",
              },
              {
                step: "3",
                title: "Agreement & Setup",
                desc: "NDA, revenue model & white-label process",
              },
              {
                step: "4",
                title: "Pilot Collaboration",
                desc: "30-day pilot or co-delivery sprint",
              },
              {
                step: "5",
                title: "Scale Together",
                desc: "Expand services, clients & co-marketing",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-purple-600 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-700 font-semibold">
            Outcome: A transparent, performance-based relationship where both
            agencies win.
          </p>
        </div>
      </section>
      {/* Partnership Tiers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Partnership Tiers
            </h2>
            <p className="text-lg text-gray-600">
              Choose the model that matches your ambition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "White-Label Partner",
                bestFor: "Silent backend delivery",
                includes: "White-label ops + delivery",
                outcome: "Seamless scaling",
              },
              {
                title: "Co-Delivery Partner",
                bestFor: "Joint execution",
                includes: "Shared pods + joint planning",
                outcome: "Faster project velocity",
              },
              {
                title: "Growth Partner",
                bestFor: "Long-term expansion",
                includes: "Co-marketing + referral revenue",
                outcome: "New leads & extra income",
              },
              {
                title: "Strategic Partner",
                bestFor: "SaaS & enterprise offerings",
                includes: "Dedicated pod + IP collaboration",
                outcome: "Shared long-term growth",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-dark">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Best For:</strong> {item.bestFor}
                  </li>
                  <li>
                    <strong>Includes:</strong> {item.includes}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Partner Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Partnering with Avaantra doubled our capacity and let us add SaaS projects without hiring.",
                by: "Agency CEO (UK)",
              },
              {
                quote:
                  "Their co-marketing webinars brought real leads. This is a true growth partnership.",
                by: "Founder, Digital Studio (USA)",
              },
              {
                quote:
                  "We now offer AI and automation services we couldn’t before.",
                by: "Co-Founder, Marketing Agency (UAE)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow">
                <p className="italic text-gray-700 mb-4">“{item.quote}”</p>
                <p className="font-semibold text-dark">{item.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Partnership Case Study */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Case Study: Partnership That Multiplied Growth
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">Creative Agency (India)</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Limited capacity and missed tech-driven opportunities
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Avaantra Partnership (White Label + Co-Marketing)
              </p>
            </div>

            <div>
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "Added 7 new clients in 4 months",
                  "+45% revenue growth",
                  "100% client retention",
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              FAQs — Before You Apply
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Who can join the partnership program?",
                a: "Marketing, design, or creative agencies with growth intent.",
              },
              {
                q: "Do I lose control of my clients?",
                a: "Never. All work is white-labeled and you own the relationship.",
              },
              {
                q: "How do referral commissions work?",
                a: "You earn ongoing commissions for every referred client.",
              },
              {
                q: "Can we co-brand campaigns and webinars?",
                a: "Yes. Co-marketing is a core partnership benefit.",
              },
              {
                q: "Is there a cost to join?",
                a: "No joining fee. You only pay for delivery or capacity used.",
              },
              {
                q: "What’s the minimum commitment?",
                a: "Start with a 30-day pilot. No lock-ins.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-dark mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why This Works & Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Grow Together
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            This isn’t outsourcing — it’s collaborative scaling. Offer more,
            deliver more, and earn more without losing control.
          </p>

          <Button
            size="lg"
            className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Apply for the Avaantra Agency Partnership Program
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </main>
  );
}
