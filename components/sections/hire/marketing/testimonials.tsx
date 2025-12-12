import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Avaantra's marketing experts grew our pipeline by 260% in 3 months — true partners.",
    author: "Founder",
    company: "SaaS Startup (India)",
    rating: 5,
  },
  {
    quote: "They don't just run campaigns — they deliver predictable growth.",
    author: "CMO",
    company: "B2B Platform (Singapore)",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Clients Say</h2>
          <p className="text-lg text-gray-600">Real results from real businesses</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary transition-colors relative group"
            >
              <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 relative z-10 leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t-2 border-gray-100 pt-4">
                <p className="font-bold text-dark">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
