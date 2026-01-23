"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  CreditCard,
  HeartPulse,
  ShoppingBag,
  Truck,
  Megaphone,
  Film,
  Plane,
  ChevronDown,
  Menu,
  X,
  Search,
  Globe,
  Users,
  ClipboardList,
  AlignJustify,
  Send,
  Monitor,
  Briefcase,
  Car,
  Zap,
  CircleDot,
  Server,
  Settings,
  Search as SearchIcon,
  BarChart3,
  UserCheck,
  Clock,
  Globe as GlobeIcon,
  Target,
  Users as UsersIcon,
  Quote,
  Type,
  Maximize2,
  MonitorSpeaker,
  Fingerprint,
  Rocket,
  FileText,
  Layers,
  TrendingUp,
  Code,
  Shield,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Home,
  Sparkles,
  Mail,
  PenTool,
  HardHat,
  Brain,
  Terminal,
  Fish,
  Lightbulb,
  Link2,
  SquareStack,
  Flag,
  Cloud,
  Smartphone,
  Database,
  RefreshCw,
  Phone,
  MapPin,
  Layout,
  Mail as MailIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const servicesMenu = {
    softwareEngineering: [
      {
        title: "Dedicated Teams",
        link: "/services/dedicated-teams",
        icon: Users,
      },
      {
        title: "Staff Augmentation",
        link: "/services/staff-augmentation",
        icon: ClipboardList,
      },
      {
        title: "Full-Stack Development",
        link: "/services/full-stack-development",
        icon: AlignJustify,
      },
      {
        title: "Drive Revenue – Engineering + Growth",
        link: "/services/drive-revenue-engineering-growth",
        icon: Send,
      },
      {
        title: "IT & Digital Consulting",
        link: "/services/it-digital-consulting",
        icon: Monitor,
      },
    ],
    productEngineering: [
      {
        title: "Product Engineering Overview",
        link: "/services/product-engineering",
        icon: Briefcase,
      },
      {
        title: "Product Roadmap & Discovery",
        link: "/services/product-roadmap-discovery",
        icon: Car,
      },
      {
        title: "MVP Development",
        link: "/services/mvp-development",
        icon: Zap,
      },
      {
        title: "SaaS Product Development",
        link: "/services/saas-product-development",
        icon: Building2,
      },
      {
        title: "Product Architecture & CTO-as-a-Service",
        link: "/services/product-architecture-cto",
        icon: CircleDot,
      },
      {
        title: "UI/UX Design Services",
        link: "/services/ui-ux-design-services",
        icon: PenTool,
      },
    ],
    digitalMarketing: [
      {
        title: "Digital Marketing Services",
        link: "/services/digital-marketing",
        icon: Server,
      },
      {
        title: "Performance Marketing",
        link: "/services/performance-marketing",
        icon: Settings,
      },
      {
        title: "SEO Services",
        link: "/services/seo-services",
        icon: SearchIcon,
      },
      {
        title: "Conversion Rate Optimization",
        link: "/services/conversion-rate-optimization",
        icon: UserCheck,
      },
      {
        title: "Online Reputation Management",
        link: "/services/online-reputation-management",
        icon: Clock,
      },
      {
        title: "SaaS Marketing Services",
        link: "/services/saas-marketing-services",
        icon: Users,
      },
      {
        title: "Personal Branding Services",
        link: "/services/personal-branding-services",
        icon: GlobeIcon,
      },
    ],
    aiSolutions: [
      {
        title: "AI Services & Solutions",
        link: "/services/ai-services-solutions",
        icon: Target,
      },
      {
        title: "AI Strategy & Consulting",
        link: "/services/ai-strategy-consulting",
        icon: UsersIcon,
      },
      {
        title: "Generative AI Solutions",
        link: "/services/generative-ai-solutions",
        icon: Quote,
      },
      {
        title: "Machine Learning & Predictive Analytics",
        link: "/services/machine-learning-predictive-analytics",
        icon: BarChart3,
      },
      {
        title: "AI Agents & Automation",
        link: "/services/ai-agents-automation",
        icon: Type,
      },
      {
        title: "Computer Vision & Imaging AI",
        link: "/services/computer-vision-imaging-ai",
        icon: Maximize2,
      },
      {
        title: "AI for SaaS & Product-Led Businesses",
        link: "/services/ai-saas-product-led",
        icon: MonitorSpeaker,
      },
      {
        title: "Responsible AI, Ethics & Governance",
        link: "/services/responsible-ai-ethics-governance",
        icon: Fingerprint,
      },
    ],
  };

  const solutionsMenu = {
    forAgencies: [
      //{ title: "Agency Solutions Hub", link: "/for-agencies", icon: Users },
      {
        title: "White Label Marketing Services",
        link: "/solutions/For-Agencies/White-Label-Marketing",
        icon: Send,
      },
      {
        title: "White Label Software Development",
        link: "/solutions/For-Agencies/White-Label-Software-Development",
        icon: AlignJustify,
      },
      {
        title: "Dedicated Teams for Agencies",
        link: "/solutions/For-Agencies/Dedicated-Teams-for-Agencies",
        icon: ClipboardList,
      },
      {
        title: "Agency Partnership Program",
        link: "/solutions/For-Agencies/Agency-Partnership-Program",
        icon: Users,
      },
      {
        title: "Scale Engineering Without Hiring Risk",
        link: "/solutions/For-Agencies/Scale-Engineering-Without-Hiring-Risk",
        icon: UserCheck,
      },
      {
        title: "AI & Automation Services for Agencies",
        link: "/solutions/For-Agencies/AI-&-Automation",
        icon: Zap,
      },
    ],
    accelerateDelivery: [
      // {
      //   title: "Product Delivery Overview",
      //   link: "/solutions/product-development",
      //   icon: Briefcase,
      // },
      {
        title: "DevOps & Automation",
        link: "/solutions/Accelerate-Product-Delivery/DevOps-&-Automation",
        icon: Users,
      },
      {
        title: "Fast MVP Launch",
        link: "/solutions/Accelerate-Product-Delivery/Fast-MVP-Launch",
        icon: Zap,
      },
      {
        title: "Dedicated Engineering Teams",
        link: "/solutions/Accelerate-Product-Delivery/Dedicated-Engineering-Teams",
        icon: Link2,
      },
    ],
    LaunchAndGrow: [
      // {
      //   title: "Launch and Grow SaaS GTM",
      //   link: "/solutions/launch-grow-saas-gtm",
      //   icon: TrendingUp,
      // },
      {
        title: "SaaS Growth Strategy",
        link: "/solutions/Launch-&-Grow-SaaS-GTM/SaaS-Growth-strategy",
        icon: TrendingUp,
      },
      {
        title: "Conversion Optimization",
        link: "/solutions/Launch-&-Grow-SaaS-GTM/Conversion-Optimization",
        icon: Zap,
      },
      {
        title: "Customer Retention Programs",
        link: "/solutions/Launch-&-Grow-SaaS-GTM/Customer-Retention-Programs",
        icon: Settings,
      },
    ],
    startups: [
      // { title: "For Startups Hub", link: "/for-startups", icon: Rocket },
      {
        title: "MVP Development & Validation",
        link: "/solutions/Startups/MVP-Development-&-Validation",
        icon: Sparkles,
      },
      {
        title: "Go-To-Market Strategy",
        link: "/solutions/Startups/Go-To-Market-Strategy",
        icon: Target,
      },
      {
        title: "Product Scaling & Growth Marketing",
        link: "/solutions/Startups/Product-Scaling-&-Growth-Marketing",
        icon: TrendingUp,
      },
      {
        title: "Funding Readiness & Tech Acceleration",
        link: "/solutions/Startups/Funding-Readiness-&-Tech-Acceleration",
        icon: FileText,
      },
    ],
  };

  const industriesMenu = [
    { title: "SaaS & B2B Tech", link: "/for-industries/Saas-&-B2B", icon: Building2 },
    {
      title: "FinTech & Payments",
      link: "/for-industries/Fintech",
      icon: CreditCard,
    },
    {
      title: "HealthTech & MedTech",
      link: "/for-industries/HealthTech",
      icon: HeartPulse,
    },
    {
      title: "Retail & E-commerce",
      link: "/for-industries/Retail-&-eCommerce",
      icon: ShoppingBag,
    },
    {
      title: "PropTech / Real Estate",
      link: "/for-industries/Proptech-(Real-Estate)",
      icon: Home,
    },
    {
      title: "Manufacturing & Industry 4.0",
      link: "/for-industries/Manufacturing-&-Industry-4.0",
      icon: Factory,
    },
    {
      title: "Logistics & Supply Chain",
      link: "/for-industries/Logistics-&-Supply-Chain",
      icon: Truck,
    },
    {
      title: "MarTech & AdTech",
      link: "/for-industries/Martech-&-AdTech",
      icon: Megaphone,
    },
    {
      title: "Media & Entertainment",
      link: "/for-industries/Media-&-Entertainment",
      icon: Film,
    },
    {
      title: "EdTech & eLearning",
      link: "/for-industries/Edtech-&-eLearning",
      icon: GraduationCap,
    },
    { title: "AI & Data Platforms", link: "/for-industries/AI-&-Data-Platforms", icon: Brain },
    {
      title: "Startups & Tech Innovators",
      link: "/for-industries/Startups-&-Tech-Innovators",
      icon: Rocket,
    },
    {
      title: "Travel & Hospitality",
      link: "/for-industries/Travel",
      icon: Plane,
    },
  ];

  const hireMenu = {
    developers: [
      // {
      //   title: "Hire Dedicated Developers",
      //   link: "/Hire/hire-developers",
      //   icon: FileText,
      // },
      {
        title: "Hire .NET Developers",
        link: "/Hire/hire-developers/dotnet-developers",
        icon: CircleDot,
      },
      {
        title: "Hire Python Developers",
        link: "/Hire/hire-developers/python-developers",
        icon: Cloud,
      },
      {
        title: "Hire Java Developers",
        link: "/Hire/hire-developers/java-developers",
        icon: Code,
      },
      {
        title: "Hire MEAN Developers",
        link: "/Hire/hire-developers/mean-developers",
        icon: Layers,
      },
      {
        title: "Hire MERN Developers",
        link: "/Hire/hire-developers/mern-developers",
        icon: Link2,
      },
      {
        title: "Hire Full-Stack Developers",
        link: "/Hire/hire-developers/fullstack-developers",
        icon: AlignJustify,
      },
      {
        title: "Hire React Developers",
        link: "/Hire/hire-developers/react-developers",
        icon: Heart,
      },
      {
        title: "Hire Node.js Developers",
        link: "/Hire/hire-developers/nodejs-developers",
        icon: Code,
      },
      {
        title: "Hire Mobile App Developers",
        link: "/Hire/hire-developers/mobile-developers",
        icon: Smartphone,
      },
      {
        title: "Hire AWS Developers",
        link: "/Hire/hire-developers/aws-developers",
        icon: Code,
      },
      {
        title: "Hire Azure Developers",
        link: "/Hire/hire-developers/azure-developers",
        icon: Cloud,
      },
      {
        title: "Hire DevOps Engineers",
        link: "/Hire/hire-developers/devops-engineers",
        icon: Settings,
      },
      {
        title: "Hire QA Engineers",
        link: "/Hire/hire-developers/qa-engineers",
        icon: UserCheck,
      },
      {
        title: "Hire UI/UX Designers",
        link: "/Hire/hire-developers/ui-ux-designers",
        icon: PenTool,
      },
      {
        title: "Hire Data Scientists",
        link: "/Hire/hire-developers/data-scientists",
        icon: FileText,
      },
      {
        title: "Hire AI Developers",
        link: "/Hire/hire-developers/ai-developers",
        icon: Sparkles,
      },
      {
        title: "Hire Machine Learning Engineers",
        link: "/Hire/hire-developers/machine-learning-engineers",
        icon: Brain,
      },
      {
        title: "Hire Salesforce Developers",
        link: "/Hire/hire-developers/salesforce-developers",
        icon: Shield,
      },
      {
        title: "Hire Angular Developers",
        link: "/Hire/hire-developers/angular-developers",
        icon: Layout,
      },
    ],
    marketing: [
      // {
      //   title: "Hire Marketing Experts",
      //   link: "/Hire/hire-marketing-experts",
      //   icon: Briefcase,
      // },
      {
        title: "Hire SEO Experts",
        link: "/hire/marketing-experts#seo",
        icon: Users,
      },
      {
        title: "Hire SMO Experts",
        link: "/hire/marketing-experts#smo",
        icon: Settings,
      },
      {
        title: "Hire PPC Experts",
        link: "/hire/marketing-experts#ppc",
        icon: Target,
      },
      {
        title: "Hire Performance Marketing Experts",
        link: "/hire/marketing-experts#performance",
        icon: TrendingUp,
      },
      {
        title: "Hire Marketing Automation Experts",
        link: "/hire/marketing-experts#automation",
        icon: Settings,
      },
      {
        title: "Hire Email Marketing Experts",
        link: "/hire/marketing-experts#email",
        icon: Mail,
      },
      {
        title: "Hire CRO Experts",
        link: "/hire/marketing-experts#cro",
        icon: HardHat,
      },
      {
        title: "Hire Content Writers",
        link: "/hire/marketing-experts#content",
        icon: PenTool,
      },
      {
        title: "Hire Marketing Consultants",
        link: "/hire/marketing-experts#consultants",
        icon: Briefcase,
      },
    ],
    leadership: [
      // {
      //   title: "Hire Virtual Leadership",
      //   link: "/Hire/hire-virtual-leadership",
      //   icon: Brain,
      // },
      { title: "Hire Virtual CTO", link: "/hire/virtual-cto", icon: Terminal },
      { title: "Hire Virtual CMO", link: "/hire/virtual-cto#cmo", icon: Fish },
      {
        title: "Hire Technology Consultants",
        link: "/hire/virtual-cto#consultants",
        icon: Lightbulb,
      },
      {
        title: "Hire Product Managers",
        link: "/hire/virtual-cto#product",
        icon: Link2,
      },
      {
        title: "Hire Project Managers",
        link: "/hire/virtual-cto#project",
        icon: SquareStack,
      },
      {
        title: "Hire Fractional CXO Team",
        link: "/hire/virtual-cto#fractional",
        icon: Flag,
      },
    ],
    teams: [
      // {
      //   title: "Hire Dedicated Teams",
      //   link: "/Hire/hire-dedicated-teams",
      //   icon: Shield,
      // },
      {
        title: "SaaS Development Team",
        link: "/hire/dedicated-teams#saas",
        icon: Users,
      },
      {
        title: "Web Development Team",
        link: "/hire/dedicated-teams#web",
        icon: Cloud,
      },
      {
        title: "Mobile App Development Team",
        link: "/hire/dedicated-teams#mobile",
        icon: Smartphone,
      },
      {
        title: "AI / Data Science Team",
        link: "/hire/dedicated-teams#ai",
        icon: Database,
      },
      {
        title: "Digital Marketing Team",
        link: "/hire/dedicated-teams#marketing",
        icon: RefreshCw,
      },
    ],
  };

  const handleMouseEnter = (menu: string) => {
    // Clear any pending timeout when mouse enters
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = (menu: string) => {
    // Use a timeout to prevent closing when moving from button to dropdown
    // The timeout allows the mouse to move between elements without closing
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      timeoutRef.current = null;
    }, 200);
  };

  const handleDropdownClick = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 bg-light border-b border-gray-200 relative">
      {/* Top Info Bar */}
      <div className="bg-gray-100 px-4 md:px-8 py-2 text-xs flex justify-between items-center">
        <div className="flex gap-4 md:gap-8 text-gray-600 items-center">
          <span className="flex items-center gap-1">
            <Phone size={14} />
            +91 98114 67244
          </span>
          <span className="hidden md:inline-flex items-center gap-1">
            <MapPin size={14} />
            Plot No H-64, Ground Floor Uffim Business Park, Sector 63 Noida
          </span>
          <span className="hidden md:inline-flex items-center gap-1">
            <MailIcon size={14} />
            sales@avaantraglobal.com
          </span>
        </div>
        <div className="flex gap-2">
          <button className="hover:text-primary">f</button>
          <button className="hover:text-primary">𝕏</button>
          <button className="hover:text-primary">in</button>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className="px-4 md:px-8 py-4 flex flex-wrap justify-between items-center text-center leading-[21px] tracking-[1px]"
        style={{ verticalAlign: "middle" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/avaantra-logo.png"
            alt="Avaantra Global"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-dark hover:text-primary font-medium transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-dark hover:text-primary font-medium transition-colors"
          >
            About Us
          </Link>

          {/* Services Mega Menu */}
          <div
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={() => handleMouseLeave("services")}
          >
            <button
              onClick={() => handleDropdownClick("services")}
              className={`flex items-center gap-1 font-medium transition-colors ${activeDropdown === "services"
                ? "text-primary"
                : "text-dark hover:text-primary"
                }`}
            >
              Services{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "services" ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>

          {/* Solutions Mega Menu */}
          <div
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={() => handleMouseLeave("solutions")}
          >
            <button
              onClick={() => handleDropdownClick("solutions")}
              className={`flex items-center gap-1 font-medium transition-colors ${activeDropdown === "solutions"
                ? "text-primary"
                : "text-dark hover:text-primary"
                }`}
            >
              Solutions{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>

          {/* Industries Mega Menu */}
          <div
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={() => handleMouseLeave("industries")}
          >
            <button
              onClick={() => handleDropdownClick("industries")}
              className={`flex items-center gap-1 font-medium transition-colors ${activeDropdown === "industries"
                ? "text-primary"
                : "text-dark hover:text-primary"
                }`}
            >
              Industries{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>

          {/* Hire Mega Menu */}
          <div
            onMouseEnter={() => handleMouseEnter("hire")}
            onMouseLeave={() => handleMouseLeave("hire")}
          >
            <button
              onClick={() => handleDropdownClick("hire")}
              className={`flex items-center gap-1 font-medium transition-colors ${activeDropdown === "hire"
                ? "text-primary"
                : "text-dark hover:text-primary"
                }`}
            >
              Hire{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "hire" ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>
          <Link
            href="/contact"
            className="text-dark hover:text-primary font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            title="search"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Search size={18} className="text-gray-600" />
          </button>
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-1"
              aria-label="Change language"
            >
              <Globe size={18} className="text-gray-600" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    setIsLangOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  🇺🇸 English
                </button>

                <button
                  onClick={() => {
                    changeLanguage("hi");
                    setIsLangOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  🇮🇳 हिंदी
                </button>

                <button
                  onClick={() => {
                    changeLanguage("fr");
                    setIsLangOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  🇫🇷 Français
                </button>
              </div>
            )}
          </div>
          <Button
            className="bg-primary hover:bg-[#E76A32] text-light rounded-full px-6"
            style={{ backgroundColor: "#E76A32" }}
          >
            Get Free Consultation →
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Services Full-Screen Dropdown */}
      {activeDropdown === "services" && (
        <div
          className="hidden md:block absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-xl z-50"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={() => handleMouseLeave("services")}
        >
          <div className="container mx-auto px-4 md:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* SOFTWARE ENGINEERING Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">
                  SOFTWARE ENGINEERING
                </h3>
                <ul className="space-y-3">
                  {servicesMenu.softwareEngineering.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* PRODUCT ENGINEERING Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">
                  PRODUCT ENGINEERING
                </h3>
                <ul className="space-y-3">
                  {servicesMenu.productEngineering.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* DIGITAL MARKETING Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">
                  DIGITAL MARKETING
                </h3>
                <ul className="space-y-3">
                  {servicesMenu.digitalMarketing.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* AI & SOLUTIONS Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">
                  AI & SOLUTIONS
                </h3>
                <ul className="space-y-3">
                  {servicesMenu.aiSolutions.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* View All Services Button */}
            <div className="border-t border-gray-200 px-8 py-4 flex justify-center mt-6">
              <Link
                href="/services"
                className="bg-primary hover:bg-[#E76A32] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                onClick={() => setActiveDropdown(null)}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Solutions Full-Screen Dropdown */}
      {activeDropdown === "solutions" && (
        <div
          className="hidden md:block absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-xl z-50"
          onMouseEnter={() => handleMouseEnter("solutions")}
          onMouseLeave={() => handleMouseLeave("solutions")}
        >
          <div className="container mx-auto px-4 md:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* FOR AGENCIES Column */}
              <div>
                <Link
                  href="/solutions/For-Agencies"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h3 className="text-primary font-bold text-sm uppercase transition-colors group-hover:underline">
                    FOR AGENCIES
                  </h3>

                  {/* subtle arrow cue */}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>

                <ul className="space-y-3">
                  {solutionsMenu.forAgencies.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* ACCELERATE PRODUCT DELIVERY Column */}
              <div>
                <Link
                  href="/solutions/Accelerate-Product-Delivery"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h3 className="text-primary font-bold text-sm uppercase transition-colors group-hover:underline">
                    ACCELERATE PRODUCT DELIVERY
                  </h3>

                  {/* subtle arrow cue */}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
                <ul className="space-y-3">
                  {solutionsMenu.accelerateDelivery.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Launch and GROW SAAS GTM Column */}
              <div>
                <Link
                  href="/solutions/Launch-&-Grow-SaaS-GTM"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h3 className="text-primary font-bold text-sm uppercase transition-colors group-hover:underline">
                    LAUNCH AND GROW SAAS GTM
                  </h3>

                  {/* subtle arrow cue */}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
                <ul className="space-y-3">
                  {solutionsMenu.LaunchAndGrow.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* STARTUPS Column */}
              <div>
                <Link
                  href="/solutions/Startups"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h3 className="text-primary font-bold text-sm uppercase transition-colors group-hover:underline">
                    STARTUPS
                  </h3>

                  {/* subtle arrow cue */}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
                <ul className="space-y-3">
                  {solutionsMenu.startups.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Explore All Solutions Button */}
            <div className="border-t border-gray-200 px-8 py-4 flex justify-center mt-6">
              <Link
                href="/solutions"
                className="bg-primary hover:bg-[#E76A32] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                onClick={() => setActiveDropdown(null)}
              >
                Explore All Solutions
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Industries Full-Screen Dropdown */}
      {activeDropdown === "industries" && (
        <div
          className="hidden md:block absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-xl z-50"
          onMouseEnter={() => handleMouseEnter("industries")}
          onMouseLeave={() => handleMouseLeave("industries")}
        >
          <div className="container mx-auto px-4 md:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {industriesMenu.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <Icon size={18} className="text-primary" />
                    <span className="text-sm font-medium text-gray-800">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
            {/* View All Industries Button */}
            <div className="border-t border-gray-200 px-8 py-4 flex justify-center mt-6">
              <Link
                href="/industry"
                className="bg-primary hover:bg-[#E76A32] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                onClick={() => setActiveDropdown(null)}
              >
                View All Industries
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hire Full-Screen Dropdown */}
      {activeDropdown === "hire" && (
        <div
          className="hidden md:block absolute left-0 right-0 top-full
      bg-white border-b border-gray-200 shadow-xl z-50
      max-h-[80vh] overflow-y-auto"
          onMouseEnter={() => handleMouseEnter("hire")}
          onMouseLeave={() => handleMouseLeave("hire")}
        >
          <div className="container mx-auto px-4 md:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* HIRE DEVELOPERS Column */}
              <div>
                <Link
                  href="/Hire/hire-developers"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h3 className="text-primary font-bold text-sm uppercase transition-colors group-hover:underline">
                    HIRE DEVELOPERS
                  </h3>

                  {/* subtle arrow cue */}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>

                <ul className="space-y-3">
                  {hireMenu.developers.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* HIRE MARKETING EXPERTS Column */}
              <div>
                <Link
                  href="/Hire/hire-marketing-experts"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h3 className="text-primary font-bold text-sm uppercase transition-colors group-hover:underline">
                    HIRE MARKETING EXPERTS
                  </h3>

                  {/* subtle arrow cue */}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>

                <ul className="space-y-3">
                  {hireMenu.marketing.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* HIRE VIRTUAL LEADERSHIP Column */}
              <div>
                <Link
                  href="/Hire/hire-virtual-leadership"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h3 className="text-primary font-bold text-sm uppercase transition-colors group-hover:underline">
                    HIRE VIRTUAL LEADERSHIP
                  </h3>

                  {/* subtle arrow cue */}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>

                <ul className="space-y-3">
                  {hireMenu.leadership.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* HIRE DEDICATED TEAMS Column */}
              <div>
                <Link
                  href="/Hire/hire-dedicated-teams"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h3 className="text-primary font-bold text-sm uppercase transition-colors group-hover:underline">
                    HIRE DEDICATED TEAMS
                  </h3>

                  {/* subtle arrow cue */}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
                <ul className="space-y-3">
                  {hireMenu.teams.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon
                            size={16}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* View All Hire Options Button */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4 flex justify-center">
              <Link
                href="/Hire"
                className="bg-primary hover:bg-[#E76A32] text-white px-6 py-2 rounded-lg text-sm font-medium"
                onClick={() => setActiveDropdown(null)}
              >
                View All Hire Options
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-light border-t border-gray-200 p-4 space-y-4 max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            className="block py-2 text-dark hover:text-primary font-medium"
            onClick={() => setIsMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 text-dark hover:text-primary font-medium"
            onClick={() => setIsMobileOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Services Menu */}
          <details className="cursor-pointer">
            <summary className="py-2 text-dark hover:text-primary font-medium list-none flex items-center justify-between">
              Services <ChevronDown size={16} />
            </summary>
            <div className="pl-4 mt-2 space-y-4">
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">
                  SOFTWARE ENGINEERING
                </h4>
                <div className="space-y-2">
                  {servicesMenu.softwareEngineering.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">
                  PRODUCT ENGINEERING
                </h4>
                <div className="space-y-2">
                  {servicesMenu.productEngineering.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">
                  DIGITAL MARKETING
                </h4>
                <div className="space-y-2">
                  {servicesMenu.digitalMarketing.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">
                  AI & SOLUTIONS
                </h4>
                <div className="space-y-2">
                  {servicesMenu.aiSolutions.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Link
                href="/services"
                className="block mt-4 bg-primary hover:bg-[#E76A32] text-white px-6 py-2 rounded-lg text-sm font-medium text-center"
                onClick={() => setIsMobileOpen(false)}
              >
                View All Services
              </Link>
            </div>
          </details>

          {/* Mobile Solutions Menu */}
          <details className="cursor-pointer">
            <summary className="py-2 text-dark hover:text-primary font-medium list-none flex items-center justify-between">
              Solutions <ChevronDown size={16} />
            </summary>
            <div className="pl-4 mt-2 space-y-4">
              <div>
                <Link
                  href="/solutions/For-Agencies"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h4
                    className="
                      text-primary font-bold text-sm uppercase
                      transition-all
                      group-hover:underline
                    "
                  >
                    FOR AGENCIES
                  </h4>

                  {/* hover cue */}
                  <span
                    className="
                      text-primary
                      opacity-0
                      translate-x-[-2px]
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                    "
                  >
                    →
                  </span>
                </Link>


                <div className="space-y-2">
                  {solutionsMenu.forAgencies.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary cursor-pointer"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <Link
                  href="/solutions/Accelerate-Product-Delivery"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h4
                    className="
                      text-primary font-bold text-sm uppercase
                      transition-all
                      group-hover:underline
                    "
                  >
                    ACCELERATE PRODUCT DELIVERY
                  </h4>

                  {/* hover cue */}
                  <span
                    className="
                      text-primary
                      opacity-0
                      translate-x-[-2px]
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                    "
                  >
                    →
                  </span>
                </Link>

                <div className="space-y-2">
                  {solutionsMenu.accelerateDelivery.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary cursor-pointer"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <Link
                  href="/solutions/Launch-&-Grow-SaaS-GTM"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h4
                    className="
                      text-primary font-bold text-sm uppercase
                      transition-all
                      group-hover:underline
                    "
                  >
                    LAUNCH AND GROW SAAS GTM
                  </h4>

                  {/* hover cue */}
                  <span
                    className="
                      text-primary
                      opacity-0
                      translate-x-[-2px]
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                    "
                  >
                    →
                  </span>
                </Link>

                <div className="space-y-2">
                  {solutionsMenu.LaunchAndGrow.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary cursor-pointer"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <Link
                  href="/solutions/Startups"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h4
                    className="
                      text-primary font-bold text-sm uppercase
                      transition-all
                      group-hover:underline
                    "
                  >
                    STARTUPS
                  </h4>

                  {/* hover cue */}
                  <span
                    className="
                      text-primary
                      opacity-0
                      translate-x-[-2px]
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                    "
                  >
                    →
                  </span>
                </Link>

                <div className="space-y-2">
                  {solutionsMenu.startups.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary cursor-pointer"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Link
                href="/solutions"
                className="block mt-4 bg-primary hover:bg-[#E76A32] text-white px-6 py-2 rounded-lg text-sm font-medium text-center cursor-pointer"
                onClick={() => setIsMobileOpen(false)}
              >
                Explore All Solutions
              </Link>
            </div>
          </details>

          {/* Mobile Industries Menu */}
          <details className="cursor-pointer">
            <summary className="py-2 text-dark hover:text-primary font-medium list-none flex items-center justify-between">
              Industries <ChevronDown size={16} />
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              {industriesMenu.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-primary transition"
                  >
                    <Icon size={16} className="text-primary shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}

              <Link
                href="/industry"
                className="block mt-4 bg-primary hover:bg-[#E76A32] text-white px-6 py-2 rounded-lg text-sm font-medium text-center cursor-pointer"
                onClick={() => setIsMobileOpen(false)}
              >
                View All Industries
              </Link>
            </div>
          </details>

          {/* Mobile Hire Menu */}
          <details className="cursor-pointer">
            <summary className="py-2 text-dark hover:text-primary font-medium list-none flex items-center justify-between">
              Hire <ChevronDown size={16} />
            </summary>
            <div className="pl-4 mt-2 space-y-4">
              <div>
                <Link
                  href="/Hire/hire-developers"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h4
                    className="
                      text-primary font-bold text-sm uppercase
                      transition-all
                      group-hover:underline
                    "
                  >
                    HIRE DEVELOPERS
                  </h4>

                  {/* hover cue */}
                  <span
                    className="
                      text-primary
                      opacity-0
                      translate-x-[-2px]
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                    "
                  >
                    →
                  </span>
                </Link>

                <div className="space-y-2">
                  {hireMenu.developers.slice(0, 5).map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary cursor-pointer"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <Link
                  href="/Hire/hire-marketing-experts"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1 mb-4 group"
                >
                  <h4
                    className="
                      text-primary font-bold text-sm uppercase
                      transition-all
                      group-hover:underline
                    "
                  >
                    HIRE MARKETING EXPERTS
                  </h4>

                  {/* hover cue */}
                  <span
                    className="
                      text-primary
                      opacity-0
                      translate-x-[-2px]
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                    "
                  >
                    →
                  </span>
                </Link>
                <div className="space-y-2">
                  {hireMenu.marketing.slice(0, 5).map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary cursor-pointer"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Icon size={14} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Link
                href="/hire"
                className="block mt-4 bg-primary hover:bg-[#E76A32] text-white px-6 py-2 rounded-lg text-sm font-medium text-center cursor-pointer"
                onClick={() => setIsMobileOpen(false)}
              >
                View All Hire Options
              </Link>
            </div>
          </details>
          <Link
            href="/contact"
            className="block py-2 text-dark hover:text-primary font-medium"
            onClick={() => setIsMobileOpen(false)}
          >
            Contact Us
          </Link>
          <Button
            className="w-full bg-primary hover:bg-[#E76A32] text-light rounded-full"
            style={{ backgroundColor: "#E76A32" }}
            onClick={() => setIsMobileOpen(false)}
          >
            Get Free Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export { Navigation };
export default Navigation;
