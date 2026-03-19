import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ZODIAC_SIGNS, ZODIAC_SIGNS_LABELS, type ZodiacSign } from '@/lib/common-constants';
import { ZODIAC_CONTENT } from '../zodiac-content';

export function generateStaticParams() {
  return ZODIAC_SIGNS.map((sign) => ({ sign }));
}

export async function generateMetadata(
  props: { params: Promise<{ sign: string }> }
): Promise<Metadata> {
  const { sign } = await props.params;
  if (!ZODIAC_SIGNS.includes(sign as ZodiacSign)) return {};
  const info = ZODIAC_SIGNS_LABELS[sign as ZodiacSign];
  return {
    title: `${info.name} ${info.emoji} Zodiac Guide | Your-Fortune`,
    description: `Discover ${info.name} personality traits, love style, career strengths, and how this zodiac sign shapes your personalised fortune reading. Born ${info.dateRange}.`,
  };
}

export default async function ZodiacSignPage(
  props: { params: Promise<{ sign: string }> }
) {
  const { sign } = await props.params;
  if (!ZODIAC_SIGNS.includes(sign as ZodiacSign)) notFound();

  const info = ZODIAC_SIGNS_LABELS[sign as ZodiacSign];
  const content = ZODIAC_CONTENT[sign as ZodiacSign];

  // Find adjacent signs for navigation
  const idx = ZODIAC_SIGNS.indexOf(sign as ZodiacSign);
  const prev = ZODIAC_SIGNS[(idx - 1 + 12) % 12];
  const next = ZODIAC_SIGNS[(idx + 1) % 12];
  const prevInfo = ZODIAC_SIGNS_LABELS[prev];
  const nextInfo = ZODIAC_SIGNS_LABELS[next];

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground/60 mb-6">
          <Link href="/zodiac" className="hover:text-muted-foreground transition-colors">
            Zodiac Guides
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{info.name}</span>
        </nav>

        <div className="text-5xl mb-4">{info.emoji}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
          {info.name}
        </h1>
        <p className="text-muted-foreground mb-8">{info.dateRange}</p>

        {/* Quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="bg-muted/20 p-4 rounded-xl border border-border text-center">
            <div className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Element</div>
            <div className="text-sm font-semibold text-foreground">{content.element}</div>
          </div>
          <div className="bg-muted/20 p-4 rounded-xl border border-border text-center">
            <div className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Quality</div>
            <div className="text-sm font-semibold text-foreground">{content.quality}</div>
          </div>
          <div className="bg-muted/20 p-4 rounded-xl border border-border text-center">
            <div className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Planet</div>
            <div className="text-sm font-semibold text-foreground">{content.rulingPlanet}</div>
          </div>
          <div className="bg-muted/20 p-4 rounded-xl border border-border text-center">
            <div className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Symbol</div>
            <div className="text-sm font-semibold text-foreground">{content.symbol}</div>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {content.overview}
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Personality
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {content.personality}
            </p>
          </section>

          <section>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-emerald-500/5 p-5 rounded-xl border border-emerald-500/10">
                <h3 className="text-base font-semibold text-emerald-400 mb-3">Strengths</h3>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  {content.strengths.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-500/5 p-5 rounded-xl border border-amber-500/10">
                <h3 className="text-base font-semibold text-amber-400 mb-3">Challenges</h3>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  {content.challenges.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              {info.name} in Love
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {content.loveStyle}
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              {info.name} at Work
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {content.careerStyle}
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              How {info.name} Reads Fortune
            </h2>
            <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
              <p className="text-muted-foreground leading-relaxed">
                {content.fortuneConnection}
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-2">
            <Link
              href="/start/step-1-personal-info"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get Your {info.name} Fortune
            </Link>
            <p className="text-muted-foreground/60 text-xs mt-4">
              For entertainment and self-reflection.
            </p>
          </section>

          {/* Navigation between signs */}
          <nav className="flex items-center justify-between pt-4 border-t border-border">
            <Link
              href={`/zodiac/${prev}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              &larr; {prevInfo.emoji} {prevInfo.name}
            </Link>
            <Link
              href="/zodiac"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All Signs
            </Link>
            <Link
              href={`/zodiac/${next}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {nextInfo.name} {nextInfo.emoji} &rarr;
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
