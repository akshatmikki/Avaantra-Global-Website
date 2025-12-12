export default function WhyAvaantra() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4">Why Avaantra Global</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Partner with a trusted technology leader committed to your success
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Proven Track Record", desc: "15+ years delivering successful projects across industries" },
            { title: "Quality Assurance", desc: "Rigorous testing and code review processes" },
            { title: "Transparent Communication", desc: "Regular updates and clear reporting" },
            { title: "Flexible Engagement", desc: "Scale teams up or down based on your needs" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-dark">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
