"use client"

interface Testimonial {
  quote: string
  name: string
  role: string
  location: string
}

interface TestimonialsProps {
  heading: string
  testimonials: Testimonial[]
}

export default function Testimonials({
  heading,
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {heading}
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl shadow-lg">
                “
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed text-lg italic">
                {item.quote}
              </p>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {item.role}, {item.location}
                  </p>
                </div>

                {/* Accent */}
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 opacity-80 group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
