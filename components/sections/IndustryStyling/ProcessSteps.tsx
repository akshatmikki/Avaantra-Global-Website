interface Step {
  title: string
  description: string
}

export function ProcessSteps({
  title,
  steps,
  duration,
}: {
  title: string
  steps: Step[]
  duration?: string
}) {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          {title}
        </h2>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              {/* Step number */}
              <div className="absolute -top-5 left-6 h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>

              <h3 className="mt-6 font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}

          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-slate-200 -z-10" />
        </div>

        {/* Duration */}
        {duration && (
          <div className="mt-14 text-center">
            <span className="inline-block px-6 py-3 rounded-full bg-slate-100 text-sm text-gray-700">
              ⏱ Project Duration: <strong>{duration}</strong>
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
