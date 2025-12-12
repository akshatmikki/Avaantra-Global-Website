import { Quote } from "lucide-react"

export default function StartupTestimonials() {
  const testimonials = [
    {
      quote:
        "Avaantra built our MVP in 6 weeks. We went from idea to live product before our competitors even finished design.",
      author: "Founder",
      company: "HealthTech Startup",
    },
    {
      quote: "They didn't just code. They thought like partners — from positioning to investor readiness.",
      author: "Co-Founder",
      company: "SaaS Platform, Singapore",
    },
    {
      quote:
        "We raised $200K after working with Avaantra. The best part? I could focus on pitching while they ran everything.",
      author: "Founder",
      company: "EdTech Startup, India",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">What Founders Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-gray-700 mb-6 italic relative z-10">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-dark">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
