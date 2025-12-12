import { Shield, Lock, FileCheck, Key, RefreshCw } from "lucide-react"

const securityFeatures = [
  { icon: FileCheck, text: "NDA for every project" },
  { icon: Lock, text: "Full IP ownership" },
  { icon: Shield, text: "Secure cloud practices" },
  { icon: Key, text: "Encrypted communication" },
  { icon: RefreshCw, text: "Free replacement in 15 days" },
]

export function Security() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 text-balance">
              Your IP and Data Are Always Safe
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-light border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-dark">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-dark">You own everything we build.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
