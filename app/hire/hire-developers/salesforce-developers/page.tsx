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
    "Hire Salesforce Developers | CRM, Apex, Lightning & Cloud Experts | Avaantra Global",
  description:
    "Hire dedicated Salesforce developers to customize, automate, and optimize your CRM. Avaantra Global provides certified Salesforce experts ready to onboard in 15 days.",
};

export default function SalesforceDevelopersPage() {
  return (
    <>
      {/* 💥 Hero Section */}
      <HireHero
        title="Hire Certified Salesforce Developers"
        highlight="Streamline CRM & Accelerate Growth"
        subtitle="Your CRM should empower, not overwhelm. Avaantra Global helps you hire Salesforce-certified developers who customize, integrate, and automate your Salesforce ecosystem for better sales, service, and marketing outcomes."
        primaryCta="Hire Salesforce Experts in 15 Days"
        secondaryCta="See How Our Salesforce Teams Transform Workflows"
        uspList={[
          "Salesforce-certified developers (Admin, Apex, Lightning)",
          "Onboard Salesforce experts in 7–15 days",
          "35–50% lower CRM management cost",
          "Custom workflow and automation design",
          "CRM, API, and AppExchange expertise",
          "100% IP and data ownership",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "3–5X", label: "Faster CRM Operations" },
          { value: "40%", label: "Automation Coverage Increase" },
          { value: "100%", label: "Salesforce ROI" },
        ]}
      />

      {/* 🧩 Real Problem */}
      <RealProblem
        heading="The Real Problem"
        subheading="Most businesses invest in Salesforce but unlock only a fraction of its true value."
        problems={[
          { text: "Manual data entry slows down sales and support teams." },
          { text: "Reports and dashboards don’t align with business goals." },
          { text: "Automations are incomplete, outdated, or fragile." },
          { text: "Custom app development feels complex and risky." },
        ]}
        conclusionTitle="You don’t need more licenses."
        conclusionText="You need Salesforce developers who turn your CRM into a scalable, automated growth engine."
      />

      {/* 🎯 Our Promise */}
      <OurPromise
        heading="Our Promise: Intelligent CRM That Works for You"
        subheading="We help SaaS companies, enterprises, and agencies hire Salesforce developers who manage setup, customization, integration, and analytics — end to end."
        promises={[
          {
            text: "Salesforce-certified engineers across Admin, Apex, and Lightning",
          },
          {
            text: "Expertise in Lightning Components, Apex, and Flow automation",
          },
          {
            text: "Seamless integration with ERP, HubSpot, and custom systems",
          },
          { text: "Transparent delivery with predictable costs and reporting" },
          {
            text: "Predictable CRM performance with automation-first architecture",
          },
        ]}
        outcomes={[
          { value: "3–5X", label: "Faster CRM Operations" },
          { value: "40%", label: "More Automation Coverage" },
          { value: "100%", label: "ROI on Salesforce Investment" },
          { value: "30–45%", label: "improvement in sales team productivity" },
        ]}
      />
      {/* 🧰 Our Salesforce Expertise */}
      <OurExpertise
        heading="Our Salesforce Expertise"
        subheading="We customize, automate, and extend Salesforce to fit your exact business workflows."
        items={[
          {
            title: "Custom Development",
            description:
              "Build Salesforce solutions tailored to your internal processes and growth goals.",
            toolsTitle: "Custom CRM Development",
            tools: [
              "Apex, Visualforce, Lightning Components",
              "Custom objects, triggers, and workflows",
            ],
            outcome:
              "Tailored CRM solutions that match your business operations.",
          },
          {
            title: "Integration & Automation",
            description:
              "Connect Salesforce with your tools and automate repetitive workflows.",
            toolsTitle: "Integrations & Automation",
            tools: [
              "REST / SOAP APIs, Zapier, HubSpot, Slack, ERP systems",
              "Salesforce Flow and Process Builder",
            ],
            outcome: "Automated data flows with reduced manual effort.",
          },
          {
            title: "AppExchange App Development",
            description:
              "Design, build, and publish scalable Salesforce applications.",
            toolsTitle: "App Development",
            tools: [
              "Custom AppExchange app development",
              "Security review preparation and deployment support",
            ],
            outcome: "Scalable applications that expand your Salesforce ROI.",
          },
          {
            title: "Analytics & Reporting",
            description:
              "Turn CRM data into actionable insights for better decisions.",
            toolsTitle: "Analytics & Insights",
            tools: [
              "Einstein Analytics and Tableau CRM",
              "KPI dashboards, forecasting, and predictive reporting",
            ],
            outcome:
              "Real-time visibility into sales, service, and marketing performance.",
          },
        ]}
      />

      {/* 🌍 Industries We Serve */}
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our Salesforce developers understand industry-specific CRM challenges and compliance needs."
        industries={[
          {
            icon: "💳",
            title: "FinTech & Banking",
            description:
              "Custom workflows, compliance automation, and secure customer data handling.",
          },
          {
            icon: "🧠",
            title: "SaaS & B2B",
            description:
              "CRM integrations, lead scoring, lifecycle tracking, and campaign analytics.",
          },
          {
            icon: "🏥",
            title: "Healthcare",
            description:
              "HIPAA-compliant patient engagement and service workflows.",
          },
          {
            icon: "🛒",
            title: "E-commerce",
            description: "Omnichannel CRM with personalized customer journeys.",
          },
          {
            icon: "🏢",
            title: "Real Estate & PropTech",
            description:
              "Lead routing, broker workflows, deal pipelines, and automated follow-ups to accelerate property sales.",
          },
          {
            icon: "🏭",
            title: "Manufacturing & B2B Operations",
            description:
              "Distributor management, ERP synchronization, account hierarchies, and sales forecasting at scale.",
          },
        ]}
        outcome="Industry-aware Salesforce solutions that improve efficiency and customer experience."
      />
      <WhyAvaantra
        heading="Why Hire Salesforce Developers from Avaantra Global"
        subheading="Because your CRM should drive growth — not create complexity."
        advantages={[
          { text: "Salesforce-certified developers (Admin, Apex, Lightning)" },
          { text: "Deep expertise across Sales, Service & Marketing Cloud" },
          { text: "Automation-first CRM design to reduce manual effort" },
          { text: "Sprint-based delivery with transparent reporting" },
          { text: "Flexible engagement models for scale and support" },
          { text: "100% IP, data, and CRM ownership guaranteed" },
        ]}
        closingLine="We don’t just customize Salesforce — we align it with your revenue and operations."
      />

      <HiringProcess
        heading="Our Hiring Process"
        subheading="We make Salesforce onboarding fast, structured, and predictable."
        steps={[
          {
            step: "1",
            title: "Share CRM Requirements",
            process:
              "Define your Salesforce goals, workflows, integrations, and automation needs.",
            benefit: "Clear scope and skill mapping",
          },
          {
            step: "2",
            title: "Get Certified Profiles",
            process:
              "Receive 3–5 pre-vetted Salesforce developer profiles within 48 hours.",
            benefit: "Faster hiring without screening delays",
          },
          {
            step: "3",
            title: "Interview & Approve",
            process:
              "Interview candidates and approve the best fit for your Salesforce org.",
            benefit: "Full control over who joins your team",
          },
          {
            step: "4",
            title: "Onboard & Integrate",
            process:
              "Developers integrate into your Salesforce org, tools, and workflows.",
            benefit: "Productive start within 7–15 days",
          },
          {
            step: "5",
            title: "Deliver & Optimize",
            process:
              "Sprint-based delivery, automation reviews, and reporting.",
            benefit: "Predictable CRM performance and ROI",
          },
        ]}
      />

      <EngagementModels
        heading="Engagement Models"
        subheading="Choose a Salesforce engagement model that fits your scale and complexity."
        models={[
          {
            title: "Dedicated Salesforce Developer",
            bestFor: "Ongoing CRM customization & automation",
            howItWorks:
              "A full-time Salesforce expert works exclusively with your team.",
            outcome: "Consistent delivery and CRM ownership",
          },
          {
            title: "Managed Salesforce Pod",
            bestFor: "End-to-end Salesforce implementation or migration",
            howItWorks: "Avaantra manages developers, QA, and sprint delivery.",
            outcome: "2–3X faster execution",
          },
          {
            title: "Project-Based",
            bestFor: "Automation, integrations, or AppExchange apps",
            howItWorks: "Fixed scope, timeline, and deliverables.",
            outcome: "Low-risk, fast execution",
          },
          {
            title: "Hybrid Model",
            bestFor: "Continuous CRM improvements + support",
            howItWorks: "Dedicated developer combined with managed support.",
            outcome: "Flexibility with long-term stability",
          },
        ]}
      />

      <Comparison
        heading="Avaantra vs Freelancers vs In-House Teams"
        subheading="See how different hiring models compare for Salesforce delivery."
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
            avaantra: "35–50% savings",
          },
          {
            aspect: "Salesforce Expertise",
            freelancer: "Inconsistent",
            inHouse: "Limited",
            avaantra: "Certified multi-cloud experts",
          },
          {
            aspect: "Automation & Integration",
            freelancer: "Basic",
            inHouse: "Slow",
            avaantra: "Advanced & scalable",
          },
          {
            aspect: "IP & Data Security",
            freelancer: "Risky",
            inHouse: "Safe",
            avaantra: "100% secure + NDA",
          },
          {
            aspect: "Accountability",
            freelancer: "Low",
            inHouse: "Medium",
            avaantra: "High + Managed",
          },
        ]}
      />

      <SecurityIP
        heading="Security, IP & Compliance"
        subheading="Your CRM data, workflows, and integrations are fully protected."
        points={[
          { text: "NDA-backed legal agreements before onboarding" },
          { text: "100% ownership of Salesforce org, code, and data" },
          { text: "Role-based access control and secure permissions" },
          { text: "SOC2 & GDPR-aligned data protection practices" },
          { text: "Private repositories and encrypted integrations" },
          {
            text: "Audit logs, access monitoring, and org-level security controls enabled",
          },
        ]}
        closingLine="Your Salesforce ecosystem stays secure, compliant, and fully yours."
      />

      {/* 💬 Client Testimonials */}
      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s Salesforce team turned our CRM chaos into clarity in just eight weeks.",
            name: "CMO",
            role: "SaaS Platform",
            location: "UK",
          },
          {
            quote:
              "They automated nearly 70% of our manual data entry — a complete game changer for our sales team.",
            name: "Founder",
            role: "FinTech Startup",
            location: "India",
          },
          {
            quote:
              "Their Salesforce developers understood our business workflows, not just the platform.",
            name: "Head of Operations",
            role: "B2B Company",
            location: "Germany",
          },
        ]}
      />
      {/* 📈 Case Study */}
      <CaseStudy
        heading="Case Study: CRM Automation for a SaaS Platform"
        client="SaaS CRM Company"
        challenge="Slow manual data syncing and poor reporting across sales and marketing teams."
        solution="Avaantra delivered custom Apex and Lightning integrations with the client’s ERP system to automate data flows and reporting."
        metrics={[
          { value: "68%", label: "Reduction in Manual Tasks" },
          { value: "100%", label: "Accuracy in Lead Tracking" },
          { value: "42%", label: "Faster Deal Closure Rate" },
        ]}
      />

      {/* ❓ FAQs */}
      <FAQs
        heading="FAQs — Before You Hire Salesforce Developers"
        faqs={[
          {
            question: "Are your Salesforce developers certified?",
            answer:
              "Yes. All our developers are Salesforce-certified across Admin, Developer, Lightning, or Architect roles.",
          },
          {
            question:
              "Can your developers integrate Salesforce with third-party tools?",
            answer:
              "Absolutely. We integrate Salesforce with HubSpot, Slack, Zoho, ERP systems, and custom applications.",
          },
          {
            question: "Can I hire Salesforce developers for maintenance only?",
            answer:
              "Yes. We offer part-time, support-only, and maintenance-focused engagement models.",
          },
          {
            question: "Do you provide AppExchange app development?",
            answer:
              "Yes. We handle full-cycle AppExchange development including security review and publishing.",
          },
          {
            question: "What if I need end-to-end Salesforce implementation?",
            answer:
              "We offer managed Salesforce pods including developers, QA engineers, and project managers.",
          },
        ]}
      />

      {/* 🚀 Why This Works */}
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because your CRM should accelerate growth — not create friction.",
          "We focus on automation, integration, and reporting that align Salesforce with real business workflows.",
          "With Avaantra Global, Salesforce becomes a growth engine instead of a maintenance burden.",
        ]}
        highlight="Smarter automation. Cleaner data. Faster growth."
      />

      {/* 🔗 Final CTA */}
      <FinalCTA
        heading="Hire Certified Salesforce Developers in 15 Days — Automate, Scale & Grow Faster."
        subheading="Work with Salesforce experts who customize, integrate, and optimize your CRM for measurable results."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
