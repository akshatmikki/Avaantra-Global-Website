import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Search,
  BarChart3,
  Link2,
  Gauge,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire SEO Experts | On-Page, Technical & Off-Page SEO Specialists | Avaantra Global",
  description:
    "Hire experienced SEO experts to improve rankings, traffic, and leads. Avaantra Global provides dedicated SEO specialists who deliver measurable, long-term growth.",
};

export default function HireSEOExpertsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire SEO Experts — Drive Organic Growth That Converts
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Ranking isn’t enough — you need revenue from search. Avaantra Global
            helps you hire dedicated SEO experts who blend keyword strategy,
            content, and technical optimization to deliver measurable business
            outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire SEO Experts in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-5 gap-4 mt-14 text-left max-w-5xl mx-auto">
            {[
              "On-page, technical & off-page SEO mastery",
              "7–15 day onboarding",
              "2–3X faster ranking improvement",
              "Data-driven keyword & content strategy",
              "100% transparent GA4 & Search Console reporting",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-start"
              >
                <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                <p className="text-sm text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem With Most SEO
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most SEO fails because it’s disconnected from business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Agencies chase vanity keywords",
                "Rankings improve but conversions don’t",
                "Technical SEO gets ignored",
                "Strategy stops at audits, not execution",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                You Don’t Need More Keywords
              </h3>
              <p className="text-gray-600">
                You need SEO that moves the business needle — traffic that
                converts, not charts that look nice in reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Measurable, Long-Term SEO Growth
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We provide dedicated SEO specialists who align visibility, traffic,
            and conversions with real revenue goals.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "3–5X more organic traffic",
              "40% more qualified leads",
              "100% trackable ROI from SEO",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SEO Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our SEO Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Full-stack SEO execution — not isolated tactics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "On-Page SEO",
                desc: "Keyword optimization, meta tags, URL structuring",
                outcome: "Search visibility + better CTR",
              },
              {
                title: "Technical SEO",
                desc: "Site architecture, Core Web Vitals, crawl & index fixes",
                outcome: "Faster, more indexable websites",
              },
              {
                title: "Content SEO",
                desc: "Topic clusters, semantic SEO, AI-driven keyword expansion",
                outcome: "Higher impressions & dwell time",
              },
              {
                title: "Link Building",
                desc: "White-hat backlinks, digital PR, guest posting",
                outcome: "Domain authority & ranking stability",
              },
              {
                title: "Analytics & Reporting",
                desc: "GA4, Search Console, Ahrefs, SEMrush",
                outcome: "Clear ROI & keyword growth",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-orange-600">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "SaaS & B2B",
                desc: "Organic lead generation with authority content",
              },
              {
                title: "E-commerce",
                desc: "Product & category SEO with CTR optimization",
              },
              {
                title: "HealthTech",
                desc: "Compliance-focused content & reputation SEO",
              },
              {
                title: "EdTech",
                desc: "Student & institutional keyword dominance",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
              Case Study: B2B SaaS SEO Turnaround
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">SaaS Analytics Platform</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Flat organic traffic for 6 months
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Site architecture revamp + content clusters
              </p>
            </div>

            <div>
              <p className="font-bold mb-4 text-orange-600">Results</p>
              <ul className="space-y-3">
                {[
                  "+184% organic traffic",
                  "+68% MQLs",
                  "6X ROI on SEO investment",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 font-semibold">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark">FAQs</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How soon can I see SEO results?",
                a: "Most projects show measurable growth within 90 days, depending on competition and domain age.",
              },
              {
                q: "Do you handle technical fixes?",
                a: "Yes — including developer coordination for implementation.",
              },
              {
                q: "Can I hire niche-specific SEO experts?",
                a: "Yes. SaaS, eCommerce, HealthTech, and more.",
              },
              {
                q: "Do you offer white-label SEO?",
                a: "Yes — ideal for agencies expanding delivery capacity.",
              },
              {
                q: "What tools do you use?",
                a: "SEMrush, Ahrefs, Screaming Frog, SurferSEO, GA4.",
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SEO That Drives Predictable Growth
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Because SEO isn’t about algorithms — it’s about strategy,
            consistency, and measurable business growth.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Hire SEO Experts in 15 Days
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
