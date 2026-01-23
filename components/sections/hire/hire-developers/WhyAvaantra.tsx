"use client"

interface AdvantageItem {
  text: string
}

interface WhyAvaantraProps {
  heading: string
  subheading: string
  advantages: AdvantageItem[]
  closingLine: string
}

export default function WhyAvaantra({
  heading,
  subheading,
  advantages,
  closingLine,
}: WhyAvaantraProps) {
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

        {/* Advantages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group animate-fade-in-up bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Accent */}
              <div className="mb-4 h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-blue-600 opacity-80" />

              <p className="text-slate-700 font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
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
