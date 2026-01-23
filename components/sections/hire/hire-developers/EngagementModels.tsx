"use client"

interface EngagementModel {
  title: string
  bestFor: string
  howItWorks: string
  outcome: string
}

interface EngagementModelsProps {
  heading: string
  subheading: string
  models: EngagementModel[]
}

export default function EngagementModels({
  heading,
  subheading,
  models,
}: EngagementModelsProps) {
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

        {/* Models */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {models.map((model, index) => (
            <div
              key={index}
              className="group animate-fade-in-up bg-slate-50 border border-slate-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent */}
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 opacity-80" />

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">
                {model.title}
              </h3>

              {/* Best For */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">
                  Best For
                </p>
                <p className="text-slate-700">
                  {model.bestFor}
                </p>
              </div>

              {/* How It Works */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">
                  How It Works
                </p>
                <p className="text-slate-700">
                  {model.howItWorks}
                </p>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs uppercase tracking-wide text-orange-500 font-semibold mb-1">
                  Outcome
                </p>
                <p className="text-slate-800 font-medium">
                  {model.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
