export default function Leadership() {
  const leaders = [
    {
      title: "Chief Technology Officer",
      name: "Technology Leadership",
      image: "/professional-male-technology-executive-in-business.jpg",
    },
    {
      title: "Head of Delivery",
      name: "Operations Excellence",
      image: "/professional-female-project-manager-in-modern-offi.jpg",
    },
    {
      title: "Head of Marketing",
      name: "Growth Strategy",
      image: "/professional-male-marketing-director-presenting.jpg",
    },
    {
      title: "Head of People",
      name: "Talent & Culture",
      image: "/professional-female-hr-director-smiling.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">Leadership Team</h2>
        <p className="text-xl text-light/70 text-center mb-16 max-w-3xl mx-auto">
          Experienced leaders driving innovation and excellence across technology, delivery, and growth
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="group">
              <div className="mb-6 rounded-2xl overflow-hidden aspect-square">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{leader.title}</h3>
              <p className="text-light/70">{leader.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
