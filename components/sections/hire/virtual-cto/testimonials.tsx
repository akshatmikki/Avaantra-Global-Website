import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Our Virtual CTO from Avaantra guided our entire product launch — we saved 6 months and 40% of cost.",
      author: "Founder",
      company: "SaaS Platform (Singapore)",
      rating: 5,
    },
    {
      quote: "He brought structure, process, and calm to our chaotic tech stack.",
      author: "CEO",
      company: "FinTech Startup (India)",
      rating: 5,
    },
  ]

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
              <div className="flex items-center gap-4 border-t-2 border-gray-100 pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-dark">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
