import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  BarChart3,
  Users,
  ShieldCheck,
  Layers,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Email Marketing Experts | Campaigns, Automation & Deliverability | Avaantra Global",
  description:
    "Hire email marketing experts to improve engagement, deliverability, and ROI. Avaantra Global builds high-converting email systems for growth-focused teams.",
};

export default function HireEmailMarketingExpertsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hire Email Marketing Experts — Turn Inbox into Revenue
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Email still delivers the highest ROI—when executed correctly.
            Avaantra Global helps you hire experts who turn campaigns into
            predictable revenue channels.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-400">
              Hire Email Experts in 15 Days
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <div className="grid md:grid-cols-5 gap-4 mt-14 max-w-5xl mx-auto text-left">
            {[
              "HubSpot, ActiveCampaign, Mailchimp",
              "Segmentation & personalization",
              "Deliverability optimization",
              "Lifecycle email automation",
              "A/B testing & analytics",
            ].map((t, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl flex gap-3">
                <CheckCircle className="text-orange-400 w-5 h-5 mt-1" />
                <p className="text-sm text-blue-100">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Real Problem with Email Marketing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 p-10 rounded-2xl">
            <ul className="space-y-4 text-gray-700 text-left">
              {[
                "Emails land in spam instead of inbox",
                "Generic campaigns with low engagement",
                "No lifecycle or retention strategy",
                "Founders managing tools instead of growth",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <h3 className="font-bold text-xl mb-3">
                You Don’t Need More Emails
              </h3>
              <p className="text-gray-600">
                You need the right messages, delivered at the right time, to the
                right audience — consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Promise: Emails That Actually Convert
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "40–60% higher engagement",
              "3–5X ROI on email",
              "25% better retention",
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our Email Marketing Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Campaign Strategy & Copy",
                desc: "High-converting newsletters & promotions",
                icon: Mail,
              },
              {
                title: "Marketing Automation",
                desc: "Lifecycle flows & behavioral triggers",
                icon: Layers,
              },
              {
                title: "Deliverability Optimization",
                desc: "Inbox placement & sender reputation",
                icon: ShieldCheck,
              },
              {
                title: "Analytics & CRO",
                desc: "Open rate, CTR & revenue tracking",
                icon: BarChart3,
              },
              {
                title: "Retention & Re-engagement",
                desc: "Win-back and churn-reduction flows",
                icon: Users,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition"
              >
                <item.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["SaaS & B2B", "E-commerce", "FinTech", "EdTech"].map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow font-semibold"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Our Email Engagement Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Audience & Deliverability Audit",
              "Campaign & Automation Setup",
              "Testing & Optimization",
              "Scale & Revenue Tracking",
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow font-semibold"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-gray-50 p-12 rounded-2xl grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-bold mb-2">Client</p>
            <p className="text-gray-600 mb-4">FinTech Platform</p>
            <p className="font-bold mb-2">Challenge</p>
            <p className="text-gray-600">Low opens, high unsubscribes</p>
          </div>
          <div>
            <p className="font-bold mb-4 text-orange-600">Results</p>
            <ul className="space-y-3">
              {["+218% open rate", "+64% reactivation rate"].map((t, i) => (
                <li key={i} className="flex gap-3 font-semibold">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Which tools do you work with?",
                a: "HubSpot, ActiveCampaign, Mailchimp, Klaviyo, and more.",
              },
              {
                q: "Do you handle deliverability issues?",
                a: "Yes — inbox placement and sender reputation are core.",
              },
              {
                q: "Can you build automation from scratch?",
                a: "Absolutely — lifecycle, onboarding, retention & reactivation.",
              },
              {
                q: "How fast can I get started?",
                a: "Within 7–15 days depending on scope.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-blue-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Make Email Your Highest-ROI Channel
        </h2>
        <Link href="/contact">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-400">
            Hire Email Marketing Experts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>
    </main>
  );
}
