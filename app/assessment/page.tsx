import type { Metadata } from 'next';
import { AssessmentSelectorClient } from './assessment-selector-client';

export const metadata: Metadata = {
  title: 'Exam & Assignment Fortune | Your-Fortune',
  description:
    'Get a personalised AI academic fortune reading for exams or assignments. Reflect on your study mindset, preparation, and focus through a tailored quiz.',
};

export default function AssessmentPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <div className="text-4xl mb-4">📝</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Exam &amp; Assignment Fortune
        </h1>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Academic pressure hits differently depending on the day. This reading
          taps into your current study energy, preparation state, and mental
          readiness — whether you&apos;re facing a timed exam or grinding
          through an assignment deadline. The goal is clarity and focus, not
          false confidence.
        </p>

        <div className="space-y-10 mb-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              What This Reading Covers
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Your current study mindset — focused, scattered, or somewhere in between</li>
              <li>• Energy management and whether you&apos;re running on fumes or feeling sharp</li>
              <li>• Mental blocks that might be sabotaging your preparation</li>
              <li>• Practical timing guidance — when to push and when to rest</li>
              <li>• A personalised academic insight anchored to your profile and today&apos;s energy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Two Reading Paths
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Choose the path that matches what you&apos;re preparing for right
              now:
            </p>
          </section>
        </div>

        <AssessmentSelectorClient />

        <div className="space-y-10 mt-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Example Insight
            </h2>
            <div className="bg-blue-500/5 p-5 rounded-xl border border-blue-500/15">
              <p className="text-blue-400 font-semibold text-lg mb-2">
                &ldquo;Harness your focus for the exam ahead.&rdquo;
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Today is a pivotal moment when you can convert that overwhelming
                sensation into laser-like concentration. Picture yourself in the
                exam hall, breathing steadily while others feel the weight of
                pressure. Use the early hours to review concepts, allowing
                knowledge to flow freely. A quick 5-minute break every hour can
                keep your mind fresh, preventing burnout. One calm breath can
                turn panic into clarity.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Tips for a Better Reading
            </h2>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li><strong className="text-foreground">Take it before you study</strong> — the reading works best as a preparation tool, not a last-minute cram companion.</li>
                <li><strong className="text-foreground">Be honest about your mental blocks.</strong> Acknowledging what&apos;s holding you back is the first step to breaking through.</li>
                <li><strong className="text-foreground">Try different categories together</strong> — pair with a mental health or composure reading for a complete picture of your exam-day readiness.</li>
              </ol>
            </div>
          </section>

          <section className="text-center pt-2">
            <p className="text-muted-foreground/60 text-xs">
              For entertainment and self-reflection. Not a substitute for professional academic guidance.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
