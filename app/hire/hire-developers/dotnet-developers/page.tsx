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
    "Hire Dedicated .NET Developers | ASP.NET & C# Experts | Avaantra Global",
  description:
    "Hire pre-vetted .NET developers to build scalable, secure, and high-performance applications. Avaantra Global offers full-time .NET experts for startups, SaaS, and enterprises — risk-free.",
};

export default function DotNetDevelopersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated .NET Developers"
        highlight="Build Scalable & Secure Applications Fast"
        subtitle="Looking for experienced .NET developers who can deliver enterprise-grade software on time? Avaantra Global provides pre-vetted ASP.NET, C#, and .NET Core experts who work as part of your team — 100% dedicated, managed, and scalable on demand."
        primaryCta="Hire Your .NET Team in 15 Days"
        secondaryCta="See How Our .NET Developers Deliver"
        uspList={[
          "Mid to senior .NET developers (ASP.NET, C#, .NET Core)",
          "Start within 7–15 days — no hiring delays",
          "100% dedicated developers, no resource sharing",
          "Managed onboarding and daily reporting",
          "NDA, full IP protection, and transparent pricing",
          "Enterprise-grade engineering for startups to enterprises",
        ]}
        stats={[
          { value: "7–15 Days", label: "Team Onboarding" },
          { value: "2–3X", label: "Faster Delivery" },
          { value: "40–50%", label: "Lower Cost" },
          { value: "99%", label: "On-Time Delivery" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Challenge Businesses Face"
        subheading="Finding the right .NET talent isn’t easy."
        problems={[
          { text: "In-house hiring is expensive and painfully slow." },
          {
            text: "Freelancers lack accountability and long-term scalability.",
          },
          { text: "Most outsourcing firms prioritize volume over quality." },
        ]}
        conclusionTitle="You need reliable .NET engineers — not hiring chaos."
        conclusionText="You need trusted .NET developers who deliver speed, stability, and reliability — without increasing your overhead or management load. That’s exactly what Avaantra Global provides: dedicated .NET developers who deliver predictable outcomes."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: Build Stronger, Scale Faster — Without Hiring Risk"
        subheading="We help startups, SaaS platforms, and enterprises hire full-time .NET developers within 15 days — equipped with deep technical expertise, agile experience, and real-world delivery discipline."
        promises={[
          { text: "Hire mid to senior .NET developers" },
          { text: "Start within 7–15 days" },
          { text: "Managed onboarding and daily reporting" },
          { text: "100% dedicated developers — no resource sharing" },
          { text: "NDA, full IP protection, and transparent pricing" },
        ]}
        outcomes={[
          { value: "2–3X", label: "Faster Delivery" },
          { value: "40–50%", label: "Lower Development Cost" },
          { value: "99%", label: "On-Time Delivery Rate" },
          { value: "Seamless", label: "Team Integration" },
        ]}
      />
      <OurExpertise
        heading="Our .NET Development Expertise"
        subheading="Our engineers bring a deep understanding of the Microsoft ecosystem — helping you build secure, scalable, and high-performance solutions across web, mobile, and enterprise platforms."
        items={[
          {
            title: "Core .NET Technologies",
            description:
              "Strong foundations across the full .NET stack for building reliable, maintainable, and enterprise-ready software.",
            toolsTitle: "Core Stack",
            tools: [
              "ASP.NET",
              "ASP.NET MVC",
              ".NET Core",
              "C#",
              "VB.NET",
              "Entity Framework",
              "LINQ",
              "ADO.NET",
              "WCF",
              "WPF",
              "Web API",
              "REST Integrations",
              "SOAP Integrations",
            ],
            outcome:
              "Stable, secure, and high-performing applications built on proven Microsoft technologies.",
          },
          {
            title: "Cloud & Infrastructure",
            description:
              "Cloud-enabled .NET solutions designed for scalability, reliability, and modern deployment workflows.",
            toolsTitle: "Cloud & Infra",
            tools: [
              "Azure App Services",
              "Azure DevOps",
              "AWS Lambda",
              "AWS EC2",
              "Docker",
              "Kubernetes",
              "Jenkins",
              "CI/CD Pipelines",
            ],
            outcome:
              "Cloud-ready systems with efficient deployments and scalable infrastructure.",
          },
          {
            title: "Database & Backend Engineering",
            description:
              "Robust backend systems with optimized data access, performance tuning, and secure integrations.",
            toolsTitle: "Databases & Backend",
            tools: [
              "SQL Server",
              "MySQL",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Cosmos DB",
              "API Development",
              "API Integration",
            ],
            outcome:
              "Reliable backend architectures built for performance, scalability, and data integrity.",
          },
          {
            title: "Frontend Compatibility",
            description:
              "Seamless integration with modern frontend frameworks to deliver responsive and intuitive user experiences.",
            toolsTitle: "Frontend Tech",
            tools: [
              "React.js",
              "Angular",
              "Vue.js",
              "Bootstrap",
              "Blazor",
              "TypeScript",
            ],
            outcome:
              "Smooth frontend-backend alignment with modern, user-friendly interfaces.",
          },
          {
            title: "DevOps & Automation",
            description:
              "Automation-driven delivery pipelines that reduce risk and accelerate time to market.",
            toolsTitle: "DevOps Stack",
            tools: [
              "Azure Pipelines",
              "Terraform",
              "GitLab CI",
              "Jenkins",
              "Docker",
              "Kubernetes",
              "Continuous Testing",
              "Continuous Deployment",
            ],
            outcome:
              "Predictable releases, faster deployments, and production-ready systems.",
          },
        ]}
      />

      <IndustriesWeServe
        heading="What You Can Build with Our .NET Developers"
        subheading="Our teams support a wide range of product goals and business models using enterprise-grade .NET engineering."
        industries={[
          {
            icon: "🚀",
            title: "SaaS Applications",
            description:
              "Scalable, multi-tenant SaaS platforms built with secure .NET backends and cloud-ready architectures.",
          },
          {
            icon: "🏢",
            title: "Web Portals & ERPs",
            description:
              "Internal and customer-facing portals, ERP systems, and workflow platforms tailored to your business processes.",
          },
          {
            icon: "🔌",
            title: "API-Driven Architectures",
            description:
              "Robust REST and SOAP APIs powering web, mobile, and third-party integrations at scale.",
          },
          {
            icon: "💼",
            title: "CRM & Billing Systems",
            description:
              "Custom CRM, invoicing, and billing platforms with secure data handling and automation.",
          },
          {
            icon: "🏭",
            title: "Enterprise Software",
            description:
              "Large-scale enterprise applications built for performance, compliance, and long-term maintainability.",
          },
          {
            icon: "🛒",
            title: "E-commerce Platforms",
            description:
              "High-performance commerce platforms with secure payments, inventory, and order management.",
          },
          {
            icon: "☁️",
            title: "Cloud-Native Microservices",
            description:
              "Modern microservices-based systems designed for scalability, resilience, and rapid iteration.",
          },
        ]}
        outcome="Enterprise-grade scalability with startup-level agility."
      />
      <WhyAvaantra
        heading="Why Hire .NET Developers from Avaantra Global"
        subheading="We combine Microsoft-certified talent, agile systems, and delivery excellence to help you build fast and scale confidently."
        advantages={[
          { text: "5–10 years average experience across .NET technologies" },
          { text: "Agile, sprint-based execution model" },
          { text: "Strict code quality reviews and peer validation" },
          { text: "Dedicated Project Manager (optional)" },
          { text: "Full transparency via dashboards and reports" },
          { text: "100% IP ownership and NDA-backed engagement" },
        ]}
        closingLine="You focus on innovation. We handle delivery, performance, and quality."
      />
      <HiringProcess
        heading="Our Hiring Process"
        subheading="We make hiring your .NET team fast, frictionless, and fully transparent."
        steps={[
          {
            step: "1",
            title: "Define Your Need",
            process:
              "Share your project scope or resource requirement with our team.",
            benefit: "Clear skill mapping and resource shortlist",
          },
          {
            step: "2",
            title: "Get Pre-Vetted Profiles",
            process:
              "Within 48 hours, receive 3–5 shortlisted .NET developer profiles.",
            benefit: "Technical and communication screening already done",
          },
          {
            step: "3",
            title: "Interview & Approve",
            process: "Conduct your own technical and cultural interviews.",
            benefit: "Full control over developer selection",
          },
          {
            step: "4",
            title: "Onboard & Integrate",
            process: "Developer joins your team within 7–15 days.",
            benefit: "Setup in your preferred tools like Slack, Jira, and Git",
          },
          {
            step: "5",
            title: "Track, Manage & Deliver",
            process: "Daily stand-ups, sprint tracking, and weekly reports.",
            benefit: "Complete visibility and delivery control",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Choose a flexible engagement model that aligns with your delivery goals, timeline, and scale."
        models={[
          {
            title: "Dedicated .NET Developer",
            bestFor: "Long-term development",
            howItWorks:
              "A full-time .NET developer working exclusively under your direction.",
            outcome: "Predictable output and consistent delivery",
          },
          {
            title: "Managed Agile Pod",
            bestFor: "Multi-skill projects",
            howItWorks:
              "An Avaantra-managed, cross-functional agile team handling end-to-end delivery.",
            outcome: "2–3X faster delivery velocity",
          },
          {
            title: "Project-Based Engagement",
            bestFor: "Fixed-scope builds",
            howItWorks:
              "Complete project delivery handled by Avaantra with defined scope and timelines.",
            outcome: "Fast, low-risk execution",
          },
          {
            title: "Hybrid Model",
            bestFor: "Ongoing + project mix",
            howItWorks:
              "Combination of dedicated developers and managed services.",
            outcome: "Flexibility with full control",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Teams"
        subheading="A clear comparison to help you choose the most reliable and scalable engagement model."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "2–3 months",
            inHouse: "4–6 weeks",
            avaantra: "7–15 days",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Medium",
            inHouse: "High",
            avaantra: "Up to 50% savings",
          },
          {
            aspect: "Accountability",
            freelancer: "Low",
            inHouse: "High",
            avaantra: "High + Managed",
          },
          {
            aspect: "Scalability",
            freelancer: "Low",
            inHouse: "Low",
            avaantra: "Flexible + On-demand",
          },
          {
            aspect: "IP & NDA Protection",
            freelancer: "Risky",
            inHouse: "Safe",
            avaantra: "100% Secure",
          },
          {
            aspect: "Project Manager",
            freelancer: "No",
            inHouse: "Yes",
            avaantra: "Included (Optional)",
          },
        ]}
      />
      <SecurityIP
        heading="Security & IP Protection"
        subheading="Your ideas, data, and intellectual property are 100% safe with us."
        points={[
          { text: "NDAs and full legal compliance from day one" },
          { text: "Complete source code and IP ownership" },
          { text: "GDPR and SOC2-compliant data security standards" },
          {
            text: "Encrypted access, role-based controls, and continuous monitoring",
          },
        ]}
        closingLine="You own everything we build. Always."
      />
      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "We hired 3 .NET developers from Avaantra and doubled our delivery speed in just 2 months.",
            name: "CTO",
            role: "FinTech Startup",
            location: "India",
          },
          {
            quote:
              "Their .NET team works like our internal department — clean code, solid QA, and great communication.",
            name: "Engineering Head",
            role: "SaaS Platform",
            location: "UK",
          },
          {
            quote:
              "Avaantra made remote hiring incredibly easy — transparent, fast, and dependable.",
            name: "Founder",
            role: "Digital Agency",
            location: "UAE",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: Scaling Enterprise .NET Development"
        client="B2B SaaS Platform (Singapore)"
        challenge="Needed to migrate a monolithic legacy .NET application to modern .NET Core without disrupting business operations."
        solution="Avaantra provided a 5-member delivery team including 2 .NET Core Developers, 1 QA Engineer, 1 DevOps Engineer, and 1 Project Manager to handle migration, optimization, and rollout."
        metrics={[
          { value: "10 Weeks", label: "Migration Timeline" },
          { value: "60%", label: "Faster App Performance" },
          { value: "35%", label: "Cost Savings vs In-House" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire .NET Developers"
        faqs={[
          {
            question: "How soon can I hire .NET developers?",
            answer:
              "Within 7–15 business days, depending on your project scope and skill requirements.",
          },
          {
            question: "Will the developers work full-time for us?",
            answer:
              "Yes. All developers are 100% dedicated to your project with no resource sharing.",
          },
          {
            question: "Can I interview the developers before selection?",
            answer:
              "Absolutely. You interview and approve every developer before onboarding.",
          },
          {
            question: "Do you offer project management support?",
            answer:
              "Yes. A dedicated Project Manager can be assigned to manage delivery, communication, and timelines.",
          },
          {
            question: "What if I’m not satisfied with the developer?",
            answer:
              "We provide a free replacement within 15 days at no additional cost.",
          },
          {
            question: "Do you work in our time zone?",
            answer:
              "Yes. Our teams support IST, GMT, EST, and PST overlap hours for smooth collaboration.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because you don’t just get .NET developers — you get a performance-driven engineering extension of your team.",
          "With Avaantra Global, you scale capacity instantly, deliver faster, and maintain full control — without the hiring headache.",
        ]}
        highlight="Your product deserves world-class developers. We make them available — on-demand, affordable, and accountable."
      />
      <FinalCTA
        heading="Hire Pre-Vetted .NET Developers in 15 Days — Start Building Smarter!"
        subheading="Build faster, scale confidently, and stay in full control with dedicated .NET experts."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
