import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What does a Virtual CTO actually do?",
      answer:
        "They provide strategic tech leadership — managing architecture, vendors, and team alignment so your product grows predictably.",
    },
    {
      question: "How is a Virtual CTO different from a Tech Consultant?",
      answer: "A consultant advises — a Virtual CTO leads. They own outcomes, processes, and delivery accountability.",
    },
    {
      question: "How many hours per week does a Virtual CTO work?",
      answer: "Typically 10–25 hours per week, depending on engagement model.",
    },
    {
      question: "Can they manage my development team?",
      answer: "Yes — they lead and mentor your tech team, ensuring code quality and release discipline.",
    },
    {
      question: "How do you maintain confidentiality?",
      answer: "NDAs, secure communication, and restricted system access are standard.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-balance">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
