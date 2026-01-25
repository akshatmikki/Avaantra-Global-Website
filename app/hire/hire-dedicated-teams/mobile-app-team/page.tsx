import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Layers,
  Server,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire Mobile App Development Team | iOS, Android & Cross-Platform Experts | Avaantra Global",
  description:
    "Hire a mobile app development team skilled in Flutter, React Native, iOS & Android. Avaantra Global delivers apps faster with full transparency and predictable quality.",
};

export default function HireMobileAppDevelopmentTeamPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hire Mobile App Development Team — Build Apps Users Love, Faster
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            Your users live on mobile — and every second counts. Avaantra Global
            provides dedicated app teams who design, develop, test, and deploy
            stunning mobile experiences at speed.
          </p>

          <Link href="/contact">
            <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
              Hire Mobile App Team in 15 Days
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <div className="grid md:grid-cols-5 gap-4 mt-14 max-w-5xl mx-auto text-left">
            {[
              "Flutter, React Native, Swift & Kotlin experts",
              "15-day onboarding",
              "UI/UX + QA + DevOps included",
              "Cross-platform or native builds",
              "Full transparency & IP protection",
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
            The Real Problem with Mobile App Development
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-purple-50 p-12 rounded-2xl">
          <ul className="space-y-4 text-gray-700">
            {[
              "iOS and Android teams work separately",
              "Design-to-code handoff is messy",
              "Testing and releases take forever",
              "Bug fixes are reactive, not proactive",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500">✗</span> {t}
              </li>
            ))}
          </ul>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">
              Mobile Needs End-to-End Ownership
            </h3>
            <p className="text-gray-600">
              You don’t need coordination chaos. You need a dedicated mobile app
              team that owns the entire lifecycle — from concept to store launch.
            </p>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Promise: Fast, Fluid & Flawless App Delivery
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "2–3X faster app delivery",
              "99.5% crash-free performance",
              "40% lower cost vs in-house teams",
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
            Our Mobile App Development Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cross-Platform Development",
                desc: "Flutter, React Native, Ionic",
                icon: Layers,
              },
              {
                title: "Native App Development",
                desc: "Swift (iOS), Kotlin (Android)",
                icon: Smartphone,
              },
              {
                title: "Backend & API Integration",
                desc: "Node.js, Firebase, GraphQL",
                icon: Server,
              },
              {
                title: "QA & Automated Testing",
                desc: "Appium, Espresso, XCUITest",
                icon: ShieldCheck,
              },
              {
                title: "CI/CD & Store Deployment",
                desc: "Jenkins, GitHub Actions, Fastlane",
                icon: Rocket,
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
            "FinTech",
            "HealthTech",
            "E-commerce",
            "EdTech",
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

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-gray-50 p-12 rounded-2xl grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-bold mb-2">Client</p>
            <p className="text-gray-600 mb-4">Payments App (India)</p>
            <p className="font-bold mb-2">Challenge</p>
            <p className="text-gray-600">MVP required in 10 weeks</p>
          </div>
          <div>
            <p className="font-bold mb-4 text-orange-600">Results</p>
            <ul className="space-y-3">
              {[
                "App launched in 9 weeks",
                "4.7★ App Store rating",
                "$150K revenue in 60 days",
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
                q: "Which frameworks do you use?",
                a: "Flutter, React Native, Swift, Kotlin, and Ionic.",
              },
              {
                q: "Do you provide post-launch maintenance?",
                a: "Yes — via monthly retainer or hybrid engagement.",
              },
              {
                q: "Can one team handle design and development?",
                a: "Yes — every mobile pod includes UI/UX, QA, and DevOps.",
              },
              {
                q: "Do you manage App Store & Play Store publishing?",
                a: "Yes — from signing to deployment and analytics.",
              },
              {
                q: "How do you ensure app security?",
                a: "We follow OWASP, HTTPS, encryption, and secure APIs.",
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
          Build Mobile Experiences Users Remember
        </h2>
        <Link href="/contact">
          <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
            Hire Mobile App Development Team
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>
    </main>
  );
}
