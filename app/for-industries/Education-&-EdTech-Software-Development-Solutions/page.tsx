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

export default function EdTechPage() {
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
                    "Backend: Node.js, .NET Core, Java Spring, Python Django",
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
                        title: "Corporate Training Platform (Europe)",
                        result: "47% faster onboarding; 60% increase in completion rates",
                    },
                    {
                        title: "EdTech Startup (India)",
                        result: "35% improvement in learner scores; $1.2M seed raised",
                    },
                    {
                        title: "K–12 Learning App (US)",
                        result: "Daily active usage grew 2.5× in 3 months",
                    },
                ]}
            />

            {/* CHALLENGES */}
            <SplitListSection
                title="Key Challenges We Solve"
                left={[
                    "Fragmented learning ecosystems",
                    "Low learner engagement & retention",
                    "Data security & compliance risks",
                ]}
                right={[
                    "Limited personalization in content delivery",
                    "Lack of gamification & motivation",
                    "Integration challenges with legacy systems",
                ]}
            />

            {/* BENEFITS */}
            <SplitListSection
                title="Benefits of Partnering with Avaantra"
                left={[
                    "Faster time-to-learn — MVPs in 10–12 weeks",
                    "AI-driven personalized learning paths",
                    "Fully secure FERPA/GDPR-ready platforms",
                ]}
                right={[
                    "Gamified engagement mechanics",
                    "Analytics-backed learning insights",
                ]}
                quote="We turn learning into a measurable, scalable business advantage."
            />

            {/* COMPLIANCE */}
            <ComplianceList
                title="Compliance & Security Framework"
                left={[
                    "GDPR, FERPA, ISO 27001 standards",
                    "Encrypted cloud infrastructure",
                    "Multi-factor authentication",
                ]}
                right={[
                    "Role-based access controls",
                    "SCORM/xAPI compliant data exchange",
                    "Regular security audits",
                ]}
            />

            {/* FAQs */}
            <FAQGrid
                title="Frequently Asked Questions"
                faqs={[
                    {
                        question: "Do you build both web and mobile eLearning platforms?",
                        answer:
                            "Yes, we design responsive web-based systems and native mobile apps.",
                    },
                    {
                        question: "Can you integrate existing LMS with our platform?",
                        answer:
                            "Absolutely — we support Moodle, Blackboard, TalentLMS, and custom APIs.",
                    },
                    {
                        question: "Do you create AI-based learning paths?",
                        answer:
                            "Yes — we implement adaptive algorithms that adjust content dynamically.",
                    },
                    {
                        question: "Are your systems FERPA and GDPR compliant?",
                        answer:
                            "Yes — every product we build follows these global data protection standards.",
                    },
                    {
                        question: "Can you support white-label solutions for EdTech startups?",
                        answer:
                            "Yes, we offer full white-label LMS and eLearning systems.",
                    },
                    {
                        question: "Do you include gamification features?",
                        answer:
                            "Yes, we use points, badges, leaderboards, and quizzes to boost engagement.",
                    },
                    {
                        question: "How long does it take to develop an MVP?",
                        answer:
                            "Usually 12–14 weeks for MVP; 20–24 weeks for a full platform.",
                    },
                    {
                        question: "Can we include real-time classes in our app?",
                        answer:
                            "Yes — we build video conferencing modules with chat, notes, and attendance.",
                    },
                    {
                        question: "Do you provide analytics dashboards?",
                        answer:
                            "Yes — with Power BI, Google Data Studio, or fully custom dashboards.",
                    },
                    {
                        question: "Do you handle content creation too?",
                        answer:
                            "We focus on platform development but partner with content studios if needed.",
                    },
                ]}
            />

            {/* FINAL CTA */}
            <FinalCTA
                title="Let’s Build an EdTech Platform That Inspires the Next Generation"
                subtitle="Partner with Avaantra Global to create engaging, compliant, and intelligent learning systems that make education accessible and measurable."
                primaryCTA="Start Your EdTech Project"
                secondaryCTA="Download EdTech Case Study Deck"
                trustText="FERPA Compliant • ISO 27001 Certified • 150+ EdTech Projects • Global Delivery"
            />
        </>
    )
}
