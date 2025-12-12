export default function CaseStudies() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Success Stories</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-dark">E-Commerce Platform Transformation</h3>
              <p className="text-gray-600 mb-6">
                Helped a retail company modernize their legacy system with a microservices architecture, resulting in 3x
                faster page loads and 50% reduction in operational costs.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">3x</div>
                  <div className="text-sm text-gray-600">Faster Performance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-400">Case Study Visual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
