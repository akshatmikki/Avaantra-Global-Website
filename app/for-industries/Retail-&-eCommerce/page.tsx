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
  ShoppingCart,
  Store,
  Boxes,
  Brain,
  BarChart3,
  Warehouse,
  ScanFace,
  Users,
  CreditCard,
  Layers,
  Cpu,
  ShieldCheck,
  Lock,
} from "lucide-react"

export default function RetailEcommercePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Transforming Retail. Powering eCommerce Growth."
        subtitle="Build, scale, and automate your retail and eCommerce ecosystem with Avaantra Global. From storefronts to analytics and personalization — we engineer experiences that drive revenue and loyalty."
        primaryCTA="Book Free Consultation"
        secondaryCTA="View Case Studies"
      />

      {/* WHY RETAIL & ECOMMERCE */}
      <InfoSection
        title="Why Retail & eCommerce Innovation Matters"
        description="Customer expectations are personalized, mobile-first, and instant. To compete, retailers must move beyond disconnected systems and manual workflows toward unified, intelligent commerce platforms."
        points={[
          "Unified commerce across all sales channels",
          "AI-driven personalization to boost conversions",
          "Automation that reduces overhead and accelerates delivery",
        ]}
        quote="Modern commerce isn’t just about selling online — it’s about building connected, intelligent experiences."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our Retail & eCommerce Development Services"
        services={[
          {
            title: "eCommerce Website & App Development",
            description: "Scalable online stores optimized for speed and conversion",
            value: "Improved sales and customer experience",
          },
          {
            title: "Omnichannel Retail Solutions",
            description: "Unified online, in-store, and mobile journeys",
            value: "Single view of customer behavior",
          },
          {
            title: "Marketplace Development",
            description: "Multi-vendor platforms with integrated payments",
            value: "Scalable revenue and commissions",
          },
          {
            title: "AI-Powered Personalization Engines",
            description: "Recommendations, dynamic pricing, trend analysis",
            value: "20–40% higher conversion rates",
          },
          {
            title: "Retail Analytics Dashboards",
            description: "Customer behavior and performance insights",
            value: "Smarter decisions, higher ROI",
          },
          {
            title: "Inventory & Warehouse Management",
            description: "Automation and IoT-based stock tracking",
            value: "Reduced errors, optimized logistics",
          },
          {
            title: "AR/VR Shopping Experiences",
            description: "Virtual try-ons and immersive product views",
            value: "Higher engagement & differentiation",
          },
          {
            title: "Loyalty & CRM Solutions",
            description: "Retention-driven customer relationship systems",
            value: "Increased lifetime value",
          },
        ]}
        ctaText="Let’s Build Your eCommerce Platform"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="Retail & eCommerce Solutions We Build"
        items={[
          { title: "B2C eCommerce Platforms", icon: ShoppingCart },
          { title: "B2B Commerce Systems", icon: Store },
          { title: "Omnichannel POS Systems", icon: CreditCard },
          { title: "Retail Automation Platforms", icon: Warehouse },
          { title: "Customer Experience Platforms", icon: Users },
          { title: "Subscription & D2C Models", icon: Boxes },
          { title: "Marketplace Integrations", icon: Layers },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra for Retail & eCommerce"
        features={[
          {
            title: "Commerce Strategy + Engineering Expertise",
            description: "Technology that drives conversions, not just traffic",
            icon: Cpu,
          },
          {
            title: "Omnichannel Integration",
            description: "Online, in-store, and backend systems unified",
            icon: Layers,
          },
          {
            title: "AI-Powered Commerce Intelligence",
            description: "Predictive inventory and personalization",
            icon: Brain,
          },
          {
            title: "Performance Marketing Integration",
            description: "Built-in CRO and analytics",
            icon: BarChart3,
          },
          {
            title: "Enterprise-Grade Security",
            description: "PCI-DSS, ISO 27001, GDPR compliant",
            icon: Lock,
          },
          {
            title: "Scalable Cloud Architecture",
            description: "Built for global expansion",
            icon: ShieldCheck,
          },
        ]}
        footerQuote="We design systems that make retail human and data intelligent."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — How We Deliver Smarter Retail Solutions"
        steps={[
          {
            title: "Discovery & Strategy",
            description: "Product lines, user behavior, revenue goals",
          },
          {
            title: "Design & Architecture",
            description: "UX/UI and scalable backend systems",
          },
          {
            title: "Development & Integration",
            description: "Omnichannel platforms with CRM, ERP, POS",
          },
          {
            title: "AI Enablement & Automation",
            description: "Personalization, pricing, demand forecasting",
          },
          {
            title: "Launch & Optimize",
            description: "KPI monitoring and continuous improvement",
          },
        ]}
        duration="10–14 weeks for MVP; 20–24 weeks for enterprise platforms"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology & Commerce Stack"
        items={[
          "Frontend: React, Next.js, Vue, Angular",
          "Backend: Node.js, .NET Core, Java Spring, Python",
          "eCommerce: Shopify Plus, Magento, WooCommerce, BigCommerce",
          "Databases: PostgreSQL, MongoDB, MySQL",
          "Cloud: AWS, Azure, GCP",
          "AI: TensorFlow, OpenAI API, LangChain",
          "Analytics: Google Data Studio, Power BI, Looker",
          "Payments & Security: Stripe, Razorpay, PCI-DSS, ISO 27001",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Success Stories"
        cases={[
          {
            title: "Omnichannel Retail Platform (UAE)",
            result: "32% improvement in order accuracy; 45% faster delivery cycles",
          },
          {
            title: "D2C Brand (India)",
            result: "38% higher retention; 26% increase in average order value",
          },
          {
            title: "Global Marketplace (UK)",
            result: "60% faster settlements; 40% more active sellers",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Retail Challenges We Solve"
        left={[
          "Scalability bottlenecks across regions",
          "Lack of personalization",
          "Inventory inconsistencies",
        ]}
        right={[
          "Low conversion rates",
          "Manual forecasting processes",
          "Data security & compliance gaps",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "Omnichannel integration across all touchpoints",
          "CRO-optimized storefronts & checkouts",
          "AI-driven growth insights",
        ]}
        right={[
          "PCI-DSS & GDPR compliant commerce",
          "Scalable architecture for global expansion",
        ]}
        quote="We make commerce frictionless, intelligent, and conversion-ready."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "PCI-DSS & GDPR compliance",
          "Multi-layer encryption (AES-256)",
          "Secure payment integrations",
        ]}
        right={[
          "Role-based access controls",
          "Cloud security on AWS & Azure",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you build both B2C and B2B eCommerce solutions?",
            answer: "Yes. We build both consumer-facing and enterprise commerce platforms.",
          },
          {
            question: "Can you migrate our existing store?",
            answer: "Absolutely. We handle platform migrations with zero downtime.",
          },
          {
            question: "Do you integrate POS or ERP systems?",
            answer: "Yes. We integrate SAP, Oracle, Microsoft Dynamics, and more.",
          },
          {
            question: "How fast can we launch?",
            answer: "8–12 weeks for MVP; 16–20 weeks for enterprise builds.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Turn Your Retail Vision Into a Digital Growth Engine"
        subtitle="Partner with Avaantra Global to create AI-driven, scalable, and conversion-optimized retail and eCommerce platforms."
        primaryCTA="Start Your Project"
        secondaryCTA="Download eCommerce Brochure"
        trustText="PCI-DSS Compliant • 22+ Years Experience • 150+ eCommerce Projects • Global Clients"
      />
    </>
  )
}
