"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
}

interface HeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  stats: StatItem[];
  uspList?: string[];
}

export default function HireHero({
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  uspList,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        {/* HERO TEXT */}
        <div className="animate-fade-in-up max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
            {title}{" "}
            {highlight && <span className="text-orange-500">{highlight}</span>}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300">{subtitle}</p>
        </div>

        {/* USP CARDS */}
        {uspList && (
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {uspList.map((usp, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 text-left text-slate-200 hover:border-orange-500/40 hover:translate-y-[-4px] transition-all duration-300"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 text-lg mt-1">✓</span>
                  <p className="leading-relaxed">{usp}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 flex flex-wrap justify-center gap-5 animate-fade-in-up">
          <Link href="/contact">
            <Button
              size="lg"
              className="
      relative
      cursor-pointer
      bg-gradient-to-r from-orange-500 to-orange-600
      hover:from-orange-600 hover:to-orange-700
      shadow-lg shadow-orange-500/30
      px-8
      transition-all duration-200
    "
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          {secondaryCta && (
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur border border-white/20 text-slate-200 hover:bg-white/10 px-8"
            >
              {secondaryCta}
            </Button>
          )}
        </div>

        {/* STATS */}
        <div className="relative mt-20 max-w-5xl mx-auto animate-fade-in-scale">
          <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xl px-10 py-8">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {stats.map((stat, idx) => (
                <li key={idx} className="group transition-all duration-300">
                  <p className="text-2xl font-semibold text-orange-500 group-hover:translate-y-[-2px] transition-transform">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
