export default function EngagementModels() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Flexible Engagement Models</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 text-dark">Dedicated Team</h3>
            <p className="text-gray-600 mb-4">Full-time team working exclusively on your project</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Full control</li>
              <li>✓ Long-term projects</li>
              <li>✓ Flexible scaling</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-primary">
            <div className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-2">Popular</div>
            <h3 className="text-xl font-bold mb-4 text-dark">Staff Augmentation</h3>
            <p className="text-gray-600 mb-4">Extend your team with specialized experts</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Quick onboarding</li>
              <li>✓ Fill skill gaps</li>
              <li>✓ Cost-effective</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4 text-dark">Fixed Price</h3>
            <p className="text-gray-600 mb-4">Defined scope with predictable costs</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Fixed budget</li>
              <li>✓ Clear timeline</li>
              <li>✓ Defined deliverables</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
