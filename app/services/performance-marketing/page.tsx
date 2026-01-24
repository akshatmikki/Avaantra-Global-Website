import ScrollToTop from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function PerformanceMarketingPage() {
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
                <Settings className="inline mr-2" size={16} />
                Performance Marketing
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Drive Results with{" "}
                <span className="text-primary">Performance Marketing</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Get measurable ROI from your marketing spend. We optimize paid
                campaigns across Google, Facebook, LinkedIn, and more to drive
                qualified leads and conversions that grow your business.
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
                alt="Performance Marketing"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Performance Marketing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Measurable ROI</h3>
              <p className="text-gray-600">
                Track every dollar spent and optimize campaigns for maximum
                return on investment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Data-Driven Optimization
              </h3>
              <p className="text-gray-600">
                Continuous testing and optimization based on real performance
                data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Multi-Channel Expertise
              </h3>
              <p className="text-gray-600">
                Expert management across Google Ads, Facebook, LinkedIn, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">
              Our Performance Marketing Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Full-funnel paid growth — from demand generation to revenue
              optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Ads & Search",
                desc: "High-intent keyword targeting for consistent lead flow",
              },
              {
                title: "Meta (Facebook & Instagram)",
                desc: "Creative-led campaigns optimized for scale",
              },
              {
                title: "LinkedIn Ads",
                desc: "B2B lead generation and ABM campaigns",
              },
              {
                title: "Landing Page Optimization",
                desc: "Conversion-focused UX and messaging",
              },
              {
                title: "Retargeting & Funnels",
                desc: "Bring back high-intent visitors and close deals",
              },
              {
                title: "Analytics & Attribution",
                desc: "GA4, conversion tracking, and ROI visibility",
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Proven Growth Process
            </h2>
            <p className="text-gray-600">
              Performance marketing done as a system — not random campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Audit & Goal Alignment",
              "Channel & Funnel Strategy",
              "Campaign Launch",
              "Testing & Optimization",
              "Scale What Works",
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Platforms We Work With</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Google Ads",
              "Meta Ads",
              "LinkedIn Ads",
              "GA4",
              "Google Tag Manager",
              "Hotjar",
              "HubSpot",
              "CRM Integrations",
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-gray-50 py-4 px-6 rounded-lg shadow font-medium"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">
              Case Study: Scaling Paid Growth
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
            <div>
              <p className="font-semibold mb-2">Client</p>
              <p className="text-gray-600 mb-4">B2B SaaS Platform</p>

              <p className="font-semibold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Rising ad costs and inconsistent lead quality
              </p>

              <p className="font-semibold mb-2">Solution</p>
              <p className="text-gray-600">
                Funnel restructuring, creative testing, and intent-based
                targeting
              </p>
            </div>

            <div>
              <p className="font-semibold mb-4 text-primary">Results</p>
              <ul className="space-y-3">
                {[
                  "3.2X ROAS",
                  "45% lower cost per lead",
                  "2X pipeline growth",
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">FAQs</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How quickly can we see results?",
                a: "Most campaigns show meaningful traction within 30–45 days.",
              },
              {
                q: "Do you manage creatives too?",
                a: "Yes — ad copy, creatives, and landing page recommendations.",
              },
              {
                q: "What budgets do you work with?",
                a: "From early-stage testing to large-scale growth budgets.",
              },
              {
                q: "Do you provide reporting?",
                a: "Weekly dashboards with full performance transparency.",
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
      <section className="py-24 bg-gradient-to-br from-dark via-gray-900 to-dark text-light">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Turn Ad Spend Into Revenue?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Let’s build predictable, scalable performance marketing for your
            business.
          </p>

          <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
            Book Free Consultation →
          </Button>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}
