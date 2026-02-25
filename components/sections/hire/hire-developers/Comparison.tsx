"use client"

interface ComparisonRow {
  aspect: string
  freelancer: string
  inHouse: string
  avaantra: string
}

interface ComparisonProps {
  heading: string
  subheading: string
  rows: ComparisonRow[]
}

export default function Comparison({
  heading,
  subheading,
  rows,
}: ComparisonProps) {
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

        {/* Comparison Grid */}
        <div className="relative overflow-x-auto animate-fade-in-up">
          <div className="min-w-[640px] md:min-w-[900px] max-w-6xl mx-auto">

            {/* Header */}
            <div className="grid grid-cols-4 rounded-t-2xl overflow-hidden">
              <div className="bg-slate-100 p-4 text-left font-semibold text-slate-700">
                Aspect
              </div>
              <div className="bg-slate-100 p-4 text-center font-semibold text-slate-700">
                Freelancers
              </div>
              <div className="bg-slate-100 p-4 text-center font-semibold text-slate-700">
                In-House
              </div>
              <div className="bg-slate-900 p-4 text-center font-semibold text-white">
                Avaantra Global
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors"
              >
                <div className="p-4 text-left font-medium text-slate-700">
                  {row.aspect}
                </div>
                <div className="p-4 text-center text-slate-600">
                  {row.freelancer}
                </div>
                <div className="p-4 text-center text-slate-600">
                  {row.inHouse}
                </div>
                <div className="p-4 text-center font-semibold text-orange-500 bg-orange-50">
                  {row.avaantra}
                </div>
              </div>
            ))}

            {/* Footer Glow */}
            <div className="h-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-b-2xl opacity-80" />
          </div>
        </div>

      </div>
    </section>
  )
}
