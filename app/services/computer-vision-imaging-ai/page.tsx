import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Maximize2 } from "lucide-react"

export default function ComputerVisionImagingAIPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dark via-gray-900 to-dark text-light py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Maximize2 className="inline mr-2" size={16} />
                Computer Vision & Imaging AI
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                See with <span className="text-primary">AI Vision</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Build computer vision solutions that analyze images and videos to extract insights, detect objects, 
                and automate visual inspection. From quality control to medical imaging, we create vision AI that sees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-8 py-6 text-lg">
                  Book Free Consultation →
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-team-working-on-software-development-.jpg"
                alt="Computer Vision & Imaging AI"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Computer Vision & Imaging AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Image Analysis</h3>
              <p className="text-gray-600">Advanced image recognition and analysis for quality control and inspection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Object Detection</h3>
              <p className="text-gray-600">Detect and classify objects in images and videos with high accuracy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Custom Models</h3>
              <p className="text-gray-600">Train custom vision models tailored to your specific use cases.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Computer Vision & Imaging AI Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our Computer Vision & Imaging AI Services
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Vision AI systems that extract meaning from images and videos at scale.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Image Classification",
          desc: "Classify images accurately across large datasets",
        },
        {
          title: "Object Detection & Tracking",
          desc: "Detect, localize, and track objects in real time",
        },
        {
          title: "Video Analytics",
          desc: "Analyze video streams for events, motion, and patterns",
        },
        {
          title: "Visual Quality Inspection",
          desc: "Automated defect detection and quality control",
        },
        {
          title: "Medical Imaging AI",
          desc: "AI-powered imaging analysis for healthcare use cases",
        },
        {
          title: "Custom Vision Models",
          desc: "Tailored models trained on your proprietary data",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Computer Vision Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our Computer Vision Development Process
      </h2>
      <p className="text-gray-600">
        From raw images to production-ready vision systems.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Use Case Definition",
        "Data Collection & Labeling",
        "Model Training",
        "Testing & Validation",
        "Deployment & Monitoring",
      ].map((step, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow text-center"
        >
          <div className="text-3xl font-bold text-primary mb-3">
            {idx + 1}
          </div>
          <p className="font-semibold">{step}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Industries */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold mb-4">
        Industries Using Vision AI
      </h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "Manufacturing",
        "Healthcare",
        "Retail & E-commerce",
        "Smart Cities & Security",
      ].map((industry, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow text-center font-semibold"
        >
          {industry}
        </div>
      ))}
    </div>
  </div>
</section>

{/* Case Study */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">
        Computer Vision Case Study
      </h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">Manufacturing Company</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          Manual quality inspection causing delays and errors
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          Vision AI system for automated defect detection on production lines
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "90% defect detection accuracy",
            "50% faster inspection cycles",
            "Reduced operational costs",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 font-semibold">
              <span className="text-primary">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">FAQs</h2>
    </div>

    <div className="max-w-4xl mx-auto space-y-6">
      {[
        {
          q: "Do you train custom computer vision models?",
          a: "Yes — models are trained on your specific image and video data.",
        },
        {
          q: "Can vision AI work in real time?",
          a: "Yes — we build real-time and batch processing systems.",
        },
        {
          q: "Do you handle data labeling?",
          a: "Yes — we manage annotation pipelines and quality checks.",
        },
        {
          q: "Can vision models be deployed on edge devices?",
          a: "Yes — including mobile, IoT, and edge hardware.",
        },
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">{item.q}</h3>
          <p className="text-gray-600">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Final CTA */}
<section className="py-24 bg-gradient-to-br from-dark via-gray-900 to-dark text-light">
  <div className="container mx-auto px-4 md:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to See with AI?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Turn images and video into actionable intelligence with computer vision.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free Vision AI Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
