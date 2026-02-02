import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services & Solutions for Startups, SaaS & Agencies | Avaantra Global",
  description:
    "Turn AI potential into predictable business impact. Avaantra Global helps startups, SaaS companies, and agencies design, build, and scale secure, compliant AI solutions that drive real growth.",
};

export default function AIServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
