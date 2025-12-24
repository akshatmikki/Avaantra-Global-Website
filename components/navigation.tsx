"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { ChevronDown, Menu, X, Search, Globe, Users, ClipboardList, AlignJustify, Send, Monitor, Briefcase, Car, Zap, CircleDot, Server, Settings, Search as SearchIcon, BarChart3, UserCheck, Clock, Globe as GlobeIcon, Target, Users as UsersIcon, Quote, Type, Maximize2, MonitorSpeaker, Fingerprint, Rocket, FileText, Layers, TrendingUp, Code, Shield, Building2, ShoppingCart, Heart, GraduationCap, Factory, Home, Sparkles, Mail, PenTool, HardHat, Brain, Terminal, Fish, Lightbulb, Link2, SquareStack, Flag, Cloud, Smartphone, Database, RefreshCw, Phone, MapPin, Mail as MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const servicesMenu = {
    softwareEngineering: [
      { title: "Dedicated Teams", link: "/services/dedicated-teams", icon: Users },
      { title: "Staff Augmentation", link: "/services/staff-augmentation", icon: ClipboardList },
      { title: "Full-Stack Development", link: "/services/full-stack-development", icon: AlignJustify },
      { title: "Drive Revenue – Engineering + Growth", link: "/services/drive-revenue-engineering-growth", icon: Send },
      { title: "IT & Digital Consulting", link: "/services/it-digital-consulting", icon: Monitor },
    ],
    productEngineering: [
      { title: "Product Engineering Overview", link: "/services/product-engineering", icon: Briefcase },
      { title: "Product Roadmap & Discovery", link: "/services/product-roadmap-discovery", icon: Car },
      { title: "MVP Development", link: "/services/mvp-development", icon: Zap },
      { title: "Product Architecture & CTO-as-a-Service", link: "/services/product-architecture-cto", icon: CircleDot },
    ],
    digitalMarketing: [
      { title: "Digital Marketing Services", link: "/services/digital-marketing", icon: Server },
      { title: "Performance Marketing", link: "/services/performance-marketing", icon: Settings },
      { title: "SEO Services", link: "/services/seo-services", icon: SearchIcon },
      { title: "Conversion Rate Optimization", link: "/services/conversion-rate-optimization", icon: UserCheck },
      { title: "Online Reputation Management", link: "/services/online-reputation-management", icon: Clock },
      { title: "SaaS Marketing Services", link: "/services/saas-marketing-services", icon: Users },
      { title: "Personal Branding Services", link: "/services/personal-branding-services", icon: GlobeIcon },
    ],
    aiSolutions: [
      { title: "AI Services & Solutions", link: "/services/ai-services-solutions", icon: Target },
      { title: "AI Strategy & Consulting", link: "/services/ai-strategy-consulting", icon: UsersIcon },
      { title: "Generative AI Solutions", link: "/services/generative-ai-solutions", icon: Quote },
      { title: "Machine Learning & Predictive Analytics", link: "/services/machine-learning-predictive-analytics", icon: BarChart3 },
      { title: "AI Agents & Automation", link: "/services/ai-agents-automation", icon: Type },
      { title: "Computer Vision & Imaging AI", link: "/services/computer-vision-imaging-ai", icon: Maximize2 },
      { title: "AI for SaaS & Product-Led Businesses", link: "/services/ai-saas-product-led", icon: MonitorSpeaker },
      { title: "Responsible AI, Ethics & Governance", link: "/services/responsible-ai-ethics-governance", icon: Fingerprint },
    ],
  }

  const solutionsMenu = {
    forAgencies: [
      { title: "Agency Solutions Hub", link: "/for-agencies", icon: Users },
      { title: "White Label Marketing", link: "/for-agencies#white-label-marketing", icon: Send },
      { title: "White Label Software Development", link: "/for-agencies#white-label-dev", icon: AlignJustify },
      { title: "Dedicated Teams for Agencies", link: "/services/dedicated-teams", icon: ClipboardList },
      { title: "Agency Partnership Program", link: "/for-agencies#partnership", icon: FileText },
      { title: "Scale Engineering Without Hiring Risk", link: "/for-agencies#scale-engineering", icon: UserCheck },
    ],
    accelerateDelivery: [
      { title: "Product Delivery Overview", link: "/solutions/product-development", icon: Briefcase },
      { title: "DevOps & Automation", link: "/services/software-engineering#devops", icon: Settings },
      { title: "Fast MVP Launch", link: "/services/mvp-development", icon: Zap },
      { title: "Dedicated Engineering Teams", link: "/services/dedicated-teams", icon: Link2 },
    ],
    startups: [
      { title: "For Startups Hub", link: "/for-startups", icon: Rocket },
      { title: "MVP Development & Validation", link: "/services/mvp-development", icon: Sparkles },
      { title: "Go-To-Market Strategy", link: "/solutions/saas-gtm", icon: Target },
      { title: "Product Scaling & Growth Marketing", link: "/services/drive-revenue-engineering-growth", icon: TrendingUp },
      { title: "Funding Readiness & Tech Acceleration", link: "/for-startups#funding", icon: FileText },
    ],
  }

  const industriesMenu = [
    { title: "SaaS & B2B Tech", link: "/industries#saas" },
    { title: "FinTech & Payments", link: "/industries#fintech" },
    { title: "E-commerce & Marketplaces", link: "/industries#ecommerce" },
    { title: "HealthTech", link: "/industries#healthtech" },
    { title: "PropTech / Real Estate", link: "/industries#proptech" },
    { title: "Retail & Consumer Tech", link: "/industries#retail" },
    { title: "Agencies & White-Label", link: "/industries#digital-agencies" },
    { title: "Logistics & Enterprise", link: "/industries#logistics" },
    { title: "EdTech", link: "/industries#edtech" },
    { title: "Energy & Utilities", link: "/industries#energy" },
  ]

  const hireMenu = {
    developers: [
      { title: "Hire Dedicated Developers", link: "/hire/dedicated-teams", icon: FileText },
      { title: "Hire .NET Developers", link: "/hire/developers#dotnet", icon: CircleDot },
      { title: "Hire Python Developers", link: "/hire/developers#python", icon: Code },
      { title: "Hire Java Developers", link: "/hire/developers#java", icon: Code },
      { title: "Hire MEAN Developers", link: "/hire/developers#mean", icon: Layers },
      { title: "Hire MERN Developers", link: "/hire/developers#mern", icon: Link2 },
      { title: "Hire Full-Stack Developers", link: "/hire/developers#fullstack", icon: AlignJustify },
      { title: "Hire React Developers", link: "/hire/developers#react", icon: Settings },
      { title: "Hire Node.js Developers", link: "/hire/developers#nodejs", icon: Code },
      { title: "Hire Mobile App Developers", link: "/hire/developers#mobile", icon: Smartphone },
      { title: "Hire AWS Developers", link: "/hire/developers#aws", icon: Cloud },
      { title: "Hire Azure Developers", link: "/hire/developers#azure", icon: Cloud },
      { title: "Hire DevOps Engineers", link: "/hire/developers#devops", icon: Settings },
      { title: "Hire QA Engineers", link: "/hire/developers#qa", icon: UserCheck },
      { title: "Hire UI/UX Designers", link: "/hire/developers#design", icon: PenTool },
      { title: "Hire AI Developers", link: "/hire/developers#ai", icon: Sparkles },
    ],
    marketing: [
      { title: "Hire Marketing Experts", link: "/hire/marketing-experts", icon: Briefcase },
      { title: "Hire SEO Experts", link: "/hire/marketing-experts#seo", icon: Users },
      { title: "Hire SMO Experts", link: "/hire/marketing-experts#smo", icon: Settings },
      { title: "Hire PPC Experts", link: "/hire/marketing-experts#ppc", icon: Target },
      { title: "Hire Performance Marketing Experts", link: "/hire/marketing-experts#performance", icon: TrendingUp },
      { title: "Hire Marketing Automation Experts", link: "/hire/marketing-experts#automation", icon: Settings },
      { title: "Hire Email Marketing Experts", link: "/hire/marketing-experts#email", icon: Mail },
      { title: "Hire CRO Experts", link: "/hire/marketing-experts#cro", icon: HardHat },
      { title: "Hire Content Writers", link: "/hire/marketing-experts#content", icon: PenTool },
      { title: "Hire Marketing Consultants", link: "/hire/marketing-experts#consultants", icon: Briefcase },
    ],
    leadership: [
      { title: "Hire Virtual Leadership", link: "/hire/virtual-cto", icon: Brain },
      { title: "Hire Virtual CTO", link: "/hire/virtual-cto", icon: Terminal },
      { title: "Hire Virtual CMO", link: "/hire/virtual-cto#cmo", icon: Fish },
      { title: "Hire Technology Consultants", link: "/hire/virtual-cto#consultants", icon: Lightbulb },
      { title: "Hire Product Managers", link: "/hire/virtual-cto#product", icon: Link2 },
      { title: "Hire Project Managers", link: "/hire/virtual-cto#project", icon: SquareStack },
      { title: "Hire Fractional CXO Team", link: "/hire/virtual-cto#fractional", icon: Flag },
    ],
    teams: [
      { title: "Hire Dedicated Teams", link: "/hire/dedicated-teams", icon: Shield },
      { title: "SaaS Development Team", link: "/hire/dedicated-teams#saas", icon: Users },
      { title: "Web Development Team", link: "/hire/dedicated-teams#web", icon: Cloud },
      { title: "Mobile App Development Team", link: "/hire/dedicated-teams#mobile", icon: Smartphone },
      { title: "AI / Data Science Team", link: "/hire/dedicated-teams#ai", icon: Database },
      { title: "Digital Marketing Team", link: "/hire/dedicated-teams#marketing", icon: RefreshCw },
    ],
  }

  const handleMouseEnter = (menu: string) => {
    // Clear any pending timeout when mouse enters
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(menu)
  }

  const handleMouseLeave = (menu: string) => {
    // Use a timeout to prevent closing when moving from button to dropdown
    // The timeout allows the mouse to move between elements without closing
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      timeoutRef.current = null
    }, 200)
  }

  const handleDropdownClick = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

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
      <div className="px-4 md:px-8 py-4 flex flex-wrap justify-between items-center text-center leading-[21px] tracking-[1px]" style={{ verticalAlign: 'middle' }}>
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
          <Link href="/" className="text-dark hover:text-primary font-medium transition-colors">
            Home
          </Link>

          <Link href="/about" className="text-dark hover:text-primary font-medium transition-colors">
            About Us
          </Link>

          {/* Services Mega Menu */}
          <div onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={() => handleMouseLeave("services")}>
            <button
              onClick={() => handleDropdownClick("services")}
              className={`flex items-center gap-1 font-medium transition-colors ${activeDropdown === "services" ? "text-primary" : "text-dark hover:text-primary"
                }`}
            >
              Services{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Solutions Mega Menu */}
          <div onMouseEnter={() => handleMouseEnter("solutions")} onMouseLeave={() => handleMouseLeave("solutions")}>
            <button
              onClick={() => handleDropdownClick("solutions")}
              className={`flex items-center gap-1 font-medium transition-colors ${activeDropdown === "solutions" ? "text-primary" : "text-dark hover:text-primary"
                }`}
            >
              Solutions{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Industries Mega Menu */}
          <div onMouseEnter={() => handleMouseEnter("industries")} onMouseLeave={() => handleMouseLeave("industries")}>
            <button
              onClick={() => handleDropdownClick("industries")}
              className={`flex items-center gap-1 font-medium transition-colors ${activeDropdown === "industries" ? "text-primary" : "text-dark hover:text-primary"
                }`}
            >
              Industries{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Hire Mega Menu */}
          <div onMouseEnter={() => handleMouseEnter("hire")} onMouseLeave={() => handleMouseLeave("hire")}>
            <button
              onClick={() => handleDropdownClick("hire")}
              className={`flex items-center gap-1 font-medium transition-colors ${activeDropdown === "hire" ? "text-primary" : "text-dark hover:text-primary"
                }`}
            >
              Hire{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "hire" ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          <Link href="/contact" className="text-dark hover:text-primary font-medium transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button title="search" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
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
          changeLanguage("en")
          setIsLangOpen(false)
        }}
        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
      >
        🇺🇸 English
      </button>

      <button
        onClick={() => {
          changeLanguage("hi")
          setIsLangOpen(false)
        }}
        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
      >
        🇮🇳 हिंदी
      </button>

      <button
        onClick={() => {
          changeLanguage("fr")
          setIsLangOpen(false)
        }}
        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
      >
        🇫🇷 Français
      </button>
    </div>
  )}
</div>
          <Button className="bg-primary hover:bg-[#E76A32] text-light rounded-full px-6" style={{ backgroundColor: '#E76A32' }}>
            Get Free Consultation →
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setIsMobileOpen(!isMobileOpen)}>
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
                <h3 className="text-primary font-bold text-sm uppercase mb-4">SOFTWARE ENGINEERING</h3>
                <ul className="space-y-3">
                  {servicesMenu.softwareEngineering.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* PRODUCT ENGINEERING Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">PRODUCT ENGINEERING</h3>
                <ul className="space-y-3">
                  {servicesMenu.productEngineering.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* DIGITAL MARKETING Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">DIGITAL MARKETING</h3>
                <ul className="space-y-3">
                  {servicesMenu.digitalMarketing.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* AI & SOLUTIONS Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">AI & SOLUTIONS</h3>
                <ul className="space-y-3">
                  {servicesMenu.aiSolutions.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* FOR AGENCIES Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">FOR AGENCIES</h3>
                <ul className="space-y-3">
                  {solutionsMenu.forAgencies.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* ACCELERATE PRODUCT DELIVERY Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">ACCELERATE PRODUCT DELIVERY</h3>
                <ul className="space-y-3">
                  {solutionsMenu.accelerateDelivery.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* STARTUPS Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">STARTUPS</h3>
                <ul className="space-y-3">
                  {solutionsMenu.startups.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industriesMenu.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="block py-2 text-sm text-gray-700 hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            {/* View All Industries Button */}
            <div className="border-t border-gray-200 px-8 py-4 flex justify-center mt-6">
              <Link
                href="/industries"
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
          className="hidden md:block absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-xl z-50"
          onMouseEnter={() => handleMouseEnter("hire")}
          onMouseLeave={() => handleMouseLeave("hire")}
        >
          <div className="container mx-auto px-4 md:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* HIRE DEVELOPERS Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">HIRE DEVELOPERS</h3>
                <ul className="space-y-3">
                  {hireMenu.developers.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* HIRE MARKETING EXPERTS Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">HIRE MARKETING EXPERTS</h3>
                <ul className="space-y-3">
                  {hireMenu.marketing.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* HIRE VIRTUAL LEADERSHIP Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">HIRE VIRTUAL LEADERSHIP</h3>
                <ul className="space-y-3">
                  {hireMenu.leadership.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* HIRE DEDICATED TEAMS Column */}
              <div>
                <h3 className="text-primary font-bold text-sm uppercase mb-4">HIRE DEDICATED TEAMS</h3>
                <ul className="space-y-3">
                  {hireMenu.teams.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Icon size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            {/* View All Hire Options Button */}
            <div className="border-t border-gray-200 px-8 py-4 flex justify-center mt-6">
              <Link
                href="/hire"
                className="bg-primary hover:bg-[#E76A32] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
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
                <h4 className="text-primary font-bold text-xs uppercase mb-2">SOFTWARE ENGINEERING</h4>
                <div className="space-y-2">
                  {servicesMenu.softwareEngineering.map((item, idx) => {
                    const Icon = item.icon
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
                    )
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">PRODUCT ENGINEERING</h4>
                <div className="space-y-2">
                  {servicesMenu.productEngineering.map((item, idx) => {
                    const Icon = item.icon
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
                    )
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">DIGITAL MARKETING</h4>
                <div className="space-y-2">
                  {servicesMenu.digitalMarketing.map((item, idx) => {
                    const Icon = item.icon
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
                    )
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">AI & SOLUTIONS</h4>
                <div className="space-y-2">
                  {servicesMenu.aiSolutions.map((item, idx) => {
                    const Icon = item.icon
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
                    )
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
                <h4 className="text-primary font-bold text-xs uppercase mb-2">FOR AGENCIES</h4>
                <div className="space-y-2">
                  {solutionsMenu.forAgencies.map((item, idx) => {
                    const Icon = item.icon
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
                    )
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">ACCELERATE PRODUCT DELIVERY</h4>
                <div className="space-y-2">
                  {solutionsMenu.accelerateDelivery.map((item, idx) => {
                    const Icon = item.icon
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
                    )
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">STARTUPS</h4>
                <div className="space-y-2">
                  {solutionsMenu.startups.map((item, idx) => {
                    const Icon = item.icon
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
                    )
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
              {industriesMenu.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="block py-1 text-sm text-gray-600 hover:text-primary cursor-pointer"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/industries"
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
                <h4 className="text-primary font-bold text-xs uppercase mb-2">HIRE DEVELOPERS</h4>
                <div className="space-y-2">
                  {hireMenu.developers.slice(0, 5).map((item, idx) => {
                    const Icon = item.icon
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
                    )
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs uppercase mb-2">HIRE MARKETING EXPERTS</h4>
                <div className="space-y-2">
                  {hireMenu.marketing.slice(0, 5).map((item, idx) => {
                    const Icon = item.icon
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
                    )
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
            style={{ backgroundColor: '#E76A32' }}
            onClick={() => setIsMobileOpen(false)}
          >
            Get Free Consultation
          </Button>
        </div>
      )}
    </nav>
  )
}

export { Navigation }
export default Navigation
