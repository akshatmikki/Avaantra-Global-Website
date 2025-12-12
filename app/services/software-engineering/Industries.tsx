export default function Industries() {
  const industries = [
    "Healthcare",
    "Finance",
    "E-commerce",
    "Education",
    "Manufacturing",
    "Real Estate",
    "Transportation",
    "Media",
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary/5 transition-colors border border-gray-200"
            >
              <span className="font-medium text-dark">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
