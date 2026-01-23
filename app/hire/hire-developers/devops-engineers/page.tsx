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
    "Hire DevOps Engineers | AWS, Azure & GCP Certified Experts | Avaantra Global",
  description:
    "Hire certified DevOps engineers to automate deployments, optimize cloud infrastructure, and ensure 99.9% uptime. Avaantra Global provides pre-vetted DevOps experts ready in 15 days.",
};

export default function DevOpsEngineersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire DevOps Engineers"
        highlight="Build Faster, Deploy Smarter & Scale Reliably"
        subtitle="Modern products demand speed, reliability, and automation. Avaantra Global helps you hire certified DevOps engineers who streamline deployments, optimize cloud costs, and ensure high availability — without operational chaos."
        primaryCta="Hire DevOps Engineers in 15 Days"
        secondaryCta="See How Our DevOps Teams Deliver"
        uspList={[
          "Certified AWS, Azure, and GCP DevOps engineers",
          "CI/CD, Infrastructure as Code (IaC), and automation expertise",
          "99.9% uptime with proactive monitoring and alerting",
          "Up to 40% lower cloud management and infrastructure costs",
          "Enterprise-grade security, compliance, and access control",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "99.9%", label: "Uptime Reliability" },
          { value: "40%", label: "Lower Cloud Costs" },
          { value: "24/7", label: "Monitoring & Support" },
        ]}
      />
      <RealProblem
        heading="The Real Problem"
        subheading="Most teams struggle with DevOps not because of tools — but because of poor implementation."
        problems={[
          {
            text: "Deployments are slow, manual, and prone to failure.",
          },
          {
            text: "Infrastructure costs keep rising with no visibility or control.",
          },
          {
            text: "Downtime and incidents hurt user trust and revenue.",
          },
          {
            text: "Security and compliance are handled reactively instead of by design.",
          },
        ]}
        conclusionTitle="You don’t need more tools."
        conclusionText="You need experienced DevOps engineers who automate, secure, and optimize your systems — while keeping them reliable at scale."
      />
      <OurPromise
        heading="Our Promise: Reliable Infrastructure Without Operational Chaos"
        subheading="We help startups, SaaS platforms, and enterprises hire DevOps engineers who bring stability, speed, and security — within 7–15 days."
        promises={[
          {
            text: "Certified AWS, Azure, and GCP DevOps engineers",
          },
          {
            text: "CI/CD automation and infrastructure-as-code best practices",
          },
          {
            text: "Built-in security, monitoring, and compliance",
          },
          {
            text: "Transparent delivery with sprint-based reporting",
          },
          {
            text: "Cost-optimized cloud architecture with measurable savings",
          },
        ]}
        outcomes={[
          { value: "99.9%", label: "Uptime Reliability" },
          { value: "40%", label: "Lower Cloud Costs" },
          { value: "2–3X", label: "Faster Deployment Cycles" },
          { value: "100%", label: "Secure & Auditable Infrastructure" },
        ]}
      />

      <OurExpertise
        heading="Our DevOps Engineering Expertise"
        subheading="We help teams ship faster, scale reliably, and reduce infrastructure risk through automation and cloud-native practices."
        items={[
          {
            title: "CI/CD Pipelines & Automation",
            description:
              "Automate build, test, and deployment workflows to eliminate manual errors and speed up releases.",
            toolsTitle: "Delivery & Automation",
            tools: [
              "GitHub Actions, GitLab CI, Jenkins, Azure DevOps",
              "Automated build, test, and deployment pipelines",
              "Blue-green & canary deployments",
            ],
            outcome: "Faster, repeatable releases with minimal downtime.",
          },
          {
            title: "Cloud Infrastructure & IaC",
            description:
              "Design and manage scalable cloud infrastructure using infrastructure-as-code best practices.",
            toolsTitle: "Cloud & Infrastructure",
            tools: [
              "AWS, Azure, Google Cloud Platform",
              "Terraform, CloudFormation, ARM templates",
              "Multi-environment infrastructure management",
            ],
            outcome: "Scalable, cost-optimized cloud infrastructure.",
          },
          {
            title: "Containers & Orchestration",
            description:
              "Containerize applications and orchestrate them reliably across environments.",
            toolsTitle: "Containers",
            tools: [
              "Docker, Kubernetes, Helm",
              "EKS, AKS, GKE cluster management",
              "Service mesh and scaling strategies",
            ],
            outcome: "Resilient, containerized systems built to scale.",
          },
          {
            title: "Monitoring, Logging & Reliability",
            description:
              "Ensure system reliability through proactive monitoring, logging, and alerting.",
            toolsTitle: "Observability",
            tools: [
              "Prometheus, Grafana, ELK stack",
              "24/7 monitoring, alerting, and incident response",
              "SLOs, SLAs, and uptime optimization",
            ],
            outcome: "99.9% uptime with proactive issue detection.",
          },
          {
            title: "Security, Compliance & Access Control",
            description:
              "Embed security and compliance directly into your DevOps workflows.",
            toolsTitle: "Security & Compliance",
            tools: [
              "Secrets management & IAM",
              "SOC2, ISO, GDPR-aligned practices",
              "Secure pipelines and role-based access",
            ],
            outcome: "Enterprise-grade security built into every layer.",
          },
        ]}
      />

      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our DevOps engineers support teams operating at scale, across regulated and high-availability environments."
        industries={[
          {
            icon: "🧠",
            title: "SaaS & B2B Platforms",
            description:
              "High-availability infrastructure, rapid releases, and cost optimization.",
          },
          {
            icon: "💳",
            title: "FinTech & Banking",
            description:
              "Secure pipelines, compliance-driven infrastructure, and zero-downtime deployments.",
          },
          {
            icon: "🛒",
            title: "E-commerce & Marketplaces",
            description:
              "Scalable systems that handle traffic spikes and seasonal demand.",
          },
          {
            icon: "🏥",
            title: "HealthTech",
            description:
              "HIPAA-ready infrastructure with strong access control and monitoring.",
          },
          {
            icon: "🚀",
            title: "Startups & Scaleups",
            description: "Lean DevOps setups that grow without technical debt.",
          },
        ]}
        outcome="Infrastructure built for reliability, compliance, and long-term scale."
      />
      <HiringProcess
        heading="Our Hiring Process"
        subheading="A fast, transparent process to onboard DevOps talent without slowing delivery."
        steps={[
          {
            step: "1",
            title: "Requirement Discovery",
            process:
              "Define cloud stack, deployment needs, and security requirements.",
            benefit: "Accurate DevOps skill matching",
          },
          {
            step: "2",
            title: "Profile Shortlisting",
            process: "Receive 3–5 pre-vetted DevOps engineers within 48 hours.",
            benefit: "Save weeks of sourcing time",
          },
          {
            step: "3",
            title: "Interview & Approve",
            process: "Evaluate technical depth and system design approach.",
            benefit: "Full control over hiring",
          },
          {
            step: "4",
            title: "Onboard & Integrate",
            process: "Engineer joins your repos, pipelines, and tooling.",
            benefit: "Immediate productivity",
          },
          {
            step: "5",
            title: "Deliver & Optimize",
            process:
              "Continuous improvements, reporting, and cost optimization.",
            benefit: "Predictable reliability and scale",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Choose a model that fits your delivery velocity and operational maturity."
        models={[
          {
            title: "Dedicated DevOps Engineer",
            bestFor: "Ongoing infrastructure and CI/CD needs",
            howItWorks: "A full-time DevOps engineer embedded in your team.",
            outcome: "Stable delivery and long-term reliability",
          },
          {
            title: "Managed DevOps Pod",
            bestFor: "Complex or multi-cloud environments",
            howItWorks: "Avaantra manages DevOps, security, and monitoring.",
            outcome: "2–3X faster delivery with less overhead",
          },
          {
            title: "Project-Based",
            bestFor: "CI/CD or cloud setup projects",
            howItWorks: "Fixed-scope implementation with clear milestones.",
            outcome: "Fast, low-risk execution",
          },
          {
            title: "Hybrid Model",
            bestFor: "Scaling and ongoing optimization",
            howItWorks: "Combination of dedicated and managed support.",
            outcome: "Flexibility with predictable performance",
          },
        ]}
      />
      <WhyAvaantra
        heading="Why Hire DevOps Engineers from Avaantra Global"
        subheading="Because DevOps isn’t tooling — it’s operational discipline."
        advantages={[
          { text: "Certified AWS, Azure, and GCP DevOps engineers" },
          {
            text: "Strong automation-first mindset with real production experience",
          },
          { text: "Proven 99.9% uptime across client infrastructures" },
          { text: "Cost-optimized cloud setups with measurable savings" },
          { text: "Sprint-based delivery with optional PM oversight" },
          { text: "100% transparency, access control, and IP ownership" },
        ]}
        closingLine="We don’t just deploy infrastructure — we keep your systems running, scaling, and secure."
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House DevOps Teams"
        subheading="Because DevOps reliability depends on ownership, experience, and process — not luck."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "3–6 weeks",
            inHouse: "2–4 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "Cloud & DevOps Expertise",
            freelancer: "Tool-specific",
            inHouse: "Good but siloed",
            avaantra: "End-to-end (Cloud, CI/CD, IaC, Security)",
          },
          {
            aspect: "Uptime & Reliability",
            freelancer: "Unpredictable",
            inHouse: "Stable",
            avaantra: "99.9% with Monitoring",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Medium",
            inHouse: "Very High",
            avaantra: "Up to 40% Savings",
          },
          {
            aspect: "Scalability",
            freelancer: "Limited",
            inHouse: "Slow to scale",
            avaantra: "Instant & Flexible",
          },
          {
            aspect: "Security & Compliance",
            freelancer: "Risky",
            inHouse: "Managed Internally",
            avaantra: "Enterprise-Grade",
          },
          {
            aspect: "Accountability",
            freelancer: "Low",
            inHouse: "High",
            avaantra: "High + Managed",
          },
          {
            aspect: "IP & Access Control",
            freelancer: "Unclear",
            inHouse: "Yes",
            avaantra: "100% Yours",
          },
        ]}
      />
      {/* 🔒 Security & Compliance */}
      <SecurityIP
        heading="Security, Compliance & Infrastructure Protection"
        subheading="Your infrastructure, data, and access controls are secured by design — not patched later."
        points={[
          { text: "NDA and legal agreements signed before onboarding" },
          {
            text: "Role-based access control (RBAC) and least-privilege policies",
          },
          { text: "Secrets management and encrypted credentials" },
          { text: "SOC2, ISO, GDPR-aligned cloud security practices" },
          { text: "Private cloud accounts with no shared infrastructure" },
          { text: "Full ownership of infrastructure, pipelines, and configs" },
        ]}
        closingLine="Your cloud. Your pipelines. Your access. Always."
      />

      {/* 💬 Testimonials */}
      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra helped us stabilize our deployments and cut downtime dramatically. Their DevOps team is rock solid.",
            name: "CTO",
            role: "SaaS Platform",
            location: "UK",
          },
          {
            quote:
              "We reduced our AWS bill by over 35% within three months after onboarding their DevOps engineers.",
            name: "Engineering Manager",
            role: "FinTech Company",
            location: "Singapore",
          },
          {
            quote:
              "They didn’t just automate — they brought discipline and visibility to our entire delivery pipeline.",
            name: "Founder",
            role: "Startup",
            location: "India",
          },
        ]}
      />

      {/* 📈 Case Study */}
      <CaseStudy
        heading="Case Study: Scaling Cloud Infrastructure for a SaaS Platform"
        client="B2B SaaS Company"
        challenge="Frequent downtime, slow deployments, and rising cloud costs."
        solution="Avaantra deployed a DevOps engineer to redesign CI/CD pipelines, implement IaC, and optimize cloud resources."
        metrics={[
          { value: "99.9%", label: "Uptime Achieved" },
          { value: "40%", label: "Reduction in Cloud Costs" },
          { value: "3X", label: "Faster Deployment Cycles" },
        ]}
      />

      {/* ❓ FAQs */}
      <FAQs
        heading="FAQs — Before You Hire DevOps Engineers"
        faqs={[
          {
            question: "How soon can I onboard a DevOps engineer?",
            answer:
              "Typically within 7–15 business days after finalizing requirements.",
          },
          {
            question: "Do you support multi-cloud environments?",
            answer:
              "Yes. Our engineers work across AWS, Azure, and GCP, including hybrid setups.",
          },
          {
            question: "Can DevOps engineers work with our existing tools?",
            answer:
              "Absolutely. We integrate with your current CI/CD, monitoring, and cloud stack.",
          },
          {
            question: "Do you provide 24/7 monitoring support?",
            answer:
              "Yes. Monitoring, alerting, and incident response can be included based on engagement model.",
          },
          {
            question: "What if we’re not satisfied?",
            answer:
              "We replace the DevOps engineer within 15 days at no additional cost.",
          },
          {
            question: "Do we own the infrastructure and pipelines?",
            answer:
              "Yes. You retain 100% ownership of all infrastructure, scripts, and configurations.",
          },
        ]}
      />

      {/* 🚀 Why This Works */}
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because DevOps is not about tools — it’s about operational excellence.",
          "We combine automation, security, and reliability to keep your systems fast, stable, and cost-efficient.",
          "With Avaantra Global, DevOps becomes a growth enabler — not a bottleneck.",
        ]}
        highlight="Predictable deployments. Stable systems. Real operational control."
      />

      {/* 🔗 Final CTA */}
      <FinalCTA
        heading="Hire DevOps Engineers in 15 Days — Build Infrastructure That Scales Reliably."
        subheading="Work with certified DevOps experts who optimize, secure, and automate your cloud operations."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
