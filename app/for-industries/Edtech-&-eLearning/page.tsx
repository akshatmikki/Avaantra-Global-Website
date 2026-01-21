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
  GraduationCap,
  Video,
  Smartphone,
  Brain,
  ClipboardCheck,
  BarChart3,
  Briefcase,
  Layers,
  ShieldCheck,
  Cpu,
  Lock,
  Users,
  Sparkles,
} from "lucide-react"

export default function EdTechPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Empowering Learning Through Technology & Intelligence"
        subtitle="From K–12 to corporate learning, Avaantra Global builds secure, engaging, and scalable EdTech platforms that deliver personalized learning experiences — anywhere, anytime."
        primaryCTA="Book Free Consultation"
        secondaryCTA="Explore EdTech Projects"
      />

      {/* WHY DIGITAL LEARNING */}
      <InfoSection
        title="Why Digital Learning Innovation Matters"
        description="Education has shifted from classrooms to cloud platforms. Learning today is interactive, personalized, and on-demand — but scaling it securely and engagingly remains a challenge."
        points={[
          "Managing distributed learning ecosystems",
          "Personalizing content for diverse learners",
          "Ensuring engagement in digital classrooms",
          "Maintaining data security and compliance (FERPA, GDPR)",
        ]}
        quote="Technology doesn’t replace teachers — it empowers learning at scale."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our EdTech & eLearning Development Services"
        services={[
          {
            title: "Learning Management Systems (LMS)",
            description: "Custom or white-label LMS for institutions and enterprises",
            value: "Centralized, trackable learning",
          },
          {
            title: "Virtual Classroom Development",
            description: "Real-time collaboration with chat, video, whiteboards",
            value: "Seamless digital classrooms",
          },
          {
            title: "eLearning App Development",
            description: "Mobile-first apps with gamification and micro-learning",
            value: "Higher engagement & retention",
          },
          {
            title: "AI-Powered Adaptive Learning",
            description: "Personalized learning paths powered by AI",
            value: "Improved learner performance",
          },
          {
            title: "Assessment & Proctoring Systems",
            description: "Secure online exams and automated evaluation",
            value: "Reliable, scalable testing",
          },
          {
            title: "Education Analytics Dashboards",
            description: "Insights into learner behavior and progress",
            value: "Data-driven teaching decisions",
          },
          {
            title: "Corporate Training Platforms",
            description: "Employee onboarding and skill development",
            value: "Accelerated workforce growth",
          },
          {
            title: "Content Management & SCORM Integration",
            description: "CMS with SCORM/xAPI support",
            value: "Standardized, compliant delivery",
          },
        ]}
        ctaText="Discuss Your eLearning Vision"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="EdTech Solutions We Build"
        items={[
          { title: "School & University Platforms", icon: GraduationCap },
          { title: "Corporate Learning Systems", icon: Briefcase },
          { title: "EdTech Startup Products", icon: Sparkles },
          { title: "eLearning Marketplaces", icon: Layers },
          { title: "Language Learning Apps", icon: Smartphone },
          { title: "Adaptive Learning Engines", icon: Brain },
          { title: "Virtual Reality Classrooms", icon: Video },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for EdTech Development"
        features={[
          {
            title: "Deep EdTech Expertise",
            description: "From school systems to B2C learning apps",
            icon: ShieldCheck,
          },
          {
            title: "End-to-End Product Development",
            description: "Concept to cloud deployment",
            icon: Layers,
          },
          {
            title: "AI-Powered Personalization",
            description: "Adaptive learning & performance analytics",
            icon: Cpu,
          },
          {
            title: "Compliance-Ready Architecture",
            description: "FERPA, GDPR, ISO-aligned systems",
            icon: Lock,
          },
          {
            title: "Engagement-Driven UX",
            description: "Gamification, badges, micro-learning",
            icon: Users,
          },
          {
            title: "Cross-Platform Scalability",
            description: "Mobile, desktop, and cloud-ready",
            icon: BarChart3,
          },
        ]}
        footerQuote="We make education interactive, intelligent, and inclusive."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — From Idea to Impact"
        steps={[
          {
            title: "Discovery & Learning Blueprint",
            description: "Objectives, personas, content models",
          },
          {
            title: "UX/UI & Architecture Design",
            description: "Intuitive journeys for all users",
          },
          {
            title: "Development & Integration",
            description: "SCORM/xAPI-based feature builds",
          },
          {
            title: "AI & Analytics Implementation",
            description: "Personalization and dashboards",
          },
          {
            title: "Deployment & Optimization",
            description: "Secure hosting & performance tuning",
          },
        ]}
        duration="12–16 weeks for MVP; 20–24 weeks for full rollout"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology Stack"
        items={[
          "Frontend: React, Angular, Vue, Flutter",
          "Backend: Node.js, .NET, Java Spring, Python Django",
          "Mobile: React Native, Swift, Kotlin",
          "Cloud: AWS, Azure, Google Cloud",
          "AI/ML: TensorFlow, OpenAI API, Hugging Face",
          "Compliance: FERPA, GDPR, ISO 27001",
          "LMS Tools: Moodle, TalentLMS, SCORM, xAPI",
          "Analytics: Power BI, Looker, Google Data Studio",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Case Studies"
        cases={[
          {
            title: "Corporate Training Platform (Europe)",
            result: "47% faster onboarding; 60% increase in completion rates",
          },
          {
            title: "EdTech Startup (India)",
            result: "35% improvement in learner scores; $1.2M seed raised",
          },
          {
            title: "K–12 Learning App (US)",
            result: "Daily active usage grew 2.5× in 3 months",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Key Challenges We Solve"
        left={[
          "Fragmented learning ecosystems",
          "Low learner engagement & retention",
          "Data security & compliance risks",
        ]}
        right={[
          "Limited personalization in content delivery",
          "Lack of gamification & motivation",
          "Integration challenges with legacy systems",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra"
        left={[
          "Faster time-to-learn — MVPs in 10–12 weeks",
          "AI-driven personalized learning paths",
          "Fully secure FERPA/GDPR-ready platforms",
        ]}
        right={[
          "Gamified engagement mechanics",
          "Analytics-backed learning insights",
        ]}
        quote="We turn learning into a measurable, scalable business advantage."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "GDPR, FERPA, ISO 27001 standards",
          "Encrypted cloud infrastructure",
          "Multi-factor authentication",
        ]}
        right={[
          "Role-based access controls",
          "SCORM/xAPI compliant data exchange",
          "Regular security audits",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you build both web and mobile eLearning platforms?",
            answer: "Yes. We build responsive web systems and native mobile apps.",
          },
          {
            question: "Can you integrate existing LMS platforms?",
            answer: "Absolutely. We support Moodle, Blackboard, TalentLMS, and custom APIs.",
          },
          {
            question: "Do you create AI-based learning paths?",
            answer: "Yes. We implement adaptive algorithms for dynamic content delivery.",
          },
          {
            question: "Are your systems FERPA and GDPR compliant?",
            answer: "Yes. Every product follows global data protection standards.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Build an EdTech Platform That Inspires the Next Generation"
        subtitle="Partner with Avaantra Global to create engaging, compliant, and intelligent learning systems that make education accessible and measurable."
        primaryCTA="Start Your EdTech Project"
        secondaryCTA="Download EdTech Case Study Deck"
        trustText="FERPA Compliant • ISO 27001 Certified • 150+ EdTech Projects • Global Delivery"
      />
    </>
  )
}
