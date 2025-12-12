export default function AboutHero() {
  return (
    <section className="relative bg-dark text-light py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="/modern-office-technology-workspace-with-laptop-and.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Empowering Businesses to Scale Smarter
          </h1>
          <p className="text-xl md:text-2xl text-light/80 mb-8 text-pretty leading-relaxed">
            Technology and marketing solutions that drive predictable growth without the overhead
          </p>
        </div>
      </div>
    </section>
  )
}
