import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { UserCheck } from "lucide-react"

export default function ConversionRateOptimizationPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dark via-gray-900 to-dark text-light py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <UserCheck className="inline mr-2" size={16} />
                Conversion Rate Optimization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Turn Visitors into <span className="text-primary">Customers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Optimize your website and landing pages to convert more visitors into customers. Through data-driven 
                testing and optimization, we improve user experience and increase conversion rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-8 py-6 text-lg">
                  Book Free Consultation →
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-team-working-on-software-development-.jpg"
                alt="Conversion Rate Optimization"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Conversion Rate Optimization</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data-Driven Testing</h3>
              <p className="text-gray-600">A/B testing and multivariate testing to identify what truly converts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">User Experience Focus</h3>
              <p className="text-gray-600">Improve UX to remove friction and guide users toward conversion.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
              <p className="text-gray-600">Track improvements in conversion rates and revenue impact.</p>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}
