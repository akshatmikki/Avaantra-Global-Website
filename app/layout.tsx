import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { Toaster } from "sonner"
import LayoutClient from "@/components/layout-client"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Avaantra Global — Build, Launch & Scale Predictably",
  description:
    "Avaantra Global helps startups, SaaS companies, agencies, and enterprises build products faster with Engineering, AI, Growth, and Virtual Leadership — all under one unified partner.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* ✅ reCAPTCHA (loads before interaction) */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="beforeInteractive"
        />

        {/* ✅ Toasts */}
        <Toaster richColors position="top-right" />

        <LayoutClient>{children}</LayoutClient>
        <Analytics />
      </body>
    </html>
  )
}
