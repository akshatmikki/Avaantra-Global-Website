"use client"

interface CaseMetric {
  value: string
  label: string
}

interface CaseStudyProps {
  heading: string
  client: string
  challenge: string
  solution: string
  metrics: CaseMetric[]
}

export default function CaseStudy({
  heading,
  client,
  challenge,
  solution,
  metrics,
}: CaseStudyProps) {
  return (
    <section className="relative bg-slate-50 py-28 overflow-hidden">
  {/* Background accent */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.1),transparent_45%)]" />

  <div className="relative max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <div className="max-w-3xl mx-auto mb-20 animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Case Study: Scaling a Global SaaS Product on AWS
      </h2>
    </div>

    {/* Story Timeline */}
    <div className="animate-fade-in-up max-w-4xl mx-auto mb-24">
      <div className="grid gap-8 text-left">

        {[
          {
            label: "Client",
            value: "B2B SaaS Platform (UK)",
          },
          {
            label: "Challenge",
            value:
              "Needed a secure, cost-efficient global AWS infrastructure capable of handling rapid user growth.",
          },
          {
            label: "Solution",
            value:
              "Avaantra deployed a 4-member AWS team (Cloud Architect, DevOps Engineer, QA, PM) to design, automate, and manage the platform end-to-end.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative pl-10"
          >
            {/* Timeline dot */}
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-orange-500" />

            {/* Content */}
            <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">
              {item.label}
            </p>
            <p className="text-slate-700 leading-relaxed">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Results */}
    <div className="animate-fade-in-up">
      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-12">
        Results Delivered
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {[
          { value: "99.99%", label: "Global Uptime" },
          { value: "42%", label: "Cost Optimization" },
          { value: "25 min", label: "Deployment Cycle (from 6 hours)" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group bg-white border border-slate-200 rounded-2xl px-8 py-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
          >
            <p className="text-4xl font-extrabold text-orange-500 mb-3">
              {item.value}
            </p>
            <p className="text-slate-600">
              {item.label}
            </p>

            {/* Accent */}
            <div className="mt-6 h-1 w-10 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-blue-600 group-hover:w-20 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

  )
}
