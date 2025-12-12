export default function MissionVision() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative mb-16 rounded-3xl overflow-hidden h-96">
          <img
            src="/team-vision-strategic-planning-meeting-modern-offic.jpg"
            alt="Vision and Mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Driven by Purpose, Defined by Results
              </h2>
              <p className="text-xl text-white/90">Our mission and vision guide everything we do</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-8">
            <div className="text-6xl font-bold text-foreground/10">1</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To help growing businesses achieve predictable growth through technology, talent, and transparent
              delivery.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-lg text-muted-foreground">Top-tier tech talent without hiring overhead</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-lg text-muted-foreground">Clear, data-backed marketing growth</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-lg text-muted-foreground">Agile, accountable, outcome-driven delivery</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-6xl font-bold text-foreground/10">2</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To become the world's most trusted partner for AI-powered digital transformation and scalable talent
              delivery.
            </p>
            <p className="text-lg text-foreground font-semibold">
              In a world full of agencies, we're building Avaantra as the global synonym for growth with integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
