import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  return (
    <section className="pt-32 pb-28 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
          {subtitle}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact">
            <Button
              size="lg"
              className="
      cursor-pointer
      transition-all duration-200
      bg-orange-500
      hover:bg-orange-600
      hover:scale-[1.02]
    "
            >
              {primaryCTA} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          {secondaryCTA && (
            <Button
              size="lg"
              variant="outline"
              className="
    bg-white 
    text-slate-900 
    border-white 
    hover:bg-slate-100 
    hover:text-orange-500
  "
            >
              {secondaryCTA}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
