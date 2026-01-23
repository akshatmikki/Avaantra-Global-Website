"use client"

interface ProblemPoint {
  text: string
}

interface RealProblemProps {
  heading: string
  subheading: string
  problems: ProblemPoint[]
  conclusionTitle: string
  conclusionText: string
}

export default function RealProblem({
  heading,
  subheading,
  problems,
  conclusionTitle,
  conclusionText,
}: RealProblemProps) {
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

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {problems.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in-up bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 text-orange-500 text-xl">✕</span>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion / Bridge */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
            {conclusionTitle}
          </h3>

          <p className="mt-4 text-slate-600 leading-relaxed">
            {conclusionText}
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            <span className="text-orange-500 font-semibold">
              That’s where Avaantra Global helps.
            </span>{" "}
            We provide pre-vetted AWS-certified experts who build, manage, and
            optimize your cloud systems — like an extension of your in-house
            team.
          </p>
        </div>

      </div>
    </section>
  )
}
