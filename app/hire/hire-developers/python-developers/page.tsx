import HireHero from "@/components/sections/hire/hire-developers/Hero";
import RealProblem from "@/components/sections/hire/hire-developers/RealProblem";
import OurPromise from "@/components/sections/hire/hire-developers/Promise";
import OurExpertise from "@/components/sections/hire/hire-developers/OurExpertise";
import IndustriesWeServe from "@/components/sections/hire/hire-developers/IndustriesWeServe";
import WhyAvaantra from "@/components/sections/hire/hire-developers/WhyAvaantra";
import HiringProcess from "@/components/sections/hire/hire-developers/HiringProcess";
import EngagementModels from "@/components/sections/hire/hire-developers/EngagementModels";
import Comparison from "@/components/sections/hire/hire-developers/Comparison";
import SecurityIP from "@/components/sections/hire/hire-developers/SecurityIP";
import Testimonials from "@/components/sections/hire/hire-developers/HireTestimonials";
import CaseStudy from "@/components/sections/hire/hire-developers/CaseStudy";
import FAQs from "@/components/sections/hire/hire-developers/FAQs";
import WhyThisWorks from "@/components/sections/hire/hire-developers/WhyThisWorks";
import FinalCTA from "@/components/sections/hire/hire-developers/CTA";

export const metadata = {
  title:
    "Hire Python Developers | Django, Flask & AI Experts | Avaantra Global",
  description:
    "Hire dedicated Python developers to build scalable web, AI, and automation solutions. Avaantra Global offers full-time, pre-vetted Python engineers for startups and SaaS companies — risk-free.",
};

export default function PythonDevelopersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated Python Developers"
        highlight="Fast, Reliable & Scalable"
        subtitle="Python powers the world’s most successful startups — from Netflix to OpenAI. At Avaantra Global, we help you hire pre-vetted Python developers who specialize in web applications, APIs, AI models, and data automation — so you can scale faster without hiring risk."
        primaryCta="Hire Python Experts in 15 Days"
        secondaryCta="See How Our Python Teams Deliver"
        uspList={[
          "Pre-vetted Python developers for web, AI, and automation",
          "Developers ready to start in 7–15 days",
          "Full-time, dedicated resources — no sharing",
          "Optional project management and delivery oversight",
          "NDA-backed engagement with full IP ownership",
          "Monthly billing with flexible scaling",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "2–3X", label: "Faster Development" },
          { value: "40–50%", label: "Cost Savings" },
          { value: "100%", label: "Visibility & Control" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem Businesses Face"
        subheading="You’ve got a great product vision — but building it fast while maintaining quality is tough."
        problems={[
          { text: "Good Python developers are expensive and hard to find." },
          { text: "Freelancers lack long-term reliability." },
          { text: "In-house hiring takes months." },
          { text: "Agencies deliver inconsistent quality." },
        ]}
        conclusionTitle="You need more than just Python skills."
        conclusionText="You need a dedicated Python team that understands your goals, aligns with your processes, and delivers real business outcomes — without wasting time or budget. That’s where Avaantra Global comes in. We provide skilled, dedicated Python developers who work as part of your team — full-time, managed, and fully accountable."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: Hire Smarter, Build Faster, Scale Confidently"
        subheading="Avaantra Global helps startups, SaaS platforms, and enterprises hire Python developers within 15 days — experienced in modern frameworks, automation, and data engineering."
        promises={[
          { text: "Python developers ready in 7–15 days" },
          { text: "Full-time dedicated resources — no sharing" },
          { text: "Project managers included (optional)" },
          { text: "NDA, IP protection, and full transparency" },
          { text: "Pay monthly and scale anytime" },
        ]}
        outcomes={[
          { value: "2–3X", label: "Faster Product Development" },
          { value: "40–50%", label: "Cost Savings" },
          { value: "100%", label: "Visibility" },
          { value: "0%", label: "Hiring Headache" },
        ]}
      />
      <OurExpertise
        heading="Our Python Development Expertise"
        subheading="We bring hands-on experience across modern Python frameworks, AI tools, APIs, and automation systems — ideal for startups and enterprises building scalable products."
        items={[
          {
            title: "Web & App Development",
            description:
              "Robust backend systems and APIs built for speed, security, and scalability.",
            toolsTitle: "Technologies",
            tools: [
              "Django",
              "Flask",
              "FastAPI",
              "RESTful APIs",
              "GraphQL",
              "SaaS Backend Architecture",
              "CMS & Dashboards",
              "Web Portals",
            ],
            outcome: "Fast, secure, and maintainable web products.",
          },
          {
            title: "AI, ML & Data Science",
            description:
              "End-to-end AI and data solutions that turn data into real business value.",
            toolsTitle: "AI & Data Stack",
            tools: [
              "Scikit-learn",
              "TensorFlow",
              "PyTorch",
              "Chatbots & NLP",
              "OpenAI Integrations",
              "LangChain",
              "ETL Pipelines",
              "Analytics Dashboards",
            ],
            outcome:
              "Smart, AI-powered solutions that create competitive advantage.",
          },
          {
            title: "Automation & Integrations",
            description:
              "Automation-first engineering to reduce manual effort and operational friction.",
            toolsTitle: "Automation Tools",
            tools: [
              "Python Automation Scripts",
              "API & Data Integrations",
              "Web Scraping",
              "Process Automation",
              "Zapier",
              "Power Automate",
              "Custom Connectors",
            ],
            outcome:
              "Efficiency, accuracy, and operational speed through automation.",
          },
          {
            title: "DevOps, Cloud & Microservices",
            description:
              "Production-ready Python systems built for modern cloud environments.",
            toolsTitle: "Cloud & DevOps",
            tools: [
              "Docker",
              "Kubernetes",
              "CI/CD Pipelines",
              "AWS Lambda",
              "Azure Functions",
              "Google Cloud Platform",
              "Serverless Architecture",
              "Infrastructure as Code (IaC)",
            ],
            outcome: "Deployment-ready, cost-efficient cloud architecture.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our Python developers have delivered production-grade systems across diverse business domains."
        industries={[
          {
            icon: "🧠",
            title: "SaaS & B2B Products",
            description:
              "Scalable SaaS platforms and internal tools built with clean Python architectures.",
          },
          {
            icon: "💳",
            title: "FinTech & InsurTech",
            description:
              "Secure, compliant systems for payments, risk modeling, and financial automation.",
          },
          {
            icon: "🏥",
            title: "HealthTech & EdTech",
            description:
              "Data-driven platforms with integrations, analytics, and scalable backend systems.",
          },
          {
            icon: "🛒",
            title: "E-commerce & Retail",
            description:
              "High-performance platforms with inventory, order management, and automation.",
          },
          {
            icon: "🤖",
            title: "AI, ML & Automation Startups",
            description:
              "AI-powered products, data pipelines, and intelligent automation systems.",
          },
        ]}
        outcome="Domain-aware developers who understand business context, not just code."
      />
      <WhyAvaantra
        heading="Why Hire Python Developers from Avaantra Global"
        subheading="Because we’re more than a hiring platform — we’re your engineering growth partner."
        advantages={[
          { text: "5–10 years average Python development experience" },
          { text: "Clean, scalable, and well-documented codebases" },
          { text: "Sprint-based execution with clear reporting" },
          { text: "On-demand project management and QA support" },
          { text: "AI-assisted code reviews for consistency and quality" },
          { text: "100% IP and source code ownership" },
        ]}
        closingLine="We deliver quality, reliability, and scalability — the three things your business needs to grow."
      />
      <HiringProcess
        heading="Our Hiring Process: Fast, Transparent & Predictable"
        subheading="A proven process designed to help you onboard reliable Python developers without delays or guesswork."
        steps={[
          {
            step: "1",
            title: "Share Your Needs",
            process:
              "Define your role requirements or project scope with our team.",
            benefit: "We map ideal Python developer profiles",
          },
          {
            step: "2",
            title: "Get Top Profiles",
            process:
              "Receive 3–5 vetted Python engineer profiles within 48 hours.",
            benefit: "Only qualified, pre-tested candidates",
          },
          {
            step: "3",
            title: "Interview & Approve",
            process:
              "Interview developers and select the best fit for your team.",
            benefit: "100% control over who joins",
          },
          {
            step: "4",
            title: "Onboard & Integrate",
            process:
              "Developers start working inside your existing tools and workflows.",
            benefit: "Seamless setup with Slack, Jira, and GitHub",
          },
          {
            step: "5",
            title: "Track & Scale",
            process:
              "Sprint-based delivery with reporting, reviews, and optimization.",
            benefit: "Predictable velocity with a scalable model",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Choose a flexible engagement model that fits your product stage, timeline, and delivery needs."
        models={[
          {
            title: "Dedicated Python Developer",
            bestFor: "Long-term SaaS or product builds",
            howItWorks:
              "A full-time Python developer working exclusively under your direction.",
            outcome: "Reliable delivery and long-term continuity",
          },
          {
            title: "Managed Agile Pod",
            bestFor: "Multi-skill projects (Dev + QA + DevOps)",
            howItWorks:
              "An Avaantra-managed cross-functional team handling end-to-end delivery.",
            outcome: "2–3X faster outcomes",
          },
          {
            title: "Project-Based Engagement",
            bestFor: "Fixed scope and timeline builds",
            howItWorks:
              "Complete project delivery managed by Avaantra under a dedicated PM.",
            outcome: "Fast, low-risk completion",
          },
          {
            title: "Hybrid Team",
            bestFor: "Continuous development with post-launch support",
            howItWorks:
              "Combination of dedicated developers and managed services.",
            outcome: "Ongoing value with flexibility",
          },
        ]}
      />
      {/* Tech Stack & Tools */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
              ⚙️ Tech Stack & Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Modern Tools. Production-Ready Stack.
            </h2>
            <p className="mt-5 text-gray-600">
              Our Python developers use a battle-tested ecosystem across AI,
              data, cloud, testing, and delivery — chosen for reliability, not
              hype.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Languages & Frameworks",
                icon: "🐍",
                items: ["Python", "Django", "Flask", "FastAPI", "Tornado"],
              },
              {
                title: "AI & Machine Learning",
                icon: "🤖",
                items: [
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-learn",
                  "OpenAI",
                  "LangChain",
                ],
              },
              {
                title: "Data & Databases",
                icon: "🗄️",
                items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Pandas"],
              },
              {
                title: "DevOps & Cloud",
                icon: "☁️",
                items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
              },
              {
                title: "Testing & Quality",
                icon: "🧪",
                items: ["PyTest", "Selenium", "Robot Framework"],
              },
              {
                title: "Project & Collaboration",
                icon: "🧭",
                items: ["Jira", "ClickUp", "Git", "Slack", "Trello"],
              },
            ].map((stack) => (
              <div
                key={stack.title}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/40 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{stack.icon}</span>
                  <h3 className="font-semibold text-lg text-dark">
                    {stack.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 group-hover:bg-primary/10 group-hover:text-primary transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom punchline */}
          <div className="mt-16 text-center">
            <p className="text-gray-700 text-lg">
              Tools don’t ship products.{" "}
              <span className="font-semibold text-dark">
                Teams using them well do.
              </span>
            </p>
          </div>
        </div>
      </section>

      <Comparison
        heading="Avaantra vs Freelancers vs In-House Teams"
        subheading="See how Avaantra Global compares when it comes to speed, cost, and delivery reliability."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "4–6 weeks",
            inHouse: "2–3 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "Cost",
            freelancer: "Medium",
            inHouse: "High",
            avaantra: "40–50% savings",
          },
          {
            aspect: "Scalability",
            freelancer: "Low",
            inHouse: "Slow",
            avaantra: "Instant & Flexible",
          },
          {
            aspect: "Quality Assurance",
            freelancer: "Inconsistent",
            inHouse: "Good",
            avaantra: "High + QA Managed",
          },
          {
            aspect: "Security & IP Rights",
            freelancer: "Risky",
            inHouse: "Safe",
            avaantra: "100% Secured",
          },
          {
            aspect: "Project Manager",
            freelancer: "No",
            inHouse: "Yes",
            avaantra: "Included (Optional)",
          },
        ]}
      />
      <SecurityIP
        heading="Security, IP & Code Ownership"
        subheading="We take your intellectual property, data, and code security seriously."
        points={[
          { text: "NDA signed before onboarding" },
          { text: "Full source code and IP ownership" },
          { text: "SOC2 and GDPR-compliant security practices" },
          { text: "Secure access control and encrypted communication" },
        ]}
        closingLine="You own everything. We just help you build it."
      />
      <Testimonials
        heading="What Our Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s Python team helped us build and scale our SaaS app 2X faster than expected.",
            name: "CTO",
            role: "B2B SaaS",
            location: "Singapore",
          },
          {
            quote:
              "They’re not just coders — they understand business goals and deliver real outcomes.",
            name: "Founder",
            role: "FinTech Startup",
            location: "India",
          },
          {
            quote:
              "We automated 40% of our operations using their Python automation engineers.",
            name: "Operations Head",
            role: "E-commerce Firm",
            location: "UK",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: Scaling a Data-Driven SaaS Platform"
        client="AI-powered Analytics Startup (USA)"
        challenge="Slow MVP progress and lack of in-house AI and data engineering expertise."
        solution="Avaantra provided a focused team of 3 Python developers specializing in Flask, TensorFlow, and DevOps to build, optimize, and launch the MVP."
        metrics={[
          { value: "6 Weeks", label: "MVP Launch Timeline" },
          { value: "3.5X", label: "Data Processing Speed" },
          { value: "$400K", label: "Seed Funding Secured" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire Python Developers"
        faqs={[
          {
            question: "How soon can I onboard a Python developer?",
            answer:
              "Typically within 7–15 business days, depending on your requirements.",
          },
          {
            question: "Can I hire part-time or full-time developers?",
            answer:
              "Yes. You can choose full-time, part-time, or hourly engagement based on your needs.",
          },
          {
            question: "Will they work in my time zone?",
            answer:
              "Yes. Our developers align with IST, GMT, EST, or PST overlap hours.",
          },
          {
            question: "What if I need to scale the team later?",
            answer:
              "You can add new Python developers anytime, usually within 3–5 business days.",
          },
          {
            question: "What kind of Python projects can you handle?",
            answer:
              "Web applications, AI/ML solutions, data analytics, automation systems, and SaaS backends.",
          },
          {
            question: "Do I get code ownership?",
            answer:
              "Yes. You always retain 100% ownership of the source code and IP.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because hiring shouldn’t slow your innovation.",
          "With Avaantra, you get proven Python talent — not freelancers — working as a reliable extension of your team.",
          "We deliver quality, clear communication, and the ability to scale without friction.",
        ]}
        highlight="You focus on growing your business. We focus on building the technology that fuels it."
      />
      <FinalCTA
        heading="Hire Pre-Vetted Python Developers — Build Faster, Smarter & Cost-Effectively."
        subheading="Scale your product with dedicated Python experts who deliver real results."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
