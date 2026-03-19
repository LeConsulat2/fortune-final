import type { Metadata } from 'next';
import { JobSelectorClient } from './job-selector-client';

export const metadata: Metadata = {
  title: 'Career & Work Fortune | Your-Fortune',
  description:
    'Get a personalised AI career fortune reading. Explore your workplace energy, ambition, teamwork dynamics, and professional direction through a reflective quiz.',
};

export default function JobPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <div className="text-4xl mb-4">💼</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Career &amp; Work Fortune
        </h1>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Whether you&apos;re navigating office dynamics, weighing a career
          change, or preparing for an important interview, this reading taps
          into your current professional energy. It surfaces insights about
          motivation, boundaries, hidden strengths, and where today&apos;s
          opportunities might be waiting.
        </p>

        <div className="space-y-10 mb-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              What This Reading Covers
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Your workplace mood today — motivation, energy, and drive</li>
              <li>• How colleagues and managers perceive you (and whether that perception matches reality)</li>
              <li>• Boundary habits at work — where you give too much or hold back</li>
              <li>• Hidden strengths that may be underused in your current role</li>
              <li>• A personalised career insight shaped by your profile and zodiac energy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Two Reading Paths
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Career fortune splits into two focused paths — choose the one that
              matches where you are right now:
            </p>
          </section>
        </div>

        <JobSelectorClient />

        <div className="space-y-10 mt-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Example Insight
            </h2>
            <div className="bg-emerald-500/5 p-5 rounded-xl border border-emerald-500/15">
              <p className="text-emerald-400 font-semibold text-lg mb-2">
                &ldquo;A hidden opportunity lies in collaboration.&rdquo;
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Today, the professional winds are in your favour, particularly
                when it comes to teamwork. Reach out to a colleague you respect
                or consider a joint venture you&apos;ve been contemplating.
                Their perspective will illuminate the next step on your
                professional ladder, potentially leading to a breakthrough you
                couldn&apos;t achieve alone.
              </p>
            </div>
          </section>

          <section className="text-center pt-2">
            <p className="text-muted-foreground/60 text-xs">
              For entertainment and self-reflection. Not a substitute for professional career advice.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
