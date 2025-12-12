import { CheckCircle2, TrendingUp, Target, DollarSign } from "lucide-react"

export default function CaseStudy() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-dark via-gray-900 to-dark text-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">Success Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Study: Multi-Channel Lead Growth</h2>
            <p className="text-gray-300">How we transformed a B2B SaaS company's marketing performance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-bold text-primary mb-2 uppercase">Client</h3>
              <p className="text-gray-200">B2B SaaS Company</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-bold text-primary mb-2 uppercase">Challenge</h3>
              <p className="text-gray-200">Low ROI from scattered marketing vendors</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-bold text-primary mb-2 uppercase">Solution</h3>
              <p className="text-gray-200">Unified SEO, PPC & automation pod</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Results Achieved
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">+212%</div>
                  <div className="text-sm text-gray-200">MQL growth</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">38%</div>
                  <div className="text-sm text-gray-200">CAC reduced</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">4.5X</div>
                  <div className="text-sm text-gray-200">ROI within 90 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
