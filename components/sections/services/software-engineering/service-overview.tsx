import { Code, Layers, Zap, Cloud, Settings, LinkIcon, CheckCircle, Wrench } from "lucide-react"

export function ServiceOverview() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description:
        "Build exactly what your business needs — scalable apps, platforms, and automation tools aligned with your market goals.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Product Engineering",
      description:
        "From MVP to full product, get a team that handles design, backend, cloud, and analytics with a clear roadmap.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Seamless web, mobile, and API development that ensures speed, stability, and great UX.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Software Modernization",
      description: "Upgrade legacy systems to modern, high-performance architectures without downtime.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps & Cloud Enablement",
      description:
        "Faster releases, better uptime, and cost efficiency through CI/CD pipelines and cloud-native deployment.",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: "API Development & Integration",
      description: "Connect your platforms, CRMs, and payment systems securely and efficiently.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "QA & Testing Services",
      description: "Manual + automated testing to guarantee performance, security, and scalability.",
      color: "bg-pink-50 text-pink-600",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Continuous monitoring and enhancement to ensure your software evolves with your business.",
      color: "bg-amber-50 text-amber-600",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            You Don't Just Need Code. <span className="text-primary">You Need a System</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Avaantra Global helps startups, SaaS companies, and agencies accelerate development through predictable,
            process-driven software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
