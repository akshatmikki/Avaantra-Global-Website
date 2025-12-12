import ContactHero from "@/components/sections/contact/contact-hero"
import ContactForm from "@/components/sections/contact/contact-form"
import ContactInfo from "@/components/sections/contact/contact-info"
import LocationMap from "@/components/sections/contact/location-map"

export const metadata = {
  title: "Contact Us | Avaantra Global - Get in Touch",
  description:
    "Contact Avaantra Global for software development, AI solutions, and growth services. Reach out to discuss your project and scale your business predictably.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-light">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-16 max-w-7xl mx-auto">
        <ContactForm />
        <ContactInfo />
      </div>
      <LocationMap />
    </main>
  )
}
