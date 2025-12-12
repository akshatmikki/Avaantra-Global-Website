"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Search, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const servicesMenu = [
    { title: "All Services", link: "/services" },
    { title: "Software Engineering Services", link: "/services/software-engineering" },
    { title: "Product Engineering Services", link: "/services/product-engineering" },
    { title: "Digital Marketing Services", link: "/services/digital-marketing" },
    { title: "Custom Software Development", link: "#" },
    { title: "SaaS & Platform Development", link: "#" },
    { title: "Web & Mobile Applications", link: "#" },
    { title: "API & Microservices", link: "#" },
    { title: "DevOps & CI/CD", link: "#" },
    { title: "AI & Data Solutions", link: "#" },
  ]

  const solutionsMenu = [
    { title: "All Solutions", link: "/solutions", icon: "🎯" },
    { title: "For Agencies", link: "/for-agencies", icon: "🏷️" },
    { title: "For Startups", link: "/for-startups", icon: "🚀" },
    { title: "Product Development", link: "/solutions/product-development", icon: "⚡" },
    { title: "SaaS GTM", link: "/solutions/saas-gtm", icon: "📈" },
  ]

  const industriesMenu = [
    { title: "All Industries", link: "/industries" },
    { title: "SaaS & B2B Tech", link: "/industries#saas" },
    { title: "FinTech & Payments", link: "/industries#fintech" },
    { title: "HealthTech", link: "/industries#healthtech" },
    { title: "Retail & E-commerce", link: "/industries#retail" },
    { title: "EdTech & Learning Platforms", link: "/industries#edtech" },
    { title: "Manufacturing & Industry 4.0", link: "/industries#manufacturing" },
    { title: "PropTech", link: "/industries#proptech" },
    { title: "Digital Agencies", link: "/industries#digital-agencies" },
  ]

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleDropdownClick = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <nav className="sticky top-0 z-50 bg-light border-b border-gray-200">
      {/* Top Info Bar */}
      <div className="bg-gray-100 px-4 md:px-8 py-2 text-xs flex justify-between items-center">
        <div className="flex gap-4 md:gap-8 text-gray-600">
          <span>📱 +91 98114 67244</span>
          <span className="hidden md:inline">📍 Plot No H-64, Ground Floor Uffim Business Park, Sector 63 Noida</span>
          <span className="hidden md:inline">📧 sales@avaantraglobal.com</span>
        </div>
        <div className="flex gap-2">
          <button className="hover:text-primary">f</button>
          <button className="hover:text-primary">𝕏</button>
          <button className="hover:text-primary">in</button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 md:px-8 py-4 flex justify-between items-center">
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
          <div className="relative" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
            <button
              onClick={() => handleDropdownClick("services")}
              className="flex items-center gap-1 text-dark hover:text-primary font-medium transition-colors"
            >
              Services{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {activeDropdown === "services" && (
              <div className="absolute left-0 mt-2 w-80 bg-light border border-gray-200 rounded-lg shadow-xl">
                <div className="px-6 py-4">
                  {servicesMenu.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      className="block py-2 text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Solutions Mega Menu */}
          <div className="relative" onMouseEnter={() => handleMouseEnter("solutions")} onMouseLeave={handleMouseLeave}>
            <button
              onClick={() => handleDropdownClick("solutions")}
              className="flex items-center gap-1 text-dark hover:text-primary font-medium transition-colors"
            >
              Solutions{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
              />
            </button>
            {activeDropdown === "solutions" && (
              <div className="absolute left-0 mt-2 w-96 bg-light border border-gray-200 rounded-lg shadow-xl">
                <div className="px-6 py-4 grid grid-cols-1 gap-3">
                  {solutionsMenu.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      className="block p-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors border border-transparent hover:border-primary"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="mr-2">{item.icon}</span>
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Mega Menu */}
          <div className="relative" onMouseEnter={() => handleMouseEnter("industries")} onMouseLeave={handleMouseLeave}>
            <button
              onClick={() => handleDropdownClick("industries")}
              className="flex items-center gap-1 text-dark hover:text-primary font-medium transition-colors"
            >
              Industries{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`}
              />
            </button>
            {activeDropdown === "industries" && (
              <div className="absolute left-0 mt-2 w-80 bg-light border border-gray-200 rounded-lg shadow-xl">
                <div className="px-6 py-4 grid grid-cols-2 gap-2">
                  {industriesMenu.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      className="block py-2 text-sm text-gray-600 hover:text-primary transition-all"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/hire" className="text-dark hover:text-primary font-medium transition-colors">
            Hire
          </Link>
          <Link href="/contact" className="text-dark hover:text-primary font-medium transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={18} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Globe size={18} className="text-gray-600" />
          </button>
          <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-6">
            Get Free Consultation →
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
            <div className="pl-4 mt-2 space-y-2">
              {servicesMenu.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="block py-1 text-sm text-gray-600 hover:text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </details>

          {/* Mobile Solutions Menu */}
          <details className="cursor-pointer">
            <summary className="py-2 text-dark hover:text-primary font-medium list-none flex items-center justify-between">
              Solutions <ChevronDown size={16} />
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              {solutionsMenu.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="block py-1 text-sm text-gray-600 hover:text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
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
                  className="block py-1 text-sm text-gray-600 hover:text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </details>

          <Link
            href="/hire"
            className="block py-2 text-dark hover:text-primary font-medium"
            onClick={() => setIsMobileOpen(false)}
          >
            Hire
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-dark hover:text-primary font-medium"
            onClick={() => setIsMobileOpen(false)}
          >
            Contact Us
          </Link>
          <Button
            className="w-full bg-primary hover:bg-primary-dark text-light rounded-full"
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
