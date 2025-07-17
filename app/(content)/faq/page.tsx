export const metadata = {
  title: 'FAQ | Your-Fortune',
  description:
    'Frequently asked questions about Your-Fortune and AI-generated fortunes.',
};

export default function FaqPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              How are my fortunes generated?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Your fortune is created based on your quiz responses and emotional
              profile, interpreted in real time using a stateless AI function.
              No personal information is stored — everything lives only in your
              browser while the tab is open.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Is Your-Fortune free?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Yes — Your-Fortune is free to use. We believe in making
              thoughtful, emotionally aware tools accessible to everyone,
              without barriers or hidden catches.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Do you store my personal information?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              No. All data resides in your browser&apos;s sessionStorage and
              disappears when you close or refresh the tab.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Can I reset or delete my data?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Absolutely. Simply refresh the page, close the tab, or clear your
              browser data to start over.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              How accurate are the fortunes?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Fortunes are intended for entertainment and self-reflection. While
              we strive for relevance, they should not replace professional
              advice.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Which browsers and devices do you support?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              your fortune works in all modern browsers (Chrome, Firefox,
              Safari, Edge) on desktop and mobile. A stable internet connection
              and JavaScript support are required.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Will you translate fortunes into other languages?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Multi-language support is on our roadmap. Stay tuned! At the end
              of the quiz, it is currently giving you the option to get the
              fortune insights in English, Korean, Japanese, Chinese and
              Vietnamese.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              How can I report an issue or suggest a feature?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Email&nbsp;
              <a
                href="mailto:support@example.com"
                className="text-purple-400 hover:text-purple-300"
              >
                wecreate5000@gmail.com
              </a>
              &nbsp;with details. We value community feedback.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Can I share my fortune on social media?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Yes — every fortune includes a &quot;Share&quot; button that
              copies a shareable image to your clipboard (no personal info
              included).
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Do you offer a dark-mode toggle?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              The app is designed dark-first for OLED friendliness. A light-mode
              option is coming soon in Settings.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              How often do you update the prompts and models?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              We review prompts monthly and refine the system regularly to
              ensure your fortunes stay thoughtful, relevant, and emotionally
              tuned.
            </p>
          </details>
        </div>
      </div>
    </main>
  );
}
