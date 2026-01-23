"use client"

interface IndustryItem {
  icon: string
  title: string
  description: string
}

interface IndustriesWeServeProps {
  heading: string
  subheading: string
  industries: IndustryItem[]
  outcome: string
}

export default function IndustriesWeServe({
  heading,
  subheading,
  industries,
  outcome,
}: IndustriesWeServeProps) {
  return (
    <section className="relative bg-slate-50 py-28">
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

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group animate-fade-in-up bg-white border border-slate-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {/* Accent Line */}
              <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 opacity-70" />
            </div>
          ))}
        </div>

        {/* Outcome */}
<div className="animate-fade-in-up max-w-5xl mx-auto">
  <div className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-white border border-slate-200 px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="text-orange-500 text-xl">📈</span>

    <span className="text-sm uppercase tracking-wide text-slate-500 font-semibold">
      Outcome
    </span>

    <span className="hidden sm:inline text-slate-400">—</span>

    <span className="text-slate-700 font-medium text-center">
      {outcome}
    </span>
  </div>
</div>


      </div>
    </section>
  )
}
