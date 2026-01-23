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
    "Hire Full-Stack Developers | React, Node.js, Angular, Python Experts | Avaantra Global",
  description:
    "Hire dedicated full-stack developers to build scalable web and SaaS applications. Avaantra Global provides experienced full-stack engineers skilled in React, Node, Python, and cloud — risk-free.",
};

export default function FullStackDevelopersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated Full-Stack Developers"
        highlight="Build Smarter, Launch Faster"
        subtitle="Need developers who can build entire products — not just parts of them? Avaantra Global helps you hire pre-vetted full-stack developers who handle frontend, backend, APIs, and DevOps — so your product scales without hiring multiple teams."
        primaryCta="Hire Full-Stack Experts in 15 Days"
        secondaryCta="See How Our Full-Stack Developers Deliver"
        uspList={[
          "Experienced full-stack developers for web and SaaS products",
          "Expertise across frontend, backend, APIs, and DevOps",
          "Developers ready to start in 7–15 days",
          "100% dedicated resources — no context switching",
          "Transparent pricing with clear reporting",
          "Scale your team up or down anytime",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "2–3X", label: "Faster Releases" },
          { value: "35–50%", label: "Cost Savings" },
          { value: "End-to-End", label: "Ownership" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem Businesses Face"
        subheading="Scaling product development shouldn’t mean managing five different specialists."
        problems={[
          {
            text: "Too many moving parts between frontend and backend teams.",
          },
          {
            text: "Slow delivery caused by dependency chains and handoffs.",
          },
          {
            text: "Rising costs with every new specialist hire.",
          },
          {
            text: "Difficulty maintaining consistent quality and delivery speed.",
          },
        ]}
        conclusionTitle="You don’t need more developers."
        conclusionText="You need versatile full-stack engineers who understand your entire system — from UI to database — and deliver complete, production-ready solutions. That’s where Avaantra Global helps."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: Hire Multi-Skilled Experts Who Build End-to-End"
        subheading="We provide dedicated full-stack developers experienced in modern frontend, backend, and cloud technologies — ready to start in 7–15 days."
        promises={[
          {
            text: "React, Node.js, Angular, Vue, Python, PHP, and .NET experts",
          },
          {
            text: "End-to-end ownership — frontend, backend, APIs, and DevOps",
          },
          { text: "100% dedicated full-stack developers" },
          { text: "Transparent pricing and delivery reports" },
          { text: "Flexible scaling — add or reduce resources anytime" },
        ]}
        outcomes={[
          { value: "2–3X", label: "Faster Release Cycles" },
          { value: "35–50%", label: "Lower Cost vs In-House" },
          { value: "Consistent", label: "Code Quality" },
          { value: "Seamless", label: "Team Collaboration" },
        ]}
      />
      <OurExpertise
        heading="Our Full-Stack Development Expertise"
        subheading="Our developers combine technical versatility with a strong understanding of business goals — ideal for startups, SaaS platforms, and enterprise-grade applications."
        items={[
          {
            title: "Frontend Technologies",
            description:
              "Modern, responsive, and user-focused frontend development built for performance and scale.",
            toolsTitle: "We Use",
            tools: [
              "React.js",
              "Next.js",
              "Angular",
              "Vue.js",
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "Tailwind",
              "Bootstrap",
              "Material UI",
            ],
            outcome: "Fast, intuitive, and scalable user interfaces.",
          },
          {
            title: "Backend Technologies",
            description:
              "Secure, efficient, and API-driven backend systems designed for long-term reliability.",
            toolsTitle: "We Use",
            tools: [
              "Node.js",
              "Express",
              "NestJS",
              "Python (Django, FastAPI, Flask)",
              "PHP (Laravel, Symfony)",
              ".NET Core",
              "Java",
              "Golang",
            ],
            outcome:
              "Reliable architecture, faster response times, and future-ready APIs.",
          },
          {
            title: "Databases & Storage",
            description:
              "Data integrity, performance, and scalability for applications of any size.",
            toolsTitle: "We Use",
            tools: [
              "MySQL",
              "PostgreSQL",
              "SQL Server",
              "MongoDB",
              "DynamoDB",
              "Firebase",
              "Redis",
              "ElasticSearch",
              "Cassandra",
            ],
            outcome:
              "Stable, high-performance database management for any load.",
          },
          {
            title: "Cloud & DevOps",
            description:
              "Automated, reliable deployment pipelines for modern cloud-native applications.",
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
              "GitLab CI",
            ],
            outcome: "Smooth releases with zero-downtime deployments.",
          },
          {
            title: "Frameworks & Tools",
            description:
              "Proven full-stack frameworks and architectures for rapid, scalable development.",
            toolsTitle: "Stack Expertise",
            tools: [
              "MEAN Stack",
              "MERN Stack",
              "LAMP Stack",
              "Serverless Architecture",
              "Microservices",
            ],
            outcome:
              "End-to-end solutions that scale as fast as your business does.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries Our Full-Stack Teams Serve"
        subheading="We’ve helped 100+ clients deliver scalable, production-ready solutions across diverse industries."
        industries={[
          {
            icon: "🧠",
            title: "SaaS & B2B Platforms",
            description:
              "Scalable SaaS products and internal platforms built for performance and growth.",
          },
          {
            icon: "💳",
            title: "FinTech & Banking",
            description:
              "Secure, compliant systems for payments, financial workflows, and data processing.",
          },
          {
            icon: "🏥",
            title: "HealthTech & EdTech",
            description:
              "Reliable platforms for healthcare and education with high availability and data security.",
          },
          {
            icon: "🛒",
            title: "E-commerce & Retail",
            description:
              "High-performance commerce platforms with seamless user experience and integrations.",
          },
          {
            icon: "🤖",
            title: "AI & Automation Startups",
            description:
              "Data-driven products, automation tools, and intelligent platforms built to scale.",
          },
          {
            icon: "🧩",
            title: "Agencies & IT Consultancies",
            description:
              "Delivery support and engineering scale for agencies handling multiple client projects.",
          },
        ]}
        outcome="Industry-aware full-stack developers who think beyond code."
      />
      <WhyAvaantra
        heading="Why Hire Full-Stack Developers from Avaantra Global"
        subheading="Because we make scaling your team predictable, fast, and stress-free."
        advantages={[
          { text: "5–10 years of full-stack development experience" },
          { text: "AI-assisted QA and automated code reviews" },
          { text: "Sprint-based execution with clear deliverables" },
          { text: "Transparent daily reporting and progress tracking" },
          { text: "Dedicated Project Manager included (optional)" },
          { text: "Full IP and source code ownership" },
        ]}
        closingLine="We give you enterprise-level talent without enterprise-level complexity."
      />
      <HiringProcess
        heading="Our Hiring Process: Quick & Transparent"
        subheading="A streamlined process designed to help you onboard reliable full-stack developers without delays."
        steps={[
          {
            step: "1",
            title: "Requirement Analysis",
            process:
              "Share your project needs, goals, and preferred technology stack.",
            benefit: "Accurate skill matching",
          },
          {
            step: "2",
            title: "Profile Shortlisting",
            process:
              "Receive 3–5 pre-vetted full-stack developer profiles within 48 hours.",
            benefit: "Save weeks of hiring effort",
          },
          {
            step: "3",
            title: "Interview & Select",
            process:
              "Interview candidates and choose the best fit for your team.",
            benefit: "100% control over selection",
          },
          {
            step: "4",
            title: "Onboarding & Setup",
            process: "We handle environment setup and tool integrations.",
            benefit: "Smooth start with zero downtime",
          },
          {
            step: "5",
            title: "Delivery & Tracking",
            process:
              "Sprint reports, KPIs, and daily stand-ups ensure visibility.",
            benefit: "Full transparency and accountability",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Choose an engagement model that fits your delivery needs, timeline, and growth stage."
        models={[
          {
            title: "Dedicated Developer",
            bestFor: "Continuous feature delivery",
            howItWorks:
              "A full-time full-stack developer working directly with your team.",
            outcome: "Predictable velocity and consistent quality",
          },
          {
            title: "Managed Agile Pod",
            bestFor: "Multi-skill projects",
            howItWorks:
              "Avaantra manages delivery across frontend, backend, QA, and DevOps roles.",
            outcome: "2–3X faster sprint execution",
          },
          {
            title: "Project-Based",
            bestFor: "Short-term builds",
            howItWorks: "Fixed scope and fixed pricing with defined timelines.",
            outcome: "Fast and low-risk delivery",
          },
          {
            title: "Hybrid Model",
            bestFor: "Startups scaling post-MVP",
            howItWorks: "Blend of dedicated developers and managed delivery.",
            outcome: "Flexibility with long-term stability",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Hiring"
        subheading="A side-by-side comparison to help you choose the most reliable and scalable hiring model."
        rows={[
          {
            aspect: "Hiring Time",
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
            freelancer: "Unpredictable",
            inHouse: "Controlled",
            avaantra: "Consistent + Agile",
          },
          {
            aspect: "Scalability",
            freelancer: "Low",
            inHouse: "Slow",
            avaantra: "Instant + Flexible",
          },
          {
            aspect: "Accountability",
            freelancer: "Low",
            inHouse: "High",
            avaantra: "High + Managed",
          },
          {
            aspect: "IP & Security",
            freelancer: "Risky",
            inHouse: "Safe",
            avaantra: "100% Secure + NDA",
          },
        ]}
      />
      <SecurityIP
        heading="Security, IP & Delivery Confidence"
        subheading="We protect your ideas, code, and data like our own."
        points={[
          { text: "NDA and full legal compliance" },
          { text: "Source code and IP ownership always stays with you" },
          { text: "GDPR and SOC2-compliant data protection" },
          { text: "Encrypted communications and secure access controls" },
        ]}
        closingLine="Your code. Your product. Your success."
      />
      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s full-stack team became the engine of our SaaS platform. They deliver consistently and communicate flawlessly.",
            name: "CTO",
            role: "SaaS Startup",
            location: "UK",
          },
          {
            quote:
              "We saved 45% on development cost and launched 2 months early. Highly recommend.",
            name: "Founder",
            role: "FinTech App",
            location: "India",
          },
          {
            quote:
              "Their developers think like entrepreneurs, not just coders — exactly what startups need.",
            name: "CEO",
            role: "AI Product Company",
            location: "UAE",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: From MVP to Global Product"
        client="B2B SaaS Platform (Singapore)"
        challenge="Needed experienced full-stack developers to rapidly scale the product after MVP validation."
        solution="Avaantra provided a dedicated 4-member MERN stack team including React, Node.js, DevOps, and QA engineers to support rapid development, scaling, and quality assurance."
        metrics={[
          { value: "8 Weeks", label: "Product Launch Timeline" },
          { value: "220%", label: "User Growth in 4 Months" },
          { value: "35%", label: "Infrastructure Cost Reduction" },
        ]}
      />

      <FAQs
        heading="FAQs — Before You Hire Full-Stack Developers"
        faqs={[
          {
            question:
              "What technologies do your full-stack developers specialize in?",
            answer:
              "Our developers work across React, Node.js, Angular, Python, PHP, .NET, and modern cloud technologies.",
          },
          {
            question: "Can I interview and select developers myself?",
            answer:
              "Yes. You’ll interview, test, and approve every developer before onboarding.",
          },
          {
            question: "How do you ensure code quality?",
            answer:
              "Through peer code reviews, QA testing, and AI-assisted linting and checks.",
          },
          {
            question: "Do developers work in my time zone?",
            answer:
              "Yes. Our teams align with IST, GMT, EST, or PST overlap hours as needed.",
          },
          {
            question: "What if I need to scale mid-project?",
            answer:
              "You can scale your team anytime. Additional developers are typically added within 3–5 days.",
          },
          {
            question: "What if I’m not satisfied?",
            answer:
              "We’ll replace the developer within 15 days at no additional cost — no questions asked.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because you don’t need five developers to do one job.",
          "You need smart, versatile full-stack engineers who build faster, adapt better, and scale with you.",
          "At Avaantra Global, we combine speed, skill, and structure to help you deliver ambitious projects — predictably and profitably.",
        ]}
        highlight="Build more with fewer handoffs, less friction, and full control."
      />
      <FinalCTA
        heading="Hire Experienced Full-Stack Developers in 15 Days — Scale with Confidence."
        subheading="Build, launch, and scale faster with dedicated full-stack experts who deliver end-to-end results."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
