"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with Avaantra Global gave us the engineering velocity of a large company with the agility of a startup.",
      author: "CTO",
      company: "SaaS Company",
      rating: 5,
      image: "/testimonial-cto-professional.jpg",
    },
    {
      quote: "Our funnel turned profitable in 60 days with predictable CAC. The team truly understands what we needed.",
      author: "VP Growth",
      company: "FinTech Startup",
      rating: 5,
      image: "/testimonial-vp-growth.jpg",
    },
    {
      quote:
        "Best decision we made was partnering with Avaantra for our AI integration. Results exceeded expectations.",
      author: "Founder",
      company: "E-commerce Platform",
      rating: 5,
      image: "/testimonial-founder-ecommerce.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-dark text-balance">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Real feedback from real partnerships</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-light border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg?height=192&width=400"}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-semibold text-light">{testimonial.author}</p>
                  <p className="text-sm text-light/80">{testimonial.company}</p>
                </div>
              </div>
              {/* </CHANGE> */}

              <div className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
