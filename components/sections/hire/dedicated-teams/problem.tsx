import { Zap, DollarSign, Clock } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">The Real Problem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scaling projects sounds exciting — until you hit the hiring wall.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-orange-300 hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-orange-600" />
              </div>
              <p className="text-gray-800 font-medium">Finding and managing multiple freelancers is chaos</p>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-orange-300 hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-orange-600" />
              </div>
              <p className="text-gray-800 font-medium">Agencies charge premium retainers but lack transparency</p>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-orange-300 hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-orange-600" />
              </div>
              <p className="text-gray-800 font-medium">Full-time hiring takes months — and adds overhead</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-4 font-medium">You don't need to build teams from scratch.</p>
            <p className="text-2xl md:text-3xl font-bold text-dark leading-relaxed">
              You need <span className="text-primary">Avaantra's plug-and-play dedicated teams</span> — ready to
              integrate, work under your brand, and deliver like an in-house squad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
