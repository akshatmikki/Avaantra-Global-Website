import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-yellow-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            Hire Digital Marketing Experts in 15 Days — Drive Predictable Growth at Scale
          </h2>
          <p className="text-lg md:text-xl text-dark/80 mb-8">
            Because growth doesn't come from channels — it comes from alignment. We bring experts who think, plan, and
            execute in one integrated framework.
          </p>
          <Button size="lg" className="bg-dark hover:bg-dark/90 text-light font-semibold rounded-full text-lg px-8">
            Book a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
