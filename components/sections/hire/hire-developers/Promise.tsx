"use client";

interface PromisePoint {
  text: string;
}

interface OutcomeMetric {
  value: string;
  label: string;
}

interface OurPromiseProps {
  heading: string;
  subheading: string;
  promises: PromisePoint[];
  outcomes: OutcomeMetric[];
}

export default function OurPromise({
  heading,
  subheading,
  promises,
  outcomes,
}: OurPromiseProps) {
  return (
    <section className="relative bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subheading}</p>
        </div>

        {/* Promise Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {promises.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in-up bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg mt-1">✓</span>
                <p className="text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="animate-fade-in-up">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-12">
            Predictable Outcomes
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {outcomes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 px-6 py-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="text-2xl font-bold text-orange-500">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
