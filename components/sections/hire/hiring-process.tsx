import { MessageSquare, Users, Video, Rocket, BarChart } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Share Your Needs",
    description: "Tell us the roles you want.",
    detail: "We assign a hiring consultant.",
  },
  {
    icon: Users,
    number: "02",
    title: "Get Pre-Vetted Profiles",
    description: "We send 3 to 5 matched profiles within 48 hours.",
    detail: "All skills tested.",
  },
  {
    icon: Video,
    number: "03",
    title: "Interview and Select",
    description: "You talk to the candidates and choose your expert.",
    detail: "",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Onboarding",
    description: "Your expert joins in 15 days.",
    detail: "We help with setup.",
  },
  {
    icon: BarChart,
    number: "05",
    title: "Ongoing Delivery",
    description: "Daily standups and weekly reports.",
    detail: "You always know the progress.",
  },
]

export function HiringProcess() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance">
            How Our Hiring Model Works
          </h2>
          <p className="text-xl text-gray-600">We made hiring simple and clear</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gray-200" style={{ top: "80px" }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-light border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow h-full">
                  <div className="relative z-10 h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {step.number}
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                    {step.detail && <p className="text-sm font-medium text-primary">{step.detail}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-light border border-gray-200 rounded-xl p-8 max-w-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Results</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-medium text-gray-700">No hiring stress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-medium text-gray-700">Smooth delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-medium text-gray-700">Full flexibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
