"use client"

import { Navigation } from "@/components/navigation"
import  Footer  from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  )
}
