import { CheckCircle2 } from "lucide-react"

export function SplitListSection({
  title,
  left,
  right,
  quote,
}: {
  title: string
  left: string[]
  right: string[]
  quote?: string
}) {
  return (
    <section className="py-28 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">{title}</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
        </div>

        {/* Lists */}
        <div className="grid md:grid-cols-2 gap-8">
          {[left, right].map((list, colIndex) => (
            <div
              key={colIndex}
              className="bg-white rounded-2xl border shadow-sm p-8"
            >
              <ul className="space-y-4">
                {list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quote */}
        {quote && (
          <div className="mt-12 text-center">
            <p className="italic font-semibold text-gray-800 max-w-3xl mx-auto">
              “{quote}”
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
