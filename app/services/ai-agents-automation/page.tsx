import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Type } from "lucide-react"

export default function AIAgentsAutomationPage() {
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
                <Type className="inline mr-2" size={16} />
                AI Agents & Automation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Automate with <span className="text-primary">Intelligent Agents</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Build AI agents that automate complex workflows and tasks. From customer service bots to 
                intelligent process automation, we create agents that work autonomously and learn from interactions.
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
                alt="AI Agents & Automation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Agents & Automation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Intelligent Automation</h3>
              <p className="text-gray-600">Automate complex workflows that require decision-making and context understanding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">24/7 Operations</h3>
              <p className="text-gray-600">AI agents that work around the clock to handle tasks and customer interactions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-gray-600">Agents that improve over time through machine learning and feedback loops.</p>
            </div>
          </div>
        </div>
      </section>
      {/* AI Agents & Automation Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our AI Agents & Automation Services
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Autonomous AI agents designed to execute tasks, make decisions, and scale operations without human bottlenecks.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Custom AI Agents",
          desc: "Task-oriented agents built for your business workflows",
        },
        {
          title: "Customer Support Agents",
          desc: "AI agents handling support tickets, chats, and FAQs",
        },
        {
          title: "Internal Ops Automation",
          desc: "Automate reporting, data entry, and internal processes",
        },
        {
          title: "Multi-Agent Systems",
          desc: "Coordinated agents collaborating on complex workflows",
        },
        {
          title: "Tool-Integrated Agents",
          desc: "Agents connected to CRMs, databases, APIs, and apps",
        },
        {
          title: "Monitoring & Guardrails",
          desc: "Control logic, safety checks, and performance tracking",
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

{/* AI Agents Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our AI Agent Development Process
      </h2>
      <p className="text-gray-600">
        Structured automation that works in production — not demos.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Workflow Analysis",
        "Agent Design",
        "Tool & API Integration",
        "Testing & Guardrails",
        "Deployment & Optimization",
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

{/* Use Cases */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold mb-4">
        AI Agent Use Cases
      </h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "Customer Support Automation",
        "Sales & Lead Qualification",
        "Finance & Ops Automation",
        "Engineering & DevOps Tasks",
      ].map((useCase, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow text-center font-semibold"
        >
          {useCase}
        </div>
      ))}
    </div>
  </div>
</section>

{/* Case Study */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">
        AI Agents Case Study
      </h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">B2B SaaS Company</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          Manual customer support and slow internal workflows
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          AI support agent + internal ops automation using tool-based agents
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "65% reduction in support workload",
            "24/7 automated operations",
            "Faster task execution across teams",
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
          q: "Are AI agents safe for production use?",
          a: "Yes — with guardrails, monitoring, and controlled permissions.",
        },
        {
          q: "Can agents access our internal tools?",
          a: "Yes. We securely connect agents to CRMs, databases, and APIs.",
        },
        {
          q: "Do agents replace human teams?",
          a: "No — they augment teams by removing repetitive tasks.",
        },
        {
          q: "Can agents learn and improve over time?",
          a: "Yes — through feedback loops and model updates.",
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
      Ready to Automate with AI Agents?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Deploy autonomous agents that scale your operations without scaling headcount.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free AI Automation Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
