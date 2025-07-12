export const metadata = {
  title: 'About Us | your-fortune',
  description:
    'Learn about your-fortune: mission, vision, privacy-first philosophy, and the team behind your daily AI-powered fortunes.',
};

export default function AboutPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-6">
          About your-fortune
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            your-fortune exists to offer thoughtful, personalized guidance
            through a blend of language intelligence, quiet reflection, and
            digital design — all while honoring your privacy at every step.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Why We Exist
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Most fortune or astrology apps either feel generic or ask for far
            too much personal access. We believed there had to be a calmer, more
            intentional alternative — one that feels meaningful without
            compromising your boundaries. your-fortune was built on that
            principle.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Core Values
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>Privacy First:</strong> No accounts. No tracking. No
              storage.
            </li>
            <li>
              • <strong>Inclusivity:</strong> Built for all backgrounds,
              identities, and belief systems.
            </li>
            <li>
              • <strong>Transparency:</strong> Clear about how everything works,
              always.
            </li>
            <li>
              • <strong>Depth:</strong> Emotional realism over fluff — we aim
              for meaningful resonance.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-gray-300 leading-relaxed">
            your-fortune is built with Next.js&nbsp;15, React&nbsp;19,
            Tailwind&nbsp;CSS, Shadcn&nbsp;UI, MagicUI, and Radix&nbsp;UI. Our
            stateless Edge Functions process everything in-memory with zero
            backend storage. We continuously refine our language engine to keep
            responses thoughtful and emotionally grounded.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We&apos;re a small, remote team based in Auckland, New Zealand, with
            collaborators around the globe. Our combined skills span psychology,
            software development, creative writing, and user experience — all
            shaped into a single intention: helping people feel a little more
            seen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Roadmap</h2>
          <p className="text-gray-300 leading-relaxed">
            Our future includes multi-language support, tarot mode, optional
            journaling tools, and gently suggested upgrades — all opt-in, never
            required. We&apos;re committed to keeping the core experience free,
            human, and dignified.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            How We Protect Your Privacy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            your-fortune is stateless by design. Your answers live only inside
            your browser while you&apos;re here — not on our servers. No
            analytics scripts. No pixels. No hidden data collection. When you
            close the tab, it all disappears.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Sustainability
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We run on green-optimized infrastructure and purchase certified
            carbon offsets for our minimal compute usage. Performance and
            conscience — both matter.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Community Involvement
          </h2>
          <p className="text-gray-300 leading-relaxed">
            1% of any future revenue will go to nonprofits supporting emotional
            health and resilience. We’ll let our community vote on where it
            goes, every quarter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Questions? Thoughts? Want to collaborate? Email us anytime at&nbsp;
            <a
              href="mailto:fortune@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              fortune@example.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
