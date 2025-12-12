import { Button } from "@/components/ui/button"
import { Search, FileText, Rocket, Settings, TrendingUp, ArrowRight } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "We understand your goals and challenges.",
      outcome: "Clear direction.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Blueprint",
      description: "We define roadmap, team, sprint plan, and budget.",
      outcome: "Full clarity.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Execution",
      description: "Agile sprints with weekly updates.",
      outcome: "Visible progress every week.",
    },
    {
      number: "04",
      icon: Settings,
      title: "Optimization",
      description: "QA, CRO, automation, and performance tuning.",
      outcome: "Measurable improvement.",
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Scale",
      description: "Add teams, speed up development, or expand campaigns.",
      outcome: "Predictable growth.",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                A Proven, Predictable Delivery Framework
              </h2>
              <p className="text-lg text-gray-600 mb-6">A Simple, Fast, Proven Delivery System</p>
              <p className="text-gray-700 mb-4">
                We follow a structured 5-step process that ensures transparency, quality, and on-time delivery for every
                project.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/agile-project-management-sprint-board-with-sticky-.jpg"
              alt="Process framework"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, idx) => {
              const IconComponent = step.icon
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                      <div className="text-4xl font-bold text-primary/20">{step.number}</div>
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                        <IconComponent size={24} className="text-primary group-hover:text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <p className="text-sm font-semibold text-primary">
                        Outcome: <span className="text-gray-700">{step.outcome}</span>
                      </p>
                    </div>

                    {/* Arrow for larger screens */}
                    {idx < steps.length - 1 && (
                      <div className="hidden md:block">
                        <ArrowRight size={24} className="text-gray-300 group-hover:text-primary transition-colors" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-light rounded-full px-8">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
