import { AlertCircle, Clock, DollarSign, Users } from "lucide-react"

export default function StartupProblems() {
  const problems = [
    {
      icon: Users,
      title: "No Tech Team You Can Trust",
      description: "Finding reliable developers who understand your vision is nearly impossible.",
    },
    {
      icon: Clock,
      title: "Wasting Months Before Launch",
      description: "Time drains away before you even have an MVP to test with users.",
    },
    {
      icon: DollarSign,
      title: "Investors Want Traction",
      description: "But you can't show traction without a working product in market.",
    },
    {
      icon: AlertCircle,
      title: "Spending More Time Fixing",
      description: "Than growing, because developers build what you ask for, not what users need.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">The Real Problem You're Facing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building a startup is exciting — and exhausting. You're doing everything, and then come the real-world
            hurdles:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <problem.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-dark">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-dark mb-2">Sound familiar? You're not alone.</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The truth: Most startups don't fail because of bad ideas. They fail because they can't execute fast enough,
            validate early enough, or scale sustainably. That's exactly what Avaantra Global solves.
          </p>
        </div>
      </div>
    </section>
  )
}
