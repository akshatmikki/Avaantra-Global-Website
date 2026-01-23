"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  heading: string;
  faqs: FAQItem[];
}

export default function FAQs({ heading, faqs }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            {heading}
          </h2>
        </div>

        {/* FAQ Cards */}
        <div className="grid gap-6 max-w-4xl mx-auto text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`relative rounded-2xl bg-white transition-all duration-300 ${
                  isOpen
                    ? "shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
                    : "shadow-[0_10px_24px_rgba(15,23,42,0.08)] hover:-translate-y-0.5"
                }`}
              >
                {/* Accent line */}
                <div
                  className={`h-1 w-full rounded-t-2xl ${
                    isOpen ? "bg-orange-500" : "bg-slate-200"
                  }`}
                />

                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-5 px-6 py-4"
                >
                  <span className="text-base md:text-lg font-semibold text-slate-900 leading-tight">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-orange-500 text-orange-500 rotate-45"
                        : "border-slate-300 text-slate-500"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-4 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
