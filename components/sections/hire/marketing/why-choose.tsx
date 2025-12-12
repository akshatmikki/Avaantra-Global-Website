import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative mb-16 rounded-3xl overflow-hidden h-96 max-w-7xl mx-auto">
          <img
            src="/marketing-team-analyzing-digital-campaign-metrics-.jpg"
            alt="Marketing strategy and analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose Avaantra for Marketing Experts?
              </h2>
              <p className="text-xl text-white/90">
                We connect strategy, execution, and performance tracking into one predictable system
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Problem side */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-dark">The Real Problem</h3>
            </div>

            <p className="text-xl text-gray-700 font-semibold leading-relaxed">
              Your marketing efforts should drive sales — not confusion.
            </p>

            <div className="space-y-4">
              {[
                "You spend money across channels, but can't track ROI",
                "Agencies overpromise and hide behind vanity metrics",
                "Freelancers lack accountability and strategic focus",
                "In-house hiring is expensive and slow",
              ].map((problem) => (
                <div key={problem} className="flex items-start gap-3 p-4 bg-light rounded-xl border border-gray-200">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 pt-4">
              You don't need more noise — you need <strong className="text-dark">proven experts</strong> who connect
              data, content, and performance into one predictable system.
            </p>
          </div>

          {/* Solution side */}
          <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-dark" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark">Our Promise</h3>
              </div>

              <p className="text-xl font-semibold text-dark mb-4">Measurable Growth, Not Guesswork</p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                We help startups, SaaS brands, and enterprises hire marketing experts who plan, execute, and scale
                campaigns that drive leads and revenue.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-4 bg-light rounded-2xl border border-gray-200">
                  <div className="text-3xl font-bold text-primary mb-1">3–5X</div>
                  <div className="text-xs text-gray-600">ROI in 90 days</div>
                </div>
                <div className="text-center p-4 bg-light rounded-2xl border border-gray-200">
                  <div className="text-3xl font-bold text-primary mb-1">2–3X</div>
                  <div className="text-xs text-gray-600">Lead volume</div>
                </div>
                <div className="text-center p-4 bg-light rounded-2xl border border-gray-200">
                  <div className="text-3xl font-bold text-primary mb-1">40%</div>
                  <div className="text-xs text-gray-600">Lower CAC</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Vetted experts across SEO, PPC, content, and social",
                  "Transparent reporting and performance dashboards",
                  "Flexible engagement models (hourly, part-time, full-time)",
                  "Managed by experienced project managers",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
