import { HeroSection } from "@/components/sections/IndustryStyling/Hero"
import { InfoSection } from "@/components/sections/IndustryStyling/InfoSection"
import { ServiceGrid } from "@/components/sections/IndustryStyling/ServiceGrid"
import { IconCardGrid } from "@/components/sections/IndustryStyling/IconCardGrid"
import { FeatureGrid } from "@/components/sections/IndustryStyling/FeatureGrid"
import { ProcessSteps } from "@/components/sections/IndustryStyling/ProcessSteps"
import { TechStackGrid } from "@/components/sections/IndustryStyling/TechStackGrid"
import { CaseStudyGrid } from "@/components/sections/IndustryStyling/CaseStudyGrid"
import { SplitListSection } from "@/components/sections/IndustryStyling/SplitListSection"
import { ComplianceList } from "@/components/sections/IndustryStyling/ComplianceList"
import { FAQGrid } from "@/components/sections/IndustryStyling/FAQGrid"
import { FinalCTA } from "@/components/sections/IndustryStyling/FinalCTA"

import {
  Brain,
  Database,
  BarChart3,
  Bot,
  MessageSquare,
  Eye,
  Workflow,
  Cloud,
  Lock,
  Layers,
  Cpu,
} from "lucide-react"

export default function AIDataPlatformsPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Building Intelligent Systems That Think, Learn, and Scale"
        subtitle="From data strategy to AI-driven automation, Avaantra Global helps businesses transform raw data into actionable insights — creating intelligent platforms that accelerate innovation and impact."
        primaryCTA="Book Free Consultation"
        secondaryCTA="Explore AI Case Studies"
      />

      {/* WHY AI & DATA */}
      <InfoSection
        title="Why AI & Data Transformation Matters"
        description="AI is no longer optional — it’s the engine of competitive advantage. Yet most AI initiatives fail due to unclear goals, poor data quality, and lack of scalability."
        points={[
          "Data silos across departments",
          "Manual processes limiting decision speed",
          "Unstructured data and integration gaps",
          "Lack of AI and ML expertise",
        ]}
        quote="AI doesn’t replace people — it amplifies what’s possible."
      />

      {/* SERVICES */}
      <ServiceGrid
        title="Our AI & Data Platform Development Services"
        services={[
          {
            title: "AI Strategy & Consulting",
            description: "Vision, data readiness, and AI roadmaps",
            value: "Faster AI adoption & measurable ROI",
          },
          {
            title: "Data Engineering & Integration",
            description: "Clean, structured, and accessible pipelines",
            value: "Reliable data foundation",
          },
          {
            title: "Machine Learning Model Development",
            description: "Prediction, classification, automation models",
            value: "Real-time decision intelligence",
          },
          {
            title: "AI-Powered Automation Systems",
            description: "RPA + ML-driven intelligent workflows",
            value: "30–50% operational cost reduction",
          },
          {
            title: "NLP Solutions",
            description: "Chatbots, summarization, sentiment analysis",
            value: "Enhanced customer experience",
          },
          {
            title: "Computer Vision Systems",
            description: "Defect detection, object recognition",
            value: "Higher operational accuracy",
          },
          {
            title: "Predictive & Prescriptive Analytics",
            description: "Forecast trends, risks, opportunities",
            value: "Data-backed strategic planning",
          },
          {
            title: "Data Visualization & BI Dashboards",
            description: "Power BI and Tableau dashboards",
            value: "Instant executive insights",
          },
        ]}
        ctaText="Let’s Build Your AI Platform"
      />

      {/* SOLUTIONS */}
      <IconCardGrid
        title="AI & Data Solutions We Build"
        items={[
          { title: "AI-Powered SaaS Platforms", icon: Brain },
          { title: "Predictive Analytics Platforms", icon: BarChart3 },
          { title: "Data Lakes & Warehouses", icon: Database },
          { title: "Chatbots & Conversational AI", icon: MessageSquare },
          { title: "Recommendation Engines", icon: Bot },
          { title: "Computer Vision Applications", icon: Eye },
          { title: "RPA + AI Systems", icon: Workflow },
        ]}
      />

      {/* WHY AVAANTRA */}
      <FeatureGrid
        title="Why Choose Avaantra Global for AI & Data Platforms"
        subheading="We unite data scientists, software engineers, and business strategists to create systems that are as intelligent as they are impactful."
        features={[
          {
            title: "End-to-End AI Delivery",
            description: "From data engineering to production deployment",
            icon: Layers,
          },
          {
            title: "Deep Technical Expertise",
            description: "ML, NLP, RPA, CV, advanced analytics",
            icon: Brain,
          },
          {
            title: "Scalable Cloud Infrastructure",
            description: "AWS, Azure, GCP-native architectures",
            icon: Cloud,
          },
          {
            title: "Cross-Industry Experience",
            description: "FinTech, SaaS, Retail, HealthTech, Manufacturing",
            icon: Cpu,
          },
          {
            title: "Security by Design",
            description: "ISO 27001, GDPR, SOC 2 aligned systems",
            icon: Lock,
          },
          {
            title: "Business-First AI Mindset",
            description: "AI that solves real problems",
            icon: BarChart3,
          },
        ]}
        footerQuote="We make AI practical, profitable, and perfectly aligned with your strategy."
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Process — From Data to Decisions"
        steps={[
          {
            title: "Discovery & Strategy Alignment",
            description: "Assess data maturity and define KPIs",
          },
          {
            title: "Data Engineering & Preparation",
            description: "Clean, integrate, enrich enterprise data",
          },
          {
            title: "Model Development & Training",
            description: "Custom ML, NLP, and CV models",
          },
          {
            title: "Deployment & Integration",
            description: "Cloud and application-level AI rollout",
          },
          {
            title: "Continuous Improvement",
            description: "Monitoring, retraining, optimization",
          },
        ]}
        duration="12–16 weeks for MVP; 20–24 weeks for enterprise AI platforms"
      />

      {/* TECH STACK */}
      <TechStackGrid
        title="Technology Stack"
        items={[
          "Languages: Python, R, Java, C++, Julia",
          "ML Frameworks: TensorFlow, PyTorch, Scikit-learn, Keras",
          "Data Tools: Spark, Kafka, Airflow, Snowflake",
          "Databases: PostgreSQL, MongoDB, BigQuery, Redshift",
          "Visualization: Power BI, Tableau, Looker",
          "Cloud AI: AWS SageMaker, Azure ML, Vertex AI",
          "Automation: UiPath, Automation Anywhere, Blue Prism",
          "Security: ISO 27001, GDPR, SOC 2",
        ]}
      />

      {/* USE CASES */}
      <CaseStudyGrid
        title="Use Cases & Case Studies"
        cases={[
          {
            title: "Retail Demand Forecasting (US)",
            result: "25% inventory cost reduction; 15% revenue growth",
          },
          {
            title: "SaaS Churn Prediction (India)",
            result: "32% churn reduction; 18% renewal increase",
          },
          {
            title: "Healthcare Analytics Platform (UK)",
            result: "10× faster reporting; 22% accuracy improvement",
          },
        ]}
      />

      {/* CHALLENGES */}
      <SplitListSection
        title="Key Challenges We Solve"
        left={[
          "Fragmented and unstructured data",
          "Limited in-house AI expertise",
          "Slow decision-making processes",
        ]}
        right={[
          "Low ROI on data investments",
          "Compliance and privacy risks",
          "Manual, error-prone workflows",
        ]}
      />

      {/* BENEFITS */}
      <SplitListSection
        title="Benefits of Partnering with Avaantra Global"
        left={[
          "Accelerated AI adoption",
          "AI focused on measurable ROI",
          "Scalable data architecture",
        ]}
        right={[
          "Predictive, real-time insights",
          "Strong data governance & security",
          "Cross-industry proven success",
        ]}
        quote="AI should simplify your business, not complicate it — that’s our promise."
      />

      {/* COMPLIANCE */}
      <ComplianceList
        title="Compliance & Security Framework"
        left={[
          "ISO 27001 & GDPR compliant systems",
          "Encryption in transit and at rest",
          "Role-based access control (RBAC)",
        ]}
        right={[
          "AI ethics & governance frameworks",
          "Secure cloud DevOps pipelines",
        ]}
      />

      {/* FAQs */}
      <FAQGrid
        title="Frequently Asked Questions"
        faqs={[
  {
    question: "Do you build custom AI models or use pre-trained frameworks?",
    answer:
      "We do both — building models from scratch or fine-tuning existing models for faster deployment.",
  },
  {
    question: "Can you handle end-to-end AI implementation?",
    answer:
      "Yes — from data engineering and model development to deployment and MLOps setup.",
  },
  {
    question: "What industries do you serve for AI solutions?",
    answer:
      "FinTech, SaaS, Healthcare, Manufacturing, Retail, and EdTech.",
  },
  {
    question: "Do you offer AI consulting?",
    answer:
      "Yes — we design strategy roadmaps, proof of concepts, and scalable AI architectures.",
  },
  {
    question: "Can you help us migrate data from legacy systems?",
    answer:
      "Absolutely — we specialize in cloud migration and data modernization.",
  },
  {
    question: "Do you build AI-powered SaaS products?",
    answer:
      "Yes — we integrate AI and automation into SaaS and enterprise applications.",
  },
  {
    question: "What’s your typical delivery timeline?",
    answer:
      "12–16 weeks for MVP; 20–24 weeks for enterprise-grade AI deployments.",
  },
  {
    question: "How do you ensure data privacy?",
    answer:
      "We use encryption, strict access controls, and full GDPR and ISO compliance.",
  },
  {
    question: "Do you offer post-deployment optimization?",
    answer:
      "Yes — including continuous monitoring, model retraining, and performance audits.",
  },
  {
    question: "Can you integrate AI with existing CRMs or ERPs?",
    answer:
      "Yes — we integrate with Salesforce, SAP, Oracle, and other enterprise platforms.",
  },
]}
      />

      {/* FINAL CTA */}
      <FinalCTA
        title="Let’s Build Intelligent Systems That Learn, Predict, and Perform"
        subtitle="Partner with Avaantra Global to build scalable AI and data platforms that unlock insight, efficiency, and innovation across your business."
        primaryCTA="Start Your AI Project"
        secondaryCTA="Download AI Solutions Deck"
        trustText="ISO 27001 Certified • GDPR Compliant • 22+ Years Expertise • 250+ AI & Data Projects"
      />
    </>
  )
}
