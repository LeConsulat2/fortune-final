import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Fortune | Your-Fortune',
  description:
    'Get personalised AI financial fortune insights. Explore your money mindset, spending patterns, and financial outlook through a reflective quiz.',
};

export default function MoneyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <div className="text-4xl mb-4">💰</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Financial Fortune
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Your financial fortune isn&apos;t about predicting stock prices — it&apos;s
          about understanding your relationship with money. This reading reflects
          your spending habits, anxieties, and opportunities through the lens of
          your current mindset, helping you make more intentional choices today.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              What This Reading Covers
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Your current money mindset — confidence, anxiety, or somewhere in between</li>
              <li>• Spending triggers and whether today is a day for caution or action</li>
              <li>• Saving patterns and how small shifts can compound over time</li>
              <li>• Purchase decisions you may be weighing — need versus want</li>
              <li>• A personalised financial insight shaped by your profile and zodiac energy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              How the Quiz Works
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The financial quiz asks 8 focused questions about your planned
              purchases, spending triggers, saving habits, and money anxieties.
              Each question is single-choice for a quick, decisive flow. The quiz
              takes about two minutes, and your answers shape a reading that
              speaks directly to your financial state of mind today.
            </p>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <h3 className="text-base font-semibold text-foreground mb-3">Sample Questions</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>&bull; &quot;Are you planning to buy something specific today?&quot;</li>
                <li>&bull; &quot;What usually triggers your impulse spending?&quot;</li>
                <li>&bull; &quot;If someone you trusted gave you money advice today, what would you want to hear?&quot;</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Example Insight
            </h2>
            <div className="bg-amber-500/5 p-5 rounded-xl border border-amber-500/15">
              <p className="text-amber-400 font-semibold text-lg mb-2">
                &ldquo;Your intuition about timing feels sharp.&rdquo;
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Today, trust your gut when it comes to financial decisions.
                Consider reviewing your budget with a fresh eye; a small
                re-allocation now could yield compounded growth by month&apos;s
                end. This isn&apos;t a day for reckless spending, but for
                strategic adjustments that align with your long-term goals.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Tips for a Better Reading
            </h2>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li><strong className="text-foreground">Answer based on today</strong> — your financial mood shifts. What feels true right now is what matters.</li>
                <li><strong className="text-foreground">Be honest about impulses.</strong> Acknowledging a spending trigger is the first step to managing it.</li>
                <li><strong className="text-foreground">Use it as a check-in.</strong> Read your financial fortune before making a purchase decision for extra perspective.</li>
                <li><strong className="text-foreground">Pair with your general fortune</strong> for a wider picture of how your day&apos;s energy intersects with money.</li>
              </ol>
            </div>
          </section>

          <section className="text-center pt-2">
            <Link
              href="/quiz/money"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Start Your Financial Reading
            </Link>
            <p className="text-muted-foreground/60 text-xs mt-4">
              For entertainment and self-reflection. Not a substitute for professional financial advice.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
