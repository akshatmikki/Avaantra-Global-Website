import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "The Avaantra team gave us startup speed with enterprise quality.",
      author: "CTO, SaaS Product",
      rating: 5,
    },
    {
      quote: "3X ROI in 60 days thanks to their AI-powered marketing.",
      author: "Growth Head, FinTech",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Trusted by fast-growing companies worldwide</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold text-gray-600">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
