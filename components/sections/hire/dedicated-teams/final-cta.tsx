import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-12 md:py-16 bg-dark text-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Hire a Dedicated Team in 15 Days — Scale Projects Without Hiring Risk
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Because scalability shouldn't come with stress. Avaantra's dedicated teams give you the control of in-house
            talent — and the freedom of outsourcing.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-dark rounded-full">
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
