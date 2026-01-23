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
    "Hire Java Developers | Spring Boot, Microservices & Enterprise Experts | Avaantra Global",
  description:
    "Hire dedicated Java developers to build secure, scalable, and high-performance applications. Avaantra Global offers pre-vetted Java experts for startups, SaaS, and enterprises — ready to start in 15 days.",
};

export default function JavaDevelopersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated Java Developers"
        highlight="Enterprise Performance, Delivered Fast"
        subtitle="From SaaS to FinTech to enterprise systems, Java remains the world’s most trusted technology for scalable applications. Avaantra Global helps you hire pre-vetted Java developers who build high-performing, reliable, and future-ready solutions."
        primaryCta="Hire Java Developers in 15 Days"
        secondaryCta="See How Our Java Experts Deliver"
        uspList={[
          "Java-certified developers with Spring, Hibernate, and microservices expertise",
          "Onboard in 7–15 days with zero hiring delays",
          "40–50% cost savings compared to in-house teams",
          "Agile, sprint-based delivery with full visibility",
          "100% IP and source code ownership",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "2–3X", label: "Faster Feature Delivery" },
          { value: "99%", label: "Stability & Uptime" },
          { value: "35–45%", label: "Lower Cost" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem"
        subheading="Most teams struggle to find experienced Java engineers who understand business-scale systems."
        problems={[
          { text: "In-house hiring takes months and slows momentum." },
          { text: "Freelancers lack enterprise-grade reliability." },
          { text: "Project delays quickly turn into cost overruns." },
          { text: "Maintenance and scalability issues keep piling up." },
        ]}
        conclusionTitle="You need dependable Java engineers."
        conclusionText="Developers who understand scalability, stability, and compliance — not just syntax. That’s where Avaantra Global comes in."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: Reliable Java Talent for Predictable Delivery"
        subheading="We help startups and enterprises hire full-time Java developers in just 7–15 days — without hiring risk or long-term overhead."
        promises={[
          { text: "Spring Boot, Hibernate, and microservices specialists" },
          { text: "Scalable, enterprise-grade backend architectures" },
          { text: "Managed onboarding and delivery reporting" },
          { text: "Full IP protection with complete transparency" },
          {
            text: "Enterprise-grade security, compliance, and long-term maintainability",
          },
        ]}
        outcomes={[
          { value: "2–3X", label: "Faster Feature Delivery" },
          { value: "99%", label: "Stability & Uptime" },
          { value: "35–45%", label: "Reduced Development Cost" },
          { value: "0%", label: "Vendor Lock-In" },
        ]}
      />
      <OurExpertise
        heading="Our Java Development Expertise"
        subheading="We design, build, modernize, and scale Java applications that power mission-critical business systems."
        items={[
          {
            title: "Core Java & Enterprise Backend Architecture",
            description:
              "Strong, future-proof backend systems built on modern Java standards and enterprise design principles.",
            toolsTitle: "Core Stack",
            tools: [
              "Java 8+",
              "Spring Framework",
              "Spring Boot",
              "Hibernate",
              "JPA",
              "REST APIs",
              "SOAP Services",
              "GraphQL APIs",
              "Monolithic to Microservices Migration",
              "Docker",
              "Kubernetes",
            ],
            outcome:
              "Highly stable, modular backend architectures built for long-term scalability.",
          },
          {
            title: "Microservices, Messaging & Distributed Systems",
            description:
              "Designing distributed systems that scale horizontally and remain resilient under load.",
            toolsTitle: "Messaging & Async Processing",
            tools: [
              "Apache Kafka",
              "RabbitMQ",
              "Redis",
              "Event-Driven Architecture",
              "Service Discovery",
              "API Gateways",
              "Circuit Breaker Patterns",
            ],
            outcome:
              "Fault-tolerant systems with high throughput and minimal downtime.",
          },
          {
            title: "Frameworks, Tooling & Automated Testing",
            description:
              "Production-grade tooling and testing practices to ensure clean, maintainable code.",
            toolsTitle: "Frameworks & Tools",
            tools: [
              "Maven",
              "Gradle",
              "Jenkins",
              "Git",
              "JUnit",
              "Mockito",
              "Selenium",
              "Test Containers",
              "CI-Based Test Automation",
            ],
            outcome:
              "Lower defect rates, faster releases, and predictable quality.",
          },
          {
            title: "Cloud, CI/CD & DevOps Automation",
            description:
              "Cloud-native Java deployments with full automation and observability.",
            toolsTitle: "Cloud & Deployment",
            tools: [
              "AWS",
              "Azure",
              "Google Cloud Platform",
              "CI/CD with Jenkins",
              "GitHub Actions",
              "Infrastructure as Code",
              "Blue-Green & Canary Deployments",
            ],
            outcome:
              "Faster releases, safer deployments, and reduced operational risk.",
          },
          {
            title: "Security, Performance & Legacy Modernization",
            description:
              "Enterprise-grade security, performance tuning, and modernization of legacy Java systems.",
            toolsTitle: "Security & Optimization",
            tools: [
              "Spring Security",
              "OAuth2",
              "JWT",
              "Role-Based Access Control (RBAC)",
              "Performance Profiling",
              "JVM Tuning",
              "Legacy Java Application Modernization",
            ],
            outcome:
              "Secure, compliant, and high-performing systems ready for the future.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our Java developers deliver business-critical systems across industries where reliability, security, and scale are non-negotiable."
        industries={[
          {
            icon: "💳",
            title: "FinTech & Banking",
            description:
              "Secure transaction processing, payment gateways, risk engines, and high-throughput financial APIs.",
          },
          {
            icon: "🚀",
            title: "SaaS & B2B Platforms",
            description:
              "Scalable, multi-tenant SaaS platforms built on Java microservices for rapid growth.",
          },
          {
            icon: "🏥",
            title: "Healthcare & HealthTech",
            description:
              "HIPAA-ready, compliant systems handling sensitive medical data and complex workflows.",
          },
          {
            icon: "🛒",
            title: "E-commerce & Marketplaces",
            description:
              "High-performance order management, inventory systems, and payment processing engines.",
          },
          {
            icon: "🏭",
            title: "Enterprise & Manufacturing",
            description:
              "ERP integrations, internal enterprise tools, and large-scale operational platforms.",
          },
          {
            icon: "📊",
            title: "Data-Intensive & Analytics Systems",
            description:
              "Java-based analytics engines, reporting platforms, and high-volume data pipelines.",
          },
        ]}
        outcome="Business-focused Java solutions optimized for uptime, compliance, performance, and long-term maintainability."
      />
      <WhyAvaantra
        heading="Why Hire Java Developers from Avaantra Global"
        subheading="Because enterprise Java development demands experience, discipline, and accountability — not experiments."
        advantages={[
          {
            text: "5–10 years average experience in enterprise Java development",
          },
          {
            text: "Deep expertise in Spring Boot, microservices, and distributed systems",
          },
          { text: "Agile sprint execution with measurable delivery metrics" },
          { text: "Dedicated Project Manager and QA support (optional)" },
          {
            text: "Proven experience with legacy modernization and system scaling",
          },
          { text: "100% IP ownership with full source code transparency" },
        ]}
        closingLine="We don’t just supply Java developers — we deliver enterprise-grade engineering reliability."
      />

      <HiringProcess
        heading="Our Hiring Process"
        subheading="A streamlined, enterprise-ready hiring process designed for speed, accuracy, and control."
        steps={[
          {
            step: "1",
            title: "Share Your Requirements",
            process:
              "Define your Java tech stack, project goals, team size, and delivery expectations.",
            benefit: "Skill-matched Java profiles delivered within 48 hours",
          },
          {
            step: "2",
            title: "Review & Interview Candidates",
            process:
              "Evaluate technical depth, system design skills, and communication ability.",
            benefit:
              "You choose developers who fit your architecture and culture",
          },
          {
            step: "3",
            title: "Onboard & Integrate",
            process:
              "Selected developers join your repositories, tools, and workflows.",
            benefit: "Fast onboarding with zero operational friction",
          },
          {
            step: "4",
            title: "Sprint-Based Reporting",
            process:
              "Agile sprints with delivery tracking, KPIs, and regular updates.",
            benefit:
              "Full transparency, accountability, and predictable output",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Flexible engagement options designed for enterprise-scale Java development."
        models={[
          {
            title: "Dedicated Java Developer",
            bestFor: "Long-term enterprise development",
            howItWorks:
              "A full-time Java developer working exclusively under your direction.",
            outcome: "Reliable, continuous delivery with deep system ownership",
          },
          {
            title: "Managed Agile Pod",
            bestFor: "Multi-skill, complex projects",
            howItWorks:
              "Avaantra manages a cross-functional pod including Java devs, QA, and DevOps.",
            outcome: "2–3X faster delivery with reduced management overhead",
          },
          {
            title: "Project-Based",
            bestFor: "Fixed-scope enterprise builds",
            howItWorks:
              "End-to-end delivery under clearly defined scope, timelines, and outcomes.",
            outcome: "Low risk execution with on-time delivery",
          },
          {
            title: "Hybrid Model",
            bestFor: "Ongoing maintenance plus new feature development",
            howItWorks:
              "Combination of dedicated developers and managed delivery support.",
            outcome: "Flexibility, scalability, and long-term cost control",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Teams"
        subheading="A practical comparison to help you choose the right Java hiring model."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "4–6 weeks",
            inHouse: "2–3 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "Enterprise Java Expertise",
            freelancer: "Limited",
            inHouse: "Good",
            avaantra: "Deep & Proven",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Medium",
            inHouse: "High",
            avaantra: "35–45% Savings",
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
        subheading="Your enterprise systems, data, and intellectual property are fully protected."
        points={[
          { text: "NDA and legal contracts signed before onboarding" },
          { text: "100% source code and repository ownership stays with you" },
          { text: "Secure access control and encrypted communication" },
          {
            text: "Compliance-ready development practices (SOC2 / GDPR aligned)",
          },
        ]}
        closingLine="Your architecture, data, and code remain yours — always."
      />

      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s Java developers helped us modernize our legacy system three times faster than expected.",
            name: "CTO",
            role: "FinTech Startup",
            location: "Singapore",
          },
          {
            quote:
              "Their developers feel like our in-house team — highly reliable and consistently high quality.",
            name: "Engineering Lead",
            role: "SaaS Platform",
            location: "UK",
          },
          {
            quote:
              "Avaantra’s Java team handled complex microservices migration with zero downtime. Their architecture decisions saved us months of rework.",
            name: "Head of Engineering",
            role: "Enterprise Software Company",
            location: "Germany",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: Migrating Enterprise Systems to Microservices"
        client="Global SaaS Product"
        challenge="Legacy monolithic architecture caused slow release cycles and limited scalability."
        solution="Avaantra deployed a dedicated team of 4 Java developers using Spring Boot, Docker, and Kafka to re-architect the system into microservices."
        metrics={[
          { value: "60%", label: "Faster Release Cycles" },
          { value: "35%", label: "Performance Improvement" },
          { value: "100%", label: "Seamless Migration to Microservices" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire Java Developers"
        faqs={[
          {
            question: "How soon can I hire Java developers?",
            answer:
              "Typically within 7–15 business days after finalizing your requirements.",
          },
          {
            question: "Can I interview developers before onboarding?",
            answer:
              "Absolutely. You interview, evaluate, and approve developers before they join your team.",
          },
          {
            question: "Do you support time-zone overlap?",
            answer:
              "Yes. Our Java developers work with IST, GMT, EST, and PST overlap hours.",
          },
          {
            question: "What about IP and code security?",
            answer:
              "We sign NDAs before onboarding, provide private repository access, and ensure 100% IP and source code ownership stays with you.",
          },
          {
            question: "Do you support legacy Java modernization or upgrades?",
            answer:
              "Yes. We modernize legacy Java applications, migrate monoliths to microservices, upgrade Java versions, and refactor codebases for performance and maintainability.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because Java powers the enterprise world — and enterprise systems demand reliability, security, and scale.",
          "Avaantra delivers experienced Java engineers who understand complex architectures, long-term maintainability, and business-critical performance.",
          "You get predictable delivery, clean ownership, and systems that scale without operational chaos.",
        ]}
        highlight="Enterprise-grade Java delivery without enterprise hiring delays."
      />
      <FinalCTA
        heading="Hire Certified Java Developers in 15 Days — Build with Confidence."
        subheading="Scale faster with experienced Java engineers who understand enterprise systems end to end."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
