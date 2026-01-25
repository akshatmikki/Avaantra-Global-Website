import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Layers,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Fractional CXO Team | Virtual CTO, CMO, COO & CPO | Avaantra Global",
  description:
    "Hire a Fractional CXO team including Virtual CTO, CMO, COO, and Product leaders. Avaantra Global provides senior executive leadership without full-time overhead.",
};

export default function FractionalCXOTeamPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hire a Fractional CXO Team — Executive Leadership Without
            Full-Time Overhead
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Early-stage and scaling companies don’t fail due to lack of ideas —
            they fail due to lack of leadership alignment. Avaantra provides
            fractional CXO teams that bring strategy, execution, and governance
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="cursor-pointer group bg-orange-500 text-white hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Hire Fractional CXO Team in 15 Days
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 text-left max-w-6xl mx-auto">
            {[
              "Access to senior CXO leadership",
              "CTO, CMO, COO, Product leaders",
              "Fractional cost, full accountability",
              "Strategy + execution ownership",
              "Aligned leadership cadence",
              "NDA-protected engagement",
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
              The Real Problem Scaling Companies Face
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Growth creates complexity — and most teams lack leadership depth
              to manage it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "No unified leadership across tech, product, marketing & ops",
                "Founders overloaded with strategic decisions",
                "Execution teams pulling in different directions",
                "High cost of hiring full-time CXOs",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                Leadership Gaps Kill Momentum
              </h3>
              <p className="text-gray-600">
                Without aligned executive leadership, strategy breaks down and
                execution slows. Fractional CXOs close that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: Aligned Leadership, Predictable Execution
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We assemble CXO teams that operate as one leadership unit — aligned
            to business outcomes, not individual silos.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Clear strategic direction across functions",
              "Faster decision-making & execution",
              "Reduced leadership hiring cost by 50%+",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <ShieldCheck className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CXO Roles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Roles Included in a Fractional CXO Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Virtual CTO",
                desc: "Technology strategy, architecture, security & delivery",
                icon: Layers,
              },
              {
                title: "Virtual CMO",
                desc: "Growth, demand generation, brand & revenue alignment",
                icon: BarChart3,
              },
              {
                title: "Fractional COO",
                desc: "Operations, delivery processes & execution discipline",
                icon: Users,
              },
              {
                title: "Fractional CPO",
                desc: "Product strategy, roadmap & customer alignment",
                icon: Layers,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-dark">
            Engagement Models
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Startup Leadership Pod",
              "Growth-Stage CXO Team",
              "Transformation Taskforce",
              "Interim Executive Coverage",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-dark">
            FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How is a fractional CXO team different from hiring consultants?",
                a: "Consultants advise. Fractional CXOs lead, own outcomes, and operate inside your organization.",
              },
              {
                q: "Can I start with one role and scale later?",
                a: "Yes. Most clients start with one CXO and expand into a leadership pod.",
              },
              {
                q: "How many hours do CXOs typically work?",
                a: "Typically 10–25 hours per CXO per week, depending on engagement.",
              },
              {
                q: "Is this suitable for early-stage startups?",
                a: "Especially. It provides senior leadership without burn-rate pressure.",
              },
              {
                q: "Is confidentiality guaranteed?",
                a: "Yes. NDAs, restricted access, and governance standards apply.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold mb-2 text-dark">{item.q}</h3>
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
            Build a Leadership Team That Scales With You
          </h2>

          <p className="text-blue-100 mb-8">
            Get senior CXO leadership without full-time cost or hiring risk.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer bg-orange-500 hover:bg-orange-400 text-white"
            >
              Book a Free CXO Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
