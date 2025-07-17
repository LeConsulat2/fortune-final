// app/(legal)/cookies/page.tsx - REVISED
export const metadata = {
  title: 'Cookie Policy | your-fortune',
  description:
    'Learn how your-fortune uses cookies, including technical cookies and future plans for advertising cookies with your consent.',
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
            Cookies are small text files stored on your device that help
            websites function properly and remember information between visits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Categories of Cookies We Use
          </h2>
          <p className="leading-relaxed text-lg text-gray-300 mb-4">
            We use two categories of cookies:
          </p>

          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30 mb-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Essential/Technical Cookies
            </h3>
            <p className="text-gray-300 leading-relaxed">
              These cookies are necessary for the website to function properly.
              They enable basic functionalities like session management and
              server-side rendering, and may include remembering your consent
              choice. These cannot be switched off as the site would not work
              without them.
            </p>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Advertising Cookies (Future)
            </h3>
            <p className="text-gray-300 leading-relaxed">
              **Currently, we do NOT use advertising cookies.** However, if we
              introduce advertising in the future (e.g., via Google AdSense),
              these cookies would be served to provide personalized ads. They
              would help us keep the service free by showing relevant
              advertisements. **These cookies will only be set AFTER you give
              explicit consent.**
            </p>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 mt-6">
            <p className="text-gray-300 leading-relaxed">
              <strong>
                We do NOT use any analytics or behavioural tracking cookies set
                by us.
              </strong>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. Your Control
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If we introduce advertising cookies, you will have clear control.
            You will be able to withdraw your consent at any time via a
            &quot;Cookie Settings&quot; option (e.g., in the footer). This will
            stop advertising cookies from loading on future page visits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. More Information
          </h2>
          <p className="text-gray-300 leading-relaxed">
            For more details about our data handling practices, please see our{' '}
            <a
              href="/privacy"
              className="text-purple-400 hover:text-purple-300"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. Managing cookies through your browser
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You can control cookies through your browser settings:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>Chrome:</strong> Settings → Privacy and Security →
              Cookies
            </li>
            <li>
              • <strong>Firefox:</strong> Settings → Privacy & Security →
              Cookies
            </li>
            <li>
              • <strong>Safari:</strong> Preferences → Privacy → Cookies
            </li>
            <li>
              • <strong>Edge:</strong> Settings → Cookies and Site Permissions
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            Note: Blocking essential cookies may affect site functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Data retention
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Essential technical cookies are temporary and expire when you close
            your browser or after a short period. We do not store personal data
            in cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">7. Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            Questions about our cookie usage? Email us at&nbsp;
            <a
              href="mailto:wecreate5000@gmail.com"
              className="text-purple-400 hover:text-purple-300"
            >
              wecreate5000@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            8. Updates to this policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We&apos;ll update this page if our cookie usage changes. The date at
            the top reflects the latest version.
          </p>
        </section>
      </div>
    </main>
  );
}
