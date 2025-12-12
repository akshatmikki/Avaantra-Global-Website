import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "We grew our engineering team 3 times faster without hiring anyone in-house.",
    author: "CTO",
    company: "SaaS Startup (UK)",
  },
  {
    quote: "Avaantra's hiring process is very smooth and fast.",
    author: "Founder",
    company: "Marketing Agency (UAE)",
  },
  {
    quote: "We launched faster and grew quicker because we had the right team.",
    author: "CEO",
    company: "HealthTech Company (India)",
  },
]

export function HireTestimonials() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-lg text-gray-700 mb-6 text-balance">{testimonial.quote}</p>
              <div>
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
