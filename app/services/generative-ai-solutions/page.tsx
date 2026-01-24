"use client";
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export default function GenerativeAISolutionsPage() {
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
                <Quote className="inline mr-2" size={16} />
                Generative AI Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Harness the Power of <span className="text-primary">Generative AI</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Build custom generative AI solutions using GPT, Claude, and other advanced models. From content 
                generation to intelligent automation, we create AI applications that transform how you work.
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
                alt="Generative AI Solutions"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Generative AI Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Content Generation</h3>
              <p className="text-gray-600">Automate content creation for marketing, documentation, and customer support.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Custom Applications</h3>
              <p className="text-gray-600">Build tailored generative AI solutions for your specific use cases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Advanced Models</h3>
              <p className="text-gray-600">Leverage cutting-edge models like GPT-4, Claude, and custom fine-tuned models.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Generative AI Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our Generative AI Services</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Production-ready generative AI systems built for accuracy, security, and real business impact.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Custom GenAI Applications",
          desc: "Internal tools and customer-facing AI products tailored to your workflows",
        },
        {
          title: "AI Chatbots & Assistants",
          desc: "Support, sales, and internal copilots powered by LLMs",
        },
        {
          title: "Content Generation Systems",
          desc: "Automated generation for blogs, docs, emails, and knowledge bases",
        },
        {
          title: "RAG (Retrieval-Augmented Generation)",
          desc: "AI grounded in your internal data for accurate responses",
        },
        {
          title: "Model Fine-Tuning",
          desc: "Fine-tuned GPT, Claude, and open-source models for domain expertise",
        },
        {
          title: "AI Workflow Automation",
          desc: "End-to-end task automation using generative AI pipelines",
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

{/* Generative AI Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our Generative AI Development Process</h2>
      <p className="text-gray-600">
        From experimentation to production-grade AI systems.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Use Case Definition",
        "Data & Knowledge Mapping",
        "Model Selection",
        "System Development",
        "Monitoring & Optimization",
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

{/* Industries */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold mb-4">Industries Using Generative AI</h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "SaaS & Technology",
        "E-commerce",
        "Healthcare",
        "Finance & Legal",
      ].map((industry, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow text-center font-semibold"
        >
          {industry}
        </div>
      ))}
    </div>
  </div>
</section>

{/* Case Study */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">Generative AI Case Study</h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">B2B SaaS Platform</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          Manual content creation and slow customer support
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          RAG-based AI assistant and automated content generation workflows
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "60% faster content production",
            "45% reduction in support tickets",
            "Scalable AI adoption across teams",
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
          q: "Do you build custom generative AI solutions?",
          a: "Yes — tailored systems using proprietary data and workflows.",
        },
        {
          q: "Can you use our internal documents securely?",
          a: "Yes. We implement secure RAG pipelines and access controls.",
        },
        {
          q: "Which models do you support?",
          a: "GPT, Claude, open-source LLMs, and fine-tuned models.",
        },
        {
          q: "Is generative AI production-ready?",
          a: "Yes — with proper grounding, monitoring, and safeguards.",
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
      Ready to Build with Generative AI?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Move beyond experiments and deploy AI systems that actually work.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free Generative AI Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
