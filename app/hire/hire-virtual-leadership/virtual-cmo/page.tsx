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
    "Hire AI Developers | Chatbot, NLP & Generative AI Experts | Avaantra Global",
  description:
    "Hire dedicated AI developers to build smart, scalable, and future-ready AI solutions. Avaantra Global provides experts in NLP, computer vision, and generative AI — ready in 15 days.",
};

export default function AIDevelopersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated AI Developers"
        highlight="Build Smarter, Faster, and Future-Ready Products"
        subtitle="AI isn’t the future — it’s the competitive advantage you need now. Avaantra Global helps you hire skilled AI developers to integrate automation, machine learning, and intelligent systems directly into your business and products."
        primaryCta="Hire AI Developers in 15 Days"
        secondaryCta="See How Our AI Experts Deliver"
        uspList={[
          "AI engineers skilled in NLP, LLMs, computer vision, and generative AI",
          "7–15 day onboarding with zero hiring backlog",
          "End-to-end ML pipelines and model integration expertise",
          "40–60% faster AI adoption using proven frameworks",
          "100% IP and data ownership with NDA protection",
          "Optional managed AI pods for multi-skill delivery",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "3–4X", label: "Faster Model Deployment" },
          { value: "30–50%", label: "Operational Automation" },
          { value: "100%", label: "Secure AI Integration" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem"
        subheading="Most companies want to use AI — very few deploy it successfully."
        problems={[
          {
            text: "Internal teams lack real-world AI and ML implementation expertise.",
          },
          { text: "Off-the-shelf models don’t fit business-specific data." },
          { text: "Integrating AI into existing systems is complex." },
          { text: "Hiring experienced AI talent takes months and high cost." },
        ]}
        conclusionTitle="You don’t just need AI developers."
        conclusionText="You need AI partners who understand both technology and business context — and deliver measurable results fast."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: Real AI That Works, Scales, and Delivers ROI"
        subheading="We help startups, SaaS platforms, and enterprises hire AI developers within 7–15 days."
        promises={[
          { text: "LLM, OpenAI, LangChain, TensorFlow, and PyTorch experts" },
          {
            text: "Rapid build, deployment, and system integration of AI models",
          },
          { text: "Managed sprints with transparent reporting" },
          { text: "Optional project management and QA support" },
          {
            text: "Production-grade AI with monitoring, retraining, and MLOps support",
          },
        ]}
        outcomes={[
          { value: "3–4X", label: "Faster Model Deployment" },
          { value: "30–50%", label: "Operational Automation" },
          { value: "100%", label: "Secure, Custom AI Integration" },
          { value: "Higher", label: "Model Accuracy & Reliability" },
        ]}
      />
      <OurExpertise
        heading="Our AI Development Expertise"
        subheading="We build practical, production-ready AI systems that solve real business problems — not experimental demos."
        items={[
          {
            title: "Natural Language Processing (NLP)",
            description:
              "Enable intelligent, human-like interactions across text and voice channels.",
            toolsTitle: "NLP Capabilities",
            tools: [
              "Chatbots, sentiment analysis, and text summarization",
              "LLM fine-tuning (OpenAI, GPT-4, Claude, Mistral)",
              "Custom intent classification and entity extraction",
              "Multilingual and domain-specific language models",
            ],
            outcome:
              "Smarter, context-aware customer interactions that improve engagement and support efficiency.",
          },
          {
            title: "Machine Learning & Predictive Analytics",
            description:
              "Predict outcomes, detect patterns, and automate decision-making at scale.",
            toolsTitle: "ML & Analytics",
            tools: [
              "TensorFlow, PyTorch, Scikit-learn",
              "Forecasting, recommendation systems, anomaly detection",
              "Model optimization, evaluation, and retraining pipelines",
            ],
            outcome:
              "Real-time, data-driven decisions that scale with your business growth.",
          },
          {
            title: "Computer Vision & Image Recognition",
            description: "Extract intelligence from images and video streams.",
            toolsTitle: "Vision AI",
            tools: [
              "OpenCV, YOLO, Vision Transformer models",
              "OCR, object detection, and facial recognition",
              "Visual analytics and automated quality inspection",
            ],
            outcome:
              "Accurate, fast, and automated image-based solutions for real-world use cases.",
          },
          {
            title: "Generative AI & Custom LLM Development",
            description:
              "Build generative systems tailored to your data and workflows.",
            toolsTitle: "Generative AI",
            tools: [
              "GPT and LangChain application integrations",
              "RAG (Retrieval-Augmented Generation) systems",
              "Voice, text, and image generation models",
            ],
            outcome:
              "Human-like automation that enhances creativity, productivity, and customer experience.",
          },
          {
            title: "AI Integration & Deployment",
            description:
              "Ship AI safely and reliably into production environments.",
            toolsTitle: "Deployment & MLOps",
            tools: [
              "MLOps pipelines and API integrations",
              "Docker, Kubernetes, AWS SageMaker, Azure ML",
              "Monitoring, retraining, and performance tracking",
            ],
            outcome:
              "Scalable, production-ready AI systems that perform reliably in real-world environments.",
          },
          {
            title: "AI Governance, Ethics & Compliance",
            description:
              "Ensure AI systems are transparent, auditable, and regulation-ready.",
            toolsTitle: "Responsible AI",
            tools: [
              "Model explainability & bias detection",
              "Audit logs and decision traceability",
              "Human-in-the-loop review systems",
              "Regulatory alignment (EU AI Act readiness)",
            ],
            outcome:
              "Trustworthy AI systems that meet compliance, legal, and ethical standards.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our AI developers apply domain expertise to build solutions that deliver measurable business impact."
        industries={[
          {
            icon: "💳",
            title: "FinTech & Banking",
            description:
              "Fraud detection, predictive credit scoring, risk analysis, and personalized financial insights.",
          },
          {
            icon: "🧠",
            title: "SaaS & B2B Platforms",
            description:
              "AI-powered automation, intelligent chatbots, and predictive product analytics.",
          },
          {
            icon: "🏥",
            title: "Healthcare & Pharma",
            description:
              "Diagnostic AI, medical image recognition, and intelligent patient support systems.",
          },
          {
            icon: "🛒",
            title: "Retail & E-commerce",
            description:
              "Recommendation engines, visual search, demand forecasting, and behavior prediction.",
          },
          {
            icon: "📚",
            title: "Education & Training",
            description:
              "Personalized learning paths, adaptive content, and generative learning systems.",
          },
          {
            icon: "🏭",
            title: "Manufacturing & Supply Chain",
            description:
              "Predictive maintenance, demand forecasting, quality inspection, and AI-driven supply optimization.",
          },
        ]}
        outcome="AI solutions built to solve real-world problems with measurable ROI and scalability."
      />
      <WhyAvaantra
        heading="Why Hire AI Developers from Avaantra Global"
        subheading="Because real AI success requires more than models — it needs production thinking and business alignment."
        advantages={[
          {
            text: "5–10 years average experience across AI, ML, and data engineering",
          },
          {
            text: "Hands-on expertise in LLMs, NLP, computer vision, and predictive analytics",
          },
          {
            text: "Production-grade AI with MLOps, monitoring, and retraining pipelines",
          },
          { text: "Business-first approach — models tied to measurable ROI" },
          { text: "Sprint-based delivery with optional PM and QA oversight" },
          { text: "100% IP, model, and data ownership with full transparency" },
        ]}
        closingLine="We don’t just build AI models — we deploy intelligence that actually works in the real world."
      />

      <HiringProcess
        heading="Our Hiring Process"
        subheading="A focused, transparent process to bring production-ready AI talent into your team quickly."
        steps={[
          {
            step: "1",
            title: "Requirement Discovery",
            process:
              "Define AI use cases, business goals, data availability, and infrastructure.",
            benefit: "Targeted skill mapping aligned with real AI outcomes",
          },
          {
            step: "2",
            title: "Candidate Shortlisting",
            process: "Receive 3–5 pre-vetted AI developers within 48 hours.",
            benefit: "Save weeks of sourcing and screening",
          },
          {
            step: "3",
            title: "Interview & Approve",
            process:
              "Evaluate technical depth, problem-solving ability, and domain fit.",
            benefit: "Full control over who joins your team",
          },
          {
            step: "4",
            title: "Onboard & Kickstart",
            process:
              "Developers integrate with your tools, repos, and workflows.",
            benefit: "Rapid AI project kickoff within days",
          },
          {
            step: "5",
            title: "Deliver & Optimize",
            process:
              "Sprint-based delivery, feedback loops, and performance reporting.",
            benefit: "Measurable performance improvements and ROI tracking",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Flexible engagement options designed to match your AI maturity, timeline, and scale."
        models={[
          {
            title: "Dedicated AI Developer",
            bestFor: "Continuous model development and optimization",
            howItWorks:
              "A full-time AI engineer working exclusively on your models, data, and integrations.",
            outcome:
              "Long-term innovation, deep system understanding, and full control",
          },
          {
            title: "Managed AI Pod",
            bestFor:
              "End-to-end AI delivery across data, models, and infrastructure",
            howItWorks:
              "Avaantra manages a cross-functional pod including AI, data, and DevOps experts.",
            outcome: "2–3X faster velocity with minimal management overhead",
          },
          {
            title: "Project-Based",
            bestFor: "AI MVPs, pilots, or proof-of-concepts",
            howItWorks: "Fixed-scope delivery with clear milestones and KPIs.",
            outcome: "Fast, focused execution with measurable results",
          },
          {
            title: "Hybrid Model",
            bestFor: "Scaling AI systems and ongoing maintenance",
            howItWorks:
              "Combination of dedicated engineers and managed delivery support.",
            outcome: "Flexibility with long-term ROI and reliability",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House AI Teams"
        subheading="A clear comparison to help you choose the smartest AI delivery model."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "4–8 weeks",
            inHouse: "3–6 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "AI & ML Expertise",
            freelancer: "Narrow / Tool-based",
            inHouse: "Good but costly",
            avaantra: "End-to-End (NLP, LLMs, CV, MLOps)",
          },
          {
            aspect: "Production Readiness",
            freelancer: "Low",
            inHouse: "High",
            avaantra: "High + Managed",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Medium",
            inHouse: "Very High",
            avaantra: "40–60% Savings",
          },
          {
            aspect: "Scalability",
            freelancer: "Limited",
            inHouse: "Slow",
            avaantra: "Instant & Flexible",
          },
          {
            aspect: "Accountability",
            freelancer: "Low",
            inHouse: "High",
            avaantra: "High + Reporting",
          },
          {
            aspect: "IP & Data Ownership",
            freelancer: "Risky",
            inHouse: "Yes",
            avaantra: "100% Yours",
          },
        ]}
      />
      <SecurityIP
        heading="Security, Data & IP Protection"
        subheading="Your data, models, and intellectual property are protected at every stage."
        points={[
          { text: "NDA and legal agreements signed before onboarding" },
          {
            text: "Encrypted data access across training, staging, and production",
          },
          { text: "Strict role-based access control for datasets and models" },
          { text: "GDPR, SOC2, and ISO-aligned security practices" },
          {
            text: "100% ownership of datasets, models, prompts, and pipelines",
          },
          {
            text: "Private model hosting with no shared inference environments",
          },
          {
            text: "Prompt, dataset, and vector-store isolation per client project",
          },
        ]}
        closingLine="Your data stays yours. Your models stay yours. No exceptions."
      />

      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s AI engineers built our chatbot MVP in just five weeks. The speed and accuracy were impressive.",
            name: "Founder",
            role: "SaaS Startup",
            location: "India",
          },
          {
            quote:
              "They integrated GPT-based workflows seamlessly into our CRM without disrupting existing systems.",
            name: "VP",
            role: "Marketing Tech Company",
            location: "Singapore",
          },
          {
            quote:
              "Their focus on security and production readiness made enterprise adoption easy.",
            name: "CTO",
            role: "B2B Platform",
            location: "Germany",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: AI-Powered Customer Support Automation"
        client="SaaS CRM Platform"
        challenge="Customer support teams were overwhelmed with manual ticket handling and slow response times."
        solution="Avaantra deployed a team of three AI engineers to build an NLP-powered support automation system using LangChain and secure DevOps pipelines."
        metrics={[
          { value: "62%", label: "Reduction in Support Ticket Load" },
          { value: "48%", label: "Faster Response Time" },
          { value: "99%", label: "Data Privacy Compliance" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire AI Developers"
        faqs={[
          {
            question: "What kind of AI developers can I hire?",
            answer:
              "We provide experts across NLP, computer vision, predictive analytics, and generative AI.",
          },
          {
            question: "Can you integrate AI with my existing app or CRM?",
            answer:
              "Yes. Our AI teams specialize in API-based and plug-in integrations with existing systems.",
          },
          {
            question: "Do you build with OpenAI or custom models?",
            answer:
              "Both. We fine-tune existing LLMs or build domain-specific models based on your needs.",
          },
          {
            question: "How long does it take to build an AI MVP?",
            answer:
              "Typically 6–8 weeks, depending on complexity and data readiness.",
          },
          {
            question: "How do you ensure data privacy?",
            answer:
              "We follow SOC2, GDPR, and ISO-aligned practices. All data is encrypted and fully owned by you.",
          },
          {
            question: "Can AI developers also handle MLOps?",
            answer:
              "Yes. We provide end-to-end support including deployment, scaling, monitoring, and retraining.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because AI isn’t about hype — it’s about results.",
          "We combine the right people, proven processes, and production-ready technology to make AI adoption practical and predictable.",
          "With Avaantra Global, AI becomes a growth lever — not a risky experiment.",
        ]}
        highlight="Real AI systems. Real business impact. Predictable delivery."
      />
      <FinalCTA
        heading="Hire AI Developers in 15 Days — Build Smarter, Faster & Predictable AI Systems."
        subheading="Work with AI engineers who understand models, data, infrastructure, and business impact."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
