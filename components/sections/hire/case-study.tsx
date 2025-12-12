import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CaseStudy() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-light border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Case Study
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">Client: B2B SaaS Platform</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-dark mb-2">Need</h3>
                <p className="text-gray-600">Developers and marketers quickly</p>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">Solution</h3>
                <p className="text-gray-600">React, Node, SEO, PPC hybrid team</p>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">Result</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">MVP in 7 weeks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">240% growth in 4 months</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Full client satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="border-2 border-dark text-dark hover:bg-gray-50 rounded-full px-8 py-6 text-base font-semibold bg-transparent"
            >
              Read All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
