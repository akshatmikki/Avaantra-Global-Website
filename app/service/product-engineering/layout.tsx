import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Engineering Services for Startups & SaaS | Avaantra Global",
  description:
    "Turn ideas into scalable, market-ready products. Avaantra Global provides end-to-end product engineering services — from discovery and MVP development to SaaS scaling and CTO-led architecture.",
};

export default function ProductEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
