import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function StartupFAQ() {
  const faqs = [
    {
      question: "I have an idea but no technical team. Can you still help?",
      answer: "Absolutely. Our Managed Startup Pods handle everything from design to launch.",
    },
    {
      question: "I already have developers. Can you focus on GTM?",
      answer: "Yes — we can plug in just for growth strategy, automation, and marketing.",
    },
    {
      question: "Do I need to raise funding first?",
      answer: "No. You can start small — our pricing scales by phase (MVP, traction, scale).",
    },
    {
      question: "Will I own the code and IP?",
      answer: "Yes, 100%. You retain all ownership rights.",
    },
    {
      question: "How much will it cost to build an MVP?",
      answer: "Typically between $8K–$25K, depending on complexity. Fixed price. No surprises.",
    },
    {
      question: "Can you help connect us to investors?",
      answer: "Yes — through Avaantra's extended investor network and demo day partners.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">What Founders Usually Ask</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-dark">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
