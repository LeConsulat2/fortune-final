import Link from 'next/link';

export const metadata = {
  title: 'Your-Fortune User Guide 2025 | Your Daily Fortune Experience',
  description:
    'Complete guide to using Your-Fortune for personalized daily fortunes. Learn about privacy, category selection, and maximizing your reflective experience.',
};

export default function FortuneUserGuidePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          User Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Your complete guide to making the most of your personalized daily
          fortune experience. Inspired by traditional practices and refined with
          modern insights, Your-Fortune helps you reflect with clarity — all
          while keeping your data private and secure.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              What Makes Your-Fortune Unique
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Your-Fortune offers more than generic horoscopes. By blending
              classic wisdom with your unique profile and responses, it crafts
              personally relevant guidance across different areas of life. Each
              message is shaped through a carefully structured system that
              reflects your emotional and situational context.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              And because privacy is core, your profile stays only in your own
              browser — no server accounts, no tracking, and no data on our end.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Getting Started: The Three-Step Setup
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Getting started is simple and lightweight. In just three steps, we
              learn the essentials about you so each reading feels grounded and relevant.
            </p>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Step 1 — Personal Identity:</strong> Your name (and optional gender) adjusts tone and address.
                </li>
                <li>
                  <strong className="text-foreground">Step 2 — Birth Information:</strong> Your birth date provides an astrological frame.
                </li>
                <li>
                  <strong className="text-foreground">Step 3 — Life Context:</strong> Your occupation (optional) helps tailor work- or balance-focused insights.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Fortune Categories
            </h2>
            <div className="space-y-3">
              {[
                { name: 'General Fortune', desc: 'Your overall daily compass — weaving together emotions, decisions, and intentions into a balanced snapshot for reflection.', color: 'primary' },
                { name: 'Career Fortune', desc: 'Insights on work, ambition, teamwork, and opportunity. Ideal for navigating challenges or planning your next step.', color: 'emerald' },
                { name: 'Love & Relationships', desc: 'Emotional clarity around romance, friendship, and connections — helpful when you seek understanding or deeper bonds.', color: 'red' },
                { name: 'Financial Fortune', desc: 'Money-mindset reflections on spending, saving, and opportunity windows to guide your financial decisions.', color: 'amber' },
                { name: 'Mental Health & Wellness', desc: 'Grounding prompts for clarity, emotional rhythm, and self-care to support your inner balance.', color: 'blue' },
                { name: 'Composure & Balance', desc: 'Calming guidance for high-stress moments — perfect when you need to recenter and find stability.', color: 'violet' },
              ].map((cat) => (
                <div key={cat.name} className={`p-5 rounded-xl bg-${cat.color}-500/5 border border-${cat.color}-500/10`}>
                  <h3 className="text-base font-semibold text-foreground mb-1">{cat.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{cat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              The Interactive Quiz
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After you pick a category, a short quiz captures your current
              mindset. Honest, in-the-moment answers help the system
              generate reflections that truly resonate.
            </p>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <h3 className="text-base font-semibold text-foreground mb-3">Best Practices</h3>
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li><strong className="text-foreground">Be honest.</strong> Reflect what you feel now, not what you wish to feel.</li>
                <li><strong className="text-foreground">Stay present.</strong> The focus is on today, not yesterday.</li>
                <li><strong className="text-foreground">Trust your first instinct.</strong> It usually yields the most authentic insight.</li>
                <li><strong className="text-foreground">Explore freely.</strong> Switch categories to uncover different angles.</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Privacy & Data Protection
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Privacy is baked into every experience:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-emerald-500/5 p-5 rounded-xl border border-emerald-500/10">
                <h3 className="text-base font-semibold text-emerald-400 mb-2">What We Do</h3>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  <li>• Save your profile in your browser&apos;s localStorage only</li>
                  <li>• Keep fortune results in sessionStorage (clears on tab close)</li>
                  <li>• Use stateless, server-side processing</li>
                  <li>• Encrypt all data transfers via HTTPS</li>
                </ul>
              </div>
              <div className="bg-red-500/5 p-5 rounded-xl border border-red-500/10">
                <h3 className="text-base font-semibold text-red-400 mb-2">What We Don&apos;t Do</h3>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  <li>• Store any data on our servers</li>
                  <li>• Create accounts or build server-side profiles</li>
                  <li>• Track, share, or sell your inputs</li>
                  <li>• Retain any history of your fortunes</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Getting the Most From Your Fortunes
            </h2>
            <div className="space-y-3">
              <div className="bg-blue-500/5 p-5 rounded-xl border border-blue-500/10">
                <h3 className="text-base font-semibold text-foreground mb-1">Timing Your Requests</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Reflective moments — mornings for intention, evenings for closure — often yield the richest insights.
                </p>
              </div>
              <div className="bg-amber-500/5 p-5 rounded-xl border border-amber-500/10">
                <h3 className="text-base font-semibold text-foreground mb-1">Interpreting Results</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Think of your fortune as a mirror, not a predictor. Let it spark self-reflection and new perspectives.
                </p>
              </div>
              <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
                <h3 className="text-base font-semibold text-foreground mb-1">Multiple Categories</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Life shifts — switch categories throughout the week to stay attuned to changing needs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Technical Requirements
            </h2>
            <div className="bg-muted/20 p-5 rounded-xl border border-border mb-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Modern browser (Chrome, Firefox, Safari, Edge)</li>
                <li>• JavaScript enabled</li>
                <li>• Internet connection for prompt processing</li>
                <li>• Session storage enabled</li>
              </ul>
            </div>
            <div className="bg-amber-500/5 p-5 rounded-xl border border-amber-500/10">
              <h3 className="text-base font-semibold text-foreground mb-2">Common Issues</h3>
              <ul className="space-y-1.5 text-muted-foreground text-sm">
                <li>• <strong className="text-foreground">Fortune not loading:</strong> Check connection and refresh</li>
                <li>• <strong className="text-foreground">Quiz not saving:</strong> Ensure JavaScript is on</li>
                <li>• <strong className="text-foreground">Need a reset:</strong> Refresh or reopen the tab</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Ready to Discover Your Fortune?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Begin your journey today. Choose a category, answer honestly, and
              receive a reflection crafted just for this moment.
            </p>
            <div className="text-center">
              <Link
                href="/start/step-1-personal-info"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Start Your Fortune Journey
              </Link>
            </div>
          </section>

          <section>
            <p className="text-muted-foreground/60 text-sm leading-relaxed">
              Your-Fortune is designed for self-reflection and light
              entertainment. It is not a substitute for professional advice in
              medical, legal, financial, or other serious matters.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
