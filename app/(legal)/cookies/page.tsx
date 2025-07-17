//app/(legal)/cookies/page.tsx

export const metadata = {
  title: 'Cookie Policy | your-fortune',
  description:
    'Cookie policy explaining how we use cookies and your consent choices.',
};

export default function CookiesPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Cookie Policy</h1>
        <p className="text-gray-300 mb-8">
          <strong>Last updated:</strong> July&nbsp;11,&nbsp;2025
        </p>

        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed text-lg">
            We use two categories of cookies:
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Essential Cookies
            </h2>
            <p className="leading-relaxed">
              Technical cookies required for basic website functionality,
              including session management and server-side rendering. These are
              necessary for the website to function and cannot be switched off.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Advertising Cookies
            </h2>
            <p className="leading-relaxed">
              Currently not used. If introduced in the future, these would serve
              personalized ads <strong>only after</strong> explicit consent.
              These would help us keep the service free by showing relevant
              advertisements.
            </p>
          </section>

          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600 mt-6">
            <p className="text-gray-300 leading-relaxed">
              <strong>
                No analytics, tracking, or behavioral cookies are currently set
                by us.
              </strong>
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Your Control
            </h2>
            <p className="leading-relaxed">
              You can manage cookies through your browser settings. If
              advertising cookies are introduced, you&apos;ll be able to
              withdraw consent anytime via &quot;Cookie Settings&quot; in the
              footer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              More Information
            </h2>
            <p className="leading-relaxed">
              For more details about our data practices, please see our{' '}
              <a
                href="/privacy"
                className="text-purple-400 hover:text-purple-300"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p className="leading-relaxed">
              Questions about our cookie usage? Email us at{' '}
              <a
                href="mailto:wecreate5000@gmail.com"
                className="text-purple-400 hover:text-purple-300"
              >
                wecreate5000@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
