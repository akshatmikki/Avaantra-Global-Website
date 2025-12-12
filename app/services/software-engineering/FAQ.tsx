"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "What technologies do you specialize in?",
      a: "We work with modern tech stacks including React, Node.js, Python, Java, .NET, and cloud platforms like AWS and Azure.",
    },
    {
      q: "How do you ensure code quality?",
      a: "We follow rigorous code review processes, automated testing, and adhere to industry best practices and coding standards.",
    },
    {
      q: "What is your typical project timeline?",
      a: "Timelines vary based on project scope, but most projects range from 3-6 months. We provide detailed estimates during discovery.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes, we offer ongoing maintenance and support packages to ensure your application runs smoothly after launch.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-semibold text-dark hover:bg-gray-50 flex justify-between items-center"
              >
                {faq.q}
                <span className="text-primary">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-200">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
