"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-dark via-gray-900 to-black text-white min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden lg:block">
        <Image
          src="/professional-team-working-on-software-development-.jpg"
          alt="Technology team collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold">
              Our Services
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Scale Your Business with Technology, Talent, and <span className="text-primary">Predictable Outcomes</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
            Avaantra Global helps you build, automate, and grow with confidence. From software development to AI,
            marketing, and dedicated teams — we deliver the results you expect, without delays or guesswork.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
              Get Free Consultation
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-dark rounded-full px-8 h-12 bg-transparent backdrop-blur-sm"
            >
              Hire a Dedicated Team
            </Button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <p className="text-sm font-semibold mb-4 text-gray-300">What You Get Every Time</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Clear roadmaps",
                "Weekly progress",
                "Dedicated oversight",
                "Measurable KPIs",
                "Full ownership",
                "On-time delivery",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
