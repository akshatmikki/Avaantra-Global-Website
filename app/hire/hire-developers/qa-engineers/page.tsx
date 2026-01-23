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
    "Hire QA Engineers | Manual & Automation Testing Experts | Avaantra Global",
  description:
    "Hire dedicated QA engineers to ensure flawless app performance, usability, and reliability. Avaantra Global provides manual and automation testing experts ready to onboard in 15 days.",
};

export default function QaEngineersPage() {
  return (
    <>
      {/* Hero Section */}
      <HireHero
        title="Hire Dedicated QA Engineers"
        highlight="Ship Quality Software, Faster"
        subtitle="Every bug you miss costs time, trust, and money. Avaantra Global helps you hire experienced QA engineers who ensure your software, web, and mobile applications are tested to perfection — before your users ever find a flaw."
        primaryCta="Hire QA Experts in 15 Days"
        secondaryCta="See How Our QA Teams Ensure Perfection"
        uspList={[
          "Manual and automation QA engineers available in 7–15 days",
          "Reduce post-release defects by up to 85%",
          "Expertise in Selenium, Cypress, Appium, and JMeter",
          "40–50% lower QA cost compared to in-house teams",
          "Real-time test reporting with CI/CD integration",
          "Full IP protection with secure access controls",
        ]}
        stats={[
          { value: "7–15 Days", label: "Onboarding" },
          { value: "60–80%", label: "Faster Test Cycles" },
          { value: "90%", label: "Fewer Production Defects" },
          { value: "100%", label: "QA Visibility" },
        ]}
      />

      {/* Real Problem */}
      <RealProblem
        heading="The Real Problem Businesses Face"
        subheading="Most teams struggle with testing because QA is treated as an afterthought instead of a system."
        problems={[
          { text: "Releases are delayed because testing isn’t automated." },
          { text: "Bugs reach production and frustrate users." },
          { text: "In-house teams lack proper QA tools or bandwidth." },
          {
            text: "Testing cycles don’t align with fast-paced agile delivery.",
          },
        ]}
        conclusionTitle="You don’t just need testers."
        conclusionText="You need QA partners who integrate with your team, own the testing process, and ensure your software is flawless every time — without slowing delivery. That’s exactly what Avaantra Global delivers."
      />

      {/* Our Promise */}
      <OurPromise
        heading="Our Promise: Predictable Quality, Zero Guesswork"
        subheading="We help startups, SaaS products, and enterprises hire skilled QA engineers who ensure confident releases."
        promises={[
          { text: "QA engineers onboarded within 7–15 days" },
          { text: "Fully dedicated manual and automation QA resources" },
          { text: "Managed sprints with transparent test reporting" },
          { text: "QA automation integrated into CI/CD pipelines" },
          { text: "100% defect tracking with root cause analysis (RCA)" },
        ]}
        outcomes={[
          { value: "60–80%", label: "Faster Test Execution" },
          { value: "90%", label: "Fewer Post-Release Defects" },
          { value: "100%", label: "QA Coverage Transparency" },
          { value: "Seamless", label: "Dev Team Integration" },
        ]}
      />
      <OurExpertise
        heading="Our QA Expertise"
        subheading="We embed quality at every stage of development to ensure stable, secure, and user-ready software."
        items={[
          {
            title: "Manual Testing",
            description:
              "Thorough validation of features, workflows, and user experiences to catch issues before release.",
            toolsTitle: "Testing Coverage",
            tools: [
              "Functional Testing",
              "Regression Testing",
              "Smoke Testing",
              "Cross-Browser Testing",
              "Cross-Device Validation",
              "UI/UX & Accessibility Testing",
              "End-to-End User Journey Testing",
            ],
            outcome:
              "Early defect detection and polished, user-friendly product experiences.",
          },
          {
            title: "Automation Testing",
            description:
              "Automated testing pipelines designed to support fast-paced agile and CI/CD environments.",
            toolsTitle: "Automation Stack",
            tools: [
              "Selenium",
              "Cypress",
              "Playwright",
              "Appium",
              "Robot Framework",
              "Jenkins",
              "GitHub Actions",
              "API Testing (Postman, RestAssured)",
              "Allure Reports",
              "TestRail",
              "Zephyr",
            ],
            outcome:
              "Shorter test cycles with higher reliability and consistent test coverage.",
          },
          {
            title: "Performance & Load Testing",
            description:
              "Ensure your applications remain stable and responsive under real-world traffic.",
            toolsTitle: "Performance Testing",
            tools: [
              "JMeter",
              "LoadRunner",
              "Gatling",
              "Stress Testing",
              "Spike Testing",
              "Soak Testing",
              "API Response & Throughput Analysis",
            ],
            outcome:
              "Optimized performance, scalability, and high availability under load.",
          },
          {
            title: "Security & Compliance Testing",
            description:
              "Identify vulnerabilities and ensure regulatory compliance before deployment.",
            toolsTitle: "Security & Compliance",
            tools: [
              "OWASP-Based Penetration Testing",
              "Vulnerability Scanning",
              "Data Protection Validation",
              "GDPR Compliance",
              "HIPAA Compliance",
              "SOC2 Compliance",
            ],
            outcome:
              "Secure, compliant software releases with reduced business risk.",
          },
        ]}
      />
      <IndustriesWeServe
        heading="Industries We Serve"
        subheading="Our QA engineers tailor testing strategies to industry-specific risks, regulations, and user expectations."
        industries={[
          {
            icon: "💳",
            title: "FinTech & Banking",
            description:
              "Secure, compliant QA practices to protect transactions, financial data, and APIs.",
          },
          {
            icon: "🧠",
            title: "SaaS & B2B Platforms",
            description:
              "End-to-end functional, API, and regression testing to ensure smooth updates and releases.",
          },
          {
            icon: "🏥",
            title: "HealthTech & Telemedicine",
            description:
              "HIPAA-compliant testing for data security, integrations, and patient experience.",
          },
          {
            icon: "🛒",
            title: "E-commerce & Retail",
            description:
              "Checkout flow validation, performance testing, and multi-device compatibility assurance.",
          },
          {
            icon: "📚",
            title: "EdTech & Learning Apps",
            description:
              "Content accuracy validation, gamification testing, and accessibility compliance.",
          },
        ]}
        outcome="Industry-specific QA strategies focused on reliability, compliance, and customer satisfaction."
      />
      <WhyAvaantra
        heading="Why Hire QA Engineers from Avaantra Global"
        subheading="Because quality assurance should accelerate delivery — not become a bottleneck."
        advantages={[
          {
            text: "5–10 years average experience across manual, automation, and performance testing",
          },
          {
            text: "Strong expertise in Selenium, Cypress, Playwright, Appium, and API testing",
          },
          {
            text: "QA engineers trained to work inside agile and CI/CD-driven teams",
          },
          {
            text: "Clear test strategies, defect RCA, and measurable quality metrics",
          },
          { text: "Optional QA Lead / Test Manager for complex products" },
          {
            text: "100% IP ownership with complete test artifact transparency",
          },
        ]}
        closingLine="We don’t just test software — we protect your product, users, and reputation."
      />

      <HiringProcess
        heading="Our Hiring Process"
        subheading="A structured, transparent process designed to embed quality into your delivery cycle — fast."
        steps={[
          {
            step: "1",
            title: "Requirement Analysis",
            process:
              "We understand your product, testing goals, tools, tech stack, and release cadence.",
            benefit: "Ideal QA profiles mapped to your exact testing needs",
          },
          {
            step: "2",
            title: "Profile Selection",
            process: "Receive 3–5 pre-vetted QA engineers within 48 hours.",
            benefit: "Save weeks of sourcing and screening time",
          },
          {
            step: "3",
            title: "Interview & Onboard",
            process:
              "Interview, approve, and onboard the QA engineers you trust.",
            benefit: "You stay in full control of who joins your team",
          },
          {
            step: "4",
            title: "Sprint Setup & Delivery",
            process: "Define QA sprints, test plans, and reporting cadence.",
            benefit:
              "Real-time visibility, accountability, and predictable delivery",
          },
          {
            step: "5",
            title: "Continuous Optimization",
            process:
              "Regular defect analysis, coverage reviews, and test optimization.",
            benefit:
              "Continuous quality improvement with fewer production issues",
          },
        ]}
      />
      <EngagementModels
        heading="Engagement Models"
        subheading="Flexible QA engagement models that adapt to your delivery pace and product maturity."
        models={[
          {
            title: "Dedicated QA Engineer",
            bestFor: "Continuous testing and release cycles",
            howItWorks:
              "A full-time QA engineer embedded with your development team.",
            outcome: "Consistent test coverage and faster feedback loops",
          },
          {
            title: "Managed QA Pod",
            bestFor: "Multi-skill QA and automation needs",
            howItWorks:
              "Avaantra manages a pod including manual QA, automation engineers, and reporting.",
            outcome: "2–3X faster validation with reduced management overhead",
          },
          {
            title: "Project-Based",
            bestFor: "Short-term testing or release validation",
            howItWorks: "Fixed-scope QA execution for defined milestones.",
            outcome: "Measurable, fast, and low-risk execution",
          },
          {
            title: "Hybrid Model",
            bestFor: "Manual QA plus automation setup",
            howItWorks:
              "Combination of manual testers and automation specialists.",
            outcome: "Higher efficiency with long-term flexibility",
          },
        ]}
      />
      <Comparison
        heading="Avaantra vs Freelancers vs In-House QA Teams"
        subheading="A clear comparison to help you choose the right QA model for speed, reliability, and scale."
        rows={[
          {
            aspect: "Hiring Speed",
            freelancer: "3–5 weeks",
            inHouse: "2–3 months",
            avaantra: "7–15 days",
          },
          {
            aspect: "QA Skill Coverage",
            freelancer: "Limited",
            inHouse: "Moderate",
            avaantra: "Manual + Automation + Performance",
          },
          {
            aspect: "Cost Efficiency",
            freelancer: "Medium",
            inHouse: "High",
            avaantra: "40–50% Savings",
          },
          {
            aspect: "Delivery Reliability",
            freelancer: "Inconsistent",
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
            aspect: "Process & Reporting",
            freelancer: "Ad-hoc",
            inHouse: "Internal Only",
            avaantra: "Dashboards + QA Metrics",
          },
          {
            aspect: "IP & Test Asset Ownership",
            freelancer: "Risky",
            inHouse: "Safe",
            avaantra: "100% Yours",
          },
        ]}
      />
      <SecurityIP
        heading="Security & IP Protection"
        subheading="Your data, code, and testing assets are fully protected at every stage."
        points={[
          { text: "NDA and legal agreements signed before onboarding" },
          {
            text: "Restricted access to environments, test data, and repositories",
          },
          { text: "Secure test environments with encrypted credentials" },
          { text: "Compliance-aware QA practices (GDPR, HIPAA, SOC2 aligned)" },
          {
            text: "100% ownership of test cases, automation scripts, and reports",
          },
        ]}
        closingLine="Your product data stays secure. Your QA assets remain yours — always."
      />

      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            quote:
              "Avaantra’s QA team found over 120 critical bugs our internal testers missed. Their attention to detail was impressive.",
            name: "CTO",
            role: "SaaS Platform",
            location: "Singapore",
          },
          {
            quote:
              "They made testing part of our delivery process, not a bottleneck — exactly what we needed.",
            name: "Product Manager",
            role: "FinTech Startup",
            location: "India",
          },
          {
            quote:
              "QA automation finally worked the way it should. Releases became predictable.",
            name: "Engineering Manager",
            role: "Enterprise Product",
            location: "Germany",
          },
        ]}
      />
      <CaseStudy
        heading="Case Study: QA Automation for a FinTech Platform"
        client="FinTech Startup (UK)"
        challenge="Manual testing slowed releases and increased production risk."
        solution="Avaantra deployed a team of 3 QA automation engineers to implement Selenium-based regression testing and API validation."
        metrics={[
          { value: "4 Hours", label: "Regression Cycle Time (from 3 days)" },
          { value: "98%", label: "Automated Test Coverage Achieved" },
          { value: "0", label: "Post-Release P1 Defects" },
        ]}
      />
      <FAQs
        heading="FAQs — Before You Hire QA Engineers"
        faqs={[
          {
            question: "How quickly can I onboard a QA engineer?",
            answer:
              "Within 7–15 business days. We pre-vet QA engineers for domain knowledge and tool expertise so you can start without delays.",
          },
          {
            question: "Do you handle both manual and automation testing?",
            answer:
              "Yes. We assign manual QA for early-stage builds and automation engineers for scaling and regression-heavy releases.",
          },
          {
            question: "Can QA engineers work in our time zone?",
            answer:
              "Absolutely. Our QA engineers support IST, GMT, EST, and PST overlap hours to align with your sprint cycles.",
          },
          {
            question: "Do you integrate with CI/CD pipelines?",
            answer:
              "Yes. Our automation engineers integrate testing with Jenkins, GitHub Actions, Bitbucket, and other CI/CD pipelines.",
          },
          {
            question: "What if I’m not satisfied with a QA resource?",
            answer:
              "We replace QA engineers within 15 days at no additional cost and without slowing delivery.",
          },
          {
            question: "How do you ensure data security during testing?",
            answer:
              "We sign NDAs, restrict access permissions, and use secure test environments with encrypted credentials.",
          },
        ]}
      />
      <WhyThisWorks
        heading="Why This Works"
        paragraphs={[
          "Because testing isn’t optional — it’s your competitive edge.",
          "We combine speed, precision, and automation to catch issues early, reduce risk, and keep releases predictable.",
          "With Avaantra Global, QA becomes a system that accelerates delivery instead of slowing it down.",
        ]}
        highlight="Fewer bugs, faster releases, and confident launches."
      />
      <FinalCTA
        heading="Hire QA Engineers in 15 Days — Deliver Flawless Software, Every Time."
        subheading="Embed quality into every release with dedicated QA engineers who integrate seamlessly with your team."
        ctaText="Book a Free Hiring Consultation"
      />
    </>
  );
}
