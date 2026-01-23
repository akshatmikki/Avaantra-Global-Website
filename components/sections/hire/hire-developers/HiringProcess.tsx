"use client"

interface HiringStep {
  step: string
  title: string
  process: string
  benefit: string
}

interface HiringProcessProps {
  heading: string
  subheading: string
  steps: HiringStep[]
}

export default function HiringProcess({
  heading,
  subheading,
  steps,
}: HiringProcessProps) {
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

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group animate-fade-in-up bg-white border border-slate-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-orange-500">
                  Step {item.step}
                </span>
                <span className="h-2 w-2 rounded-full bg-orange-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Process */}
              <p className="text-slate-600 leading-relaxed">
                {item.process}
              </p>

              {/* Divider */}
              <div className="my-4 h-px bg-slate-200" />

              {/* Benefit */}
              <p className="text-sm font-medium text-slate-700">
                🎯 {item.benefit}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
