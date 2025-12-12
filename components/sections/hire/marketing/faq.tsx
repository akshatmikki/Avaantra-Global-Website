"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What marketing experts can I hire?",
    answer: "SEO, PPC, Content, Automation, Social, and Performance specialists.",
  },
  {
    question: "Can I hire one or multiple experts?",
    answer: "Yes — choose individuals or a full managed pod.",
  },
  {
    question: "How do you measure performance?",
    answer: "Weekly reports with KPIs like leads, CAC, conversion rate, and ROI.",
  },
  {
    question: "Do you provide tools and dashboards?",
    answer: "Yes — we use GA4, Looker Studio, and HubSpot dashboards.",
  },
  {
    question: "Can I white-label your experts under my agency?",
    answer: "Absolutely — our experts work under your brand as ghost resources.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-dark pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
