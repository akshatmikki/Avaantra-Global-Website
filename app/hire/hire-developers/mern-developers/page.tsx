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
    "Hire MERN Stack Developers | MongoDB, Express, React & Node Experts | Avaantra Global",
  description:
    "Hire dedicated MERN stack developers to build fast, modern, and scalable web applications. Avaantra Global provides pre-vetted React and Node.js engineers to startups and agencies — risk-free and ready in 15 days.",
};

export default function MernStackDevelopersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated MERN Stack Developers"
        highlight="Fast, Scalable & Future-Ready"
        subtitle="Looking for developers who can handle your full product stack — from frontend to backend to deployment? Avaantra Global helps you hire experienced MERN stack developers skilled in MongoDB, Express, React, and Node.js — so you can build, scale, and ship faster."
        primaryCta="Hire MERN Developers in 15 Days"
        secondaryCta="See How Our MERN Experts Deliver"
        uspList={[
          "Experienced MERN stack developers for full-stack web applications",
          "Deep expertise in MongoDB, Express, React, and Node.js",
          "Developers ready to start within 7–15 days",
          "Full ownership from frontend to backend",
          "NDA-backed engagement with complete IP protection",
          "Transparent pricing, sprint tracking, and reporting",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "2–3X", label: "Faster Development" },
          { value: "40–50%", label: "Cost Savings" },
          { value: "100%", label: "Project Visibility" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem Businesses Face"
        subheading="Every fast-growing company hits the same wall — great product ideas, but limited engineering bandwidth."
        problems={[
          {
            text: "Frontend and backend developers are hired separately, slowing delivery.",
          },
          { text: "In-house hiring takes months and drains your budget." },
          { text: "Freelancers disappear mid-project." },
          { text: "Outsourcing firms lack transparency and accountability." },
        ]}
        conclusionTitle="You don’t need more developers."
        conclusionText="You need MERN stack experts who own the full development cycle and deliver quality at startup speed. That’s where Avaantra Global comes in. We provide pre-vetted, high-performing MERN developers who deliver full-stack excellence — with zero hiring risk."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: Build Full-Stack Products That Scale — Without Hiring Headaches"
        subheading="We help SaaS, B2B, and enterprise clients hire dedicated MERN stack developers within 15 days — technically strong, business-aware, and outcome-focused."
        promises={[
          { text: "React, Node.js, Express, and MongoDB experts" },
          { text: "Full ownership from concept to launch" },
          { text: "Managed onboarding, sprints, and daily reporting" },
          { text: "NDA-backed contracts with full IP protection" },
          { text: "Scale your team up or down anytime" },
        ]}
        outcomes={[
          { value: "2–3X", label: "Faster Development" },
          { value: "40–50%", label: "Cost Savings" },
          { value: "Seamless", label: "Front-to-Back Integration" },
          { value: "Complete", label: "Project Visibility" },
        ]}
      />
      <OurExpertise
        heading="Our MERN Stack Development Expertise"
        subheading="Our developers specialize in building high-performance, cross-platform, and scalable applications — from MVPs to enterprise-grade systems."
        items={[
          {
            title: "Frontend (React.js)",
            description:
              "Modern, responsive, and fast user interfaces designed to convert and scale.",
            toolsTitle: "We Build With",
            tools: [
              "React.js",
              "Next.js",
              "Gatsby.js",
              "Redux",
              "MobX",
              "Zustand",
              "Tailwind CSS",
              "Bootstrap",
              "Material UI",
              "Single Page Applications (SPA)",
              "Progressive Web Apps (PWA)",
            ],
            outcome:
              "Frontends that load fast, look great, and convert better.",
          },
          {
            title: "Backend (Node.js + Express.js)",
            description:
              "Powerful, secure, and efficient backend systems built for scale.",
            toolsTitle: "Our Expertise",
            tools: [
              "RESTful APIs",
              "GraphQL APIs",
              "JWT Authentication",
              "OAuth",
              "Socket.IO",
              "Microservices Architecture",
              "Serverless Setup",
            ],
            outcome: "Scalable backend performance with high reliability.",
          },
          {
            title: "Database (MongoDB)",
            description:
              "Flexible, high-speed data storage optimized for growing products.",
            toolsTitle: "Expertise Includes",
            tools: [
              "MongoDB Atlas",
              "Mongoose ORM",
              "Data Modeling",
              "Query Optimization",
              "Aggregation Pipelines",
              "Backup & Replication",
              "Monitoring",
            ],
            outcome:
              "High-performance data management for fast-growing applications.",
          },
          {
            title: "Cloud, CI/CD & DevOps",
            description:
              "Automated deployments and infrastructure built for continuous delivery.",
            toolsTitle: "Tools We Use",
            tools: [
              "AWS",
              "Azure",
              "Google Cloud Platform",
              "Docker",
              "Kubernetes",
              "Jenkins",
              "GitHub Actions",
              "CI/CD Pipelines",
              "Version Control",
              "QA Automation",
            ],
            outcome:
              "Continuous delivery, zero downtime, and faster go-to-market.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our MERN stack developers build scalable solutions across diverse industries."
        industries={[
          {
            icon: "🧠",
            title: "SaaS & B2B Products",
            description:
              "Scalable SaaS platforms and internal tools built for growth.",
          },
          {
            icon: "💳",
            title: "FinTech & Banking Apps",
            description:
              "Secure, compliant systems for payments and financial workflows.",
          },
          {
            icon: "🏥",
            title: "HealthTech Platforms",
            description:
              "Reliable platforms with strong data protection and compliance.",
          },
          {
            icon: "🎓",
            title: "EdTech & LMS Systems",
            description:
              "Interactive learning platforms designed for performance and scale.",
          },
          {
            icon: "🛒",
            title: "Retail & E-commerce",
            description:
              "High-performance commerce platforms with real-time data handling.",
          },
          {
            icon: "⚙️",
            title: "Marketing & Automation Tools",
            description:
              "Data-driven platforms supporting automation and analytics.",
          },
        ]}
        outcome="Industry-focused teams who build for performance, compliance, and scale."
      />
      <WhyAvaantra
        heading="Why Hire MERN Stack Developers from Avaantra Global"
        subheading="Because we deliver end-to-end ownership, speed, and accountability — not just code."
        advantages={[
          { text: "5–8 years of hands-on MERN stack experience" },
          { text: "Sprint-based agile execution with clear milestones" },
          { text: "Code reviews and QA in every development cycle" },
          {
            text: "Dedicated Project Manager available for communication (optional)",
          },
          {
            text: "Flexible engagement models — full-time, part-time, or project-based",
          },
          { text: "100% IP ownership and full source code control" },
        ]}
        closingLine="We don’t just extend your team — we accelerate your development velocity."
      />
      <HiringProcess
        heading="Our Hiring Process: Simple, Fast, Transparent"
        subheading="A frictionless process to help you onboard reliable MERN developers without delays."
        steps={[
          {
            step: "1",
            title: "Share Your Requirement",
            process:
              "Define your tech stack, team size, and delivery timeline.",
            benefit: "Targeted and quick matchmaking",
          },
          {
            step: "2",
            title: "Get Pre-Vetted Profiles",
            process:
              "Receive 3–5 qualified MERN developer profiles within 48 hours.",
            benefit: "Save weeks of screening effort",
          },
          {
            step: "3",
            title: "Interview & Select",
            process:
              "Evaluate technical skills, communication, and culture fit.",
            benefit: "You decide who joins your team",
          },
          {
            step: "4",
            title: "Onboard & Integrate",
            process:
              "Developers integrate into your tools and processes seamlessly.",
            benefit: "Zero setup hassle",
          },
          {
            step: "5",
            title: "Track, Manage & Scale",
            process:
              "Real-time dashboards, sprint updates, and performance tracking.",
            benefit: "Complete visibility and control",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Choose an engagement model that matches your delivery goals and growth plans."
        models={[
          {
            title: "Dedicated MERN Developer",
            bestFor: "Long-term projects",
            howItWorks:
              "A full-time MERN developer working directly under your direction.",
            outcome: "Predictable, high-quality delivery",
          },
          {
            title: "Managed Agile Pod",
            bestFor: "Product builds requiring multiple skills",
            howItWorks:
              "An Avaantra-managed delivery pod handling end-to-end execution.",
            outcome: "2–3X faster project completion",
          },
          {
            title: "Project-Based Engagement",
            bestFor: "Short-term or fixed-scope builds",
            howItWorks:
              "Complete delivery handled by Avaantra under fixed terms.",
            outcome: "Fixed timeline with zero risk",
          },
          {
            title: "Hybrid Model",
            bestFor: "Continuous development cycles",
            howItWorks:
              "Combination of dedicated developers and managed delivery.",
            outcome: "Flexibility with long-term stability",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Teams"
        subheading="A clear comparison to help you choose the most reliable MERN hiring model."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "4–6 weeks",
            inHouse: "2–3 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Moderate",
            inHouse: "High",
            avaantra: "Up to 50% savings",
          },
          {
            aspect: "Delivery Speed",
            freelancer: "Inconsistent",
            inHouse: "Predictable",
            avaantra: "2–3X faster",
          },
          {
            aspect: "Accountability",
            freelancer: "Low",
            inHouse: "Medium",
            avaantra: "High + Managed QA",
          },
          {
            aspect: "IP Ownership",
            freelancer: "Risky",
            inHouse: "Yes",
            avaantra: "100% Yours",
          },
          {
            aspect: "Scalability",
            freelancer: "Limited",
            inHouse: "Slow",
            avaantra: "Instant + Flexible",
          },
        ]}
      />
      <SecurityIP
        heading="Security & IP Protection"
        subheading="Your product, data, and intellectual property are 100% safe with us."
        points={[
          { text: "NDA and contracts signed before onboarding" },
          { text: "SOC2 and GDPR-compliant systems" },
          {
            text: "Full source code and repository ownership always stays with you",
          },
          { text: "Encrypted communication channels and secure server access" },
        ]}
        closingLine="You own the product. We just help you build it faster."
      />
      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "We hired 4 MERN developers from Avaantra — they felt like our in-house team from day one.",
            name: "CTO",
            role: "SaaS Platform",
            location: "UK",
          },
          {
            quote:
              "Avaantra’s MERN developers are highly skilled, proactive, and deliver fast.",
            name: "Founder",
            role: "FinTech Startup",
            location: "India",
          },
          {
            quote:
              "They built our entire platform end-to-end — transparent, agile, and dependable.",
            name: "CEO",
            role: "HealthTech Company",
            location: "UAE",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: Building a SaaS Platform with MERN Stack"
        client="B2B SaaS Startup (Singapore)"
        challenge="Needed to scale an MVP into a full SaaS product within a tight 3-month timeline."
        solution="Avaantra deployed a dedicated 6-member MERN stack team including React, Node.js, MongoDB, QA, and a Project Manager to deliver the product end-to-end."
        metrics={[
          { value: "12 Weeks", label: "Full SaaS Product Built" },
          { value: "45%", label: "Faster Delivery vs Internal Timeline" },
          { value: "2.8X", label: "Faster Customer Onboarding" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire MERN Stack Developers"
        faqs={[
          {
            question: "What projects are best suited for MERN stack?",
            answer:
              "SaaS applications, dashboards, analytics tools, e-commerce platforms, and online marketplaces.",
          },
          {
            question: "How soon can I hire a MERN developer?",
            answer:
              "Typically within 7–15 business days after your requirements are finalized.",
          },
          {
            question: "Can I interview and test candidates myself?",
            answer:
              "Absolutely. You have full control to interview, test, and approve developers before onboarding.",
          },
          {
            question:
              "Can MERN developers work with other stacks like Python or PHP?",
            answer:
              "Yes. Our full-stack engineers can integrate MERN frontends with Python, PHP, or other backend systems.",
          },
          {
            question: "What if I’m not happy with a developer?",
            answer:
              "We’ll replace the developer within 15 days at no additional cost.",
          },
          {
            question: "Do I get IP ownership?",
            answer:
              "Yes. You retain 100% ownership of all source code, repositories, and digital assets.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because the MERN stack delivers speed, flexibility, and scalability — and Avaantra Global gives you the team that knows how to use it properly.",
          "You get one team, one stack, and one predictable delivery system instead of juggling multiple vendors or skill sets.",
          "We help you design, build, and scale modern products at startup speed with enterprise-level reliability.",
        ]}
        highlight="End-to-end ownership, faster execution, and zero hiring friction."
      />
      <FinalCTA
        heading="Hire Dedicated MERN Stack Developers in 15 Days — Build Modern Web Apps That Scale."
        subheading="Launch faster, scale confidently, and stay in control with experienced MERN stack engineers."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
