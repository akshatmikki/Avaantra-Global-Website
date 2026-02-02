import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Software Engineering Services for Startups & Enterprises | Avaantra Global",
  description:
    "Build scalable, secure, and high-performance software with Avaantra Global. We help startups, SaaS companies, and enterprises ship faster through predictable, process-driven software engineering.",
};

export default function SoftwareEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
