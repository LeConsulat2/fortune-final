import Link from 'next/link';
import type { Metadata } from 'next';
import { ZODIAC_SIGNS, ZODIAC_SIGNS_LABELS } from '@/lib/common-constants';

export const metadata: Metadata = {
  title: 'Zodiac Sign Guides | Your-Fortune',
  description:
    'Explore all 12 zodiac signs — personality traits, love compatibility, career strengths, and how each sign connects to your personalised fortune reading.',
};

export default function ZodiacIndexPage() {
  return (
    <main className="max-w-2xl lg:max-w-3xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Zodiac Sign Guides
        </h1>
        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
          Your zodiac sign shapes the lens through which your fortune is read.
          Each sign carries distinct strengths, challenges, and emotional
          patterns that influence how you experience love, work, money, and
          daily life. Understanding your sign helps you get more from every
          reading.
        </p>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Explore the guides below to learn about your sign&apos;s personality,
          relationship style, career strengths, and how your zodiac energy
          connects to the fortune categories on Your-Fortune. Whether
          you&apos;re a fiery Aries, a grounded Taurus, or a dreamy Pisces,
          your sign adds a personal layer to every insight.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {ZODIAC_SIGNS.map((sign) => {
            const info = ZODIAC_SIGNS_LABELS[sign];
            return (
              <Link
                key={sign}
                href={`/zodiac/${sign}`}
                className="group p-5 rounded-xl bg-muted/15 border border-border hover:border-primary/30 hover:bg-muted/25 transition-all"
              >
                <div className="text-3xl mb-2">{info.emoji}</div>
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {info.name}
                </div>
                <div className="text-xs text-muted-foreground/60 mt-0.5">
                  {info.dateRange}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Don&apos;t know your zodiac sign? Start your fortune journey and
            we&apos;ll calculate it from your birth date.
          </p>
          <Link
            href="/start/step-1-personal-info"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            Start Your Fortune
          </Link>
        </div>
      </div>
    </main>
  );
}
