export const metadata = {
  title: 'Cookie Policy | your-fortune',
  description:
    'Learn how your-fortune uses cookies, including future plans for optional advertising cookies.',
};

export default function CookiesPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Cookie Policy</h1>
        <p className="text-gray-300 mb-8">
          <strong>Last updated:</strong> July&nbsp;11,&nbsp;2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. What are cookies?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Cookies are small text files stored on your device to help websites
            remember things — like your preferences or whether you’ve agreed to
            terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Does your-fortune use cookies?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By default, <strong>your-fortune does not use any cookies</strong>.
            Your experience works entirely without tracking or persistent
            storage. In the future, we may introduce optional cookies to support
            non-intrusive ads — but only after clear consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. Possible future cookies
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>Essential cookies:</strong> Used only to remember your
              cookie preferences (if consent is given).
            </li>
            <li>
              • <strong>Performance cookies:</strong> May be used to help us
              improve speed and responsiveness (not active now).
            </li>
            <li>
              • <strong>Advertising cookies:</strong> If introduced, they will
              power contextual ads and load <strong>only after opt-in</strong>.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. Managing your preferences
          </h2>
          <p className="text-gray-300 leading-relaxed">
            You can delete or block cookies anytime via your browser settings.
            If and when ads are added, a &quot;Cookie Settings&quot; button will
            appear so you can choose what — if anything — to allow.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            Have questions or concerns? Email us at&nbsp;
            <a
              href="mailto:privacy@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              privacy@example.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Updates to this policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We’ll update this page if anything changes. When we do, you’ll see a
            banner letting you know — and the date at the top will reflect the
            latest version.
          </p>
        </section>
      </div>
    </main>
  );
}
