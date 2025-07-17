//app/(content)/use-guide/page.tsx

export const metadata = {
  title: 'Your-Fortune User Guide 2025 | Your Daily Fortune Experience',
  description:
    'Complete guide to using Your‑Fortune for personalized daily fortunes. Learn about privacy, category selection, and maximizing your reflective experience.',
};

export default function FortuneUserGuidePage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        {/* — Intro */}
        <h1 className="text-4xl font-bold text-white mb-6">
          Your‑Fortune User Guide 2025
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Your complete guide to making the most of your personalized daily
          fortune experience. Inspired by traditional practices and refined with
          modern insights, Your‑Fortune helps you reflect with clarity — all
          while keeping your data private and secure.
        </p>

        {/* — What Makes It Unique */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What Makes Your‑Fortune Unique
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your‑Fortune offers more than generic horoscopes. By blending
            classic wisdom with your unique profile and responses, it crafts
            personally relevant guidance across different areas of life. Each
            message is shaped through a carefully structured system that
            reflects your emotional and situational context.
          </p>
          <p className="text-gray-300 leading-relaxed">
            And because privacy is core, everything happens in your browser — no
            tracking, no accounts, and no data left behind once you close your
            tab.
          </p>
        </section>

        {/* — Three‑Step Setup */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Getting Started: The Three‑Step Setup
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Getting started is simple and lightweight. In just three steps, we
            learn the essentials about you and your current focus so each
            reading feels grounded and relevant.
          </p>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-600 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              The Setup Process
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>Step 1 – Personal Identity:</strong> Your name (and
                optional gender) adjusts tone and address.
              </li>
              <li>
                <strong>Step 2 – Birth Information:</strong> Your birth date
                provides an astrological frame if you choose.
              </li>
              <li>
                <strong>Step 3 – Life Context:</strong> Your occupation
                (optional) helps tailor work‑ or balance‑focused insights.
              </li>
            </ul>
          </div>
        </section>

        {/* — Categories */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Understanding Fortune Categories
          </h2>
          <div className="space-y-6">
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">
                General Fortune
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your overall daily compass — weaving together emotions,
                decisions, and intentions into a balanced snapshot for
                reflection and motivation.
              </p>
            </div>
            <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Career Fortune
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Insights on work, ambition, teamwork, and opportunity. Ideal for
                navigating challenges or planning your next step.
              </p>
            </div>
            <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/30">
              <h3 className="text-lg font-semibold text-pink-400 mb-2">
                Love & Relationships
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Emotional clarity around romance, friendship, and connections —
                helpful when you seek understanding, healing, or deeper bonds.
              </p>
            </div>
            <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                Financial Fortune
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Money‑mindset reflections on spending, saving, and opportunity
                windows to guide your financial decisions.
              </p>
            </div>
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Mental Health & Wellness
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Grounding prompts for clarity, emotional rhythm, and self‑care
                to support your inner balance.
              </p>
            </div>
            <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-500/30">
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                Composure & Balance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Calming guidance for high‑stress moments — perfect when you need
                to recenter and find stability.
              </p>
            </div>
          </div>
        </section>

        {/* — Quiz Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            The Interactive Quiz Experience
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            After you pick a category, a short quiz captures your current
            mindset and concerns. Honest, in‑the‑moment answers help the system
            generate reflections that truly resonate.
          </p>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-600 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Quiz Best Practices
            </h3>
            <ol className="space-y-2 text-gray-300">
              <li>
                <strong>Be honest.</strong> Reflect what you feel now, not what
                you wish to feel.
              </li>
              <li>
                <strong>Stay present.</strong> The focus is on today’s state,
                not yesterday’s history.
              </li>
              <li>
                <strong>Trust your first instinct.</strong> It usually yields
                the most authentic insight.
              </li>
              <li>
                <strong>Explore freely.</strong> Switch categories to uncover
                different angles of your life.
              </li>
            </ol>
          </div>
        </section>

        {/* — Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Privacy & Data Protection
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Privacy is baked into every experience. Here’s what we do — and what
            we don’t:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                What We Do
              </h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Store data only in your browser session</li>
                <li>• Delete everything when you close or refresh the tab</li>
                <li>• Use ephemeral, stateless processing</li>
                <li>• Encrypt all data transfers</li>
              </ul>
            </div>
            <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-2">
                What We Don’t Do
              </h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Store data on servers</li>
                <li>• Create accounts or build profiles</li>
                <li>• Track or share your inputs</li>
                <li>• Retain any history of your fortunes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* — Optimization Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Getting the Most From Your Fortunes
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Timing Your Requests
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Reflective moments—mornings for intention, evenings for
                closure—often yield the richest insights.
              </p>
            </div>
            <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Interpreting Results
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Think of your fortune as a mirror, not a predictor. Let it spark
                self‑reflection and new perspectives.
              </p>
            </div>
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">
                Multiple Categories
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Life shifts—switch categories throughout the week to stay
                attuned to changing needs.
              </p>
            </div>
          </div>
        </section>

        {/* — Technical & Troubleshooting */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Technical Requirements & Troubleshooting
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your‑Fortune is lightweight and browser‑friendly. Here’s what you’ll
            need:
          </p>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-600 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              System Requirements
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Modern browser (Chrome, Firefox, Safari, Edge)</li>
              <li>• JavaScript enabled</li>
              <li>• Internet connection for prompt processing</li>
              <li>• Session storage enabled</li>
            </ul>
          </div>
          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Common Issues & Fixes
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>
                • <strong>Fortune not loading:</strong> Check connection and
                refresh
              </li>
              <li>
                • <strong>Quiz not saving:</strong> Ensure JavaScript is on
              </li>
              <li>
                • <strong>Need a reset:</strong> Refresh or reopen the tab
              </li>
              <li>
                • <strong>Mobile layout quirks:</strong> Try desktop for complex
                quizzes
              </li>
            </ul>
          </div>
        </section>

        {/* — AI Mechanics */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            How It Works Behind the Scenes
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Behind the scenes, Your‑Fortune interprets your quiz responses
            through thoughtfully designed prompts, producing reflections that
            feel both personal and grounded — all without ever storing your
            data.
          </p>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-600 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Process Overview
            </h3>
            <ol className="space-y-2 text-gray-300">
              <li>
                <strong>Profile Build:</strong> Birth date, zodiac, occupation
              </li>
              <li>
                <strong>Response Analysis:</strong> Mindset, concerns, goals
              </li>
              <li>
                <strong>Category Logic:</strong> Applies tailored prompt
                framework
              </li>
              <li>
                <strong>Fortune Generation:</strong> Context‑aware,
                human‑sounding insight
              </li>
              <li>
                <strong>Delivery:</strong> Clear, actionable language presented
                in‑browser
              </li>
            </ol>
          </div>
        </section>

        {/* — Call to Action */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ready to Discover Your Fortune?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Begin your journey today. Choose a category, answer honestly, and
            receive a reflection crafted just for this moment.
          </p>
          <div className="text-center">
            <a
              href="/start/step-1-personal-info"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Fortune Journey
            </a>
          </div>
        </section>

        {/* — Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Important Disclaimer
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Your‑Fortune is designed for self‑reflection and light
            entertainment. It is not a substitute for professional advice in
            medical, legal, financial, or other serious matters. Always consult
            a qualified expert for important life decisions.
          </p>
        </section>
      </div>
    </main>
  );
}
