export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Avaantra delivered exceptional software engineering services. Their team was professional, responsive,
              and delivered on time."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <div className="font-semibold text-dark">Sarah Johnson</div>
                <div className="text-sm text-gray-500">CTO, TechCorp</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "The quality of code and attention to detail exceeded our expectations. Highly recommend for any software
              development project."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <div className="font-semibold text-dark">Michael Chen</div>
                <div className="text-sm text-gray-500">VP Engineering, StartupX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
