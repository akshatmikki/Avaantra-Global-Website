import ScrollToTop from "@/components/scroll-to-top"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StaffAugmentationPage() {
  return (
    <>
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-primary text-light pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Scale Your Team <span className="text-blue-200">Without Slowing Down</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty">
              Add skilled developers to your existing team in 15 days or less — no hiring delays, no payroll stress, no
              compromise on quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                Get Developer Profiles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Staff Augmentation Means */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">You don't need another vendor.</h2>
            <p className="text-lg text-center text-gray-700 mb-8">
              You need capacity you can trust — the kind that plugs into your system, aligns with your workflow, and
              delivers results right away.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 border-2 border-blue-200">
              <p className="text-xl font-semibold text-primary mb-4 text-center">
                That's what Avaantra Global's Staff Augmentation gives you:
              </p>
              <div className="space-y-3">
                {[
                  "Fast access to pre-vetted developers",
                  "Full control over day-to-day work",
                  "Zero recruiting or HR overhead",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <p className="text-lg text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl font-bold text-primary mt-6 text-center">
                You stay in charge — we simply give you the talent to move faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Startups & Agencies Love This Model */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Startups & Agencies Love This Model
            </h2>
            <p className="text-lg text-center text-gray-700 mb-8">
              Because it solves the real problems that slow you down:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  problem: "Hiring takes forever",
                  detail: "You can't wait 3–6 months for the perfect developer.",
                },
                {
                  problem: "Costs keep rising",
                  detail: "Local salaries don't fit a startup runway.",
                },
                {
                  problem: "Projects overflow",
                  detail: "Agencies lose margin when deadlines overlap.",
                },
                {
                  problem: "Freelancers are unreliable",
                  detail: "You waste time starting over.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.problem}</h3>
                  <p className="text-gray-700">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <p className="text-xl font-semibold text-primary">
                Staff augmentation gives you predictable capacity without adding headcount risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Augmentation Services */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Staff Augmentation Services</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  service: "Frontend Development",
                  description: "React, Angular, Vue — deliver sleek, fast interfaces.",
                },
                {
                  service: "Backend Development",
                  description: "Python, Node.js, .NET, Java — stable and scalable core logic.",
                },
                {
                  service: "Full-Stack Engineers",
                  description: "End-to-end ownership — from architecture to deployment.",
                },
                {
                  service: "Mobile App Developers",
                  description: "iOS, Android, Flutter, React Native — mobile-first growth.",
                },
                {
                  service: "QA & Automation Engineers",
                  description: "Manual + automated testing for speed and quality.",
                },
                {
                  service: "DevOps Engineers",
                  description: "CI/CD, Kubernetes, cloud cost optimization.",
                },
                {
                  service: "UI/UX Designers",
                  description: "Design that converts users into customers.",
                },
                {
                  service: "Project Managers & Analysts",
                  description: "Sprint planning, documentation, and visibility.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold text-blue-700 mb-3">{item.service}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-light rounded-2xl p-8 text-center">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold mb-2">15 Days</p>
                  <p className="text-lg">Average Deployment Time</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">40-60%</p>
                  <p className="text-lg">Cost Reduction vs Local Hiring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-primary to-gray-900 text-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Add the Right Talent. Today.</h2>
            <p className="text-xl text-gray-200 mb-8">
              Stop waiting for the perfect hire. Start shipping faster with developers who fit your stack, your
              workflow, and your timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-light text-dark hover:bg-gray-200 rounded-full text-lg px-8">
                View Developer Profiles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-light text-light hover:bg-light/10 rounded-full text-lg px-8 bg-transparent"
              >
                Book a 15-Min Call
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Pre-Vetted Talent</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>15-Day Onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Flexible Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Full IP Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
