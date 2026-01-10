export function TechStackGrid({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <section className="py-28 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {title}
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white p-6 rounded-2xl border border-slate-200
                         hover:border-orange-500 hover:shadow-lg transition"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition" />

              {/* Content */}
              <p className="text-gray-800 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
