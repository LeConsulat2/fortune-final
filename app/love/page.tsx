import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Love & Relationship Fortune | Your-Fortune',
  description:
    'Get a personalised AI love fortune reading. Explore your romantic connections, emotional patterns, and relationship insights through a reflective quiz.',
};

export default function LovePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <div className="text-4xl mb-4">❤️</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Love &amp; Relationship Fortune
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Your love fortune is more than a prediction — it&apos;s a mirror for
          how you connect, communicate, and care. Whether you&apos;re in a
          relationship, navigating something new, or reflecting on past
          connections, this reading offers grounded insight tailored to where you
          are right now.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              What This Reading Covers
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Your current emotional landscape and how it shapes your relationships</li>
              <li>• Communication patterns — what you express and what stays unsaid</li>
              <li>• Trust, vulnerability, and how you show up for the people you love</li>
              <li>• Recurring relationship patterns you may not have noticed</li>
              <li>• A personalised insight connecting your zodiac profile to today&apos;s emotional energy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              How the Quiz Works
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The love quiz asks 10 thoughtful questions — one at a time — about
              your relationship status, current mood, communication style, trust
              levels, and what you prioritise in love. Some questions let you
              pick multiple answers to capture the full picture. There are no
              right or wrong responses; honest, in-the-moment answers produce the
              most resonant readings.
            </p>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <h3 className="text-base font-semibold text-foreground mb-3">Sample Questions</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>&bull; &quot;How would you describe your current relationship status?&quot;</li>
                <li>&bull; &quot;What does your inner voice say about love right now?&quot;</li>
                <li>&bull; &quot;When it comes to intimacy and closeness, how comfortable do you feel?&quot;</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Example Insight
            </h2>
            <div className="bg-red-500/5 p-5 rounded-xl border border-red-500/15">
              <p className="text-primary/80 font-semibold text-lg mb-2">
                &ldquo;Contentment with a hint of introspection shapes your day.&rdquo;
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Today, you may find yourself reflecting on past relationships,
                appreciating their peace while recognising how they contribute to
                your current mindset. This moment of clarity could inspire you to
                create stability in your emotional landscape. Consider journaling
                about your feelings or reaching out for a deep conversation with
                a trusted friend.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Tips for a Better Reading
            </h2>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li><strong className="text-foreground">Be honest about where you are</strong> — not where you wish you were. Authentic answers lead to readings that genuinely resonate.</li>
                <li><strong className="text-foreground">Reflect before you choose.</strong> Take a breath between questions. Your first instinct is usually closest to the truth.</li>
                <li><strong className="text-foreground">Come back at different times.</strong> Your emotional state shifts — a morning reading may reveal different patterns than an evening one.</li>
                <li><strong className="text-foreground">Pair with other categories.</strong> Try a mental health or composure reading alongside love for a fuller emotional picture.</li>
              </ol>
            </div>
          </section>

          <section className="text-center pt-2">
            <Link
              href="/quiz/love"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Start Your Love Reading
            </Link>
            <p className="text-muted-foreground/60 text-xs mt-4">
              For entertainment and self-reflection. Not a substitute for professional relationship advice.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
