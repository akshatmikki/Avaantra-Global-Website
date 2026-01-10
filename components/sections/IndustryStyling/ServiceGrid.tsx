interface ServiceItem {
  title: string
  description: string
  value?: string
}

export function ServiceGrid({
  title,
  services,
  ctaText,
}: {
  title: string
  services: ServiceItem[]
  ctaText?: string
}) {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">{title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              {item.value && (
                <p className="text-sm font-semibold text-primary">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {ctaText && (
          <div className="mt-14 text-center">
            <button className="text-primary font-semibold">
              {ctaText} →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
