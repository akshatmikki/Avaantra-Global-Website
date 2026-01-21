import { HeroSection } from "@/components/sections/IndustryStyling/Hero"
import { InfoSection } from "@/components/sections/IndustryStyling/InfoSection"
import { ServiceGrid } from "@/components/sections/IndustryStyling/ServiceGrid"
import { IconCardGrid } from "@/components/sections/IndustryStyling/IconCardGrid"
import { FeatureGrid } from "@/components/sections/IndustryStyling/FeatureGrid"
import { ProcessSteps } from "@/components/sections/IndustryStyling/ProcessSteps"
import { TechStackGrid } from "@/components/sections/IndustryStyling/TechStackGrid"
import { CaseStudyGrid } from "@/components/sections/IndustryStyling/CaseStudyGrid"
import { SplitListSection } from "@/components/sections/IndustryStyling/SplitListSection"
import { ComplianceList } from "@/components/sections/IndustryStyling/ComplianceList"
import { FAQGrid } from "@/components/sections/IndustryStyling/FAQGrid"
import { FinalCTA } from "@/components/sections/IndustryStyling/FinalCTA"

import {
  Rocket,
  Brain,
  Layers,
  Cpu,
  Cloud,
  Palette,
  BarChart3,
  Workflow,
  ShieldCheck,
  Lock,
} from "lucide-react"

export default function AISaaSStartupsPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Building the Next Generation of SaaS & AI Innovation"
        subtitle="From concept to commercialization — Avaantra Global empowers founders and product teams to build, launch, and scale intelligent SaaS platforms faster, smarter, and with precision."
        primaryCTA="Launch Your SaaS Product"
        secondaryCTA="Explore Startup Case Studies"
      />

      {/* WHY STARTUP INNOVATION */}
      <InfoSection
        title="Why AI & SaaS Innovation Matters Now"
        description="The SaaS and AI revolution is reshaping every industry, but startups face intense pressure to move fast, validate ideas, and prove traction with limited resources."
        points={[
          "Limited engineering bandwidth and tech resources",
          "Difficulty finding product-market fit",
          "Complex architecture and scalability challenges",
          "High burn rates and investor pressure for fast MVPs",
        ]}
        quote="We don’t just build your product — we build your momentum."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our SaaS & AI Startup Development Services"
        services={[
          {
            title: "MVP Development",
            description: "Investor-ready MVPs in 8–12 weeks",
            value: "Faster validation, lower risk",
          },
          {
            title: "Product Discovery & Roadmapping",
            description: "Features, flows, and positioning",
            value: "Data-backed product blueprint",
          },
          {
            title: "Full-Stack Product Engineering",
            description: "Frontend, backend, and cloud",
            value: "Reliable, scalable SaaS product",
          },
          {
            title: "AI Integration & Automation",
            description: "ML, NLP, predictive intelligence",
            value: "Built-in differentiation",
          },
          {
            title: "CTO-as-a-Service",
            description: "Architecture and tech leadership",
            value: "Senior guidance without full-time cost",
          },
          {
            title: "DevOps & Cloud Infrastructure",
            description: "CI/CD, monitoring, autoscaling",
            value: "Zero-downtime reliability",
          },
          {
            title: "UI/UX Design & Product Branding",
            description: "Conversion-focused user experiences",
            value: "Higher adoption & retention",
          },
          {
            title: "GTM Enablement & Analytics",
            description: "Funnels, tracking, growth metrics",
            value: "Measurable growth from day one",
          },
        ]}
        ctaText="Get a Product Development Plan"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="Solutions We Build for Innovators"
        items={[
          { title: "SaaS Platforms (B2B / B2C)", icon: Layers },
          { title: "AI SaaS Products", icon: Brain },
          { title: "Data Platforms", icon: BarChart3 },
          { title: "Automation Tools", icon: Workflow },
          { title: "Generative AI Applications", icon: Cpu },
          { title: "Developer Platforms (APIs & SDKs)", icon: Cloud },
          { title: "Low-Code / No-Code Solutions", icon: Palette },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for SaaS & AI Development"
        features={[
          {
            title: "Startup-Focused DNA",
            description: "Lean, fast, founder-first delivery",
            icon: Rocket,
          },
          {
            title: "AI & SaaS Expertise",
            description: "20+ years in intelligent systems",
            icon: Brain,
          },
          {
            title: "End-to-End Engineering",
            description: "Strategy, UX, build, DevOps, GTM",
            icon: Layers,
          },
          {
            title: "Scalable Architecture",
            description: "Multi-tenant, modular SaaS systems",
            icon: Cloud,
          },
          {
            title: "Investor-Ready Products",
            description: "Built for funding and real users",
            icon: BarChart3,
          },
          {
            title: "Security & Privacy",
            description: "SOC 2, ISO 27001, GDPR",
            icon: Lock,
          },
        ]}
        footerQuote="We build the code, culture, and clarity startups need to grow faster."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — From Idea to Intelligent Product"
        steps={[
          {
            title: "Discovery & Strategy",
            description: "Define vision, audience, and KPIs",
          },
          {
            title: "UX/UI Design",
            description: "Wireframes and interactive prototypes",
          },
          {
            title: "Development & AI Integration",
            description: "Full-stack build with intelligence",
          },
          {
            title: "Testing & Optimization",
            description: "QA, A/B testing, feedback loops",
          },
          {
            title: "Launch & Growth Enablement",
            description: "Deployment, analytics, GTM tracking",
          },
        ]}
        duration="8–12 weeks for MVP; 20–24 weeks for full launch"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology Stack"
        items={[
          "Frontend: React, Vue, Angular, Next.js",
          "Backend: Node.js, Python, .NET Core, Java",
          "Mobile: Flutter, React Native, Swift, Kotlin",
          "Databases: PostgreSQL, MongoDB, Firebase",
          "Cloud & DevOps: AWS, Azure, GCP, Docker, Kubernetes",
          "AI/ML: TensorFlow, OpenAI API, LangChain, Hugging Face",
          "Data Tools: Snowflake, BigQuery, Airflow",
          "Security: SOC 2, ISO 27001, GDPR",
        ]}
      />

      {/* CASE STUDIES */}
      <CaseStudyGrid
        title="Use Cases & Case Studies"
        cases={[
          {
            title: "SaaS CRM Startup (US)",
            result: "$1.2M seed funding secured in 2 months",
          },
          {
            title: "AI Productivity Tool (India)",
            result: "60% task completion improvement",
          },
          {
            title: "Data Analytics Platform (UK)",
            result: "10× faster reporting; 40% infra cost reduction",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Key Challenges We Solve"
        left={[
          "Time-to-market pressure for MVPs",
          "Limited early-stage technical resources",
          "Product-market fit validation",
        ]}
        right={[
          "Complex multi-tenant SaaS architecture",
          "AI model integration challenges",
          "Security, compliance, and scalability",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "MVPs in 8–12 weeks",
          "AI-powered competitive edge",
          "Funding-ready architecture",
        ]}
        right={[
          "Flexible engagement models",
          "End-to-end startup partnership",
          "Risk-free delivery & IP protection",
        ]}
        quote="We build startups that scale — and technology that investors trust."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "ISO 27001, SOC 2, GDPR certified",
          "Secure cloud infrastructure",
          "Role-based access control (RBAC)",
        ]}
        right={[
          "Code review & vulnerability scanning",
          "NDA + full IP ownership",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "How fast can you build an MVP?",
            answer:
              "Typically 8–12 weeks, depending on scope and integrations.",
          },
          {
            question: "Can you help refine our product idea?",
            answer:
              "Yes. Discovery workshops define scope, roadmap, and GTM strategy.",
          },
          {
            question: "Do you provide CTO-as-a-Service?",
            answer:
              "Yes. We offer interim CTO leadership for early-stage startups.",
          },
          {
            question: "Are our ideas and IP protected?",
            answer:
              "Absolutely. NDA, IP transfer, and secure storage are standard.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Build the Next Breakthrough SaaS or AI Product"
        subtitle="Partner with Avaantra Global to turn your vision into a market-ready product — built for growth, scalability, and investor confidence."
        primaryCTA="Book a Free Strategy Session"
        secondaryCTA="Download Startup Solutions Deck"
        trustText="ISO 27001 Certified • GDPR Compliant • 22+ Years Experience • 300+ Startup Projects Delivered"
      />
    </>
  )
}
