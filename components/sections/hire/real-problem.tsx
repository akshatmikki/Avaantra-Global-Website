import { X } from "lucide-react"

const problems = [
  "You have work to deliver but not enough people",
  "Hiring takes too long",
  "Freelancers are not reliable",
  "Outsourcing companies do not take ownership",
  "Quality drops when the team is small",
  "Deadlines are missed because there is no support",
]

export function RealProblem() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance">
              The Real Problem Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">Most businesses struggle because:</p>

            <div className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <p className="text-base text-gray-700">{problem}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <h3 className="text-xl font-semibold text-dark mb-2">What you really need</h3>
              <p className="text-base text-gray-700">
                A dedicated expert or team that is:{" "}
                <span className="font-semibold text-dark">fast to hire, easy to manage, skilled, and trustworthy.</span>
              </p>
              <p className="text-base mt-2 text-primary font-semibold">That is what we provide.</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/frustrated-business-person-looking-at-calendar-hir.jpg"
                alt="Business hiring challenges"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
