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
    "Hire Data Scientists | Machine Learning & Analytics Experts | Avaantra Global",
  description:
    "Hire dedicated data scientists to transform your data into actionable insights. Avaantra Global provides skilled data analytics and ML professionals — fast, secure, and scalable within 15 days.",
};

export default function DataScientistsPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated Data Scientists"
        highlight="Transform Data Into Decisions"
        subtitle="Your data holds hidden opportunities — if you have the right people to uncover them. Avaantra Global helps you hire experienced data scientists and engineers who analyze, automate, and predict business outcomes using advanced machine learning and AI."
        primaryCta="Hire Data Scientists in 15 Days"
        secondaryCta="See How Our Data Teams Deliver Measurable Results"
        uspList={[
          "Data scientists skilled in Python, R, TensorFlow, and SQL",
          "Onboard top talent in 7–15 days with zero hiring delays",
          "End-to-end analytics, ML, and predictive modeling expertise",
          "35–50% lower cost compared to in-house data teams",
          "NDA, IP protection, and enterprise-grade data security",
          "Dedicated Project Manager with sprint-based delivery visibility",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "3–5X", label: "Faster Data Analysis" },
          { value: "40%", label: "Lower Data Ops Cost" },
          { value: "ROI", label: "Data-Driven Decisions" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem Businesses Face"
        subheading="Most organizations collect data — very few turn it into real business value."
        problems={[
          {
            text: "You have terabytes of data but limited actionable insights.",
          },
          {
            text: "In-house analysts are overworked or lack advanced ML skills.",
          },
          { text: "Predictive accuracy and business alignment are missing." },
          { text: "Building a data science team internally takes months." },
        ]}
        conclusionTitle="You don’t need more reports."
        conclusionText="You need actionable intelligence. Avaantra Global provides data scientists who think like business strategists — turning information into revenue growth and operational efficiency."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: From Data to Decision — Predictable, Measurable Outcomes"
        subheading="We help startups, SaaS platforms, and enterprises hire pre-vetted data scientists within 7–15 days."
        promises={[
          { text: "Full-time or project-based data science experts" },
          { text: "Data pipelines, AI automation, and predictive analytics" },
          { text: "Real-time dashboards and KPI reporting" },
          {
            text: "Seamless integration with your existing tools and infrastructure",
          },
        ]}
        outcomes={[
          { value: "3–5X", label: "Faster Analysis Cycles" },
          { value: "40%", label: "Lower Data Operations Cost" },
          { value: "Measurable", label: "ROI from Insights" },
          { value: "Higher", label: "Prediction Accuracy & Confidence" },
        ]}
      />
      <OurExpertise
        heading="Our Data Science Expertise"
        subheading="We combine advanced data engineering, analytics, and machine learning with real business context — so insights actually drive decisions."
        items={[
          {
            title: "Data Collection & Engineering",
            description:
              "We design and manage scalable data foundations that teams can trust.",
            toolsTitle: "Data Engineering Stack",
            tools: [
              "ETL pipelines with Apache Airflow, Spark, and Databricks",
              "Data warehousing on AWS Redshift, Azure Synapse, and BigQuery",
              "Data lakes and real-time streaming pipelines",
              "Data quality checks and monitoring",
            ],
            outcome:
              "Unified, clean, and accessible data infrastructure across the organization.",
          },
          {
            title: "Data Analysis & Visualization",
            description:
              "Turn complex datasets into clear insights your teams can act on.",
            toolsTitle: "Analytics & BI",
            tools: [
              "Python (Pandas, NumPy), R, SQL",
              "Power BI, Tableau, Looker dashboards",
              "KPI tracking and forecasting systems",
              "Ad-hoc analysis and executive reporting",
            ],
            outcome:
              "Real-time insights that empower faster, smarter decision-making.",
          },
          {
            title: "Predictive Modeling & Machine Learning",
            description:
              "Build models that predict outcomes, not just explain the past.",
            toolsTitle: "ML & Modeling",
            tools: [
              "Scikit-learn, TensorFlow, PyTorch",
              "Regression, classification, clustering, and NLP models",
              "Model deployment via Flask, FastAPI, or Streamlit",
              "Model monitoring and retraining strategies",
            ],
            outcome:
              "Smarter forecasting, recommendations, and automated decision systems.",
          },
          {
            title: "AI & Automation Integrations",
            description:
              "Embed intelligence directly into your products and workflows.",
            toolsTitle: "AI & Automation",
            tools: [
              "Chatbots and NLP integrations",
              "OpenAI API and LangChain-based solutions",
              "MLOps pipelines and automation workflows",
              "AI-powered process optimization",
            ],
            outcome:
              "Faster automation and measurable efficiency gains driven by AI.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our data scientists tailor models and analytics to industry-specific challenges, regulations, and growth goals."
        industries={[
          {
            icon: "💳",
            title: "FinTech & Banking",
            description:
              "Risk prediction, fraud detection, credit scoring, and personalized financial insights.",
          },
          {
            icon: "🧠",
            title: "SaaS & B2B Products",
            description:
              "Behavioral analytics to improve retention, pricing strategy, and product adoption.",
          },
          {
            icon: "🏥",
            title: "HealthTech & Life Sciences",
            description:
              "AI-driven patient insights, diagnostics prediction, and personalized care analysis.",
          },
          {
            icon: "🛒",
            title: "E-commerce & Retail",
            description:
              "Product recommendations, customer segmentation, demand forecasting, and churn reduction.",
          },
          {
            icon: "📚",
            title: "EdTech & E-learning",
            description:
              "Adaptive learning paths, engagement analytics, and outcome-based performance tracking.",
          },
        ]}
        outcome="Turn raw data into an engine of growth, efficiency, and customer intelligence."
      />
      <WhyAvaantra
        heading="Why Hire Data Scientists from Avaantra Global"
        subheading="Because data science only works when it connects math, engineering, and business reality."
        advantages={[
          {
            text: "5–10 years average experience across analytics, ML, and data engineering",
          },
          {
            text: "Strong business-first mindset — models built to answer real questions",
          },
          { text: "Expertise across Python, SQL, ML frameworks, and BI tools" },
          { text: "Clean, production-ready pipelines — not just notebooks" },
          {
            text: "Dedicated PM and sprint-based delivery visibility (optional)",
          },
          { text: "100% IP ownership with full transparency over data assets" },
        ]}
        closingLine="We don’t experiment with your data — we turn it into dependable business intelligence."
      />

      <HiringProcess
        heading="Our Hiring Process"
        subheading="A transparent, data-driven hiring process designed to deliver value fast."
        steps={[
          {
            step: "1",
            title: "Define Your Needs",
            process:
              "Share your business goals, data challenges, and technical environment.",
            benefit:
              "Domain-specific data scientist profiles mapped to your use case",
          },
          {
            step: "2",
            title: "Get Shortlisted Profiles",
            process: "Receive 3–5 pre-vetted data scientists within 48 hours.",
            benefit: "Save months of hiring and screening effort",
          },
          {
            step: "3",
            title: "Interview & Approve",
            process:
              "Interview candidates and validate technical and business fit.",
            benefit: "Full control over who joins your team",
          },
          {
            step: "4",
            title: "Onboard & Integrate",
            process: "Set up access to data sources, tools, and dashboards.",
            benefit: "Smooth transition from onboarding to delivery",
          },
          {
            step: "5",
            title: "Monitor, Measure & Optimize",
            process: "Weekly reports, insights reviews, and KPI tracking.",
            benefit: "Continuous improvement with measurable ROI",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Flexible engagement options designed to match your data maturity and delivery goals."
        models={[
          {
            title: "Dedicated Data Scientist",
            bestFor: "Ongoing analytics and ML initiatives",
            howItWorks:
              "A full-time data scientist aligned with your business goals and data roadmap.",
            outcome: "Continuous optimization and insight generation",
          },
          {
            title: "Managed Analytics Pod",
            bestFor: "Complex, multi-skill data projects",
            howItWorks:
              "Avaantra manages a cross-functional team including data engineers, ML experts, and BI specialists.",
            outcome: "2–3X faster insight generation with reduced overhead",
          },
          {
            title: "Project-Based",
            bestFor: "Specific analysis, dashboards, or model builds",
            howItWorks: "Fixed scope delivery with defined KPIs and timelines.",
            outcome: "Fast, result-focused execution",
          },
          {
            title: "Hybrid Model",
            bestFor: "Continuous data evolution and experimentation",
            howItWorks:
              "Combination of dedicated experts and managed delivery.",
            outcome: "Flexibility with long-term reliability",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Data Teams"
        subheading="A practical comparison to help you choose the right data science model."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "4–6 weeks",
            inHouse: "3–4 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "Analytics + ML Coverage",
            freelancer: "Limited",
            inHouse: "Good",
            avaantra: "End-to-End",
          },
          {
            aspect: "Business Alignment",
            freelancer: "Low",
            inHouse: "Moderate",
            avaantra: "High",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Medium",
            inHouse: "High",
            avaantra: "35–50% Savings",
          },
          {
            aspect: "Scalability",
            freelancer: "Low",
            inHouse: "Slow",
            avaantra: "Instant & Flexible",
          },
          {
            aspect: "Delivery Reliability",
            freelancer: "Inconsistent",
            inHouse: "Stable",
            avaantra: "High + Managed",
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
        heading="Security & IP Protection"
        subheading="Your data, models, and intellectual property are protected at every stage."
        points={[
          { text: "NDA and legal agreements signed before onboarding" },
          {
            text: "Encrypted access to data sources, pipelines, and dashboards",
          },
          {
            text: "Strict access control for production and staging environments",
          },
          { text: "GDPR / SOC2-aligned data handling practices" },
          {
            text: "100% ownership of datasets, models, pipelines, and reports",
          },
        ]}
        closingLine="Your data stays yours. Your models stay yours. Always."
      />

      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra helped us turn years of messy data into a real analytics engine. Their approach was structured and business-focused.",
            name: "CTO",
            role: "FinTech Platform",
            location: "Singapore",
          },
          {
            quote:
              "We finally make decisions with confidence instead of guesses. The impact was visible within weeks.",
            name: "Founder",
            role: "SaaS Startup",
            location: "India",
          },
          {
            quote:
              "Their data scientists understood both the data and the business — a rare combination.",
            name: "Head of Analytics",
            role: "E-commerce Company",
            location: "Germany",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: Predictive Analytics for an E-commerce Brand"
        client="D2C Retailer"
        challenge="Lack of data-driven demand forecasting resulted in overstocking and missed sales opportunities."
        solution="Avaantra deployed a team of 3 data scientists to build forecasting models, BI dashboards, and automated pipelines."
        metrics={[
          { value: "92%", label: "Forecasting Accuracy" },
          { value: "48%", label: "Reduction in Excess Inventory" },
          { value: "30%", label: "Faster Reporting Cycles" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire Data Scientists"
        faqs={[
          {
            question: "How soon can I onboard a data scientist?",
            answer:
              "Within 7–15 business days depending on scope. All profiles are pre-vetted for technical and industry experience.",
          },
          {
            question: "Do you cover both analytics and machine learning?",
            answer:
              "Yes. Our teams handle everything from data cleaning and analysis to model building, deployment, and visualization.",
          },
          {
            question: "How do you handle data security?",
            answer:
              "We work under strict NDAs, encrypted connections, and GDPR/SOC2-aligned practices. All data and IP remain yours.",
          },
          {
            question: "Can I hire part-time data scientists?",
            answer:
              "Yes. We offer part-time, full-time, hourly, and project-based engagement models.",
          },
          {
            question: "What if our data is messy or unstructured?",
            answer:
              "Our data engineers clean, structure, and build pipelines before analysis or modeling begins.",
          },
          {
            question: "Do you provide BI dashboard setup?",
            answer:
              "Absolutely. We build dashboards using Power BI, Tableau, or Looker with automated reporting.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because in today’s world, decisions backed by data outperform guesses every time.",
          "We combine strong data engineering, advanced analytics, and business understanding to deliver insights you can trust.",
          "With Avaantra Global, data science becomes a growth engine — not an experiment.",
        ]}
        highlight="Predictable insights, measurable ROI, and smarter decisions."
      />
      <FinalCTA
        heading="Hire Data Scientists in 15 Days — Turn Your Data Into an Engine of Growth."
        subheading="Work with data experts who understand analytics, AI, and real business impact."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
