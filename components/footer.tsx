"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export { Footer }

export default function Footer() {
  const footerLinks = {
    Company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Solutions", href: "/solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Hire", href: "/hire" },
    ],
    Services: [
      { label: "Software Engineering", href: "/services/software-engineering" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
    Solutions: [
      { label: "For Agencies", href: "/for-agencies" },
      { label: "For Startups", href: "/for-startups" },
      { label: "Product Development", href: "/solutions/product-development" },
      { label: "SaaS GTM", href: "/solutions/saas-gtm" },
    ],
    Contact: [
      { label: "sales@avaantraglobal.com", href: "mailto:sales@avaantraglobal.com" },
      { label: "+91 98114 67244", href: "tel:+919811467244" },
      { label: "Contact Us", href: "/contact" },
    ],
  }

  return (
    <footer className="bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-light">Avaantra Global</span>
            </div>
            <p className="text-light/60 text-sm">Building predictable growth for startups and enterprises.</p>
            <div className="flex gap-4">
              <button className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </button>
              <button className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </button>
              <button className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links], idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4 text-light">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, lidx) => (
                  <li key={lidx}>
                    <Link href={link.href} className="text-light/60 hover:text-primary text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-light/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-light/60">
            <p>© 2025 Avaantra Global. All rights reserved.</p>
            <p>Engineering • AI • Growth • Leadership</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
