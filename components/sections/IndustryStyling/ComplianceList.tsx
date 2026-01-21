import { ShieldCheck, Lock } from "lucide-react"

export function ComplianceList({
  title,
  left,
  right,
}: {
  title: string
  left: string[]
  right: string[]
}) {
  return (
    <section className="py-28 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Built with security-first engineering and global compliance standards
            at every layer of development.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {[left, right].map((list, colIndex) => (
            <div
              key={colIndex}
              className="bg-white rounded-2xl border shadow-sm p-8"
            >
              <ul className="space-y-4">
                {list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Lock className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
