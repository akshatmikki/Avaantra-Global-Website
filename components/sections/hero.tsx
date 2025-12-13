"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-light pt-8 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Hero with Image */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 z-10 order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance" style={{ color: '#1C2856' }}>
                Build. Launch. Scale. <span className="text-primary" style={{ color: '#E76A32' }}>Predictably.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-pretty">
                Avaantra Global brings Engineering, AI, Marketing & Leadership into one ecosystem — giving you speed,
                quality, and predictable outcomes without managing multiple vendors.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-primary hover:bg-[#E76A32] text-white rounded-full px-8 py-6 text-base font-semibold" style={{ backgroundColor: '#E76A32' }}>
                  Book a Free Strategy Call <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 hover:bg-gray-50 rounded-full px-8 py-6 text-base font-semibold bg-transparent"
                  style={{ borderColor: '#1C2856', color: '#1C2856' }}
                >
                  Hire a Dedicated Team
                </Button>
              </div>
            </div>

            {/* Right - Image with overlay stats */}
            <div className="relative order-1 md:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/professional-team-working-collaboration-office.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent"></div>
              </div>

              <div className="absolute -bottom-12 left-0 right-0 grid grid-cols-2 gap-3 px-4">
                {/* Stat Card 1 */}
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <svg
                    className="w-6 h-6 text-primary mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="font-bold text-sm" style={{ color: '#1C2856' }}>100+ Projects</p>
                  <p className="text-gray-600 text-xs">Delivered</p>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <svg
                    className="w-6 h-6 text-primary mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="9" cy="9" r="3" />
                    <path d="M12 9c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
                    <path d="M21 15a6 6 0 01-6 6H9a6 6 0 01-6-6" />
                  </svg>
                  <p className="font-bold text-dark text-sm">95% Client</p>
                  <p className="text-gray-600 text-xs">Retention</p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <svg
                    className="w-6 h-6 text-primary mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <p className="font-bold text-sm" style={{ color: '#1C2856' }}>15 Days to</p>
                  <p className="text-gray-600 text-xs">On-board</p>
                </div>

                {/* Stat Card 4 */}
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <svg
                    className="w-6 h-6 text-primary mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="font-bold text-sm" style={{ color: '#1C2856' }}>10+ Industries</p>
                  <p className="text-gray-600 text-xs">Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="mt-20 pt-12 border-t border-gray-200 space-y-6">
          <p className="text-lg font-semibold text-primary">Join over +1500 happy clients!</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
              <p className="font-semibold text-gray-700">Envato</p>
            </div>
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
              <p className="font-semibold text-gray-700">Slack</p>
            </div>
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
              <p className="font-semibold text-gray-700">Figma</p>
            </div>
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
              <p className="font-semibold text-gray-700">Sketch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
