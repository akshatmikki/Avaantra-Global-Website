import { CheckCircle } from "lucide-react"

export function CaseStudy() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 md:p-12 border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Case Study: SaaS Scaling Through Virtual CTO Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">CLIENT</h3>
              <p className="text-lg text-gray-800">B2B SaaS Company</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">CHALLENGE</h3>
              <p className="text-lg text-gray-800">Frequent release delays and rising infrastructure costs</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">SOLUTION</h3>
              <p className="text-lg text-gray-800">
                Avaantra's Virtual CTO redesigned architecture & managed DevOps team
              </p>
            </div>
          </div>
          <div className="bg-primary/10 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">RESULTS</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-2xl font-bold text-dark">45%</div>
                  <div className="text-sm text-gray-700">Cost Savings</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-2xl font-bold text-dark">60%</div>
                  <div className="text-sm text-gray-700">Faster Sprint Velocity</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-2xl font-bold text-dark">100%</div>
                  <div className="text-sm text-gray-700">Predictable Scaling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
