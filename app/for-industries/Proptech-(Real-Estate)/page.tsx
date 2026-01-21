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
  Building2,
  Users,
  Home,
  Brain,
  Camera,
  Cpu,
  CreditCard,
  Blocks,
  MapPinned,
  ShieldCheck,
  Layers,
  Lock,
} from "lucide-react"

export default function PropTechPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Transforming Real Estate Through Technology & Intelligence"
        subtitle="Avaantra Global helps real estate companies, PropTech startups, and agencies digitize, automate, and scale — with property platforms, CRMs, and AI-driven insights that unlock growth and efficiency."
        primaryCTA="Book Free Consultation"
        secondaryCTA="Explore PropTech Case Studies"
      />

      {/* WHY PROPTECH */}
      <InfoSection
        title="Why PropTech Innovation Matters"
        description="Real estate is undergoing its biggest digital shift ever. From discovery and financing to management and maintenance, every part of the property lifecycle is being transformed by technology."
        points={[
          "Fragmented data across brokers, tenants, and properties",
          "Poor digital user experiences",
          "Manual property and tenant management",
          "Lack of analytics for pricing and investment decisions",
        ]}
        quote="Real estate runs on trust. We build the technology that earns it."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our PropTech Software Development Services"
        services={[
          {
            title: "Property Listing & Marketplace Development",
            description: "B2C and B2B platforms for buyers, sellers, and agents",
            value: "Streamlined discovery & lead conversion",
          },
          {
            title: "Real Estate CRM Solutions",
            description: "Centralized lead, sales, and relationship management",
            value: "Improved follow-ups & deal closures",
          },
          {
            title: "Property Management Software (PMS)",
            description: "Lease, rent, maintenance, and tenant automation",
            value: "40% faster issue resolution",
          },
          {
            title: "AI Valuation & Predictive Analytics",
            description: "ML-driven pricing and market forecasting",
            value: "Data-backed investment decisions",
          },
          {
            title: "AR/VR Property Experiences",
            description: "Virtual tours, 3D walkthroughs, staging",
            value: "Higher engagement & faster closures",
          },
          {
            title: "Smart Building & IoT Solutions",
            description: "Energy monitoring and predictive maintenance",
            value: "Lower operational costs",
          },
          {
            title: "Mortgage & FinTech Integration",
            description: "Loan, insurance, and payment APIs",
            value: "Faster approvals & secure transactions",
          },
          {
            title: "Blockchain in Real Estate",
            description: "Tokenization and smart contracts",
            value: "Transparent & secure ownership",
          },
        ]}
        ctaText="Let’s Build Your PropTech Platform"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="Real Estate Solutions We Build"
        items={[
          { title: "Property Marketplaces", icon: Home },
          { title: "Real Estate CRMs", icon: Users },
          { title: "Tenant Portals", icon: Building2 },
          { title: "Construction Management Systems", icon: Layers },
          { title: "Property Valuation Platforms", icon: Brain },
          { title: "IoT Smart Property Platforms", icon: Cpu },
          { title: "Blockchain-Driven Portals", icon: Blocks },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for PropTech Development"
        features={[
          {
            title: "PropTech Domain Expertise",
            description: "Residential, commercial, and B2B real estate",
            icon: ShieldCheck,
          },
          {
            title: "Full-Cycle Delivery",
            description: "Discovery to cloud deployment",
            icon: Layers,
          },
          {
            title: "AI-Powered Analytics",
            description: "Pricing prediction and demand forecasting",
            icon: Brain,
          },
          {
            title: "Data Security & Compliance",
            description: "GDPR, ISO 27001, blockchain transparency",
            icon: Lock,
          },
          {
            title: "Performance & Scalability",
            description: "Platforms handling millions of listings",
            icon: Cpu,
          },
          {
            title: "Cross-Platform Integrations",
            description: "CRM, ERP, and property APIs",
            icon: MapPinned,
          },
        ]}
        footerQuote="We help real estate companies scale faster — and smarter."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — From Idea to Intelligent Platform"
        steps={[
          {
            title: "Discovery & Strategy Mapping",
            description: "Audience, workflows, system needs",
          },
          {
            title: "Architecture & Design",
            description: "Scalable and intuitive platform design",
          },
          {
            title: "Development & API Integration",
            description: "Listings, CRM, IoT, AR/VR modules",
          },
          {
            title: "AI Enablement & Testing",
            description: "Analytics, chatbots, predictive tools",
          },
          {
            title: "Launch & Optimization",
            description: "Cloud deploy and continuous scaling",
          },
        ]}
        duration="10–14 weeks for MVP; 18–24 weeks for full rollout"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology Stack"
        items={[
          "Frontend: React, Angular, Vue",
          "Backend: Node.js, .NET Core, Java Spring, Python",
          "Cloud: AWS, Azure, Google Cloud",
          "Databases: PostgreSQL, MongoDB, MySQL",
          "AI & Analytics: TensorFlow, Power BI, OpenAI API, LangChain",
          "AR/VR: Unity, Unreal Engine, WebAR",
          "IoT: AWS IoT, Azure IoT Hub",
          "Blockchain: Solidity, Ethereum, Hyperledger",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Success Stories"
        cases={[
          {
            title: "Property Marketplace (UAE)",
            result: "48% more leads; 30% higher conversion rates",
          },
          {
            title: "Real Estate CRM (US)",
            result: "60% less admin work; 35% faster deal closures",
          },
          {
            title: "Smart Building Solution (India)",
            result: "25% energy savings; full data transparency",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Key Challenges We Solve"
        left={[
          "Disconnected property and CRM systems",
          "Inefficient lead & deal management",
          "Manual pricing and limited insights",
        ]}
        right={[
          "Scattered data across portals",
          "Security & transparency concerns",
          "No predictive analytics for demand",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "Automated property operations & sales",
          "AI-driven insights for pricing & demand",
          "Unified data across platforms",
        ]}
        right={[
          "Faster sales cycles & higher conversions",
          "Secure, compliance-first infrastructure",
        ]}
        quote="We build platforms that turn every property interaction into an experience."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "GDPR, ISO 27001, SOC 2 compliance",
          "Blockchain-backed transaction transparency",
          "Encrypted communication channels",
        ]}
        right={[
          "Role-based access & audit logs",
          "Cloud security by design",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you build real estate marketplaces from scratch?",
            answer: "Yes. We develop scalable listing platforms with advanced search and monetization.",
          },
          {
            question: "Can you integrate AR/VR into property platforms?",
            answer: "Absolutely. We build 3D tours, virtual staging, and immersive experiences.",
          },
          {
            question: "Do you support blockchain and tokenization?",
            answer: "Yes. We build smart contracts and tokenized ownership platforms.",
          },
          {
            question: "How long does it take to build a PropTech MVP?",
            answer: "8–12 weeks for MVP; 18–24 weeks for full-scale platforms.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Digitize, Automate, and Scale Your Real Estate Business"
        subtitle="Partner with Avaantra Global to build PropTech solutions that combine innovation, transparency, and intelligence — for buyers, agents, and investors alike."
        primaryCTA="Start Your Project"
        secondaryCTA="Download PropTech Solutions Deck"
        trustText="GDPR Compliant • ISO 27001 Certified • 150+ PropTech Projects • Global Delivery"
      />
    </>
  )
}
