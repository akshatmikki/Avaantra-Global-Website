import { Button } from "@/components/ui/button"

export function FinalCTA({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  trustText,
}: {
  title: string
  subtitle: string
  primaryCTA: string
  secondaryCTA?: string
  trustText?: string
}) {
  return (
    <section className="py-28 px-4 bg-gradient-to-br from-primary to-primary-dark text-white text-center">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-lg mb-8 max-w-3xl mx-auto">{subtitle}</p>

      <div className="flex gap-4 justify-center flex-wrap">
        <Button size="lg" variant="secondary" className="bg-white text-primary">
          {primaryCTA}
        </Button>

        {secondaryCTA && (
          <Button size="lg" variant="outline" className="border-white/30 text-white">
            {secondaryCTA}
          </Button>
        )}
      </div>

      {trustText && (
        <p className="mt-10 text-sm">{trustText}</p>
      )}
    </section>
  )
}
