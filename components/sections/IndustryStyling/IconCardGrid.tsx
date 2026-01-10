import { LucideIcon } from "lucide-react"

interface Item {
  title: string
  icon: LucideIcon
}

export function IconCardGrid({
  title,
  items,
}: {
  title: string
  items: Item[]
}) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">{title}</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map(({ title, icon: Icon }, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl border hover:border-primary hover:shadow-xl transition"
            >
              <Icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
