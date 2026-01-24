import ScrollToTop from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SEOServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dark via-gray-900 to-dark text-light py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Search className="inline mr-2" size={16} />
                SEO Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Rank Higher & Drive{" "}
                <span className="text-primary">Organic Traffic</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Improve your search engine rankings and drive qualified organic
                traffic. We optimize your website for search engines through
                technical SEO, content optimization, and strategic link
                building.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-8 py-6 text-lg">
                  Book Free Consultation →
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-team-working-on-software-development-.jpg"
                alt="SEO Services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose SEO Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Long-Term Growth</h3>
              <p className="text-gray-600">
                Build sustainable organic traffic that grows over time without
                ongoing ad spend.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Technical Excellence
              </h3>
              <p className="text-gray-600">
                Comprehensive technical SEO audits and optimizations for better
                rankings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Content Strategy</h3>
              <p className="text-gray-600">
                Data-driven content creation that ranks and drives qualified
                traffic.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SEO Services Breakdown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our SEO Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              End-to-end SEO execution focused on rankings, traffic, and
              conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "On-Page SEO",
                desc: "Keyword optimization, meta tags, internal linking, URL structure",
              },
              {
                title: "Technical SEO",
                desc: "Core Web Vitals, crawlability, index fixes, site architecture",
              },
              {
                title: "Content SEO",
                desc: "Topic clusters, blog optimization, search intent mapping",
              },
              {
                title: "Link Building",
                desc: "White-hat backlinks, outreach, authority building",
              },
              {
                title: "Local SEO",
                desc: "Google Business Profile, citations, local rankings",
              },
              {
                title: "SEO Analytics & Reporting",
                desc: "GA4, Search Console, keyword & traffic reporting",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-gray-600">
              SEO done as a repeatable, scalable system — not guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "SEO Audit & Research",
              "Keyword & Strategy Mapping",
              "Technical & Content Fixes",
              "Authority Building",
              "Tracking & Optimization",
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <div className="text-3xl font-bold text-primary mb-3">
                  {idx + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {["SaaS & B2B", "E-commerce", "HealthTech", "EdTech"].map(
              (industry, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-xl shadow text-center font-semibold"
                >
                  {industry}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">SEO Case Study</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
            <div>
              <p className="font-semibold mb-2">Client</p>
              <p className="text-gray-600 mb-4">B2B SaaS Platform</p>

              <p className="font-semibold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Stagnant organic traffic and low inbound leads
              </p>

              <p className="font-semibold mb-2">Solution</p>
              <p className="text-gray-600">
                Technical SEO fixes, content clusters, and link-building
                strategy
              </p>
            </div>

            <div>
              <p className="font-semibold mb-4 text-primary">Results</p>
              <ul className="space-y-3">
                {[
                  "+180% organic traffic",
                  "+65% qualified leads",
                  "5X ROI from SEO",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 font-semibold">
                    <span className="text-primary">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">FAQs</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How long does SEO take to show results?",
                a: "Most websites see measurable improvements within 60–90 days.",
              },
              {
                q: "Do you handle technical SEO fixes?",
                a: "Yes — including coordination with developers when needed.",
              },
              {
                q: "Do you provide content creation?",
                a: "Yes. SEO-optimized blogs, landing pages, and content clusters.",
              },
              {
                q: "Is SEO better than paid ads?",
                a: "SEO delivers long-term growth, while ads stop when budgets stop.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-dark via-gray-900 to-dark text-light">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow with SEO?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Let’s build long-term organic visibility that compounds month after
            month.
          </p>

          <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
            Book Free SEO Consultation →
          </Button>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}
