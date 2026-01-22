import { LucideIcon } from "lucide-react"

interface Item {
  title: string
  description?: string
  icon: LucideIcon
}

export function IconCardGrid({
  title,
  items,
  footerQuote,
}: {
  title: string
  items: Item[]
  footerQuote?: string
}) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">{title}</h2>

        <div className="grid md:grid-cols-4 gap-6 text-left">
          {items.map(({ title, description, icon: Icon }, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl border hover:border-primary hover:shadow-xl transition"
            >
              <Icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-1">{title}</h3>

              {description && (
                <p className="text-sm text-gray-600">{description}</p>
              )}
            </div>
          ))}
        </div>

        {footerQuote && (
          <p className="mt-14 text-center italic font-semibold">
            {footerQuote}
          </p>
        )}
      </div>
    </section>
  )
}
