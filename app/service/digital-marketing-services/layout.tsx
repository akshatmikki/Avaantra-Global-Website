import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Digital Marketing Services for Startups, SaaS & Agencies | Avaantra Global",
  description:
    "Drive predictable growth with Avaantra Global’s data-driven digital marketing services. From SEO to CRO, performance marketing, and SaaS growth — we help you attract, convert, and retain customers.",
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}