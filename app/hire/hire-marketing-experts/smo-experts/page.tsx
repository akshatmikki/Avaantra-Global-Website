import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire SMO Experts | Social Media Growth & Brand Engagement Specialists | Avaantra Global",
  description:
    "Hire SMO experts to grow engagement, community, and brand trust across social platforms. Avaantra Global provides dedicated social media specialists focused on measurable growth.",
};

export default function HireSMOExpertsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire SMO Experts — Build Communities That Convert
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Social media isn’t about posting content — it’s about building trust
            and engagement. Avaantra Global helps you hire SMO experts who turn
            platforms into consistent brand and lead-generation channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire SMO Experts in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-5 gap-4 mt-14 text-left max-w-5xl mx-auto">
            {[
              "LinkedIn, Instagram, Facebook, X & YouTube expertise",
              "Strategy, content & analytics under one roof",
              "7–15 day onboarding",
              "Brand-consistent creatives & storytelling",
              "Transparent engagement & growth reporting",
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
              Why Most Social Media Efforts Fail
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Posting without strategy leads to noise, not growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Inconsistent posting and messaging",
                "No clear brand voice or positioning",
                "Engagement stops once ads stop",
                "Metrics tracked without business impact",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                Social Media Needs Direction
              </h3>
              <p className="text-gray-600">
                You don’t need more posts. You need a social growth strategy that
                connects engagement, brand recall, and lead generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Community-Led Brand Growth
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We provide SMO specialists who manage platforms end-to-end — from
            planning and publishing to engagement and analytics.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "2–4X engagement growth",
              "40% stronger brand visibility",
              "Consistent follower-to-lead conversion",
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

      {/* SMO Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our SMO Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Platform-specific execution, not generic posting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Platform Strategy",
                desc: "LinkedIn, Instagram, Facebook, X & YouTube planning",
                outcome: "Audience-aligned growth",
              },
              {
                title: "Content & Storytelling",
                desc: "Creative direction, captions, reels & carousels",
                outcome: "Higher engagement & recall",
              },
              {
                title: "Brand Positioning",
                desc: "Consistent voice, visuals & messaging",
                outcome: "Stronger brand trust",
              },
              {
                title: "Community Management",
                desc: "Replies, DMs, engagement & moderation",
                outcome: "Active, loyal communities",
              },
              {
                title: "Analytics & Reporting",
                desc: "Engagement, reach & conversion tracking",
                outcome: "Clear performance insights",
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

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Case Study: Social Growth for a FinTech Brand
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">FinTech Startup</p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Low engagement and weak social presence
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Brand voice revamp with platform-focused content strategy
              </p>
            </div>

            <div>
              <p className="font-bold mb-4 text-orange-600">Results</p>
              <ul className="space-y-3">
                {[
                  "+312% engagement growth",
                  "4X post reach",
                  "25% increase in inbound leads",
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

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build Engagement, Trust & Brand Authority
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Because people don’t follow ads — they follow value.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Hire SMO Experts in 15 Days
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
