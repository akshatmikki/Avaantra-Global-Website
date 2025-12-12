import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-dark text-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Upgrade Your Tech and Growth — Predictably?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed text-pretty">
            Let's build together with speed, clarity, and real outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-light rounded-full px-8 group">
              Book a Consultation
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-light text-light hover:bg-light hover:text-dark rounded-full px-8 group"
            >
              <Phone size={18} className="mr-2" />
              Talk to Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
