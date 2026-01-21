import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Briefcase,
  Target,
  TrendingUp,
  Layers,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "White Label Marketing Services for Agencies | Avaantra Global",
  description:
    "Deliver more marketing projects without hiring. Avaantra Global provides 100% white-label marketing services for agencies — SEO, PPC, content, and automation, all under your brand.",
};

export default function WhiteLabelMarketingPage() {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "SEO (Search Engine Optimization)",
      desc: "Technical SEO, content strategy, authority building, and analytics.",
      outcome: "Predictable rankings and long-term traffic growth",
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "PPC & Paid Advertising",
      desc: "Google, Meta, LinkedIn ads with constant testing and optimization.",
      outcome: "Lower CPL and higher ROI with transparent reporting",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "Social Media Marketing",
      desc: "Strategy, creatives, scheduling, and paid social campaigns.",
      outcome: "Consistent engagement and brand presence",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Content Marketing",
      desc: "Blogs, emails, lead magnets, case studies, and PR content.",
      outcome: "Authority building and 2–3X organic conversions",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Marketing Automation",
      desc: "CRM workflows, lead scoring, funnels, and dashboards.",
      outcome: "Always-on lead nurturing and scalable delivery",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Deliver More Marketing Projects — Without Hiring or Stress
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10">
            Scale your agency confidently. Our expert team delivers SEO, Paid
            Ads, Content, and Automation under your brand — so you grow without
            overhead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free White Label Demo Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              See How White Label Works
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              The Real Problem Agency Owners Face
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Growth shouldn’t feel like gambling with your reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-purple-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "More clients, less delivery bandwidth",
                "Hiring senior talent is slow and expensive",
                "Freelancers are unreliable",
                "Quality drops under pressure",
                "Missed deadlines hurt retention",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4 text-dark">
                Say Yes to Every Client — Safely
              </h3>
              <p className="text-gray-600">
                White label delivery lets you scale without hiring or risking
                quality. That’s exactly what we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Our Promise: You Focus on Clients, We Handle Delivery
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "2–3X delivery capacity",
              "40–60% faster turnaround",
              "100% white-label confidentiality",
              "Guaranteed timelines & quality",
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Our White Label Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every core marketing service your clients need — delivered under
              your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((item, idx) => (
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

      {/* Why Agencies Trust Avaantra */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Why Agencies Trust Avaantra Global
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We’ve walked in your shoes. We understand hiring pressure, client
              deadlines, and margin management — and built this service to fix
              exactly that.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "20+ years of digital marketing experience",
              "100% White Label Guarantee (your client, your brand)",
              "AI-enhanced reporting & optimization",
              "Dedicated project managers for every agency",
              "No minimum project requirement",
              "Start small, scale fast without risk",
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

          <p className="text-center mt-10 text-gray-700 font-semibold">
            Our goal: Help you deliver better, faster, and more profitably —
            without expanding your team.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our White Label Process
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Discovery Call",
                desc: "Understand your services & goals",
              },
              {
                step: "2",
                title: "Brand Alignment",
                desc: "Reports, tools & tone setup",
              },
              {
                step: "3",
                title: "Pilot Project",
                desc: "Test delivery under your brand",
              },
              {
                step: "4",
                title: "Scale Delivery",
                desc: "Multiple clients & campaigns",
              },
              {
                step: "5",
                title: "Optimize Monthly",
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
            Outcome: A white-label operation that feels fully in-house to your
            clients
          </p>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600">
              Choose what fits your agency’s structure and growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Project-Based",
                bestFor: "Agencies testing white label delivery",
                work: "Pay per project",
                outcome: "Quick scale-up with low risk",
              },
              {
                title: "Dedicated Team",
                bestFor: "Long-term scaling",
                work: "Team works full-time under your brand",
                outcome: "Consistent, predictable delivery",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Multi-service campaigns",
                work: "Execution across SEO, PPC, content & automation",
                outcome: "Faster output with full visibility",
              },
              {
                title: "White Label Retainer",
                bestFor: "Ongoing clients",
                work: "Predictable monthly delivery",
                outcome: "Seamless execution every month",
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
            All plans include NDA & IP protection, branded reports, Slack/email
            access, and transparent dashboards.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              What Agencies Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We went from 12 clients to 28 in 2 months without hiring anyone. Avaantra handled everything perfectly.",
                by: "Founder, Creative Agency (USA)",
              },
              {
                quote:
                  "They deliver better than most in-house teams I’ve managed.",
                by: "Digital Director (UK)",
              },
              {
                quote:
                  "The white-label setup is seamless. Clients think they’re part of our agency.",
                by: "CEO, B2B Marketing Agency (Singapore)",
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
              Case Study: Scaling Without Hiring
            </h2>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">
                Mid-size SEO & PPC Agency (UK)
              </p>

              <p className="font-bold mb-2">Challenge</p>
              <p className="text-gray-600 mb-4">
                Short on senior specialists while client load increased
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                Avaantra deployed two white-label pods for SEO and PPC delivery
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3">
                {[
                  "2.5X delivery in 90 days",
                  "35% margin improvement",
                  "0 missed deadlines",
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
              FAQs — We Answer Before You Ask
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Will my clients know it’s outsourced?",
                a: "Never. We communicate, report, and deliver fully under your brand.",
              },
              {
                q: "What if I don’t like the quality?",
                a: "We start with a pilot. No long contracts, no risk.",
              },
              {
                q: "Can you use our project management tools?",
                a: "Yes. We adapt to ClickUp, Asana, Slack, and your workflow.",
              },
              {
                q: "What’s your turnaround time?",
                a: "Typically 3–5 business days per campaign setup.",
              },
              {
                q: "Do you work with small agencies?",
                a: "Yes. Whether you manage 5 clients or 50, we scale with you.",
              },
              {
                q: "Can you handle multi-language campaigns?",
                a: "Absolutely. English, Hindi, Arabic, and Spanish supported.",
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
            Ready to Deliver More and Stress Less?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Focus on strategy and relationships. We handle execution — quietly,
            consistently, and at scale.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free White Label Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
