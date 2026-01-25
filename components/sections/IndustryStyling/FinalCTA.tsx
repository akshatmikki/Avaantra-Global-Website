import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  trustText,
}: {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA?: string;
  trustText?: string;
}) {
  return (
    <section className="py-28 px-4 bg-gradient-to-br from-primary to-primary-dark text-white text-center">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-lg mb-8 max-w-3xl mx-auto">{subtitle}</p>

      <div className="flex gap-4 justify-center flex-wrap">
        <Link href="/contact">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary cursor-pointer"
          >
            {primaryCTA}
          </Button>
        </Link>

        {secondaryCTA && (
          <Button
            size="lg"
            variant="outline"
            className="relative bg-orange-500 text-white hover:bg-orange-400 rounded-full px-10 h-12 text-base font-semibold shadow-xl flex items-center gap-2"
          >
            {secondaryCTA}
          </Button>
        )}
      </div>

      {trustText && <p className="mt-10 text-sm">{trustText}</p>}
    </section>
  );
}
