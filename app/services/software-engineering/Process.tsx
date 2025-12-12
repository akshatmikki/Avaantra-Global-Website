export default function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understand your requirements and goals" },
    { num: "02", title: "Planning", desc: "Define architecture and roadmap" },
    { num: "03", title: "Development", desc: "Build with agile sprints" },
    { num: "04", title: "Testing", desc: "Ensure quality and performance" },
    { num: "05", title: "Deployment", desc: "Launch and monitor" },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Our Development Process</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                {step.num}
              </div>
              <h3 className="font-semibold mb-2 text-dark">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
