import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  PenTool,
  Layers,
  BarChart3,
  Users,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Content Writers | SEO, Website & B2B Content Specialists | Avaantra Global",
  description:
    "Hire professional content writers for SEO blogs, websites, and conversion-focused copy. Avaantra Global delivers content that ranks, engages, and converts.",
};

export default function HireContentWritersPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hire Content Writers — Content That Converts, Not Just Ranks
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Words drive decisions. Avaantra Global helps you hire content writers
            who blend SEO, clarity, and persuasion to drive measurable business
            outcomes.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-400">
              Hire Content Writers in 15 Days
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <div className="grid md:grid-cols-5 gap-4 mt-14 max-w-5xl mx-auto text-left">
            {[
              "SEO blogs & long-form content",
              "Website & landing page copy",
              "B2B & SaaS storytelling",
              "AI-assisted, human-edited writing",
              "Brand voice consistency",
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
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Real Problem with Most Content
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-purple-50 p-12 rounded-2xl">
          <ul className="space-y-4 text-gray-700">
            {[
              "Content written only for keywords, not buyers",
              "Blogs that rank but don’t convert",
              "Inconsistent brand voice across channels",
              "Founders micromanaging writers and edits",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500">✗</span> {t}
              </li>
            ))}
          </ul>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">
              Content Is a Revenue Asset
            </h3>
            <p className="text-gray-600">
              When content aligns with search intent and buyer psychology, it
              compounds traffic, trust, and revenue over time.
            </p>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Promise: Content with Business Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "2–3X organic traffic growth",
              "40% higher engagement metrics",
              "Content aligned to buyer intent",
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
            Our Content Writing Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SEO Content Strategy",
                desc: "Topic clusters, search intent & keyword mapping",
                icon: BarChart3,
              },
              {
                title: "Website & Landing Page Copy",
                desc: "Clear messaging that drives conversions",
                icon: Layers,
              },
              {
                title: "B2B & SaaS Content",
                desc: "Thought leadership, product storytelling & use cases",
                icon: Users,
              },
              {
                title: "Editorial Quality & Governance",
                desc: "Human editing, brand consistency & tone control",
                icon: ShieldCheck,
              },
              {
                title: "AI + Human Writing Stack",
                desc: "Speed from AI, quality from expert writers",
                icon: PenTool,
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
          {["SaaS & B2B", "FinTech", "EdTech", "Professional Services"].map(
            (t, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow font-semibold"
              >
                {t}
              </div>
            )
          )}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Our Content Delivery Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Content & SEO Audit",
              "Topic & Intent Mapping",
              "Writing & Editorial Review",
              "Publishing & Optimization",
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
            <p className="text-gray-600 mb-4">B2B SaaS Company</p>
            <p className="font-bold mb-2">Focus</p>
            <p className="text-gray-600">
              SEO blogs + product-led content
            </p>
          </div>
          <div>
            <p className="font-bold mb-4 text-orange-600">Results</p>
            <ul className="space-y-3">
              {["+260% organic sessions", "+75 high-quality backlinks"].map(
                (t, i) => (
                  <li key={i} className="flex gap-3 font-semibold">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    {t}
                  </li>
                )
              )}
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
                q: "Do you write only SEO content?",
                a: "No — we balance SEO with clarity, persuasion, and conversion goals.",
              },
              {
                q: "Is AI used in your writing process?",
                a: "Yes, but every piece is edited and refined by human experts.",
              },
              {
                q: "Can writers match our brand voice?",
                a: "Absolutely — brand tone and consistency are core requirements.",
              },
              {
                q: "How quickly can content be delivered?",
                a: "Initial content can go live within 7–10 business days.",
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
          Content That Works Harder Than Ads
        </h2>
        <Link href="/contact">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-400">
            Hire Content Writers
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>
    </main>
  );
}
