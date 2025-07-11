export const metadata = {
  title: 'About Us | Fortune-Final',
  description:
    'Learn about Fortune-Final: mission, vision, privacy-first philosophy, and the team behind your daily AI-powered fortunes.',
};

export default function AboutPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-6">
          About Fortune-Final
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fortune-Final&apos;s mission is to deliver personalised, empowering
            guidance each day by combining artificial intelligence with
            time-honoured wisdom — all while safeguarding user privacy at every
            step.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Why We Exist
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Most astrology and fortune apps either recycle generic text or
            require invasive sign-ups that compromise privacy. We believed there
            had to be a better way — an experience that feels tailor-made yet
            keeps every byte of personal data under the user&apos;s control.
            Fortune-Final was born from that belief.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Core Values
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>Privacy First:</strong> Zero server-side storage, ever.
            </li>
            <li>
              • <strong>Inclusivity:</strong> Guidance for every culture,
              identity, and background.
            </li>
            <li>
              • <strong>Transparency:</strong> We explain exactly how, when, and
              why we process data.
            </li>
            <li>
              • <strong>Quality:</strong> Continuous iteration based on research
              and community feedback.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our application is built with Next.js&nbsp;15, React&nbsp;19, the
            Vercel AI SDK, Shadcn&nbsp;UI, Radix&nbsp;UI, MagicUI, and
            Tailwind&nbsp;CSS. We run privacy-preserving Edge Functions on
            Vercel&apos;s global network and leverage OpenAI&apos;s GPT-4o-mini
            model for content generation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We&apos;re a small remote team headquartered in Auckland,
            New&nbsp;Zealand, with contributors across the globe. Our collective
            expertise spans psychology, software engineering, creative writing,
            and user experience design — providing the perfect mix to craft
            authentic, empathetic fortunes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Roadmap</h2>
          <p className="text-gray-300 leading-relaxed">
            Looking ahead, we plan to add multi-language support, deeper tarot
            integrations, and optional account sync (opt-in only). We will also
            roll out Google AdSense in a privacy-respecting manner to keep the
            core experience free.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            How We Protect Your Privacy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We architected Fortune-Final to be <em>stateless by design</em>. All
            personal inputs live exclusively inside your browser&apos;s
            sessionStorage and are purged automatically. No external analytics,
            no tracking pixels, no hidden cookies — ever.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Sustainability &amp; Carbon Footprint
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Running on Vercel&apos;s green-optimised edge network means we
            minimise latency <em>and</em> emissions. We purchase certified
            carbon offsets for all compute minutes consumed by our AI endpoints.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Community Involvement
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We donate 1% of our annual revenue to mental-health nonprofits and
            invite users to vote on featured charities each quarter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Have feedback or want to collaborate? Email us at&nbsp;
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
