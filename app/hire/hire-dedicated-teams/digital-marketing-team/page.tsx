import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  BarChart3,
  Layers,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Digital Marketing Team | SEO, PPC, Automation & Content Experts | Avaantra Global",
  description:
    "Hire a full digital marketing team to grow leads, traffic, and revenue. Avaantra Global provides SEO, PPC, automation, and content teams — results-driven & transparent.",
};

export default function HireDigitalMarketingTeamPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hire Digital Marketing Team — Build Demand, Visibility & Predictable Pipeline
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            You don’t need more campaigns — you need results. Avaantra Global helps
            you hire a full-stack digital marketing team that drives growth, leads,
            and brand visibility — without agency overhead.
          </p>

          <Link href="/contact">
            <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
              Hire Digital Marketing Team in 15 Days
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <div className="grid md:grid-cols-5 gap-4 mt-14 max-w-5xl mx-auto text-left">
            {[
              "SEO, PPC, Social, Automation & Content experts",
              "7–15 day team setup",
              "100% white-label or co-branded execution",
              "Data-driven strategy with measurable ROI",
              "35–50% cost savings vs full-time hiring",
            ].map((t, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl flex gap-3">
                <CheckCircle className="text-orange-400 w-5 h-5 mt-1" />
                <p className="text-sm text-blue-100">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Real Problem with Most Marketing Teams
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-purple-50 p-12 rounded-2xl">
          <ul className="space-y-4 text-gray-700">
            {[
              "SEO, PPC, and content run in silos",
              "Agencies hide behind vanity metrics",
              "No predictable lead flow",
              "Founders chase vendors instead of growth",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500">✗</span> {t}
              </li>
            ))}
          </ul>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">
              Marketing Needs Accountability
            </h3>
            <p className="text-gray-600">
              You don’t need another vendor. You need a dedicated marketing team
              that lives and dies by performance metrics — not excuses.
            </p>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Promise: Marketing That Scales with Your Business
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "3–5X ROI within 90 days",
              "2–3X lead growth",
              "40% lower CAC",
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
            Our Digital Marketing Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">SEO & Content</h3>
              <p className="text-gray-600 mb-3">
                On-page, off-page, and technical SEO combined with blogs, landing
                pages, and whitepapers.
              </p>
              <p className="font-semibold text-sm text-gray-700">
                Outcome: Steady, compounding organic growth.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <Target className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Paid Campaigns (PPC)</h3>
              <p className="text-gray-600 mb-3">
                Google, Meta, and LinkedIn Ads with conversion tracking and
                remarketing.
              </p>
              <p className="font-semibold text-sm text-gray-700">
                Outcome: Qualified leads at lower cost.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <Layers className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Social Media & Branding</h3>
              <p className="text-gray-600 mb-3">
                Organic engagement, brand storytelling, and consistent presence.
              </p>
              <p className="font-semibold text-sm text-gray-700">
                Outcome: Authentic brand visibility.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <BarChart3 className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Marketing Automation</h3>
              <p className="text-gray-600 mb-3">
                HubSpot, ActiveCampaign, Zoho, Salesforce with lifecycle workflows.
              </p>
              <p className="font-semibold text-sm text-gray-700">
                Outcome: Lead nurturing and pipeline growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "SaaS & B2B",
            "E-commerce",
            "Healthcare",
            "EdTech",
          ].map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow font-semibold">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-gray-50 p-12 rounded-2xl grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-bold mb-2">Client</p>
            <p className="text-gray-600 mb-4">B2B SaaS Platform</p>
            <p className="font-bold mb-2">Challenge</p>
            <p className="text-gray-600">Inconsistent lead flow</p>
          </div>
          <div>
            <p className="font-bold mb-4 text-orange-600">Results</p>
            <ul className="space-y-3">
              {[
                "+220% leads in 90 days",
                "CAC down 38%",
                "3.8X ROAS",
              ].map((t, i) => (
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
                q: "What’s included in a digital marketing team?",
                a: "SEO, PPC, content, automation, analytics, and a growth PM.",
              },
              {
                q: "Can this be white-labeled?",
                a: "Yes — ideal for agencies and consulting firms.",
              },
              {
                q: "Do you guarantee results?",
                a: "We commit to KPIs and transparent performance reporting.",
              },
              {
                q: "Can I scale or pause anytime?",
                a: "Yes — flexible, month-to-month engagement.",
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
          Drive Growth Predictably
        </h2>
        <Link href="/contact">
          <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
            Hire Digital Marketing Team
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>
    </main>
  );
}
