export default function Benefits() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">
          Why Choose Our Software Engineering Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-dark">Faster Time to Market</h3>
            <p className="text-gray-600">Accelerate development with agile methodologies and experienced teams.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-dark">Cost Efficiency</h3>
            <p className="text-gray-600">Reduce overhead costs while maintaining high-quality deliverables.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-dark">Expertise On-Demand</h3>
            <p className="text-gray-600">Access specialized skills exactly when you need them.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
