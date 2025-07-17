//app/(legal)/cookies/page.tsx

export const metadata = {
  title: 'Cookie Policy | yourfortune.cool',
  description:
    'Cookie policy explaining how we use cookies, including Google AdSense, and your consent choices.',
};

export default function CookiesPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Cookie Policy</h1>
        <p className="text-gray-300 mb-8">
          <strong>Last updated:</strong> 15 July 2025
        </p>

        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed text-lg">
            We use the following categories of cookies:
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
              2. Advertising Cookies (Google AdSense)
            </h2>
            <p className="leading-relaxed">
              We use Google AdSense to display ads. Google and its partners use
              cookies such as <code>__Secure-3PAPISID</code>,{' '}
              <code>__Secure-3PSID</code>, <code>IDE</code>, and others to
              personalize ads and measure their effectiveness. These cookies may
              track your activity across this and other sites.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Personalized advertising:</strong> Cookies are used to
                show you more relevant ads based on your interests and previous
                visits.
              </li>
              <li>
                <strong>Opt-out:</strong> You can opt out of personalized ads in{' '}
                <a
                  href="https://adssettings.google.com"
                  className="text-orange-400 hover:text-orange-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>{' '}
                or at{' '}
                <a
                  href="https://www.aboutads.info"
                  className="text-orange-400 hover:text-orange-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.aboutads.info
                </a>
                .
              </li>
              <li>
                <strong>Consent:</strong> Advertising cookies are only set after
                you provide consent via our cookie banner.
              </li>
            </ul>
          </section>

          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600 mt-6">
            <p className="text-gray-300 leading-relaxed">
              <strong>
                No analytics, tracking, or behavioral cookies are set by us
                directly. Only Google AdSense cookies are used for advertising
                purposes.
              </strong>
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Your Control
            </h2>
            <p className="leading-relaxed">
              You can manage cookies through your browser settings. To change
              your advertising cookie preferences, use the &quot;Cookie
              Settings&quot; link in the footer.
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
                className="text-orange-400 hover:text-orange-300"
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
                className="text-orange-400 hover:text-orange-300"
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
