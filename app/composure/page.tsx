import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Composure & Balance Fortune | Your-Fortune',
  description:
    'Get a personalised AI composure reading. Explore how you handle pressure, make decisions under stress, and find inner calm through a reflective quiz.',
};

export default function ComposurePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <div className="text-4xl mb-4">🧘</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Composure &amp; Balance Fortune
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Life moves fast. This reading helps you check in with how you&apos;re
          handling it — your response to pressure, the clarity of your
          decisions, and whether today calls for bold action or quiet
          steadiness. It&apos;s designed for moments when you need to recenter
          and find your footing.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              What This Reading Covers
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• How you perform under pressure — and where that energy comes from</li>
              <li>• Your decision-making style today: instinctive, cautious, or somewhere between</li>
              <li>• Leadership presence and how others experience your calm (or lack of it)</li>
              <li>• Competency gaps that may be creating friction beneath the surface</li>
              <li>• A personalised composure insight drawn from your profile and current energy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              How the Quiz Works
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The composure quiz covers 8 focused questions about pressure
              management, skill refinement, decision-making, and operational
              wisdom. Each question is single-choice — designed to be answered
              quickly and instinctively. The reading that follows reflects your
              composure profile for today, not a permanent label.
            </p>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <h3 className="text-base font-semibold text-foreground mb-3">Sample Questions</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>&bull; &quot;When the pressure ramps up, what happens to your performance?&quot;</li>
                <li>&bull; &quot;How do you typically make important decisions?&quot;</li>
                <li>&bull; &quot;What&apos;s one area where you know you could be sharper?&quot;</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Example Insight
            </h2>
            <div className="bg-violet-500/5 p-5 rounded-xl border border-violet-500/15">
              <p className="text-violet-400 font-semibold text-lg mb-2">
                &ldquo;Steadiness is your superpower today.&rdquo;
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                You may not feel like the most energetic person in the room, but
                your calm presence is exactly what today calls for. A
                conversation later this afternoon could test your patience —
                respond with silence first. The person pushing back needs
                reassurance, not argument. Your ability to stay composed in that
                moment will shift the dynamic entirely.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Tips for a Better Reading
            </h2>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li><strong className="text-foreground">Answer from today&apos;s state</strong> — your composure shifts day to day. What&apos;s true right now matters most.</li>
                <li><strong className="text-foreground">Don&apos;t overthink the answers.</strong> This quiz is about instinct. Your first choice is usually most accurate.</li>
                <li><strong className="text-foreground">Use it before high-stakes moments</strong> — a big meeting, a difficult conversation, or a day that already feels heavy.</li>
                <li><strong className="text-foreground">Pair with mental health</strong> for a deeper view of your emotional and psychological equilibrium.</li>
              </ol>
            </div>
          </section>

          <section className="text-center pt-2">
            <Link
              href="/quiz/composure"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Start Your Composure Reading
            </Link>
            <p className="text-muted-foreground/60 text-xs mt-4">
              For entertainment and self-reflection. Not a substitute for professional mental health support.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
