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
  Megaphone,
  BarChart3,
  Users,
  Brain,
  LineChart,
  Share2,
  ShieldCheck,
  Cpu,
  Layers,
  Lock,
  Network,
} from "lucide-react"

export default function MarTechAdTechPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Empowering Marketers with Intelligent Technology"
        subtitle="From campaign automation to data-driven analytics, Avaantra Global builds MarTech and AdTech platforms that power smarter marketing, sharper insights, and scalable growth."
        primaryCTA="Book Free Consultation"
        secondaryCTA="Explore Case Studies"
      />

      {/* WHY MARTECH & ADTECH */}
      <InfoSection
        title="Why MarTech & AdTech Innovation Matters"
        description="Marketing today runs on data, but most teams struggle with disconnected tools, manual workflows, and incomplete insights. Advertisers also face rising complexity from multi-channel execution, privacy regulations, and AI disruption."
        points={[
          "Fragmented marketing tools and data silos",
          "Manual workflows slowing campaign execution",
          "Complex multi-channel advertising environments",
          "Increasing privacy and compliance requirements",
        ]}
        quote="We help you replace marketing chaos with clarity — and convert data into growth."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our MarTech & AdTech Development Services"
        services={[
          {
            title: "Marketing Automation Platforms",
            description: "Custom CRMs, workflows, and journey orchestration",
            value: "3× faster campaign execution",
          },
          {
            title: "Programmatic Ad Platforms",
            description: "DSPs, SSPs, and AI-based optimization engines",
            value: "Up to 40% reduction in ad spend waste",
          },
          {
            title: "Customer Data Platforms (CDP)",
            description: "Unified customer profiles across touchpoints",
            value: "360° audience visibility",
          },
          {
            title: "AI-Powered Campaign Analytics",
            description: "Predictive targeting and performance insights",
            value: "Data-backed decisions",
          },
          {
            title: "Attribution & ROI Tracking Systems",
            description: "Multi-touch attribution modeling",
            value: "Maximized marketing efficiency",
          },
          {
            title: "Social Media Management Tools",
            description: "Scheduling, engagement analytics, reporting",
            value: "Scalable audience engagement",
          },
          {
            title: "Ad Fraud Detection Software",
            description: "AI-driven invalid traffic detection",
            value: "Protected ad budgets",
          },
          {
            title: "MarTech Ecosystem Integration",
            description: "CRMs, ERPs, CMSs, and third-party tools",
            value: "Unified marketing stack",
          },
        ]}
        ctaText="Let’s Build Your Marketing Platform"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="MarTech & AdTech Solutions We Build"
        items={[
          { title: "MarTech Platforms", icon: Megaphone },
          { title: "AdTech Solutions", icon: Network },
          { title: "Customer Data Platforms (CDP)", icon: Users },
          { title: "Performance Analytics Tools", icon: BarChart3 },
          { title: "Marketing Intelligence Dashboards", icon: LineChart },
          { title: "AI Recommendation Engines", icon: Brain },
          { title: "Ad Network Integrations", icon: Share2 },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for MarTech & AdTech Development"
        features={[
          {
            title: "Deep Domain Knowledge",
            description: "22+ years in marketing and technology engineering",
            icon: ShieldCheck,
          },
          {
            title: "Full-Stack Development",
            description: "Backend architecture to analytics visualization",
            icon: Layers,
          },
          {
            title: "AI & Data Science Expertise",
            description: "Predictive targeting and ML models",
            icon: Cpu,
          },
          {
            title: "Seamless Integrations",
            description: "CRMs, ERPs, and ad platforms unified",
            icon: Network,
          },
          {
            title: "Performance-Driven Design",
            description: "Features aligned with measurable ROI",
            icon: LineChart,
          },
          {
            title: "Compliance-Ready Systems",
            description: "GDPR, CCPA, ISO 27001 aligned",
            icon: Lock,
          },
        ]}
        footerQuote="Where marketers see complexity, we see opportunity for automation."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — How We Build Marketing Intelligence Systems"
        steps={[
          {
            title: "Discovery & Ecosystem Audit",
            description: "Audit tools, data silos, performance gaps",
          },
          {
            title: "Architecture Design",
            description: "Plan integrations, APIs, automation flows",
          },
          {
            title: "Development & Integration",
            description: "Build workflows, dashboards, AI models",
          },
          {
            title: "Testing & Optimization",
            description: "QA, load testing, performance tuning",
          },
          {
            title: "Launch & Continuous Improvement",
            description: "Deploy with analytics and A/B testing",
          },
        ]}
        duration="10–14 weeks for MVP; 16–20 weeks for full product"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology & Marketing Stack"
        items={[
          "Frontend: React, Next.js, Vue",
          "Backend: Node.js, .NET Core, Python, Go",
          "Cloud: AWS, Azure, Google Cloud",
          "Databases: PostgreSQL, MongoDB, Snowflake",
          "Data & AI: TensorFlow, OpenAI API, LangChain, Power BI",
          "CRM & Automation: HubSpot, Salesforce, Marketo, ActiveCampaign",
          "AdTech: Google Ad Manager, The Trade Desk, Amazon DSP",
          "Compliance: GDPR, CCPA, ISO 27001",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Success Stories"
        cases={[
          {
            title: "Global AdTech Startup (US)",
            result: "37% less ad waste; 52% higher ROAS",
          },
          {
            title: "SaaS Marketing Platform (India)",
            result: "3× better segmentation; 28% higher campaign efficiency",
          },
          {
            title: "Media Agency (UAE)",
            result: "80% reduction in reporting time",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Key Challenges We Solve"
        left={[
          "Fragmented marketing data",
          "High customer acquisition costs",
          "Low campaign ROI",
        ]}
        right={[
          "Data privacy & compliance risks",
          "Lack of predictive insights",
          "Limited cross-channel automation",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "AI-driven campaign targeting and automation",
          "Unified customer data across touchpoints",
          "Predictive insights for spend optimization",
        ]}
        right={[
          "Compliance-ready marketing platforms",
          "Future-proof, scalable infrastructure",
        ]}
        quote="We build systems that make every marketing dollar measurable."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "GDPR, CCPA, ISO 27001 aligned systems",
          "Role-based data access controls",
          "Encrypted cloud infrastructure",
        ]}
        right={[
          "AI model transparency & explainability",
          "Automated compliance logging",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you build complete marketing platforms or modules?",
            answer: "Both. We build full ecosystems or standalone automation and analytics modules.",
          },
          {
            question: "Can you integrate our CRM with marketing tools?",
            answer: "Yes. We integrate Salesforce, HubSpot, Marketo, and more.",
          },
          {
            question: "Do you provide AI-powered targeting features?",
            answer: "Absolutely. We build custom ML models for personalization.",
          },
          {
            question: "Can you ensure GDPR and data privacy compliance?",
            answer: "Yes. Every solution is built with GDPR, CCPA, and ISO standards.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Build Technology That Powers Growth"
        subtitle="Partner with Avaantra Global to create marketing and advertising platforms that deliver automation, analytics, and measurable business outcomes."
        primaryCTA="Start Your MarTech Project"
        secondaryCTA="Download MarTech Capability Deck"
        trustText="GDPR Compliant • ISO 27001 Certified • 22+ Years Experience • Global Clients"
      />
    </>
  )
}
