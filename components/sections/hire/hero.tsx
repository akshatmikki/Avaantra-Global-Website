"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HireHero() {
  return (
    <section className="relative bg-light pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Start in 15 Days
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 text-balance leading-tight">
              Hire Skilled Developers, Marketers, and Leaders <span className="text-primary">Fast</span>
            </h1>

            <p className="text-xl text-gray-600 mb-6 text-pretty leading-relaxed">
              You do not need more full-time employees. You need reliable people who can start work quickly and do the
              job well.
            </p>

            <p className="text-base text-gray-700 mb-8 text-pretty leading-relaxed">
              At Avaantra Global, we help you hire trained developers, marketers, designers, and technology leaders in{" "}
              <span className="font-semibold text-primary">15 days</span>. You get the right people without the stress
              of hiring.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-primary hover:bg-orange-600 text-white rounded-full px-8 py-6 text-base font-semibold">
                Book a Free Hiring Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-dark text-dark hover:bg-gray-50 rounded-full px-8 py-6 text-base font-semibold bg-transparent"
              >
                See How It Works
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">100% dedicated to you</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Full IP and NDA safety</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Lower cost than full-time</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Easy to scale up or down</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-team-collaboration-in-modern-office-h.jpg"
                alt="Professional team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent"></div>
            </div>

            {/* Stats overlay cards matching homepage style */}
            <div className="absolute -bottom-12 left-0 right-0 grid grid-cols-2 gap-3 px-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mb-2">
                  15
                </div>
                <p className="font-bold text-dark text-sm">Days to Start</p>
                <p className="text-gray-600 text-xs">Fast Onboarding</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <svg
                  className="w-6 h-6 text-primary mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
                <p className="font-bold text-dark text-sm">500+ Experts</p>
                <p className="text-gray-600 text-xs">Ready to Join</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <svg
                  className="w-6 h-6 text-primary mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p className="font-bold text-dark text-sm">100% IP Safe</p>
                <p className="text-gray-600 text-xs">Full Protection</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <svg
                  className="w-6 h-6 text-primary mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                <p className="font-bold text-dark text-sm">98% Success</p>
                <p className="text-gray-600 text-xs">Hire Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
