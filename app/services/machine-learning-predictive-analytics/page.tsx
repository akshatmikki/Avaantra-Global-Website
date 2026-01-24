import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { BarChart3 } from "lucide-react"

export default function MachineLearningPredictiveAnalyticsPage() {
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
                <BarChart3 className="inline mr-2" size={16} />
                Machine Learning & Predictive Analytics
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Predict the Future with <span className="text-primary">ML & Analytics</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Build machine learning models that predict outcomes, identify patterns, and drive data-driven decisions. 
                From demand forecasting to customer churn prediction, we create ML solutions that deliver insights.
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
                alt="Machine Learning & Predictive Analytics"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Machine Learning & Predictive Analytics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Predictive Models</h3>
              <p className="text-gray-600">Build accurate models that forecast trends and predict future outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600">Transform raw data into actionable insights that drive business decisions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">ML pipelines that scale with your data and business needs.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Machine Learning & Predictive Analytics Services */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our Machine Learning & Predictive Analytics Services
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        End-to-end machine learning solutions that turn historical data into future-ready intelligence.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Predictive Modeling",
          desc: "Forecast demand, revenue, churn, and operational outcomes",
        },
        {
          title: "Customer Analytics",
          desc: "Segmentation, lifetime value prediction, and behavior analysis",
        },
        {
          title: "Time Series Forecasting",
          desc: "Accurate forecasting for sales, inventory, and growth trends",
        },
        {
          title: "Recommendation Systems",
          desc: "Personalized product and content recommendations",
        },
        {
          title: "Anomaly Detection",
          desc: "Detect fraud, risks, and unusual patterns in real time",
        },
        {
          title: "ML Pipeline Development",
          desc: "Scalable training, deployment, and monitoring pipelines",
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

{/* ML & Analytics Process */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Our Machine Learning Process
      </h2>
      <p className="text-gray-600">
        From data exploration to production-grade ML systems.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        "Business Problem Definition",
        "Data Collection & Preparation",
        "Model Training & Validation",
        "Deployment & Integration",
        "Monitoring & Continuous Improvement",
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
        Industries Using Predictive Analytics
      </h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "SaaS & Technology",
        "E-commerce & Retail",
        "Healthcare & Life Sciences",
        "Finance & Insurance",
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
        Machine Learning Case Study
      </h2>
    </div>

    <div className="bg-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow">
      <div>
        <p className="font-semibold mb-2">Client</p>
        <p className="text-gray-600 mb-4">E-commerce Platform</p>

        <p className="font-semibold mb-2">Challenge</p>
        <p className="text-gray-600 mb-4">
          Inaccurate demand forecasting and excess inventory
        </p>

        <p className="font-semibold mb-2">Solution</p>
        <p className="text-gray-600">
          Time-series forecasting models and real-time inventory predictions
        </p>
      </div>

      <div>
        <p className="font-semibold mb-4 text-primary">Results</p>
        <ul className="space-y-3">
          {[
            "30% improvement in forecast accuracy",
            "20% reduction in inventory costs",
            "Faster, data-driven decision-making",
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
          q: "Do you build custom ML models?",
          a: "Yes — models are tailored to your data and business objectives.",
        },
        {
          q: "Can ML integrate with our existing systems?",
          a: "Absolutely. We integrate with your current data stack and apps.",
        },
        {
          q: "How much data is needed for predictive analytics?",
          a: "It depends on the use case, but we can start with historical datasets.",
        },
        {
          q: "Do you support ongoing model monitoring?",
          a: "Yes — we handle drift detection, retraining, and optimization.",
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
      Ready to Predict What Comes Next?
    </h2>
    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
      Turn your data into foresight with machine learning and predictive analytics.
    </p>

    <Button className="bg-primary hover:bg-primary-dark text-light rounded-full px-10 py-6 text-lg">
      Book Free ML Consultation →
    </Button>
  </div>
</section>

      <ScrollToTop />
    </>
  )
}
