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
    "Hire AWS Developers | Cloud, Lambda & Infrastructure Experts | Avaantra Global",
  description:
    "Hire dedicated AWS developers and cloud engineers to build, optimize, and scale your cloud infrastructure. Certified professionals ready to start in 15 days.",
};

export default function AwsDevelopersPage() {
  return (
    <>
      <HireHero
        title="Hire Certified AWS Developers"
        highlight="Build, Automate & Scale with Confidence"
        subtitle="From startups to global enterprises, AWS powers the world’s best-performing apps. Avaantra Global helps you hire AWS-certified developers and cloud engineers to design, build, and optimize scalable cloud systems — with full security, speed, and reliability."
        primaryCta="Hire AWS Developers in 15 Days"
        secondaryCta="See How Our AWS Teams Deliver"
        uspList={[
          "Certified AWS Cloud Architects & Developers (Associate / Professional)",
          "15-day onboarding — no long hiring cycles",
          "40–60% lower infrastructure & operational cost",
          "24/7 monitoring and support options",
          "Complete IP, code, and infrastructure ownership",
          "Agile delivery with sprint-based reporting",
        ]}
        stats={[
          { value: "15 Days", label: "Onboarding" },
          { value: "99.99%", label: "Uptime" },
          { value: "40–60%", label: "Cost Reduction" },
          { value: "AWS", label: "Certified Experts" },
        ]}
      />

      <RealProblem
        heading="The Real Problem Businesses Face"
        subheading="Your business is growing — but your infrastructure isn’t keeping up."
        problems={[
          { text: "Deployment takes days, not minutes." },
          { text: "Cloud costs spiral out of control." },
          { text: "Downtime affects customer experience." },
          { text: "Your team lacks expertise for scaling." },
        ]}
        conclusionTitle="You don’t need another agency."
        conclusionText="You need dedicated engineers who understand infrastructure, automation, and cost optimization — and deliver predictable results. Avaantra Global provides pre-vetted experts who build, manage, and optimize your systems like an extension of your in-house team."
      />
      <OurPromise
        heading="Our Promise: Cloud Built for Scale, Speed & Stability"
        subheading="We help startups, SaaS companies, and enterprises hire full-time cloud developers within 15 days — fully managed, secure, and scalable on demand."
        promises={[
          { text: "AWS Certified Cloud Developers & DevOps Engineers" },
          {
            text: "Expertise across EC2, Lambda, S3, CloudFormation, ECS & more",
          },
          { text: "Automated CI/CD and cost-optimized deployment" },
          { text: "Full compliance with SOC2, GDPR, ISO standards" },
          { text: "Transparent pricing and daily reporting" },
        ]}
        outcomes={[
          { value: "3–5X", label: "Faster Deployments" },
          { value: "99.99%", label: "Uptime Reliability" },
          { value: "30–45%", label: "Cost Optimization" },
          { value: "Zero", label: "Downtime During Migration" },
        ]}
      />
      <OurExpertise
        heading="Our AWS Development Expertise"
        subheading="We cover everything from cloud architecture design to cost optimization and DevOps automation — helping you maximize performance and minimize complexity."
        items={[
          {
            title: "AWS Application Development",
            description:
              "Build cloud-native, high-performing applications designed for scale and resilience.",
            toolsTitle: "Expertise Includes",
            tools: [
              "AWS Lambda",
              "ECS",
              "Fargate",
              "API Gateway",
              "Step Functions",
              "DynamoDB",
              "RDS",
              "Aurora",
              "S3",
              "CloudFront",
              "Route 53",
            ],
            outcome:
              "Serverless, scalable, and cost-efficient applications that adapt as you grow.",
          },
          {
            title: "AWS Infrastructure Automation",
            description:
              "We automate infrastructure provisioning and deployment for reliability and consistency.",
            toolsTitle: "Tools & Tech",
            tools: [
              "CloudFormation",
              "Terraform",
              "Ansible",
              "Jenkins",
              "GitHub Actions",
              "AWS CodePipeline",
              "Elastic Beanstalk",
              "Auto Scaling Groups",
            ],
            outcome:
              "Faster, error-free deployments with minimal human intervention.",
          },
          {
            title: "Cloud Migration & Modernization",
            description:
              "Move to AWS without disrupting business operations or user experience.",
            toolsTitle: "We Handle",
            tools: [
              "Lift & Shift",
              "Hybrid Cloud",
              "Multi-Cloud",
              "RDS Migration",
              "DynamoDB",
              "Docker",
              "EKS",
            ],
            outcome: "Smooth, secure migration with zero data loss.",
          },
          {
            title: "Monitoring, Security & Compliance",
            description:
              "Stay in control of performance, security, and cloud spend.",
            toolsTitle: "Tools We Use",
            tools: [
              "CloudWatch",
              "CloudTrail",
              "ELK Stack",
              "IAM",
              "GuardDuty",
              "AWS WAF",
              "AWS Shield",
              "FinOps",
            ],
            outcome:
              "24/7 security, real-time insights, and predictable billing.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our AWS teams bring deep cloud experience across industries."
        industries={[
          {
            icon: "🧠",
            title: "SaaS & B2B Platforms",
            description:
              "Scalable SaaS architectures built for multi-tenancy, APIs, and high user loads without downtime.",
          },
          {
            icon: "💳",
            title: "FinTech & Banking",
            description:
              "Secure, compliant cloud infrastructure optimized for transaction speed and data protection (PCI-DSS ready).",
          },
          {
            icon: "🏥",
            title: "HealthTech & Telemedicine",
            description:
              "HIPAA-compliant cloud setups for patient data protection, integrations, and real-time analytics.",
          },
          {
            icon: "🛒",
            title: "E-commerce & Retail",
            description:
              "High-performance platforms with auto-scaling, inventory management, and secure payment integrations.",
          },
          {
            icon: "📚",
            title: "EdTech & Learning Systems",
            description:
              "Scalable video, content, and learning platforms with global CDN and latency optimization.",
          },
          {
            icon: "🤖",
            title: "AI & Data-Driven Startups",
            description:
              "Data pipelines, ML model deployment, and real-time analytics infrastructure built on AWS.",
          },
        ]}
        outcome="Industry-ready AWS systems tailored for security, speed, and scalability."
      />
      <WhyAvaantra
        heading="Why Hire AWS Developers from Avaantra Global"
        subheading="Because cloud success requires more than access — it requires expert execution."
        advantages={[
          { text: "AWS-certified cloud developers & architects" },
          { text: "Multi-cloud experience across AWS, Azure, and GCP" },
          { text: "AI-assisted monitoring & alerting systems" },
          { text: "24/7 operations support (optional)" },
          { text: "Sprint-based delivery with real-time dashboards" },
          { text: "Full IP, code, and infrastructure ownership" },
        ]}
        closingLine="We deliver secure, scalable, and cost-optimized AWS environments — without adding internal complexity."
      />
      <HiringProcess
        heading="Our Hiring Process: Simple, Fast & Transparent"
        subheading="A proven, low-friction process designed to get you productive AWS developers quickly."
        steps={[
          {
            step: "1",
            title: "Share Your Requirement",
            process:
              "Define your cloud goals, architecture needs, and delivery expectations.",
            benefit: "Get custom-fit AWS profiles",
          },
          {
            step: "2",
            title: "Receive Vetted Profiles",
            process: "3–5 AWS-certified developers shared within 48 hours.",
            benefit: "Save weeks of recruitment effort",
          },
          {
            step: "3",
            title: "Interview & Approve",
            process: "Evaluate skills, communication, and cultural fit.",
            benefit: "Full hiring control",
          },
          {
            step: "4",
            title: "Onboard & Integrate",
            process:
              "Developer joins your tools, workflows, and sprint cycles.",
            benefit: "Zero setup friction",
          },
          {
            step: "5",
            title: "Monitor & Scale",
            process:
              "Ongoing reports, dashboards, and continuous optimization.",
            benefit: "Complete visibility & accountability",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Choose a flexible engagement model that fits your delivery goals, timeline, and scale."
        models={[
          {
            title: "Dedicated AWS Developer",
            bestFor: "Ongoing projects & cloud management",
            howItWorks:
              "Full-time AWS-certified engineer working exclusively with your team",
            outcome: "Reliable, continuous delivery",
          },
          {
            title: "Managed Cloud Pod",
            bestFor: "Multi-skill DevOps + AWS initiatives",
            howItWorks:
              "Avaantra-managed team handling delivery and automation",
            outcome: "2–3X faster delivery velocity",
          },
          {
            title: "Project-Based Engagement",
            bestFor: "Migration, setup, or optimization",
            howItWorks: "Fixed scope, timeline, and deliverables",
            outcome: "Measurable, outcome-driven execution",
          },
          {
            title: "Hybrid Model",
            bestFor: "Scaling or supporting existing teams",
            howItWorks:
              "Combination of dedicated engineers and managed services",
            outcome: "Flexibility with continuity",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Teams"
        subheading="A clear comparison to help you choose the most reliable and scalable engagement model."
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
            aspect: "Delivery Reliability",
            freelancer: "Inconsistent",
            inHouse: "Predictable",
            avaantra: "High + Managed",
          },
          {
            aspect: "Security",
            freelancer: "Risky",
            inHouse: "Safe",
            avaantra: "Enterprise-grade + NDA",
          },
          {
            aspect: "Scalability",
            freelancer: "Limited",
            inHouse: "Slow",
            avaantra: "Instant + Flexible",
          },
          {
            aspect: "Reporting",
            freelancer: "None",
            inHouse: "Limited",
            avaantra: "Transparent + Real-time",
          },
        ]}
      />
      <SecurityIP
        heading="Security & IP Protection"
        subheading="We take your infrastructure, data, and code security seriously."
        points={[
          { text: "NDA & legal compliance before onboarding" },
          { text: "SOC2, GDPR, and HIPAA-ready security frameworks" },
          { text: "Encrypted credentials and strict IAM policies" },
          { text: "Complete IP, repository, and infrastructure ownership" },
        ]}
        closingLine="You own it all — code, configuration, and control."
      />
      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s AWS team helped us automate everything — we deploy in minutes now, not hours.",
            name: "CTO",
            role: "SaaS Platform",
            location: "Singapore",
          },
          {
            quote:
              "They reduced our AWS bill by 37% while improving uptime. Truly impressive.",
            name: "Founder",
            role: "FinTech Startup",
            location: "India",
          },
          {
            quote:
              "We’ve worked with multiple cloud vendors — Avaantra is by far the most accountable partner.",
            name: "VP",
            role: "HealthTech Company",
            location: "USA",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: Scaling a Global SaaS Product on AWS"
        client="B2B SaaS Platform (UK)"
        challenge="Needed a secure, cost-efficient global AWS infrastructure capable of handling rapid user growth."
        solution="Avaantra deployed a 4-member AWS team consisting of a Cloud Architect, DevOps Engineer, QA, and Project Manager to design, automate, and manage the platform."
        metrics={[
          { value: "99.99%", label: "Global Uptime" },
          { value: "42%", label: "Cost Optimization" },
          { value: "25 min", label: "Deployment Cycle (from 6 hours)" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire AWS Developers"
        faqs={[
          {
            question: "How soon can I hire AWS developers?",
            answer:
              "Within 7–15 business days, depending on the required skill set and project scope.",
          },
          {
            question: "Do your AWS engineers handle full infrastructure setup?",
            answer:
              "Yes. Our engineers manage architecture design, automation, deployment, and ongoing optimization.",
          },
          {
            question:
              "Will I get full access to AWS accounts and configurations?",
            answer:
              "Absolutely. You retain complete ownership and transparency over all AWS accounts and configurations.",
          },
          {
            question: "Can they work with our in-house team?",
            answer:
              "Yes. Our developers integrate seamlessly with your existing team, tools, and workflows.",
          },
          {
            question: "What if I need 24/7 support or monitoring?",
            answer:
              "We provide optional around-the-clock cloud monitoring and operational support services.",
          },
          {
            question: "Do I own the IP and configuration scripts?",
            answer:
              "Yes. You own all IP, configuration scripts, and repositories. Avaantra operates strictly under NDA.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because AWS gives you infinite scalability — and Avaantra Global gives you the people and process to unlock it confidently.",
          "We turn your cloud into a competitive advantage — fast, affordable, and future-ready.",
        ]}
        highlight="Your growth shouldn’t wait for infrastructure."
      />

      <FinalCTA
        heading="Hire Certified AWS Developers in 15 Days"
        subheading="Automate, scale, and optimize your cloud infrastructure with confidence."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
