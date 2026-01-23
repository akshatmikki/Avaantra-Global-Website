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
    "Hire UI/UX Designers | Web, App & SaaS Design Experts | Avaantra Global",
  description:
    "Hire creative UI/UX designers to craft intuitive, conversion-driven designs. Avaantra Global provides experienced product designers for web, app, and SaaS platforms — fast, reliable, and affordable.",
};

export default function UiUxDesignersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire UI/UX Designers"
        highlight="Create Designs That Inspire & Convert"
        subtitle="Design is not decoration — it’s strategy. Avaantra Global helps you hire expert UI/UX designers who blend creativity with usability to craft interfaces that attract, engage, and convert users."
        primaryCta="Hire UI/UX Designers in 15 Days"
        secondaryCta="See How Our Designers Shape Experiences"
        uspList={[
          "Figma, Adobe XD, and Sketch experts ready to onboard",
          "15-day hiring turnaround with zero hiring friction",
          "Proven SaaS, product, and platform design experience",
          "2–3X higher user engagement and retention",
          "Scalable team model — solo designer or full design pod",
          "Brand-consistent design systems and UI libraries",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "40–60%", label: "Higher User Retention" },
          { value: "25–40%", label: "Conversion Lift" },
          { value: "100%", label: "Design Ownership" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem"
        subheading="Great products fail when users struggle to understand or enjoy them."
        problems={[
          { text: "Complex interfaces reduce engagement and adoption." },
          { text: "Poor UX leads to churn and low conversion rates." },
          { text: "Freelancers design without understanding business goals." },
          { text: "In-house design hiring is slow and expensive." },
        ]}
        conclusionTitle="You don’t need more designs."
        conclusionText="You need strategic UI/UX experts who understand user behavior, business goals, and conversion psychology — and turn journeys into measurable outcomes."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: User-Centered Design That Drives Growth"
        subheading="We help startups, SaaS brands, and enterprises hire designers who focus on results — not just visuals."
        promises={[
          { text: "UI/UX designers onboarded within 7–15 days" },
          { text: "End-to-end UX research, wireframing, and prototyping" },
          { text: "Pixel-perfect UI aligned with product and brand goals" },
          { text: "User testing, feedback loops, and continuous iteration" },
          {
            text: "Design handoff-ready assets for seamless developer implementation",
          },
        ]}
        outcomes={[
          { value: "40–60%", label: "Higher User Retention" },
          { value: "25–40%", label: "Conversion Rate Improvement" },
          { value: "Lower", label: "Bounce Rates" },
          { value: "Faster", label: "Product Adoption" },
        ]}
      />
      <OurExpertise
        heading="Our UI/UX Expertise"
        subheading="We design experiences that balance user needs, business goals, and technical feasibility."
        items={[
          {
            title: "UX Research & Strategy",
            description: "We start with understanding users, not assumptions.",
            toolsTitle: "What We Do",
            tools: [
              "User personas & journey mapping",
              "Competitive and heuristic analysis",
              "Usability audits & behavioral research",
            ],
            outcome:
              "Design decisions grounded in real user insights, not guesswork.",
          },
          {
            title: "UI Design & Prototyping",
            description:
              "From low-fidelity ideas to high-fidelity, production-ready designs.",
            toolsTitle: "Design Deliverables",
            tools: [
              "Wireframes & interaction flows",
              "High-fidelity mockups & clickable prototypes",
              "Design systems & reusable component libraries",
            ],
            outcome:
              "Visual clarity with consistent, brand-aligned experiences across screens.",
          },
          {
            title: "SaaS & Web Product Design",
            description:
              "Designing complex products that still feel simple to use.",
            toolsTitle: "Product Focus",
            tools: [
              "Dashboards & analytics UX",
              "Onboarding and activation flows",
              "Workflow simplification for enterprise products",
            ],
            outcome:
              "Scalable, enterprise-ready product experiences that users adopt faster.",
          },
          {
            title: "Mobile App Design",
            description:
              "Mobile-first design that feels native on every platform.",
            toolsTitle: "Mobile UX",
            tools: [
              "iOS & Android design patterns",
              "Cross-platform design systems",
              "Interactive prototypes & usability testing",
            ],
            outcome:
              "Native-level performance with aesthetic precision and usability.",
          },
          {
            title: "Usability Testing & Optimization",
            description:
              "Design doesn’t stop at launch — it evolves with users.",
            toolsTitle: "Optimization",
            tools: [
              "A/B testing & heatmap analysis",
              "User feedback loops",
              "Accessibility compliance (WCAG 2.1)",
            ],
            outcome:
              "Continuous improvement driven by real user behavior and feedback.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our designers understand industry-specific user behavior, trust signals, and conversion triggers."
        industries={[
          {
            icon: "💳",
            title: "FinTech & Banking",
            description:
              "Simplified interfaces for complex workflows with trust-driven design patterns.",
          },
          {
            icon: "🧠",
            title: "SaaS & B2B Products",
            description:
              "Clean, functional UX that converts free users into paying customers.",
          },
          {
            icon: "🏥",
            title: "HealthTech & Healthcare",
            description:
              "Patient-friendly interfaces built with accessibility and compliance in mind.",
          },
          {
            icon: "🛒",
            title: "E-commerce & Marketplaces",
            description:
              "Engaging storefronts optimized for clicks, carts, and conversions.",
          },
          {
            icon: "📚",
            title: "EdTech & Learning Platforms",
            description:
              "Interactive, gamified learning interfaces that boost engagement and retention.",
          },
        ]}
        outcome="Industry-aware UI/UX design focused on usability, trust, and measurable business impact."
      />
      <WhyAvaantra
        heading="Why Hire UI/UX Designers from Avaantra Global"
        subheading="Because great design is a business function — not an art experiment."
        advantages={[
          {
            text: "5–10 years average experience in SaaS, web, and mobile product design",
          },
          {
            text: "Strong balance of UX strategy, visual design, and usability testing",
          },
          {
            text: "Designers trained to think in funnels, retention, and conversion metrics",
          },
          {
            text: "Clean, developer-ready handoffs that reduce build friction",
          },
          { text: "Optional UX Lead or Design Manager for complex products" },
          { text: "100% ownership of design files, systems, and IP" },
        ]}
        closingLine="We don’t just design interfaces — we design outcomes your business can measure."
      />

      <HiringProcess
        heading="Our Hiring Process"
        subheading="A simple, collaborative process to bring the right UI/UX talent into your product team — fast."
        steps={[
          {
            step: "1",
            title: "Share Design Goals",
            process:
              "Define your product vision, target users, brand guidelines, and success metrics.",
            benefit:
              "Targeted designer profiles aligned with your brand and product goals",
          },
          {
            step: "2",
            title: "Receive Pre-Vetted Designers",
            process: "Get 3–5 experienced UI/UX designers within 48 hours.",
            benefit:
              "Interview and choose the best-fit designer with full control",
          },
          {
            step: "3",
            title: "Onboard & Kickoff",
            process:
              "Designer integrates into your workflow, tools, and design systems.",
            benefit: "Fast onboarding within 7–15 days",
          },
          {
            step: "4",
            title: "Collaborate & Deliver",
            process: "Work together via Figma, Slack, and sprint reviews.",
            benefit: "Real-time design delivery with complete visibility",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Flexible design engagement models that adapt to your product stage and creative needs."
        models={[
          {
            title: "Dedicated Designer",
            bestFor: "Continuous product or brand design",
            howItWorks:
              "A full-time UI/UX designer focused exclusively on your product.",
            outcome: "Consistent design language and strong brand focus",
          },
          {
            title: "Managed Design Pod",
            bestFor: "Web, mobile, and UX research-heavy projects",
            howItWorks:
              "Avaantra manages a design pod including UI, UX, and research specialists.",
            outcome: "End-to-end creative system with faster delivery",
          },
          {
            title: "Project-Based",
            bestFor: "Website or app redesigns",
            howItWorks: "Fixed-scope design delivery with clear milestones.",
            outcome: "Quick turnaround with measurable results",
          },
          {
            title: "Hybrid Model",
            bestFor: "Ongoing design plus continuous optimization",
            howItWorks: "Combination of dedicated design and managed support.",
            outcome: "Sustained design growth with flexibility",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House Designers"
        subheading="A clear comparison to help you choose the right UI/UX design partner."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "3–5 weeks",
            inHouse: "2–3 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "UX Strategy & Research",
            freelancer: "Limited",
            inHouse: "Moderate",
            avaantra: "Strong & Structured",
          },
          {
            aspect: "Design Consistency",
            freelancer: "Inconsistent",
            inHouse: "Good",
            avaantra: "Design Systems Driven",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Medium",
            inHouse: "High",
            avaantra: "40–60% Savings",
          },
          {
            aspect: "Scalability",
            freelancer: "Low",
            inHouse: "Slow",
            avaantra: "Instant & Flexible",
          },
          {
            aspect: "Collaboration & Handoff",
            freelancer: "Ad-hoc",
            inHouse: "Internal Only",
            avaantra: "Designer + Dev Aligned",
          },
          {
            aspect: "IP & File Ownership",
            freelancer: "Risky",
            inHouse: "Yes",
            avaantra: "100% Yours",
          },
        ]}
      />
      <SecurityIP
        heading="Security & IP Protection"
        subheading="Your designs, brand assets, and product ideas are fully protected."
        points={[
          { text: "NDA and legal agreements signed before onboarding" },
          {
            text: "100% ownership of Figma files, design systems, and prototypes",
          },
          { text: "Access-controlled collaboration and private workspaces" },
          {
            text: "Secure handling of brand assets, product flows, and research data",
          },
          { text: "No reuse or reselling of designs — ever" },
        ]}
        closingLine="Your designs remain your competitive advantage — not our portfolio assets."
      />

      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s designers understood our users better than we did. Their insights changed how we think about UX.",
            name: "Founder",
            role: "SaaS Platform",
            location: "UK",
          },
          {
            quote:
              "Our conversions grew by 37% after the redesign. The results were both beautiful and measurable.",
            name: "CMO",
            role: "FinTech App",
            location: "India",
          },
          {
            quote:
              "Design handoffs were clean, structured, and developer-ready — a rare experience.",
            name: "Engineering Lead",
            role: "B2B Product",
            location: "Germany",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: UI/UX for a SaaS Dashboard"
        client="Productivity SaaS Startup"
        challenge="Low user retention and poor dashboard usability reduced product adoption."
        solution="Avaantra redesigned the dashboard UI, simplified workflows, and optimized the onboarding experience."
        metrics={[
          { value: "+42%", label: "User Engagement" },
          { value: "+31%", label: "Retention Increase" },
          { value: "2.5X", label: "Faster Onboarding Completion" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire UI/UX Designers"
        faqs={[
          {
            question: "Do you provide both UI and UX designers?",
            answer:
              "Yes. Based on your needs, we assign dedicated UX strategists, UI designers, or hybrid profiles who handle both.",
          },
          {
            question:
              "How do you ensure design aligns with our brand identity?",
            answer:
              "We begin with brand guideline audits, moodboards, and visual direction before designing screens to ensure consistency.",
          },
          {
            question: "Do you conduct user testing?",
            answer:
              "Absolutely. We validate designs using tools like Maze, Hotjar, and interactive Figma prototypes before final delivery.",
          },
          {
            question: "Can designers work directly with our developers?",
            answer:
              "Yes. Our designers collaborate directly with your developers via Figma, Slack, and Jira for seamless handoff.",
          },
          {
            question: "How soon can you onboard a designer?",
            answer:
              "Typically within 7–15 days after you approve the designer profile.",
          },
          {
            question: "Do you deliver full design systems or just screens?",
            answer:
              "We build scalable, component-based design systems — not just static screens — to support long-term growth.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because great design isn’t decoration — it’s growth.",
          "We combine UX strategy, visual clarity, and real user validation to design experiences that actually convert.",
          "With Avaantra Global, design decisions are driven by business goals, not guesswork.",
        ]}
        highlight="Designs that look great, work better, and deliver measurable results."
      />
      <FinalCTA
        heading="Hire UI/UX Designers in 15 Days — Design Experiences That Convert."
        subheading="Work with designers who understand users, business goals, and developer workflows."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
