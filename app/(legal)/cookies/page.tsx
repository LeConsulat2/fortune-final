export const metadata = {
  title: 'Cookie Policy | your-fortune',
  description:
    'Learn how your-fortune uses cookies, including technical cookies and future plans.',
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
            function properly and remember information between visits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Current cookie usage
          </h2>
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30 mb-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Technical Cookies (Essential)
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our Next.js application may automatically create technical cookies
              necessary for basic functionality, such as session management and
              server-side rendering. These are essential for the site to work
              properly.
            </p>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              No Tracking Cookies
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We do not use any analytics, advertising, or tracking cookies.
              Your browsing behavior is not monitored or stored.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. Types of cookies we may use
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600 text-sm">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-600 p-3 text-left">
                    Cookie Type
                  </th>
                  <th className="border border-gray-600 p-3 text-left">
                    Purpose
                  </th>
                  <th className="border border-gray-600 p-3 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 p-3">
                    Technical/Essential
                  </td>
                  <td className="border border-gray-600 p-3">
                    Site functionality, session management
                  </td>
                  <td className="border border-gray-600 p-3">
                    <span className="text-green-400">Active</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">Analytics</td>
                  <td className="border border-gray-600 p-3">
                    Usage statistics, performance
                  </td>
                  <td className="border border-gray-600 p-3">
                    <span className="text-red-400">Not used</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">Advertising</td>
                  <td className="border border-gray-600 p-3">
                    Targeted ads, preferences
                  </td>
                  <td className="border border-gray-600 p-3">
                    <span className="text-yellow-400">
                      Future (opt-in only)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. Future advertising cookies
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If we introduce advertising in the future, any advertising cookies
            will only be set after you give explicit consent. You&apos;ll see a
            clear consent banner and can choose to accept or decline.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. Managing cookies
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
            Technical cookies are temporary and expire when you close your
            browser or after a short period. We do not store personal data in
            cookies.
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
