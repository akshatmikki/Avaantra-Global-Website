import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-dark">Get in Touch</h2>
        <p className="text-gray-600 text-lg mb-8">
          Ready to accelerate your business? Contact us today and let's discuss how Avaantra Global can help you build,
          launch, and scale predictably.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-dark mb-1">Email</h3>
            <a href="mailto:sales@avaantraglobal.com" className="text-gray-600 hover:text-primary transition-colors">
              sales@avaantraglobal.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-dark mb-1">Phone</h3>
            <a href="tel:+91 98114 67244" className="text-gray-600 hover:text-primary transition-colors">
              +91 98114 67244
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-dark mb-1">Headquarters</h3>
            <p className="text-gray-600">
              Plot No H-64, Ground Floor
              <br />
              Ufirm Business Park, Sector 63
              <br />
             Noida 201301, India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-dark mb-1">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 p-6 rounded-xl mt-8">
        <h3 className="font-semibold text-dark mb-2">Global Presence</h3>
        <p className="text-gray-600">
          We serve clients worldwide across US, Canada, UK, EU, Australia, Middle East, Singapore, and India with 24/7
          support and flexible timezone coverage.
        </p>
      </div>
    </div>
  )
}
