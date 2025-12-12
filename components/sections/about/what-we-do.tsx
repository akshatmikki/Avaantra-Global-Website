export default function WhatWeDo() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We build teams and systems that make your business more agile, efficient, and profitable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-2xl aspect-square">
            <img
              src="/software-developers-coding-on-laptops-in-modern-wo.jpg"
              alt="Technology Solutions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent flex flex-col justify-end p-8 text-light">
              <h3 className="text-2xl font-bold mb-3">Technology Solutions</h3>
              <p className="text-light/90">Developers, engineers, and product teams to accelerate innovation</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl aspect-square">
            <img
              src="/business-professionals-in-strategy-meeting-with-ch.jpg"
              alt="Leadership Consulting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent flex flex-col justify-end p-8 text-light">
              <h3 className="text-2xl font-bold mb-3">Leadership & Consulting</h3>
              <p className="text-light/90">Virtual CTOs, CMOs guiding your roadmap and aligning technology with ROI</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl aspect-square">
            <img
              src="/images/solutions-hero.png"
              alt="Marketing Growth"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent flex flex-col justify-end p-8 text-light">
              <h3 className="text-2xl font-bold mb-3">Marketing & Growth</h3>
              <p className="text-light/90">Data-driven campaigns to drive leads, traffic, and brand awareness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
