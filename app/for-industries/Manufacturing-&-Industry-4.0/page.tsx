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
  Factory,
  Cpu,
  Network,
  Wrench,
  Truck,
  Boxes,
  LineChart,
  ShieldCheck,
  Layers,
  Lock,
  BarChart3,
} from "lucide-react"

export default function ManufacturingPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Smart Manufacturing Starts with Smart Software"
        subtitle="Reimagine your factory floor with automation, AI, and real-time analytics. Avaantra Global helps manufacturers build scalable, connected, and efficient Industry 4.0 systems that drive productivity and precision."
        primaryCTA="Request Free Consultation"
        secondaryCTA="View Case Studies"
      />

      {/* WHY MANUFACTURING TRANSFORMATION */}
      <InfoSection
        title="Why Manufacturing Needs Digital Transformation"
        description="Manufacturing today is driven by data, not just machines. Yet many factories still operate with disconnected systems, manual processes, and limited visibility."
        points={[
          "Disconnected legacy systems that don’t communicate",
          "Manual workflows causing inefficiency and delays",
          "Unpredictable downtime due to lack of predictive insights",
          "Rising costs from energy waste and human errors",
        ]}
        quote="The future of manufacturing isn’t more manpower — it’s more intelligence per machine."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our Manufacturing Software Development Services"
        services={[
          {
            title: "Smart Factory Automation",
            description: "Robotics integration and ML-based optimization",
            value: "Lower downtime, higher productivity",
          },
          {
            title: "Manufacturing Execution Systems (MES)",
            description: "Track production, materials, and quality",
            value: "End-to-end visibility & traceability",
          },
          {
            title: "IoT & Edge Connectivity Solutions",
            description: "Connect sensors, PLCs, and devices",
            value: "Real-time monitoring & forecasting",
          },
          {
            title: "Predictive Maintenance Platforms",
            description: "AI-driven equipment failure prediction",
            value: "30–50% reduction in unplanned downtime",
          },
          {
            title: "Supply Chain & ERP Integration",
            description: "Automated workflows with ERP connectivity",
            value: "Optimized inventory & logistics",
          },
          {
            title: "Digital Twin Development",
            description: "Simulated production systems for optimization",
            value: "Data-backed planning & testing",
          },
          {
            title: "AI-Powered Analytics Dashboards",
            description: "KPIs, energy usage, machine performance",
            value: "Actionable intelligence for teams",
          },
          {
            title: "Cloud Migration & Modernization",
            description: "Legacy manufacturing systems to cloud",
            value: "Lower IT cost & better collaboration",
          },
        ]}
        ctaText="Let’s Build Your Smart Factory"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="Manufacturing Solutions We Build"
        items={[
          { title: "Smart Factories", icon: Factory },
          { title: "Industrial IoT Platforms", icon: Network },
          { title: "ERP & MES Systems", icon: Layers },
          { title: "Quality Management Systems (QMS)", icon: ShieldCheck },
          { title: "Predictive Maintenance Tools", icon: Wrench },
          { title: "Supply Chain Automation", icon: Truck },
          { title: "Energy Optimization Systems", icon: LineChart },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for Manufacturing Transformation"
        features={[
          {
            title: "End-to-End Industry 4.0 Implementation",
            description: "IoT → AI → Cloud → Automation",
            icon: Cpu,
          },
          {
            title: "Cross-Disciplinary Expertise",
            description: "Software, data, and industrial engineering",
            icon: Layers,
          },
          {
            title: "Enterprise-Grade Security",
            description: "ISO 27001, SOC 2, GDPR, OT cybersecurity",
            icon: Lock,
          },
          {
            title: "Real-Time Visibility",
            description: "Live analytics for smarter production",
            icon: BarChart3,
          },
          {
            title: "Custom Integrations",
            description: "SAP, Oracle, Siemens, Rockwell, Honeywell",
            icon: Network,
          },
          {
            title: "Global Delivery Model",
            description: "Scalable delivery with rapid support",
            icon: ShieldCheck,
          },
        ]}
        footerQuote="We don’t digitize factories — we re-engineer how they think and operate."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — How We Build Smart Manufacturing Solutions"
        steps={[
          {
            title: "Discovery & Factory Mapping",
            description: "Assess systems, workflows, improvement areas",
          },
          {
            title: "System Architecture & Design",
            description: "IoT-ready, scalable software blueprint",
          },
          {
            title: "Implementation & Integration",
            description: "Connect devices, MES, ERP systems",
          },
          {
            title: "AI Enablement & Automation",
            description: "Predictive analytics and robotics",
          },
          {
            title: "Deployment & Optimization",
            description: "Cloud deployment and monitoring",
          },
        ]}
        duration="12–20 weeks for implementation"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology Stack"
        items={[
          "Frontend: React, Angular, Vue",
          "Backend: Node.js, .NET Core, Java Spring",
          "IoT & Edge: MQTT, AWS IoT Core, Azure IoT Hub, ThingWorx",
          "Cloud: AWS, Azure, Google Cloud",
          "AI & ML: TensorFlow, PyTorch, OpenAI API",
          "Databases: PostgreSQL, MongoDB, InfluxDB",
          "Integration: SAP, Oracle, Siemens MindSphere",
          "Security: ISO 27001, OT Security, MFA, AES-256",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Success Stories"
        cases={[
          {
            title: "Automotive Manufacturer (Germany)",
            result: "42% downtime reduction; $2.1M annual savings",
          },
          {
            title: "Electronics Factory (India)",
            result: "30% efficiency gain; zero stock discrepancies",
          },
          {
            title: "Energy Equipment Producer (UAE)",
            result: "22% lower energy costs; 400+ hours saved",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Manufacturing Challenges We Solve"
        left={[
          "Disconnected legacy systems",
          "Unplanned downtime & maintenance gaps",
          "Inefficient resource utilization",
        ]}
        right={[
          "Lack of data visibility across plants",
          "Slow digital adoption & cloud migration",
          "Cybersecurity risks in OT systems",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "Real-time visibility from machines to dashboards",
          "Predictive intelligence to prevent failures",
          "Centralized control across multi-site operations",
        ]}
        right={[
          "Up to 40% operational cost reduction",
          "Enterprise-grade security & compliance",
        ]}
        quote="We help manufacturers make better decisions, faster."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "ISO 27001, SOC 2, GDPR, OT cybersecurity aligned",
          "Encrypted IoT communication channels",
          "Role-based access & MFA controls",
        ]}
        right={[
          "Secure edge gateways for device data",
          "Continuous vulnerability & compliance audits",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you modernize legacy manufacturing systems?",
            answer: "Yes. We migrate and integrate legacy MES or ERP into Industry 4.0 environments.",
          },
          {
            question: "Can you connect IoT devices across factories?",
            answer: "Absolutely. We integrate devices with cloud platforms for unified visibility.",
          },
          {
            question: "What industries do you serve?",
            answer: "Automotive, electronics, heavy machinery, energy, FMCG, and industrial equipment.",
          },
          {
            question: "What’s the timeline for Industry 4.0 implementation?",
            answer: "Typically 12–20 weeks depending on complexity and plant readiness.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Engineer the Future of Manufacturing"
        subtitle="Partner with Avaantra Global to bring Industry 4.0 innovation to your factory — powered by IoT, AI, and automation."
        primaryCTA="Schedule Consultation"
        secondaryCTA="Download Manufacturing Solutions Deck"
        trustText="ISO 27001 Certified • 20+ Years Experience • 100+ Industry Projects • Global Clients"
      />
    </>
  )
}
