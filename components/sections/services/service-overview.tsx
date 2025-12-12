import { ArrowRight, Zap, Code, LineChart, Users, Boxes, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServiceOverview() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Build strong, scalable, cloud-ready apps that grow with your business.",
      outcomes: [
        "Fast go-live",
        "Clean, high-performance architecture",
        "Low long-term tech cost",
        "Full code and IP ownership",
      ],
      link: "/services/software-engineering",
      image: "/professional-team-working-on-software-development-.jpg",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Zap,
      title: "AI & Automation Solutions",
      description: "Make your work faster, smarter, and more efficient.",
      outcomes: ["40–70% time saved", "Clear ROI from day one", "Data-backed decisions", "Scalable AI workflows"],
      link: "#",
      image: "/ai-automation-dashboard.jpg",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: LineChart,
      title: "Digital Marketing & CRO",
      description: "Marketing that brings revenue, not random clicks.",
      outcomes: ["Higher ROAS", "Lower cost per lead", "Strong conversion rates", "Weekly reporting you can trust"],
      link: "/services/digital-marketing", // Updated link
      image: "/marketing-team-analyzing-digital-campaign-metrics-.jpg",
      gradient: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: Users,
      title: "Dedicated Teams & Staff Augmentation",
      description: "Add developers, designers, marketers, or full PODs — ready in 15 days.",
      outcomes: [
        "Zero hiring delays",
        "Full integration with your team",
        "Consistent development speed",
        "7–10 day replacement guarantee",
      ],
      link: "/hire/dedicated-teams",
      image: "/diverse-software-development-team-collaborating-on.jpg",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Boxes,
      title: "Product Engineering",
      description: "Build and scale your product from MVP to enterprise level.",
      outcomes: ["Clean codebase", "Faster feature releases", "Lower bugs", "Future-ready system design"],
      link: "/services/product-engineering", // Updated link
      image: "/product-engineering-workflow.jpg",
      gradient: "from-indigo-500/10 to-blue-500/10",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designs that are easy to use, clear, and built for conversions.",
      outcomes: ["Smooth user flow", "Higher engagement", "Lower drop-offs", "Ready-to-develop design handovers"],
      link: "#",
      image: "/ux-design-wireframes.png",
      gradient: "from-pink-500/10 to-rose-500/10",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-semibold mb-4 block">
            Our Core Service Lines
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 leading-tight">
            End-to-End Services for Startups, SaaS & Agencies
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We bring engineering, AI, automation, and marketing together under one system. Our work is predictable,
            fast, and fully aligned with your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Link
                key={service.title}
                href={service.link}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-multiply`} />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">What You Get:</p>
                    <ul className="space-y-1.5">
                      {service.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
