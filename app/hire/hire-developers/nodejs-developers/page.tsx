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
    "Hire Node.js Developers | Backend, API & Microservices Experts | Avaantra Global",
  description:
    "Hire dedicated Node.js developers to build scalable backends and APIs. Avaantra Global offers pre-vetted Node.js experts for SaaS, startups, and enterprises — ready to start in 15 days.",
};

export default function NodeJsDevelopersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated Node.js Developers"
        highlight="Build Scalable, Real-Time Web Applications"
        subtitle="Need backend developers who can handle scale, speed, and security? Avaantra Global helps you hire pre-vetted Node.js experts to build APIs, web apps, and enterprise systems — all without the hiring delays or risk."
        primaryCta="Hire Node.js Developers in 15 Days"
        secondaryCta="See How Our Node.js Teams Deliver"
        uspList={[
          "Experienced Node.js backend developers for scalable systems",
          "Expertise in APIs, microservices, and real-time applications",
          "Developers ready to start in 7–15 days",
          "100% dedicated resources — no sharing",
          "NDA-backed engagement with full IP and code ownership",
          "Transparent communication and delivery reporting",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "2–3X", label: "Faster Backend Delivery" },
          { value: "40–50%", label: "Lower Cost" },
          { value: "Enterprise", label: "Grade Performance" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem Businesses Face"
        subheading="You’ve got a great product idea — but backend delivery is slow, inconsistent, or unreliable."
        problems={[
          { text: "In-house hiring takes months and costs too much." },
          {
            text: "Freelancers lack consistency, security, and accountability.",
          },
          { text: "Many agencies overpromise and underdeliver." },
          {
            text: "You lose time managing developers instead of growing the business.",
          },
        ]}
        conclusionTitle="Backend bottlenecks kill momentum."
        conclusionText="You need dedicated Node.js developers who bring stability, accountability, and real delivery power — without adding headcount. That’s where Avaantra Global helps. We provide Node.js developers who are fast, reliable, and ready to scale with your team."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: Speed, Scalability & Security — Without Hiring Hassle"
        subheading="We help startups, SaaS platforms, and agencies hire full-time Node.js developers in 7–15 days — fully managed, secure, and transparent."
        promises={[
          { text: "Node.js, Express.js, and NestJS experts" },
          { text: "Strong experience with REST, GraphQL, and microservices" },
          { text: "Cloud-native API and backend development" },
          { text: "100% dedicated developers — no resource sharing" },
          { text: "NDA-backed engagement with full IP and code ownership" },
        ]}
        outcomes={[
          { value: "2–3X", label: "Faster Backend Development" },
          { value: "40–50%", label: "Lower Cost vs In-House" },
          { value: "Enterprise", label: "Grade Performance" },
          { value: "Transparent", label: "Communication & Reporting" },
        ]}
      />
      <OurExpertise
        heading="Our Node.js Development Expertise"
        subheading="Our engineers build fast, scalable, and maintainable backends that handle millions of requests seamlessly."
        items={[
          {
            title: "Web & API Development",
            description:
              "Robust APIs and backend systems that power modern web and mobile products.",
            toolsTitle: "Expertise Includes",
            tools: [
              "RESTful API Design",
              "GraphQL APIs",
              "WebSocket APIs",
              "JWT Authentication",
              "OAuth 2.0",
              "Real-Time Data Processing",
            ],
            outcome: "Reliable, secure, and scalable backend infrastructure.",
          },
          {
            title: "Microservices & Serverless Systems",
            description:
              "Modern backend architectures designed for high-growth products.",
            toolsTitle: "We Build",
            tools: [
              "Microservices Architecture",
              "AWS Lambda",
              "Azure Functions",
              "Event-Driven Systems",
              "Dockerized Applications",
            ],
            outcome:
              "Faster releases, easier scaling, and lower infrastructure cost.",
          },
          {
            title: "Full-Stack Collaboration",
            description:
              "Seamless collaboration with frontend teams for complete product delivery.",
            toolsTitle: "Common Stacks",
            tools: [
              "MERN Stack",
              "MEAN Stack",
              "JAMStack",
              "API-First Applications",
            ],
            outcome:
              "End-to-end project delivery from frontend to backend with zero friction.",
          },
          {
            title: "Cloud, DevOps & Automation",
            description:
              "Cloud-native backend development with automated delivery pipelines.",
            toolsTitle: "We Use",
            tools: [
              "AWS",
              "Azure",
              "Google Cloud",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Jenkins",
              "GitHub Actions",
              "GitLab CI/CD",
            ],
            outcome:
              "Reliable, automated deployments and faster time-to-market.",
          },
          {
            title: "Database & Storage Expertise",
            description:
              "Efficient, scalable data management for high-performance applications.",
            toolsTitle: "We Use",
            tools: [
              "MongoDB",
              "MySQL",
              "PostgreSQL",
              "DynamoDB",
              "Redis",
              "Firebase",
              "Elasticsearch",
              "Mongoose",
              "Sequelize",
              "Prisma",
            ],
            outcome:
              "High-performance databases optimized for speed and reliability.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries That Trust Our Node.js Developers"
        subheading="Our Node.js teams have built scalable, production-ready backends across industries."
        industries={[
          {
            icon: "🧠",
            title: "SaaS & B2B Platforms",
            description:
              "Scalable backend systems designed to support multi-tenant SaaS products.",
          },
          {
            icon: "💳",
            title: "FinTech Applications",
            description:
              "Secure, compliant backends for payments, transactions, and financial workflows.",
          },
          {
            icon: "🏥",
            title: "HealthTech Systems",
            description:
              "Reliable backend architectures built with data security and compliance in mind.",
          },
          {
            icon: "🎓",
            title: "EdTech & E-learning Products",
            description:
              "Scalable platforms supporting content delivery, assessments, and analytics.",
          },
          {
            icon: "🛒",
            title: "E-commerce Platforms",
            description:
              "High-performance backends for orders, inventory, and real-time user activity.",
          },
          {
            icon: "📊",
            title: "AI & Analytics Solutions",
            description:
              "Data-intensive backend systems supporting analytics and AI-driven products.",
          },
        ]}
        outcome="Industry-tailored backend systems built for growth and compliance."
      />
      <WhyAvaantra
        heading="Why Hire Node.js Developers from Avaantra Global"
        subheading="Because we deliver speed, scale, and structure — without the complexity of hiring in-house."
        advantages={[
          { text: "5–8 years average experience in Node.js development" },
          { text: "Certified cloud and API developers" },
          { text: "Sprint-based delivery with measurable performance metrics" },
          { text: "Dedicated Project Manager and QA support (optional)" },
          { text: "AI-assisted code reviews and automated testing" },
          { text: "Full transparency through real-time dashboards" },
        ]}
        closingLine="We don’t just write code — we build the backend that drives your business forward."
      />
      <HiringProcess
        heading="Our Hiring Process: Simple, Fast & Transparent"
        subheading="A streamlined process designed to help you onboard reliable Node.js developers without delays."
        steps={[
          {
            step: "1",
            title: "Requirement Discovery",
            process:
              "Define your backend goals, preferred tech stack, and delivery expectations.",
            benefit: "Tailored Node.js developer selection",
          },
          {
            step: "2",
            title: "Profile Shortlisting",
            process:
              "Receive 3–5 pre-vetted Node.js developer profiles within 48 hours.",
            benefit: "Save time while ensuring quality",
          },
          {
            step: "3",
            title: "Interview & Approve",
            process:
              "Evaluate technical skills, communication, and cultural fit.",
            benefit: "100% control over hiring decisions",
          },
          {
            step: "4",
            title: "Onboarding & Setup",
            process: "Developer joins your tools, repositories, and workflows.",
            benefit: "Instant productivity with zero friction",
          },
          {
            step: "5",
            title: "Delivery & Reporting",
            process:
              "Agile sprints with reporting, KPIs, and progress tracking.",
            benefit: "Predictable and accountable output",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Choose a flexible engagement model that fits your backend goals, timeline, and scale."
        models={[
          {
            title: "Dedicated Node.js Developer",
            bestFor: "Long-term backend builds",
            howItWorks:
              "A full-time Node.js expert working exclusively under your direction.",
            outcome: "Predictable delivery and continuity",
          },
          {
            title: "Managed Agile Pod",
            bestFor: "Multi-role projects",
            howItWorks:
              "Avaantra manages a complete pod including developers, QA, and a PM.",
            outcome: "2–3X faster sprint velocity",
          },
          {
            title: "Project-Based",
            bestFor: "Fixed scope and budget",
            howItWorks: "End-to-end backend delivery handled by Avaantra.",
            outcome: "Fast, secure, and low-risk execution",
          },
          {
            title: "Hybrid Model",
            bestFor: "Ongoing projects",
            howItWorks:
              "Combination of dedicated developers and managed delivery.",
            outcome: "Flexibility with sustained performance",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Teams"
        subheading="Compare hiring models to see which delivers speed, reliability, and security."
        rows={[
          {
            aspect: "Hiring Speed",
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
            aspect: "Delivery Reliability",
            freelancer: "Unstable",
            inHouse: "Predictable",
            avaantra: "Highly Reliable + Managed",
          },
          {
            aspect: "Scalability",
            freelancer: "Low",
            inHouse: "Slow",
            avaantra: "Instant + Flexible",
          },
          {
            aspect: "Security / NDA",
            freelancer: "Risky",
            inHouse: "Safe",
            avaantra: "100% Protected",
          },
          {
            aspect: "Project Management",
            freelancer: "No",
            inHouse: "Partial",
            avaantra: "Included + Transparent",
          },
        ]}
      />
      <SecurityIP
        heading="Security & IP Protection"
        subheading="Your product, data, and intellectual property are fully protected."
        points={[
          { text: "NDA and legal contracts signed before onboarding" },
          { text: "Full source code and IP ownership remains with you" },
          { text: "SOC2 and GDPR-compliant systems" },
          { text: "Secure cloud access with continuous monitoring" },
        ]}
        closingLine="Your code stays yours — forever."
      />
      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s Node.js developers helped us move from MVP to scalable architecture in half the time.",
            name: "CTO",
            role: "SaaS Platform",
            location: "UK",
          },
          {
            quote:
              "Their developers understood our vision and built the API foundation for our product.",
            name: "Founder",
            role: "FinTech Startup",
            location: "India",
          },
          {
            quote:
              "We’ve worked with many outsourcing firms — none match Avaantra’s speed, quality, and transparency.",
            name: "VP Engineering",
            role: "AI Startup",
            location: "USA",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: Building a Real-Time SaaS API with Node.js"
        client="HealthTech SaaS Platform (Singapore)"
        challenge="Slow API response times and unreliable backend scalability under increasing load."
        solution="Avaantra deployed a dedicated 4-member Node.js and DevOps team within 10 days to redesign, optimize, and scale the backend architecture."
        metrics={[
          { value: "50%", label: "Faster API Performance" },
          { value: "99.9%", label: "Uptime Achieved" },
          { value: "3.2X", label: "System Scalability" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire Node.js Developers"
        faqs={[
          {
            question: "How soon can I start with a Node.js developer?",
            answer:
              "Usually within 7–15 business days after finalizing requirements.",
          },
          {
            question: "Do your Node.js developers also handle DevOps?",
            answer:
              "Yes. We can assign full-stack developers or backend + DevOps pods based on your needs.",
          },
          {
            question: "Can I hire for short-term projects?",
            answer:
              "Absolutely. We support short-term, long-term, and hybrid engagement models.",
          },
          {
            question: "What if I’m not satisfied with the developer?",
            answer:
              "We’ll replace the developer within 15 days at no additional cost.",
          },
          {
            question: "Do I get full code ownership?",
            answer:
              "Yes. You retain 100% ownership of the source code and IP rights.",
          },
          {
            question: "Do you support time zone overlaps?",
            answer:
              "Yes. Our developers align with IST, GMT, EST, or PST overlap hours.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because backend development is the foundation of your business — and it deserves more than luck.",
          "We give you ready-to-start Node.js experts who code fast, communicate clearly, and build systems that scale.",
          "With Avaantra Global, you don’t just hire developers — you build a high-performance backend that powers growth.",
        ]}
        highlight="Stable architecture, faster delivery, and zero hiring drama."
      />
      <FinalCTA
        heading="Hire Pre-Vetted Node.js Developers in 15 Days — Build Backends That Scale Effortlessly."
        subheading="Launch faster, scale confidently, and stay in control with dedicated Node.js experts."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
