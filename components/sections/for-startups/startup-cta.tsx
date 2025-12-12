import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"

export default function StartupCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <Rocket className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Turn Your Startup Dream Into a Fundable Reality</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          You bring the vision. We bring the velocity. Together, we build predictable growth.
        </p>
        <Button size="lg" variant="secondary" className="group bg-white text-primary hover:bg-gray-100">
          Book a Free Strategy Call
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
