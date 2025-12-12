import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HireCTA() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-light border border-gray-200 rounded-2xl p-8 md:p-16 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance">
            Hire Developers, Marketers, and Leaders in Just 15 Days
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            With Avaantra, you do not just hire people. You build a team that helps your business grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-orange-600 text-white rounded-full px-8 py-6 text-base font-semibold">
              Book a Free Hiring Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-dark text-dark hover:bg-gray-50 rounded-full px-8 py-6 text-base font-semibold bg-transparent"
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>No hiring stress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Smooth delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Full flexibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
