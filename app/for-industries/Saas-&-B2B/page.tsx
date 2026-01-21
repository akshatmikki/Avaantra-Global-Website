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
  LayoutDashboard,
  Megaphone,
  Users,
  GraduationCap,
  CreditCard,
  HeartPulse,
  Brain,
  Boxes,
  ShieldCheck,
  Cpu,
  BarChart,
  Layers,
  Lock,
} from "lucide-react"

export default function SaaSPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="From Idea to Global SaaS — Build, Scale, and Monetize Faster"
        subtitle="Avaantra Global empowers founders, CTOs, and enterprises to build SaaS products that scale predictably — combining robust architecture, AI capabilities, and growth-ready design."
        primaryCTA="Start Your SaaS Project"
        secondaryCTA="View SaaS Case Studies"
      />

      {/* WHY SAAS */}
      <InfoSection
        title="Why SaaS Innovation Matters"
        description="Recurring revenue and cloud delivery are table stakes. The real challenge is building SaaS products that scale profitably, retain users, and align product execution with go-to-market strategy."
        points={[
          "Architectures that fail under real user load",
          "GTM execution lagging behind product delivery",
          "Churn outpacing acquisition",
        ]}
        quote="We don’t just build SaaS products — we build SaaS businesses that grow on autopilot."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our SaaS Development Services"
        services={[
          {
            title: "SaaS Product Strategy & Roadmap",
            description: "Vision, feature prioritization, and monetization planning",
            value: "Clear product-market fit",
          },
          {
            title: "MVP Development",
            description: "Investor-ready MVPs delivered fast",
            value: "8–10 week launch window",
          },
          {
            title: "Cloud-Native SaaS Development",
            description: "Multi-tenant, analytics-ready platforms",
            value: "Long-term scalability",
          },
          {
            title: "API Development & Integration",
            description: "CRMs, ERPs, and 3rd-party services",
            value: "Extended ecosystem",
          },
          {
            title: "Platform Modernization",
            description: "Legacy apps rebuilt for SaaS",
            value: "Lower maintenance cost",
          },
          {
            title: "AI-Powered SaaS Enhancements",
            description: "Automation, personalization, prediction",
            value: "Higher retention",
          },
          {
            title: "Growth & Performance Optimization",
            description: "CRO, analytics, A/B testing",
            value: "Improved LTV & conversions",
          },
        ]}
        ctaText="Discuss Your SaaS Vision"
      />

      {/* PLATFORMS */}
      <IconCardGrid
        title="SaaS & B2B Platforms We Build"
        items={[
          { title: "CRM & ERP SaaS", icon: LayoutDashboard },
          { title: "MarTech & AdTech SaaS", icon: Megaphone },
          { title: "HRTech Platforms", icon: Users },
          { title: "EdTech SaaS", icon: GraduationCap },
          { title: "FinTech SaaS", icon: CreditCard },
          { title: "HealthTech SaaS", icon: HeartPulse },
          { title: "AI SaaS Platforms", icon: Brain },
          { title: "Custom B2B SaaS", icon: Boxes },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra for SaaS Development"
        features={[
          { title: "MVPs in 8–10 Weeks", icon: Cpu },
          { title: "Scalable Multi-Tenant Architecture", icon: Layers },
          { title: "Data-Driven Decisions Built-In", icon: BarChart },
          { title: "Cross-Functional Expertise", icon: Users },
          { title: "Security-First Engineering", icon: Lock },
          { title: "Predictable Growth Framework", icon: ShieldCheck },
        ]}
        footerQuote="With Avaantra, your SaaS doesn’t just launch — it learns, grows, and scales."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Proven SaaS Development Process"
        steps={[
          { title: "Discovery & Validation", description: "User personas, features, KPIs" },
          { title: "Architecture Design", description: "Stack, databases, tenancy model" },
          { title: "MVP Build & Testing", description: "Rapid iteration and validation" },
          { title: "Launch & Scale", description: "Cloud deployment, billing, analytics" },
          { title: "Growth Optimization", description: "Retention, ARR, automation" },
        ]}
        duration="10–16 weeks for MVP to full SaaS rollout"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="SaaS Technology Stack"
        items={[
          "Frontend: React, Angular, Vue",
          "Backend: Node.js, .NET Core, Python, Java Spring",
          "Cloud: AWS, Azure, Google Cloud",
          "Databases: PostgreSQL, MongoDB, DynamoDB",
          "DevOps: Docker, Kubernetes, Jenkins, Terraform",
          "AI/ML: OpenAI, LangChain, Hugging Face, TensorFlow",
          "Billing & Analytics: Stripe, Chargebee, Mixpanel, Segment",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Success Stories"
        cases={[
          {
            title: "Workflow SaaS (US)",
            result: "1,200 paying users in 90 days; $400K pre-seed raised",
          },
          {
            title: "HRTech Platform (India)",
            result: "40% cost reduction; 99.9% uptime",
          },
          {
            title: "Marketing SaaS (UAE)",
            result: "30% MAU growth; churn reduced by 24%",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Industry Challenges We Solve"
        left={[
          "Slow MVP launch cycles",
          "Complex multi-tenancy requirements",
          "Security & data privacy gaps",
        ]}
        right={[
          "High infrastructure costs",
          "Churn & retention issues",
          "Scaling beyond 10K+ users",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "Faster go-to-market — MVPs in 8–10 weeks",
          "Cost-optimized delivery model",
          "AI-augmented SaaS functionality",
        ]}
        right={[
          "Enterprise-grade security & compliance",
          "Architecture built for predictable ARR growth",
        ]}
        quote="SaaS success is not luck — it’s architecture, analytics, and agility."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security"
        left={[
          "SOC 2 & ISO 27001 aligned systems",
          "GDPR & CCPA data protection",
          "Secure multi-tenancy",
        ]}
        right={[
          "24/7 monitoring & penetration testing",
          "Encrypted billing & authentication",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you only build SaaS from scratch?",
            answer: "No. We modernize existing platforms and migrate on-premise systems to the cloud.",
          },
          {
            question: "How do you ensure SaaS scalability?",
            answer: "Microservices, Kubernetes orchestration, and load balancing.",
          },
          {
            question: "Can you help with SaaS GTM strategy?",
            answer: "Yes. We align engineering with growth and acquisition strategy.",
          },
          {
            question: "What’s your SaaS development timeline?",
            answer: "8–10 weeks for MVP, 14–20 weeks for enterprise rollout.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Turn Your SaaS Vision Into a Scalable Product"
        subtitle="Partner with Avaantra Global to design, engineer, and grow SaaS platforms that are fast, secure, and profitable."
        primaryCTA="Start Your SaaS Project"
        secondaryCTA="Download SaaS Case Study Deck"
        trustText="SOC 2 Certified • 22+ Years • 100+ SaaS Launches • Global Delivery"
      />
    </>
  )
}
