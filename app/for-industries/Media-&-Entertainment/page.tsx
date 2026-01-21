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
  Tv,
  Video,
  Music,
  Newspaper,
  Megaphone,
  Brain,
  Users,
  Gamepad2,
  ShieldCheck,
  Cpu,
  Layers,
  Lock,
} from "lucide-react"

export default function MediaEntertainmentPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Creating the Future of Media, Streaming & Digital Experiences"
        subtitle="Avaantra Global helps media, entertainment, and content businesses launch immersive, scalable, and monetizable digital platforms — powered by cloud, AI, and automation."
        primaryCTA="Book Free Consultation"
        secondaryCTA="Explore MediaTech Case Studies"
      />

      {/* WHY MEDIA & ENTERTAINMENT */}
      <InfoSection
        title="Why Media & Entertainment Need Digital Reinvention"
        description="Content is infinite. Attention is not. In a world where every brand is a publisher, success depends on delivering the right content to the right audience at the right moment."
        points={[
          "Fragmented content workflows and publishing tools",
          "Unpredictable monetization models",
          "Rising churn and subscription fatigue",
          "Data silos across content, users, and ad partners",
        ]}
        quote="We don’t just build media platforms. We build engagement engines."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our Media & Entertainment Development Services"
        services={[
          {
            title: "OTT Platform Development",
            description: "Netflix-style platforms with adaptive streaming",
            value: "4K-ready, scalable video delivery",
          },
          {
            title: "Video-on-Demand (VoD) Systems",
            description: "Secure hosting, transcoding, and DRM streaming",
            value: "Global, low-latency distribution",
          },
          {
            title: "Content Management Systems (CMS)",
            description: "Multi-format content and metadata management",
            value: "Streamlined editorial workflows",
          },
          {
            title: "Digital Publishing Platforms",
            description: "SEO-optimized publishing with ad monetization",
            value: "Faster publishing & higher reach",
          },
          {
            title: "AdTech & Monetization Solutions",
            description: "Dynamic ad insertion and yield optimization",
            value: "Higher revenue per user",
          },
          {
            title: "AI-Powered Content Recommendations",
            description: "ML-driven personalization engines",
            value: "Increased watch time & retention",
          },
          {
            title: "Social Media & Influencer Platforms",
            description: "Creator tools, analytics, monetization",
            value: "Creator-centric growth",
          },
          {
            title: "AR/VR Entertainment Solutions",
            description: "Immersive gaming and live event experiences",
            value: "Deeper audience engagement",
          },
        ]}
        ctaText="Let’s Build Your Media Platform"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="MediaTech Solutions We Build"
        items={[
          { title: "OTT & Streaming Apps", icon: Tv },
          { title: "Digital Publishing Systems", icon: Newspaper },
          { title: "Music & Podcast Platforms", icon: Music },
          { title: "AdTech Platforms", icon: Megaphone },
          { title: "Social Media & Creator Portals", icon: Users },
          { title: "AI Recommendation Engines", icon: Brain },
          { title: "Gamification & AR Experiences", icon: Gamepad2 },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for MediaTech Development"
        features={[
          {
            title: "Full-Stack Media Expertise",
            description: "OTT, AdTech, CMS, and publishing systems",
            icon: Layers,
          },
          {
            title: "AI-Powered Engagement",
            description: "Personalized content and recommendations",
            icon: Brain,
          },
          {
            title: "High-Performance Architecture",
            description: "Stream to millions without latency",
            icon: Cpu,
          },
          {
            title: "Enterprise-Grade Security",
            description: "DRM, GDPR, ISO 27001 compliance",
            icon: Lock,
          },
          {
            title: "Smart Monetization Models",
            description: "Ads, subscriptions, and hybrid revenue",
            icon: Megaphone,
          },
          {
            title: "Multi-Platform Deployment",
            description: "Web, mobile, smart TVs, consoles",
            icon: ShieldCheck,
          },
        ]}
        footerQuote="We help media companies become digital-first businesses — profitably."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — From Idea to Streaming Success"
        steps={[
          {
            title: "Discovery & Audience Research",
            description: "Content workflows and audience segmentation",
          },
          {
            title: "Architecture & UX Design",
            description: "Scalable backend and engaging UI",
          },
          {
            title: "Development & Integration",
            description: "Video, CMS, analytics, monetization",
          },
          {
            title: "AI Enablement & Testing",
            description: "Recommendations, A/B testing, insights",
          },
          {
            title: "Launch & Continuous Optimization",
            description: "Global rollout with performance tuning",
          },
        ]}
        duration="12–16 weeks for MVP; 20–24 weeks for full rollout"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology Stack"
        items={[
          "Frontend: React, Angular, Vue, Next.js",
          "Backend: Node.js, .NET Core, Python Django",
          "Cloud: AWS Media Services, Azure, Google Cloud",
          "Databases: PostgreSQL, MongoDB, DynamoDB",
          "Streaming: Wowza, JWPlayer, Brightcove, Vimeo API",
          "AI/ML: TensorFlow, OpenAI, PyTorch, LangChain",
          "Analytics: GA4, Power BI, Snowflake",
          "Security: DRM, GDPR, ISO 27001, Watermarking",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Case Studies"
        cases={[
          {
            title: "OTT Platform for Sports Network (UAE)",
            result: "1M+ concurrent viewers; 99.9% uptime",
          },
          {
            title: "Digital Publishing Platform (US)",
            result: "35% faster publishing; 42% ad revenue growth",
          },
          {
            title: "Music Streaming App (India)",
            result: "3× DAU growth; churn reduced by 22%",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Key Challenges We Solve"
        left={[
          "Content delivery at massive scale",
          "Subscription fatigue and churn",
          "Unpredictable monetization models",
        ]}
        right={[
          "Fragmented content workflows",
          "Lack of personalization",
          "Piracy and content security risks",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "Accelerated go-to-market (12–16 weeks)",
          "AI-driven personalized experiences",
          "Optimized monetization & ROI",
        ]}
        right={[
          "Enterprise-grade DRM & security",
          "Omni-platform reach",
        ]}
        quote="Your audience deserves the best experience — your platform should deliver it."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "DRM & anti-piracy protection",
          "GDPR and ISO 27001 compliance",
          "Watermarking and encryption",
        ]}
        right={[
          "Secure CDN & content delivery",
          "Role-based access control",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you build OTT and streaming platforms from scratch?",
            answer: "Yes. We build complete OTT systems with streaming, analytics, and monetization.",
          },
          {
            question: "Can you integrate ads and subscriptions?",
            answer: "Absolutely. We support ads, subscriptions, and hybrid revenue models.",
          },
          {
            question: "Do you support DRM and content protection?",
            answer: "Yes. We implement DRM, encryption, and anti-piracy frameworks.",
          },
          {
            question: "How long does it take to launch?",
            answer: "12–16 weeks for MVP; 20–24 weeks for full platforms.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Build the Future of Entertainment Together"
        subtitle="Partner with Avaantra Global to create immersive, scalable, and profitable media ecosystems powered by intelligence and innovation."
        primaryCTA="Start Your Media Project"
        secondaryCTA="Download MediaTech Solutions Deck"
        trustText="DRM Secure • ISO 27001 Certified • 22+ Years Experience • 150+ Global Media Clients"
      />
    </>
  )
}
