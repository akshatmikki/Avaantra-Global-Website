"use client"

export default function LocationMap() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark">Our Location</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0891601016065!2d77.37368967431121!3d28.62708977566772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce506ffd5bea1%3A0x722435e19d8f8354!2sUfirm%20Head%20Office!5e0!3m2!1sen!2sin!4v1766512366697!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Avaantra Global Location"
          />
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">Visit us at our office or schedule a virtual consultation</p>
        </div>
      </div>
    </section>
  )
}
