"use client";

interface WhyThisWorksProps {
  heading: string;
  paragraphs: string[];
  highlight: string;
}

export default function WhyThisWorks({
  heading,
  paragraphs,
  highlight,
}: WhyThisWorksProps) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            {heading}
          </h2>

          <div className="mt-6 space-y-4">
            {paragraphs.map((text, idx) => (
              <p
                key={idx}
                className="text-lg text-slate-600 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Highlight pill */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="text-slate-700 font-medium">
              {highlight}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
