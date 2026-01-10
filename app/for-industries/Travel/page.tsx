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
  Plane,
  Hotel,
  Smartphone,
  MapPinned,
  Users,
  Building2,
  Brain,
  BarChart3,
  CreditCard,
  ShieldCheck,
  Layers,
  Lock,
} from "lucide-react"

export default function TravelHospitalityPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Designing Seamless Journeys with Intelligent Travel Technology"
        subtitle="From hotel chains to online travel agencies, Avaantra Global builds modern, connected platforms that deliver exceptional guest experiences — powered by automation, analytics, and personalization."
        primaryCTA="Book a Free Consultation"
        secondaryCTA="Explore TravelTech Projects"
      />

      {/* WHY TRAVEL & HOSPITALITY */}
      <InfoSection
        title="Why Travel & Hospitality Innovation Matters"
        description="Today’s travelers expect personalization, speed, and trust at every touchpoint. Yet many travel businesses still struggle with fragmented systems and manual operations."
        points={[
          "Fragmented booking systems and outdated CRMs",
          "Manual operations limiting scalability",
          "Low retention due to generic guest experiences",
          "Rising costs from inefficient channel management",
        ]}
        quote="We help travel businesses deliver moments that matter — from booking to boarding."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our Travel & Hospitality Software Development Services"
        services={[
          {
            title: "Custom Booking & Reservation Systems",
            description: "Web and mobile booking platforms for hotels and OTAs",
            value: "Higher direct bookings & loyalty",
          },
          {
            title: "Travel App Development",
            description: "AI-powered itineraries, planning, and travel support",
            value: "Personalized user journeys",
          },
          {
            title: "Hotel Management Systems (HMS)",
            description: "Room inventory, billing, housekeeping automation",
            value: "Improved operations & guest satisfaction",
          },
          {
            title: "Channel Management & Distribution",
            description: "Unified OTA, GDS, and direct channel management",
            value: "Better rate parity & occupancy",
          },
          {
            title: "CRM & Guest Experience Platforms",
            description: "Customer data, preferences, automated engagement",
            value: "Higher repeat bookings",
          },
          {
            title: "AI Recommendation Engines",
            description: "Smart upsell, cross-sell, and travel suggestions",
            value: "30–40% higher engagement",
          },
          {
            title: "Revenue Management & Analytics",
            description: "Predictive pricing and performance dashboards",
            value: "Data-driven revenue optimization",
          },
          {
            title: "Chatbots & Virtual Assistants",
            description: "24/7 booking, support, and concierge automation",
            value: "Faster service & lower support costs",
          },
        ]}
        ctaText="Let’s Build Your Travel Platform"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="Travel & Hospitality Solutions We Build"
        items={[
          { title: "Hotel Booking Portals", icon: Hotel },
          { title: "Online Travel Agencies (OTAs)", icon: Plane },
          { title: "Vacation Rental Platforms", icon: Building2 },
          { title: "Corporate Travel Management Systems", icon: Layers },
          { title: "Travel CRM Solutions", icon: Users },
          { title: "Hospitality Management Software", icon: CreditCard },
          { title: "Tour Operator Portals", icon: MapPinned },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for TravelTech Development"
        features={[
          {
            title: "Comprehensive TravelTech Expertise",
            description: "OTAs, hotel platforms, and smart travel apps",
            icon: Plane,
          },
          {
            title: "End-to-End Delivery",
            description: "Strategy, design, build, launch, optimize",
            icon: Layers,
          },
          {
            title: "AI & Data-Driven Insights",
            description: "Personalization, pricing, automation",
            icon: Brain,
          },
          {
            title: "Global Integrations",
            description: "Amadeus, Sabre, Galileo, payment gateways",
            icon: MapPinned,
          },
          {
            title: "Enterprise Security & Compliance",
            description: "GDPR, PCI-DSS, ISO 27001",
            icon: Lock,
          },
          {
            title: "Scalable Architecture",
            description: "Multi-property, multi-region platforms",
            icon: ShieldCheck,
          },
        ]}
        footerQuote="We transform hospitality from service to experience — powered by technology."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — From Discovery to Delight"
        steps={[
          {
            title: "Discovery & Requirement Gathering",
            description: "Business model, systems, target markets",
          },
          {
            title: "UX/UI & System Architecture",
            description: "Conversion-focused journeys and design",
          },
          {
            title: "Development & Integration",
            description: "Booking, CRM, analytics, global APIs",
          },
          {
            title: "AI Enablement & Testing",
            description: "Predictive pricing and personalization",
          },
          {
            title: "Launch & Optimization",
            description: "Analytics, CRO, and marketing automation",
          },
        ]}
        duration="12–16 weeks for MVP; 20–24 weeks for full platform"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology Stack"
        items={[
          "Frontend: React, Angular, Vue, Flutter",
          "Backend: Node.js, .NET, Python, Java Spring",
          "Cloud: AWS, Azure, Google Cloud",
          "Databases: PostgreSQL, MongoDB, MySQL",
          "Travel APIs: Amadeus, Sabre, Skyscanner, Expedia",
          "Payments: Stripe, PayPal, Razorpay",
          "AI & Analytics: TensorFlow, OpenAI, Power BI, Snowflake",
          "Compliance: GDPR, PCI-DSS, ISO 27001",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Case Studies"
        cases={[
          {
            title: "Hotel Chain (UAE)",
            result: "32% higher occupancy; 18% revenue uplift",
          },
          {
            title: "Travel Aggregator (India)",
            result: "45% faster bookings; 40% higher retention",
          },
          {
            title: "Luxury Vacation Platform (US)",
            result: "25% more repeat bookings; 30% upsell growth",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Key Challenges We Solve"
        left={[
          "Low occupancy & booking inefficiencies",
          "Poor guest experience & communication gaps",
          "Inefficient pricing strategies",
        ]}
        right={[
          "Lack of personalization",
          "Payment security & data privacy concerns",
          "Disconnected systems across departments",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "Unified booking, CRM, and analytics platforms",
          "AI-powered personalization at scale",
          "Secure, frictionless payments",
        ]}
        right={[
          "Omnichannel presence",
          "CRO-driven conversion growth",
        ]}
        quote="We help travel brands turn complexity into convenience — and guests into advocates."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "GDPR, PCI-DSS, ISO 27001 certified",
          "Secure payment gateways & tokenization",
          "Data encryption & privacy controls",
        ]}
        right={[
          "Role-based access & API security",
          "24/7 monitoring & audits",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you build booking engines from scratch?",
            answer: "Yes. We develop fully customized booking and travel management platforms.",
          },
          {
            question: "Can you integrate GDS and travel APIs?",
            answer: "Absolutely. We integrate Amadeus, Sabre, Skyscanner, Expedia, and more.",
          },
          {
            question: "Do you offer AI-based personalization?",
            answer: "Yes. Our platforms recommend destinations, hotels, and upgrades dynamically.",
          },
          {
            question: "How long does it take to launch?",
            answer: "12–16 weeks for MVP; 20–24 weeks for enterprise platforms.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Redefine the Future of Travel & Hospitality"
        subtitle="Partner with Avaantra Global to build smart, connected, and customer-first platforms that transform how people travel and experience the world."
        primaryCTA="Start Your Travel Project"
        secondaryCTA="Download TravelTech Solutions Deck"
        trustText="GDPR Compliant • ISO 27001 Certified • 22+ Years Experience • 200+ Global Travel Projects"
      />
    </>
  )
}
