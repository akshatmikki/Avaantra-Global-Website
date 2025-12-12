export default function Difference() {
  const comparisons = [
    { traditional: "Shared, part-time resources", avaantra: "100% dedicated experts" },
    { traditional: "Fixed-scope, rigid contracts", avaantra: "Agile, scalable models" },
    { traditional: "Hidden costs, unclear delivery", avaantra: "Transparent pricing & reports" },
    { traditional: "Vendor dependency", avaantra: "Partnership accountability" },
    { traditional: "Marketing and tech disconnected", avaantra: "Unified growth & tech under one roof" },
  ]

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-12 text-center">The Avaantra Difference</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left text-lg font-bold text-gray-700 border-b-2 border-gray-300">
                  Traditional Outsourcing
                </th>
                <th className="p-4 text-left text-lg font-bold text-primary border-b-2 border-primary">
                  Avaantra Global
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-light" : "bg-gray-50"}>
                  <td className="p-4 text-gray-600 border-b border-gray-200">{comparison.traditional}</td>
                  <td className="p-4 text-gray-800 font-semibold border-b border-gray-200">{comparison.avaantra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
