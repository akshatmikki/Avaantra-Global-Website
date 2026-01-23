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
  title: "Hire React Developers | Frontend & Web App Experts | Avaantra Global",
  description:
    "Hire dedicated React developers to build fast, scalable web and SaaS applications. Avaantra Global offers pre-vetted React.js engineers for startups and agencies — reliable, affordable, and ready to start in 15 days.",
};

export default function ReactDevelopersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated React Developers"
        highlight="Deliver Beautiful, Scalable Web Apps Faster"
        subtitle="Your users expect fast, smooth, and modern digital experiences. At Avaantra Global, we help you hire pre-vetted React developers who build high-performing, conversion-focused web applications — with clean code, pixel-perfect UI, and seamless integration."
        primaryCta="Hire React Developers in 15 Days"
        secondaryCta="See How Our React Experts Deliver"
        uspList={[
          "Pre-vetted React.js developers with real-world product experience",
          "Expertise in modern UI, performance optimization, and scalability",
          "Developers ready to start in 7–15 days",
          "Dedicated and managed engagement options",
          "Transparent pricing and communication",
          "NDA-backed delivery with full IP ownership",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "2–3X", label: "Faster UI Delivery" },
          { value: "35–45%", label: "Lower Cost" },
          { value: "99%", label: "Client Satisfaction" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem Businesses Face"
        subheading="You have the idea, the design, and the backend — but your frontend experience isn’t keeping up."
        problems={[
          { text: "Users complain about slow and clunky interfaces." },
          { text: "Internal teams lack deep React.js expertise." },
          {
            text: "Freelancers miss deadlines and deliver inconsistent quality.",
          },
          {
            text: "In-house hiring takes months and costs more than expected.",
          },
        ]}
        conclusionTitle="Frontend performance is not optional."
        conclusionText="You need a dedicated React development team that can match your product’s speed, creativity, and scale — without the HR headache. That’s what Avaantra Global provides: top-tier React developers who deliver speed, quality, and scalability — guaranteed."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: Beautiful Frontends. Predictable Delivery. Zero Hiring Risk."
        subheading="We help SaaS, B2B, and consumer product companies hire full-time React.js developers within 7–15 days — fully managed, secure, and ready to scale."
        promises={[
          { text: "React.js, Next.js, and Redux experts" },
          { text: "Strong in API integration and performance optimization" },
          { text: "Dedicated and managed engagement options" },
          { text: "Transparent communication and pricing" },
          { text: "NDA, IP protection, and fast onboarding" },
        ]}
        outcomes={[
          { value: "2–3X", label: "Faster UI Delivery" },
          { value: "35–45%", label: "Lower Cost vs In-House" },
          { value: "99%", label: "Client Satisfaction" },
          { value: "Scalable", label: "Frontend Architecture" },
        ]}
      />
      <OurExpertise
        heading="Our React.js Development Expertise"
        subheading="We provide React developers who understand both performance and user experience — combining deep technical knowledge with real business understanding."
        items={[
          {
            title: "Frontend Development",
            description:
              "Fast, dynamic, and visually flawless user interfaces built with modern React tooling.",
            toolsTitle: "Our Expertise",
            tools: [
              "React.js",
              "Next.js",
              "Gatsby.js",
              "Redux",
              "MobX",
              "Zustand",
              "TypeScript",
              "ES6",
              "Babel",
              "Webpack",
              "Tailwind",
              "Bootstrap",
              "Material UI",
            ],
            outcome: "Interactive, modern web experiences that delight users.",
          },
          {
            title: "Integration & Backend Collaboration",
            description:
              "Seamless integration between frontend and backend systems for secure, real-time applications.",
            toolsTitle: "We Work With",
            tools: [
              "Node.js APIs",
              "Python (Flask, Django)",
              "PHP APIs",
              ".NET APIs",
              "GraphQL",
              "REST",
              "WebSockets",
              "JWT",
              "OAuth",
              "Firebase",
            ],
            outcome: "Fast, reliable, and secure frontend-backend harmony.",
          },
          {
            title: "Performance Optimization",
            description:
              "Frontend performance engineering to keep your app fast, responsive, and scalable.",
            toolsTitle: "We Optimize",
            tools: [
              "Code Splitting",
              "Lazy Loading",
              "Lighthouse Optimization",
              "SEO for SPAs",
              "Progressive Web Apps (PWA)",
            ],
            outcome:
              "Higher Core Web Vitals scores, faster load times, and happier users.",
          },
          {
            title: "UI/UX Collaboration",
            description:
              "Close collaboration with design teams to bring pixel-perfect interfaces to life.",
            toolsTitle: "We Handle",
            tools: [
              "Figma-to-React Conversion",
              "Framer Motion Animations",
              "Accessibility Testing",
              "Responsive Design Testing",
            ],
            outcome: "Flawless designs turned into engaging user experiences.",
          },
          {
            title: "DevOps, CI/CD & Deployment",
            description:
              "Reliable delivery pipelines and hosting for production-grade React applications.",
            toolsTitle: "We Use",
            tools: [
              "GitHub",
              "GitLab",
              "Bitbucket",
              "Docker",
              "Kubernetes",
              "Vercel",
              "Netlify",
              "Jenkins",
              "Azure DevOps",
              "AWS Amplify",
            ],
            outcome: "Continuous integration and frictionless app deployments.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries That Trust Our React Teams"
        subheading="Our React developers build high-impact frontend solutions across multiple industries."
        industries={[
          {
            icon: "🧠",
            title: "SaaS Platforms & B2B Apps",
            description:
              "Scalable dashboards and web apps designed for performance and usability.",
          },
          {
            icon: "💳",
            title: "FinTech Dashboards",
            description:
              "Secure, real-time financial interfaces with rich data visualization.",
          },
          {
            icon: "🏥",
            title: "HealthTech Portals",
            description:
              "User-friendly portals built with accessibility, security, and performance in mind.",
          },
          {
            icon: "🛒",
            title: "E-commerce Frontends",
            description:
              "High-conversion storefronts optimized for speed and seamless user journeys.",
          },
          {
            icon: "🎓",
            title: "EdTech Platforms",
            description:
              "Interactive learning interfaces with smooth navigation and scalability.",
          },
          {
            icon: "📊",
            title: "Marketing & Analytics Tools",
            description:
              "Data-rich dashboards and tools that turn insights into action.",
          },
        ]}
        outcome="Business-focused interfaces that drive real ROI."
      />
      <WhyAvaantra
        heading="Why Hire React Developers from Avaantra Global"
        subheading="Because you deserve speed, precision, and accountability — not guesswork."
        advantages={[
          { text: "5–8 years average experience in React.js development" },
          { text: "Agile, sprint-based delivery model" },
          { text: "Code reviews, QA checks, and performance audits" },
          { text: "Dedicated Project Manager for delivery oversight" },
          { text: "Flexible hourly, monthly, or fixed pricing models" },
          { text: "100% IP and source code ownership" },
        ]}
        closingLine="We’re not just a vendor — we’re your growth partner in product delivery."
      />
      <HiringProcess
        heading="Our Hiring Process"
        subheading="We make React talent onboarding simple, fast, and transparent."
        steps={[
          {
            step: "1",
            title: "Share Your Requirement",
            process:
              "Define your project scope, goals, and preferred React tech stack.",
            benefit: "Clear understanding of roles, skills, and duration",
          },
          {
            step: "2",
            title: "Get Shortlisted Profiles",
            process:
              "Receive 3–5 pre-vetted React developer profiles within 48 hours.",
            benefit: "Save weeks of screening and evaluation",
          },
          {
            step: "3",
            title: "Interview & Approve",
            process: "Assess technical skills, communication, and team fit.",
            benefit: "Hire only developers you trust",
          },
          {
            step: "4",
            title: "Onboard & Collaborate",
            process:
              "Developers integrate smoothly into your workflows and tools.",
            benefit: "Seamless setup on Slack, Jira, and GitHub",
          },
          {
            step: "5",
            title: "Track & Scale",
            process:
              "Sprint-based delivery with transparent reporting and reviews.",
            benefit: "Predictable results with full flexibility",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Choose an engagement model that fits your frontend goals, timeline, and scale."
        models={[
          {
            title: "Dedicated React Developer",
            bestFor: "Long-term frontend builds",
            howItWorks:
              "A full-time React developer working directly under your direction.",
            outcome: "Predictable monthly delivery",
          },
          {
            title: "Managed Agile Pod",
            bestFor: "Cross-functional UI + backend projects",
            howItWorks:
              "Avaantra manages sprints, coordination, and project delivery.",
            outcome: "2–3X faster development velocity",
          },
          {
            title: "Project-Based",
            bestFor: "One-time web or landing page builds",
            howItWorks:
              "Fixed scope and timeline with clearly defined deliverables.",
            outcome: "Low-risk execution with clear outcomes",
          },
          {
            title: "Hybrid Model",
            bestFor: "Ongoing enhancements and feature delivery",
            howItWorks:
              "Combination of a dedicated React developer and managed support.",
            outcome: "Continuous product evolution",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Teams"
        subheading="Compare hiring models to see which delivers speed, security, and scalability."
        rows={[
          {
            aspect: "Hiring Time",
            freelancer: "4–6 weeks",
            inHouse: "2–3 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Medium",
            inHouse: "High",
            avaantra: "Up to 50% savings",
          },
          {
            aspect: "Delivery Speed",
            freelancer: "Inconsistent",
            inHouse: "Predictable",
            avaantra: "Agile + Sprint-Based",
          },
          {
            aspect: "Scalability",
            freelancer: "Low",
            inHouse: "Limited",
            avaantra: "Instant, Flexible",
          },
          {
            aspect: "IP Security",
            freelancer: "Risky",
            inHouse: "Safe",
            avaantra: "100% NDA + IP Ownership",
          },
          {
            aspect: "Project Oversight",
            freelancer: "None",
            inHouse: "Limited",
            avaantra: "Dedicated PM + QA",
          },
        ]}
      />
      <SecurityIP
        heading="Security, IP & Compliance"
        subheading="We guarantee your product, data, and intellectual property remain completely secure."
        points={[
          { text: "NDA-backed legal contracts before onboarding" },
          { text: "Full source code and IP ownership" },
          { text: "Encrypted systems with SOC2-compliant practices" },
          { text: "ISO-grade data protection standards" },
        ]}
        closingLine="Your idea stays yours — always."
      />
      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s React developers are fast, communicative, and deliver exceptional quality.",
            name: "CTO",
            role: "SaaS Startup",
            location: "UK",
          },
          {
            quote:
              "Their React team turned our complex dashboard into a clean, lightning-fast web app.",
            name: "Founder",
            role: "Analytics Platform",
            location: "USA",
          },
          {
            quote:
              "We saved 40% in costs and doubled our release speed with Avaantra’s React pod.",
            name: "CEO",
            role: "HealthTech Startup",
            location: "India",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: React Team That Transformed a SaaS Product"
        client="B2B Marketing SaaS (Singapore)"
        challenge="Needed a modern, high-performance React UI for a complex analytics platform."
        solution="Avaantra deployed a focused team of 3 React developers and 1 QA engineer within 10 days to redesign, optimize, and scale the frontend."
        metrics={[
          { value: "45%", label: "Faster UI Performance" },
          { value: "60%", label: "Increase in User Engagement" },
          { value: "2X", label: "Client Acquisition in 4 Months" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire React Developers"
        faqs={[
          {
            question: "How soon can we hire React developers?",
            answer:
              "Typically within 7–15 business days after finalizing your requirements.",
          },
          {
            question: "Do you provide full-stack React + Node teams?",
            answer:
              "Yes. We offer both frontend-only React developers and full-stack MERN teams.",
          },
          {
            question: "What if I need design + React developers?",
            answer:
              "We can add UI/UX designers or provide dedicated frontend pods as needed.",
          },
          {
            question: "How do you ensure code quality?",
            answer:
              "All projects go through structured peer reviews, QA sprints, and performance checks.",
          },
          {
            question: "Will my developer work in my time zone?",
            answer:
              "Yes. Our developers are available across IST, GMT, EST, and PST overlap hours.",
          },
          {
            question: "Do I get IP and code ownership?",
            answer:
              "Always. You retain 100% IP ownership with full GitHub access from day one.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because hiring React talent shouldn’t feel like a gamble.",
          'You get ready-to-start developers, transparent communication, and predictable delivery — not just "resources," but real partners in your product’s growth.',
          "With Avaantra Global, you build beautiful, high-performing React applications faster and without risk.",
        ]}
        highlight="Frontend speed, quality, and confidence — without hiring hassle."
      />
      <FinalCTA
        heading="Hire Dedicated React Developers in 15 Days — Scale Frontend Delivery Without Hiring Hassle."
        subheading="Build faster, launch cleaner, and scale confidently with expert React engineers."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
