import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mental Health & Wellness Fortune | Your-Fortune',
  description:
    'Get a personalised AI mental health fortune reading. Reflect on your emotional patterns, self-talk, coping strategies, and inner balance through a thoughtful quiz.',
};

export default function MentalHealthPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <div className="text-4xl mb-4">🧠</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Mental Health &amp; Wellness Fortune
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          This reading is a quiet check-in with yourself. It doesn&apos;t
          diagnose or prescribe — it reflects. Through questions about your
          emotional patterns, inner narrative, and coping rhythms, the reading
          offers grounded prompts for self-awareness and gentle clarity on days
          when your mental landscape feels uncertain.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              What This Reading Covers
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Your daily mental state — energy levels, emotional weight, and mood fluctuations</li>
              <li>• Inner narrative patterns: what your self-talk sounds like today</li>
              <li>• Social battery — how much connection you need versus solitude</li>
              <li>• Coping mechanisms you lean on and whether they&apos;re serving you</li>
              <li>• Emotional loneliness — a subtle signal that&apos;s easy to overlook</li>
              <li>• A personalised wellness insight anchored to your profile and current state</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              How the Quiz Works
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The mental health quiz is the most in-depth on the platform — 10
              multi-select questions that allow you to capture the nuance of how
              you actually feel, not just a single answer. Topics range from
              daily mental state and stress response to self-talk patterns and
              support systems. The multi-select format means you can express
              contradictions — feeling both &ldquo;hopeful&rdquo; and
              &ldquo;exhausted&rdquo; is real, and the quiz captures that.
            </p>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <h3 className="text-base font-semibold text-foreground mb-3">Sample Questions</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>&bull; &quot;What patterns have you noticed in your mental health recently?&quot;</li>
                <li>&bull; &quot;What does your inner voice tend to say?&quot;</li>
                <li>&bull; &quot;How does your social battery feel right now?&quot;</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Example Insight
            </h2>
            <div className="bg-blue-500/5 p-5 rounded-xl border border-blue-500/15">
              <p className="text-blue-400 font-semibold text-lg mb-2">
                &ldquo;A day of introspection and small victories awaits you.&rdquo;
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Today might feel like a mood lottery — the constant pendulum
                swing can create emotional fatigue, especially when you&apos;re
                navigating the complexities of feeling too much. Embrace the
                small wins throughout your day; they can be grounding and provide
                a sense of achievement amidst fluctuations. Remember, it&apos;s
                okay to take things one step at a time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Tips for a Better Reading
            </h2>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li><strong className="text-foreground">Select everything that applies.</strong> The multi-select format exists because mental health is layered. Don&apos;t filter yourself.</li>
                <li><strong className="text-foreground">Try it at different times of day.</strong> Your morning mental state and your evening state are often very different — both are worth reading.</li>
                <li><strong className="text-foreground">Use it as a journaling prompt.</strong> After reading your fortune, write a few sentences about what resonated. That reflection compounds the benefit.</li>
                <li><strong className="text-foreground">Pair with composure</strong> when you&apos;re feeling overwhelmed — the two readings work well together.</li>
              </ol>
            </div>
          </section>

          <section>
            <div className="bg-amber-500/5 p-5 rounded-xl border border-amber-500/15">
              <h3 className="text-base font-semibold text-amber-400 mb-2">
                Important Note
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                This reading is designed for self-reflection and emotional
                awareness — it is not therapy, diagnosis, or clinical advice. If
                you are experiencing a mental health crisis, please reach out to
                a qualified professional or contact a crisis helpline in your
                country.
              </p>
            </div>
          </section>

          <section className="text-center pt-2">
            <Link
              href="/quiz/mental-health"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Start Your Wellness Reading
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
