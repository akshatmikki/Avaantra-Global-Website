import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Layers,
  Rocket,
  Target,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "SaaS Customer Retention & Churn Reduction Services | Avaantra Global",
  description:
    "Retain more customers and grow your SaaS MRR predictably. Avaantra Global designs customer retention and engagement programs that reduce churn, increase LTV, and build loyal users for life.",
};

export default function SaaSCustomerRetentionPage() {
  const framework = [
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Churn & Retention Analysis",
      desc: "Analyze churn cohorts, engagement patterns, and customer behavior.",
      outcome: "Clear retention scorecards and churn insights",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "Customer Journey Optimization",
      desc: "Design onboarding, engagement, reactivation, and loyalty flows.",
      outcome: "Higher activation and reduced drop-off",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Customer Success Automation",
      desc: "Automate health scores, alerts, and proactive success workflows.",
      outcome: "Prevent churn before it happens",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Upsell, Expansion & Advocacy",
      desc: "Trigger upgrades, cross-sells, and referral programs.",
      outcome: "Higher LTV and net revenue retention",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Reduce Churn. Increase Loyalty. Grow Predictably.
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10">
            You worked hard to win every customer — don’t lose them to churn. We
            build retention systems that keep users engaged, loyal, and growing
            with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Retention Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How We Improve Retention
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem SaaS Companies Face
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You’re signing new users — and losing them just as fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Trial users never activate",
                "Paying users cancel within months",
                "Customer success is reactive",
                "You replace churn with more ads",
                "Growth momentum keeps resetting",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                Retention Is the Real Growth Lever
              </h3>
              <p className="text-gray-600">
                Sustainable SaaS growth comes from keeping customers longer, not
                replacing the ones who leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Predictable Revenue Through Retention
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "25–50% lower churn",
              "2–3X higher customer LTV",
              "40%+ more repeat usage",
              "20–30% higher NRR",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-600 font-semibold">
            You don’t need to chase growth — you need to retain it.
          </p>
        </div>
      </section>

      {/* Framework */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our SaaS Customer Retention Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Analytics, automation, and customer success — unified into one
              retention engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {framework.map((item, idx) => (
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

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From Churn to Retention Engine
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Retention Audit",
                desc: "Churn data & behavior analysis",
              },
              {
                step: "2",
                title: "Retention Blueprint",
                desc: "Automation & engagement design",
              },
              {
                step: "3",
                title: "System Setup",
                desc: "Workflows & success automation",
              },
              {
                step: "4",
                title: "Pilot Campaigns",
                desc: "Re-engagement & expansion",
              },
              {
                step: "5",
                title: "Optimize & Scale",
                desc: "Continuous improvement",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-purple-300 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-purple-100">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-purple-200 mt-10 font-semibold">
            Outcome: A proactive retention system that runs 24/7
          </p>
        </div>
      </section>
      {/* Why Choose Avaantra */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why SaaS Teams Choose Avaantra Global
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We treat retention as a growth function — not a support ticket.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "20+ years of SaaS & growth experience",
              "Full-funnel retention strategy (activation → expansion)",
              "AI-powered churn prediction models",
              "Automated customer success workflows",
              "Live dashboards & churn visibility",
              "Retention-first GTM thinking",
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
        </div>
      </section>
      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Engagement Models
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Retention Sprint (Fixed Scope)",
                bestFor: "Early SaaS with high churn",
                work: "4–6 week retention optimization",
                outcome: "Immediate churn reduction",
              },
              {
                title: "Ongoing Retention Retainer",
                bestFor: "Growth-stage SaaS",
                work: "Continuous campaigns & automation",
                outcome: "Predictable MRR & NRR growth",
              },
              {
                title: "Hybrid Growth Pod",
                bestFor: "Complex SaaS ecosystems",
                work: "CS + automation + analytics experts",
                outcome: "Full lifecycle retention management",
              },
              {
                title: "Consulting & Enablement",
                bestFor: "Teams with in-house CS",
                work: "Strategy, systems & training",
                outcome: "Empowered CS operations",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
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
            All plans include retention dashboards, churn alerts, a dedicated
            retention strategist, and monthly performance reviews.
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What SaaS Founders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We reduced churn from 12% to 5% in 90 days. Avaantra’s retention system is brilliant.",
                by: "Founder, FinTech SaaS (UK)",
              },
              {
                quote:
                  "Their automation alerts let us act before users cancel. Our CS team is finally proactive.",
                by: "Head of Growth, B2B SaaS (USA)",
              },
              {
                quote:
                  "Retention used to be an afterthought. Now it’s our biggest growth driver.",
                by: "CEO, EdTech SaaS (India)",
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
              Case Study: Turning Retention Into a Growth Engine
            </h2>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">B2B Productivity SaaS</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                11% monthly churn, weak onboarding engagement
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Onboarding automation, churn alerts, and CS dashboards
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "54% churn reduction in 90 days",
                  "+32% LTV increase",
                  "+21% NRR improvement",
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
              FAQs — Before You Build a Retention System
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Is this for early or established SaaS companies?",
                a: "Both. We tailor retention strategies to your growth stage.",
              },
              {
                q: "Can this integrate with our CRM and product tools?",
                a: "Yes — HubSpot, Zoho, Salesforce, Intercom, Mixpanel, and more.",
              },
              {
                q: "How soon can we see results?",
                a: "Most teams see measurable improvement in 45–60 days.",
              },
              {
                q: "What if churn is caused by pricing or product gaps?",
                a: "We surface those issues clearly and feed insights to your product team.",
              },
              {
                q: "Do you help our customer success team too?",
                a: "Absolutely. We train, automate, and empower them.",
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
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Cut Churn and Grow Predictable Revenue?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            With Avaantra Global, customers stay longer, spend more, and become
            your strongest growth channel.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="cursor-pointer group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free Retention Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
