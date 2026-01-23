"use client"

interface ExpertiseItem {
  title: string
  description: string
  toolsTitle: string
  tools: string[]
  outcome: string
}

interface OurExpertiseProps {
  heading: string
  subheading: string
  items: ExpertiseItem[]
}

export default function OurExpertise({
  heading,
  subheading,
  items,
}: OurExpertiseProps) {
  return (
    <section className="relative bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {subheading}
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 text-left shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-orange-500 to-blue-600 opacity-70" />

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {/* Tools */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-800 mb-3">
                  {item.toolsTitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-sm rounded-full px-3 py-1 bg-white border border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="mt-8 relative rounded-xl bg-slate-900 px-5 py-4 text-slate-100">
                <p className="text-sm uppercase tracking-wide text-orange-400 mb-1">
                  Outcome
                </p>
                <p className="leading-relaxed">
                  {item.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
