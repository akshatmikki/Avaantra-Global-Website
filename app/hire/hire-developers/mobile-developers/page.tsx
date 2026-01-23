import HireHero from "@/components/sections/hire/hire-developers/Hero";
import RealProblem from "@/components/sections/hire/hire-developers/RealProblem";
import OurPromise from "@/components/sections/hire/hire-developers/Promise";
import OurExpertise from "@/components/sections/hire/hire-developers/OurExpertise";
import IndustriesWeServe from "@/components/sections/hire/hire-developers/IndustriesWeServe";
import WhyAvaantra from "@/components/sections/hire/hire-developers/WhyAvaantra";
import HiringProcess from "@/components/sections/hire/hire-developers/HiringProcess";
import EngagementModels from "@/components/sections/hire/hire-developers/EngagementModels";
import Comparison from "@/components/sections/hire/hire-developers/Comparison";
import SecurityIP from "@/components/sections/hire/hire-developers/SecurityIP";
import Testimonials from "@/components/sections/hire/hire-developers/HireTestimonials";
import CaseStudy from "@/components/sections/hire/hire-developers/CaseStudy";
import FAQs from "@/components/sections/hire/hire-developers/FAQs";
import WhyThisWorks from "@/components/sections/hire/hire-developers/WhyThisWorks";
import FinalCTA from "@/components/sections/hire/hire-developers/CTA";

export const metadata = {
  title:
    "Hire Mobile App Developers | Flutter, React Native & iOS/Android Experts | Avaantra Global",
  description:
    "Hire experienced mobile app developers to build powerful native and cross-platform applications. Avaantra Global offers Flutter, React Native, and iOS/Android experts — ready in 15 days.",
};

export default function MobileAppDevelopersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated Mobile App Developers"
        highlight="Build, Launch & Scale Seamlessly"
        subtitle="Your customers live on mobile. Let’s help you meet them there — with high-performing, secure, and user-friendly mobile apps. Avaantra Global helps you hire pre-vetted mobile developers specializing in Flutter, React Native, iOS, and Android."
        primaryCta="Hire Mobile Developers in 15 Days"
        secondaryCta="See How Our Mobile Experts Deliver"
        uspList={[
          "Flutter, React Native, Kotlin, and Swift developers",
          "Build MVPs or enterprise mobile apps 2–3X faster",
          "40–60% cost reduction compared to in-house teams",
          "Pixel-perfect UI with seamless API integration",
          "Full transparency with complete code ownership",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "3X", label: "Faster Time to Market" },
          { value: "99%", label: "Crash-Free Stability" },
          { value: "40–60%", label: "Cost Reduction" },
        ]}
      />

      {/* Problem */}
      <RealProblem
        heading="The Problem"
        subheading="Mobile development becomes expensive and slow when fragmented across teams and vendors."
        problems={[
          { text: "iOS and Android teams work separately, causing delays." },
          { text: "Performance issues hurt user retention and ratings." },
          { text: "App Store and Play Store releases take months." },
        ]}
        conclusionTitle="You need a unified mobile team."
        conclusionText="A dedicated, cross-functional mobile development team that delivers performance, design, and user experience — fast and within budget."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise"
        subheading="We help you hire mobile developers who build sleek, secure, and high-performing apps — ready to launch faster."
        promises={[
          { text: "Flutter, React Native, Kotlin, Swift, and Ionic experts" },
          { text: "Full UI/UX and backend API integration" },
          { text: "Managed sprints with delivery reporting" },
          { text: "Scalable engagement models for any growth stage" },
          {
            text: "App store readiness, performance optimization, and post-launch support",
          },
        ]}
        outcomes={[
          { value: "3X", label: "Faster Time to Market" },
          { value: "99%", label: "Crash-Free Stability" },
          { value: "100%", label: "Cost & Progress Transparency" },
          { value: "0%", label: "Vendor Lock-In" },
        ]}
      />
      <OurExpertise
        heading="Our Mobile App Development Expertise"
        subheading="We build fast, secure, and scalable mobile applications that deliver exceptional user experiences across devices."
        items={[
          {
            title: "Platforms & App Types",
            description:
              "End-to-end mobile development across devices, platforms, and ecosystems.",
            toolsTitle: "Platforms",
            tools: [
              "iOS",
              "Android",
              "Cross-Platform Apps",
              "Progressive Web Apps (PWA)",
              "Wearables & IoT Integrations",
            ],
            outcome:
              "Consistent, high-quality experiences across all user touchpoints.",
          },
          {
            title: "Frameworks & Languages",
            description:
              "Modern frameworks chosen for performance, maintainability, and speed.",
            toolsTitle: "Frameworks",
            tools: [
              "Flutter",
              "React Native",
              "Swift",
              "SwiftUI",
              "Kotlin",
              "Kotlin Multiplatform",
            ],
            outcome:
              "High-performance native and cross-platform apps with faster development cycles.",
          },
          {
            title: "Backend, APIs & Integrations",
            description:
              "Reliable backend connectivity and real-time data synchronization.",
            toolsTitle: "APIs & Services",
            tools: [
              "REST APIs",
              "GraphQL",
              "Firebase",
              "AWS Amplify",
              "Third-Party SDK Integrations",
              "Payment & Notification Services",
            ],
            outcome:
              "Secure, real-time app functionality with seamless backend integration.",
          },
          {
            title: "Design, Tooling & Collaboration",
            description:
              "Design-to-development workflows that ensure pixel-perfect execution.",
            toolsTitle: "Tools",
            tools: [
              "Figma",
              "Zeplin",
              "Xcode",
              "Android Studio",
              "Git",
              "CI/CD for Mobile Apps",
            ],
            outcome:
              "Smooth, lightweight apps optimized for performance, usability, and retention.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our mobile app developers build industry-specific solutions designed for growth, engagement, and reliability."
        industries={[
          {
            icon: "🚀",
            title: "SaaS & B2C Applications",
            description:
              "User-centric apps focused on engagement, analytics, and rapid feature iteration.",
          },
          {
            icon: "🛒",
            title: "E-commerce & Marketplaces",
            description:
              "Conversion-focused shopping experiences with secure payments and real-time inventory.",
          },
          {
            icon: "🏥",
            title: "Healthcare & HealthTech",
            description:
              "HIPAA-compliant mobile apps supporting telemedicine, wearables, and IoT integrations.",
          },
          {
            icon: "🎓",
            title: "Education & EdTech",
            description:
              "Interactive learning apps with gamification, progress tracking, and multimedia content.",
          },
          {
            icon: "📊",
            title: "Analytics & Productivity Apps",
            description:
              "Data-driven mobile tools for reporting, automation, and operational efficiency.",
          },
        ]}
        outcome="Industry-aware mobile solutions designed for performance, compliance, and long-term scalability."
      />
      <WhyAvaantra
        heading="Why Hire Mobile App Developers from Avaantra Global"
        subheading="Because building a great mobile app requires more than code — it needs speed, UX discipline, and delivery accountability."
        advantages={[
          {
            text: "Experienced mobile developers across Flutter, React Native, iOS, and Android",
          },
          { text: "Strong focus on performance, UX, and app store compliance" },
          { text: "Agile sprint-based delivery with measurable progress" },
          { text: "Dedicated Project Manager and QA support (optional)" },
          {
            text: "Proven experience building consumer, SaaS, and enterprise mobile apps",
          },
          { text: "100% IP ownership with full source code transparency" },
        ]}
        closingLine="We don’t just build apps — we help you ship mobile products users actually love."
      />

      <HiringProcess
        heading="Our Hiring & Delivery Process"
        subheading="A fast, transparent process designed to get your mobile app into users’ hands without delays."
        steps={[
          {
            step: "1",
            title: "Define Your App Goals",
            process:
              "We understand your app vision, target users, platforms, and technical requirements.",
            benefit:
              "Targeted mobile developer profiles aligned with your product goals",
          },
          {
            step: "2",
            title: "Get Vetted Candidates",
            process:
              "Receive pre-vetted mobile developers with relevant platform experience.",
            benefit: "Interview and select developers you trust",
          },
          {
            step: "3",
            title: "Onboard Quickly",
            process:
              "Selected developers integrate with your tools, repos, and workflows.",
            benefit: "Developers onboard within 7–15 days",
          },
          {
            step: "4",
            title: "Manage via Dashboards",
            process:
              "Sprint tracking, progress reports, and performance metrics.",
            benefit: "Transparent delivery with full visibility and control",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Flexible engagement models designed to match your mobile app goals, timelines, and scale."
        models={[
          {
            title: "Dedicated App Developer",
            bestFor:
              "Long-term mobile applications and continuous feature development",
            howItWorks:
              "A full-time mobile app developer working exclusively on your product under your direction.",
            outcome:
              "Reliable performance, deep product understanding, and consistent delivery",
          },
          {
            title: "Managed Agile Pod",
            bestFor: "End-to-end mobile app delivery",
            howItWorks:
              "Avaantra manages a cross-functional pod including mobile developers, QA, and a Project Manager.",
            outcome: "2–3X faster delivery with reduced management overhead",
          },
          {
            title: "Project-Based",
            bestFor: "MVPs or one-time mobile app builds",
            howItWorks:
              "End-to-end delivery under a fixed scope, timeline, and budget.",
            outcome: "Fast execution with minimal risk",
          },
          {
            title: "Hybrid Model",
            bestFor: "Product development plus ongoing maintenance",
            howItWorks:
              "Combination of dedicated developers and managed delivery support.",
            outcome: "Continuous scaling with long-term flexibility",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Teams"
        subheading="A clear comparison to help you choose the most reliable mobile development model."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "3–5 weeks",
            inHouse: "2–3 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "Cross-Platform Expertise",
            freelancer: "Limited",
            inHouse: "Partial",
            avaantra: "Flutter + React Native Experts",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Medium",
            inHouse: "High",
            avaantra: "40–60% Savings",
          },
          {
            aspect: "Delivery Reliability",
            freelancer: "Unpredictable",
            inHouse: "Stable",
            avaantra: "High + Managed",
          },
          {
            aspect: "Scalability",
            freelancer: "Low",
            inHouse: "Slow",
            avaantra: "Instant & Flexible",
          },
          {
            aspect: "IP & Code Ownership",
            freelancer: "Risky",
            inHouse: "Yes",
            avaantra: "100% Yours",
          },
        ]}
      />
      <SecurityIP
        heading="Security & IP Protection"
        subheading="Your app, user data, and intellectual property are fully protected."
        points={[
          { text: "NDA and legal contracts signed before onboarding" },
          {
            text: "100% ownership of source code, repositories, and app assets",
          },
          { text: "Secure API integration and encrypted communication" },
          {
            text: "Compliance-ready practices for app store and data protection standards",
          },
        ]}
        closingLine="Your app, your users, and your data always remain under your control."
      />

      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra delivered our mobile app in half the time with outstanding communication throughout the project.",
            name: "CEO",
            role: "HealthTech Startup",
            location: "India",
          },
          {
            quote:
              "We scaled across iOS and Android using a single Flutter team — execution was smooth and extremely reliable.",
            name: "Founder",
            role: "SaaS App",
            location: "Singapore",
          },
          {
            quote:
              "Their mobile developers understood performance, UX, and store compliance from day one.",
            name: "Product Head",
            role: "Consumer App",
            location: "UK",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: Multi-Platform Mobile App Delivery"
        client="EdTech Platform"
        challenge="Delays in releasing a consistent mobile experience across multiple platforms."
        solution="Avaantra deployed a dedicated Flutter and API integration team to streamline development and unify delivery."
        metrics={[
          { value: "10 Weeks", label: "App Launched" },
          { value: "4.5★", label: "Average App Store Rating" },
          { value: "2.8X", label: "Faster Delivery" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire Mobile App Developers"
        faqs={[
          {
            question: "Do you build both iOS and Android apps?",
            answer:
              "Yes. We build native iOS and Android apps as well as cross-platform apps using Flutter or React Native.",
          },
          {
            question: "Can I hire mobile developers part-time?",
            answer:
              "Yes. We offer flexible engagement models including part-time, full-time, and project-based hiring.",
          },
          {
            question: "Do you manage App Store and Play Store releases?",
            answer:
              "Yes. We handle app store submissions, compliance checks, and release management end to end.",
          },
          {
            question:
              "Can you help with existing app improvements or optimization?",
            answer:
              "Absolutely. We optimize performance, improve UX, fix crashes, and enhance existing mobile apps.",
          },
          {
            question: "Do you provide post-launch support and maintenance?",
            answer:
              "Yes. We offer ongoing maintenance, performance optimization, OS upgrades, and feature enhancements after launch.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because mobile apps aren’t just code — they’re experiences that define how users perceive your brand.",
          "We combine strong engineering, thoughtful design, and fast execution to turn your ideas into apps people actually use.",
          "With Avaantra Global, you launch faster, scale smarter, and stay in control — without mobile development chaos.",
        ]}
        highlight="Beautiful apps, faster launches, and predictable delivery."
      />
      <FinalCTA
        heading="Hire Mobile App Developers in 15 Days — Launch Faster, Scale Smarter."
        subheading="Build high-performing mobile apps with developers who understand UX, performance, and scale."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
