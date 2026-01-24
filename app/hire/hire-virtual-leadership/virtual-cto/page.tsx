import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire SEO Experts in 15 Days | Free SEO Consultation | Avaantra Global",
  description:
    "Talk to SEO experts who focus on traffic, leads, and ROI — not vanity rankings. Hire dedicated SEO specialists in just 15 days with Avaantra Global.",
};

export default function HireSEOExpertsCTAPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Hire SEO Experts Who Actually Deliver?
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            This is where strategy turns into execution. Hire dedicated SEO
            experts focused on rankings, conversions, and predictable revenue
            growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Book a Free SEO Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>

            <Link href="/hire-seo-experts">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Full SEO Services
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mt-14 text-left max-w-5xl mx-auto">
            {[
              "On-page, technical & off-page SEO experts",
              "7–15 day onboarding",
              "2–3X faster ranking improvements",
              "Buyer-intent keyword strategy",
              "Transparent GA4 & Search Console reporting",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3"
              >
                <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                <p className="text-sm text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why Most SEO Engagements Fail
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You’ve probably already tried SEO. The issue wasn’t effort — it
              was direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Focus on rankings, not revenue",
                "No ownership of execution",
                "Technical SEO left half-done",
                "Reports without business context",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                This Page Exists for a Reason
              </h3>
              <p className="text-gray-600">
                To help you decide if hiring a dedicated SEO expert is the right
                growth move — before wasting another quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            What Happens After You Say Yes
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              "3–5X organic traffic growth",
              "40% more qualified inbound leads",
              "Clear ROI visibility from SEO",
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
              What Our SEO Experts Handle for You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you hire us, execution is end-to-end — not advisory theater.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "On-Page SEO",
                desc: "Keyword optimization, meta tags, URL structuring",
                outcome: "Higher visibility and stronger click-through rates",
              },
              {
                title: "Technical SEO",
                desc: "Core Web Vitals, crawl fixes, indexability, architecture",
                outcome: "Faster, cleaner, search-engine-friendly sites",
              },
              {
                title: "Content SEO",
                desc: "Topic clusters, semantic SEO, AI keyword expansion",
                outcome: "Sustained impressions and engagement growth",
              },
              {
                title: "Link Building",
                desc: "White-hat backlinks, digital PR, guest posting",
                outcome: "Authority, trust, and ranking stability",
              },
              {
                title: "Analytics & Reporting",
                desc: "GA4, Search Console, Ahrefs, SEMrush",
                outcome: "Clear ROI and keyword-level accountability",
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
              Industry-Specific SEO Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You’re matched with SEO specialists who already know your market.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "SaaS & B2B",
                desc: "Pipeline-focused SEO for high-intent buyers",
              },
              {
                title: "E-commerce",
                desc: "Product & category SEO that improves CTR and revenue",
              },
              {
                title: "HealthTech",
                desc: "Compliance-aware content and reputation SEO",
              },
              {
                title: "EdTech",
                desc: "Student and institutional keyword dominance",
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
              Real Results From Hiring Our SEO Experts
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">B2B SaaS Analytics Platform</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Flat organic traffic for 6 months despite ongoing SEO spend
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Technical restructuring + content clusters aligned to buyer
                intent
              </p>
            </div>

            <div>
              <p className="font-bold mb-4 text-orange-600">Results</p>
              <ul className="space-y-3">
                {[
                  "+184% organic traffic growth",
                  "+68% increase in MQLs",
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Questions Before You Commit
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How soon will I see SEO results?",
                a: "Most clients see measurable traction within 90 days, depending on competition and domain authority.",
              },
              {
                q: "Do you actually implement technical SEO fixes?",
                a: "Yes. Our SEO experts work directly with your dev team or handle fixes themselves.",
              },
              {
                q: "Can I hire an SEO expert for a specific niche?",
                a: "Absolutely. SaaS, eCommerce, HealthTech, EdTech, and more.",
              },
              {
                q: "Do you offer white-label SEO?",
                a: "Yes — many agencies use us as their backend SEO delivery team.",
              },
              {
                q: "What tools do your SEO experts use?",
                a: "SEMrush, Ahrefs, Screaming Frog, SurferSEO, GA4, and Search Console.",
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
      {/* Why This Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Why This SEO Model Works
          </h2>

          <p className="text-lg text-gray-600">
            Because SEO isn’t about chasing algorithms. It’s about consistent
            execution, clear ownership, and measurable business growth over
            time.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Turn SEO Into a Growth Channel
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            One conversation. Clear next steps. No pressure — just strategy.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free SEO Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
