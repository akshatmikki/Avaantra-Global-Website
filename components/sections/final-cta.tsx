"use client"

import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-dark to-dark-secondary">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-light text-balance">
          Ready to Build, Launch & Scale Predictably?
        </h2>
        <p className="text-xl text-light/80 max-w-2xl mx-auto">
          Let's discuss your goals and create a customized roadmap for your success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-[#E76A32] rounded-full px-8 py-6 text-base font-semibold" style={{ backgroundColor: '#E76A32', color: '#1C2856' }}>
            Book a Free Strategy Call →
          </Button>
          <Button
            variant="outline"
            className="border-2 border-light text-light hover:bg-light/10 rounded-full px-8 py-6 text-base font-semibold bg-transparent"
          >
            Get a Dedicated Team Quote
          </Button>
        </div>

        <p className="text-sm text-light/60 pt-4">Quick form: Name • Email • Company • Service Interest • Message</p>
      </div>
    </section>
  )
}
