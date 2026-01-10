import { HeroSection } from "@/components/sections/IndustryStyling/Hero";
import { InfoSection } from "@/components/sections/IndustryStyling/InfoSection";
import { ServiceGrid } from "@/components/sections/IndustryStyling/ServiceGrid";
import { IconCardGrid } from "@/components/sections/IndustryStyling/IconCardGrid";
import { FeatureGrid } from "@/components/sections/IndustryStyling/FeatureGrid";
import { ProcessSteps } from "@/components/sections/IndustryStyling/ProcessSteps";
import { TechStackGrid } from "@/components/sections/IndustryStyling/TechStackGrid";
import { CaseStudyGrid } from "@/components/sections/IndustryStyling/CaseStudyGrid";
import { SplitListSection } from "@/components/sections/IndustryStyling/SplitListSection";
import { ComplianceList } from "@/components/sections/IndustryStyling/ComplianceList";
import { FAQGrid } from "@/components/sections/IndustryStyling/FAQGrid";
import { FinalCTA } from "@/components/sections/IndustryStyling/FinalCTA";

import {
  CreditCard,
  Landmark,
  Wallet,
  LineChart,
  FileSearch,
  Shield,
  Blocks,
  Puzzle,
  ShieldCheck,
  Lock,
  Cpu,
  Layers,
} from "lucide-react";

export default function FinTechPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Engineering Trust, Compliance & Innovation in FinTech"
        subtitle="Build secure, scalable, and compliant FinTech platforms customers trust and regulators approve."
        primaryCTA="Request Free Consultation"
        secondaryCTA="See FinTech Case Studies"
      />

      {/* WHY FINTECH */}
      <InfoSection
        title="Why FinTech Innovation Matters"
        description="Innovation in finance is no longer optional. AI-driven credit scoring, blockchain payments, and open banking ecosystems are redefining how financial products are built and consumed."
        points={[
          "Evolving regulatory frameworks (KYC, AML, PCI-DSS, PSD2)",
          "Growing security threats and compliance audits",
          "Rising demand for instant, mobile-first experiences",
        ]}
        quote="In FinTech, trust isn’t earned through marketing — it’s engineered through code."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our FinTech Development Services"
        services={[
          {
            title: "Digital Banking Solutions",
            description:
              "Neo-banks, core banking systems, and wallet platforms",
            value: "Audit-ready, scalable systems",
          },
          {
            title: "Payment Gateway Development",
            description: "PCI-DSS compliant gateways and orchestration",
            value: "Secure global transactions",
          },
          {
            title: "Lending & Credit Platforms",
            description: "Loan origination, underwriting, AI scoring",
            value: "Up to 70% faster processing",
          },
          {
            title: "WealthTech Platforms",
            description: "Robo-advisory and investment analytics",
            value: "Real-time insights",
          },
          {
            title: "RegTech & Compliance Automation",
            description: "AI-driven KYC/AML and reporting",
            value: "Simplified audits",
          },
          {
            title: "Blockchain & Digital Assets",
            description: "Wallets, tokenization, smart contracts",
            value: "Transparent finance ecosystems",
          },
        ]}
        ctaText="Discuss Your FinTech Project"
      />

      {/* TYPES */}
      <IconCardGrid
        title="Types of FinTech Software We Build"
        items={[
          { title: "Payments & Transfers", icon: CreditCard },
          { title: "Digital & Open Banking", icon: Landmark },
          { title: "Lending & BNPL", icon: Wallet },
          { title: "WealthTech", icon: LineChart },
          { title: "RegTech", icon: FileSearch },
          { title: "InsurTech", icon: Shield },
          { title: "Blockchain & Digital Assets", icon: Blocks },
          { title: "Embedded Finance", icon: Puzzle },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global"
        features={[
          { title: "20+ Years Domain Expertise", icon: ShieldCheck },
          { title: "Compliance-First Engineering", icon: Lock },
          { title: "MVPs in 10–12 Weeks", icon: Cpu },
          { title: "Zero-Compromise Security", icon: Shield },
          { title: "Global Delivery Experience", icon: Layers },
          { title: "Full-Cycle Ownership", icon: Blocks },
        ]}
        footerQuote="We build FinTech systems that pass audits — and win users."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our FinTech Delivery Process"
        steps={[
          {
            title: "Discovery & Compliance",
            description: "Business goals and regulatory mapping",
          },
          {
            title: "Architecture & Design",
            description: "Scalable, compliant blueprint",
          },
          {
            title: "Agile Development",
            description: "Bi-weekly feature delivery",
          },
          {
            title: "Testing & Audit Simulation",
            description: "Pen tests and QA",
          },
          {
            title: "Deployment & Support",
            description: "Cloud, DevOps, monitoring",
          },
        ]}
        duration="12–24 weeks"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology & Compliance Stack"
        items={[
          "Frontend: React, Angular, Vue",
          "Backend: Node.js, Python, Java, .NET",
          "Databases: PostgreSQL, MongoDB, MySQL",
          "Cloud: AWS, Azure, Google Cloud",
          "Security: PCI-DSS, SOC 2, ISO 27001, GDPR",
          "FinTech APIs: Plaid, Stripe, Razorpay, Temenos",
          "Blockchain: Solidity, Ethereum, Hyperledger",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Success Stories"
        cases={[
          {
            title: "Digital Lending Platform (UAE)",
            result:
              "Loan approvals reduced from 48 hours to 5 hours with 98% compliance accuracy",
          },
          {
            title: "Payment Gateway Modernization (UK)",
            result: "100% PCI audit pass and 32% faster transaction processing",
          },
          {
            title: "WealthTech App (India)",
            result: "40% engagement increase and 28% higher revenue per user",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Industry Challenges We Solve"
        left={[
          "Compliance complexity (PCI-DSS, AML, KYC, GDPR)",
          "High integration cost for payment APIs",
          "Long product release cycles",
        ]}
        right={[
          "Risk of regulatory non-compliance",
          "Legacy dependencies & low automation",
          "Data privacy & AI transparency gaps",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "Accelerated Time-to-Market — launch in 10–12 weeks",
          "Regulatory Peace of Mind — compliance by design",
          "Cost Efficiency — global delivery with predictable pricing",
        ]}
        right={[
          "AI-Enhanced Innovation — automation, scoring, personalization",
          "Scalable for Growth — modular architecture and cloud readiness",
        ]}
        quote="Compliance shouldn’t slow innovation — it should power it."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Focus"
        left={[
          "PCI-DSS Certified Development Environment",
          "SOC 2 Type II & ISO 27001 aligned practices",
          "GDPR & CCPA compliant data handling",
        ]}
        right={[
          "Automated audit logs & role-based access",
          "Penetration testing & vulnerability scans",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question:
              "Do you build FinTech software from scratch or customize existing systems?",
            answer:
              "Both. We build end-to-end platforms or modernize legacy systems into cloud-native solutions.",
          },
          {
            question: "Are your systems PCI-DSS and PSD2 compliant?",
            answer:
              "Yes. Compliance is built into every FinTech solution we deliver.",
          },
          {
            question: "How long does it take to launch a FinTech MVP?",
            answer: "Typically 8–12 weeks depending on complexity.",
          },
          {
            question: "Do you provide post-launch maintenance?",
            answer:
              "Yes. Continuous monitoring, updates, and compliance support are included.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Redefine the Future of Financial Technology"
        subtitle="Partner with Avaantra Global to build FinTech platforms that combine innovation, compliance, and performance."
        primaryCTA="Schedule Consultation"
        secondaryCTA="Download FinTech Capability Deck"
        trustText="PCI-DSS Certified • 22+ Years • 150+ FinTech Projects • Global Clients"
      />
    </>
  );
}
