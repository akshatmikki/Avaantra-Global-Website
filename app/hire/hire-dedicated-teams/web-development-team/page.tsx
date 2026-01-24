import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Server,
  ShoppingCart,
  Layers,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Web Development Team | Full-Stack, CMS & Custom Web App Experts | Avaantra Global",
  description:
    "Hire dedicated web development teams for fast, responsive, and SEO-optimized sites. Avaantra Global offers full-stack developers, designers, and QA ready to start in 15 days.",
};

export default function HireWebDevelopmentTeamPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hire Web Development Team — Launch High-Performance Websites, Faster
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Your website isn’t just a design — it’s your growth engine.
            Avaantra Global helps you hire a full web development team that builds,
            scales, and optimizes your digital presence for speed, SEO, and
            conversion.
          </p>

          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-400">
              Hire a Web Development Team in 15 Days
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <div className="grid md:grid-cols-6 gap-4 mt-14 max-w-6xl mx-auto text-left">
            {[
              "Full-stack developers + UI/UX + QA + PM",
              "WordPress, React, PHP, Next.js expertise",
              "40–60% faster delivery",
              "SEO & mobile-first builds",
              "100% IP ownership",
              "Flexible team scaling",
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
            The Real Problem with Most Web Projects
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-purple-50 p-12 rounded-2xl">
          <ul className="space-y-4 text-gray-700">
            {[
              "Developers and designers work in silos",
              "Websites take months to deliver",
              "SEO and conversion are afterthoughts",
              "Agencies overpromise and underdeliver",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500">✗</span> {t}
              </li>
            ))}
          </ul>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">
              Your Website Is a Business Asset
            </h3>
            <p className="text-gray-600">
              You don’t need a vendor. You need a dedicated web development team
              that builds high-performing websites designed to grow with your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Promise: Fast, Functional & Future-Ready Websites
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "2–3X faster website delivery",
              "50% improved page performance",
              "30–40% more organic conversions",
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
            Our Web Development Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Frontend Development",
                desc: "React, Angular, Vue, HTML5, Tailwind, Bootstrap",
                icon: Code,
              },
              {
                title: "Backend Development",
                desc: "Node.js, Python, PHP, Laravel, .NET",
                icon: Server,
              },
              {
                title: "CMS & E-commerce",
                desc: "WordPress, Shopify, Magento, WooCommerce",
                icon: ShoppingCart,
              },
              {
                title: "Web App Development",
                desc: "Dashboards, portals & SaaS frontends",
                icon: Layers,
              },
              {
                title: "QA, Testing & Security",
                desc: "Cross-browser testing & OWASP compliance",
                icon: ShieldCheck,
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
          {[
            "SaaS & B2B Platforms",
            "E-commerce & Retail",
            "Healthcare",
            "FinTech",
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow font-semibold"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              <p className="italic mb-4">
                “Avaantra’s web team delivered our platform in record time —
                top-notch quality.”
              </p>
              <p className="font-semibold">Founder, SaaS Startup (UK)</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow">
              <p className="italic mb-4">
                “We went from design to launch in 5 weeks — everything was smooth
                and transparent.”
              </p>
              <p className="font-semibold">
                Marketing Head, FinTech App (India)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-gray-50 p-12 rounded-2xl grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-bold mb-2">Client</p>
            <p className="text-gray-600 mb-4">B2B SaaS Platform</p>
            <p className="font-bold mb-2">Challenge</p>
            <p className="text-gray-600">
              Slow loading site, poor conversions
            </p>
          </div>
          <div>
            <p className="font-bold mb-4 text-orange-600">Results</p>
            <ul className="space-y-3">
              {[
                "3.5X faster load time",
                "42% increase in leads",
                "+78 PageSpeed Score",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 font-semibold">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  {t}
                </li>
              ))}
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
                q: "Do you provide both design and development?",
                a: "Yes — every team includes UI/UX designers, developers, and QA.",
              },
              {
                q: "How soon can a website be delivered?",
                a: "Landing pages in 4–6 weeks, full platforms in 8–12 weeks.",
              },
              {
                q: "Can I manage the team directly?",
                a: "Yes, or we can assign an Avaantra PM for full accountability.",
              },
              {
                q: "Do you handle SEO & analytics setup?",
                a: "Yes — SEO and GA4 integration are standard.",
              },
              {
                q: "How do you ensure security?",
                a: "OWASP, GDPR compliance, and code-level security checks.",
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
          Build Fast, Secure & Scalable Websites
        </h2>
        <Link href="/contact">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-400">
            Hire a Web Development Team
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>
    </main>
  );
}
