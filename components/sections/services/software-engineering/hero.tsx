import { Button } from "@/components/ui/button"
export function SoftwareEngineeringHero() {
  return (
    <section className="relative bg-gradient-to-br from-dark via-gray-900 to-dark text-light py-20 md:py-32 overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Predictable Engineering Delivery
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Software Engineering That Delivers <span className="text-primary">Predictable Results</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              You need a partner who gets your vision, ships on time, and scales with you. From MVPs to full-scale
              platforms — Avaantra helps you build, launch, and grow with engineering that moves your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-8 py-6 text-lg">
                Book Free 15-Minute Consultation →
              </Button>
              <Button
                variant="outline"
                className="border-light text-light hover:bg-light/10 rounded-full px-8 py-6 text-lg bg-transparent"
              >
                Hire Developers
              </Button>
            </div>
            <div className="flex gap-8 mt-8 text-sm text-gray-400">
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div>Days to Start</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div>Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">60%</div>
                <div>Cost Savings</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/professional-team-working-on-software-development-.jpg"
              alt="Software Engineering Team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-light text-dark p-6 rounded-xl shadow-xl">
              <div className="text-sm font-semibold text-gray-600">Sprint Velocity</div>
              <div className="text-3xl font-bold text-primary">+142%</div>
              <div className="text-xs text-gray-500">Average increase in 90 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
