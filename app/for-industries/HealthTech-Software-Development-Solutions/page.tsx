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
    Stethoscope,
    Hospital,
    Brain,
    HeartPulse,
    FlaskConical,
    FileCheck2,
    Watch,
    ShieldCheck,
    Cpu,
    Layers,
    Lock,
    Users,
    FileText,
    Pill
} from "lucide-react"

export default function HealthTechSoftwareDevelopmentSolutionsPage() {
    return (
        <>
            {/* HERO */}
            <HeroSection
                title="Transforming Healthcare with Secure, Intelligent & Patient-Centric Technology"
                subtitle="From telemedicine to AI-driven health analytics, Avaantra Global helps healthcare organizations, startups, and SaaS providers deliver digital care that’s secure, compliant, and built for scale."
                primaryCTA="Book a Free Consultation"
                secondaryCTA="Explore HealthTech Case Studies"
            />

            {/* WHY HEALTHTECH */}
            <InfoSection
                title="Why Digital Health Innovation Matters"
                description="Healthcare is evolving — patients expect convenience, clinicians demand insight, and payers need transparency. Digital-first, data-driven, and patient-powered systems are redefining care delivery, but only when built with compliance, security, and interoperability at the core."
                points={[
                    "Legacy systems with fragmented and disconnected patient data",
                    "Strict regulatory frameworks (HIPAA, GDPR, HL7, FHIR)",
                    "Cybersecurity risks and data privacy concerns",
                    "Rising demand for AI-driven diagnostics and predictive care",
                ]}
                quote="We don’t just code healthcare apps — we engineer digital trust."
            />

            {/* SERVICES */}
            <ServiceGrid
                title="Our HealthTech Software Development Services"
                services={[
                    {
                        title: "Custom Healthcare Software Development",
                        description: "Design and build EHR, EMR, and practice management systems",
                        value: "Streamlined patient records and operations",
                    },
                    {
                        title: "Telemedicine App Development",
                        description: "Secure video consultations, scheduling, and e-prescriptions",
                        value: "Improved patient access and engagement",
                    },
                    {
                        title: "Patient Portals & Engagement Apps",
                        description: "Mobile and web portals for appointments, records, and care tracking",
                        value: "Enhanced patient experience and retention",
                    },
                    {
                        title: "AI & Predictive Healthcare Analytics",
                        description: "Machine learning for diagnostics, risk prediction, and automation",
                        value: "Data-driven clinical decisions",
                    },
                    {
                        title: "Medical Device & IoT Integration",
                        description: "Integration with wearables, sensors, and diagnostic devices",
                        value: "Continuous real-time health monitoring",
                    },
                    {
                        title: "Healthcare CRM & Workflow Systems",
                        description: "Patient journey management and operational workflows",
                        value: "Higher efficiency and transparency",
                    },
                    {
                        title: "Compliance & Security Consulting",
                        description: "HIPAA, GDPR, ISO, FHIR, and healthcare security frameworks",
                        value: "Fully compliant digital infrastructure",
                    },
                    {
                        title: "mHealth App Development",
                        description: "Cross-platform mobile health applications",
                        value: "Scalable and accessible digital care",
                    },
                ]}
                ctaText="Let’s Build Your HealthTech Platform →"
            />

            {/* TYPES */}
            <IconCardGrid
                title="Healthcare Solutions We Build"
                items={[
                    { title: "Telemedicine Platforms", icon: Stethoscope },
                    { title: "Electronic Health Records (EHR/EMR)", icon: FileText },
                    { title: "Hospital Management Systems (HMS)", icon: Hospital },
                    { title: "AI Diagnostic Systems", icon: Brain },
                    { title: "IoT Health Monitoring", icon: Watch },
                    { title: "Patient Engagement & Wellness Apps", icon: HeartPulse },
                    { title: "Pharmacy Management Software", icon: Pill },
                    { title: "Insurance & Claims Automation", icon: FileCheck2 },
                    { title: "Clinical Research & Trial Tools", icon: FlaskConical },
                ]}
            />

            {/* WHY AVAANTRA */}
            <FeatureGrid
                title="Why Choose Avaantra Global for HealthTech Development"
                features={[
                    {
                        title: "Deep Healthcare Domain Expertise",
                        description: "20+ years building scalable, compliant healthcare and SaaS platforms",
                        icon: ShieldCheck,
                    },
                    {
                        title: "Regulatory-Ready by Design",
                        description: "HIPAA, GDPR, HL7, FHIR & ISO-aligned development workflows",
                        icon: Lock,
                    },
                    {
                        title: "AI-Powered Healthcare Innovation",
                        description: "Predictive diagnostics, automation, and personalized care analytics",
                        icon: Cpu,
                    },
                    {
                        title: "End-to-End Product Delivery",
                        description: "Discovery → design → development → deployment → support",
                        icon: Layers,
                    },
                    {
                        title: "Interoperability & EHR Integrations",
                        description: "Epic, Cerner, Allscripts & custom health system integrations",
                        icon: Users,
                    },
                    {
                        title: "Human-Centered Healthcare Design",
                        description: "UX that empowers patients, clinicians, and care teams",
                        icon: HeartPulse,
                    },
                ]}
                footerQuote="We bring empathy to engineering — because healthcare deserves both."
            />

            {/* PROCESS */}
            <ProcessSteps
                title="Our Process — From Concept to Care"
                steps={[
                    {
                        title: "Discovery & Compliance Audit",
                        description: "Define use cases, map data flows, and establish HIPAA, GDPR, and regulatory boundaries",
                    },
                    {
                        title: "UX/UI & System Architecture Design",
                        description: "Design patient, clinician, and admin experiences with scalable, interoperable architecture",
                    },
                    {
                        title: "Development & API Integration",
                        description: "Build core modules, integrate EHRs, third-party APIs, and connected medical devices",
                    },
                    {
                        title: "Testing & Security Validation",
                        description: "Quality assurance, penetration testing, and data encryption audits",
                    },
                    {
                        title: "Deployment & Ongoing Support",
                        description: "Cloud deployment, performance optimization, compliance monitoring, and updates",
                    },
                ]}
                duration="12–16 weeks for MVP; 20–24 weeks for enterprise-grade platforms"
            />

            {/* TECH STACK */}
            <TechStackGrid
                title="HealthTech Technology Stack"
                items={[
                    "Frontend: React, Angular, Vue, Next.js, Flutter, Swift",
                    "Backend: Node.js, Python (Django/FastAPI), .NET, Java Spring",
                    "Databases: PostgreSQL, MongoDB, MySQL, Firestore",
                    "Cloud: AWS (HealthLake), Azure Health Data Services, Google Cloud",
                    "AI & Data: TensorFlow, PyTorch, OpenAI API, Power BI",
                    "Healthcare Standards: HL7, FHIR, DICOM",
                    "Security & Compliance: HIPAA, GDPR, ISO 27001, SOC 2, AES-256",
                    "Interoperability: Epic, Cerner, Allscripts, Apple HealthKit, Fitbit",
                ]}
            />

            {/* USE CASES */}
            <CaseStudyGrid
                title="Use Cases & Case Studies"
                cases={[
                    {
                        title: "Telemedicine Platform (India)",
                        result: "5× faster consultations; 40% higher patient retention",
                    },
                    {
                        title: "AI-Powered Diagnostics Startup (US)",
                        result: "70% faster radiology reporting; 20% improved diagnostic accuracy",
                    },
                    {
                        title: "Hospital Management System (UAE)",
                        result: "35% reduction in administrative costs via unified HMS",
                    },
                ]}
            />

            {/* CHALLENGES */}
            <SplitListSection
                title="Key Healthcare Challenges We Solve"
                left={[
                    "⚕️ Complex compliance & data regulations (HIPAA, GDPR, HL7)",
                    "🧩 Fragmented systems across providers and departments",
                    "🧠 Limited AI and data-driven diagnostics",
                ]}
                right={[
                    "🧾 Manual administrative and operational overheads",
                    "🔒 Cybersecurity risks from legacy infrastructure",
                    "💡 Low patient engagement across digital channels",
                ]}
            />

            {/* BENEFITS */}
            <SplitListSection
                title="Benefits of Partnering with Avaantra Global"
                left={[
                    "🚀 Accelerated product development — MVPs in 12–16 weeks",
                    "🧠 AI-powered care with predictive and personalized insights",
                    "📈 Improved operational efficiency through automation",
                ]}
                right={[
                    "🔒 End-to-end compliance — HIPAA, GDPR, HL7 & FHIR ready",
                    "🌍 Global delivery excellence for startups and hospitals",
                    "💬 24/7 support with continuous monitoring and optimization",
                ]}
                quote="We make healthcare simpler, smarter, and safer."
            />

            {/* COMPLIANCE */}
            <ComplianceList
                title="Compliance & Security Framework"
                left={[
                    "🔒 HIPAA, GDPR & ISO 27001 certified architecture",
                    "🧑‍💼 Role-based access control (RBAC)",
                    "🔐 End-to-end data encryption (at rest & in transit)",
                ]}
                right={[
                    "☁️ Secure cloud hosting with regular penetration testing",
                    "🛡️ AI & data ethics compliance by design",
                ]}
            />

            {/* FAQs */}
            <FAQGrid
                title="Frequently Asked Questions"
                faqs={[
                    {
                        question: "Do you build HIPAA-compliant healthcare applications?",
                        answer:
                            "Yes — all our HealthTech solutions are built to comply with HIPAA, GDPR, ISO 27001, and healthcare data standards.",
                    },
                    {
                        question: "Can you integrate with existing hospital EHR or EMR systems?",
                        answer:
                            "Absolutely. We support HL7, FHIR, and DICOM protocols and integrate with Epic, Cerner, and other major EHR platforms.",
                    },
                    {
                        question: "Do you build telemedicine and virtual care applications?",
                        answer:
                            "Yes — including secure video consultations, scheduling, e-prescriptions, and patient communication tools.",
                    },
                    {
                        question: "Do you develop patient portals and mobile health apps?",
                        answer:
                            "Yes — we build cross-platform mobile and web apps for patients, clinicians, and care teams.",
                    },
                    {
                        question: "Can you handle AI-based healthcare diagnostics and analytics?",
                        answer:
                            "Absolutely — we build AI solutions for radiology, pathology, predictive analytics, and clinical decision support.",
                    },
                    {
                        question: "Can you integrate IoT devices and wearable health sensors?",
                        answer:
                            "Yes — we develop IoT-enabled platforms for remote patient monitoring and real-time health data capture.",
                    },
                    {
                        question: "How do you ensure patient data security?",
                        answer:
                            "Through multi-layer encryption, role-based access control, secure cloud infrastructure, and continuous compliance audits.",
                    },
                    {
                        question: "Do you provide post-deployment support and maintenance?",
                        answer:
                            "Yes — we offer 24/7 monitoring, security updates, performance optimization, and compliance support.",
                    },
                    {
                        question: "How long does it take to build a HealthTech product?",
                        answer:
                            "Typically 12–20 weeks, depending on the scope, features, and system integrations.",
                    },
                    {
                        question: "Do you work with startups, hospitals, and global healthcare providers?",
                        answer:
                            "Yes — we partner with HealthTech startups, hospitals, and enterprises across North America, Europe, and APAC.",
                    },
                    {
                        question: "Can you deliver documentation for compliance and security audits?",
                        answer:
                            "Yes — we provide complete technical, security, and compliance documentation required for regulatory audits.",
                    },
                    {
                        question: "Do you develop white-label HealthTech platforms?",
                        answer:
                            "Yes — fully customizable, white-label-ready platforms for SaaS and telehealth businesses.",
                    },
                ]}
            />

            {/* FINAL CTA */}
            <FinalCTA
                title="Digitize. Personalize. Revolutionize Healthcare."
                subtitle="Partner with Avaantra Global to build HealthTech solutions that connect patients, doctors, and data securely — for better care and lasting trust."
                primaryCTA="Start Your HealthTech Project"
                secondaryCTA="Download Healthcare Solutions Deck"
                trustText="HIPAA Compliant • ISO 27001 Certified • GDPR Secure • 22+ Years Experience • 200+ Healthcare Projects Delivered"
            />
        </>
    )
}
