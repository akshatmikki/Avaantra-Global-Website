"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react"

export default function MarketingHero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-32 pb-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Bento grid layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main hero content - spans 7 columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Marketing Experts
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-gray-900">
                Grow Your Brand with
                <span className="block mt-2 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Marketing Magic
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Data-driven strategies. Creative execution. Measurable ROI. Get marketing experts who actually
                understand growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-full px-8 text-base font-bold shadow-xl shadow-purple-500/30"
                >
                  Start Growing Now
                  <ArrowRight className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-8 bg-transparent"
                >
                  See Case Studies
                </Button>
              </div>
            </div>

            {/* Side bento cards - spans 5 columns */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-6 text-white">
                <TrendingUp className="w-10 h-10 mb-3" />
                <div className="text-4xl font-black mb-1">3-5X</div>
                <div className="text-sm font-medium opacity-90">ROI in 90 days</div>
              </div>

              <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-6 text-white">
                <div className="text-3xl font-black mb-1">2-3X</div>
                <div className="text-xs font-medium opacity-90">Lead Growth</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 text-white">
                <div className="text-3xl font-black mb-1">40%</div>
                <div className="text-xs font-medium opacity-90">Lower CAC</div>
              </div>

              <div className="col-span-2 bg-gray-900 rounded-3xl p-6 text-white">
                <div className="text-sm font-semibold mb-3 opacity-70">Start in</div>
                <div className="text-4xl font-black">7-15 Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
