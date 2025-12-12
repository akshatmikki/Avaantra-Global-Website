import { MapPin, Users } from "lucide-react"

export default function GlobalFootprint() {
  const locations = ["India", "Singapore", "UK", "USA", "UAE", "Australia"]

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-12 text-center">Global Footprint</h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 mb-8">
            We're headquartered in India — but our clients and teams span the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-primary/10 to-light p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-primary" size={32} />
              <h3 className="text-2xl font-bold text-dark">Presence</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {locations.map((location, idx) => (
                <div
                  key={idx}
                  className="bg-light px-4 py-2 rounded-full border border-primary/30 text-gray-700 font-medium"
                >
                  {location}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-light p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-primary" size={32} />
              <h3 className="text-2xl font-bold text-dark">Clients Served</h3>
            </div>
            <p className="text-lg text-gray-700">
              <span className="text-4xl font-bold text-primary">120+</span> active clients across{" "}
              <span className="font-semibold text-primary">15 industries</span>, including SaaS, FinTech, Healthcare,
              and Agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
