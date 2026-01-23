"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  heading: string;
  subheading: string;
  ctaText: string;
}

export default function FinalCTA({
  heading,
  subheading,
  ctaText,
}: FinalCTAProps) {
  return (
    <section className="relative bg-slate-900 py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-700" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {heading}
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            {subheading}
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
            >
              {ctaText}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
