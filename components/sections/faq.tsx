"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can you start?",
      answer:
        "Within 7–15 days depending on team size and skills required. We have a streamlined onboarding process to get your team productive immediately.",
    },
    {
      question: "Do we get senior talent?",
      answer:
        "Yes — only senior engineers, designers, marketers & AI specialists. Our minimum is 10+ years of experience.",
    },
    {
      question: "Who owns the IP?",
      answer: "100% of the code, IP, and assets belong to you. We provide full IP transfer with NDA protection.",
    },
    {
      question: "How do you ensure predictable delivery?",
      answer: "Weekly sprints, demos, KPIs, AI-assisted workflows & clear reporting. We track every metric.",
    },
    {
      question: "Can you integrate AI into our product?",
      answer: "Yes — through 2–6 week AI sprints with measurable outcomes. We specialize in custom AI solutions.",
    },
    {
      question: "Is communication structured?",
      answer: "Dedicated PM + Slack/Teams channel + dashboards + weekly updates. Full transparency always.",
    },
    {
      question: "What about security?",
      answer: "SOC/GDPR/HIPAA-aligned practices + secure repos + NDA + IP transfer. Enterprise-grade security.",
    },
    {
      question: "Can the team scale up or down?",
      answer: "Yes — scale pods based on release cycles & business needs. Flexibility is built-in.",
    },
  ]

  return (
    <section className="py-20 bg-light">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-dark text-balance">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-dark text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-primary transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 bg-gray-50 border-t border-gray-200">
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
