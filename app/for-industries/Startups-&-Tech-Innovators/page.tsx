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
        description="The SaaS and AI revolution is reshaping every industry — from productivity and marketing to healthcare and fintech. But startups face a tough road. That’s where Avaantra Global steps in, not just as a vendor, but as a technology co-founder helping founders turn innovation into traction."
        points={[
          "Limited tech bandwidth and engineering resources",
          "Difficulty finding the right product–market fit",
          "Complex architecture and scalability challenges",
          "High burn rates and pressure to deliver investor-ready MVPs fast",
        ]}
        quote="We don’t just build your product — we build your momentum."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our SaaS & AI Startup Development Services"
        subheading="We help SaaS founders and AI innovators build the right product, the right way — from early idea validation to post-launch scaling."
        services={[
          {
            title: "MVP Development",
            description: "Launch investor-ready MVPs in 8–12 weeks with core functionality",
            value: "Faster validation, lower risk",
          },
          {
            title: "Product Discovery & Roadmapping",
            description: "Identify features, user flows, and market positioning",
            value: "Data-backed product blueprint",
          },
          {
            title: "Full-Stack Product Engineering",
            description: "Frontend, backend, and cloud architecture built for scale",
            value: "Reliable and performant product",
          },
          {
            title: "AI Integration & Automation",
            description: "Add ML, NLP, or predictive capabilities to your SaaS",
            value: "Differentiation through intelligence",
          },
          {
            title: "CTO-as-a-Service",
            description: "Strategic leadership for architecture and tech decisions",
            value: "Expert guidance without full-time cost",
          },
          {
            title: "DevOps & Cloud Infrastructure",
            description: "Continuous delivery, CI/CD, and automated scaling",
            value: "Resilient infrastructure, zero downtime",
          },
          {
            title: "UI/UX Design & Product Branding",
            description: "Design human-centered, conversion-optimized interfaces",
            value: "Higher adoption and engagement",
          },
          {
            title: "GTM Enablement & Analytics",
            description: "Integrate tracking, funnels, and marketing automation",
            value: "Measurable growth from day one",
          },
        ]}
        ctaText="Get a Product Development Plan"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="Solutions We Build for Innovators"
        items={[
          {
            title: "SaaS Platforms (B2B / B2C)",
            description: "Productivity, marketing, HR, and finance tools",
            icon: Layers,
          },
          {
            title: "AI SaaS Products",
            description: "Chatbots, analytics, automation, personalization engines",
            icon: Brain,
          },
          {
            title: "Data Platforms",
            description: "BI dashboards, reporting, and data integration layers",
            icon: BarChart3,
          },
          {
            title: "Automation Tools",
            description: "RPA and workflow optimization for startups",
            icon: Workflow,
          },
          {
            title: "Generative AI Applications",
            description: "Content creation, recommendation, summarization systems",
            icon: Cpu,
          },
          {
            title: "Developer Platforms (APIs & SDKs)",
            description: "Cloud APIs and developer ecosystems",
            icon: Cloud,
          },
          {
            title: "Low-Code / No-Code Solutions",
            description: "Rapid prototyping and MVP validation",
            icon: Palette,
          },
        ]}
        footerQuote="Every SaaS success starts with a clear product vision — and world-class execution."
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for SaaS & AI Development"
        subheading="We’ve helped dozens of startups go from zero to funding, from MVP to product-market fit, and from pilot users to global scale."
        features={[
          {
            title: "Startup-Focused DNA",
            description: "Lean, fast, founder-first delivery model",
            icon: Rocket,
          },
          {
            title: "AI & SaaS Expertise",
            description: "20+ years in full-stack and intelligent systems",
            icon: Brain,
          },
          {
            title: "End-to-End Engineering",
            description: "Strategy, UX, build, DevOps, GTM support",
            icon: Layers,
          },
          {
            title: "Scalable Architecture",
            description: "Multi-tenant, modular SaaS systems",
            icon: Cloud,
          },
          {
            title: "Investor-Ready Products",
            description: "Built for growth, funding and real users",
            icon: BarChart3,
          },
          {
            title: "Security & Privacy",
            description: "SOC 2, ISO 27001, GDPR standards",
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
            description:
              "Define product vision, target audience, and KPIs, resulting in a clear product roadmap and MVP plan.",
          },
          {
            title: "UX/UI Design",
            description:
              "Create wireframes and user journeys, delivering interactive design prototypes for validation.",
          },
          {
            title: "Development & AI Integration",
            description:
              "Full-stack development combined with AI model implementation to produce a working MVP or alpha product.",
          },
          {
            title: "Testing & Optimization",
            description:
              "Rigorous QA, A/B testing, and user feedback loops to deliver a market-ready product.",
          },
          {
            title: "Launch & Growth Enablement",
            description:
              "Production deployment with analytics, GTM tracking, and growth tooling for a scalable SaaS platform.",
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
            result:
              "Built a full-stack CRM MVP with custom analytics to meet a 10-week investor deadline, helping the startup secure $1.2M in seed funding within 2 months of launch.",
          },
          {
            title: "AI Productivity Tool (India)",
            result:
              "Implemented an NLP-based assistant with OpenAI integration, improving task completion by 60% and increasing user retention by 35%.",
          },
          {
            title: "Data Analytics Platform (UK)",
            result:
              "Designed a serverless AWS data lake with Power BI integration, enabling 10× faster reporting and reducing infrastructure costs by 40%.",
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
            question: "How fast can you build an MVP for our startup?",
            answer:
              "We typically deliver MVPs in 8–12 weeks, depending on scope and integrations.",
          },
          {
            question: "Can you help refine our product idea?",
            answer:
              "Yes — our discovery workshops help define MVP scope, roadmap, and go-to-market strategy.",
          },
          {
            question: "Do you provide CTO-as-a-Service?",
            answer:
              "Yes — we offer interim CTO services for startups that need technical direction and leadership.",
          },
          {
            question: "Can you integrate AI models into existing SaaS products?",
            answer:
              "Absolutely — from OpenAI APIs to custom machine learning model deployment.",
          },
          {
            question: "Do you offer funding or investor readiness support?",
            answer:
              "Yes — we help with investor decks, product demos, and pitch-ready technical collateral.",
          },
          {
            question: "Do you support multi-tenant SaaS architecture?",
            answer:
              "Yes — all our SaaS systems are designed for scalability and multi-tenancy.",
          },
          {
            question: "Do you provide post-launch product maintenance?",
            answer:
              "Yes — ongoing support, analytics, performance optimization, and feature evolution are included.",
          },
          {
            question: "Are our ideas and data protected?",
            answer:
              "Yes — strict NDAs, IP transfer agreements, and secure data storage are standard for all projects.",
          },
          {
            question: "Do you work with global startups?",
            answer:
              "Yes — we work with startups across the US, UK, EU, MENA, and APAC regions.",
          },
          {
            question: "Can you integrate billing, payments, or CRM systems?",
            answer:
              "Yes — we integrate Stripe, Razorpay, HubSpot, Salesforce, and other major platforms.",
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
