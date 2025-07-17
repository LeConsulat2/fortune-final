//app/(content)/faq/page.tsx

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
              Your fortune is shaped by the answers you provide—capturing your
              current mindset, emotions, and perspective. From there, a
              lightweight system interprets those patterns to offer reflections
              that feel timely and personal. Nothing is saved or sent—everything
              happens within your browser while the page is open.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Is Your-Fortune free?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Yes — Your-Fortune is completely free to use. We believe
              thoughtful, emotionally aware tools should be accessible to
              everyone, with no hidden costs or surprises.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Do you store my personal information?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              No. All of your responses live temporarily in your browser&apos;s
              session storage. Once you close or refresh the tab, everything
              disappears automatically.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Can I reset or delete my data?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Absolutely. Just refresh the page, close the tab, or clear your
              browser data to start fresh.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              How accurate are the fortunes?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              The fortunes are designed for reflection and emotional clarity—not
              prediction. While we aim for relevance and insight, they&apos;re
              not a substitute for professional advice.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Which browsers and devices do you support?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Your-Fortune works smoothly on all modern browsers (Chrome,
              Firefox, Safari, Edge), across both desktop and mobile devices. A
              stable internet connection and JavaScript support are required.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Will you translate fortunes into other languages?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Multi-language support is part of our roadmap. Currently, you can
              choose to receive fortunes in English, Korean, Japanese, Chinese,
              or Vietnamese at the end of the quiz.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              How can I report an issue or suggest a feature?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              We&apos;d love to hear from you. Email&nbsp;
              <a
                href="mailto:wecreate5000@gmail.com"
                className="text-purple-400 hover:text-purple-300"
              >
                wecreate5000@gmail.com
              </a>
              &nbsp;with your feedback or suggestions.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Can I share my fortune on social media?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Absolutely. You&apos;re welcome to share your fortune by taking a
              screenshot and posting it to your social platforms. Since nothing
              is stored, your result will be lost if you close or refresh the
              page—so if it resonates with you, save it while you can.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              Do you offer a dark-mode toggle?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              The app is designed dark-first to reduce eye strain and suit OLED
              displays. A light-mode toggle is planned and will be added soon in
              Settings.
            </p>
          </details>

          <details className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <summary className="cursor-pointer text-lg text-white font-semibold">
              How often do you update the prompts and models?
            </summary>
            <p className="mt-2 text-gray-300 leading-relaxed">
              We review prompts and tune the system monthly to keep the
              experience fresh, grounded, and emotionally relevant.
            </p>
          </details>
        </div>
      </div>
    </main>
  );
}
