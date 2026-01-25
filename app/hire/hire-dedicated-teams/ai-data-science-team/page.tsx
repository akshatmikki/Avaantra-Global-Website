import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Database,
  BarChart3,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Hire AI & Data Science Team | Machine Learning & Analytics Experts | Avaantra Global",
  description:
    "Hire dedicated AI and Data Science teams to build predictive models, analytics dashboards, and automation workflows. Avaantra Global delivers AI excellence at speed.",
};

export default function HireAIDataScienceTeamPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hire AI & Data Science Team — Build Intelligence Into Every Decision
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-10">
            AI isn’t a luxury anymore — it’s how modern companies stay ahead.
            Avaantra Global helps you hire data scientists, ML engineers, and AI
            developers who turn data into profit-driving predictions.
          </p>

          <Link href="/contact">
            <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
              Hire AI & Data Science Team in 15 Days
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <div className="grid md:grid-cols-5 gap-4 mt-14 max-w-5xl mx-auto text-left">
            {[
              "Data + AI + DevOps team in 15–20 days",
              "Predictive modeling, NLP & automation",
              "40–60% cost savings vs in-house",
              "Real-time analytics & dashboards",
              "100% data security & IP ownership",
            ].map((t, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl flex gap-3">
                <CheckCircle className="text-orange-400 w-5 h-5 mt-1" />
                <p className="text-sm text-blue-100">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Real Problem with AI Adoption
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-purple-50 p-12 rounded-2xl">
          <ul className="space-y-4 text-gray-700">
            {[
              "Data scattered across silos",
              "No analytics-driven decision framework",
              "ML models fail due to poor deployment",
              "AI initiatives stall after POC stage",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500">✗</span> {t}
              </li>
            ))}
          </ul>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">
              AI Needs Operational Discipline
            </h3>
            <p className="text-gray-600">
              You don’t need hype or disconnected models. You need AI systems
              that deploy, scale, and deliver measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Promise: Predictive Intelligence, Delivered
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "3–4X faster insight generation",
              "99% model uptime",
              "45% lower analytics cost",
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
            Our AI & Data Science Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Engineering & Pipelines",
                desc: "ETL, Airflow, Databricks, AWS Glue",
                icon: Database,
              },
              {
                title: "Machine Learning & AI",
                desc: "Scikit-learn, TensorFlow, PyTorch",
                icon: Brain,
              },
              {
                title: "Business Intelligence",
                desc: "Power BI, Tableau, Looker",
                icon: BarChart3,
              },
              {
                title: "MLOps & Deployment",
                desc: "MLflow, Docker, Kubernetes",
                icon: Cpu,
              },
              {
                title: "Security & Compliance",
                desc: "GDPR, HIPAA, SOC2-aligned pipelines",
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
            "FinTech",
            "Healthcare",
            "Retail",
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

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What’s the difference between hiring AI developers vs teams?",
                a: "Teams include data scientists, ML engineers, and MLOps experts for end-to-end delivery.",
              },
              {
                q: "How secure is my data?",
                a: "All systems follow GDPR, HIPAA, and SOC2-aligned security practices.",
              },
              {
                q: "Can dashboards be included?",
                a: "Yes — analytics and reporting are part of every engagement.",
              },
              {
                q: "Do you handle cloud deployment?",
                a: "Yes — AWS, Azure, and GCP-based ML pipelines are supported.",
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
          Build Smarter, Predictive Systems
        </h2>
        <Link href="/contact">
          <Button size="lg" className="cursor-pointer bg-orange-500 hover:bg-orange-400">
            Hire AI & Data Science Team
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>
    </main>
  );
}
