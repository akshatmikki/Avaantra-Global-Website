export default function ClientTestimonials() {
  const testimonials = [
    {
      quote: "Avaantra helped us scale product delivery 3X faster — without a single missed sprint.",
      author: "CTO, SaaS Startup",
      location: "Singapore",
    },
    {
      quote: "They became our extended marketing team — predictable, reliable, and proactive.",
      author: "Founder, FinTech Platform",
      location: "India",
    },
    {
      quote: "Every person from Avaantra acts like they own our business success.",
      author: "CEO, Agency Partner",
      location: "UK",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-12 text-center">What Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-light p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-dark">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
