import { LucideIcon } from "lucide-react"

interface Feature {
  title: string
  description?: string
  icon: LucideIcon
}

export function FeatureGrid({
  title,
  features,
  footerQuote,
}: {
  title: string
  features: Feature[]
  footerQuote?: string
}) {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">{title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ title, description, icon: Icon }, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border hover:shadow-lg transition"
            >
              <Icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              {description && (
                <p className="text-sm text-gray-600">{description}</p>
              )}
            </div>
          ))}
        </div>

        {footerQuote && (
          <p className="mt-10 text-center italic font-semibold">
            {footerQuote}
          </p>
        )}
      </div>
    </section>
  )
}
