import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function PersonalBrandingServicesPage() {
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
                <Globe className="inline mr-2" size={16} />
                Personal Branding Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build Your <span className="text-primary">Personal Brand</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Establish yourself as a thought leader in your industry. We help executives, founders, and professionals 
                build a strong personal brand through content, social media, and strategic positioning.
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
                alt="Personal Branding Services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Personal Branding Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Thought Leadership</h3>
              <p className="text-gray-600">Position yourself as an expert in your field through strategic content and media.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Social Media Strategy</h3>
              <p className="text-gray-600">Build a strong presence on LinkedIn, Twitter, and other platforms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
              <p className="text-gray-600">Develop content that showcases your expertise and builds your reputation.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Personal Branding Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our Personal Branding Services</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        End-to-end personal brand building for founders, executives, and professionals.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Brand Positioning",
          desc: "Define your narrative, niche, and unique value proposition",
        },
        {
          title: "Thought Leadership Content",
          desc: "Blogs, posts, and insights that showcase expertise",
        },
        {
          title: "LinkedIn Personal Branding",
          desc: "Profile optimization and content strategy for visibility",
        },
        {
          title: "Social Media Growth",
          desc: "Audience building and engagement on key platforms",
        },
        {
          title: "Content Distribution",
          desc: "Amplify reach through consistent publishing and promotion",
        },
        {
          title: "Brand Monitoring",
          desc: "Track mentions, engagement, and brand perception",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Personal Branding Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our Personal Branding Process</h2>
      <p className="text-gray-600">
        Build credibility, consistency, and influence over time.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Discovery & Brand Audit",
        "Positioning & Messaging",
        "Content Strategy",
        "Publishing & Growth",
        "Authority Building",
      ].map((step, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow text-center"
        >
          <div className="text-3xl font-bold text-primary mb-3">
            {idx + 1}
          </div>
          <p className="font-semibold">{step}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Who This Is For */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold mb-4">Who We Build Personal Brands For</h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "Founders & Entrepreneurs",
        "CXOs & Executives",
        "Consultants & Coaches",
        "Industry Experts",
      ].map((group, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow text-center font-semibold"
        >
          {group}
        </div>
      ))}
    </div>
  </div>
</section>

{/* Case Study */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">Personal Branding Case Study</h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">SaaS Founder</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          Low visibility and weak industry presence
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          LinkedIn positioning, weekly thought leadership, and audience growth strategy
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "5X profile engagement",
            "10K+ relevant followers gained",
            "Inbound leads & speaking invites",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 font-semibold">
              <span className="text-primary">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">FAQs</h2>
    </div>

    <div className="max-w-4xl mx-auto space-y-6">
      {[
        {
          q: "How long does personal branding take?",
          a: "Initial visibility in weeks, authority builds over 3–6 months.",
        },
        {
          q: "Do you create content for me?",
          a: "Yes — posts, articles, and thought leadership content.",
        },
        {
          q: "Which platforms do you focus on?",
          a: "Primarily LinkedIn, with support for Twitter/X and blogs.",
        },
        {
          q: "Is this only for founders?",
          a: "No — executives, consultants, and professionals benefit too.",
        },
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">{item.q}</h3>
          <p className="text-gray-600">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Final CTA */}
<section className="py-24 bg-gradient-to-br from-dark via-gray-900 to-dark text-light">
  <div className="container mx-auto px-4 md:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Build Your Personal Brand?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Become visible, credible, and influential in your industry.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free Personal Branding Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
