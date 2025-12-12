export default function OurStory() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/diverse-team-collaboration-in-modern-office-workin.jpg"
              alt="Team collaboration"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Built for Businesses That Build the Future
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Avaantra Global was born from a simple observation: growing companies spend more time managing vendors
              than actually scaling their business.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our founders, with over 20 years of experience in digital transformation and SaaS, saw this pattern repeat
              across industries and built a better model.
            </p>

            <div className="pt-4">
              <p className="text-2xl font-semibold text-foreground">
                Today, we've helped 120+ businesses across 12 countries scale faster with reliable teams and AI-driven
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
