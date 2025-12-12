"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How fast can we start?",
      answer: "Typically within 10–15 days after initial consultation and agreement.",
    },
    {
      question: "Do you handle full development?",
      answer: "Yes, from strategy and planning to deployment and ongoing support.",
    },
    {
      question: "Can we hire a mixed team?",
      answer: "Yes — developers, QA, PM, UI/UX, DevOps, and marketing specialists.",
    },
    {
      question: "Are your teams remote?",
      answer: "Mostly remote with hybrid options available based on your requirements.",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Always. We prioritize confidentiality and protect your intellectual property.",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Quick answers to common questions about our services</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-dark text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
