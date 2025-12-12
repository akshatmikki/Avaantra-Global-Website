export default function Security() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Security & Compliance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your data security is our top priority. We follow industry best practices and compliance standards.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "ISO 27001", desc: "Certified" },
            { title: "GDPR", desc: "Compliant" },
            { title: "SOC 2", desc: "Type II" },
            { title: "HIPAA", desc: "Ready" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold mb-1 text-dark">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
