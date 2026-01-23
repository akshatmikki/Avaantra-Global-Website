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
        subtitle="Build future-ready FinTech products — secure, scalable, and compliant.
 From payments to wealth management, Avaantra Global helps you launch digital financial platforms that customers love and regulators trust."
        primaryCTA="Request Free Consultation"
        secondaryCTA="See FinTech Case Studies"
      />

      {/* WHY FINTECH */}
      <InfoSection
        title="Why FinTech Innovation Matters"
        description="The financial industry is being redefined by technology. From AI-driven credit scoring and blockchain-based payments to open banking ecosystems, innovation isn’t optional — it’s the cost of survival. But innovation in finance comes with complexity. This is where Avaantra Global bridges innovation with compliance, helping FinTech companies build solutions that are trusted, transparent, and future-proof."
        points={[
          "Constantly evolving regulatory frameworks (KYC, AML, PCI-DSS, PSD2)",
          "Rising security risks and frequent compliance audits",
          "User expectations for instant, mobile-first financial experiences",
        ]}
        quote="In FinTech, trust isn’t earned through marketing — it’s engineered through code."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our FinTech Development Services"
        subheading="We deliver full-cycle FinTech software development — from concept to launch, backed by 22+ years of cross-industry experience."
        services={[
          {
            title: "Digital Banking Solutions",
            description:
              "Neo-banks, core banking systems, and wallet platforms",
            value: "Launch faster with audit-ready systems",
          },
          {
            title: "Payment Gateway Development",
            description: "PCI-DSS compliant gateways and orchestration",
            value: "Secure global transactions, seamless UX",
          },
          {
            title: "Lending & Credit Platforms",
            description: "Loan origination, underwriting, AI scoring",
            value: "Reduce loan processing time by up to 70%",
          },
          {
            title: "WealthTech Platforms",
            description: "Robo-advisory and investment analytics",
            value: "Empower investors with real-time insights",
          },
          {
            title: "RegTech & Compliance Automation",
            description: "AI-driven KYC/AML and reporting",
            value: "Simplified audits, ensure regulatory alignment",
          },
          {
            title: "InsurTech Solutions",
            description: "Claims automation, policy management, and AI fraud detection",
            value: "Lower operational cost, improve claim accuracy",
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
          { title: "Banking Solutions", icon: Landmark },
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
        subheading="We understand FinTech not just as developers — but as engineers of trust."
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
        title="Our Process — How We Build Future-Ready FinTech Platforms"
        steps={[
          {
            title: "Discovery & Compliance Mapping",
            description:
              "Identify business goals, regulatory requirements, and ecosystem integrations with an AI-driven feasibility and compliance matrix.",
          },
          {
            title: "Architecture & Design",
            description:
              "Design scalable, secure software architecture with built-in regulatory alignment and future-readiness.",
          },
          {
            title: "Agile Development & Integration",
            description:
              "Iterative sprint-based development with full transparency and biweekly delivery of working modules.",
          },
          {
            title: "Testing & Audit Simulation",
            description:
              "Comprehensive QA, penetration testing, and audit-like simulations for security and performance validation.",
          },
          {
            title: "Deployment & Ongoing Support",
            description:
              "Cloud deployment, DevOps automation, and continuous compliance monitoring for long-term stability.",
          },
        ]}
        duration="12–24 weeks (depending on scale)"
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
              "Automated AI-based loan scoring with integrated KYC/AML reduced approval time from 48 hours to 5 hours, achieving 98% compliance accuracy.",
          },
          {
            title: "Payment Gateway Modernization (UK)",
            result:
              "Rebuilt payment orchestration with multi-currency and PSD2 readiness, resulting in 100% PCI-DSS audit pass and 32% faster transaction processing.",
          },
          {
            title: "WealthTech App (India)",
            result:
              "AI-powered robo-advisory enabled scalable investment guidance, driving 40% higher user engagement and 28% increase in revenue per customer.",
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
              "Both — we build end-to-end products or modernize legacy systems into compliant, cloud-native platforms.",
          },
          {
            question: "Are your systems PCI-DSS and PSD2 compliant?",
            answer:
              "Yes. Every FinTech project is designed with full PCI-DSS, PSD2, and AML compliance.",
          },
          {
            question: "How long does it take to launch a FinTech MVP?",
            answer:
              "Typically 8–12 weeks, depending on complexity and integrations.",
          },
          {
            question: "Can you integrate with core banking or third-party APIs?",
            answer:
              "Yes — we work with Plaid, Mambu, Stripe, Temenos, and other leading APIs.",
          },
          {
            question: "Do you handle KYC/AML automation?",
            answer:
              "Absolutely. We build AI-driven KYC and AML workflows that comply with FATF and EU standards.",
          },
          {
            question: "What makes Avaantra different from other FinTech developers?",
            answer:
              "We combine deep regulatory understanding with AI-led engineering and global delivery experience.",
          },
          {
            question: "Can you help with app security audits?",
            answer:
              "Yes — our DevSecOps team ensures continuous penetration testing and compliance audit readiness.",
          },
          {
            question: "Do you provide post-launch maintenance?",
            answer:
              "Yes. Continuous monitoring, updates, and compliance maintenance are included.",
          },
          {
            question: "How do you ensure customer data privacy?",
            answer:
              "Through encrypted data handling, anonymization, and secure access layers across all systems.",
          },
          {
            question: "Can you help startups with investor-ready MVPs?",
            answer:
              "Yes — we specialize in investor-grade MVPs with full technical documentation and compliance proof.",
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
