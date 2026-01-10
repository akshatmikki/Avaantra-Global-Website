interface CaseStudy {
  title: string
  result: string
}

export function CaseStudyGrid({
  title,
  cases,
}: {
  title: string
  cases: CaseStudy[]
}) {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {title}
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200
                         hover:border-orange-500 hover:shadow-xl transition"
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 h-12 w-12 rounded-tr-2xl rounded-bl-2xl
                              bg-orange-100 text-orange-600 flex items-center justify-center
                              font-bold text-sm">
                #{i + 1}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 pr-10">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.result}
              </p>

              {/* Subtle divider */}
              <div className="mt-6 h-px w-12 bg-orange-400 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
