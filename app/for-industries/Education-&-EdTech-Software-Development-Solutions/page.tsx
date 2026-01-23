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
    GraduationCap,
    Video,
    Smartphone,
    Brain,
    ClipboardCheck,
    BarChart3,
    Briefcase,
    Layers,
    ShieldCheck,
    Cpu,
    Lock,
    Users,
    Sparkles,
} from "lucide-react"

export default function EducationEdTechPage() {
    return (
        <>
            {/* HERO */}
            <HeroSection
                title="Reimagining Education Through Technology and Human Connection"
                subtitle="We help EdTech startups, schools, and universities build intelligent, accessible, and personalized digital learning platforms that empower educators and engage learners globally."
                primaryCTA="Book a Free Consultation"
                secondaryCTA="View EdTech Case Studies"
            />

            {/* WHY DIGITAL LEARNING */}
            <InfoSection
                title="Why Education Needs Digital Transformation"
                description="Education has moved beyond classrooms. Students today learn anywhere, anytime — through mobile, video, and AI-driven platforms. Yet many institutions and EdTech founders struggle to modernize learning in a way that is engaging, measurable, and scalable."
                points={[
                    "Outdated LMS systems with poor user experience",
                    "Low student engagement and course completion rates",
                    "Lack of real-time analytics for learning performance",
                    "Fragmented communication between educators and learners",
                ]}
                quote="We build learning systems that inspire curiosity — not just compliance."
            />

            {/* SERVICES */}
            <ServiceGrid
                title="Our Education & EdTech Development Services"
                subheading="We deliver technology that enhances learning outcomes, streamlines operations, and scales across institutions and audiences."
                services={[
                    {
                        title: "Learning Management System (LMS) Development",
                        description:
                            "Build cloud-based LMS for institutions or enterprises with modern UX/UI.",
                        value: "Seamless learning delivery and progress tracking",
                    },
                    {
                        title: "Virtual Classroom Solutions",
                        description:
                            "HD video, live chat, whiteboards, and interactive quizzes.",
                        value: "Immersive, collaborative learning environments",
                    },
                    {
                        title: "Custom EdTech Product Development",
                        description:
                            "End-to-end software for startups and training businesses.",
                        value: "Market-ready EdTech products in 12–16 weeks",
                    },
                    {
                        title: "Student Information Systems (SIS)",
                        description:
                            "Centralized platform for managing admissions, attendance, and performance.",
                        value: "Efficient academic administration",
                    },
                    {
                        title: "AI-Based Learning Analytics",
                        description:
                            "Measure engagement, learning progress, and course effectiveness.",
                        value: "Data-driven teaching strategies",
                    },
                    {
                        title: "Mobile Learning Apps (mLearning)",
                        description:
                            "Android and iOS apps for accessible learning on the go.",
                        value: "Higher student participation and retention",
                    },
                    {
                        title: "Content Management & Automation",
                        description:
                            "Automated publishing, versioning, and personalized content delivery.",
                        value: "Scalable content delivery",
                    },
                    {
                        title: "Gamified Learning Platforms",
                        description:
                            "Rewards, leaderboards, and social interaction mechanics.",
                        value: "40–60% higher learner engagement",
                    },
                ]}
                ctaText="Let’s Build Your Learning Platform →"
            />

            {/* SOLUTIONS */}
            <IconCardGrid
                title="Education & EdTech Solutions We Build"
                items={[
                    {
                        title: "Learning Management Systems (LMS)",
                        description: "Moodle-like or fully custom education management systems",
                        icon: GraduationCap,
                    },
                    {
                        title: "Virtual Classrooms & Video Conferencing",
                        description: "Real-time teaching platforms with chat and collaboration",
                        icon: Video,
                    },
                    {
                        title: "Corporate Training Platforms",
                        description: "Employee learning, onboarding, and compliance systems",
                        icon: Briefcase,
                    },
                    {
                        title: "Assessment & Exam Software",
                        description: "Automated grading, remote proctoring, and AI evaluation",
                        icon: ClipboardCheck,
                    },
                    {
                        title: "Education Marketplaces",
                        description: "Coursera- or Udemy-style learning portals",
                        icon: Layers,
                    },
                    {
                        title: "School & University Management Systems",
                        description: "Integrated academic and administrative platforms",
                        icon: GraduationCap,
                    },
                    {
                        title: "AI-Powered Adaptive Learning Systems",
                        description: "Personalized course paths and smart recommendations",
                        icon: Brain,
                    },
                ]}
                footerQuote="We turn digital learning into lifelong learning."
            />

            {/* WHY AVAANTRA */}
            <FeatureGrid
                title="Why Choose Avaantra Global for EdTech Development"
                subheading="Our multidisciplinary team blends education expertise, engineering excellence, and AI innovation to deliver world-class EdTech solutions that scale globally."
                features={[
                    {
                        title: "Deep EdTech Expertise",
                        description: "22+ years across SaaS, cloud, and eLearning ecosystems",
                        icon: ShieldCheck,
                    },
                    {
                        title: "End-to-End EdTech Delivery",
                        description: "Product strategy, UX design, development, and deployment",
                        icon: Layers,
                    },
                    {
                        title: "AI-Driven Learning Analytics",
                        description: "Track, predict, and continuously improve learner engagement",
                        icon: Cpu,
                    },
                    {
                        title: "Compliance-Ready Architecture",
                        description: "SCORM, xAPI, LTI, FERPA, GDPR, and ISO-aligned systems",
                        icon: Lock,
                    },
                    {
                        title: "Multi-Device Learning Experience",
                        description: "Seamless access across mobile, web, and smart devices",
                        icon: Users,
                    },
                    {
                        title: "Scalable Cloud Architecture",
                        description: "AWS, Azure, and Google Cloud-based infrastructure",
                        icon: BarChart3,
                    },
                ]}
                footerQuote="We don’t just build learning tools — we build digital educators."
            />

            {/* PROCESS */}
            <ProcessSteps
                title="Our Process — Building the Future of Learning"
                steps={[
                    {
                        title: "Discovery & Learning Design Strategy",
                        description:
                            "Define goals, learner personas, and technology requirements, resulting in a clear product roadmap and instructional design plan.",
                    },
                    {
                        title: "UX/UI & Architecture Design",
                        description:
                            "Design engaging and intuitive interfaces for learners and instructors through wireframes and interactive prototypes.",
                    },
                    {
                        title: "Development & Integration",
                        description:
                            "Build LMS modules, virtual classrooms, and APIs to deliver a functional MVP or full learning platform.",
                    },
                    {
                        title: "AI & Data Enablement",
                        description:
                            "Implement analytics dashboards and adaptive algorithms for personalized, data-driven learning experiences.",
                    },
                    {
                        title: "Launch & Optimization",
                        description:
                            "Deploy the platform, monitor learner engagement, and continuously refine features for performance improvement.",
                    },
                ]}
                duration="10–14 weeks for MVP; 16–20 weeks for full-scale platforms"
            />

            {/* TECH STACK */}
            <TechStackGrid
                title="Technology Stack"
                items={[
                    "Frontend: React, Angular, Vue, Flutter",
                    "Backend: Node.js, .NET Core, Python Django",
                    "Databases: PostgreSQL, MongoDB, MySQL",
                    "Cloud Platforms: AWS, Azure, Google Cloud",
                    "Education Standards: SCORM, xAPI, LTI",
                    "Video & Communication: Twilio, Agora, WebRTC",
                    "AI & Analytics: TensorFlow, Power BI, ChatGPT API",
                    "Security & Compliance: GDPR, ISO 27001, FERPA",
                ]}
            />

            {/* USE CASES */}
            <CaseStudyGrid
                title="Use Cases & Case Studies"
                cases={[
                    {
                        title: "EdTech Startup (India)",
                        result: "2.5× increase in engagement; 40% improvement in completion rates",
                    },
                    {
                        title: "University (UK)",
                        result: "30% cost savings; improved student retention",
                    },
                    {
                        title: "Corporate Training Company (US)",
                        result: "50% faster course delivery; 3× employee adoption",
                    },
                ]}
            />

            {/* CHALLENGES */}
            <SplitListSection
                title="Key Challenges We Solve"
                left={[
                    "🎯 Low learner engagement and retention",
                    "💻 Outdated learning management systems",
                    "📉 Lack of real-time analytics for performance",
                ]}
                right={[
                    "🧠 Generic, non-personalized learning paths",
                    "🏫 Complex administration across departments",
                    "🔒 Compliance and data security concerns",
                ]}
            />
            {/* BENEFITS */}
            <SplitListSection
                title="Benefits of Partnering with Avaantra Global"
                left={[
                    "🚀 Faster go-to-market — MVPs launched in 12–14 weeks",
                    "🧠 AI-driven personalized learning paths",
                    "📈 Data analytics & performance insights",
                ]}
                right={[
                    "💡 Scalable cloud infrastructure for global growth",
                    "🔒 Fully compliant — SCORM, GDPR, ISO & FERPA ready",
                    "💬 Gamified engagement & real-time interactivity",
                ]}
                quote="We don’t digitize education — we humanize technology for learning."
            />

            {/* COMPLIANCE */}
            <ComplianceList
                title="Compliance & Security Framework"
                left={[
                    "🔒 GDPR, FERPA & ISO 27001 certified",
                    "🔐 Encrypted data transmission & secure cloud hosting",
                    "🧑‍💼 Role-based access controls",
                ]}
                right={[
                    "📘 SCORM, xAPI & LTI standard compatibility",
                    "🛡️ AI & data ethics policy adherence",
                    "🔍 Regular security audits & monitoring",
                ]}
            />

            {/* FAQs */}
            <FAQGrid
                title="Frequently Asked Questions"
                faqs={[
                    {
                        question: "Do you build custom LMS solutions?",
                        answer:
                            "Yes — we create fully custom LMS platforms or enhance and modernize existing systems.",
                    },
                    {
                        question: "Do you build both web and mobile eLearning platforms?",
                        answer:
                            "Yes — we design responsive web platforms and native or cross-platform mobile apps.",
                    },
                    {
                        question: "Can you integrate existing LMS platforms?",
                        answer:
                            "Absolutely — we integrate with Moodle, Blackboard, TalentLMS, and custom APIs.",
                    },
                    {
                        question: "Are your EdTech platforms compliant with SCORM and xAPI?",
                        answer:
                            "Yes — all platforms are compatible with global standards like SCORM, xAPI, and LTI.",
                    },
                    {
                        question: "Do you build video-based virtual classrooms?",
                        answer:
                            "Yes — with live classes, chat, recordings, attendance tracking, and breakout rooms.",
                    },
                    {
                        question: "Can you integrate AI for adaptive learning?",
                        answer:
                            "Absolutely — we build AI-driven personalization, adaptive learning paths, and analytics.",
                    },
                    {
                        question: "Do you provide analytics dashboards?",
                        answer:
                            "Yes — using Power BI, Google Data Studio, or fully custom real-time dashboards.",
                    },
                    {
                        question: "Can you integrate payment gateways for online courses?",
                        answer:
                            "Yes — we support subscriptions, one-time payments, and global payment gateways.",
                    },
                    {
                        question: "Do you offer white-label LMS solutions?",
                        answer:
                            "Yes — fully customizable, white-label-ready LMS platforms for startups and agencies.",
                    },
                    {
                        question: "How long does it take to build a learning platform?",
                        answer:
                            "Typically 12–16 weeks for an MVP, depending on scope and integrations.",
                    },
                    {
                        question: "Do you offer maintenance and scaling support?",
                        answer:
                            "Yes — including 24/7 monitoring, updates, performance optimization, and scaling.",
                    },
                ]}
            />

            {/* FINAL CTA */}
            <FinalCTA
                title="Let’s Transform Education for the Next Generation"
                subtitle="Partner with Avaantra Global to build modern, data-driven EdTech platforms that make learning accessible, engaging, and measurable."
                primaryCTA="Start Your EdTech Project"
                secondaryCTA="Download EdTech Solutions Deck"
                trustText="SCORM & xAPI Compliant • ISO 27001 Certified • 22+ Years Expertise • 200+ Global Projects"
            />

        </>
    )
}
