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
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "SEO (Search Engine Optimization)",
      desc: "Technical SEO, content strategy, authority building, and analytics.",
      outcome: "Predictable rankings and long-term traffic growth",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "PPC & Paid Advertising",
      desc: "Google, Meta, LinkedIn ads with constant testing and optimization.",
      outcome: "Lower CPL and higher ROI with transparent reporting",
    },
    {
      icon: <Layers className="w-8 h-8 text-orange-600" />,
      title: "Social Media Marketing",
      desc: "Strategy, creatives, scheduling, and paid social campaigns.",
      outcome: "Consistent engagement and brand presence",
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      title: "Content Marketing",
      desc: "Blogs, emails, lead magnets, case studies, and PR content.",
      outcome: "Authority building and 2–3X organic conversions",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-orange-600" />,
      title: "Marketing Automation",
      desc: "CRM workflows, lead scoring, funnels, and dashboards.",
      outcome: "Always-on lead nurturing and scalable delivery",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Deliver More Marketing Projects — Without Hiring or Stress
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-4xl mx-auto mb-10">
            Scale your agency confidently. Our expert team delivers SEO, Paid
            Ads, Content, and Automation under your brand — so you grow without
            overhead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-orange-700 hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book a Free White Label Demo Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Real Problem Agency Owners Face
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Growth shouldn’t feel like gambling with your reputation.
            </p>
          </div>

          {/* Problem + Resolution */}
          <div className="grid md:grid-cols-2 gap-10 bg-slate-50 rounded-2xl p-8 md:p-12">
            {/* Problems */}
            <ul className="space-y-4 text-slate-700 text-lg">
              {[
                "More clients, but shrinking delivery bandwidth",
                "Hiring senior talent is slow and expensive",
                "Freelancers are unreliable and hard to manage",
                "Quality drops under pressure",
                "Missed deadlines hurt retention and reputation",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-orange-500 font-bold mt-1">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Solution Callout */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Say Yes to Every Client — Safely
              </h3>
              <p className="text-slate-600 leading-relaxed">
                White-label delivery lets you scale capacity without hiring,
                without chaos, and without risking quality.
                <br />
                <br />
                That’s exactly what{" "}
                <span className="font-semibold text-orange-600">
                  Avaantra’s White Label Marketing Solution
                </span>{" "}
                gives your agency.
              </p>
            </div>
          </div>

          {/* Closing Line */}
          <p className="text-center mt-14 text-lg font-semibold text-slate-900">
            Every new project becomes an opportunity —
            <span className="text-orange-600">
              not a delivery risk.
            </span>
          </p>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Our Promise: You Focus on Clients, We Handle Delivery
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Avaantra Global becomes your silent growth partner — executing everything
            under your agency’s brand, tone, and standards.
          </p>

          {/* Promise Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-14">
            {[
              {
                title: "2–3X Delivery Capacity",
                desc: "Take on more clients without adding internal pressure.",
              },
              {
                title: "40–60% Faster Turnaround",
                desc: "Predictable timelines across campaigns and channels.",
              },
              {
                title: "100% White-Label Confidentiality",
                desc: "NDA-backed delivery. Clients never know we exist.",
              },
              {
                title: "Guaranteed Quality & SLAs",
                desc: "Dedicated PMs, QA checks, and performance benchmarks.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <div className="mt-16 max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-slate-900 mb-4">
              Predictable Outcome
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• 2–3X campaign delivery capacity</li>
              <li>• 40–60% faster turnaround times</li>
              <li>• 100% confidentiality and brand protection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Our White Label Marketing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every core marketing service your clients need —
              delivered seamlessly under your brand.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SEO (Search Engine Optimization)",
                desc: "Boost your clients’ rankings without lifting a finger.",
                bullets: [
                  "Technical audits & on-site optimization",
                  "Keyword strategy & content planning",
                  "Link-building & authority growth",
                  "Local SEO & performance tracking",
                ],
                outcome:
                  "Higher visibility, predictable rankings, and long-term traffic growth",
              },
              {
                title: "PPC & Paid Advertising",
                desc: "Run profitable ad campaigns under your brand — at scale.",
                bullets: [
                  "Google Ads, Meta, LinkedIn & Display campaigns",
                  "Ad & landing page A/B testing",
                  "Budget optimization & live reporting",
                ],
                outcome:
                  "Lower CPL, higher ROI, and transparent ad performance",
              },
              {
                title: "Social Media Marketing",
                desc: "Consistent presence, engagement, and brand authority.",
                bullets: [
                  "Content strategy, design & scheduling",
                  "Paid social campaigns",
                  "Influencer coordination (optional)",
                ],
                outcome:
                  "Higher engagement and consistent brand growth",
              },
              {
                title: "Content Marketing",
                desc: "High-quality content that attracts, educates, and converts.",
                bullets: [
                  "Blogs & website content",
                  "Email sequences & newsletters",
                  "Lead magnets, case studies & PR content",
                ],
                outcome:
                  "Authority building and 2–3X better organic conversions",
              },
              {
                title: "Marketing Automation",
                desc: "Systems that generate and nurture leads automatically.",
                bullets: [
                  "HubSpot, ActiveCampaign, Zoho & Mailchimp",
                  "Funnel workflows & CRM sync",
                  "Lead scoring & reporting dashboards",
                ],
                outcome:
                  "Predictable lead nurturing and continuous engagement",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200
                     hover:bg-white hover:shadow-xl hover:-translate-y-1
                     transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 mb-4">
                  {item.desc}
                </p>

                <ul className="space-y-2 mb-4 text-slate-700 text-sm">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-orange-500 font-bold">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-semibold text-orange-600">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Agencies Trust Avaantra */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Why Agencies Trust Avaantra Global
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We’ve walked in your shoes. We understand hiring pressure,
              client deadlines, and margin management —
              and built this service to solve exactly that.
            </p>
          </div>

          {/* Trust Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "20+ years of digital marketing experience",
              "100% white-label guarantee — your client, your brand",
              "AI-enhanced reporting & performance optimization",
              "Dedicated project managers for every agency",
              "No minimum project requirement",
              "Start small, scale fast — without delivery risk",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200
                     hover:shadow-xl hover:-translate-y-1
                     transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-orange-500 mb-3" />
                <p className="font-semibold text-slate-900">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <p className="text-center mt-14 text-lg font-semibold text-slate-900">
            Our goal:{" "}
            <span className="text-orange-600">
              Help you deliver better, faster, and more profitably
            </span>{" "}
            — without expanding your internal team.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Our White Label Process
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A simple, secure system to scale your agency’s delivery
              without disrupting clients or brand trust.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid md:grid-cols-5 gap-5">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We understand your services, clients, pricing, and growth goals.",
              },
              {
                step: "02",
                title: "Brand Alignment",
                desc: "Reporting, tools, templates, and tone aligned to your agency.",
              },
              {
                step: "03",
                title: "Pilot Project",
                desc: "A test campaign or client delivered fully under your brand.",
              },
              {
                step: "04",
                title: "Scale Delivery",
                desc: "Multiple clients, parallel campaigns, predictable turnaround.",
              },
              {
                step: "05",
                title: "Monthly Optimization",
                desc: "Continuous performance tuning, automation, and reporting.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6
                     hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-orange-400 mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <p className="text-center text-lg text-slate-200 mt-14 font-semibold">
            Outcome:{" "}
            <span className="text-orange-400">
              A seamless white-label operation that feels fully in-house to your clients.
            </span>
          </p>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Flexible models designed to match your agency’s structure,
              delivery needs, and growth stage.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Project-Based",
                bestFor: "Agencies testing white-label delivery",
                work: "Pay per project, no long-term commitment",
                outcome: "Quick scale-up with minimal risk",
              },
              {
                title: "Dedicated Team",
                bestFor: "Agencies planning long-term scale",
                work: "Full-time team working under your brand",
                outcome: "Consistent, predictable delivery",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Multi-service or high-volume campaigns",
                work: "Execution across SEO, PPC, content & automation",
                outcome: "Faster output with full visibility",
              },
              {
                title: "White Label Retainer",
                bestFor: "Agencies with ongoing clients",
                work: "Fixed monthly delivery capacity",
                outcome: "Seamless execution every month",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200
                     hover:bg-white hover:shadow-xl hover:-translate-y-1
                     transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <ul className="space-y-3 text-slate-700">
                  <li>
                    <span className="font-semibold text-slate-900">Best For:</span>{" "}
                    {item.bestFor}
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">How It Works:</span>{" "}
                    {item.work}
                  </li>
                  <li>
                    <span className="font-semibold text-orange-600">Outcome:</span>{" "}
                    {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Included Line */}
          <p className="text-center mt-14 text-slate-600 text-lg">
            All models include{" "}
            <span className="font-semibold text-slate-900">
              NDA & IP protection, branded reports, Slack / email access,
              and transparent dashboards.
            </span>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Agencies Say
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              Real feedback from agencies scaling delivery with Avaantra.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We went from 12 clients to 28 in just 2 months without hiring anyone. Avaantra handled everything flawlessly.",
                by: "Founder, Creative Agency (USA)",
              },
              {
                quote:
                  "They deliver better than most in-house teams I’ve managed over the years.",
                by: "Digital Director (UK)",
              },
              {
                quote:
                  "The white-label setup is seamless. Clients genuinely think they’re part of our agency.",
                by: "CEO, B2B Marketing Agency (Singapore)",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="italic text-slate-700 mb-6 leading-relaxed">
                  “{item.quote}”
                </p>
                <p className="font-semibold text-slate-900">
                  {item.by}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Case Study: Scaling Without Hiring
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              How an agency increased delivery capacity without expanding headcount
            </p>
          </div>

          {/* Case Study Card */}
          <div className="grid md:grid-cols-5 gap-8 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">

            {/* Left: Context */}
            <div className="md:col-span-3">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold mb-1">
                    Client
                  </p>
                  <p className="text-slate-700">
                    Mid-size SEO & PPC Agency (UK)
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold mb-1">
                    Challenge
                  </p>
                  <p className="text-slate-700">
                    Client volume was increasing rapidly, but the agency lacked senior
                    SEO & PPC specialists to maintain quality and deadlines.
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold mb-1">
                    Solution
                  </p>
                  <p className="text-slate-700">
                    Avaantra deployed two fully white-label delivery pods — one focused
                    on SEO and one on PPC — operating inside the agency’s workflows,
                    tools, and brand.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="md:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-emerald-100">
              <p className="text-sm uppercase tracking-wide text-emerald-600 font-bold mb-4">
                Results (90 Days)
              </p>

              <ul className="space-y-4">
                {[
                  "2.5× delivery capacity increase",
                  "35% improvement in operating margins",
                  "Zero missed deadlines across all clients",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 items-start font-semibold text-slate-800"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
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
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              FAQs — We Answer Before You Ask
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              Clear answers to the most common agency concerns.
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Will my clients know it’s outsourced?",
                a: "Never. All communication, reports, and execution happen fully under your brand.",
              },
              {
                q: "What if I don’t like the quality?",
                a: "We start with a pilot engagement. No long-term contracts, no risk.",
              },
              {
                q: "Can you use our project management tools?",
                a: "Yes. We work inside ClickUp, Asana, Slack, Jira, or your existing workflow.",
              },
              {
                q: "What’s your turnaround time?",
                a: "Most campaign setups are completed within 3–5 business days.",
              },
              {
                q: "Do you work with small agencies?",
                a: "Absolutely. Whether you manage 5 clients or 50, we scale with you.",
              },
              {
                q: "Can you handle multi-language campaigns?",
                a: "Yes. We support English, Hindi, Arabic, and Spanish markets.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-semibold text-slate-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why This Works
          </h2>

          <p className="text-lg text-slate-300 mb-6 max-w-3xl mx-auto">
            Because you shouldn’t have to choose between growth and quality.
          </p>

          <div className="space-y-4 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            <p>
              You focus on <strong>client relationships, strategy, and growth</strong>.
            </p>
            <p>
              We handle <strong>execution — quietly, consistently, and at scale</strong>.
            </p>
            <p className="text-xl font-semibold text-white mt-6">
              This isn’t outsourcing.
              <br />
              It’s empowering your agency to grow <span className="text-orange-400">sustainably</span>.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-br from-slate-600 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Deliver More and Stress Less?
          </h2>

          <p className="text-lg text-orange-100 mb-10 max-w-2xl mx-auto">
            Focus on strategy and relationships.
            <br />
            We’ll handle delivery — reliably, invisibly, and under your brand.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-orange-700
                   hover:bg-orange-50 transform hover:scale-105
                   transition-all duration-300 hover:shadow-xl"
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
