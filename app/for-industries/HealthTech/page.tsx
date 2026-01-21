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
  Stethoscope,
  Hospital,
  Brain,
  HeartPulse,
  FlaskConical,
  FileCheck2,
  Watch,
  ShieldCheck,
  Cpu,
  Layers,
  Lock,
  Users,
} from "lucide-react"

export default function HealthTechPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Engineering the Future of Digital Healthcare"
        subtitle="Build HIPAA-compliant, patient-centric healthcare platforms that enhance care delivery, streamline operations, and drive measurable impact — from telehealth to AI diagnostics."
        primaryCTA="Book Free Consultation"
        secondaryCTA="Explore HealthTech Case Studies"
      />

      {/* WHY HEALTHTECH */}
      <InfoSection
        title="Why HealthTech Innovation Matters"
        description="Healthcare is evolving from treatment to transformation. Digital-first, data-driven, and patient-powered systems are redefining how care is delivered — but only when built with compliance and interoperability at the core."
        points={[
          "Strict compliance requirements (HIPAA, HL7, GDPR)",
          "Fragmented data systems and legacy EHRs",
          "Growing need for interoperability",
          "Pressure for personalized care and cost efficiency",
        ]}
        quote="In healthcare, technology isn’t just about efficiency — it’s about empathy built into design."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our HealthTech Development Services"
        services={[
          {
            title: "Telemedicine Platforms",
            description: "Secure video consultations, scheduling, and e-prescriptions",
            value: "Seamless patient–doctor connectivity",
          },
          {
            title: "EHR / EMR Systems",
            description: "HIPAA-compliant digital record management",
            value: "Reduced paperwork, faster care",
          },
          {
            title: "AI Diagnostics & Predictive Analytics",
            description: "Machine learning for diagnosis and risk assessment",
            value: "Faster, more accurate insights",
          },
          {
            title: "Patient Engagement Apps",
            description: "Mobile apps for tracking, feedback, and wellness",
            value: "Improved adherence & satisfaction",
          },
          {
            title: "Healthcare CRM & Portals",
            description: "Unified data access for providers and patients",
            value: "Enhanced collaboration",
          },
          {
            title: "Medical Device Integration",
            description: "IoT-enabled device connectivity",
            value: "Continuous real-time monitoring",
          },
          {
            title: "PharmaTech Solutions",
            description: "Clinical trial management and supply chain automation",
            value: "Streamlined research & compliance",
          },
        ]}
        ctaText="Discuss Your HealthTech Idea"
      />

      {/* TYPES */}
      <IconCardGrid
        title="Types of Healthcare Software We Build"
        items={[
          { title: "Telehealth Solutions", icon: Stethoscope },
          { title: "Hospital Management Systems (HMS)", icon: Hospital },
          { title: "AI Diagnostic Platforms", icon: Brain },
          { title: "Health & Wellness Apps", icon: HeartPulse },
          { title: "Clinical Research Tools", icon: FlaskConical },
          { title: "Insurance & Claims Systems", icon: FileCheck2 },
          { title: "Wearable & IoT Integrations", icon: Watch },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for HealthTech"
        features={[
          {
            title: "Healthcare Domain Expertise",
            description: "10+ years building compliant MedTech & SaaS platforms",
            icon: ShieldCheck,
          },
          {
            title: "Regulatory-Ready Development",
            description: "HIPAA, HL7, FHIR, GDPR, ISO-aligned workflows",
            icon: Lock,
          },
          {
            title: "AI-Enabled Healthcare",
            description: "Predictive diagnosis & intelligent automation",
            icon: Cpu,
          },
          {
            title: "End-to-End Delivery",
            description: "Idea → prototype → full-scale deployment",
            icon: Layers,
          },
          {
            title: "Interoperability Experts",
            description: "Epic, Cerner, Allscripts integrations",
            icon: Users,
          },
          {
            title: "Patient-Centered Design",
            description: "UX focused on satisfaction and outcomes",
            icon: HeartPulse,
          },
        ]}
        footerQuote="We make healthcare software that’s both compliant and compassionate."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — How We Build Healthcare Software"
        steps={[
          {
            title: "Discovery & Compliance Review",
            description: "Care models, compliance boundaries, data flow",
          },
          {
            title: "Architecture Design",
            description: "Scalable systems with interoperability layers",
          },
          {
            title: "Agile Development & Testing",
            description: "HIPAA-secured feature development",
          },
          {
            title: "Integration & Deployment",
            description: "APIs, devices, and EHR integrations",
          },
          {
            title: "Support & Optimization",
            description: "Updates, security patches, compliance monitoring",
          },
        ]}
        duration="12–16 weeks for MVP; 20–24 weeks for enterprise rollout"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="HealthTech Technology Stack"
        items={[
          "Frontend: React, Vue, Flutter, Swift",
          "Backend: .NET, Node.js, Python, Java Spring",
          "Cloud: AWS HealthLake, Azure Health Data Services, GCP",
          "AI & ML: TensorFlow, PyTorch, LangChain, OpenAI API",
          "Data Standards: HL7, FHIR, DICOM",
          "Security: HIPAA, SOC 2, ISO 27001, AES-256",
          "Interoperability: Epic, Cerner, Allscripts, Apple HealthKit, Fitbit",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Case Studies"
        cases={[
          {
            title: "Telemedicine Platform (UAE)",
            result: "2M consultations in 6 months with 99.9% uptime",
          },
          {
            title: "AI Diagnostic Startup (US)",
            result: "80% reduction in radiology report turnaround time",
          },
          {
            title: "Hospital Chain (India)",
            result: "Unified EHR across 15+ hospitals",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Industry Challenges We Solve"
        left={[
          "Regulatory and compliance complexity",
          "Data silos & poor interoperability",
          "Lack of AI adoption in diagnostics",
        ]}
        right={[
          "Limited patient engagement tools",
          "Legacy infrastructure modernization",
          "High maintenance costs for on-prem systems",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra"
        left={[
          "Faster go-to-market — MVPs in 10–12 weeks",
          "Patient-first UX design",
          "Guaranteed compliance readiness",
        ]}
        right={[
          "AI-augmented healthcare intelligence",
          "Cross-platform scalability (web, iOS, Android)",
        ]}
        quote="We build software that saves lives — and time."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "HIPAA, GDPR, and HL7 compliant architecture",
          "Role-based access & encrypted communication",
          "Secure cloud hosting (AWS, Azure Health)",
        ]}
        right={[
          "Regular penetration testing",
          "AI ethics & data privacy by design",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you build HIPAA-compliant applications?",
            answer: "Yes. Every HealthTech solution follows HIPAA, HL7, and GDPR standards.",
          },
          {
            question: "Can you integrate with existing hospital systems?",
            answer: "Absolutely. We integrate with Epic, Cerner, and other major EHRs.",
          },
          {
            question: "Do you handle AI diagnostics?",
            answer: "Yes. We build ML models for radiology, pathology, and predictive health.",
          },
          {
            question: "How fast can we launch an MVP?",
            answer: "In as little as 10–12 weeks with security validation.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Build Healthcare Software That Heals Smarter"
        subtitle="Partner with Avaantra Global to develop secure, compliant, and patient-focused HealthTech platforms that drive digital transformation."
        primaryCTA="Schedule Consultation"
        secondaryCTA="Download HealthTech Brochure"
        trustText="HIPAA Compliant • ISO 27001 Certified • 100+ HealthTech Projects • Global Clients"
      />
    </>
  )
}
