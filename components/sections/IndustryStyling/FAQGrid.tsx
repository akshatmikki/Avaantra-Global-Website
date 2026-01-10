"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

export function FAQGrid({
  title,
  faqs,
}: {
  title: string
  faqs: FAQ[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {title}
        </h2>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={i}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "border-orange-500 bg-orange-50"
                    : "border-slate-200 bg-white hover:border-orange-300"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <h4 className="font-semibold text-gray-900">
                    {item.question}
                  </h4>

                  <ChevronDown
                    className={`h-5 w-5 text-orange-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
