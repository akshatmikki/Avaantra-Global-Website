interface InfoSectionProps {
  title: string
  description: string
  points?: string[]
  quote?: string
}

export function InfoSection({
  title,
  description,
  points,
  quote,
}: InfoSectionProps) {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {title}
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          {description}
        </p>

        {/* Points */}
        {points && (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14 text-left">
            {points.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        )}

        {/* Quote */}
        {quote && (
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-orange-200 font-serif">
              “
            </div>
            <p className="italic text-lg font-medium text-gray-800 relative">
              {quote}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
