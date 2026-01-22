import { LucideIcon } from "lucide-react"

interface Feature {
  title: string
  description?: string
  icon: LucideIcon
}

export function FeatureGrid({
  title,
  subheading,
  features,
  footerQuote,
}: {
  title: string
  subheading?: string
  features: Feature[]
  footerQuote?: string
}) {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>

        {subheading && (
          <p className="max-w-3xl mx-auto mb-14 text-lg text-gray-600">
            {subheading}
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8 text-left">
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
          <p className="mt-12 text-center italic font-semibold">
            {footerQuote}
          </p>
        )}
      </div>
    </section>
  )
}
