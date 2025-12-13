import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function OnlineReputationManagementPage() {
  return (
    <>
      <Navigation />
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
                <Clock className="inline mr-2" size={16} />
                Online Reputation Management
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Protect & Enhance Your <span className="text-primary">Brand Reputation</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Monitor, manage, and improve your online reputation across review sites, social media, and search results. 
                Build trust with potential customers and protect your brand from negative content.
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
                alt="Online Reputation Management"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Online Reputation Management</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600">Continuous monitoring of reviews, mentions, and brand sentiment across platforms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Crisis Management</h3>
              <p className="text-gray-600">Rapid response to negative content to minimize brand damage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Review Generation</h3>
              <p className="text-gray-600">Strategies to generate positive reviews and improve overall ratings.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  )
}
