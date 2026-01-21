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
  Truck,
  Warehouse,
  Route,
  Package,
  Ship,
  BarChart3,
  Cpu,
  ShieldCheck,
  Layers,
  Lock,
  MapPinned,
} from "lucide-react"

export default function LogisticsSupplyChainPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Deliver Efficiency. Drive Growth. Digitize Logistics."
        subtitle="Avaantra Global helps logistics, transport, and supply chain companies modernize operations with intelligent software — designed for real-time visibility, automation, and precision delivery."
        primaryCTA="Book Free Consultation"
        secondaryCTA="Explore Case Studies"
      />

      {/* WHY LOGISTICS INNOVATION */}
      <InfoSection
        title="Why Logistics Innovation Matters"
        description="Modern supply chains operate in real time. Customers expect speed, accuracy, and transparency — yet many logistics businesses still rely on disconnected systems and manual processes."
        points={[
          "Disconnected warehousing, transport, and billing systems",
          "Manual route planning and scheduling inefficiencies",
          "Limited visibility into shipments and assets",
          "Escalating fuel and maintenance costs",
        ]}
        quote="Every delivery is a promise — we help you keep it with precision."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our Logistics & Supply Chain Development Services"
        services={[
          {
            title: "Fleet Management Systems",
            description: "Vehicle tracking, fuel monitoring, driver analytics",
            value: "Up to 30% reduction in idle time & fuel cost",
          },
          {
            title: "Warehouse Management Systems (WMS)",
            description: "Automated storage, picking, and inventory control",
            value: "Higher warehouse accuracy & efficiency",
          },
          {
            title: "Route Optimization Platforms",
            description: "AI-driven route planning and sequencing",
            value: "20–40% faster deliveries",
          },
          {
            title: "Order & Delivery Management Systems (DMS)",
            description: "End-to-end tracking from order to doorstep",
            value: "Full visibility & faster turnaround",
          },
          {
            title: "Freight & Transportation Platforms",
            description: "Load matching, scheduling, invoice automation",
            value: "Reduced admin work & smoother logistics",
          },
          {
            title: "Predictive Analytics & Demand Forecasting",
            description: "ML-based demand, capacity, and risk modeling",
            value: "Smarter inventory & procurement decisions",
          },
          {
            title: "IoT-Enabled Supply Chain Visibility",
            description: "Real-time asset monitoring via sensors",
            value: "Improved traceability & reduced losses",
          },
          {
            title: "Blockchain for Logistics",
            description: "Secure documentation and transparent transactions",
            value: "Tamper-proof contracts & trust in delivery",
          },
        ]}
        ctaText="Let’s Build Your Logistics Platform"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="Supply Chain Solutions We Build"
        items={[
          { title: "Transportation Management Systems (TMS)", icon: Route },
          { title: "Warehouse & Inventory Platforms", icon: Warehouse },
          { title: "Supply Chain Visibility Platforms", icon: MapPinned },
          { title: "Freight & Cargo Systems", icon: Ship },
          { title: "Procurement & Supplier Portals", icon: Layers },
          { title: "Logistics Marketplaces", icon: Package },
          { title: "Last-Mile Delivery Apps", icon: Truck },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for Logistics & Supply Chain Solutions"
        features={[
          {
            title: "Industry 4.0 Expertise",
            description: "IoT, AI, automation, and analytics integration",
            icon: Cpu,
          },
          {
            title: "End-to-End Delivery",
            description: "Fleet, warehouse, transport, and customer systems",
            icon: Layers,
          },
          {
            title: "Predictive Insights",
            description: "Anticipate delays, risks, and bottlenecks",
            icon: BarChart3,
          },
          {
            title: "Enterprise-Grade Security",
            description: "ISO 27001, GDPR, blockchain-backed systems",
            icon: Lock,
          },
          {
            title: "Scalable Cloud Infrastructure",
            description: "Millions of shipments handled in real time",
            icon: Cpu,
          },
          {
            title: "Cost Efficiency",
            description: "Up to 40% reduction in logistics costs",
            icon: ShieldCheck,
          },
        ]}
        footerQuote="We don’t just digitize logistics — we engineer logistics intelligence."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — How We Digitize Logistics Operations"
        steps={[
          {
            title: "Discovery & Workflow Analysis",
            description: "Assess operations, gaps, and data flow",
          },
          {
            title: "Architecture & Design",
            description: "Scalable logistics system architecture",
          },
          {
            title: "Development & Integration",
            description: "Tracking, routing, and automation modules",
          },
          {
            title: "AI Enablement & Optimization",
            description: "Predictive analytics and route optimization",
          },
          {
            title: "Deployment & Continuous Support",
            description: "Cloud deployment, monitoring, and updates",
          },
        ]}
        duration="10–14 weeks for MVP; 20–24 weeks for full deployment"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology Stack"
        items={[
          "Frontend: React, Vue, Angular",
          "Backend: Node.js, .NET Core, Java Spring, Python",
          "Databases: PostgreSQL, MongoDB, DynamoDB",
          "Cloud: AWS, Azure, Google Cloud",
          "IoT & Edge: AWS IoT Core, Azure IoT Hub, Google IoT",
          "AI/ML: TensorFlow, PyTorch, OpenAI API, Power BI",
          "Mapping & Tracking: Google Maps, Mapbox, OpenStreetMap",
          "Blockchain: Hyperledger, Ethereum",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Case Studies"
        cases={[
          {
            title: "Freight Logistics Network (UAE)",
            result: "35% faster deliveries; $1.5M annual savings",
          },
          {
            title: "E-commerce Supply Chain (India)",
            result: "99% inventory accuracy; 28% faster fulfillment",
          },
          {
            title: "Cold Chain Transport (UK)",
            result: "0% spoilage events; 45% efficiency improvement",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Key Challenges We Solve"
        left={[
          "Inefficient route planning",
          "Disconnected supply chain systems",
          "High fuel and maintenance costs",
        ]}
        right={[
          "Poor visibility & asset tracking",
          "Manual inventory errors",
          "Lack of predictive planning",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "End-to-end operational control",
          "Reduced logistics and fuel costs",
          "Scalable infrastructure for growth",
        ]}
        right={[
          "Enhanced security & compliance",
          "Real-time, actionable insights",
        ]}
        quote="We turn supply chains into competitive advantages."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "ISO 27001, GDPR, SOC 2 compliant systems",
          "Blockchain-backed transaction logs",
          "Secure IoT gateways & API encryption",
        ]}
        right={[
          "Role-based access controls",
          "24/7 monitoring & real-time alerts",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you build logistics platforms from scratch?",
            answer: "Yes. We design and develop full-featured logistics and transport systems.",
          },
          {
            question: "Can you integrate with ERP or TMS systems?",
            answer: "Absolutely. We integrate SAP, Oracle, Microsoft Dynamics, and more.",
          },
          {
            question: "Do you support IoT-based tracking?",
            answer: "Yes. We deploy IoT devices for vehicle, shipment, and asset monitoring.",
          },
          {
            question: "How long does delivery take?",
            answer: "10–14 weeks for MVP; 20–24 weeks for full-scale systems.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Deliver Smarter, Together"
        subtitle="Partner with Avaantra Global to build logistics and supply chain solutions that combine automation, intelligence, and scalability — driving performance across every link."
        primaryCTA="Start Your Logistics Project"
        secondaryCTA="Download Supply Chain Solutions Deck"
        trustText="ISO 27001 Certified • 22+ Years Expertise • 100+ Logistics Projects • Global Delivery"
      />
    </>
  )
}
