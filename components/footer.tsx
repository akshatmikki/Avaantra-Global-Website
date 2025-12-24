"use client";

import Link from "next/link";
import { Facebook, Twitter, Dribbble} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-[#0B1C3D]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center">
   <Image
    src="/avaantra-logo.png"
    alt="Avaantra Global"
    width={110}
    height={44}
    className="object-contain"
  />
</Link>

            <p className="italic text-sm text-gray-600 max-w-xs">
              Technology, Talent & Growth <br /> — Under One Roof
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-600">
              <Link href="#"><Facebook size={18} /></Link>
              <Link href="#"><Twitter size={18} /></Link>
              <Link href="#"><Dribbble size={18} /></Link>
            </div>
          </div>

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              ["About Avaantra", "/about"],
              ["Our Team", "/team"],
              ["Partners", "/partners"],
              ["Careers", "/careers"],
              ["Case Studies", "/case-studies"],
              ["Contact", "/contact"],
            ]}
          />

          {/* Services */}
          <FooterColumn
            title="Services"
            links={[
              ["Software Development", "/services/software-development"],
              ["Digital Marketing", "/services/digital-marketing"],
              ["AI & Automation", "/services/ai-automation"],
              ["Product Engineering", "/services/product-engineering"],
              ["UI/UX Design", "/services/ui-ux"],
            ]}
          />

          {/* Solutions */}
          <FooterColumn
            title="Solutions"
            links={[
              ["For Agencies", "/solutions/agencies"],
              ["SaaS GTM", "/solutions/saas-gtm"],
              ["Startups", "/solutions/startups"],
              ["Healthcare", "/solutions/healthcare"],
              ["Accelerate Product Delivery", "/solutions/accelerate"],
            ]}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={[
              ["Blog", "/blog"],
              ["Whitepapers", "/whitepapers"],
              ["Pricing", "/pricing"],
              ["Calculators", "/calculators"],
              ["Privacy Policy", "/privacy-policy"],
              ["Terms of Use", "/terms"],
            ]}
          />
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-200" />

        {/* Bottom */}
        <div className="mt-6 text-center text-sm text-gray-600">
          © 2025 <span className="text-orange-500">Avaantra Global</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* -------------------- */
/* Reusable Column */
/* -------------------- */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h4 className="font-semibold mb-6 relative inline-block">
        {title}
        <span className="absolute left-0 -bottom-2 w-6 h-[2px] bg-orange-500" />
      </h4>

      <ul className="space-y-3 text-sm text-gray-700">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="hover:text-orange-500 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
