import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How fast can I hire a dedicated team?",
      answer: "Within 15–20 business days, depending on team size.",
    },
    {
      question: "Will the team work only for us?",
      answer: "Yes — each team is 100% exclusive to your company and projects.",
    },
    {
      question: "How do I manage them?",
      answer: "You can manage directly, or let Avaantra's PM handle daily coordination.",
    },
    {
      question: "What if I need to scale the team mid-project?",
      answer: "We can add new members within 5–7 days without disrupting workflow.",
    },
    {
      question: "How do you ensure communication and quality?",
      answer: "Daily standups, weekly reviews, and sprint demos ensure transparency.",
    },
    {
      question: "What about time zone overlap?",
      answer: "We provide flexible shift coverage (IST, GMT, EST, PST).",
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
