"use client"

interface SecurityPoint {
  text: string
}

interface SecurityIPProps {
  heading: string
  subheading: string
  points: SecurityPoint[]
  closingLine: string
}

export default function SecurityIP({
  heading,
  subheading,
  points,
  closingLine,
}: SecurityIPProps) {
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

        {/* Security Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-24">
          {points.map((item, index) => (
            <div
              key={index}
              className="group animate-fade-in-up bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Lock Accent */}
              <div className="mb-4 text-orange-500 text-2xl">🔒</div>

              <p className="text-slate-700 font-medium leading-relaxed">
                {item.text}
              </p>

              {/* Accent Line */}
              <div className="mt-6 h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-blue-600 opacity-80" />
            </div>
          ))}
        </div>

        {/* Ownership Statement */}
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <div className="inline-block rounded-full bg-white border border-slate-200 px-8 py-4 shadow-sm hover:shadow-md transition-all duration-300">
            <span className="text-slate-700 font-medium">
              {closingLine}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
