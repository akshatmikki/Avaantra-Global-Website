import { Button } from "@/components/ui/button";
import { ArrowRight, Tag, CheckCircle, Briefcase } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "For Agencies | Scale Your Agency Without Hiring Risk",
  description:
    "Avaantra Global helps digital, creative, and software agencies scale delivery without hiring risk — through white-label marketing, white-label development, dedicated teams, and flexible partnership programs.",
};

export default function ForAgenciesPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            🏷️ FOR AGENCIES
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Grow Your Agency Without Growing Your Overhead
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            You built your agency with hard work and hustle. But now, growth
            feels stuck — too many client requests, not enough hands,
            unpredictable workloads, and rising costs.
            <br />
            <br />
            Avaantra Global helps agencies scale confidently with white-label
            marketing, software development, and managed agile pods — all
            delivered under your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
            >
              Book Your Free Growth Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
            >
              Explore White-Label Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              The Real Problem You’re Facing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Let’s face it — growing an agency is hard. You know how to sell.
              You know how to deliver. But growth breaks things.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              {[
                "Too many client requests, too few experts",
                "Great talent is expensive and hard to retain",
                "Your team burns out juggling deadlines",
                "Projects run late and margins shrink",
                "One bad hire can wipe out profits",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-700 mb-4">
                You don’t have a talent problem.
                <br />
                <strong>You have a scalability problem.</strong>
              </p>

              <p className="font-semibold text-dark">
                And that’s exactly what Avaantra Global solves.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Predictable Growth Without Growing Headcount
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We give you instant access to world-class marketing, development,
              and growth teams — all working quietly behind your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              "2–3X delivery capacity in 90 days",
              "Dedicated pods or white-label teams",
              "100% white-labeled reports & communication",
              "NDA-protected confidentiality",
              "Predictable pricing & performance dashboards",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <CheckCircle className="w-7 h-7 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 font-semibold max-w-3xl mx-auto">
            We don’t just deliver tasks.
            <br />
            We help you deliver outcomes — faster, better, and profitably.
          </p>
        </div>
      </section>

      {/* Solutions Tailored for Agencies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Solutions Tailored for Agencies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Avaantra Global is built for agency owners who want to grow faster
              without losing control, margins, or credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "White Label Marketing Services",
                desc: "Execution under your brand while you manage clients.",
                points: [
                  "SEO, ads, content & automation",
                  "Branded dashboards",
                  "Dedicated managers",
                  "AI ROI tracking",
                ],
                outcome: "Deliver more, retain clients, grow MRR.",
                cta: "Explore White Label Marketing",
                link: "/solutions/For-Agencies/White-Label-Marketing",
              },
              {
                title: "White Label Software Development",
                desc: "Offer software without managing engineers.",
                points: [
                  "Web & mobile apps",
                  "SaaS & API integrations",
                  "AI & automation builds",
                  "UI/UX & QA",
                ],
                outcome: "Expand services without expanding payroll.",
                cta: "Start a White-Label Project",
                link: "/solutions/For-Agencies/White-Label-Software-Development",
              },
              {
                title: "Dedicated Teams for Agencies",
                desc: "Full-time experts working only on your projects.",
                points: [
                  "SEO & content teams",
                  "Performance marketers",
                  "Developers & QA",
                  "Growth pods",
                ],
                outcome: "Consistent delivery, zero burnout.",
                cta: "Hire a Dedicated Team",
                link: "/solutions/For-Agencies/Dedicated-Teams-for-Agencies",
              },
              {
                title: "Scale Engineering Without Hiring Risk",
                desc: "Cross-functional teams, fully managed by Avaantra.",
                points: [
                  "Sudden project spikes",
                  "Enterprise projects",
                  "Tight deadlines",
                  "Developer shortages",
                ],
                outcome: "Immediate capacity without hiring overhead.",
                cta: "Explore Scale Engineering",
                link: "/solutions/For-Agencies/Scale-Engineering-Without-Hiring-Risk",
              },
              {
                title: "Agency Partnership Program",
                desc: "Long-term collaboration for serious agencies.",
                points: [
                  "Revenue sharing",
                  "Co-marketing campaigns",
                  "AI tools access",
                  "Priority onboarding",
                ],
                outcome: "New revenue streams & scale.",
                cta: "Explore Partnership Program",
                link: "/solutions/For-Agencies/Agency-Partnership-Program",
              },
              {
                title: "AI & Automation for Agencies",
                desc: "Use AI to deliver faster and increase margins.",
                points: [
                  "AI content & ad automation",
                  "Lead scoring & CRM automation",
                  "Analytics & reporting bots",
                  "Custom AI tools for clients",
                ],
                outcome: "Higher margins with less manual work.",
                cta: "Explore AI & Automation",
                link: "/solutions/For-Agencies/AI-&-Automation",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all h-full"
              >
                <h3 className="text-xl font-bold text-dark mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-semibold text-dark mb-3">
                  Outcome: {item.outcome}
                </p>

                <Link
                  href={item.link}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  {item.cta}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Agencies Trust Avaantra */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Agencies Trust Avaantra Global
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We’ve been where you are. Our founders bring 20+ years of
              real-world marketing and technology experience — not theory.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              "Hybrid AI + Human Delivery",
              "100% White-Label Guarantee",
              "Predictable Pricing",
              "Real-Time Reporting",
              "Transparent Communication",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <CheckCircle className="w-7 h-7 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-dark">{item}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow">
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">
              Our Simple, Zero-Risk Process
            </h3>

            <div className="grid md:grid-cols-5 gap-6 text-center">
              {[
                "Discovery & Alignment",
                "Pilot Setup",
                "Delivery & Review",
                "Scale Seamlessly",
                "Continuous Optimization",
              ].map((step, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {idx + 1}
                  </div>
                  <p className="font-medium text-dark">{step}</p>
                </div>
              ))}
            </div>

            <p className="text-center mt-8 font-semibold text-gray-700">
              Outcome: Zero-risk start. Predictable scaling.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600">
              Choose what fits your agency’s delivery style and growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Project-Based",
                bestFor: "One-time, fixed-scope work",
                how: "Pay per project",
                outcome: "Quick delivery, no commitment",
              },
              {
                title: "Dedicated Team",
                bestFor: "Long-term, single-service delivery",
                how: "You manage the team",
                outcome: "Predictable, reliable output",
              },
              {
                title: "Managed Agile Pods",
                bestFor: "Cross-functional & fast-paced delivery",
                how: "Avaantra manages everything",
                outcome: "2–3X faster delivery, zero management",
              },
              {
                title: "White-Label Retainer",
                bestFor: "Continuous white-label support",
                how: "Fully managed by Avaantra",
                outcome: "Predictable monthly output",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-dark">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <strong>Best For:</strong> {item.bestFor}
                  </li>
                  <li>
                    <strong>How It Works:</strong> {item.how}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {item.outcome}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 font-semibold text-gray-700">
            All models include NDA protection, branded reports, and flexible
            scaling.
          </p>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              What Agencies Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Avaantra helped us grow our client base by 40% in 3 months — every client thought it was our in-house team.",
                by: "Agency Founder, UK",
              },
              {
                quote:
                  "We used their Agile Pod for a SaaS project. Delivery was on time, communication was seamless, and the client renewed for a year.",
                by: "Digital Director, Singapore",
              },
              {
                quote:
                  "They feel like part of our agency. We now say yes to projects we used to turn down.",
                by: "Agency Partner, Canada",
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Case Study: 3X Delivery Capacity in 90 Days
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-2">Client</p>
              <p className="text-gray-600 mb-4">
                Mid-size Marketing Agency (USA)
              </p>

              <p className="font-bold mb-2">Problem</p>
              <p className="text-gray-600 mb-4">
                Overflowing projects, missed deadlines, limited internal staff.
              </p>

              <p className="font-bold mb-2">Solution</p>
              <p className="text-gray-600">
                One dedicated SEO team + one Managed Agile Pod (design +
                development).
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="font-bold text-green-600 mb-4">Results</p>
              <ul className="space-y-3 font-semibold">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Delivery capacity tripled
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  95% client satisfaction
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Zero hiring during scaling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              FAQs — We Answer Before You Ask
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Will my clients know I’m using Avaantra?",
                a: "No. Everything is fully white-labeled — reports, communication, even email.",
              },
              {
                q: "What if I’m not satisfied?",
                a: "We start with a small pilot. If you’re unhappy, you don’t pay.",
              },
              {
                q: "Can you work in our time zone?",
                a: "Yes — we operate across US, UK, and APAC hours.",
              },
              {
                q: "Do I need a long-term contract?",
                a: "No. Month-to-month options are available.",
              },
              {
                q: "How do we collaborate daily?",
                a: "Slack, Asana, ClickUp, or Jira — we use your tools.",
              },
              {
                q: "How quickly can we start?",
                a: "Usually within 5–7 business days post-onboarding.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-dark mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scale Smart. Deliver More. Stay Lean.
          </h2>

          <p className="text-gray-300 mb-8">
            You get the control of your team, the efficiency of automation, the
            intelligence of AI, and the accountability of a real partner.
            <br />
            We work behind the curtain — you take the credit.
          </p>

          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Book a Free Growth Call
          </Button>
        </div>
      </section>
    </main>
  );
}
